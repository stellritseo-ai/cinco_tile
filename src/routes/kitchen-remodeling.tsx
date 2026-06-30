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
import kitchenRemodelHero from "@/assets/kitchen_remodel_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title: "Custom Kitchen Remodeling & Cabinetry | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers luxury kitchen remodeling in Houston. Custom cabinetry, quartz & granite countertops, herringbone tile backsplashes, and flooring." },
      { property: "og:title", content: "Kitchen Remodeling Services - Cinco Services" },
      { property: "og:description", content: "Complete gourmet chef kitchens, custom islands, and open-concept kitchen renovations in Katy, Cypress, and Sugar Land, TX." },
    ],
  }),
  component: KitchenRemodelingPage,
});

function KitchenRemodelingPage() {
  const trustBadges = [
    { text: "15+ Years Experience" },
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "Custom Design" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Full Remodels, Custom Cabinetry, Quartz Countertops, Backsplashes, Islands" },
    { icon: Clock, label: "Remodeling Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & 3D Space Layouts" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Kitchen Remodeling Expertise", desc: "We've designed and remodeled hundreds of kitchens across Houston from simple updates to open-concept suites." },
    { icon: Wrench, title: "Full-Service Capabilities", desc: "Demolition, framing, plumbing rough-in, electrical wiring, custom cabinets, stone tops, and tiling all under one roof." },
    { icon: Sparkles, title: "Custom Design Solutions", desc: "We customize layouts based on your family storage needs, cooking habits, and personal design tastes." },
    { icon: Layers, title: "Premium Materials", desc: "We work with top-tier solid wood cabinets, high-performance hinges, name-brand stones, and premium paints." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Complete general liability and workers' compensation coverage protecting your property during work." },
    { icon: HardHat, title: "Clean & Respectful", desc: "We block dust with plastic shields, cover flooring, and clean up the work site daily to keep your home comfortable." },
    { icon: FileText, title: "Transparent Pricing", desc: "Our highly detailed estimates outline cabinet boxes, hardware, countertops, tiling, and structural labor." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all workmanship. We don't consider the remodeling project complete until you are 100% happy." }
  ];

  const cabinetStyles = [
    { style: "Shaker", desc: "Clean, simple, recessed panel door structure", bestFor: "Modern, transitional, traditional designs" },
    { style: "Flat-Panel / Slab", desc: "Smooth, flat, minimalist cabinet facades", bestFor: "Contemporary, modern, European designs" },
    { style: "Raised-Panel", desc: "Traditional detailing with ornate profiling lines", bestFor: "Traditional, classic, luxury homes" },
    { style: "Glass-Front", desc: "Display cabinet frames with glass panels", bestFor: "Open, airy feel, displaying fine dishware" },
    { style: "Open Shelving", desc: "Floating wood or metal shelves with no doors", bestFor: "Modern, farmhouse, coffee stations" },
    { style: "Custom Built-Ins", desc: "Tailored spice racks, pull-out bins, lazy Susans", bestFor: "Maximizing corner space storage" }
  ];

  const countertopMaterials = [
    { mat: "Granite", features: "Highly heat-resistant, scratch-resistant, natural unique veining patterns", bestFor: "High-traffic kitchens, classic style" },
    { mat: "Quartz", features: "Non-porous, stain-resistant, consistent color, zero sealing required", bestFor: "Busy households, contemporary designs" },
    { mat: "Marble", features: "Timeless elegance, cooling texture, premium natural movement", bestFor: "Luxury kitchens, pastry chefs, baking stations" },
    { mat: "Solid Surface", features: "Seamless sink integrations, easily repaired, non-porous joints", bestFor: "Low-maintenance, contemporary decks" },
    { mat: "Butcher Block", features: "Warm, natural wood texture; can be sanded and re-oiled", bestFor: "Farmhouse style, food preparation areas" },
    { mat: "Tile", features: "Affordable, versatile design mixes, custom patterns", bestFor: "Budget-friendly, Mediterranean style" },
    { mat: "Concrete", features: "Industrial styling, highly custom color tints and edge finishes", bestFor: "Lofts, modern contemporary spaces" },
    { mat: "Laminate", features: "Affordable, wide selection of patterns and wood/stone prints", bestFor: "Budget remodels, rental properties" }
  ];

  const backsplashOptions = [
    { type: "Subway Tile", features: "Classic, versatile layout, timeless look, easy replacement", bestFor: "Any kitchen style, affordable" },
    { type: "Glass Tile", features: "Modern, light-reflective, glossy easy-wipe surfaces", bestFor: "Contemporary, modern designs" },
    { type: "Ceramic Tile", features: "Affordable, thousands of custom colors, prints, and textures", bestFor: "Traditional, transitional, budget-friendly" },
    { type: "Porcelain Tile", features: "Highly durable, low moisture absorption, stain resistant", bestFor: "Heavy cooking stations, commercial" },
    { type: "Marble Tile", features: "Elegant, premium natural stones, classic herringbone layout", bestFor: "Luxury kitchens, high-end accents" },
    { type: "Mosaic Tile", features: "Intricate patterns, glass/stone mixes, custom border lines", bestFor: "Accent highlight walls, visual focal points" },
    { type: "Metallic Tile", features: "Modern industrial look, highly reflective, copper/brass finishes", bestFor: "Contemporary, modern luxury" },
    { type: "Peel-and-Stick", features: "Fast temporary install, light backing, easy swaps", bestFor: "Temporary updates, rental units" }
  ];

  const flooringOptions = [
    { mat: "Porcelain Tile", features: "Extremely dense and durable, near-zero moisture absorption", bestFor: "High-traffic family kitchens" },
    { mat: "Ceramic Tile", features: "Affordable, versatile, easy to mop and sweep clean", bestFor: "Budget-friendly floor updates" },
    { mat: "Luxury Vinyl Plank (LVP)", features: "100% waterproof click-lock joints, realistic wood grain", bestFor: "Active families, pet owners" },
    { mat: "Hardwood", features: "Timeless warmth, solid or engineered; can be refinished", bestFor: "Traditional home renovations" },
    { mat: "Laminate", features: "Affordable, high scratch resistance AC3/AC4 rated", bestFor: "Budget family remodels" },
    { mat: "Natural Stone", features: "Unique slate, limestone, or travertine textures; premium look", bestFor: "Luxury gourmet kitchens" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your property, inspect the kitchen layout, measure boundaries, and provide a detailed estimate." },
    { step: "Step 2", title: "Design & Planning", desc: "We select layout options, plan paths, map the work triangle, and detail material specs." },
    { step: "Step 3", title: "Demolition & Prep", desc: "We block dust with plastic walls, lay floor runners, and carefully demolish old cabinets and countertops." },
    { step: "Step 4", title: "Plumbing & Electrical Rough-In", desc: "We run plumbing lines, fit garbage disposal wiring, relocate appliance plugs, and verify frame compliance." },
    { step: "Step 5", title: "Installation", desc: "Our skilled carpenters mount cabinetry boxes, set premium countertops, lay tile backsplashes, and install flooring." },
    { step: "Step 6", title: "Finishing Touches", desc: "We mount cabinet handles, hook up sinks, fit range hoods, wire under-cabinet lights, and align panels." },
    { step: "Step 7", title: "Cleanup & Quality Check", desc: "We vacuum dust, wipe down stone counters, wash tile haze, clear debris, and inspect joints." },
    { step: "Step 8", title: "Final Walkthrough", desc: "We walk through the new kitchen with you to ensure complete satisfaction. We don't finish until you are 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services completely remodeled our kitchen and it's absolutely stunning. The custom cabinetry, quartz countertops, and subway tile backsplash exceeded our expectations. We love spending time in our new kitchen!",
      author: "Lisa & David M., Houston"
    },
    {
      stars: 5,
      quote: "They transformed our outdated kitchen into a modern, open-concept dream. The team was professional, clean, and the craftsmanship is outstanding. Highly recommend!",
      author: "James & Sarah R., Katy"
    },
    {
      stars: 5,
      quote: "We had a kitchen island and breakfast bar installed. Cinco Services did a flawless job – perfect finishes, great communication, and on time. Our kitchen is now the heart of our home.",
      author: "Emily T., Sugar Land"
    },
    {
      stars: 5,
      quote: "Our new kitchen is gorgeous! Cinco Services handled everything – design, demolition, cabinets, countertops, backsplash, and appliances. The quality is exceptional.",
      author: "Robert & Susan A., Cypress"
    },
    {
      stars: 5,
      quote: "We love our new kitchen! The custom cabinetry and herringbone backsplash are beautiful. Cinco Services was a pleasure to work with from start to finish.",
      author: "Maria G., Richmond"
    }
  ];

  const faqs = [
    {
      q: "How much does a kitchen remodel cost?",
      a: "Costs depend on kitchen square footage, cabinetry configurations (custom boxes vs paint-grade), stone selections (luxury marble vs quartz), and appliance installations. We provide free transparent estimates."
    },
    {
      q: "How long does a kitchen remodel take?",
      a: "A full kitchen transformation typically takes between 4 to 8 weeks depending on plumbing relocations and cabinet fabrication times. Small cosmetic updates can be completed in 3 to 4 weeks."
    },
    {
      q: "Do I need a permit for a kitchen remodel?",
      a: "Yes – structural layout changes, new gas lines, and electrical circuit relocations require municipal building permits. We handle all permits and inspections for you."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we carry complete general liability and workers' compensation coverage protecting your property."
    },
    {
      q: "Can you help with kitchen design?",
      a: "Yes – we provide space planning, work triangle mapping, fixtures selection help, and coordinate 3D space layouts."
    },
    {
      q: "What is the most popular kitchen upgrade?",
      a: "Solid wood cabinetry, durable quartz countertops, custom tile backsplashes, and spacious kitchen islands with prep sinks are our most requested upgrades."
    },
    {
      q: "Can you work with my existing layout?",
      a: "Yes – keeping plumbing, electrical, and gas in their current locations is a great way to optimize your budget while modernizing cabinets and surfaces."
    },
    {
      q: "What type of countertop is best for a kitchen?",
      a: "Quartz is the most popular for busy families due to zero sealing requirements and high stain resistance. Granite is ideal for natural patterns and high heat resistance."
    },
    {
      q: "What is the best backsplash tile?",
      a: "Subway tile (laid in classic brick, vertical stack, or herringbone) is highly versatile and timeless. Glass mosaic is excellent for modern designs."
    },
    {
      q: "Do you provide a warranty on kitchen remodeling work?",
      a: "Yes – we provide a written workmanship warranty on all our remodeling, plumbing rough-in, and cabinetry installation labor."
    },
    {
      q: "Can you install appliances?",
      a: "Yes – we handle complete appliance hookups including cooktops, ovens, ranges, refrigerators with water lines, range hoods, and dishwashers."
    },
    {
      q: "Do you offer kitchen remodeling for commercial properties?",
      a: "Yes – we remodel commercial restaurant kitchens, corporate breakrooms, cafes, and bakery spaces."
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
            style={{ backgroundImage: `url(${kitchenRemodelHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Kitchen
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Kitchen Remodeling
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Transform Your Kitchen into the Heart of Your Home
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Kitchen Remodel Estimate
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
                  Expert Kitchen Remodeling <br />
                  <span className="text-[#0077b6]">Design, Quality, and Craftsmanship You Deserve</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    The kitchen is the heart of your home – where families gather, meals are prepared, and memories are made. At Cinco Services, we specialize in kitchen remodeling that transforms outdated, inefficient spaces into beautiful, functional kitchens you'll love spending time in.
                  </p>
                  <p>
                    With over 15 years of experience, we handle every aspect of your kitchen remodel – from design and demolition to custom cabinetry, premium countertops, tile backsplashes, flooring, and finishing touches. Whether you're updating a small kitchen or creating a gourmet chef's dream, we bring precision, care, and craftsmanship to every project.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request a Design Consultation
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
                CRAFTSMANSHIP
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Homeowners Trust Us for Kitchen Remodeling
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal 
                    key={idx} 
                    variant="reveal-scale" 
                    className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-md font-bold text-gray-800 font-sans mb-3 leading-snug">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
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
                OUR SCOPE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Kitchen Services
              </h2>
            </div>

            {/* Complete Transformations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Full Renovation
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Complete Kitchen Transformations
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We demo old cabinetry, relocate water and gas piping rough-ins, wire light boxes, set countertops, lay herringbone tile backsplashes, and install flooring.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Complete kitchen demolition",
                    "Plumbing & gas line rough-in",
                    "Electrical wiring & lighting",
                    "Custom cabinetry installation",
                    "Granite & quartz countertops",
                    "Tile backsplash fitting",
                    "Appliance hookups & trims",
                    "Interior painting & final trims"
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
                  <img src={kitchenImg} alt="Complete Kitchen Remodeling" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Cabinetry & Storage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Kitchen Cabinetry" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Storage & Woodworking
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Custom Cabinetry & Storage Solutions
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Maximizing storage is the key to kitchen efficiency. We layout soft-close hinges, lazy Susans, corner pull-out organizers, and under-cabinet LED light tracks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-650 font-medium">
                  {[
                    "Soft-close hinges & glides",
                    "Pull-out spice rack drawers",
                    "Lazy Susans corner bases",
                    "Durable wood stains & paints",
                    "Under-cabinet LED light bars",
                    "Recycling bin pull-outs",
                    "Custom pantry storage shelves",
                    "Durable hardware fittings"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Islands & Lighting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Islands */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Islands & Breakfast Bars</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Add visually stunning prep workspace and casual dining. We install custom islands with seating overhangs, integrated prep sinks, and electrical outlets.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Countertop seating overhangs", "Integrated prep sinks/valves", "Under-counter storage shelves", "Butcher block island tops"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Lighting */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Kitchen Lighting & Plumbing</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We install accent pendant lights over islands, recessed ceiling lights, Moen faucets, pot fillers behind ranges, and connect water filters.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Pendant lights island mounts", "Under-cabinet LED light tracks", "Pot filler range plumbing lines", "Faucets & garbage disposals"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ================= SPEC COMPARISONS TABLES ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMPREHENSIVE GUIDES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Features & Finishes Matrix
              </h2>
            </div>

            {/* Cabinets */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Cabinetry Styles</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Style</th>
                      <th className="p-4 font-sans">Description</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {cabinetStyles.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.style}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.desc}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Countertops */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Countertop Materials</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Material</th>
                      <th className="p-4 font-sans">Features</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {countertopMaterials.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.mat}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.features}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Backsplashes */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Backsplash Tile Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Tile Type</th>
                      <th className="p-4 font-sans">Features</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {backsplashOptions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.features}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Flooring */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Kitchen Flooring Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Material</th>
                      <th className="p-4 font-sans">Features</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {flooringOptions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.mat}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.features}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Kitchen Remodeling Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Space layout planning, detailed selections, watertight inspections.
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
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
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
                See Our Kitchen Remodeling Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: kitchenImg, title: "Modern double vanity master suite" },
                { img: transformImg, title: "Freestanding tub soaking station" },
                { img: tileImg, title: "Curbless walk-in tile shower" },
                { img: expertsImg, title: "Guest bath tub-to-shower swap" },
                { img: estimateImg, title: "Powder room floating quartz vanity" },
                { img: showroomImg, title: "Intricate mosaic tiling surrounds" }
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
                TESTIMONIALS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                What Our Clients Say About Our Kitchen Remodels
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
                Frequently Asked Questions About Kitchen Remodeling
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
                We provide professional kitchen remodeling services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Kitchen?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're dreaming of a gourmet chef's kitchen, a modern open-concept space, or a cozy farmhouse kitchen, Cinco Services delivers exceptional craftsmanship and lasting results. Contact us today for a free estimate.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Kitchen Remodel Estimate
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
