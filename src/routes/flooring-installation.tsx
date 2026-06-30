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
import flooringInstallationHero from "@/assets/flooring_installation_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/flooring-installation")({
  head: () => ({
    meta: [
      { title: "Premium Hardwood, LVP, & Tile Flooring | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium flooring installations in Houston. Expert solid hardwood sanding, waterproof LVP/LVT fitting, and laminate flooring." },
      { property: "og:title", content: "Flooring Installation Services - Cinco Services" },
      { property: "og:description", content: "Custom hardwood, vinyl, and tile flooring installations in Houston, Katy, and Sugar Land, TX." },
    ],
  }),
  component: FlooringInstallationPage,
});

function FlooringInstallationPage() {
  const trustBadges = [
    { text: "15+ Years Experience" },
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "Premium Materials" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Hardwood, Laminate, LVP, Vinyl, Tile Flooring" },
    { icon: Clock, label: "Flooring Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & Samples" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Flooring Expertise", desc: "We've installed every type of flooring in hundreds of homes and businesses across Houston." },
    { icon: Wrench, title: "Premium Materials", desc: "We work with top-quality brands for solid wood, click-lock laminates, waterproof vinyl, and custom tiles." },
    { icon: Sparkles, title: "Expert Installation", desc: "Precision cutting, pattern expansion gaps management, and flawless transitions moldings." },
    { icon: Grid, title: "Wide Selection", desc: "Hardwood (solid & engineered), laminate, luxury vinyl plank/tile, ceramic, porcelain, and stone." },
    { icon: Layers, title: "Custom Design Layouts", desc: "We help you layout herringbone patterns, borders, staircase matching, and custom wood stains." },
    { icon: Building2, title: "Residential & Commercial", desc: "We serve Houston homeowners and commercial offices, retail shops, and restaurants alike." },
    { icon: Shield, title: "Proper Subfloor Preparation", desc: "We level subfloors, inspect moisture levels, patch slabs, and install vapor sound barriers for long-lasting floors." },
    { icon: Heart, title: "Clean & Respectful", desc: "We protect baseboards, contain dust with dust barriers, clean up daily, and leave your space immaculate." },
    { icon: FileText, title: "No Hidden Fees", desc: "Transparent, detailed construction estimates outline materials, labor, moldings, prep work, and cleanup." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Complete general liability and workers' compensation coverage for absolute peace of mind." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our flooring work. We don't finish until you're 100% happy." }
  ];

  const hardwoodOptions = [
    { type: "Solid Hardwood", bestFor: "Living rooms, bedrooms, above-grade spaces", features: "Classic, can be sanded and refinished multiple times, timeless" },
    { type: "Engineered Hardwood", bestFor: "Basements, below-grade, high-humidity areas", features: "Stable, cross-ply moisture-resistant, highly versatile" },
    { type: "Prefinished Hardwood", bestFor: "Fast installation, minimal dust", features: "Factory-finished protective coat, ready immediately" },
    { type: "Unfinished Hardwood", bestFor: "Custom stain matching, seamless look", features: "On-site sanding, custom coloring, perfect matching" }
  ];

  const vinylOptions = [
    { type: "Luxury Vinyl Tile (LVT)", bestFor: "Kitchens, bathrooms, basements", features: "100% waterproof, realistic stone/tile visuals, durable" },
    { type: "Luxury Vinyl Plank (LVP)", bestFor: "Living rooms, bedrooms, high-traffic", features: "100% waterproof, realistic wood grain, warm underfoot" },
    { type: "Sheet Vinyl", bestFor: "Bathrooms, laundry rooms, commercial", features: "Seamless layout, highly waterproof, cost-effective" },
    { type: "SPC (Stone Plastic Composite)", bestFor: "Commercial, high-traffic, basements", features: "Rigid stone core, extremely impact-resistant, waterproof" },
    { type: "WPC (Wood Plastic Composite)", bestFor: "Residential, comfort-focused spaces", features: "Cushioned core, warm underfoot, waterproof" }
  ];

  const laminateGrades = [
    { grade: "AC1 - Light Residential", app: "Bedrooms, closets, low-traffic spaces", features: "Moderate surface wear resistance" },
    { grade: "AC2 - General Residential", app: "Living rooms, dining rooms, family spaces", features: "Good everyday wear resistance" },
    { grade: "AC3 - Heavy Residential / Light Commercial", app: "Hallways, kitchens, home offices, small offices", features: "High wear resistance, impact-resistant" },
    { grade: "AC4 - General Commercial", app: "Retail shops, offices, salons", features: "Commercial durability, scratch-resistant" },
    { grade: "AC5 - Heavy Commercial", app: "High-traffic retail, busy restaurants, corridors", features: "Maximum durability, commercial-grade surface" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your property, assess the space, measure dimensions, and provide a detailed, transparent estimate." },
    { step: "Step 2", title: "Material Selection", desc: "We help you select the perfect flooring material (hardwood, laminate, LVP, tile) and bring samples to match your design." },
    { step: "Step 3", title: "Subfloor Preparation", desc: "We level the concrete or wood subfloor, patch cracks, check moisture levels, and install waterproofing sound underlayment." },
    { step: "Step 4", title: "Material Acclimation", desc: "We allow flooring materials to acclimate to your home's humidity level (2-3 days mandatory for solid hardwood)." },
    { step: "Step 5", title: "Professional Installation", desc: "Our skilled carpenters lay the flooring with precision – managing expansion gaps, thresholds, and custom profiles." },
    { step: "Step 6", title: "Cleanup & Quality Check", desc: "We vacuum all dust, remove spacers, clean up all offcuts, and inspect transitions for perfection." },
    { step: "Step 7", title: "Final Walkthrough", desc: "We walk through the finished floor with you to ensure complete satisfaction. We don't finish until you're 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services installed hardwood floors throughout our entire home. The quality of work is outstanding – the floors are beautiful and the team was professional and clean.",
      author: "James & Lisa R., Katy"
    },
    {
      stars: 5,
      quote: "They installed luxury vinyl plank in our basement and it looks amazing. It's waterproof, comfortable, and completely transformed the space.",
      author: "The Johnson Family, Cypress"
    },
    {
      stars: 5,
      quote: "We had laminate flooring installed in our office. Cinco Services did a fantastic job – on time, on budget, and the results are stunning.",
      author: "Sarah K., Property Manager, Sugar Land"
    },
    {
      stars: 5,
      quote: "The team at Cinco Services installed tile in our kitchen and entryway. Perfect cuts, straight lines, and beautiful grout work. Highly recommend!",
      author: "Maria T., Houston"
    },
    {
      stars: 5,
      quote: "We had our old, worn-out carpet replaced with engineered hardwood. Cinco Services made the entire process easy. Our home feels brand new.",
      author: "Robert & Susan A., Richmond"
    }
  ];

  const faqs = [
    {
      q: "What type of flooring is best for my home?",
      a: "It depends on the room. Tile and luxury vinyl planks (LVP) are perfect for kitchens, bathrooms, and basements due to waterproofing. Hardwood is excellent for living areas and bedrooms. Laminate is highly scratch-resistant and ideal for heavy pets or family spaces."
    },
    {
      q: "How much does flooring installation cost?",
      a: "Costs vary based on flooring type (e.g. solid wood vs laminate), subfloor leveling required, underlayment sound barriers, and moldings. We provide free transparent estimates."
    },
    {
      q: "How long does flooring installation take?",
      a: "Most residential floor installations take between 1 to 5 days, depending on square footage, material prep, and whether hardwood acclimation is required."
    },
    {
      q: "Do you remove old flooring?",
      a: "Yes – we handle complete demolition, nail removal, carpet stripping, subfloor cleanup, and disposal of old flooring materials."
    },
    {
      q: "What is the most durable flooring option?",
      a: "Porcelain tile is the most scratch-resistant and waterproof option. Rigid SPC luxury vinyl planks also offer extreme commercial durability and waterproofing."
    },
    {
      q: "Do you offer commercial flooring installation?",
      a: "Yes – we install commercial-grade LVP, AC5 laminate, ceramic, and porcelain tiles for retail shops, offices, and restaurants."
    },
    {
      q: "Can you install heated floors?",
      a: "Yes – we can install electric radiant floor heating mats directly under porcelain, ceramic, or luxury vinyl tile floors."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we carry complete general liability and workers' compensation coverage protecting your property."
    },
    {
      q: "How do I maintain my new floors?",
      a: "We provide detailed care instructions post-installation. We recommend using felt pads under furniture legs and dry-mopping wood floors."
    },
    {
      q: "Do you provide samples?",
      a: "Yes – we bring samples directly to your property or guide you through selections at local Houston flooring showrooms."
    },
    {
      q: "What is the difference between solid and engineered hardwood?",
      a: "Solid hardwood is a single thick piece of wood that can be refinished multiple times. Engineered hardwood consists of a real wood veneer over cross-ply plywood, offering superior moisture stability."
    },
    {
      q: "Is luxury vinyl flooring waterproof?",
      a: "Yes – most premium luxury vinyl planks (LVP) and tiles (LVT) are 100% waterproof, making them ideal for high-humidity bathrooms, kitchens, and basements."
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
            style={{ backgroundImage: `url(${flooringInstallationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Flooring
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Flooring Installation
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Premium Flooring Solutions – Beautiful, Durable, and Built to Last
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Flooring Estimate
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
                  Expert Flooring Installation <br />
                  <span className="text-[#0077b6]">Transforming Spaces from the Ground Up</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your floors are the foundation of your interior design – they set the tone for every room in your home or business. At Cinco Services, we specialize in professional flooring installation that combines beauty, durability, and expert craftsmanship.
                  </p>
                  <p>
                    With over 15 years of experience, we've installed thousands of square feet of hardwood, laminate, luxury vinyl, and tile across Houston. From material selection to subfloor preparation and final finishing, we handle every detail with precision and care – ensuring your floors look flawless and last for decades.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request a Flooring Consultation
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
                FLOOR STANDARDS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Homeowners & Businesses Trust Us
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

        {/* ================= DETAILED BLOCKS SHOWCASE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                CAPABILITIES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Flooring Options
              </h2>
            </div>

            {/* Hardwood floor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Timeless Hardwood
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Hardwood Floor Installation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Hardwood floors add natural warmth, elegance, and property value. We install solid and engineered planks with precision, managing moisture barrier prep and acclimation times.
                </p>
                <div className="space-y-2.5 text-[14px] text-gray-650 font-semibold">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Wood Species We Install:</strong> Oak (red & white), Maple, Hickory, Walnut, Cherry, Ash, Birch, and exotics (Brazilian cherry, bamboo, teak).</span>
                  </div>
                  <div className="flex items-start gap-1.5 border-t border-gray-100 pt-2.5">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Installation Methods:</strong> Nail-down (traditional solid), glue-down (engineered and subfloors), floating click-locks.</span>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Hardwood Floor Installation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Laminate floor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={transformImg} alt="Laminate Floor installation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Durable Laminate
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Laminate Floor Installation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Laminate flooring offers realistic wood and stone graphics with high scratch and stain resistance. Perfect for high-traffic entryways, active pets, and busy commercial spaces.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Floating click-lock designs",
                    "Scratch & stain resistant",
                    "Realistic wood grain visual",
                    "Expansion gap moldings",
                    "Moisture resistant core options",
                    "Sound reducing underlayments",
                    "AC3 residential standard",
                    "AC4/AC5 commercial grades"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Luxury Vinyl (LVT / LVP) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  100% Waterproof
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Luxury Vinyl Flooring (LVT / LVP)
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Luxury vinyl planks (LVP) and tiles (LVT) are completely waterproof, comfortable underfoot, and sound dampening. Ideal for bathrooms, kitchens, and basements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-650 font-medium">
                  {[
                    "Luxury Vinyl Plank (LVP)",
                    "Luxury Vinyl Tile (LVT)",
                    "SPC Rigid Stone Core",
                    "WPC Cushioned Wood Core",
                    "100% Waterproof joints",
                    "Glue-down commercial style",
                    "Click-lock floating setups",
                    "Pet-proof scratch barriers"
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
                  <img src={bathroomImg} alt="LVP Waterproof Flooring" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Subfloor Prep & Repairs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Prep */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Subfloor Preparation</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  A beautiful floor requires a flat, stable foundation. We test concrete slab moisture levels, apply leveling compounds, and reinforce joists.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Concrete moisture test checks", "Self-leveling compound smoothing", "Plywood/OSB subfloor repairs", "Vapor moisture barrier installations", "Radiant heated floor backings"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Repairs */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Flooring Repairs & Restoration</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We restore scratched hardwood, sand and refinish solid timbers, replace buckled LVP planks, and resolve slab moisture stains.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Hardwood board replacement", "Wood floor sanding & custom staining", "Buckled laminate board swap", "Squeaky subfloor screws framing", "Transition molding repairs"].map((item, idx) => (
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

        {/* ================= FLOORS COMPARISON TABLES ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                MATERIAL GUIDE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Flooring Selections Comparisons
              </h2>
            </div>

            {/* Hardwood */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Hardwood Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Type</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {hardwoodOptions.map((row, idx) => (
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

            {/* Vinyl */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Luxury Vinyl Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Type</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {vinylOptions.map((row, idx) => (
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

            {/* Laminate AC grades */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Laminate AC Grades Guidelines</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Grade</th>
                      <th className="p-4 font-sans">Recommended Applications</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {laminateGrades.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.grade}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.app}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.features}</td>
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
                Our Flooring Installation Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Acclimation checks, subfloor level sweeps, flawless carpentry fittings.
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
                See Our Flooring Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: expertsImg, title: "Herringbone Oak Hardwood" },
                { img: showroomImg, title: "Modern Showroom Flooring" },
                { img: transformImg, title: "Waterproof LVP Basement Floor" },
                { img: tileImg, title: "Commercial AC5 Office Laminate" },
                { img: estimateImg, title: "Foyer Tile Flooring" },
                { img: kitchenImg, title: "Prefinished Kitchen Wood fitting" }
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
                What Our Clients Say About Our Flooring Installations
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
                Frequently Asked Questions About Flooring
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
                We provide professional flooring installation services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Floors?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Beautiful, durable floors are just a call away. Whether you want classic hardwood, affordable laminate, or waterproof luxury vinyl, Cinco Services delivers exceptional craftsmanship and lasting beauty.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Flooring Estimate
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
