import { Star, User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export const Testimonials = () => {

  const reviews = [
    {
      name: "Lisa M.",
      location: "Houston",
      text: "“Cinco Services did our master bathroom remodel – from shower tile to new bathtub. Flawless work. Showed up on time, cleaned up every day. Highly recommend.”"
    },
    {
      name: "James R.",
      location: "Katy",
      text: "“They installed porcelain tile throughout our first floor and a beautiful backsplash in the kitchen. Professional, fair price, and the quality is stunning.”"
    },
    {
      name: "Carmen T.",
      location: "Sugar Land",
      text: "“Elibariki and his team replaced our shower pan and retiled the shower. Fast, honest, and detail-oriented. Will use them again for our patio tiles.”"
    }
  ];

  return (
    <section className="bg-[#F6F5F2] py-[60px] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[30%_70%] gap-[48px] lg:gap-[80px] items-center">
          
          {/* Left Content */}
          <Reveal variant="reveal-left">
            <div className="max-w-[420px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge */}
              <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[16px] py-[6px] text-[13px] font-bold font-sans">
                Testimonials
              </span>
              
              <h2 className="mt-[24px] font-sans text-[30px] lg:text-[33px] font-extrabold text-[#111827] leading-[1.15] tracking-[-0.02em]">
                What Our Customers Say
              </h2>
              
              <p className="mt-[24px] text-[16px] lg:text-[17px] text-[#4B5563] leading-[1.6]">
                Homeowners across Houston and nearby communities love their new tile floors.
              </p>
              
              <div className="mt-[40px]">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-[#d62828] text-white font-bold text-[15px] h-[48px] px-[28px] rounded-[6px] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)]"
                >
                  Schedule Your Free Estimate Today
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Carousel */}
          <Reveal variant="reveal-right" className="min-w-0 w-full overflow-hidden">
            <div className="relative pt-[40px] lg:pt-0 w-full">
              {/* Fade Edges for Premium Look */}
              <div className="absolute inset-y-0 left-0 w-[40px] lg:w-[80px] bg-gradient-to-r from-[#F6F5F2] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-[40px] lg:w-[80px] bg-gradient-to-l from-[#F6F5F2] to-transparent z-10 pointer-events-none" />
              
              <div className="w-full">
                <motion.div 
                  className="flex gap-[24px] w-fit"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 60,
                  }}
                >
                  {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((r, i) => (
                    <div 
                      key={i} 
                      className="shrink-0 w-[320px] md:w-[380px] bg-white rounded-[16px] p-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col"
                    >
                      {/* User Info */}
                      <div className="flex items-center gap-[16px] mb-[24px]">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF]">
                          <User className="w-[28px] h-[28px]" strokeWidth={2} fill="currentColor" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[#111827] text-[17px] leading-tight">{r.name}</span>
                          <span className="text-[14px] text-[#6B7280] leading-tight mt-[4px]">{r.location}</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-[4px] mb-[16px]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-[20px] h-[20px] text-[#0077b6] fill-current" strokeWidth={1} />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-[15px] text-[#4B5563] leading-[1.6]">
                        {r.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
