import { Facebook, Instagram } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/cincologo.png";

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-[#333333] text-[#e5e7eb] py-[50px] sm:py-[60px] font-sans w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1.5fr_1.5fr_2fr] gap-[30px] sm:gap-[40px] lg:gap-[60px] mb-[50px] sm:mb-[60px]">

          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center">
              <img src={logoImg} alt="Cinco Services Logo" className="h-[45px] sm:h-[55px] md:h-[70px] w-auto object-contain" />
            </a>

            <p className="mt-[40px] text-[14px]">Follow us on</p>
            <div className="flex items-center gap-[12px] mt-[12px]">
              <a href="#" className="w-[36px] h-[36px] rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#444] hover:text-white transition-colors">
                <Facebook className="w-[16px] h-[16px] text-gray-300" />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#444] hover:text-white transition-colors">
                <Instagram className="w-[16px] h-[16px] text-gray-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-[12px] border-b border-gray-600 mb-[16px]">Quick Links</h3>
            <ul className="space-y-[14px] text-[14px] text-gray-300">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: isHome ? "#services" : "/#services" },
                { label: "Residential", href: "/residential" },
                { label: "Commercial", href: "/commercial" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

        {/* Column 3: Areas We Serve */}
        <div>
          <h3 className="text-white font-bold text-[16px] pb-[12px] border-b border-gray-600 mb-[16px]">Areas We Serve</h3>
          <div className="grid grid-cols-2 gap-x-[20px] gap-y-[14px] text-[14px] text-gray-300">
            <ul className="space-y-[14px]">
              {["Houston", "Katy", "Sugar Land", "Cypress", "Richmond"].map(city => <li key={city}>{city}</li>)}
            </ul>
            <ul className="space-y-[14px]">
              {["Rosenberg", "Fulshear", "Missouri City", "Stafford", "Pearland"].map(city => <li key={city}>{city}</li>)}
            </ul>
          </div>
        </div>

        {/* Column 4: Opening Hours */}
        <div>
          <h3 className="text-white font-bold text-[16px] pb-[12px] border-b border-gray-600 mb-[16px]">Opening Hours</h3>
          <ul className="space-y-[14px] text-[14px] text-gray-300">
            <li>Mon-Fri: 7:00AM-7:00PM</li>
            <li>Sat: 8:00AM-7:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h3 className="text-white font-bold text-[16px] pb-[12px] border-b border-gray-600 mb-[16px]">Contact</h3>
          <ul className="space-y-[14px] text-[14px] text-gray-300">
            <li>(832) 406-2716</li>
            <li>eli@cincoservicesllc.com</li>
            <li className="leading-[1.6]">1400 Broadfield Blvd,<br />Houston, TX 77084</li>
          </ul>
        </div>

      </div>

      <div className="pt-[30px] border-t border-gray-600 text-center">
        <p className="text-[13px] text-gray-400">
          ©{new Date().getFullYear()} - Cinco Services. All Rights Reserved. Designed and Developed By: <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">StellR IT LLC</a>
        </p>
      </div>

    </div>
  </footer>
  );
};
