import {
  Grid,
  Bath,
  Hammer,
  ShowerHead,
  Wrench,
  RefreshCw,
  Layers,
  Ruler,
  LayoutGrid,
  Flame,
  Sun,
  Home,
  ArrowRight,
  Paintbrush
} from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Reveal } from "@/components/ui/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import sExperts from "@/assets/experts.jpg";
import sTransform from "@/assets/transform.jpg";
import sEstimate from "@/assets/estimate.jpg";
import sShowroom from "@/assets/showroom.jpg";
import sHero from "@/assets/hero.jpg";
import sFAQ from "@/assets/faq.jpg";
import sStairs from "@/assets/service-stairs.jpg";

import tileInstallation from "@/assets/tile_installation.png";
import bathroomRemodel from "@/assets/bathroom_remodel.png";
import kitchenBacksplash from "@/assets/kitchen_backsplash.png";

export const Services = () => {
  const items = [
    {
      icon: Hammer,
      title: "Home Remodeling",
      desc: "Full-scale home remodeling, kitchen conversions, basement finishes, and custom structural upgrades.",
      tags: ["Kitchen Remodel", "Basement Finishes", "Additions", "Custom Layouts"],
      img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Home,
      title: "New Home Construction",
      desc: "Custom new home construction, structural framing, foundation work, and complete turn-key residential builds.",
      tags: ["Custom Builds", "Framing", "Foundations", "Turn-Key Design"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Home,
      title: "Roofing Services",
      desc: "Professional roof inspections, leak repairs, shingle installations, and complete roof replacements.",
      tags: ["Roof Repair", "Replacements", "Shingles", "Inspections"],
      img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Grid,
      title: "Floor Tile Installation",
      desc: "Premium stone and tile floor layouts built to endure.",
      tags: ["Ceramic", "Granite", "Marble", "Limestone", "Porcelain", "Slate", "Onyx", "Travertine"],
      img: tileInstallation,
    },
    {
      icon: Bath,
      title: "Bathroom Tiles Installation",
      desc: "Stunning, slip-resistant designs styled for wet environments.",
      tags: ["Waterproof", "Slip-Resistant", "Showers", "Walls", "Floors"],
      img: bathroomRemodel,
    },
    {
      icon: Hammer,
      title: "Complete Bathroom Remodeling",
      desc: "Full layout conversions, modern updates, and high-end styling.",
      tags: ["Full Transformation", "Tile Work", "Fixtures", "Layouts"],
      img: bathroomRemodel,
    },
    {
      icon: ShowerHead,
      title: "Shower Tiles Installation",
      desc: "Tile surrounds, custom built-in niches, and secure backing.",
      tags: ["Custom Patterns", "Niches", "Waterproofing"],
      img: sTransform,
    },
    {
      icon: Wrench,
      title: "Shower Pan Installation & Repair",
      desc: "Engineered leak-free bases, proper slope, and replacements.",
      tags: ["Leak-Free Bases", "Sloped Mortar", "Replacements"],
      img: sExperts,
    },
    {
      icon: RefreshCw,
      title: "Bathtub Replacement",
      desc: "Premium tub installations complete with elegant tile surrounds.",
      tags: ["New Tubs", "Tub Surrounds", "Tile Framing"],
      img: sFAQ,
    },
    {
      icon: Layers,
      title: "Hardwood Floor Installation",
      desc: "Meticulous installation of classic solid and engineered woods.",
      tags: ["Solid Wood", "Engineered", "Subfloor Prep"],
      img: sEstimate,
    },
    {
      icon: Ruler,
      title: "Tile Floor Installation",
      desc: "Budget-friendly, highly durable, and modern click-lock options.",
      tags: ["Affordable", "Durable", "Stylish Planks"],
      img: sShowroom,
    },
    {
      icon: LayoutGrid,
      title: "Backsplash Installation",
      desc: "Detailed accent tiling for custom kitchens and bathrooms.",
      tags: ["Kitchen", "Bathroom", "Accent Walls"],
      img: kitchenBacksplash,
    },
    {
      icon: Flame,
      title: "Fireplace Tiles Installation",
      desc: "Heat-safe, elegant tile faces and decorative surrounds.",
      tags: ["Heat-Safe", "Stone & Tile", "Accents"],
      img: sHero,
    },
    {
      icon: Sun,
      title: "Patio Tiles Installation",
      desc: "Beautiful outdoor-rated, weather-resistant tile overlays.",
      tags: ["Outdoor-Rated", "Slip-Resistant", "Weatherproof"],
      img: sShowroom,
    },
    {
      icon: Home,
      title: "Specialty Rooms",
      desc: "Tailored tile and flooring for key high-traffic home spaces.",
      tags: ["Kitchen", "Entryway", "Basement", "Laundry Room"],
      img: sStairs,
    },
    {
      icon: Paintbrush,
      title: "Exterior Painting",
      desc: "Premium outdoor painting services for siding, decks, trim, and brick to protect and beautify your home.",
      tags: ["Siding & Trim", "Decks & Fences", "Weatherproofing", "Brick Painting"],
      img: "https://images.unsplash.com/photo-1778342259272-142fa3f81859?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Paintbrush,
      title: "Interior Painting",
      desc: "Precise wall, ceiling, and trim painting with meticulous prep work, clean lines, and premium zero-VOC paints.",
      tags: ["Walls & Ceilings", "Trim & Doors", "Meticulous Prep", "Color Selection"],
      img: "https://images.unsplash.com/photo-1648475237029-7f853809ca14?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // First 3 items for the top row grid
  const topItems = items.slice(0, 3);
  // Remaining items for the second row slider
  const slideItems = items.slice(3);

  return (
    <section id="services" className="py-[50px] sm:py-[60px] bg-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <Reveal className="flex flex-col justify-center h-full">
            <div className="pr-2 mb-6 lg:mb-0">
              <span className="inline-flex items-center bg-brand text-black rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-5">
                Services
              </span>
              <h2 className="text-3xl md:text-[42px] leading-tight font-extrabold text-ink tracking-tight font-sans">
                Complete Remodeling &<br />Construction Services
              </h2>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                At Cinco Services, we provide full-service home remodeling, custom new construction, and professional roofing alongside our premium custom tile and flooring specialties. From initial framing and foundations to the final paintbrush stroke and custom backsplash, our team brings precision, safety, and care to every project. Whatever your vision, we build it to last.
              </p>
              <div className="mt-7">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 bg-[#d62828] text-white rounded-full px-7 py-3 text-[14px] font-bold shadow-[0_4px_14px_0_rgba(214,40,40,0.3)] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <span className="text-base">👉</span> View All Services
                </a>
              </div>
            </div>
          </Reveal>

          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {topItems.map((s, i) => (
              <Reveal key={s.title} variant="reveal-scale" className={`stagger-${i + 1} h-full`}>
                <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-ink h-[220px] sm:h-[300px] xl:h-[380px] border border-border/20 cursor-pointer">
                  {/* Background image */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                    <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="font-sans text-lg xl:text-xl font-bold text-white leading-tight">
                        {s.title}
                      </h3>

                      {/* Hover detail drawer */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                        <p className="text-[12px] text-white/80 leading-snug mt-1.5 line-clamp-2 max-w-[90%]">
                          {s.desc}
                        </p>
                        {s.tags && (
                          <div className="flex flex-wrap gap-1 justify-center max-w-[90%]">
                            {s.tags.slice(0, 3).map(t => (
                              <span key={t} className="text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/10 uppercase">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-1">
                          <span className="relative inline-flex items-center gap-1 text-red-500 font-bold text-[10px] uppercase tracking-widest pb-0.5">
                            <span>View More</span>
                            <ArrowRight className="w-3 h-3" />
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red-500" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Second Row Grid: Slider / Carousel */}
        <div className="mt-4 sm:mt-6 relative px-0 sm:px-2 pb-6 sm:pb-8">
          <Reveal>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full relative"
            >
              <CarouselContent className="-ml-5">
                {slideItems.map((s, i) => (
                  <CarouselItem key={s.title} className="pl-4 sm:pl-5 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-ink h-[260px] sm:h-[300px] xl:h-[380px] border border-border/20 cursor-pointer">
                      {/* Background image */}
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                      {/* Card Content */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                        <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                          <h3 className="font-sans text-lg xl:text-xl font-bold text-white leading-tight">
                            {s.title}
                          </h3>

                          {/* Hover detail drawer */}
                          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                            <p className="text-[12px] text-white/80 leading-snug mt-1.5 line-clamp-2 max-w-[90%]">
                              {s.desc}
                            </p>
                            {s.tags && (
                              <div className="flex flex-wrap gap-1 justify-center max-w-[90%]">
                                {s.tags.slice(0, 3).map(t => (
                                  <span key={t} className="text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/10 uppercase">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="pt-1">
                              <span className="relative inline-flex items-center gap-1 text-red-500 font-bold text-[10px] uppercase tracking-widest pb-0.5">
                                <span>View More</span>
                                <ArrowRight className="w-3 h-3" />
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red-500" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel navigation arrows */}
              <CarouselPrevious className="-left-4 lg:-left-12 bg-white/95 hover:bg-white text-ink hover:text-[#d62828] border border-border/60 shadow-md h-10 w-10 transition-all rounded-full flex items-center justify-center" />
              <CarouselNext className="-right-4 lg:-right-12 bg-white/95 hover:bg-white text-ink hover:text-[#d62828] border border-border/60 shadow-md h-10 w-10 transition-all rounded-full flex items-center justify-center" />
            </Carousel>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

