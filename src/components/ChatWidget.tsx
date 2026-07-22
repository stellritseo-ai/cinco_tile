import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Mail, ChevronDown, Sparkles, ShieldCheck } from "lucide-react";
import { io, Socket } from "socket.io-client";
import {
  createChatSession,
  sendChatMessage,
  getChatSessionById,
} from "@/lib/leads-store";
import logoImg from "@/assets/cincologo.png";

const RELAY_URL =
  (import.meta.env as any).VITE_CHAT_RELAY_URL ||
  (typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
    ? "http://localhost:3001"
    : "");

type ChatMessage = {
  id: string;
  sender: "client" | "admin";
  text: string;
  timestamp: string;
};

type ChatStep = "closed" | "form" | "chat";

export function ChatWidget() {
  const [step, setStep] = useState<ChatStep>("closed");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (step === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, step]);

  // Reset unread counter on open
  useEffect(() => {
    if (step !== "closed") {
      setUnreadCount(0);
    }
  }, [step]);

  // Socket connection handler
  const connectSocket = useCallback((sid: string, name: string) => {
    if (!RELAY_URL) return;

    try {
      const socket = io(RELAY_URL, { transports: ["websocket", "polling"] });
      socketRef.current = socket;

      socket.on("connect", () => {
        setIsOnline(true);
        socket.emit("visitor-connect", { sessionId: sid, name });
      });

      socket.on("disconnect", () => {
        setIsOnline(false);
      });

      socket.on("receive-message", (msg: ChatMessage) => {
        if (msg.sender === "admin") {
          setMessages((prev) => {
            const exists = prev.some((m) => m.id === msg.id);
            if (exists) return prev;
            return [...prev, msg];
          });
          if (step === "closed") {
            setUnreadCount((c) => c + 1);
          }
          setIsTyping(false);
        }
      });
    } catch {
      // Fall back to polling silently
    }
  }, [step]);

  // 2-second database polling fallback
  useEffect(() => {
    if (!sessionId || step === "closed") {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      return;
    }

    const poll = async () => {
      try {
        const session = await getChatSessionById(sessionId);
        if (session && session.messages) {
          setMessages((prev) => {
            const newAdminMsgs = session.messages.filter(
              (m: any) => m.sender === "admin" && !prev.some((p) => p.id === m.id)
            );
            if (newAdminMsgs.length > 0 && step === "closed") {
              setUnreadCount((c) => c + newAdminMsgs.length);
            }
            if (session.messages.length !== prev.length) {
              return session.messages as ChatMessage[];
            }
            return prev;
          });
        }
      } catch {
        // silent
      }
    };

    poll();
    pollIntervalRef.current = setInterval(poll, 2000);

    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [sessionId, step]);

  useEffect(() => {
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const handleOpenChat = () => {
    if (step === "closed") {
      if (sessionId) {
        setStep("chat");
      } else {
        setStep("form");
      }
    }
  };

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !emailInput.trim()) return;

    const name = nameInput.trim();
    const email = emailInput.trim();
    setVisitorName(name);
    setVisitorEmail(email);

    try {
      const session = await createChatSession(name, "Houston", email, undefined);
      setSessionId(session.id);
      setMessages((session.messages || []) as ChatMessage[]);
      setStep("chat");
      connectSocket(session.id, name);
    } catch (err) {
      console.error("[ChatWidget] Failed to create session:", err);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionId) return;

    const text = inputText.trim();
    setInputText("");

    const optimisticMsg: ChatMessage = {
      id: `client-${Date.now()}`,
      sender: "client",
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, optimisticMsg]);

    try {
      await sendChatMessage(sessionId, "client", text);
      if (socketRef.current) {
        socketRef.current.emit("send-message", {
          ...optimisticMsg,
          sessionId,
        });
      }
    } catch (err) {
      console.error("[ChatWidget] Failed to send message:", err);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <AnimatePresence>
          {step === "closed" && (
            <motion.button
              key="fab"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleOpenChat}
              className="relative group flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#0077b6] via-[#006094] to-[#004b77] text-white shadow-[0_10px_35px_rgba(0,119,182,0.45)] hover:shadow-[0_14px_45px_rgba(0,119,182,0.6)] transition-all duration-300 border border-white/20 cursor-pointer outline-none"
              aria-label="Chat with Cinco Services"
            >
              {/* Logo Badge */}
              <div className="relative w-8 h-8 rounded-full bg-white p-0.5 shadow-inner overflow-hidden shrink-0 flex items-center justify-center">
                <img src={logoImg} alt="Cinco Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col text-left pr-1">
                <span className="text-[13px] font-bold tracking-tight text-white leading-tight flex items-center gap-1.5">
                  Live Chat
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                </span>
                <span className="text-[10px] text-white/80 font-medium">Ask a specialist</span>
              </div>

              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#d62828] text-white text-[10px] font-extrabold shadow-md border-2 border-white animate-bounce">
                  {unreadCount}
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Main Chat Panel */}
      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[9999] w-[370px] max-w-[calc(100vw-28px)] rounded-[24px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.22)] border border-slate-200/80 bg-white flex flex-col font-sans"
            style={{ height: step === "form" ? "auto" : "510px" }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#0077b6] via-[#006094] to-[#004b77] px-5 py-4 flex items-center justify-between text-white shrink-0 shadow-md">
              {/* Subtle background grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-white p-1 shadow-md shrink-0 flex items-center justify-center">
                  <img src={logoImg} alt="Cinco Services" className="w-full h-full object-contain" />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-white shadow-sm" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-[15px] tracking-tight text-white leading-tight">Cinco Services</h3>
                    <ShieldCheck className="w-4 h-4 text-[#7dd3fc]" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-[11px] text-white/80 font-medium">
                      {isOnline ? "Online · Quick Responses" : "Leave a Message"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-1">
                <button
                  onClick={() => setStep("closed")}
                  className="w-8 h-8 rounded-full hover:bg-white/15 active:scale-95 flex items-center justify-center text-white/80 hover:text-white transition-all border-none bg-transparent cursor-pointer"
                  aria-label="Minimize"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setStep("closed")}
                  className="w-8 h-8 rounded-full hover:bg-white/15 active:scale-95 flex items-center justify-center text-white/80 hover:text-white transition-all border-none bg-transparent cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step 1: Registration Form */}
            {step === "form" && (
              <div className="bg-slate-50/50 p-6 flex flex-col gap-5">
                <div className="text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0077b6]/10 text-[#0077b6] text-[11px] font-bold tracking-wide uppercase mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Instant Support</span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-[17px] tracking-tight">Start a Chat</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed mt-1">
                    Please introduce yourself to connect with a Houston remodeling specialist.
                  </p>
                </div>

                <form onSubmit={handleStartChat} className="flex flex-col gap-3.5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Your Full Name *"
                      required
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/15 transition-all shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Your Email Address *"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/15 transition-all shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!nameInput.trim() || !emailInput.trim()}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0077b6] to-[#005f8e] hover:from-[#006094] hover:to-[#004b77] disabled:from-slate-300 disabled:to-slate-300 text-white font-bold text-[14px] shadow-[0_4px_14px_rgba(0,119,182,0.3)] hover:shadow-lg transition-all duration-200 border-none cursor-pointer mt-1 active:scale-[0.98]"
                  >
                    Start Live Chat →
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 pt-1 border-t border-slate-200/60 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your info is safe & encrypted</span>
                </div>
              </div>
            )}

            {/* Step 2: Chat Conversation */}
            {step === "chat" && (
              <>
                {/* Messages Feed */}
                <div className="flex-1 bg-slate-50/70 overflow-y-auto px-4 py-4 flex flex-col gap-3.5">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-2 ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.sender === "admin" && (
                        <div className="w-7 h-7 rounded-full bg-white p-0.5 border border-slate-200 shadow-sm shrink-0 flex items-center justify-center mb-0.5">
                          <img src={logoImg} alt="Cinco" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                          msg.sender === "client"
                            ? "bg-gradient-to-r from-[#0077b6] to-[#005f8e] text-white rounded-br-xs"
                            : "bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs"
                        }`}
                      >
                        <p className="m-0 whitespace-pre-wrap break-words">{msg.text}</p>
                        <span
                          className={`block text-[9.5px] mt-1 text-right font-medium ${
                            msg.sender === "client" ? "text-white/70" : "text-slate-400"
                          }`}
                        >
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white p-0.5 border border-slate-200 shadow-sm shrink-0 flex items-center justify-center">
                        <img src={logoImg} alt="Cinco" className="w-full h-full object-contain" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-bl-xs px-4 py-3 border border-slate-200/90 shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input Box */}
                <form
                  onSubmit={handleSendMessage}
                  className="bg-white border-t border-slate-200/80 p-3.5 flex items-center gap-2 shrink-0 shadow-inner"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100/80 border border-slate-200 text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0077b6] focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0077b6] to-[#005f8e] hover:from-[#006094] hover:to-[#004b77] disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 text-white flex items-center justify-center transition-all border-none cursor-pointer shrink-0 shadow-md active:scale-95"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
