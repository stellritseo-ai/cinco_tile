import { Phone, Shield, Award, HardHat, SlidersHorizontal } from "lucide-react";
import heroVideo from "@/assets/herovideo.mp4";

export const Hero = () => (
  <section className="relative min-h-[100vh] flex items-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

    <div className="relative max-w-7xl mx-auto px-6 w-full pt-10">
      <div className="max-w-5xl text-white mx-auto text-center">
        <h1 className="font-sans text-[35px] md:text-[45px] mt-[150px] md:mt-[219px] font-bold leading-[45px] md:leading-[60px] tracking-tight">
          15+ Years of Precision Home Remodeling & <br /> <span className="text-sky-400 font-black">Construction in Houston</span>
        </h1>
        <p className="mt-[10px] text-[16px] md:text-[18px] text-white/90 max-w-[700px] leading-[28px] md:leading-[33px] font-medium mx-auto">
          From ceramic and marble to bathroom remodeling and hardwood floors – we bring craftsmanship, reliability, and stunning results to residential and commercial clients within 50 miles of Houston.
        </p>
        <div className="mt-[25px] flex flex-wrap justify-center gap-4">
          <a href="#estimate" className="inline-flex items-center gap-2.5 bg-[#d62828] text-white rounded-full px-7 py-3 text-[15px] font-bold hover:brightness-110 transition-all shadow-[0_4px_14px_0_rgba(214,40,40,0.39)]">
            <SlidersHorizontal className="w-[18px] h-[18px]" /> Get My Free Estimate
          </a>
          <a href="tel:8324062716" className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/40 text-white rounded-full px-7 py-3 text-[15px] font-bold hover:bg-white/10 transition-all">
            <Phone className="w-[18px] h-[18px]" /> Call (832) 406-2716
          </a>
        </div>
        <div className="mt-16 flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 max-w-full overflow-x-auto no-scrollbar py-2 shrink-0">
          {[
            { i: Shield, t: "Licensed & Insured" },
            { i: Award, t: "Satisfaction Guaranteed" },
            { i: HardHat, t: "Tile Specialists" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center text-left gap-2 md:gap-4 shrink-0">
              <Icon className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-brand fill-brand" />
              <span className="text-white font-semibold text-[13px] md:text-[15px] whitespace-nowrap leading-none">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
