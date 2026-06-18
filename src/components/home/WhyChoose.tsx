import { Reveal } from "@/components/ui/Reveal";
import workerSvg from "@/assets/worker.svg";
import benefit1 from "@/assets/benefit-1.svg";
import benefit2 from "@/assets/benefit-2.svg";
import benefit3 from "@/assets/benefit-3.svg";

export const WhyChoose = () => {
  return (
    <section className="bg-[#F6F5F2] py-[50px] w-full overflow-hidden relative">

      {/* Top Left Worker Image */}
      <div className="absolute left-[0px] top-[20px] lg:top-[20px] hidden md:block w-[150px] lg:w-[200px] pointer-events-none">
        <img src={workerSvg} alt="Worker illustration" className="w-full h-auto object-contain drop-shadow-sm" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <Reveal variant="reveal-bottom">
          <div className="text-center max-w-[800px] mx-auto relative z-20">
            <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[20px] py-[6px] text-[13px] font-bold font-sans tracking-wide">
              Benefits
            </span>
            <h2 className="mt-[24px] font-sans text-[30px] md:text-[35px] font-extrabold text-[#111827] leading-[1.2] tracking-tight">
              Why Choose Cinco Services for Remodeling & Construction
            </h2>
            <p className="mt-[16px] text-[16px] md:text-[18px] text-[#6B7280]">
              We combine decades of expertise, premium materials, and professional project management to elevate your home.
            </p>
          </div>
        </Reveal>

        {/* Benefits Grid */}
        <div className="mt-[80px] grid md:grid-cols-3 gap-[40px] lg:gap-[60px] max-w-[1200px] mx-auto">
          {/* Benefit 1 */}
          <Reveal variant="reveal-bottom" className="stagger-1 text-center flex flex-col items-center">
            <img src={benefit1} alt="Home Value & Equity" className="w-[110px] lg:w-[130px] h-auto object-contain mb-[24px]" />
            <h3 className="text-[#8b5a2b] font-bold text-[20px] mb-[16px]">Home Value & Equity</h3>
            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
              Professional renovations in kitchens, bathrooms, and roofing deliver massive return on investment and curb appeal.
            </p>
          </Reveal>

          {/* Benefit 2 */}
          <Reveal variant="reveal-bottom" className="stagger-2 text-center flex flex-col items-center">
            <img src={benefit2} alt="Custom Design-Build" className="w-[110px] lg:w-[130px] h-auto object-contain mb-[24px]" />
            <h3 className="text-[#8b5a2b] font-bold text-[20px] mb-[16px]">Custom Design-Build</h3>
            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
              From custom floorplans to specific paint colors and high-end tile, we customize every detail to match your lifestyle.
            </p>
          </Reveal>

          {/* Benefit 3 */}
          <Reveal variant="reveal-bottom" className="stagger-3 text-center flex flex-col items-center">
            <img src={benefit3} alt="Structural Integrity" className="w-[110px] lg:w-[130px] h-auto object-contain mb-[24px]" />
            <h3 className="text-[#8b5a2b] font-bold text-[20px] mb-[16px]">Structural Integrity</h3>
            <p className="text-[#6B7280] text-[15px] leading-[1.6]">
              Built to last. We focus on proper framing, foundation work, waterproofing, and roofing to secure your property.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
