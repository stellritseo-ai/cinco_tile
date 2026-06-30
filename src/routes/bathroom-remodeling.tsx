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
import bathroomRemodelHero from "@/assets/bathroom_remodel_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

// Dynamically import all images in the gallery folder
const galleryModules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });
const galleryImages = Object.values(galleryModules)
  .map((mod: any) => (mod && typeof mod === "object" && "default" in mod ? (mod.default as string) : null))
  .filter((url): url is string => typeof url === "string");

export const Route = createFileRoute("/bathroom-remodeling")({
  head: () => ({
    meta: [
      { title: "Custom Bathroom Remodeling & Tub Conversions | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers luxury bathroom remodeling in Houston. Walk-in showers, freestanding tubs, custom vanities, quartz tops, and plumbing rough-ins." },
      { property: "og:title", content: "Bathroom Remodeling Services - Cinco Services" },
      { property: "og:description", content: "Complete spa master bathrooms, tub-to-shower conversions, and powder room renovations in Katy, Cypress, and Sugar Land, TX." },
    ],
  }),
  component: BathroomRemodelingPage,
});

function BathroomRemodelingPage() {
  const trustBadges = [
    { text: "15+ Years Experience" },
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "Custom Design" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Full Remodels, Master Suites, Guest Baths, Powder Rooms" },
    { icon: Clock, label: "Remodeling Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & 3D Planning" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Remodeling Expertise", desc: "We have remodeled hundreds of master bathrooms, guest baths, and powder rooms in Houston." },
    { icon: Wrench, title: "Full-Service Capabilities", desc: "Design, demolition, plumbing, electrical, tile, and custom cabinetry all handled under one roof." },
    { icon: Sparkles, title: "Custom Design Solutions", desc: "We tailor layouts, fixtures, lighting, and finishes to your unique lifestyle, preferences, and budget." },
    { icon: Layers, title: "Premium Materials", desc: "We use only top-grade tile, custom vanities, solid-surface quartz, and high-performance plumbing lines." },
    { icon: Shield, title: "Waterproofing Specialists", desc: "Proper shower pans packing, cement boards, and vapor-barrier membranes ensure zero leaks and zero mold." },
    { icon: Heart, title: "Licensed & Insured", desc: "Complete general liability and workers' compensation coverage protects your home and peace of mind." },
    { icon: HardHat, title: "Clean & Respectful", desc: "We lay floor protection runners, set up plastic dust walls, and perform thorough cleanup daily." },
    { icon: FileText, title: "Transparent Pricing", desc: "Highly detailed estimates cover all scopes with no hidden fees or surprise charges." },
    { icon: CheckCircle, title: "Satisfaction Guaranteed", desc: "We don't consider the remodeling project complete until you are 100% happy with every detail." }
  ];

  const bathtubOptions = [
    { type: "Freestanding Bathtubs", desc: "Elegant, sculptural, luxurious focal points", features: "Acrylic, cast iron, stone resin; fits modern & classic styles" },
    { type: "Drop-In Bathtubs", desc: "Built-in, seamless tile deck layouts", features: "Highly customizable deck space; excellent for jets" },
    { type: "Undermount Bathtubs", desc: "Clean, flat modern lines flush with deck", features: "Sleek look; easy-to-clean quartz or marble surrounds" },
    { type: "Corner Bathtubs", desc: "Space-saving, triangular layouts", features: "Perfect for smaller footprints; offers soaking depths" },
    { type: "Whirlpool & Air Tubs", desc: "Hydro-massage and therapeutic relaxation", features: "Directional water jets or warm air bubble massage" },
    { type: "Clawfoot Bathtubs", desc: "Classic, vintage character and charm", features: "Traditional iron or acrylic tubs with metallic claw feet" },
    { type: "Walk-In Bathtubs", desc: "Accessible, safe low-step thresholds", features: "Watertight doors, built-in seat, grab bars, quick drains" },
    { type: "Alcove Bathtubs", desc: "Standard, three-wall space-efficient setups", features: "Affordable, versatile; easily integrates shower surrounds" }
  ];

  const countertopMaterials = [
    { mat: "Granite", bestFor: "Luxury and rustic bathroom decks", features: "Durable, heat-resistant, natural unique veining patterns" },
    { mat: "Quartz", bestFor: "Modern, low-maintenance families", features: "Non-porous, stain-resistant, consistent color, no sealing required" },
    { mat: "Marble", bestFor: "High-end luxury master bathrooms", features: "Timeless beauty, cooling texture, premium natural movement" },
    { mat: "Solid Surface", bestFor: "Seamless sinks and counters", features: "Acrylic blend; completely seamless sink integration, easy repairs" },
    { mat: "Tile", bestFor: "Budget-friendly, rustic layouts", features: "Affordable, unlimited color mixes, requires sealed grout lines" }
  ];

  const vanityStyles = [
    { style: "Custom-Built Vanities", bestFor: "Any unique dimension or matching finish", features: "Tailored cabinet sizing, specialized storage dividers, pullout trays" },
    { style: "Double Vanities", bestFor: "Couples' master suites", features: "Dual sink configuration, separate storage drawers, layout symmetry" },
    { style: "Floating Vanities", bestFor: "Modern, contemporary spaces", features: "Wall-mounted; creates visual space underneath, sleek profiles" },
    { style: "Traditional Vanities", bestFor: "Classic, warm home interiors", features: "Raised panels, wood grains, crown base moldings" },
    { style: "Farmhouse-Style Vanities", bestFor: "Rustic, vintage country styling", features: "Open shelving, slatted bins, shaker doors, apron sinks" },
    { style: "Modern Slab-Style Vanities", bestFor: "Minimalist, flat-panel layouts", features: "Handleless push-to-open doors, high-gloss or matte finishes" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your home, inspect the bathroom layout, discuss your design vision, and provide a detailed estimate." },
    { step: "Step 2", title: "Design & Planning", desc: "We help you select layout options and establish space configurations for showers, tubs, and double vanities." },
    { step: "Step 3", title: "Material Selection", desc: "We coordinate with showrooms to pick custom tiles, quartz countertops, plumbing fixtures, and cabinet colors." },
    { step: "Step 4", title: "Demolition & Prep", desc: "We protect flooring with runners, build zip dust walls, demolish the old bathroom, and clean up frames." },
    { step: "Step 5", title: "Plumbing & Electrical Rough-In", desc: "We relocate drains, install mixing valves, configure light boxes, and complete subfloor structural repairs." },
    { step: "Step 6", title: "Waterproofing & Board Prep", desc: "We seal shower bases, construct pans, and lay cement backer boards to ensure a leak-proof bathroom." },
    { step: "Step 7", title: "Custom Installation", desc: "Our skilled carpenters install tile layouts, fit custom cabinets, mount vanities, and hook up plumbing fixtures." },
    { step: "Step 8", title: "Finishing Touches", desc: "We paint walls, fit frameless glass doors, install mirrors, align lights, and mount cabinet pulls." },
    { step: "Step 9", title: "Cleanup & Final Walkthrough", desc: "We clean the entire space, test faucets, and perform a walkthrough with you. We don't finish until you are 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services completely remodeled our master bathroom and it's absolutely stunning. The custom tile shower, freestanding tub, and double vanity exceeded our expectations. We highly recommend them!",
      author: "Lisa & David M., Houston"
    },
    {
      stars: 5,
      quote: "We converted our tub to a walk-in shower and it's the best decision we've ever made. Cinco Services did a flawless job – professional, clean, and beautiful craftsmanship.",
      author: "James & Sarah R., Katy"
    },
    {
      stars: 5,
      quote: "They remodeled our guest bathroom – new tile, vanity, lighting, and paint. It looks like a completely different room. The team was great to work with.",
      author: "Emily T., Sugar Land"
    },
    {
      stars: 5,
      quote: "We love our new master bathroom! Cinco Services handled everything – design, demolition, plumbing, tile, and finishing. The quality is outstanding.",
      author: "Robert & Susan A., Cypress"
    },
    {
      stars: 5,
      quote: "Our powder room was outdated and dark. Cinco Services transformed it into a bright, modern space that everyone compliments. Highly recommend!",
      author: "Maria G., Richmond"
    }
  ];

  const faqs = [
    {
      q: "How much does a bathroom remodel cost?",
      a: "Costs depend on scope (e.g. standard cosmetic upgrades vs a complete layout change) and material selections (quartz countertops vs laminate). We provide detailed free estimates."
    },
    {
      q: "How long does a bathroom remodel take?",
      a: "A standard guest bathroom remodel takes 2 to 4 weeks. A luxury master bathroom involving custom walk-in tile showers and soaking tubs takes 4 to 8 weeks."
    },
    {
      q: "Do I need a permit for a bathroom remodel?",
      a: "Yes – structural layout changes, new plumbing lines, and electrical circuit updates require municipal permits. We handle all permitting and inspections for you."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and carry comprehensive general liability and workers' compensation insurance."
    },
    {
      q: "Can you help with bathroom design?",
      a: "Yes – we provide space planning, fixtures coordination, paint color consulting, and detailed tile layout patterns planning."
    },
    {
      q: "What is the most popular bathroom upgrade?",
      a: "Custom walk-in tile showers, frameless glass enclosures, double vanities with quartz tops, and heated tile floors are the most popular value upgrades."
    },
    {
      q: "Do you offer tub-to-shower conversions?",
      a: "Yes – converting older alcove bathtubs into spacious, modern curbless walk-in showers is one of our specialty services."
    },
    {
      q: "Do you install heated floors?",
      a: "Yes – we install radiant electric heating mats under custom tile floors to keep surfaces comfortable during winter."
    },
    {
      q: "What type of tile is best for bathrooms?",
      a: "Porcelain tile is highly recommended for bathroom floors and showers due to its near-zero moisture absorption and high scratch resistance."
    },
    {
      q: "Do you provide a warranty on bathroom remodeling work?",
      a: "Yes – we provide a written workmanship warranty on all our remodeling, carpentry, and waterproofing labor."
    },
    {
      q: "Can you work with my existing layout?",
      a: "Yes – we can keep plumbing fixtures in their current locations to optimize your budget, or entirely reconfigure layout frames for improved flow."
    },
    {
      q: "Do you offer bathroom remodeling for commercial properties?",
      a: "Yes – we remodel commercial restrooms for retail centers, corporate offices, medical suites, and restaurants."
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
            style={{ backgroundImage: `url(${bathroomRemodelHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Bathroom
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Bathroom Remodeling
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Transform Your Bathroom into a Luxurious, Functional Retreat
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Bathroom Remodel Estimate
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
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Expert Bathroom Remodeling <br />
                  <span className="text-[#0077b6]">Design, Quality, and Craftsmanship You Deserve</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your bathroom should be more than just functional – it should be a sanctuary where you start and end each day in comfort and style. At Cinco Services, we specialize in complete bathroom remodeling that transforms outdated, inefficient spaces into stunning, spa-like retreats.
                  </p>
                  <p>
                    With over 15 years of experience, we handle every aspect of your bathroom remodel – from design and demolition to plumbing, electrical, custom tile, cabinetry, and finishing touches. Whether you're updating a powder room or creating a luxurious master suite, we bring precision, care, and craftsmanship to every project.
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
                Why Houston Homeowners Trust Us for Bathroom Remodeling
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
                OUR SCOPE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Remodeling Services
              </h2>
            </div>

            {/* Complete Transformations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Full Renovation
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Complete Bathroom Transformations
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We demo old framing, relocate drains, install modern lighting, lay custom tiles, fit vanities, and mount glass doors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Complete bathroom demolition",
                    "Plumbing & drainage relocates",
                    "Electrical wiring & lighting",
                    "Custom tile wall & floor layouts",
                    "Frameless glass door mounts",
                    "Granite & quartz vanity tops",
                    "Under-sink plumbing trim-out",
                    "Complete daily cleanup sweeps"
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
                  <img src={bathroomImg} alt="Complete Bathroom Remodeling" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Master vs. Guest vs. Powder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Master */}
              <Reveal variant="reveal-left" className="space-y-4 bg-gray-50 p-8 rounded-2xl border border-gray-150/50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-sans">Luxury Master Suites</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    Create your personal spa. We install freestanding soaking tubs, walk-in custom tile showers, heated flooring, double vanities, and separate water closets.
                  </p>
                </div>
                <div className="border-t border-gray-250/20 pt-4 mt-4 text-[13.5px] font-bold text-[#0077b6] flex items-center gap-1">
                  Luxury Master Features &rarr;
                </div>
              </Reveal>

              {/* Guest */}
              <Reveal variant="reveal-scale" className="space-y-4 bg-gray-50 p-8 rounded-2xl border border-gray-150/50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-sans">Guest & Secondary Baths</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    Update family and visitor bathrooms to be modern, durable, and clean. We handle tub-to-shower conversions, vanity swaps, and space-saving storage cabinetry.
                  </p>
                </div>
                <div className="border-t border-gray-250/20 pt-4 mt-4 text-[13.5px] font-bold text-[#0077b6] flex items-center gap-1">
                  Guest Bath Upgrades &rarr;
                </div>
              </Reveal>

              {/* Powder */}
              <Reveal variant="reveal-right" className="space-y-4 bg-gray-50 p-8 rounded-2xl border border-gray-150/50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-sans">Powder Rooms</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    Make a statement in smaller half-baths. We apply bold wallpapers, floating stone vanities, decorative accent sconces, and intricate mosaic floor details.
                  </p>
                </div>
                <div className="border-t border-gray-250/20 pt-4 mt-4 text-[13.5px] font-bold text-[#0077b6] flex items-center gap-1">
                  Powder Room Styling &rarr;
                </div>
              </Reveal>
            </div>

            {/* Custom Features & Finishes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Bathroom details" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Details Matter
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Bathroom Design & Features
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We install freestanding drop-in tubs, vanity quartz countertops, porcelain tiling surrounds, vanity mirrors, accent dimmable lighting, and safe accessibility options.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-650 font-medium">
                  {[
                    "Walk-in curbless custom showers",
                    "Freestanding soaking bathtubs",
                    "Double custom-built vanities",
                    "Quartz & Granite countertops",
                    "Premium porcelain/stone tile",
                    "Acoustic & task vanity lighting",
                    "Moen, Delta, Kohler fixtures",
                    "Grab bars ADA accessible safety"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
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

            {/* Bathtubs */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Bathtub Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Type</th>
                      <th className="p-4 font-sans">Description</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {bathtubOptions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.desc}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.features}</td>
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
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {countertopMaterials.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.mat}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.bestFor}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Vanities */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Vanity Styles</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Option</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {vanityStyles.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.style}</td>
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

        {/* ================= PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Bathroom Remodeling Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Space layout planning, detailed selections, watertight inspections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
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
                See Our Bathroom Remodeling Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: bathroomImg, title: "Modern double vanity master suite" },
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
                  <img src={galleryImages[(14 + idx) % galleryImages.length] || item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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
                What Our Clients Say About Our Bathroom Remodels
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
                Frequently Asked Questions About Bathroom Remodeling
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
                We provide professional bathroom remodeling services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Bathroom?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're dreaming of a spa-like master bathroom, a functional guest bath, or a stunning powder room, Cinco Services delivers exceptional craftsmanship and lasting results. Contact us today for a free estimate.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Bathroom Remodel Estimate
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
