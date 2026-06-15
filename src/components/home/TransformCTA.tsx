import { Layers, Calendar, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import transform from "@/assets/transform.jpg";

export const TransformCTA = () => {
  return (
    <section className="bg-white py-[60px] w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-[60px] lg:gap-[60px] items-center">

          {/* Left Content */}
          <Reveal variant="reveal-left">
            <div>
              <h2 className="font-sans text-[26px] lg:text-[25px] font-extrabold text-[#111827] leading-[1.2] tracking-[-0.02em]">
                Transform Your Home with Expert Tile Installation
              </h2>

              <p className="mt-[24px] text-[16px] lg:text-[17px] text-[#4B5563] leading-[1.6]">
                From Houston to Katy, Sugar Land, and beyond, we bring precision, durability, and style to every floor we install. Backed by our satisfaction guarantee, we're ready when you are.
              </p>

              <ul className="mt-[32px] space-y-[20px]">
                {[
                  "Serving Houston & Surrounding Communities",
                  "Licensed & Insured",
                  "Satisfaction Guaranteed"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-[12px] text-[#8b5a2b] font-semibold text-[16px]">
                    <Layers className="w-[20px] h-[20px]" strokeWidth={2} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-[48px] flex flex-wrap items-center gap-[24px]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-[10px] bg-[#d62828] text-white rounded-[8px] px-[24px] py-[14px] font-bold text-[15px] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)]"
                >
                  <Calendar className="w-[18px] h-[18px]" />
                  Book My Free Estimate
                </a>

                <a
                  href="tel:8324062716"
                  className="inline-flex items-center gap-[10px] text-[#4B5563] font-semibold text-[16px] hover:text-[#111827] transition-colors"
                >
                  <Phone className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  Call (832) 406-2716
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal variant="reveal-right">
            <div className="w-full h-full flex items-center">
              <img
                src={transform}
                alt="Beautiful living room with tile installation"
                className="w-full h-[280px] lg:h-[340px] rounded-[12px] object-cover shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
