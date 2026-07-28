import React, { createContext, useContext, useEffect, useState } from "react";
import { getPortalSettings, PortalSettings } from "@/lib/leads-store";
import { HardHat, Mail, Phone, Clock, ShieldAlert } from "lucide-react";
import logoImg from "@/assets/cincologo.png";

interface SettingsContextProps {
  settings: PortalSettings;
  loading: boolean;
  refreshSettings: () => Promise<void>;
}

const defaultSettings: PortalSettings = {
  adminEmail: "info@cincoservicesllc.com",
  officePhone: "(832) 406-2716",
  hoursWeekday: "8:00 AM - 5:00 PM",
  hoursSaturday: "8:00 AM - 5:00 PM",
  hoursSunday: "Closed (Emergency 24/7)",
  maintenanceMode: false,
  totalVisits: 247
};

const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultSettings,
  loading: true,
  refreshSettings: async () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<PortalSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const refreshSettings = async () => {
    try {
      const data = await getPortalSettings();
      if (data) {
        setSettings(data);
      }
    } catch (err) {
      console.error("[SettingsContext] Failed to fetch settings:", err);
    } finally {
      setLoading(false);
    }
  };

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setIsClient(true);
    setCurrentPath(typeof window !== "undefined" ? window.location.pathname : "");
    refreshSettings();

    const interval = setInterval(() => {
      refreshSettings();
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Maintenance mode check: active unless on dashboard/login
  const isMaintenanceActive = isClient && Boolean(settings.maintenanceMode);
  const isBypassRoute = isClient && (
    currentPath.startsWith("/dashboard") || 
    currentPath === "/login"
  );

  if (isMaintenanceActive && !isBypassRoute) {
    return (
      <div 
        className="min-h-screen bg-[#0B132B] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none font-sans"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0077b6]/20 blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-xl w-full text-center relative z-10 space-y-8 px-4">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 p-3 shadow-2xl flex items-center justify-center">
            <img src={logoImg} alt="Cinco Services" className="w-full h-full object-contain" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <HardHat className="h-4 w-4 text-amber-400 animate-bounce" />
            <span>Scheduled Maintenance</span>
          </div>

          {/* Main heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              We'll Be Back Shortly
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              Cinco Services is currently performing system upgrades to serve you better. Our team is still available for urgent inquiries.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-xs mx-auto space-y-2">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] rounded-full w-4/5 animate-pulse" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <span>System Upgrade</span>
              <span>In Progress</span>
            </div>
          </div>

          {/* Direct contact info card */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-left space-y-4 max-w-md mx-auto backdrop-blur-md">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              Need Immediate Assistance?
            </h3>
            
            <div className="space-y-3.5">
              <a href={`tel:${settings.officePhone}`} className="flex items-center gap-3.5 text-slate-200 hover:text-[#38bdf8] transition-colors group">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  <Phone className="h-4 w-4 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Call Us Directly</p>
                  <p className="text-sm font-bold text-white">{settings.officePhone}</p>
                </div>
              </a>

              <a href={`mailto:${settings.adminEmail}`} className="flex items-center gap-3.5 text-slate-200 hover:text-[#38bdf8] transition-colors group">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  <Mail className="h-4 w-4 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Send an Email</p>
                  <p className="text-sm font-bold text-white">{settings.adminEmail}</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 text-slate-200">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  <Clock className="h-4 w-4 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Hours</p>
                  <p className="text-sm font-semibold text-white">{settings.hoursWeekday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer branding */}
          <p className="text-[11px] text-slate-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Cinco Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <SettingsContext.Provider value={{ settings, loading, refreshSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
