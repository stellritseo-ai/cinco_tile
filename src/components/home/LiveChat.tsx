import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import logoImg from "@/assets/cincologo.png";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! 👋 How can we help you today with your home remodeling, roofing, or construction project?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Hide badge after opening once
  useEffect(() => {
    if (isOpen) {
      setShowBadge(false);
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Dynamic responses based on content
    let botReplyText = "Thank you for reaching out! To get back to you with details, please leave your name and phone number or call us directly at (832) 406-2716.";
    const lowerText = text.toLowerCase();

    if (lowerText.includes("estimate") || lowerText.includes("remodel") || lowerText.includes("quote")) {
      botReplyText = "We would love to provide a free estimate! Please reply with your name, phone number, and a brief summary of the remodeling project (e.g., kitchen, bathroom, tile floor).";
    } else if (lowerText.includes("construct") || lowerText.includes("framing") || lowerText.includes("build")) {
      botReplyText = "We specialize in custom construction and framing! Please share your project location and contact number so our estimator can reach out.";
    } else if (lowerText.includes("phone") || lowerText.includes("call") || lowerText.includes("callback") || /\b\d{10}\b|(?:\d{3}-){2}\d{4}|\(\d{3}\)\s*\d{3}-\d{4}/.test(text)) {
      botReplyText = "Got it! We've received your phone number and request. One of our remodeling specialists will call or text you shortly.";
    } else if (lowerText.includes("roof") || lowerText.includes("leak") || lowerText.includes("shingle")) {
      botReplyText = "We offer professional roofing services and roof replacements. Please share your phone number and address so we can schedule an inspection.";
    }

    // Save to Supabase
    try {
      await supabase.from("contact_messages").insert({
        name: "Live Chat User",
        email: "chat-user@cincoservices.com",
        phone: null,
        message: `[Live Chat Log]\nUser: ${text}\nBot Response: ${botReplyText}`,
      });
    } catch (err) {
      console.error("Error saving live chat message:", err);
    }

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botReplyText,
          timestamp: new Date(),
        },
      ]);
    }, 1200);
  };

  const handleQuickAction = (actionText: string) => {
    handleSend(actionText);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-[998] font-sans">
      <AnimatePresence>
        {/* Chat Widget Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-[calc(100vw-24px)] max-w-[340px] sm:w-[380px] h-[480px] sm:h-[520px] bg-white rounded-[20px] sm:rounded-[24px] shadow-2xl flex flex-col border border-gray-100 overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#111827] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center border border-white/20">
                  <img src={logoImg} alt="Cinco Services Logo" className="w-8 h-8 object-contain" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#111827]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[15px] tracking-wide text-white leading-tight">Cinco Services Support</h4>
                  <p className="text-[11px] text-green-400 font-semibold flex items-center gap-1">Online & ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-[18px] p-3 text-[14px] leading-relaxed shadow-sm font-medium ${
                      m.sender === "user"
                        ? "bg-[#0077b6] text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-400 border border-gray-100 rounded-[18px] rounded-tl-none p-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={feedEndRef} />
            </div>

            {/* Quick Actions (Show when only welcome message is present or as helper) */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 bg-gray-50/50 flex flex-col gap-1.5 border-t border-gray-100/50">
                <button
                  onClick={() => handleQuickAction("🔨 Get a Remodeling Estimate")}
                  className="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl px-3.5 py-2 text-[12px] font-bold transition-all shadow-sm flex items-center justify-between"
                >
                  <span>🔨 Get a Remodeling Estimate</span>
                  <span className="text-gray-400">&rarr;</span>
                </button>
                <button
                  onClick={() => handleQuickAction("🏠 Ask about Custom Construction")}
                  className="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl px-3.5 py-2 text-[12px] font-bold transition-all shadow-sm flex items-center justify-between"
                >
                  <span>🏠 Ask about Custom Construction</span>
                  <span className="text-gray-400">&rarr;</span>
                </button>
                <button
                  onClick={() => handleQuickAction("📞 Request a Callback")}
                  className="w-full text-left bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl px-3.5 py-2 text-[12px] font-bold transition-all shadow-sm flex items-center justify-between"
                >
                  <span>📞 Request a Callback</span>
                  <span className="text-gray-400">&rarr;</span>
                </button>
              </div>
            )}

            {/* Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 border-t border-gray-100 flex items-center gap-2 bg-white"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#d62828] hover:bg-[#b52020] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_4px_10px_rgba(214,40,40,0.3)] shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="relative flex items-center justify-end">
        {/* Pulsating Badge Tooltip */}
        <AnimatePresence>
          {showBadge && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute right-16 bg-[#0077b6] text-white text-[12px] font-bold py-1.5 px-3.5 rounded-full shadow-lg whitespace-nowrap mr-2 flex items-center gap-1.5 border border-sky-400"
            >
              <span>Need help? Chat now!</span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 border border-white/10 ${
            isOpen
              ? "bg-[#111827] rotate-90"
              : "bg-[#d62828] hover:bg-[#b52020]"
          }`}
          aria-label="Toggle live chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};
