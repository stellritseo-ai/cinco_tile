import { MapPin, Clock, Phone } from "lucide-react";

export const TopBar = () => (
  <div className="bg-[#111827] text-white/90 text-[12px] sm:text-[13px] font-sans w-full">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-[8px] sm:py-[10px] flex items-center justify-between gap-3 flex-wrap">
      <div className="hidden sm:flex items-center gap-[12px] sm:gap-[20px] flex-wrap">
        <span className="flex items-center gap-[6px] whitespace-nowrap"><MapPin className="w-[13px] h-[13px] text-[#0077b6] shrink-0" /> Serving Houston &amp; nearby</span>
        <span className="hidden md:flex items-center gap-[6px] whitespace-nowrap"><Clock className="w-[13px] h-[13px] text-[#0077b6] shrink-0" /> Mon–Fri 7am–7pm, Sat 8am–7pm</span>
      </div>
      <div className="flex items-center gap-[20px] ml-auto">
        <a href="tel:8324062716" className="flex items-center gap-[6px] font-bold text-white hover:text-[#0077b6] transition-colors py-1 whitespace-nowrap"><Phone className="w-[13px] h-[13px] shrink-0" /> (832) 406-2716</a>
      </div>
    </div>
  </div>
);
