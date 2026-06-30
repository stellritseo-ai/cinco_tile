import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Home,
  Hammer,
  Utensils,
  Bath,
  Paintbrush,
  Layers,
  Grid,
  ChevronDown,
  Quote,
  Star,
  Users
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import tileInstallationHero from "@/assets/tile_installation_hero.png";
const expertsImg = tileInstallationHero;
const showroomImg = tileInstallationHero;
const transformImg = tileInstallationHero;
const bathroomImg = tileInstallationHero;
const kitchenImg = tileInstallationHero;
const tileImg = tileInstallationHero;
const estimateImg = tileInstallationHero;

export const Route = createFileRoute("/tile-installation")({
  head: () => ({
    meta: [
      { title: "Premium Tile Installation & Repair | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium tile installations in Houston. Custom backsplashes, luxury bathroom tiling, curbless showers, and outdoor stone patios." },
      { property: "og:title", content: "Tile Installation Services - Cinco Services" },
      { property: "og:description", content: "Expert custom marble, ceramic, porcelain, and glass tile fitting in Houston, Katy, and Cypress, TX." },
    ],
  }),
  component: TileInstallationPage,
});

function TileInstallationPage() {
  const trustBadges = [
    { text: "15+ Years Tile Expertise" },
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "Premium Materials" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Floors, Showers, Backsplashes, Repairs" },
    { icon: Clock, label: "Tile Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & Design Check" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Tile Expertise", desc: "We have installed every type of tile in hundreds of luxury properties across Houston." },
    { icon: Wrench, title: "Premium Materials", desc: "We work with top-quality tile brands, waterproof membranes (Schluter-Kerdi), and high-performance grout systems." },
    { icon: Sparkles, title: "Precision Installation", desc: "Perfect cuts, straight grout lines, uniform spacing, and flawless trim profiles." },
    { icon: Grid, title: "Wide Selection", desc: "Expertise in ceramic, porcelain, marble, granite, slate, travertine, limestone, onyx, and glass." },
    { icon: Layers, title: "Custom Designs & Layouts", desc: "Specialists in herringbone, chevron, diamond, brick layout, and mosaic border inserts." },
    { icon: Building2, title: "Residential & Commercial", desc: "We provide high-durability tiles for commercial storefronts, offices, restaurants, and home remodeling." },
    { icon: Shield, title: "Proper Subfloor Preparation", desc: "We inspect, reinforce, and level the subfloor structure – the absolute key to preventing cracked grout lines." },
    { icon: Heart, title: "Clean & Respectful", desc: "We protect flooring with runner boards, use wet saws outside, and clean up thoroughly daily." },
    { icon: FileText, title: "No Hidden Fees", desc: "Detailed transparent quotes covering tile square footage, mastic/mortars, grouting, and sealing." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Full general liability and worker's compensation insurance for complete peace of mind." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "We stand behind all of our tile work. We don't consider the job complete until you're 100% happy." }
  ];

  const tileTypes = [
    { type: "Ceramic Tile", bestFor: "Kitchens, bathrooms, entryways", features: "Affordable, versatile, easy to maintain" },
    { type: "Porcelain Tile", bestFor: "High-traffic areas, bathrooms, outdoor", features: "Extremely durable, water-resistant, low-maintenance" },
    { type: "Marble Tile", bestFor: "Bathrooms, entryways, luxury spaces", features: "Timeless elegance, unique veining, premium" },
    { type: "Granite Tile", bestFor: "Kitchens, entryways, high-traffic", features: "Heat-resistant, scratch-resistant, stunning" },
    { type: "Slate Tile", bestFor: "Entryways, patios, rustic spaces", features: "Natural texture, slip-resistant, earthy" },
    { type: "Travertine Tile", bestFor: "Bathrooms, patios, Mediterranean style", features: "Classic warmth, natural beauty, timeless" },
    { type: "Limestone Tile", bestFor: "Bathrooms, living spaces, gentle-traffic", features: "Soft, natural, elegant" },
    { type: "Onyx Tile", bestFor: "Accent walls, luxury bathrooms", features: "Unique, dramatic, translucent beauty" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your property, measure the space, discuss your design vision, and provide a detailed estimate." },
    { step: "Step 2", title: "Design & Material Selection", desc: "We help you select the perfect tile size, color, grout type, and layout pattern, providing samples." },
    { step: "Step 3", title: "Subfloor & Surface Preparation", desc: "We verify and prepare your subfloor or wall structure – ensuring it's level, clean, and waterproofed (using vapor barriers)." },
    { step: "Step 4", title: "Tile Layout & Planning", desc: "We plan the layout lines to minimize thin sliver cuts on borders and ensure perfect symmetry." },
    { step: "Step 5", title: "Professional Tile Installation", desc: "Our skilled masons install your tile with precision – cutting, fitting, and setting each tile using premium mortars." },
    { step: "Step 6", title: "Grouting & Sealing", desc: "We apply high-grade grout, wipe down haze, and seal the grout lines to protect against staining and moisture." },
    { step: "Step 7", title: "Cleanup & Quality Check", desc: "We clean up thoroughly daily, remove spacers, wash surfaces, and inspect every border." },
    { step: "Step 8", title: "Final Walkthrough", desc: "We walk through the finished project with you to ensure perfection. We don't finish until you're 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services installed porcelain tile throughout our first floor. The craftsmanship is outstanding – perfect cuts, straight lines, and beautiful grout work. We highly recommend them!",
      author: "James & Lisa R., Katy"
    },
    {
      stars: 5,
      quote: "We had marble tile installed in our master bathroom. The team at Cinco Services did a flawless job. The shower is stunning, and the floors are beautiful.",
      author: "Sarah M., Sugar Land"
    },
    {
      stars: 5,
      quote: "They installed a custom herringbone backsplash in our kitchen. It's absolutely gorgeous. The attention to detail is incredible.",
      author: "David & Emily T., Houston"
    },
    {
      stars: 5,
      quote: "We needed tile installed on our patio. Cinco Services handled everything – from preparation to sealing. The patio looks amazing and we love spending time out there.",
      author: "The Johnson Family, Cypress"
    },
    {
      stars: 5,
      quote: "They replaced our shower tile and did a beautiful job. The niche and bench are perfect. Professional, clean, and excellent quality.",
      author: "Maria G., Richmond"
    },
    {
      stars: 5,
      quote: "We had commercial tile installed in our restaurant. Cinco Services worked around our schedule and delivered stunning results. Highly recommend.",
      author: "Marco R., Restaurant Owner, Houston"
    }
  ];

  const faqs = [
    {
      q: "What is the most durable tile for floors?",
      a: "Porcelain tile is the most durable, dense option, making it highly scratch-resistant, water-resistant, and ideal for high-traffic entryways and bathrooms."
    },
    {
      q: "How much does tile installation cost?",
      a: "Costs vary based on tile material (e.g., standard ceramic vs. luxury marble), subfloor leveling requirements, and layout pattern complexity (like herringbone or mosaics). We provide detailed free estimates."
    },
    {
      q: "How long does tile installation take?",
      a: "Most residential tiling projects take between 1 to 5 days depending on the size of the room, drying times for waterproofing membranes, and grouting."
    },
    {
      q: "Do you remove old tile?",
      a: "Yes – we handle complete demolition, subfloor scraping, and disposal of old tile/flooring as part of our service."
    },
    {
      q: "Can you install heated floors under tile?",
      a: "Yes – we can install electric radiant floor heating systems directly under the tile backer board during the preparation phase."
    },
    {
      q: "What is the best tile for a shower?",
      a: "Porcelain is the most popular for its near-zero water absorption. Glass mosaic is excellent for highlights, and slip-resistant natural slate or small-format mosaics are perfect for shower floors."
    },
    {
      q: "How do I choose grout color?",
      a: "Matching grout colors create a seamless monolithic look. Contrasting grout (e.g., dark grout with white subway tile) emphasizes patterns. We provide grout charts during design."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and insured with general liability and workers' comp for all masonry and tiling projects."
    },
    {
      q: "Do you offer commercial tile installation?",
      a: "Yes – we tile commercial restaurant kitchens, lobbies, office restrooms, retail storefront corridors, and commercial kitchens."
    },
    {
      q: "Can you install tile on walls?",
      a: "Absolutely – we tile shower surrounds, kitchen backsplashes, floor-to-ceiling fireplace facades, and vertical feature walls."
    },
    {
      q: "What is the difference between ceramic and porcelain tile?",
      a: "Porcelain is fired at higher temperatures, making it denser, harder, and less porous than standard ceramic. It is ideal for freeze/thaw exterior applications and high-moisture showers."
    },
    {
      q: "Do you provide tile samples?",
      a: "Yes – we bring material swatches directly to your home, or coordinate visits with local Houston tile distributors to source custom stones."
    }
  ];

  const cities = [
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
        <section className="relative min-h-[60vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${tileImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Tile
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Tile Installation
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Premium Tile Installation – Craftsmanship That Transforms Every Surface
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Tile Estimate
              </a>
              <a 
                href="tel:8324062716"
                className="bg-white/10 hover:bg-white/15 border border-white/25 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all"
              >
                Call (832) 406-2716
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 border-t border-white/10 pt-8 max-w-3xl mx-auto">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/95 text-[13px] md:text-[14px] font-bold">
                  <CheckCircle className="w-[16px] h-[16px] text-sky-400 shrink-0" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTRO & SIDEBAR ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Expert Tile Installation <br />
                  <span className="text-[#0077b6]">Beauty, Durability, and Precision for Every Space</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Tile is one of the most versatile, durable, and beautiful materials you can choose for your home or business. At Cinco Services, we specialize in professional tile installation that transforms floors, walls, showers, backsplashes, and more into stunning works of art.
                  </p>
                  <p>
                    With over 15 years of hands-on tile expertise, we've installed thousands of square feet of ceramic, porcelain, marble, granite, slate, travertine, and more across Houston. Every installation is done with precision cutting, proper subfloor preparation, and meticulous attention to detail – ensuring your tile looks flawless and lasts for decades.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request a Custom Tile Design
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
                    {atAGlance.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex gap-3 border-b border-white/5 pb-3.5 last:border-b-0 last:pb-0">
                          <Icon className="w-[16px] h-[16px] text-sky-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">{item.label}</span>
                            <span className="text-[13px] md:text-[14px] text-white font-bold leading-snug">{item.value}</span>
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

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                MASONRY STANDARDS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Property Owners Trust Us for Tile Installation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal 
                    key={idx} 
                    variant="reveal-scale" 
                    className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 font-sans mb-3">{item.title}</h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= DETAILED SERVICE BLOCKS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR SERVICES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Tile Installation
              </h2>
            </div>

            {/* Bathroom & Shower */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Spa Showers & Baths
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Bathroom & Shower Tile Installation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We specialize in waterproof, custom shower designs using Schluter-Kerdi backings. From curbless shower layouts to recessed shampoo niches and tiled bench seating, we combine luxury styling with watertight engineering.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Shower wall tile fittings",
                    "Slip-resistant floor mosaics",
                    "Waterproof shower pan prep",
                    "Recessed shampoo niches",
                    "Custom built-in shower benches",
                    "Curbless entry design options",
                    "Marble, porcelain, glass tiles",
                    "Luxury bathtub surround tiling"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={bathroomImg} alt="Bathroom tile installation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Kitchen & Backsplashes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={kitchenImg} alt="Kitchen backsplash tile" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Kitchen Accents
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Kitchen Backsplash & Wall Tile
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Enhance the heart of your home with custom tile backsplashes. We install subway tiles, mosaic borders, herringbone patterns, and premium stone surfaces behind ranges and countertops.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Custom kitchen backsplashes",
                    "Subway tile layouts",
                    "Herringbone & chevron patterns",
                    "Glass & mosaic highlight walls",
                    "Durable kitchen tile floors",
                    "Tile countertop replacements",
                    "Decorative window framing tile",
                    "Easy-to-clean stain-proof grout"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Fireplaces & Outdoor Patios */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Fireplace */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Fireplace Tile Installation</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Turn your fireplace hearth into an elegant focal point. We apply heat-safe large format porcelain, rustic slates, or luxurious marble slabs.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Floor-to-ceiling fireplace facades", "Heat-safe porcelain/ceramic tile", "Custom hearth stone setups", "Decorative mantle tile borders"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Outdoor Patios */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Patio & Outdoor Tile</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Extend your living space outdoors with frost-resistant, slip-resistant slate, travertine, or concrete tiles. Perfect for Houston pool decks and outdoor kitchen prep areas.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Slip-resistant slate & travertine tiles", "Frost-resistant outdoor porcelain", "Outdoor kitchen tiling", "Pool deck & pathway tiles"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Repair & Restoration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Tile Care
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Tile Repair & Restoration
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Don't tear out the entire floor for a few cracked pieces. We remove individual broken tiles, match grout colors, re-adhere loose tiles, and seal lines to restore original luster.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-650 font-medium">
                  {[
                    "Cracked or broken tile replacement",
                    "Grout repair & color matching",
                    "Loose tile re-adhesion",
                    "Tile cleaning & deep sealing",
                    "Subfloor board water damage repair",
                    "Shower pan waterproofing checks",
                    "Grout haze cleaning",
                    "Tile chip restoration"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Tile restoration" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ================= TILE MATRIX COMPARISON ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                MATERIAL GUIDE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Tile Flooring Options Matrix
              </h2>
            </div>

            <Reveal variant="reveal-scale">
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Tile Type</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px]">
                    {tileTypes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.bestFor}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= TILE INSTALLATION PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Tile Installation Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Precision cuts, proper subfloor preparation, flawless grout lines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {processSteps.map((step, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <span className="absolute top-4 right-4 bg-[#d62828] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-extrabold text-[15px] text-[#111827] font-sans mb-3 mt-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= GALLERY PLACEHOLDER ================= */}
        <section className="py-20 bg-white border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMPLETED WORK
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                See Our Tile Installation Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: tileImg, title: "Precision Shower surround tile" },
                { img: showroomImg, title: "Foyer Marble Flooring" },
                { img: transformImg, title: "Kitchen Herringbone Backsplash" },
                { img: expertsImg, title: "Outdoor Stone Patio installation" },
                { img: estimateImg, title: "Custom Shower niche tiling" },
                { img: bathroomImg, title: "Starlike Bathtub surround tiling" }
              ].map((item, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] border border-gray-150"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                    <span className="text-white font-bold text-[15px]">{item.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                REVIEWS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                What Our Clients Say About Our Tile Installations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between relative"
                >
                  <Quote className="absolute top-4 right-6 w-8 h-8 text-sky-100" />
                  <div>
                    <div className="flex gap-1 mb-4 text-[#0077b6]">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-[14.5px] italic leading-relaxed text-gray-600">
                      "{t.quote}"
                    </p>
                  </div>
                  <strong className="block mt-5 text-[14px] text-gray-800 text-right">
                    – {t.author}
                  </strong>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                FAQ
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Frequently Asked Questions About Tile Installation
              </h2>
            </div>

            <Reveal variant="reveal-scale" className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-150">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200/50 py-2 last:border-0">
                    <AccordionTrigger className="text-[15px] md:text-[16px] font-bold text-gray-800 hover:no-underline hover:text-[#0077b6] transition-colors leading-snug py-4 cursor-pointer">
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

        {/* ================= AREAS WE SERVE ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COVERAGE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Proudly Serving Houston & Surrounding Communities
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We provide professional tile installation services throughout Houston and nearby communities within a 50-mile radius.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {cities.map((city, idx) => (
                <span 
                  key={idx} 
                  className="bg-white text-gray-700 px-4 py-2 rounded-full text-[13.5px] font-bold border border-gray-200"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-center text-[13.5px] text-gray-400 font-semibold italic mt-6">
              Additional communities available – contact us to confirm service in your area.
            </p>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal variant="reveal-scale" className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111827] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/30">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d62828]/10 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
                Ready to Transform Your Space with Beautiful Tile?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                From stunning floors and showers to custom backsplashes and outdoor patios, Cinco Services delivers exceptional tile installation that lasts. Contact us today for a free estimate and design consultation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Tile Estimate
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
