import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import faqImg from "@/assets/faq.jpg";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What remodeling & construction services do you offer?",
      a: "We provide comprehensive home additions, kitchen and bathroom remodeling, new custom home builds, framing, roofing, interior and exterior painting, as well as custom tile and flooring installation."
    },
    {
      q: "Are you fully licensed and insured?",
      a: "Yes, Cinco Services is fully licensed and insured. We prioritize safety, structural integrity, and building code compliance on every job."
    },
    {
      q: "Do you serve commercial clients?",
      a: "Yes – we handle commercial remodeling, office build-outs, retail space construction, and tenant improvements."
    },
    {
      q: "How far do you travel?",
      a: "We serve clients within a 50-mile radius of our Houston location at 1400 Broadfield Blvd, including Katy, Sugar Land, Cypress, Richmond, and Pearland."
    },
    {
      q: "Do you provide free consultations & estimates?",
      a: "Yes – contact us today to schedule a free detailed estimate for your construction or remodeling project."
    }
  ];

  return (
    <section className="bg-white py-[60px] w-full" id="faq">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[50px] items-start">

          {/* Left Column */}
          <Reveal variant="reveal-left">
            <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[16px] py-[6px] text-[13px] font-bold font-sans tracking-wide">
                FAQs
              </span>

              <h2 className="mt-[24px] font-sans text-[28px] lg:text-[35px] font-extrabold text-[#111827] leading-[1.2] tracking-[-0.02em]">
                Frequently Asked Questions
              </h2>

              <p className="mt-[20px] text-[16px] lg:text-[17px] text-[#4B5563] leading-[1.6]">
                Have questions about our remodeling or construction services? We've answered the most common ones below. Still need help? Give us a call — we're happy to guide you.
              </p>

              <div className="mt-[40px] w-full h-[200px] lg:h-[240px] rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <img src={faqImg} alt="Living Room" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>

          {/* Right Column: Accordion */}
          <Reveal variant="reveal-right">
            <div className="bg-[#F8F9FA] rounded-[20px] p-[24px] lg:p-[40px] border border-gray-100">
              <div className="flex flex-col">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${isOpen ? 'bg-transparent border border-gray-300 rounded-[8px] mb-[8px]' : 'border-b border-gray-200 last:border-0'}`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className={`w-full text-left flex items-center justify-between transition-colors ${isOpen ? 'p-[20px] text-[#111827]' : 'py-[20px] px-[2px] text-[#111827] hover:text-[#d62828]'}`}
                      >
                        <span className="font-medium text-[16px] lg:text-[17px] pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-[16px] h-[16px] text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 px-[20px] pb-[20px]' : 'max-h-0 opacity-0 px-[20px] pb-0'}`}
                      >
                        <p className="text-[15px] text-[#4B5563] leading-[1.6]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
