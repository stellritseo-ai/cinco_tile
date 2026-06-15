import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const ServiceAreas = () => {
  const cities = [
    "Houston", "Katy", "Sugar Land",
    "Cypress", "Richmond", "Rosenberg",
    "Fulshear", "Missouri City", "Stafford",
    "Pearland", "Jersey Village", "Tomball",
    "The Woodlands"
  ];

  return (
    <section className="bg-white py-[60px] w-full relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-[48px] lg:gap-[60px] items-start">

          {/* Left: Google Map */}
          <Reveal variant="reveal-left" className="w-full lg:sticky lg:top-[100px]">
            <div className="w-full h-[300px] lg:h-[500px] overflow-hidden rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.637236180327!2d-95.6614067243544!3d29.788129375053632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d968e076b465%3A0x29012edb8fa2e3c3!2s1400%20Broadfield%20Blvd%2C%20Houston%2C%20TX%2077084%2C%20USA!5e0!3m2!1sen!2snp!4v1781422480330!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal variant="reveal-right">
            <div className="w-full py-[20px]">
              {/* Badge */}
              <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[16px] py-[6px] text-[13px] font-bold font-sans tracking-wide">
                Service Area
              </span>

              <h2 className="mt-[24px] font-sans text-[26px] lg:text-[25px] font-extrabold text-[#111827] leading-[1.2] tracking-[-0.02em]">
                Proudly Serving Houston & Nearby Communities
              </h2>

              <p className="mt-[20px] text-[16px] lg:text-[17px] text-[#4B5563] leading-[1.6]">
                We provide professional tile installation services across Houston and nearby cities within a 50-mile radius.
              </p>

              <h3 className="mt-[32px] text-[#111827] font-bold text-[18px]">
                Featured Areas We Serve
              </h3>

              {/* Grid of Cities */}
              <div className="mt-[20px] grid grid-cols-2 md:grid-cols-3 gap-[16px]">
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#0077b6] hover:bg-[#005b8a] transition-colors cursor-default rounded-[8px] px-[16px] py-[14px]"
                  >
                    <span className="text-white font-bold text-[15px] leading-none">
                      {city}
                    </span>
                    <div className="w-[20px] h-[20px] bg-[#111827] rounded-full flex items-center justify-center shrink-0">
                      <ArrowRight className="w-[12px] h-[12px] text-white" strokeWidth={3} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <p className="mt-[32px] text-[13px] text-[#8c7b64]">
                Additional nearby communities available — contact us to confirm service in your area.
              </p>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
