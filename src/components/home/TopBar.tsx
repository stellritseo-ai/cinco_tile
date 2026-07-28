import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useSettings } from "@/context/settings-context";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" }
];

export const TopBar = () => {
  const { settings } = useSettings();
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTranslate = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,vi",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        return true;
      }
      return false;
    };

    // Define callback globally
    (window as any).googleTranslateElementInit = () => {
      initTranslate();
    };

    const id = "google-translate-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      initTranslate();
    }

    const styleId = "google-translate-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .skiptranslate, iframe.goog-te-banner-frame, .goog-te-banner-frame {
          display: none !important;
          visibility: hidden !important;
        }
        body {
          top: 0px !important;
        }
        #goog-gt-tt {
          display: none !important;
        }
        .goog-tooltip, .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    // Read google translate cookie
    const getLanguageFromCookie = () => {
      const match = document.cookie.match(/googtrans=([^;]+)/);
      if (match) {
        const parts = match[1].split("/");
        const lang = parts[parts.length - 1];
        if (["en", "es", "fr", "vi"].includes(lang)) {
          return lang;
        }
      }
      return "en";
    };
    setSelectedLang(getLanguageFromCookie());
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    
    // Set cookie for path and domain
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain};`;
    if (domain === "localhost" || domain === "127.0.0.1") {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=localhost;`;
    }

    // Force page reload to guarantee that the Google Translate script processes the entire DOM immediately
    window.location.reload();
  };

  const currentLanguage = languages.find((lang) => lang.code === selectedLang) || languages[0];

  return (
    <div className="bg-[#111827] text-white/90 text-[12px] sm:text-[13px] font-sans w-full relative z-[9999]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-[8px] sm:py-[10px] flex items-center justify-between gap-3 flex-wrap">
        <div className="hidden sm:flex items-center gap-[12px] sm:gap-[20px] flex-wrap">
          <span className="flex items-center gap-[6px] whitespace-nowrap">
            <MapPin className="w-[13px] h-[13px] text-[#0077b6] shrink-0" /> Serving Houston &amp; nearby
          </span>
          <span className="hidden md:flex items-center gap-[6px] whitespace-nowrap">
            <Clock className="w-[13px] h-[13px] text-[#0077b6] shrink-0" /> Mon-Fri: {settings.hoursWeekday} | Sat: {settings.hoursSaturday}
          </span>
        </div>
        <div className="flex items-center gap-[20px] ml-auto flex-wrap">
          <a
            href={`tel:${settings.officePhone.replace(/\\D/g, "")}`}
            className="flex items-center gap-[6px] font-bold text-white hover:text-[#0077b6] transition-colors py-1 whitespace-nowrap"
          >
            <Phone className="w-[13px] h-[13px] shrink-0" /> {settings.officePhone}
          </a>

          {/* Hidden Google Translate container */}
          <div id="google_translate_element" className="hidden" />

          {/* Language Selector Dropdown */}
          <div ref={dropdownRef} className="relative z-[9999]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded px-2.5 py-1 text-white text-[12px] sm:text-[13px] font-medium transition-all cursor-pointer outline-none focus:border-sky-400"
            >
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <ChevronDown className={`w-[12px] h-[12px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-1.5 w-36 bg-slate-900 border border-white/10 rounded-lg shadow-xl overflow-hidden py-1 z-[9999]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-white text-[12px] sm:text-[13px] transition-colors cursor-pointer hover:bg-white/10 ${
                      selectedLang === lang.code ? "bg-white/5 font-semibold text-sky-400" : ""
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
