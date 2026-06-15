import { MapPin, Clock, Phone } from "lucide-react";

export const TopBar = () => (
  <div className="bg-[#111827] text-white/90 text-[13px] font-sans">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-[10px] flex items-center justify-between gap-4">
      <div className="hidden sm:flex items-center gap-[20px]">
        <span className="flex items-center gap-[6px]"><MapPin className="w-[14px] h-[14px] text-[#0077b6]" /> Serving Houston & nearby</span>
        <span className="flex items-center gap-[6px]"><Clock className="w-[14px] h-[14px] text-[#0077b6]" /> Mon–Fri 7am–7pm, Sat 8am–7pm</span>
      </div>
      <div className="flex items-center gap-[20px] ml-auto">
        <a href="tel:8324062716" className="flex items-center gap-[6px] font-bold text-white hover:text-[#0077b6] transition-colors"><Phone className="w-[14px] h-[14px]" /> (832) 406-2716</a>
      </div>
    </div>
  </div>
);
