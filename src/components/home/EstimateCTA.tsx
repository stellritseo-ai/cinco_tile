import { Reveal } from "@/components/ui/Reveal";
import { SlidersHorizontal, Phone } from "lucide-react";
import estimateBg from "@/assets/estimate.jpg";
import showroomSvg from "@/assets/showroom.svg";
import estimateSvg from "@/assets/estimate.svg";

export const EstimateCTA = () => (
  <section id="estimate" className="py-[60px] bg-white w-full overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <Reveal variant="reveal-scale">
        <div className="relative rounded-[16px] overflow-hidden shadow-2xl bg-[#111827]">
          {/* Background image */}
          <img
            src={estimateBg}
            alt="Tile installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />

          {/* Left Floating SVG */}
          <div className="absolute left-[-20px] lg:left-[20px] top-1/2 -translate-y-1/2 hidden md:block w-[220px] lg:w-[260px] pointer-events-none">
            <img src={showroomSvg} alt="Wood samples" className="w-full h-auto drop-shadow-2xl object-contain" />
          </div>

          {/* Right Floating SVG */}
          <div className="absolute right-[-20px] lg:right-[20px] top-1/2 -translate-y-1/2 hidden md:block w-[220px] lg:w-[260px] pointer-events-none">
            <img src={estimateSvg} alt="Wood samples" className="w-full h-auto drop-shadow-2xl object-contain" />
          </div>

          {/* Center Content */}
          <div className="relative z-10 py-[60px] sm:py-[80px] px-4 sm:px-6 max-w-[800px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-[#d62828] md:text-[#0077b6] font-sans text-[22px] sm:text-[26px] md:text-[35px] font-extrabold leading-[1.2] tracking-tight">
              Book Your Free In-Home Estimate Today
            </h2>
            <p className="mt-[16px] text-[#E5E7EB] text-[16px] md:text-[18px] leading-[1.6] max-w-[650px]">
              Upgrade your home with premium remodeling and custom construction services—backed by licensed, local specialists.
            </p>
            <div className="mt-[32px] flex flex-col sm:flex-row items-center gap-[32px]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-[10px] bg-[#d62828] text-white font-bold text-[16px] h-[48px] px-[24px] rounded-[6px] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)]"
              >
                <SlidersHorizontal className="w-[18px] h-[18px]" strokeWidth={2.5} />
                Book My Free Estimate
              </a>
              <a
                href="tel:8324062716"
                className="inline-flex items-center gap-[10px] text-white hover:text-red-500 font-medium text-[16px] transition-colors"
              >
                <Phone className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} />
                Call (832) 406-2716
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
