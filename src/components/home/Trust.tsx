import { ShieldCheck, Award, Store, MapPin, Building2, Sparkles, Banknote, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import showroom from "@/assets/showroom.jpg";
import sInstall from "@/assets/service-install.jpg";
import faqImg from "@/assets/faq.jpg";

export const Trust = () => {
  const points = [
    {
      Icon: Award,
      t: "15+ Years of Experience",
      d: "Skilled installation in ceramic, marble, porcelain, slate, onyx, travertine, hardwood, and laminate",
    },
    {
      Icon: MapPin,
      t: "50 Mile Service Radius",
      d: "We cover Houston and all surrounding suburbs",
    },
    {
      Icon: Building2,
      t: "Residential & Commercial Experts",
      d: "Kitchens, bathrooms, showers, fireplaces, patios, basements, entryways, and laundry rooms",
    },
    {
      Icon: Sparkles,
      t: "Clean & Reliable",
      d: "We protect your floors, clean up daily, and finish on schedule",
    },
    {
      Icon: Banknote,
      t: "Free Estimates & Fair Pricing",
      d: "No hidden fees, no surprises",
    },
    {
      Icon: ShieldCheck,
      t: "Fully Licensed & Insured",
      d: "Your property is in safe hands",
    },
    {
      Icon: Clock,
      t: "Saturday Hours Available",
      d: "Open 8am–7pm for your convenience",
    },
    {
      Icon: Store,
      t: "Locally Owned",
      d: "Proudly serving the Greater Houston area",
    },
  ];

  return (
    <section className="bg-white py-[60px] w-full overflow-x-clip relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[48%_1fr] gap-[48px] lg:gap-[64px] items-start">
          
          {/* Left Image Grid - Sticky */}
          <div className="lg:sticky lg:top-[120px] h-fit self-start w-full">
            <Reveal variant="reveal-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <img 
                  src={showroom} 
                  alt="Tile showroom" 
                  className="w-full h-full lg:h-[620px] rounded-[16px] object-cover" 
                />
                <div className="flex flex-col gap-[20px]">
                  <img 
                    src={sInstall} 
                    alt="Flooring installation" 
                    className="w-full h-[250px] lg:h-[300px] rounded-[16px] object-cover" 
                  />
                  <img 
                    src={faqImg} 
                    alt="Living room tile" 
                    className="w-full h-[250px] lg:h-[300px] rounded-[16px] object-cover" 
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Content */}
          <div className="lg:py-[20px]">
            <Reveal variant="reveal-right">
              <div>
                {/* Badge */}
                <div className="flex justify-center md:justify-start">
                  <span className="inline-flex items-center bg-[#0077b6] text-white rounded-full px-[20px] py-[8px] text-[14px] font-bold font-sans tracking-wide">
                    Why Choose Us
                  </span>
                </div>
                
                {/* Heading */}
                <h2 className="mt-[20px] max-w-[650px] font-sans text-[24px] md:text-[36px] font-extrabold text-[#111827] leading-[43px] md:leading-[55px] tracking-[-0.02em] text-center md:text-left mx-auto">
                  Why Homeowners & Businesses Trust Cinco Services
                </h2>

                {/* Body Text */}
                <p className="mt-[16px] max-w-[650px] text-[16px] lg:text-[18px] text-[#4B5563] leading-[1.6] text-center md:text-left mx-auto md:mx-0">
                  With over 15 years of hands-on experience in Houston, we don't just install tiles — we deliver craftsmanship that lasts. Every project, big or small, gets the same attention to detail, respect for your home, and commitment to quality.
                </p>

                {/* Feature Grid */}
                <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[28px]">
                  {points.map((p) => (
                    <div key={p.t} className="flex items-start gap-[14px]">
                      <p.Icon className="w-[28px] h-[28px] text-[#D49500] shrink-0 fill-current" strokeWidth={1} />
                      <div className="pt-[2px]">
                        <h4 className="font-sans text-[17px] font-bold text-[#8A5A00] leading-tight mb-1">
                          {p.t}
                        </h4>
                        <p className="font-sans text-[14px] text-[#6B7280] leading-[1.5]">
                          {p.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-[48px] pb-[40px] lg:pb-0">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center bg-[#d62828] text-white font-bold text-[15px] h-[48px] px-[28px] rounded-[10px] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)]"
                  >
                    Get Started with a Free Estimate
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
