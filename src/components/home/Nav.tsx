import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@/assets/cincologo.png";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? "top-0 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 py-3 shadow-md" 
          : "top-[50px] py-4 bg-transparent"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img src={logoImg} alt="Cinco Services Logo" className="h-[55px] md:h-[70px] w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </a>
            
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-7 px-8 py-3 text-[14px] font-bold tracking-widest transition-all duration-300 ${
              isScrolled 
                ? "text-black/70" 
                : "text-white/80 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
            }`}>
              {["HOME", "ABOUT", "SERVICES", "RESIDENTIAL", "COMMERCIAL", "PROJECTS", "CONTACT"].map(l => (
                <a 
                  key={l} 
                  href={`#${l.toLowerCase()}`} 
                  className={`relative transition-colors duration-300 hover:text-brand ${
                    l === "HOME" 
                      ? "text-brand" 
                      : isScrolled 
                        ? "text-black/70" 
                        : "text-white/80"
                  }`}
                >
                  {l}
                </a>
              ))}
            </nav>

            {/* Header Right (Call & Hamburger) */}
            <div className="flex items-center gap-4">
              <a href="tel:8324062716" className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-5 py-2.5 text-[13px] sm:text-[14px] font-bold hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_0_rgba(214,40,40,0.3)] transition-all duration-300 whitespace-nowrap">
                <Phone className="w-[14px] h-[14px]" /> <span className="hidden sm:inline">Call (832) 406-2716</span><span className="sm:hidden">Call Now</span>
              </a>
              
              {/* Custom Animated Hamburger Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden flex flex-col justify-between w-6 h-[18px] p-0 bg-transparent border-0 focus:outline-none cursor-pointer z-50"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                  isOpen 
                    ? "rotate-45 translate-y-[8px] bg-white" 
                    : isScrolled ? "bg-black" : "bg-white"
                }`} />
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
                  isOpen 
                    ? "opacity-0 scale-x-0" 
                    : isScrolled ? "bg-black" : "bg-white"
                }`} />
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                  isOpen 
                    ? "-rotate-45 -translate-y-[8px] bg-white" 
                    : isScrolled ? "bg-black" : "bg-white"
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-[1000] bg-black/50 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[290px] bg-gradient-to-b from-gray-900/75 to-black/85 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area in drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mt-14">
            <img src={logoImg} alt="Cinco Services Logo" className="h-[40px] w-auto object-contain" />
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links inside drawer */}
          <nav className="flex flex-col gap-1 mt-2">
            {["HOME", "ABOUT", "SERVICES", "RESIDENTIAL", "COMMERCIAL", "PROJECTS", "CONTACT"].map((l, i) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className={`text-[16px] font-bold tracking-widest py-3.5 border-b border-white/5 transition-all duration-300 flex items-center justify-between hover:translate-x-2 group ${
                  l === "HOME" ? "text-brand" : "text-white/80 hover:text-white"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span>{l}</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand font-black">&rarr;</span>
              </a>
            ))}
          </nav>

          {/* Call button inside drawer */}
          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <a 
              href="tel:8324062716" 
              className="inline-flex items-center justify-center gap-2 bg-[#d62828] text-white rounded-full py-3.5 text-[15px] font-bold hover:bg-[#b52020] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)] w-full"
            >
              <Phone className="w-[15px] h-[15px]" /> Call (832) 406-2716
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
