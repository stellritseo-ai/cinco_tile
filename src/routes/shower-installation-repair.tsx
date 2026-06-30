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
  Users,
  AlertTriangle
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import showerInstallationHero from "@/assets/shower_installation_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/shower-installation-repair")({
  head: () => ({
    meta: [
      { title: "Custom Shower Installation & Leak Repair | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers custom walk-in shower installations, shower pan replacements, frameless glass fitting, and leak repair services in Houston." },
      { property: "og:title", content: "Shower Installation & Repair - Cinco Services" },
      { property: "og:description", content: "Professional shower waterproofing, tile setting, and pan replacements in Katy, Cypress, and Sugar Land, TX." },
    ],
  }),
  component: ShowerInstallationRepairPage,
});

function ShowerInstallationRepairPage() {
  const trustBadges = [
    { text: "15+ Years Experience" },
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "Waterproofing Specialists" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Custom Showers, Pans, Tub Conversions, Repairs" },
    { icon: Clock, label: "Shower Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Inspection & Quote" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Shower Expertise", desc: "We've designed, installed, and repaired hundreds of showers in homes and hotels across Houston." },
    { icon: Shield, title: "Waterproofing Specialists", desc: "Proper vapor & moisture barrier isolation is our absolute priority – zero leaks, zero mold." },
    { icon: Sparkles, title: "Custom Design Capabilities", desc: "From barrier-free zero-threshold walk-ins to customized benches and niche inserts, we build your vision." },
    { icon: Wrench, title: "Premium Materials", desc: "We work with Schluter-Kerdi systems, Laticrete membranes, RedGard waterproofing, and premium mud bed mixes." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Complete general liability and workers' compensation coverage protecting your property during work." },
    { icon: Heart, title: "Clean & Respectful", desc: "We contain dust with zip-door systems, cover walking paths, and run post-demolition cleanup sweeps daily." },
    { icon: FileText, title: "Transparent Pricing", desc: "Highly detailed estimates covering plumbing rough-in, tiling square footage, glass framing, and pans." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our shower work. We don't finish until you're 100% happy." },
    { icon: Building2, title: "Residential & Commercial", desc: "We serve homeowners, apartment managers, hotels, fitness club shower facilities, and business centers." }
  ];

  const showerTypes = [
    { type: "Walk-In Shower", desc: "Curbless entry, spacious, accessible", bestFor: "Master bathrooms, aging-in-place, modern designs" },
    { type: "Frameless Glass Shower", desc: "Sleek, modern, open feel", bestFor: "Contemporary bathrooms, luxury spaces" },
    { type: "Tile Shower", desc: "Custom tile walls, floors, and niches", bestFor: "Custom designs, any style" },
    { type: "Prefabricated Shower", desc: "Ready-to-install, affordable, quick", bestFor: "Budget-friendly, quick remodels" },
    { type: "Steam Shower", desc: "Steam generator, spa experience", bestFor: "Luxury homes, wellness spaces" },
    { type: "Dual-Head Shower", desc: "Two showerheads, multiple users", bestFor: "Master bathrooms, couples" },
    { type: "Rain Shower", desc: "Ceiling-mounted rainfall experience", bestFor: "Spa-like bathrooms" },
    { type: "Handheld Shower", desc: "Flexible, accessible", bestFor: "Families, elderly, pet washing" },
    { type: "Body Spray Shower", desc: "Multiple body jets", bestFor: "Luxury, spa-like experience" },
    { type: "ADA Accessible Shower", desc: "Roll-in, grab bars, bench", bestFor: "Accessibility, aging-in-place" }
  ];

  const panTypes = [
    { type: "Tile-Over Shower Pan", desc: "Custom-built, tile-covered base", bestFor: "Custom showers, any design" },
    { type: "Prefabricated Shower Pan", desc: "Ready-to-install, acrylic or fiberglass", bestFor: "Quick installations, budget-friendly" },
    { type: "Custom Mortar Shower Pan", desc: "Hand-built, fully customized", bestFor: "Luxury showers, unique sizes" },
    { type: "Linear Drain Shower Pan", desc: "Trench drain, modern look", bestFor: "Contemporary designs, curbless showers" },
    { type: "Fiberglass Shower Pan", desc: "Durable, seamless, easy to clean", bestFor: "Residential bathrooms" },
    { type: "Acrylic Shower Pan", desc: "Affordable, warm underfoot", bestFor: "Budget-friendly, quick remodels" }
  ];

  const repairsList = [
    { issue: "Leaking Shower", solution: "Identify and repair leak source – pipes, pan, or grout" },
    { issue: "Cracked or Broken Tile", solution: "Replace damaged tile with matching material" },
    { issue: "Damaged Grout or Caulk", solution: "Remove and replace grout/caulking for waterproof seal" },
    { issue: "Water Damage", solution: "Repair damaged walls, subfloor, and waterproofing" },
    { issue: "Clogged Drain", solution: "Clear drain blockages" },
    { issue: "Mold or Mildew", solution: "Remove and treat affected areas" },
    { issue: "Faulty Showerhead", solution: "Replace or repair showerhead" },
    { issue: "Broken Valve", solution: "Repair or replace mixing valve" },
    { issue: "Leaking Door", solution: "Realign or replace shower door seals" },
    { issue: "Cracked Shower Pan", solution: "Repair or replace shower pan" },
    { issue: "Low Water Pressure", solution: "Diagnose and fix pressure issues" }
  ];

  const tileTypes = [
    { type: "Porcelain Tile", bestFor: "Shower walls, floors, high-moisture", features: "Extremely durable, water-resistant, low-maintenance" },
    { type: "Ceramic Tile", bestFor: "Shower walls, floors", features: "Affordable, versatile, easy to maintain" },
    { type: "Marble Tile", bestFor: "Luxury showers, walls, accents", features: "Timeless elegance, unique veining" },
    { type: "Slate Tile", bestFor: "Natural look, slip-resistant floors", features: "Rustic, earthy, slip-resistant" },
    { type: "Glass Tile", bestFor: "Accent walls, niches, mosaics", features: "Modern, reflective, easy to clean" },
    { type: "Travertine Tile", bestFor: "Natural warmth, classic style", features: "Warm, natural, timeless" },
    { type: "Mosaic Tile", bestFor: "Floors, accents, patterns", features: "Intricate designs, artistic" },
    { type: "Large-Format Tile", bestFor: "Minimal grout lines, modern look", features: "Sleek, contemporary, easy to clean" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your property, inspect the space, check for signs of active water leaks, and provide a detailed estimate." },
    { step: "Step 2", title: "Design & Material Selection", desc: "We help you select tile types, glass door enclosures, fixture finishes (brushed gold, matte black, chrome), and grout lines." },
    { step: "Step 3", title: "Demolition & Prep", desc: "We carefully remove existing shower surrounds, tile, or fiberglass tubs. We seal off the room to block dust." },
    { step: "Step 4", title: "Plumbing & Structural Framing", desc: "We rough-in the valves, replace hot/cold copper lines, configure heights, and reinforce subfloor joists." },
    { step: "Step 5", title: "Waterproofing Installation", desc: "We apply cement backer boards and industry-leading waterproofing membranes (Schluter, Laticrete, or RedGard) for a leak-free shell." },
    { step: "Step 6", title: "Shower Pan Installation", desc: "We pack and slope a custom mortar bed or install a rigid waterproof preformed pan ensuring a perfect pitch to the drain." },
    { step: "Step 7", title: "Custom Tile Fitting", desc: "Our tile artisans set your tiles, niches, bench caps, and border mosaics with straight layout lines." },
    { step: "Step 8", title: "Fixture & Glass Enclosures", desc: "We install shower doors (frameless glass), vanity trims, handheld bars, rainfall heads, and body jets." },
    { step: "Step 9", title: "Grouting & Final Sealing", desc: "We apply high-grade stain-resistant grout, wipe haze, and run silicone caulking along internal corners." },
    { step: "Step 10", title: "Cleanup & Final Walkthrough", desc: "We clean the entire space, run water tests to verify drainage, and perform a final walkthrough with you." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services completely replaced our old, leaking shower. The new shower is stunning – marble tile, rain showerhead, and a beautiful niche. The waterproofing is flawless.",
      author: "Lisa M., Houston"
    },
    {
      stars: 5,
      quote: "We converted our bathtub to a walk-in shower. Cinco Services did an amazing job. The team was professional, clean, and the quality is outstanding.",
      author: "James & Sarah R., Katy"
    },
    {
      stars: 5,
      quote: "Our shower pan was leaking and causing damage. Cinco Services repaired it quickly and replaced the tile. No more leaks! Highly recommend.",
      author: "David T., Sugar Land"
    },
    {
      stars: 5,
      quote: "They installed a custom tile shower in our master bathroom. The attention to detail is incredible – perfect grout lines, beautiful design, and great communication.",
      author: "Emily & Robert W., Cypress"
    },
    {
      stars: 5,
      quote: "We needed emergency shower repair after a leak. Cinco Services responded immediately, fixed the issue, and prevented further damage. We're so grateful.",
      author: "Maria G., Houston"
    }
  ];

  const faqs = [
    {
      q: "How do I know if my shower pan needs to be replaced?",
      a: "Warning signs include water stains on the ceiling directly below the shower, damp subfloors, cracked mortar beds, musty odors, or persistent mold growth. We perform water flood tests to check pans."
    },
    {
      q: "How long does a shower installation take?",
      a: "A custom tile walk-in shower installation usually takes between 1 to 2 weeks. Prefabricated acrylic inserts can be installed in 3 to 5 days."
    },
    {
      q: "How much does a custom shower cost?",
      a: "Costs depend on square footage, tile materials (e.g. standard ceramic vs natural marble), and glass door framing selections. We provide clear, itemized free estimates."
    },
    {
      q: "What type of tile is best for showers?",
      a: "Porcelain is the most popular for its moisture resistance and durability. Glass mosaic works great for accent panels, and marble adds timeless luxury."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and insured for all residential and commercial structural and plumbing tasks."
    },
    {
      q: "Do you offer shower repairs?",
      a: "Yes – we patch cracked tiles, replace leaking shower pans, fix broken mixing valves, regrout mildewed joints, and restore subfloor wood rot."
    },
    {
      q: "How do I prevent mold in my shower?",
      a: "We prevent mold by using moisture-impermeable waterproof backer boards (instead of greenboard drywall) and anti-microbial grout sealers."
    },
    {
      q: "Can you convert my bathtub to a shower?",
      a: "Yes – tub-to-shower conversions are very popular. We remove the old tub, adjust drain heights, install a wider shower pan, and complete tile surrounds."
    },
    {
      q: "Do you install walk-in and curbless showers?",
      a: "Yes – we specialize in linear drain, zero-threshold curbless walk-ins for a modern open look and ADA aging-in-place safety."
    },
    {
      q: "Do you offer emergency shower repair?",
      a: "Yes – if you have an active leak dripping into the downstairs ceiling, shut off the water valve and call us immediately for emergency tarping/repair."
    },
    {
      q: "What is the best waterproofing system for showers?",
      a: "We use premium waterproofing sheet membranes and drain collars from brands like Schluter-Kerdi, Laticrete Hydro Ban, and RedGard liquid coatings."
    },
    {
      q: "Do you provide a warranty on your shower work?",
      a: "Yes – we back all of our custom shower installations and pan replacements with a written workmanship warranty."
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
            style={{ backgroundImage: `url(${showerInstallationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Bathroom
            </span>

            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Shower Installation & Repair
            </h1>

            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Custom Showers Built to Last – Expert Installation, Repair & Replacement
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Shower Estimate
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
                  Expert Shower Installation & Repair <br />
                  <span className="text-[#0077b6]">Transform Your Bathroom into a Spa</span>
                </h2>

                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your shower should be a place of relaxation and rejuvenation – not a source of leaks, mold, or frustration. At Cinco Services, we specialize in professional shower installation, repair, and replacement that combines stunning design with reliable waterproofing and durability.
                  </p>
                  <p>
                    With over 15 years of experience, we've installed and repaired hundreds of showers across Houston – from custom tile showers and shower pan replacements to complete shower rebuilds. Whether you're building a new home, remodeling your bathroom, or fixing a leaky shower, we deliver craftsmanship you can trust.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Schedule a Leak-Free Check
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
                WATERPROOF STANDARDS
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

        {/* ================= DETAILED SERVICE BLOCKS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">

            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                SERVICES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Shower Capabilities
              </h2>
            </div>

            {/* Custom Shower Installation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  New Builds & Remodels
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Custom Shower Installation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We lay custom tile walls, hook up plumbing rough-ins, construct bench seats, and frame premium glass door enclosures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Walk-in curbless entries",
                    "Frameless glass doors",
                    "Custom mosaic layouts",
                    "Rain showerheads rough-in",
                    "Dual thermostatic control valves",
                    "Recessed shampoo niches",
                    "ADA accessible grab bars",
                    "Steam generator installations"
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
                  <img src={bathroomImg} alt="Custom Shower Installation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Shower Pan replacement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={tileImg} alt="Shower pan replacements" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Foundation waterproofing
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Shower Pan Installation & Replacement
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  The shower pan is the key waterproof foundation of your shower. We pack custom sloped mortar beds or install preformed tile-over pans with linear trench drains.
                </p>
                <div className="space-y-2.5 text-[14px] text-[#b7094c] font-semibold bg-red-50 p-4 rounded-xl border border-red-100">
                  <div className="text-[12px] uppercase font-bold tracking-wider text-red-700 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" /> Signs You Need a Shower Pan Replacement:
                  </div>
                  {["Water leaks on ceiling downstairs", "Soft or spongy subfloor under pan", "Musty damp mold odors in shower", "Visible cracks in mortar/acrylic base"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-red-900 text-[13.5px]">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Shower Repair & Conversions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Repairs */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Professional Shower Repairs</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We resolve leaks, replace cracked tiles, regrout joints with mold-resistant silicones, and swap out mixers and cartridge valves.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Pressure leak diagnoses", "Cracked tile extraction & swap", "Anti-mildew regrouting & caulking", "Mixing valve cartridge replacement", "Emergency drip plumbing repairs"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Conversion */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Bath className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Bathtub to Shower Conversion</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Modernize your bathroom. We demo old cast-iron or steel tubs, adjust drain plumbing heights, and install wider curbless walk-ins.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Bathtub demolition & removal", "Drain pipe relocation rough-in", "Custom floor tiling", "Frameless glass panel installations", "Grab bars safety fixtures"].map((item, idx) => (
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

        {/* ================= COMPARISON TABLES ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">

            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMPREHENSIVE SPECS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Shower Systems Configurations
              </h2>
            </div>

            {/* Shower types */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Shower Types We Install</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Shower Type</th>
                      <th className="p-4 font-sans">Description</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {showerTypes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.desc}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Shower pans */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Shower Pans Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Pan Type</th>
                      <th className="p-4 font-sans">Description</th>
                      <th className="p-4 font-sans">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {panTypes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.desc}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Repairs */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Shower Issues & Repairs</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Common Issue</th>
                      <th className="p-4 font-sans">Our Professional Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {repairsList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-[#b7094c] border-r border-gray-100 whitespace-nowrap bg-red-50/10">{row.issue}</td>
                        <td className="p-4 text-gray-550 font-semibold leading-relaxed">{row.solution}</td>
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
                Our Shower Installation & Repair Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Water flood testing, vapor block membranes, flawless tiling grout lines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 font-sans">
              {processSteps.map((step, idx) => (
                <Reveal
                  key={idx}
                  variant="reveal-scale"
                  className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <span className="absolute top-4 right-4 bg-[#d62828] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-extrabold text-[14px] text-[#111827] font-sans mb-2.5 mt-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
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
                See Our Shower Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: bathroomImg, title: "Frameless Glass Shower enclosure" },
                { img: tileImg, title: "Shower floor mosaic tile" },
                { img: transformImg, title: "Tub to Shower conversion" },
                { img: expertsImg, title: "Dual Rainfall showerheads" },
                { img: estimateImg, title: "Custom mortar sloped shower pan" },
                { img: showroomImg, title: "Luxury Steam shower layout" }
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
                What Our Clients Say About Our Shower Services
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
                Frequently Asked Questions About Showers
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
                We provide professional shower installation and repair services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready for a Beautiful, Leak-Free Shower?
              </h2>

              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're building a custom spa shower, converting a tub, or repairing a leak, Cinco Services delivers exceptional craftsmanship and lasting results. Contact us today for a free estimate.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Shower Estimate
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
