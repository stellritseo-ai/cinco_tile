import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, ArrowRight, ShieldAlert, ShieldCheck, Star } from "lucide-react";
import { toast } from "sonner";
import { loginAdminFn, verifyAdminTokenFn } from "@/lib/api/db.functions";
import logo from "@/assets/cincologo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Cinco Tile — Admin Portal Access" },
      { name: "description", content: "Authenticate to access Cinco Tile business console." }
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);
  const [showPw, setShowPw] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("cinco-admin-token");
      if (token) {
        try {
          const res = await verifyAdminTokenFn({ data: { token } });
          if (res.valid) {
            navigate({ to: "/dashboard" });
            return;
          }
        } catch (e) {
          console.error("Auto-auth check failed:", e);
        }
      }
      setCheckingSession(false);
    };
    checkToken();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await loginAdminFn({ data: { username, password } });
      if (res.success && res.token) {
        localStorage.setItem("cinco-admin-token", res.token);
        toast.success("Welcome back to Cinco's Office!");
        navigate({ to: "/dashboard" });
      } else {
        setErrorMsg(res.error || "Failed to authenticate.");
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setErrorMsg(err.message || "Invalid username or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-2 border-[#0077b6]/30 border-t-[#0077b6] animate-spin" />
            <div className="absolute inset-2 rounded-full border border-white/10 border-t-white/40 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
          </div>
          <p className="text-[11px] text-slate-400 font-medium tracking-[0.22em] uppercase">Cinco's Office — Verifying Session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] flex overflow-hidden font-sans relative">

      {/* ── ANIMATED BACKGROUND GRID ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0, 119, 182, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 119, 182, 0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }} />
        {/* Glow blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0077b6]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0077b6]/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-slate-700/20 blur-[80px]" />
      </div>

      {/* ── LEFT BRAND PANEL (hidden on mobile) ── */}
      <div className="hidden lg:flex flex-col justify-between w-[52%] relative p-12 xl:p-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group w-fit">
          <div className="h-11 w-11 rounded-xl bg-white/8 border border-white/12 p-1.5 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:bg-white/12 transition-all">
            <img src={logo} alt="Cinco Tile" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.18em] text-[#0077b6] uppercase">Cinco Tile</p>
            <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Admin Portal</p>
          </div>
        </a>

        {/* Hero copy */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0077b6]/10 border border-[#0077b6]/20 px-3 py-1.5 rounded-full mb-6">
              <ShieldCheck className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider">Secured & Encrypted</span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Cinco's &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#38bdf8]">Office</span>
            </h1>
            <p className="text-slate-400 text-sm font-light leading-relaxed mt-5 max-w-sm">
              Your all-in-one business management portal. Manage leads, reviews, gallery, live chat, emails and portal settings.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            {["Lead Manager", "Reviews", "Live Chat", "Gallery", "Web Emails", "Portal Settings"].map((f) => (
              <span key={f} className="flex items-center gap-1.5 bg-white/5 border border-white/8 text-slate-400 text-[10px] font-medium px-3 py-1.5 rounded-full">
                <Star className="h-2.5 w-2.5 text-[#0077b6] fill-[#0077b6]" />
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom tag */}
        <p className="text-[10px] text-slate-600 font-medium">
          © 2026 Cinco Tile · Powered by{" "}
          <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="text-[#0077b6] hover:text-[#38bdf8] transition-colors">
            StellR IT LLC
          </a>
        </p>
      </div>

      {/* ── RIGHT LOGIN PANEL ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 relative z-10 min-h-screen lg:min-h-0">

        {/* Mobile: back to site */}
        <a href="/" className="lg:hidden absolute top-6 left-6 text-[10px] text-slate-500 hover:text-white uppercase font-bold tracking-widest transition-colors">
          ← Site
        </a>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px]"
        >
          {/* Card */}
          <div className="bg-[#111C2E]/80 backdrop-blur-xl border border-white/8 rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] p-8 sm:p-10">

            {/* Mobile logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-white/8 border border-white/10 p-1.5 flex items-center justify-center">
                <img src={logo} alt="Cinco Tile" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#0077b6] uppercase">Cinco Tile</p>
                <p className="text-[9px] text-slate-500 font-medium leading-none mt-0.5">Admin Portal</p>
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0077b6] to-[#005f8e] flex items-center justify-center shadow-lg shadow-[#0077b6]/30">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-[0.18em]">Secure Access</span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">Sign In</h2>
              <p className="text-slate-500 text-[12px] font-light mt-1.5 leading-relaxed">
                Enter your credentials to access the management console.
              </p>
            </div>

            {/* Error */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mb-5"
                >
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 flex items-start gap-3">
                    <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] font-medium text-rose-300 leading-relaxed">{errorMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                  Username
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-[#0077b6] transition-colors pointer-events-none" />
                  <input
                    id="login-username"
                    type="text"
                    required
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full bg-white/4 hover:bg-white/6 focus:bg-white/8 border border-white/8 focus:border-[#0077b6]/60 rounded-2xl py-3.5 pl-11 pr-4 text-[13px] text-white placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0077b6]/20 caret-[#0077b6]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-[#0077b6] transition-colors pointer-events-none" />
                  <input
                    id="login-password"
                    type={showPw ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full bg-white/4 hover:bg-white/6 focus:bg-white/8 border border-white/8 focus:border-[#0077b6]/60 rounded-2xl py-3.5 pl-11 pr-12 text-[13px] text-white placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0077b6]/20 caret-[#0077b6]"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-500 hover:text-slate-300 uppercase tracking-wider transition-colors cursor-pointer select-none"
                  >
                    {showPw ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gradient-to-r from-[#0077b6] to-[#005f8e] hover:from-[#0089cf] hover:to-[#006ea6] text-white text-[12px] font-bold uppercase tracking-[0.15em] py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#0077b6]/30 hover:shadow-[#0077b6]/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer flex items-center justify-center gap-2.5 group disabled:opacity-60 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border border-white/25 border-t-white animate-spin" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Enter Admin Portal</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-white/6">
              <div className="flex items-center justify-between text-[10px]">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="h-3 w-3 text-emerald-500" />
                  256-bit encrypted session
                </span>
                <a href="/" className="text-slate-500 hover:text-white font-medium tracking-wide transition-colors">
                  ← Back to Site
                </a>
              </div>
            </div>
          </div>

          {/* Below card caption */}
          <p className="text-center text-[10px] text-slate-600 mt-5 font-medium">
            Unauthorized access is prohibited and monitored.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
