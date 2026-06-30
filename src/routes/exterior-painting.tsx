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
import exteriorPaintingHero from "@/assets/exterior_painting_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/exterior-painting")({
  head: () => ({
    meta: [
      { title: "Residential & Commercial Exterior Painting | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium exterior painting, deck staining, and power washing in Houston. Weather-resistant coatings and free estimates." },
      { property: "og:title", content: "Exterior Painting Services - Cinco Services" },
      { property: "og:description", content: "Durable siding, trim, fence, and door painting in Katy, Cypress, and Houston, TX." },
    ],
  }),
  component: ExteriorPaintingPage,
});

function ExteriorPaintingPage() {
  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Premium Exterior Paints" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Siding, Trim, Decks, Fences, Pressure Wash" },
    { icon: Clock, label: "Painting Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation & Color Analysis" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Exterior Experience", desc: "We have painted hundreds of homes and commercial facilities across the Greater Houston area." },
    { icon: Wrench, title: "Premium Exterior Paints", desc: "We use weather-resistant, UV-protected, and mildew-resistant paints tailored for the humid Texas climate." },
    { icon: Sparkles, title: "Meticulous Prep Work", desc: "We pressure wash, scrape flaking paint, patch stucco cracks, sand, and apply sealer primers for lasting adhesion." },
    { icon: Shield, title: "Property Protection", desc: "We meticulously cover landscaping, flowerbeds, walkways, driveways, and patio furniture with drops." },
    { icon: Users, title: "Color Consulting", desc: "We help you select colors that complement your home's architecture, landscaping, and local HOA rules." },
    { icon: Heart, title: "Clean & Respectful", desc: "We clean up our paint debris daily, run magnetic sweeps, and keep the jobsite highly organized." },
    { icon: FileText, title: "Transparent Pricing", desc: "Detailed itemized estimates showing prep, coatings, cleanup, and materials with zero surprises." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Full general liability and workers' compensation coverage for complete customer safety." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our work. We don't consider the job complete until you're 100% happy." },
    { icon: Clock, title: "Flexible Scheduling", desc: "We adjust exterior painting schedules around your convenience to minimize building disruptions." }
  ];

  const resExterior = [
    { surface: "Siding", service: "Wood, vinyl, aluminum, fiber cement, stucco, brick, stone" },
    { surface: "Trim & Fascia", service: "Soffits, eaves, window trim, door frames, corner boards" },
    { surface: "Doors", service: "Front doors, garage doors, storm doors, French doors" },
    { surface: "Windows", service: "Window frames and sills (exterior)" },
    { surface: "Porches & Decks", service: "Wood decks, covered porches, railings, columns" },
    { surface: "Fences", service: "Wood fencing, privacy fences, picket fences" },
    { surface: "Garages & Sheds", service: "Detached garages, storage sheds, workshop exteriors" },
    { surface: "Gutters & Downspouts", service: "Painting and sealing" },
    { surface: "Concrete & Masonry", service: "Foundation walls, retaining walls, concrete patios" }
  ];

  const comExterior = [
    { type: "Retail Stores", service: "Storefronts, facades, trim, awnings, signage prep" },
    { type: "Office Buildings", service: "Building exteriors, entryways, windows, trim" },
    { type: "Restaurants & Cafes", service: "Storefronts, patios, awnings, facades" },
    { type: "Medical & Dental Offices", service: "Building exteriors, signage, entryways" },
    { type: "Hotels & Hospitality", service: "Building exteriors, facades, balconies, railings" },
    { type: "Warehouses & Industrial", service: "Building exteriors, office facades, safety markings" },
    { type: "Shopping Centers", service: "Facades, storefronts, parking structures, common areas" },
    { type: "Multi-Unit Properties", service: "Building exteriors, balconies, common areas" }
  ];

  const finishes = [
    { name: "Flat", best: "Stucco, masonry, old siding", features: "Hides surface imperfections well, non-reflective finish" },
    { name: "Eggshell", best: "Siding, trim, exterior wood", features: "Soft subtle sheen, durable, easy to wash down" },
    { name: "Satin", best: "Trim, exterior doors, siding", features: "Smooth finish, highly durable, washable" },
    { name: "Semi-Gloss", best: "Doors, trim, shutters", features: "Shiny finish, highly durable, moisture-resistant" },
    { name: "Gloss", best: "Front doors, trim highlights, accents", features: "Very shiny, extremely durable, easy to wipe clean" },
    { name: "Elastomeric", best: "Masonry, stucco, concrete walls", features: "Thick, flexible membrane, fills hairline cracks, waterproofs" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We inspect your property exterior, verify siding repairs, and prepare a detailed, transparent estimate." },
    { step: "Step 2", title: "Color Consultation", desc: "We help you compare paint swatches to match your roof style, landscaping, and local HOA requirements." },
    { step: "Step 3", title: "Surface Preparation", desc: "We pressure wash dirt, strip peeling flakes, sand rough grain, repair damaged wood/stucco, and prime bare spots." },
    { step: "Step 4", title: "Property Protection", desc: "We cover flowerbeds, pathways, driveways, HVAC units, and patio sets with clean drop cloths and plastic sheets." },
    { step: "Step 5", title: "Professional Painting", desc: "We apply premium paint using professional spray, brush, and roller techniques for a uniform, durable coat." },
    { step: "Step 6", title: "Cleanup & Touch-Ups", desc: "We clean up daily, remove tape, perform detailed line touch-ups, and run magnetic sweeps to collect nails." },
    { step: "Step 7", title: "Final Walkthrough", desc: "We walk around the property with you to verify every angle. We don't finish until you're 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services painted the entire exterior of our home. They did an amazing job – the prep work was thorough, the paint looks beautiful, and they cleaned up perfectly. Our home looks brand new!",
      author: "The Williams Family, Katy"
    },
    {
      stars: 5,
      quote: "We needed our office building painted. Cinco Services did a fantastic job – professional, on time, and the quality is outstanding. Highly recommend for commercial painting.",
      author: "Mark R., Commercial Property Manager, Houston"
    },
    {
      stars: 5,
      quote: "They painted our home exterior, including our deck and fence. Everything looks beautiful. The team was respectful, clean, and the craftsmanship is top-notch.",
      author: "Nancy P., Sugar Land"
    },
    {
      stars: 5,
      quote: "Our old home needed a complete exterior refresh. Cinco Services handled everything – pressure washing, repairs, priming, and painting. The result is stunning. We're so happy!",
      author: "Robert & Susan A., Cypress"
    },
    {
      stars: 5,
      quote: "They painted our storefront and did a beautiful job. Great communication, fair pricing, and the finish is flawless. Will definitely use them again.",
      author: "David L., Retail Business Owner, Pearland"
    }
  ];

  const faqs = [
    {
      q: "How often should I paint the exterior of my home?",
      a: "Most homes need exterior painting every 5 to 10 years depending on the siding material and sun/humidity exposure. Stucco and wood siding require more frequent checks than brick or vinyl."
    },
    {
      q: "How much does exterior painting cost?",
      a: "Costs vary based on exterior square footage, wall heights, level of stucco/wood repair needed, and paint brand. We provide free, detailed, transparent estimates."
    },
    {
      q: "How long does an exterior painting project take?",
      a: "Most residential projects take between 3 to 7 days, depending on prep work, power washing dry times, weather conditions, and property size."
    },
    {
      q: "Do you paint in the winter?",
      a: "Yes – we paint year-round in Houston, but we monitor weather closely to ensure temperatures are above 35-50 degrees (depending on paint formulation) for proper curing."
    },
    {
      q: "How do I choose exterior paint colors?",
      a: "We offer professional color consultations, helping you match colors that enhance architectural features, landscaping, and adhere to local HOA regulations."
    },
    {
      q: "Do you repair damaged siding before painting?",
      a: "Yes – we repair stucco hairline cracks, wood rot, trim fascia boards, and siding gaps as part of our prep work, documenting all details in your estimate."
    },
    {
      q: "Do you pressure wash before painting?",
      a: "Absolutely – pressure washing is a mandatory prep step to strip mold, dirt, mildew, and loose chalky residues, ensuring the paint adheres correctly."
    },
    {
      q: "Do you offer commercial exterior painting services?",
      a: "Yes – we paint office buildings, retail facades, restaurant patios, medical plazas, shopping center hallways, and warehouse offices."
    },
    {
      q: "What type of paint is best for Houston's climate?",
      a: "We recommend high-quality 100% acrylic latex exterior paints (Sherwin-Williams Duration/Emerald) containing premium UV filters and mildew-resistant inhibitors."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we carry complete liability and workers' compensation coverage protecting you, your home, and our painters."
    },
    {
      q: "Do you paint decks and fences?",
      a: "Yes – we provide power washing, wood repairs, staining, sealing, painting, and waterproofing treatments for decks, privacy fences, and pergolas."
    },
    {
      q: "Do you paint on weekends?",
      a: "Yes – we offer flexible scheduling including evenings and weekends to minimize disruption to commercial business operations."
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
            style={{ backgroundImage: `url(${exteriorPaintingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Exterior Paint
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Exterior Painting
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Boost Curb Appeal & Protect Your Property with Professional Exterior Painting
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Exterior Painting Estimate
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
                  Expert Exterior Painting <br />
                  <span className="text-[#0077b6]">Beauty That Lasts, Protection You Can Trust</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your home or business exterior is the first thing people see – and it faces Houston's intense sun, heavy rain, and humidity every single day. At Cinco Services, we provide professional exterior painting that not only enhances curb appeal but also protects your property from the elements.
                  </p>
                  <p>
                    With over 15 years of experience, we combine skilled craftsmanship, premium exterior paints, and meticulous surface preparation to deliver beautiful, long-lasting results. From residential homes to commercial properties, we handle every project with care and precision.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request an Exterior Estimate
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
                EXTERIOR RELIABILITY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Property Owners Trust Us for Exterior Painting
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
                OUR SERVICES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Exterior Painting Services
              </h2>
            </div>

            {/* Deck & Fence Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Restore & Protect
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Deck & Fence Painting
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Decks, fences, and pergolas face continuous weather wear. We power wash, sand splinters, perform wood repairs, and apply transparent or solid stains to seal against moisture and UV rays.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Power wash dirt removal",
                    "Scraping flaking stains",
                    "Wood rot board replace",
                    "Clear waterproofing sealers",
                    "Semi-transparent stain oil",
                    "Solid protective paint layers",
                    "Privacy fence spraying",
                    "Stair railing painting"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Popular Deck & Fence Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Classic White", "Cedar Tone", "Grey Finish", "Rich Brown", "Bold Black"].map((x, i) => (
                      <span key={i} className="bg-sky-50 text-[#0077b6] border border-sky-100 rounded-full px-3 py-1 text-[12px] font-bold">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Deck and Fence staining" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Pressure Washing & Prep */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={expertsImg} alt="Power washing surface prep" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  The Foundation of Flawless finishes
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Pressure Washing & Surface Prep
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Proper prep ensures your paint job lasts. We clean siding, brick, porches, and driveways, stripping mildew and chalky residue for maximum paint adhesion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Siding power wash cleaning",
                    "Mildew & green mold removal",
                    "Dirt & heavy dust stripping",
                    "Flaking paint scraping",
                    "Concrete driveway cleaning",
                    "Brick & masonry wash down",
                    "Sidewalk power washing",
                    "Garage floor cleaning"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Exterior Doors, Cabinets, & Roofs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Doors & Accent */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Exterior Cabinet & Door Painting</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Make a stunning statement at the entrance of your home. We paint front entry doors, garage panels, and outdoor kitchen storage cabinets.
                </p>
                <div className="space-y-2 text-[13px] text-gray-600 pt-2 font-medium">
                  <div className="mb-2"><strong>Popular Entry Door Colors:</strong></div>
                  <div className="flex flex-wrap gap-2">
                    {["Classic Black", "Bold Red", "Navy Blue", "Sage Green", "Crisp White", "Charcoal Gray"].map((x, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-[12px]">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Roof & Gutters */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Roof & Gutter Painting</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We paint gutter trim lines, downspouts, and apply protective elastomeric coatings on metal roofs to enhance waterproofing and heat reflectivity.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-650 font-semibold">
                  {["Gutter downspout color match painting", "Metal roof rust protection primer", "Elastomeric roof sealing coatings", "Weather protective eave finishes"].map((item, idx) => (
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
                Surfaces & Business Types We Paint
              </h2>
            </div>

            {/* Residential */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Residential Surfaces We Paint</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Surface</th>
                      <th className="p-4 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {resExterior.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.surface}</td>
                        <td className="p-4 text-gray-650 leading-relaxed">{row.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Commercial */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Commercial Surfaces We Paint</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Business Type</th>
                      <th className="p-4 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {comExterior.map((row, idx) => (
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
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Exterior Paint Finishes</h3>
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
                Our Exterior Painting Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Thorough surface cleaning, protective covers, uniform paints.
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
                See Our Exterior Painting Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: expertsImg, title: "Modern Custom Exterior Siding" },
                { img: showroomImg, title: "Retail Facade - Pearland, TX" },
                { img: transformImg, title: "Stained Cedar Privacy Fence" },
                { img: estimateImg, title: "Fresh Painted Foyer Door" },
                { img: kitchenImg, title: "Pressure Washed Concrete Driveway" },
                { img: bathroomImg, title: "Commercial Plaza Stucco Coating" }
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
                What Our Clients Say About Our Exterior Painting
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
                Frequently Asked Questions About Exterior Painting
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
                We provide professional exterior painting services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Property's Exterior?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Enhance your home or business's curb appeal and protect your investment with professional exterior painting. Contact Cinco Services today for a free estimate and color consultation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Exterior Painting Estimate
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
