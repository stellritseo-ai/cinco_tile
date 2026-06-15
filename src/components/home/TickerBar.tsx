import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const TickerBar = () => {
  const baseItems = ["Expertise", "Quality", "Licensed & Insured", "Trust", "Workmanship"];

  // We duplicate the array many times so that 50% of the container is wider than the largest ultra-wide monitor.
  // Then we animate from 0% to -50% to create a flawless infinite loop.
  const halfArray = Array(8).fill(baseItems).flat();
  const fullArray = [...halfArray, ...halfArray];

  return (
    <div className="bg-[#111827] border-y border-white/10 overflow-hidden py-[25px] w-full flex">
      <motion.div
        className="flex shrink-0 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80, // Doubled the duration to make the scrolling slower and more elegant
        }}
      >
        {fullArray.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-[16px] mx-[32px] text-[15px] font-extrabold text-white uppercase tracking-widest"
          >
            <Sparkles className="w-[16px] h-[16px] text-[#0077b6]" />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
