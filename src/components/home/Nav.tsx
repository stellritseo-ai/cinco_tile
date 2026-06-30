import { 
  Phone, 
  X, 
  ChevronDown,
  Home,
  Hammer,
  Bath,
  Utensils,
  Shield,
  Paintbrush,
  Layers,
  Grid,
  Wrench,
  Building2
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/cincologo.png";

const servicesSubmenu = [
  { 
    label: "Home Remodeling", 
    desc: "Whole home renovations", 
    href: "/home-remodeling",
    icon: Home 
  },
  { 
    label: "New Home Construction", 
    desc: "Custom builds from ground up", 
    href: "/new-home-construction",
    icon: Hammer 
  },
  { 
    label: "Bathroom Remodeling", 
    desc: "Spa-like luxury bathrooms", 
    href: "/bathroom-remodeling",
    icon: Bath 
  },
  { 
    label: "Kitchen Remodeling", 
    desc: "Modern custom kitchen spaces", 
    href: "/kitchen-remodeling",
    icon: Utensils 
  },
  { 
    label: "Roofing Services", 
    desc: "Durable roof repairs & installs", 
    href: "/roofing-services",
    icon: Shield 
  },
  { 
    label: "Interior Painting", 
    desc: "Flawless wall & cabinet painting", 
    href: "/interior-painting",
    icon: Paintbrush 
  },
  { 
    label: "Exterior Painting", 
    desc: "Premium siding & trim paint", 
    href: "/exterior-painting",
    icon: Paintbrush 
  },
  { 
    label: "Tile Installation", 
    desc: "Custom marble, ceramic & glass", 
    href: "/tile-installation",
    icon: Grid 
  },
  { 
    label: "Flooring Installation", 
    desc: "Hardwood, LVP & porcelain", 
    href: "/flooring-installation",
    icon: Layers 
  },
  { 
    label: "Shower Installation / Repair", 
    desc: "Leak-proof custom shower pans", 
    href: "/shower-installation-repair",
    icon: Wrench 
  },
  { 
    label: "Commercial Services", 
    desc: "Office, retail & medical builds", 
    href: "/commercial",
    icon: Building2 
  },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      <header className="absolute left-0 right-0 z-[999] top-[36px] sm:top-[50px] py-3 sm:py-4 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logoImg} alt="Cinco Services Logo" className="h-[55px] sm:h-[65px] md:h-[85px] w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </a>

            <nav className="hidden lg:flex items-center gap-7 px-8 py-3 text-[14px] font-bold tracking-widest transition-all duration-300 lg:ml-auto lg:mr-10 text-white bg-sky-500 rounded-full border border-sky-400">
              {["HOME", "ABOUT", "SERVICES", "RESIDENTIAL", "COMMERCIAL", "PROJECTS", "CONTACT"].map(l => {
                const isLinkActive = 
                  l === "HOME" ? location.pathname === "/" : 
                  l === "ABOUT" ? location.pathname === "/about" : 
                  l === "RESIDENTIAL" ? location.pathname === "/residential" : 
                  l === "COMMERCIAL" ? location.pathname === "/commercial" : 
                  l === "PROJECTS" ? location.pathname === "/projects" : 
                  l === "CONTACT" ? location.pathname === "/contact" : false;
                const href = 
                  l === "ABOUT" ? "/about" : 
                  l === "RESIDENTIAL" ? "/residential" : 
                  l === "COMMERCIAL" ? "/commercial" : 
                  l === "PROJECTS" ? "/projects" : 
                  l === "CONTACT" ? "/contact" : 
                  l === "HOME" ? "/" : 
                  (isHome ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`);

                if (l === "SERVICES") {
                  return (
                    <div key={l} className="relative group py-2">
                      <button
                        className="flex items-center gap-1 transition-colors duration-300 group-hover:text-brand hover:text-brand bg-transparent border-0 cursor-pointer p-0 font-bold tracking-widest text-[14px] text-white"
                      >
                        <span>SERVICES</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown panel */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-md border border-gray-200/60 p-4 rounded-2xl shadow-2xl w-[540px] grid grid-cols-2 gap-x-4 gap-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-[opacity,transform] duration-300 transform scale-95 origin-top group-hover:scale-100 z-[9999] before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-5 before:bg-transparent">
                        
                        {/* Caret arrow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-200/60 rotate-45 -translate-y-1.5 z-[-1]" />
                        
                        {servicesSubmenu.map((sub, sIdx) => {
                          const Icon = sub.icon;
                          return (
                            <a
                              key={sIdx}
                              href={sub.href}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-all duration-300 group/item border border-transparent hover:border-slate-100"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0077b6] group-hover/item:bg-[#0077b6] group-hover/item:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-grow">
                                <div className="text-[13px] font-extrabold text-slate-800 group-hover/item:text-[#0077b6] transition-colors leading-tight">
                                  {sub.label}
                                </div>
                                <div className="text-[11px] text-gray-400 font-normal leading-normal mt-0.5 group-hover/item:text-gray-500 transition-colors">
                                  {sub.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={l}
                    href={href}
                    className={`relative transition-colors duration-300 hover:text-brand ${isLinkActive
                        ? "text-brand font-black"
                        : "text-white"
                      }`}
                  >
                    {l}
                  </a>
                );
              })}
            </nav>

            {/* Header Right (Call & Hamburger) */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:8324062716" className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] md:text-[14px] font-bold hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_0_rgba(214,40,40,0.3)] transition-all duration-300 whitespace-nowrap">
                <Phone className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] shrink-0" /> <span className="hidden sm:inline">Call (832) 406-2716</span><span className="sm:hidden">Call Now</span>
              </a>

              {/* Custom Animated Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col justify-between w-6 h-[18px] p-0 bg-transparent border-0 focus:outline-none cursor-pointer z-50"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${isOpen
                    ? "rotate-45 translate-y-[8px] bg-white"
                    : "bg-white"
                  }`} />
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${isOpen
                    ? "opacity-0 scale-x-0"
                    : "bg-white"
                  }`} />
                <span className={`w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${isOpen
                    ? "-rotate-45 -translate-y-[8px] bg-white"
                    : "bg-white"
                  }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-[290px] bg-sky-500 border-l border-white/20 p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area in drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mt-14">
            <img src={logoImg} alt="Cinco Services Logo" className="h-[50px] w-auto object-contain" />
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
            {["HOME", "ABOUT", "SERVICES", "RESIDENTIAL", "COMMERCIAL", "PROJECTS", "CONTACT"].map((l, i) => {
              const isLinkActive = 
                l === "HOME" ? location.pathname === "/" : 
                l === "ABOUT" ? location.pathname === "/about" : 
                l === "RESIDENTIAL" ? location.pathname === "/residential" : 
                l === "COMMERCIAL" ? location.pathname === "/commercial" : 
                l === "PROJECTS" ? location.pathname === "/projects" : 
                l === "CONTACT" ? location.pathname === "/contact" : false;
              const href = 
                l === "ABOUT" ? "/about" : 
                l === "RESIDENTIAL" ? "/residential" : 
                l === "COMMERCIAL" ? "/commercial" : 
                l === "PROJECTS" ? "/projects" : 
                l === "CONTACT" ? "/contact" : 
                l === "HOME" ? "/" : 
                (isHome ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`);

              if (l === "SERVICES") {
                return (
                  <div key={l} className="flex flex-col border-b border-white/5">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-[16px] font-bold tracking-widest py-3.5 transition-all duration-300 flex items-center justify-between text-white/80 hover:text-white bg-transparent border-0 cursor-pointer p-0 w-full"
                    >
                      <span>{l}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-brand" : "text-white/60"}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px] pb-4" : "max-h-0"}`}>
                      <div className="flex flex-col gap-1 pl-4 border-l border-white/10 mt-1">
                        {servicesSubmenu.map((sub, sIdx) => {
                          const SubIcon = sub.icon;
                          return (
                            <a
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-[14px] font-semibold text-white/70 hover:text-white py-2.5 transition-all flex items-center gap-3.5 group"
                            >
                              <SubIcon className="w-4 h-4 text-white/50 group-hover:text-brand shrink-0" />
                              <span>{sub.label}</span>
                              <span className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand font-black">&rarr;</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={l}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[16px] font-bold tracking-widest py-3.5 border-b border-white/5 transition-all duration-300 flex items-center justify-between hover:translate-x-2 group ${isLinkActive ? "text-brand font-black" : "text-white/80 hover:text-white"
                    }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span>{l}</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand font-black">&rarr;</span>
                </a>
              );
            })}
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
