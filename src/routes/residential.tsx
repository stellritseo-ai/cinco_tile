import { createFileRoute } from "@tanstack/react-router";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Check, 
  Award, 
  HardHat, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Building2, 
  Sparkles, 
  Wrench, 
  Heart, 
  TrendingUp, 
  Map,
  Hammer,
  Paintbrush,
  Layers,
  ChevronDown
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import residentialHero from "@/assets/residential_hero.png";
const expertsBg = residentialHero;
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import transformImg from "@/assets/transform_section.png";
import estimateImg from "@/assets/estimate_section.png";
import showroomImg from "@/assets/showroom_section.png";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Remodeling & Construction | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium home remodeling, custom builds, roofing, painting, and tile installation for Houston homeowners. Request a free estimate today." },
      { property: "og:title", content: "Residential Remodeling & Construction - Cinco Services" },
      { property: "og:description", content: "15+ years of quality craftsmanship for Houston homes." },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "Satisfaction Guaranteed" },
    { icon: Clock, text: "15+ Years Experience" },
    { icon: Map, text: "50-Mile Service Radius" },
  ];

  const sidebarItems = [
    { title: "Full Home Remodeling", desc: "Kitchen, bathroom, whole-home updates" },
    { title: "New Home Construction", desc: "Custom-built, turnkey homes" },
    { title: "Roofing", desc: "Installation, repair, replacements" },
    { title: "Interior & Exterior Painting", desc: "Professional, flawless finishes" },
    { title: "Tile & Flooring", desc: "Ceramic, marble, hardwood, laminate" },
    { title: "Specialty Rooms", desc: "Basements, entryways, utility areas" },
  ];

  const whyChooseUs = [
    { 
      title: "15+ Years of Residential Experience", 
      desc: "We've worked on homes of all sizes, styles, and ages – bringing deep trade expertise to your property." 
    },
    { 
      title: "Full-Service Capabilities", 
      desc: "From structural framing and roofing to painting and premium custom tile, we handle everything under one roof." 
    },
    { 
      title: "Respect for Your Living Space", 
      desc: "Your home is treated as a sanctuary. We cover floors, wrap furniture in plastic, and clean up thoroughly daily." 
    },
    { 
      title: "Clear Communication", 
      desc: "You will always stay informed. We update you daily on what was accomplished and what is planned next." 
    },
    { 
      title: "No Hidden Fees", 
      desc: "Get highly detailed, itemized quotes that lay out the exact pricing. What we quote is what you pay." 
    },
    { 
      title: "Licensed & Insured", 
      desc: "We carry extensive general liability and workers' compensation coverage, ensuring full protection for your asset." 
    },
    { 
      title: "Satisfaction Guaranteed", 
      desc: "We take extreme pride in our quality. We don't pack up or consider the project complete until you are 100% happy." 
    },
    { 
      title: "Flexible Scheduling", 
      desc: "We work around your routine. Saturday hours (8:00 AM – 7:00 PM) are available to keep the project moving forward." 
    },
  ];

  const servicesList = [
    {
      id: "remodel",
      title: "Home Remodeling & Renovations",
      subtitle: "Whole-Home Remodeling & Room Transformations",
      desc: "Whether you're updating a single room or transforming your entire home, we bring vision and precision to every project.",
      image: bathroomImg,
      icon: Hammer,
      bulletPoints: [
        "Kitchen Remodeling – Custom cabinetry, stone countertops, backsplash tiles, under-cabinet lighting",
        "Bathroom Remodeling – Custom tile walk-in showers, freestanding tubs, vanities, plumbing fixtures",
        "Living Room & Family Room – Hardwood flooring, fireplace tile surrounds, accent trim work",
        "Basement Finishing – Framing and finishing rooms, lighting, media layouts, extra bedrooms",
        "Entryway & Foyer – Heavy-traffic tile layout, structural doorway details, first impressions that wow",
        "Laundry Room Upgrades – Utility cabinetry, washer/dryer surrounds, backsplashes",
        "Room Additions – Structural layout adjustments, extensions, adding square footage to your house"
      ]
    },
    {
      id: "construction",
      title: "New Home Construction",
      subtitle: "Custom New Home Construction",
      desc: "Dreaming of a home built exactly to your specifications? Cinco Services brings your vision to life with expert new construction services.",
      image: showroomImg,
      icon: Building2,
      bulletPoints: [
        "Custom floor plan design, consultation, and site plotting",
        "Site preparation, utility runs, and concrete foundation work",
        "Structural framing, load bearing beams, and structural carpentry",
        "Full roofing installation and weatherproofing",
        "Interior and exterior wall completions, insulation, and drywalling",
        "Custom tile work, hardwood flooring, and professional paint applications",
        "Final walkthrough, code checks, and robust quality assurance checks"
      ]
    },
    {
      id: "roofing",
      title: "Roofing Services",
      subtitle: "Residential Roofing – Protection You Can Count On",
      desc: "Your roof is your home's first line of defense. We provide professional roofing services to keep your family safe and dry.",
      image: estimateImg,
      icon: Shield,
      bulletPoints: [
        "Roof installation and complete shingle replacements",
        "Leak detection, storm damage repair, and flashing adjustments",
        "Roof inspections, detailed decay reports, and annual maintenance",
        "Multiple material options: asphalt shingle, standing seam metal, clay/slate tiles",
        "Emergency tarping services and swift response following major storms"
      ]
    },
    {
      id: "painting",
      title: "Interior & Exterior Painting",
      subtitle: "Professional Painting – Transform Your Home with Color",
      desc: "A fresh coat of paint can completely transform your home's appearance and feel. Our skilled painters deliver flawless results every time.",
      image: transformImg,
      icon: Paintbrush,
      bulletPoints: [
        "Interior Painting – Flawless walls, smooth ceilings, sharp trim lines, and wood staining",
        "Cabinetry Staining & Painting – High-end kitchen cabinet spray finishes",
        "Accent Walls – Specialty trim moulding, Board & Batten, and design textures",
        "Exterior House Painting – Deep power washing, scraping, caulking, and paint application",
        "Specialty Exterior Surfaces – Stucco, brick painting, siding, cedar shingles",
        "Decks & Fences – Power wash prep, custom staining, and weatherproof sealers"
      ]
    },
    {
      id: "tile",
      title: "Custom Tile & Flooring Installation",
      subtitle: "Premium Tile & Flooring – Beauty That Lasts",
      desc: "With over 15 years of tile expertise, we're the go-to choice for homeowners who want stunning, durable floors and surfaces.",
      image: tileImg,
      icon: Layers,
      bulletPoints: [
        "Tile Choices: Ceramic, Granite, Marble, Limestone, Porcelain, Slate, Onyx, Travertine",
        "Shower Installations: Waterproofing layers, custom sloped pans, linear drains, built-in niches",
        "Backsplash installs: Mosaic tiles, herringbone patterns, subway tiles, custom borders",
        "Hardwood Flooring: Engineered planks, nail-down solid oak, glue-down configurations",
        "Laminate Flooring: Waterproof, scratch-resistant installations",
        "Fireplace & Patios: Stone veneer installation, outdoor patio slate layout, tile overlays"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We visit your home, discuss your vision, take measurements, and provide a detailed, transparent estimate with no hidden fees."
    },
    {
      step: "02",
      title: "Planning & Design",
      desc: "We help you select materials, colors, and finishes. Our team creates a project plan with a clear timeline."
    },
    {
      step: "03",
      title: "Preparation",
      desc: "We protect your home with floor covers, plastic sheeting, and dust barriers. Your living space is respected at all times."
    },
    {
      step: "04",
      title: "Professional Installation",
      desc: "Our licensed team executes the work with precision – from demolition and framing to installation and finishing."
    },
    {
      step: "05",
      title: "Cleanup & Quality Check",
      desc: "We clean up thoroughly every day and do a final walkthrough with you to ensure every detail meets your expectations."
    },
    {
      step: "06",
      title: "Satisfaction Guaranteed",
      desc: "We don't consider the job complete until you're 100% happy. We're always available for follow-up questions or support."
    }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services did our master bathroom remodel – from framing and plumbing to new bathtub and custom shower tile. Flawless work. Showed up on time, cleaned up every day. Highly recommend.",
      author: "Lisa M.",
      location: "Houston"
    },
    {
      stars: 5,
      quote: "They handled our entire home remodeling project – including wall removal, interior painting, and beautiful flooring. Professional, fair price, and the quality is stunning.",
      author: "James R.",
      location: "Katy"
    },
    {
      stars: 5,
      quote: "The team replaced our roof and did exterior painting. Fast, honest, and detail-oriented. Will use them again for our kitchen remodel.",
      author: "Carmen T.",
      location: "Sugar Land"
    }
  ];

  const faqs = [
    {
      q: "Do you handle whole-home remodeling?",
      a: "Absolutely. We manage full home renovations, coordinating all trades from demolition and framing to plumbing, electrical, and the final finishing touches."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed in the State of Texas and carry extensive General Liability and Workers' Compensation coverage for your total protection and peace of mind."
    },
    {
      q: "How far do you travel for residential projects?",
      a: "We serve homeowners within a 50-mile radius of our Houston location at 1400 Broadfield Blvd, covering Katy, Sugar Land, Cypress, The Woodlands, Pearland, and surrounding areas."
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes – we provide detailed, transparent, in-home estimates with zero obligation and no hidden fees."
    },
    {
      q: "Can you work with our existing layout?",
      a: "Yes, we can update your current layout without changing the physical footprint, or we can knock down non-load-bearing and structural walls to reconfigure your home into an open-concept space."
    },
    {
      q: "How long does a typical kitchen remodel take?",
      a: "Depending on scope, material selection, and structural updates, most residential kitchen projects take 4 to 8 weeks. We provide a clear calendar schedule before we break ground."
    },
    {
      q: "Do I need to be home during the project?",
      a: "Not necessarily. Many homeowners prefer to go about their daily routines. Our crew is trustworthy, and our project manager will oversee the site daily and provide remote digital updates."
    },
    {
      q: "What happens if I discover an issue during the project?",
      a: "We address any structural discoveries or client requests immediately. We believe in transparency and will explain the issue, present solutions, and discuss any cost adjustments before executing changes."
    }
  ];

  const serviceAreas = [
    "Houston", "Katy", "Sugar Land", "Cypress", "Richmond", "Rosenberg", 
    "Fulshear", "Missouri City", "Stafford", "Pearland", "Jersey Village", 
    "Tomball", "The Woodlands"
  ];

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans">
      <TopBar />
      <Nav />

      <main className="flex-grow pb-[68px] md:pb-0">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[60vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${residentialHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Houston Home Remodeling
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[56px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Residential Services
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[20px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Transforming Houses into Dream Homes – One Family at a Time
            </p>

            {/* Trust Badge Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t border-white/10 pt-8 max-w-4xl mx-auto">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-white/95 text-[13px] md:text-[14px] font-bold">
                    <Icon className="w-[18px] h-[18px] text-[#0077b6] shrink-0" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= INTRO & SIDEBAR ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Premium Remodeling & Construction Services <br />
                  <span className="text-[#0077b6]">for Houston Homeowners</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your home is your biggest investment and your personal sanctuary. At Cinco Services, we treat it with the care and respect it deserves. From complete home renovations and custom additions to roofing replacements, interior painting, and luxury tile installations – we bring over 15 years of expertise to every residential project we undertake.
                  </p>
                  <p>
                    We understand that home improvement can be disruptive. That's why we prioritize clear communication, daily cleanup, and on-time completion. Whether you're updating a single bathroom or building your dream home from the ground up, we're here to guide you every step of the way.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Get My Free Estimate
                  </a>
                  <a 
                    href="tel:8324062716" 
                    className="inline-flex items-center gap-2.5 bg-gray-100 hover:bg-gray-150 text-[#111827] rounded-full px-8 py-3.5 text-[15px] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <Phone className="w-[16px] h-[16px]" /> Call (832) 406-2716
                  </a>
                </div>
              </Reveal>

              {/* Right Column: Sidebar box */}
              <Reveal variant="reveal-right">
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#d62828]" />
                  
                  <h3 className="text-lg font-bold uppercase tracking-wider text-sky-400 mb-6 font-sans">
                    At a Glance
                  </h3>
                  
                  <div className="space-y-4">
                    {sidebarItems.map((item, idx) => (
                      <div key={idx} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-[15px] text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d62828] shrink-0" />
                          {item.title}
                        </h4>
                        <p className="text-[13px] text-gray-400 pl-3.5 mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-[14px] space-y-3.5 text-gray-300">
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-sky-400" />
                      <a href="tel:8324062716" className="hover:underline font-bold text-white">(832) 406-2716</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-sky-400" />
                      <a href="mailto:eli@cincoservicesllc.com" className="hover:underline">eli@cincoservicesllc.com</a>
                    </p>
                    <p className="flex items-center gap-3 items-start">
                      <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span>1400 Broadfield Blvd,<br />Houston, TX 77084</span>
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= WHY HOMEOWNERS CHOOSE CINCO ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                THE CINCO DIFFERENCE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Homeowners Trust Cinco Services
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We know that inviting contractors into your home requires trust. That's why we've built our reputation on reliability, transparency, and exceptional craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((item, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-150/50 hover:shadow-xl hover:border-sky-100 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center mb-5 text-[#0077b6]">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h3 className="font-bold text-[16px] md:text-[17px] text-[#111827] mb-2 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= DETAILED SERVICES SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR SERVICES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Home Services – All Under One Roof
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We offer a complete range of residential services, so you never have to coordinate multiple contractors. From foundation to roof, inside and out – we handle it all.
              </p>
            </div>

            {/* Alternating Service Cards */}
            <div className="space-y-24 md:space-y-32">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <div 
                    key={service.id} 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                  >
                    {/* Image block */}
                    <Reveal 
                      variant={isEven ? "reveal-left" : "reveal-right"}
                      className={`relative ${!isEven ? "lg:order-2" : ""}`}
                    >
                      {/* Decorative Frame */}
                      <div className="absolute -inset-4 bg-sky-500/5 rounded-2xl -z-10 translate-x-3 translate-y-3" />
                      <div className="absolute -inset-4 border border-[#0077b6]/20 rounded-2xl -z-10 -translate-x-3 -translate-y-3" />
                      
                      <div className="overflow-hidden shadow-xl rounded-2xl aspect-[4/3]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1s]" 
                        />
                      </div>
                    </Reveal>

                    {/* Content block */}
                    <Reveal 
                      variant={isEven ? "reveal-right" : "reveal-left"}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0077b6]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-wider block">
                          {service.title}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#111827] leading-tight">
                        {service.subtitle}
                      </h3>
                      
                      <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-3 pt-2">
                        {service.bulletPoints.map((bp, bpIdx) => {
                          const parts = bp.split(" – ");
                          const hasDetails = parts.length > 1;
                          return (
                            <div key={bpIdx} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-sky-500 mt-1 shrink-0" />
                              <div className="text-[14px] md:text-[15px]">
                                {hasDetails ? (
                                  <>
                                    <strong className="text-gray-800 font-bold">{parts[0]}</strong>
                                    <span className="text-gray-500"> – {parts[1]}</span>
                                  </>
                                ) : (
                                  <span className="text-gray-700">{bp}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= ROOM-SPECIFIC SERVICES TABLE ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                ROOM SERVICES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Specialized Services for Every Room in Your Home
              </h2>
            </div>

            <Reveal variant="reveal-scale">
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-5 font-sans">Room</th>
                      <th className="p-5 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px]">
                    {[
                      { room: "Bathroom", services: "Full remodeling, shower tile, bathtub replacement, shower pan installation, vanity installation, flooring, painting" },
                      { room: "Kitchen", services: "Full remodeling, backsplash installation, flooring, painting, custom cabinetry, countertops" },
                      { room: "Entryway", services: "Tile installation, wood flooring, custom design features, painting" },
                      { room: "Basement", services: "Finishing, framing, flooring, painting, lighting, electrical work" },
                      { room: "Laundry Room", services: "Flooring, painting, cabinetry, utility sink installation, tile backsplash" },
                      { room: "Living Room", services: "Flooring installation, fireplace tile, painting, custom built-ins" },
                      { room: "Bedrooms", services: "Flooring, painting, closet organization, lighting" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-5 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.room}</td>
                        <td className="p-5 text-gray-600 leading-relaxed">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= PROCESS FOR RESIDENTIAL PROJECTS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                STEP-BY-STEP
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Residential Project Process – Simple & Stress-Free
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We make home improvement easy with a clear, structured workflow that keeps you informed and involved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-sky-100 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="text-6xl font-black text-slate-200/50 absolute top-4 right-6 select-none group-hover:text-[#0077b6]/10 transition-colors">
                    {step.step}
                  </span>
                  
                  <h3 className="font-bold text-[17px] text-[#111827] mb-3 font-sans pr-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-[13.5px] md:text-[14.5px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= RESIDENTIAL GALLERY ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                PROJECT GALLERY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Residential Projects – See Our Work
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Browse examples of our residential remodels, new construction, roofing, painting, and custom tile projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom Master Bathroom Remodel", img: bathroomImg, desc: "Framing & custom tile layout" },
                { title: "Premium Kitchen Backsplash", img: kitchenImg, desc: "Herringbone tile detailing" },
                { title: "Full Home Remodeling Layout", img: transformImg, desc: "Flooring, paint, and trim work" },
                { title: "Residential Roofing Project", img: estimateImg, desc: "Expert shingle replacement" },
                { title: "Houston Construction Project", img: expertsBg, desc: "Framing & exterior solutions" },
                { title: "Living Room Flooring Installation", img: tileImg, desc: "Custom tile work" },
              ].map((proj, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[16px] text-gray-800 font-sans group-hover:text-[#0077b6] transition-colors">{proj.title}</h3>
                    <p className="text-[13px] text-gray-400 mt-1 font-medium">{proj.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                REVIEWS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                What Houston Homeowners Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-gray-50 border border-gray-100 p-8 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-sky-100 transition-all duration-300 relative group"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(test.stars)].map((_, starIdx) => (
                        <Sparkles key={starIdx} className="w-[16px] h-[16px] text-[#0077b6] fill-[#0077b6]" />
                      ))}
                    </div>
                    
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed italic mb-6">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <strong className="text-gray-800 font-bold block text-[15px]">{test.author}</strong>
                    <span className="text-gray-400 text-[12px] uppercase tracking-wider block font-bold">{test.location}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                QUESTIONS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Frequently Asked Questions About Residential Services
              </h2>
            </div>

            <Reveal variant="reveal-scale" className="bg-white p-6 md:p-8 rounded-2xl border border-gray-150 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 py-2 last:border-0">
                    <AccordionTrigger className="text-[15px] md:text-[16px] font-bold text-gray-850 hover:no-underline hover:text-[#0077b6] transition-colors leading-snug py-4 cursor-pointer">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] text-gray-500 leading-relaxed pt-2 pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

          </div>
        </section>

        {/* ================= CREDENTIALS & SERVICE RADIUS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Credentials */}
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#0077b6]" />
                  <h3 className="text-2xl font-bold font-sans text-[#111827]">
                    Licensed, Insured & Ready to Work
                  </h3>
                </div>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  You can trust Cinco Services to handle your residential project with safety and accountability. We hold all necessary licenses and comprehensive general liability and workers' compensation coverage.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    "Fully Licensed in the State of Texas",
                    "General Liability Insurance ($2M+ Coverage)",
                    "Worker's Compensation Coverage",
                    "Industry Training & Certifications",
                    "Member of Local Houston Business Organizations"
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 px-5 py-4 rounded-xl border border-gray-100 hover:border-sky-100 transition-colors">
                      <FileText className="w-[18px] h-[18px] text-[#0077b6]" />
                      <span className="text-[15px] font-bold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Service Areas */}
              <Reveal variant="reveal-right" className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#0077b6]" />
                  <h3 className="text-2xl font-bold font-sans text-[#111827]">
                    Proudly Serving Houston-Area Homeowners
                  </h3>
                </div>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  We provide residential services throughout Houston and nearby communities within a 50-mile radius.
                </p>

                <div className="space-y-4 pt-2">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                    We serve homeowners in:
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceAreas.map((city, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-50 text-gray-700 px-4 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold border border-gray-100 shadow-sm hover:bg-[#0077b6] hover:text-white hover:border-[#0077b6] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-[14px] text-gray-500 font-medium italic pt-2">
                    Additional communities available – contact us to confirm service in your area.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal variant="reveal-scale" className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111827] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/30">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d62828]/10 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
                Ready to Transform Your Home?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're planning a small update or a complete home transformation, Cinco Services is here to make it happen. Let's talk about your project and create something beautiful together.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Book My Free In-Home Estimate
                </a>
                <a 
                  href="tel:8324062716" 
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-full px-8 py-4 text-[15px] font-bold hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <Phone className="w-[16px] h-[16px]" /> Call (832) 406-2716
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      <Footer />
      <LiveChat />
      {/* Mobile Sticky Bottom CTA */}
      <div className="mobile-sticky-cta md:hidden">
        <a
          href="tel:8324062716"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0077b6] text-white rounded-xl py-3 text-[14px] font-bold active:scale-[0.97] transition-all"
        >
          <Phone className="w-[16px] h-[16px] shrink-0" /> Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#d62828] text-white rounded-xl py-3 text-[14px] font-bold active:scale-[0.97] transition-all shadow-[0_4px_14px_0_rgba(214,40,40,0.3)]"
        >
          <Calendar className="w-[16px] h-[16px] shrink-0" /> Free Estimate
        </a>
      </div>
    </div>
  );
}
