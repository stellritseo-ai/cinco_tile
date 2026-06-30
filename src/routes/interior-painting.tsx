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
import interiorPaintingHero from "@/assets/interior_painting_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/interior-painting")({
  head: () => ({
    meta: [
      { title: "Interior Painting & Cabinet Refinishing | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium interior painting, cabinet painting, and crown molding finishing in Houston. Free color consultation and estimate." },
      { property: "og:title", content: "Interior Painting Services - Cinco Services" },
      { property: "og:description", content: "Flawless wall, ceiling, and cabinet painting finishes in Houston, Katy, and Cypress, TX." },
    ],
  }),
  component: InteriorPaintingPage,
});

function InteriorPaintingPage() {
  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Premium Paints" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Walls, Ceilings, Cabinets, Trim Painting" },
    { icon: Clock, label: "Painting Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & Color Check" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Painting Expertise", desc: "Skilled in standard residential interior color flows and commercial layout coatings." },
    { icon: Wrench, title: "Premium Paints & Materials", desc: "We use top-quality, low-VOC or zero-VOC paints (Sherwin-Williams, Benjamin Moore) for durability and health safety." },
    { icon: Sparkles, title: "Meticulous Surface Preparation", desc: "We patch drywall holes, scrape tape blemishes, sand surfaces, and prime before any brush strokes." },
    { icon: Users, title: "Expert Color Consultation", desc: "We help you compare paint swatches to find the perfect shade matching your lighting conditions." },
    { icon: Shield, title: "Protection of Your Property", desc: "We cover furniture, floors, and door fixtures with professional drop cloths and plastic sheets." },
    { icon: Heart, title: "Clean & Respectful", desc: "Our painters clean up thoroughly daily, keeping the jobsite organized and dust-free." },
    { icon: FileText, title: "No Hidden Fees", desc: "Detailed quotes including paint brands, number of coats, prep work, and final cleanup costs." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "General liability and workers' comp coverage protect you and your home during work." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our work. We don't consider the job complete until you're 100% happy." },
    { icon: Clock, title: "Flexible Scheduling", desc: "We offer evening and weekend scheduling options to minimize disruption to your home or business." }
  ];

  const resPainting = [
    { space: "Living Rooms", service: "Walls, ceilings, trim, accent walls, custom finishes" },
    { space: "Bedrooms", service: "Walls, ceilings, closets, trim, accent walls" },
    { space: "Kitchens", service: "Walls, ceilings, cabinets, trim, backsplash coordination" },
    { space: "Bathrooms", service: "Walls, ceilings, trim, moisture-resistant paints" },
    { space: "Basements", service: "Walls, ceilings, trim, moisture-resistant finishes" },
    { space: "Entryways & Hallways", service: "Walls, ceilings, trim, high-traffic durable finishes" },
    { space: "Home Offices", service: "Walls, ceilings, trim, custom accent walls" },
    { space: "Children's Rooms", service: "Fun colors, custom designs, washable finishes" },
    { space: "Stairwells & High Ceilings", service: "Safe, professional painting for hard-to-reach areas" }
  ];

  const comPainting = [
    { type: "Retail Stores", service: "Walls, ceilings, display areas, brand colors, accent walls" },
    { type: "Office Spaces", service: "Open areas, private offices, conference rooms, lobbies" },
    { type: "Restaurants & Cafes", service: "Dining areas, kitchens, bathrooms, brand colors" },
    { type: "Medical & Dental Offices", service: "Waiting rooms, treatment rooms, calming colors" },
    { type: "Hotels & Hospitality", service: "Lobbies, guest rooms, hallways, restaurants" },
    { type: "Salons & Spas", service: "Treatment rooms, reception areas, calming finishes" },
    { type: "Warehouses & Industrial", service: "Office areas, break rooms, safety markings" },
    { type: "Multi-Unit Properties", service: "Common areas, hallways, individual units" }
  ];

  const finishes = [
    { name: "Flat/Matte", best: "Ceilings, low-traffic walls", features: "No sheen, hides surface imperfections well" },
    { name: "Eggshell", best: "Living rooms, bedrooms", features: "Soft subtle sheen, easy to wipe down" },
    { name: "Satin", best: "Kitchens, bathrooms, hallways", features: "Smooth finish, highly durable, washable" },
    { name: "Semi-Gloss", best: "Trim, doors, cabinets", features: "Shiny finish, highly durable, easy to clean" },
    { name: "High-Gloss", best: "Cabinets, furniture, accents", features: "Very shiny, factory-like hard finish, extremely durable" },
    { name: "Low-VOC / Zero-VOC", best: "Nurseries, bedrooms, sensitive spaces", features: "Low odor, environmentally friendly, safe for children" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your space, discuss your color goals, evaluate surface repairs, and provide a clear detailed estimate." },
    { step: "Step 2", title: "Color Consultation", desc: "We help you select colors and finishes (matte, satin, semi-gloss) that complement your style, furnishings, and lighting." },
    { step: "Step 3", title: "Furniture & Surface Protection", desc: "We cover furniture, floors, and fixtures with drop cloths and plastic sheeting. Fixtures are removed when needed." },
    { step: "Step 4", title: "Surface Preparation", desc: "We prep walls by patching holes, repairing drywall, sanding, scraping, and applying primer for better adhesion." },
    { step: "Step 5", title: "Professional Painting", desc: "We apply premium paint using high-quality brushes, rollers, and spray equipment, following manufacturer guidelines for durability." },
    { step: "Step 6", title: "Cleanup & Touch-Ups", desc: "We clean up thoroughly daily, remove all protective coverings, vacuum, and perform detailed paint line touch-ups." },
    { step: "Step 7", title: "Final Walkthrough", desc: "We walk through the space with you to ensure every detail is perfect. We don't consider the job complete until you're 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services painted our entire home – walls, ceilings, trim, and cabinets. The quality is outstanding. They were professional, clean, and finished on time. We love our new home!",
      author: "Sarah & Mike R., Katy"
    },
    {
      stars: 5,
      quote: "We had our kitchen cabinets painted and they look brand new. The team was meticulous and the finish is flawless. Highly recommend Cinco Services.",
      author: "Lisa M., Houston"
    },
    {
      stars: 5,
      quote: "They painted our office building and did an amazing job. Minimal disruption to our business, great communication, and beautiful results.",
      author: "Jennifer K., Commercial Property Manager, Sugar Land"
    },
    {
      stars: 5,
      quote: "Our home had outdated colors and wallpaper. Cinco Services removed the wallpaper, repaired the walls, and painted everything beautifully. Our home feels brand new.",
      author: "The Davis Family, Cypress"
    },
    {
      stars: 5,
      quote: "We wanted an accent wall in our living room with a custom pattern. Cinco Services executed it perfectly. The attention to detail is incredible.",
      author: "Amanda T., Houston"
    }
  ];

  const faqs = [
    {
      q: "How much does interior painting cost?",
      a: "Costs vary based on room square footage, wall heights, level of patching/drywall prep, and paint brand. We provide detailed, transparent, free estimates."
    },
    {
      q: "How long does an interior painting project take?",
      a: "Most standard residential projects take between 1 to 5 days depending on the number of rooms, drywall patching required, and cabinet detail requirements."
    },
    {
      q: "How do I choose the right paint color?",
      a: "We offer professional color consultations. We analyze lighting, room footprints, and current furnishings to match perfect Sherwin-Williams or Benjamin Moore colors."
    },
    {
      q: "Do I need to move furniture before painting?",
      a: "We handle heavy furniture movement and protection. We ask that you remove personal desktop items, valuables, and breakables, and we take care of the rest."
    },
    {
      q: "Do you paint cabinets?",
      a: "Yes – we specialize in kitchen and bathroom cabinet painting. We remove doors, degrease, sand, apply specialized adhesion primers, and spray-apply high-durability finishes."
    },
    {
      q: "Are your paints safe for children and pets?",
      a: "Yes – we offer low-VOC and zero-VOC paints that have virtually zero odor and are safe for nurseries, bedrooms, and family pets."
    },
    {
      q: "Do you repair walls before painting?",
      a: "Yes – surface prep is critical. We patch nail holes, tape drywall cracks, sand textures, and prime raw boards to ensure a flawless final coat."
    },
    {
      q: "Do you offer commercial painting services?",
      a: "Yes – we handle office buildings, retail shops, restaurants, medical clinics, hospitality centers, and warehouse breakrooms."
    },
    {
      q: "Do you paint on weekends?",
      a: "Yes – we offer flexible scheduling including evenings and weekends to minimize disruption to commercial business operations."
    },
    {
      q: "What's the difference between paint finishes?",
      a: "Lower sheen finishes (flat, eggshell) hide wall imperfections. Higher sheen finishes (satin, semi-gloss, gloss) are more durable, water-resistant, and easier to clean."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we carry complete liability and workers' compensation coverage protecting you, your home, and our painters."
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
            style={{ backgroundImage: `url(${interiorPaintingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Painting
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Interior Painting
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Transform Your Home or Business with Professional Color & Craftsmanship
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Painting Estimate
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
                  Expert Interior Painting <br />
                  <span className="text-[#0077b6]">Fresh Colors, Flawless Finishes</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Nothing transforms a space quite like a fresh coat of paint. Whether you're updating a single room, refreshing your entire home, or giving your commercial property a professional new look, Cinco Services delivers flawless interior painting that exceeds expectations.
                  </p>
                  <p>
                    With over 15 years of experience, we combine skilled craftsmanship, premium paints, and meticulous preparation to deliver beautiful, long-lasting results. From color consultation to final cleanup, we handle every detail with care and precision.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request a Paint Consultation
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
                PAINT QUALITY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Homeowners & Businesses Trust Us for Painting
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

        {/* ================= DETAILED SERVICE SHOWCASE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                CAPABILITIES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Interior Painting Services
              </h2>
            </div>

            {/* Cabinet Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Cabinet Refinishing
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Cabinet Painting
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Painting kitchen or bathroom cabinets is a cost-effective way to modernize your space. We remove doors, sand, apply bonding primer, and spray-apply finishes for a factory-quality surface.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Cabinet door removal & label",
                    "Thorough cleaning & degreasing",
                    "Sanding & grain filling",
                    "Adhesion bonding primers",
                    "HVLP spraying for smooth finish",
                    "Hardware installation",
                    "Kitchen island color accents",
                    "Bathroom vanity painting"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Popular Cabinet Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Crisp White", "Classic Navy", "Charcoal Gray", "Warm Greige", "Deep Green", "Classic Black"].map((x, i) => (
                      <span key={i} className="bg-sky-50 text-[#0077b6] border border-sky-100 rounded-full px-3 py-1 text-[12px] font-bold">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={kitchenImg} alt="Cabinet Painting" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Trim & Crown Molding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Trim & Crown Molding Painting" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  The Perfect Finishing Touch
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Trim, Crown Molding & Door Painting
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Details matter. We paint crown moldings, baseboards, trim profiles, and interior doors with precision to create a crisp, elegant border structure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Baseboard & shoe molding lines",
                    "Crown molding caulking & painting",
                    "Panel, French, & sliding doors",
                    "Window frame & sill painting",
                    "Wainscoting & chair rails",
                    "Custom built-in bookcases",
                    "Banisters & stair handrails",
                    "Satin or Semi-Gloss finishes"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Wallpaper & Texturing & Accent walls */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Wallpaper & Prep */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Wallpaper Removal & Texture</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Before we paint, we prepare your walls. We strip old wallpapers, patch drywall cracks, sand textures, and create a smooth finish.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["wallpaper stripping (backing glue cleanup)", "Drywall patching, tape, & float repair", "Popcorn ceiling removal", "Knockdown, orange peel, or smooth textures", "Full binding primer applications"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Accent Walls */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Accent Walls & Custom Finishes</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Add custom character to your spaces with creative accent walls, deep contrast designs, or artistic metallic highlights.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-655 font-semibold">
                  {["Contrast color accent walls", "Custom geometric painted stripes", "Venetian plaster applications", "Faux stone, marble, or wood texturing", "Gold/silver metallic accents"].map((item, idx) => (
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

        {/* ================= SPACES COMPARISON TABLES ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                SERVICE SCOPE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Spaces & Business Types We Paint
              </h2>
            </div>

            {/* Residential */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Residential Spaces We Paint</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Space</th>
                      <th className="p-4 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {resPainting.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.space}</td>
                        <td className="p-4 text-gray-650 leading-relaxed">{row.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Commercial */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Commercial Spaces We Paint</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Business Type</th>
                      <th className="p-4 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {comPainting.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-4 text-gray-655 leading-relaxed">{row.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Finishes */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Paint Finishes & Best Uses</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Finish</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {finishes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.name}</td>
                        <td className="p-4 text-gray-655 border-r border-gray-100">{row.best}</td>
                        <td className="p-4 text-gray-500 font-semibold leading-relaxed">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= PAINTING PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Interior Painting Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Meticulous Preparation, Professional Application, Spotless Cleanup.
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
                COMPLETED SPACES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                See Our Interior Painting Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: expertsImg, title: "Modern Living Accent Wall" },
                { img: showroomImg, title: "Foyer Faux Marble Paint" },
                { img: transformImg, title: "Zero-VOC Kid Bedroom Flow" },
                { img: kitchenImg, title: "Sprayed Kitchen Cabinets" },
                { img: bathroomImg, title: "Mildew-Resistant Bathroom Satin" },
                { img: tileImg, title: "Detailed Crown Molding Finish" }
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
                What Our Clients Say About Our Painting Services
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
                Frequently Asked Questions About Painting
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
                We provide professional interior painting services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Space with a Fresh Coat of Paint?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're refreshing a single room, painting your entire home, or updating your commercial property, Cinco Services delivers flawless results that last. Contact us today for a free estimate and color consultation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Painting Estimate
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
