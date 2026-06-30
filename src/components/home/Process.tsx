import { Reveal } from "@/components/ui/Reveal";
import processBg from "@/assets/processbg.png";
import step1Icon from "@/assets/step1.svg";
import step2Icon from "@/assets/step2.svg";
import step3Icon from "@/assets/step3.svg";

export const Process = () => {
  const steps = [
    {
      img: step1Icon,
      t: "Free Consultation & Estimate",
      d: "We measure your space and provide a clear, upfront quote",
      imgClass: "w-24 h-24 object-contain mx-auto",
      href: "#contact"
    },
    {
      img: step2Icon,
      t: "Professional Installation",
      d: "Our licensed team handles prep and installs with precision.",
      imgClass: "w-36 h-36 object-contain mx-auto",
      href: "/projects"
    },
    {
      img: step3Icon,
      t: "Satisfaction Guaranteed",
      d: "We review every detail to ensure you're 100% happy.",
      imgClass: "w-24 h-24 object-contain mx-auto",
      href: "/about"
    },
  ];

  return (
    <section
      className="py-[60px] relative overflow-hidden bg-cover bg-center bg-no-repeat bg-cream"
      style={{ backgroundImage: `url(${processBg})` }}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center bg-brand text-black rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest mb-5 font-sans">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink font-sans mb-4">
            How We Build Your Vision
          </h2>
          <p className="text-ink-soft text-sm md:text-base font-semibold max-w-xl mx-auto font-sans">
            Just three simple steps to complete your home remodeling or construction project.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mt-10">
          {steps.map((s, idx) => (
            <Reveal key={s.t} variant="reveal-scale" className={`stagger-${idx + 1}`}>
              <a 
                href={s.href}
                className="group block flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-white/45 hover:backdrop-blur-[2px] hover:shadow-xl border border-transparent hover:border-white/50 cursor-pointer hover:-translate-y-2"
              >
                {/* Icon wrapper */}
                <div className="mb-6 flex justify-center items-center h-24">
                  <img
                    src={s.img}
                    alt={s.t}
                    className={`${s.imgClass} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                {/* Step title */}
                <h3 className="font-sans text-xl font-extrabold text-ink mb-3 tracking-tight">
                  {s.t}
                </h3>

                {/* Step description */}
                <p className="font-sans text-[14px] text-ink-soft leading-relaxed max-w-[280px] mx-auto font-semibold">
                  {s.d}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
