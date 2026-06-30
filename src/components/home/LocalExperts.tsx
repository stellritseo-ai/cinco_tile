import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import experts from "@/assets/experts.jpg";
import floating1 from "@/assets/bathroom_remodel.png";
import floating2 from "@/assets/kitchen_backsplash.png";
export const LocalExperts = () => (
  <section className="py-[60px] bg-white relative overflow-hidden" id="about">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1fr_1.1fr] gap-[48px] lg:gap-[80px] items-center">
      
      <Reveal variant="reveal-left">
        <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-8 mt-[20px]">
          {/* Decorative Background Accents */}
          <div className="absolute -inset-4 bg-[#0077b6]/10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] -z-10 translate-x-4 translate-y-4" />
          <div className="absolute -inset-4 border border-[#0077b6]/30 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] -z-10 -translate-x-3 -translate-y-3" />

          {/* Main Image */}
          <div className="relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] z-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px]">
            <img 
              src={experts} 
              alt="Premium home remodeling and construction" 
              className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
          </div>

          {/* Floating Image 1 (Top Left) - Circular */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 sm:-left-6 md:-left-12 lg:-left-16 w-[90px] sm:w-[120px] md:w-[150px] rounded-full overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border-[4px] sm:border-[5px] border-white z-20 hidden xs:block sm:block"
          >
            <img 
              src={floating1} 
              alt="Bathroom remodel" 
              className="w-full aspect-square object-cover" 
              loading="lazy" 
            />
          </motion.div>

          {/* Floating Image 2 (Bottom Left) - Circular */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-[45%] -left-2 sm:-left-4 md:-left-8 lg:-left-12 w-[80px] sm:w-[100px] md:w-[130px] rounded-full overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] border-[4px] sm:border-[5px] border-white z-20 hidden sm:block"
          >
            <img 
              src={floating2} 
              alt="Kitchen backsplash" 
              className="w-full aspect-square object-cover" 
              loading="lazy" 
            />
          </motion.div>
          
          {/* Floating Experience Badge */}
          <div className="absolute -bottom-4 sm:-bottom-6 -right-2 md:-right-6 bg-white p-[12px] sm:p-[16px] md:p-[24px] rounded-[12px] sm:rounded-[16px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-[10px] sm:gap-[16px] z-30">
            <div className="text-[#0077b6] font-sans text-[28px] sm:text-[36px] md:text-[46px] font-extrabold leading-none tracking-tight">15+</div>
            <div className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#111827] uppercase tracking-[0.2em] leading-relaxed">
              Years of<br/><span className="text-gray-500">Excellence</span>
            </div>
          </div>
        </div>
      </Reveal>
      
      <Reveal variant="reveal-right">
        <div className="w-full pt-[20px] lg:pt-0">
          {/* Badge */}
          <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[16px] py-[6px] text-[13px] font-bold font-sans tracking-wide">
            Welcome to Cinco Services
          </span>
          
          <h2 className="mt-[24px] font-sans text-[26px] sm:text-[32px] lg:text-[42px] font-extrabold text-[#111827] leading-[1.15] tracking-[-0.02em]">
            Where Every Project Tells a Story of Premium Quality.
          </h2>
          
          <div className="mt-[24px] text-[16px] lg:text-[17px] text-[#4B5563] leading-[1.6] space-y-[16px]">
            <p>
              We are a family-owned, locally trusted remodeling and construction company with over 15 years of hands-on experience across Houston.
            </p>
            <p>
              Whether you’re updating a single room, constructing a new home from the ground up, replacing your roof, or painting your property, we treat every project like it’s our own. No shortcuts. No mess left behind. Just beautiful, structurally sound, and long-lasting results for your home or business.
            </p>
          </div>

          <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {[
              "Family-Owned & Operated",
              "15+ Years Experience",
              "No Shortcuts Taken",
              "Zero-Mess Guarantee",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#0077b6]/10 flex items-center justify-center shrink-0">
                  <Check className="w-[14px] h-[14px] text-[#0077b6]" strokeWidth={3} />
                </div>
                <span className="text-[15px] font-bold text-[#111827]">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-[48px]">
            <a 
              href="#services" 
              className="inline-flex items-center gap-[12px] bg-[#111827] text-white rounded-[10px] px-[32px] py-[16px] text-[15px] font-bold hover:bg-[#374151] transition-colors duration-300 shadow-md"
            >
              Explore Our Services
              <ArrowRight className="w-[16px] h-[16px]" />
            </a>
          </div>
        </div>
      </Reveal>
      
    </div>
  </section>
);
