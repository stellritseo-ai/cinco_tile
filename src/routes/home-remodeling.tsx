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
import homeRemodelingHero from "@/assets/home_remodeling_hero.png";
import transformImg from "@/assets/transform_section.png";
import showroomImg from "@/assets/showroom_section.png";
import expertsImg from "@/assets/experts_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/home-remodeling")({
  head: () => ({
    meta: [
      { title: "Home Remodeling & Renovations | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers premium home remodeling in Houston. From kitchens and bathrooms to additions and whole-home renovations, get a free estimate today." },
      { property: "og:title", content: "Home Remodeling Services - Cinco Services" },
      { property: "og:description", content: "Expert kitchen, bath, additions, and whole-home transformations in Katy, Sugar Land, and Houston." },
    ],
  }),
  component: HomeRemodelingPage,
});

function HomeRemodelingPage() {
  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Whole-Home, Kitchen, Bath, Additions" },
    { icon: Clock, label: "Remodeling Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free In-Home Consultations" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Remodeling Expertise", desc: "We've remodeled hundreds of homes across the Houston area, delivering beautiful, structurally sound results." },
    { icon: Wrench, title: "Full-Service Capabilities", desc: "We handle design, demolition, construction, and finishing – all under one trusted roof." },
    { icon: Sparkles, title: "Custom Design Solutions", desc: "Every remodel is tailored specifically to your lifestyle, design preferences, and budget." },
    { icon: Shield, title: "Quality Materials", desc: "We use premium, reliable brands for cabinetry, countertops, flooring, tile, and fixtures." },
    { icon: Heart, title: "Respect for Your Home", desc: "We cover surfaces, install dust barriers, clean up daily, and work to minimize disruption." },
    { icon: TrendingUp, title: "Clear Communication", desc: "You'll have a dedicated contact and know exactly what is happening at every stage." },
    { icon: FileText, title: "No Hidden Fees", desc: "We provide transparent, highly detailed estimates with no surprises or hidden charges." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "We carry full general liability and workers' compensation coverage for complete peace of mind." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our work. We don't finish the job until you are 100% happy." }
  ];

  const specialtyRooms = [
    { room: "Bathroom", service: "Full remodeling, custom tile, shower pan, bathtub replacement, vanities, flooring" },
    { room: "Kitchen", service: "Full remodeling, backsplash, cabinetry, countertops, flooring, painting" },
    { room: "Entryway", service: "Tile installation, wood flooring, custom design, painting" },
    { room: "Basement", service: "Finishing, framing, flooring, painting, lighting, bathrooms" },
    { room: "Laundry Room", service: "Flooring, painting, cabinetry, tile backsplash, utility sinks" },
    { room: "Living Room", service: "Flooring, fireplace tile, painting, custom built-ins" },
    { room: "Bedrooms", service: "Flooring, painting, closet organization, lighting" },
    { room: "Home Office", service: "Flooring, painting, custom shelving, lighting" }
  ];

  const materials = {
    tile: [
      { label: "Ceramic Tile", desc: "Versatile and affordable" },
      { label: "Porcelain Tile", desc: "Durable and water-resistant" },
      { label: "Marble Tile", desc: "Timeless luxury" },
      { label: "Granite Tile", desc: "Elegant and heat-resistant" },
      { label: "Slate Tile", desc: "Rustic and slip-resistant" },
      { label: "Travertine Tile", desc: "Classic Mediterranean style" },
      { label: "Limestone Tile", desc: "Natural warmth" },
      { label: "Onyx Tile", desc: "Unique and striking" },
      { label: "Glass Tile", desc: "Modern and reflective" }
    ],
    flooring: [
      { label: "Hardwood", desc: "Solid and engineered wood" },
      { label: "Laminate", desc: "Affordable and durable" },
      { label: "Luxury Vinyl", desc: "Waterproof and stylish" },
      { label: "Carpet", desc: "Warm and comfortable" }
    ],
    countertops: [
      { label: "Granite", desc: "Durable and heat-resistant" },
      { label: "Quartz", desc: "Low-maintenance and elegant" },
      { label: "Marble", desc: "Classic luxury" },
      { label: "Solid Surface", desc: "Seamless and versatile" }
    ],
    cabinetry: [
      { label: "Custom Wood Cabinets", desc: "Designed for your space" },
      { label: "Semi-Custom Options", desc: "Flexible configurations" },
      { label: "Modern Flat-Panel Designs", desc: "Sleek and contemporary" },
      { label: "Traditional Raised-Panel", desc: "Classic, timeless style" }
    ],
    paint: [
      { label: "Premium Paints", desc: "Sherwin-Williams or Benjamin Moore" },
      { label: "Custom Color Matching", desc: "Perfect harmony" },
      { label: "Eco-Friendly Low-VOC", desc: "Safe for family and pets" }
    ]
  };

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Estimate", desc: "We visit your home, discuss your vision, take measurements, and provide a detailed, transparent estimate with no hidden fees." },
    { step: "Step 2", title: "Design & Planning", desc: "We help you select materials, colors, and finishes. Our team creates a project plan with a clear timeline and scope of work." },
    { step: "Step 3", title: "Preparation & Protection", desc: "We cover floors, furniture, and surfaces with protective materials. Dust barriers are installed to contain debris." },
    { step: "Step 4", title: "Demolition & Construction", desc: "Our team handles demolition, framing, electrical, plumbing, and structural work with precision and safety." },
    { step: "Step 5", title: "Installation & Finishing", desc: "We install cabinetry, countertops, tile, flooring, and fixtures. Painting, trim, and final touches are completed." },
    { step: "Step 6", title: "Cleanup & Quality Check", desc: "We clean up thoroughly every day. A final walkthrough ensures every detail meets your expectations." },
    { step: "Step 7", title: "Satisfaction Guaranteed", desc: "We don't consider the job complete until you're 100% happy. We're always available for follow-up support." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services did our master bathroom remodel – from framing and plumbing to new bathtub and custom shower tile. Flawless work. Showed up on time, cleaned up every day. Highly recommend.",
      author: "Lisa M., Houston"
    },
    {
      stars: 5,
      quote: "They handled our entire home remodeling project – including wall removal, interior painting, and beautiful flooring. Professional, fair price, and the quality is stunning.",
      author: "James R., Katy"
    },
    {
      stars: 5,
      quote: "Our new kitchen is absolutely beautiful. The custom cabinets and tile backsplash are exactly what we envisioned. Cinco Services made the entire process stress-free.",
      author: "Maria T., Sugar Land"
    },
    {
      stars: 5,
      quote: "The team remodeled our basement and added a full bathroom. They finished on time and on budget. We now have a beautiful space our family loves.",
      author: "The Davis Family, Cypress"
    }
  ];

  const faqs = [
    {
      q: "Do you handle whole-home remodeling?",
      a: "Absolutely. We manage full home renovations, from demolition and structural work to the final electrical, plumbing, tiling, and painting touches."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and insured with general liability and workers' compensation for your protection and peace of mind."
    },
    {
      q: "How far do you travel for remodeling projects?",
      a: "We serve homeowners within a 50-mile radius of our Houston location at 1400 Broadfield Blvd, which includes Katy, Sugar Land, Cypress, Pearland, and the Woodlands."
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes – we provide free, no-obligation in-home consultations and detailed estimates for all remodeling projects."
    },
    {
      q: "How long does a typical kitchen remodel take?",
      a: "The timeline depends on the scope, but most kitchen remodels take between 4 to 8 weeks. We will provide a detailed calendar schedule before construction begins."
    },
    {
      q: "How long does a bathroom remodel take?",
      a: "A typical master bathroom remodel takes 2 to 4 weeks depending on structural layout changes, shower pan rebuilds, and tile installations."
    },
    {
      q: "Can you work with our existing layout?",
      a: "Yes – we can remodel and update your current space without changing the footprint, or we can reconfigure layouts with structural wall removal and framing modifications."
    },
    {
      q: "Do I need to be home during the project?",
      a: "Not necessarily. Many homeowners prefer to be out during heavy construction. We can work with your schedule and communicate with you daily via phone and photos."
    },
    {
      q: "What happens if we discover unexpected issues during the remodel?",
      a: "We handle unexpected issues (like hidden leak damage or outdated electrical) professionally. We will communicate immediately and provide solution options with transparent pricing."
    },
    {
      q: "Can you help with design and material selection?",
      a: "Yes – we provide professional design guidance and help you select materials, colors, tile options, and finishes that match your vision and budget."
    },
    {
      q: "What permits are needed for home remodeling?",
      a: "We handle all necessary permits and inspection schedules, ensuring full compliance with local Houston building codes."
    },
    {
      q: "Do you offer financing options?",
      a: "Please contact our office directly to discuss available financing options and packages for your home remodeling project."
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

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[60vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${homeRemodelingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Remodeling
            </span>
            
            <h1 className="font-sans text-[28px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Home Remodeling
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Transform Your House Into the Home You've Always Wanted
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Estimate
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Expert Home Remodeling <br />
                  <span className="text-[#0077b6]">From Vision to Reality</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your home should reflect your lifestyle, your taste, and your dreams. At Cinco Services, we specialize in whole-home and room-by-room remodeling that transforms outdated, inefficient spaces into beautiful, functional living areas.
                  </p>
                  <p>
                    With over 15 years of experience, we handle every aspect of your remodel – from demolition and structural framing to custom cabinetry, premium flooring, and the finishing touches that make your home truly yours. Whether you're updating a single room or reimagining your entire house, we bring precision, care, and craftsmanship to every project.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Get a Remodeling Consultation
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

        {/* ================= WHY HOMEOWNERS CHOOSE US ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                CINCO PROMISE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Homeowners Choose Us for Their Remodel
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
                Comprehensive Remodeling Services
              </h2>
            </div>

            {/* Whole-Home */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Full Renovation
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Whole-Home Remodeling
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  A whole-home remodel allows you to reimagine your entire living space – creating a cohesive, modern, and functional environment that flows seamlessly from room to room.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Full interior demolition & rebuild",
                    "Open-concept layout modifications",
                    "New framing & structural load beams",
                    "Kitchen & bathroom renovations",
                    "New hardwood, tile, laminate floors",
                    "Interior painting & custom trim",
                    "Lighting & electrical updates",
                    "Exterior architectural match"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-sky-50/50 p-5 rounded-xl border border-sky-100/50 italic text-[13.5px] text-gray-700 relative">
                  <Quote className="absolute top-2 right-3 w-6 h-6 text-sky-200/50" />
                  "Our whole-home remodel completely transformed our 1980s house into a modern, open-concept dream home." 
                  <strong className="block mt-2 font-bold text-gray-800 text-right">– James & Sarah R., Katy</strong>
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={transformImg} alt="Whole Home Transformation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Kitchen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={kitchenImg} alt="Kitchen Remodeling" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  The Heart of Your Home
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Kitchen Remodeling
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  The kitchen is where families gather, meals are prepared, and memories are made. We create beautiful, functional kitchens that make cooking and entertaining a joy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Custom cabinetry design",
                    "Quartz, granite, marble counters",
                    "Custom ceramic tile backsplashes",
                    "Pendant & under-cabinet lighting",
                    "Appliance installation",
                    "Island & breakfast bar installs",
                    "Plumbing & electrical upgrades",
                    "Custom pantry solutions"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                
                {/* Kitchen Tile Checkboxes */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">Kitchen Tile Options:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {["Ceramic Backsplash", "Marble Accents", "Porcelain Flooring", "Glass Tile Designs", "Mosaics"].map((opt, i) => (
                      <span key={i} className="bg-sky-50 text-[#0077b6] rounded-full px-3.5 py-1.5 text-[12px] font-bold border border-sky-100/50">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bathroom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Luxury Oasis
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Bathroom Remodeling
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Turn your bathroom into a spa-like oasis with premium materials, custom tile work, and thoughtful design. Whether you're updating a powder room or creating a master suite, we deliver stunning results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Demolition & framing rebuilds",
                    "Custom tile showers & surrounds",
                    "Waterproofed shower pan installs",
                    "Freestanding bathtub replace",
                    "Custom vanities & quartz tops",
                    "Marble, porcelain, ceramic floors",
                    "Walk-in shower with bench",
                    "Heated flooring options"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                {/* Bathroom Tile Checkboxes */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">Bathroom Tile Options:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {["Marble Tile", "Porcelain Tile", "Ceramic Tile", "Travertine Tile", "Slate (Slip-Resistant)", "Custom Mosaics"].map((opt, i) => (
                      <span key={i} className="bg-sky-50 text-[#0077b6] rounded-full px-3.5 py-1.5 text-[12px] font-bold border border-sky-100/50">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={bathroomImg} alt="Bathroom Remodeling" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Room Additions & Basement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Additions */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Room Additions</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Need more space but don't want to move? Room additions are a smart, cost-effective way to expand your home's footprint and increase its value.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-650 font-medium">
                  {["Foundation work & structural framing", "Roofing integration with existing structure", "Interior finishing (flooring, paint, trim)", "Electrical, plumbing, & HVAC expansion", "Permitting & code compliance"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <strong className="text-[12px] uppercase tracking-wider text-gray-400 block mb-2">Popular Additions:</strong>
                  <div className="flex flex-wrap gap-2">
                    {["Master Suites", "Home Offices", "Family Rooms", "In-Law Suites", "Sunrooms", "Second-Story"].map((x, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-[12px] text-gray-650 font-bold">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Basement Finishing */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Basement Finishing</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Transform your unfinished basement into valuable, livable space. We provide complete basement finishing services that maximize functionality and comfort.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-650 font-medium">
                  {["Framing & wall insulation", "Drywall installation & professional painting", "Hardwood, tile, laminate, carpet floors", "Wet bar & basement kitchenette", "Bathroom installation & plumbing setup", "Custom storage & egress windows"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Living, Entryway, Laundry */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Living & Family Rooms", 
                  desc: "Create inviting, comfortable spaces where your family can relax and entertain.", 
                  list: ["Flooring (wood, tile, laminate)", "Fireplace tile surrounds", "Custom built-in cabinetry", "Wall removal layouts"] 
                },
                { 
                  title: "Entryway & Foyer", 
                  desc: "The entryway sets the tone for your entire home. Make a lasting first impression.", 
                  list: ["Decorative tile or wood floors", "Custom trim & millwork", "Lighting upgrades", "Coat closet & storage"] 
                },
                { 
                  title: "Laundry Room Upgrades", 
                  desc: "Transform laundry rooms into functional and beautiful spaces you'll enjoy.", 
                  list: ["Custom cabinetry & countertops", "Porcelain tile floors", "Utility sink installation", "Folding stations & racks"] 
                }
              ].map((item, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-[17px] text-[#111827] font-sans border-b border-gray-100 pb-2">{item.title}</h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-2 pt-2 text-[13px] text-gray-600 font-semibold">
                      {item.list.map((x, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0077b6] shrink-0" strokeWidth={3} />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= SPECIALTY ROOM TABLE ================= */}
        <section className="py-20 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                ROOM OVERVIEW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Specialty Room Remodeling
              </h2>
            </div>

            <Reveal variant="reveal-scale">
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-5 font-sans">Room</th>
                      <th className="p-5 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {specialtyRooms.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-5 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.room}</td>
                        <td className="p-5 text-gray-600 leading-relaxed">{row.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= REMODELING PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Remodeling Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Simple, Transparent, Stress-Free – We keep you informed and involved at every step.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <span className="absolute top-4 right-4 bg-[#d62828] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
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

        {/* ================= MATERIALS WE WORK WITH ================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-sky-400 uppercase tracking-[0.25em] block">
                OUR INVENTORY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-white mt-2">
                Premium Materials for Lasting Beauty
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Tile */}
              <Reveal variant="reveal-scale" className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/30">
                <h3 className="text-lg font-bold text-sky-400 font-sans border-b border-slate-700 pb-3 mb-5">Tile Options</h3>
                <div className="space-y-3.5">
                  {materials.tile.map((x, i) => (
                    <div key={i} className="text-[13.5px] leading-snug">
                      <span className="font-bold text-white block">{x.label}</span>
                      <span className="text-gray-400 text-[12px]">{x.desc}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Flooring & Countertops */}
              <Reveal variant="reveal-scale" className="space-y-8">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/30">
                  <h3 className="text-lg font-bold text-sky-400 font-sans border-b border-slate-700 pb-3 mb-5">Flooring</h3>
                  <div className="space-y-3">
                    {materials.flooring.map((x, i) => (
                      <div key={i} className="text-[13.5px]">
                        <span className="font-bold text-white">{x.label}</span>
                        <span className="text-gray-400 text-[12px] block">{x.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/30">
                  <h3 className="text-lg font-bold text-sky-400 font-sans border-b border-slate-700 pb-3 mb-5">Countertops</h3>
                  <div className="space-y-3">
                    {materials.countertops.map((x, i) => (
                      <div key={i} className="text-[13.5px]">
                        <span className="font-bold text-white">{x.label}</span>
                        <span className="text-gray-400 text-[12px] block">{x.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Cabinetry & Paint */}
              <Reveal variant="reveal-scale" className="space-y-8">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/30">
                  <h3 className="text-lg font-bold text-sky-400 font-sans border-b border-slate-700 pb-3 mb-5">Cabinetry</h3>
                  <div className="space-y-3">
                    {materials.cabinetry.map((x, i) => (
                      <div key={i} className="text-[13.5px]">
                        <span className="font-bold text-white">{x.label}</span>
                        <span className="text-gray-400 text-[12px] block">{x.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/30">
                  <h3 className="text-lg font-bold text-sky-400 font-sans border-b border-slate-700 pb-3 mb-5">Paint Options</h3>
                  <div className="space-y-3">
                    {materials.paint.map((x, i) => (
                      <div key={i} className="text-[13.5px]">
                        <span className="font-bold text-white">{x.label}</span>
                        <span className="text-gray-400 text-[12px] block">{x.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* ================= GALLERY PLACEHOLDER ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMPLETED WORK
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                See Our Remodeling Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: kitchenImg, title: "Modern Quartz Kitchen" },
                { img: bathroomImg, title: "Luxury Spa Bathroom" },
                { img: transformImg, title: "Whole-Home Transformation" },
                { img: tileImg, title: "Custom Backsplash Install" },
                { img: expertsImg, title: "Basement Framing & Finish" },
                { img: estimateImg, title: "Home Foyer Tile Entry" }
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
                What Houston Homeowners Are Saying
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
                Home Remodeling FAQs
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
                Proudly Serving Houston-Area Homeowners
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We provide home remodeling services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Transform Your Home?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're planning a kitchen update, a bathroom transformation, or a whole-home renovation, Cinco Services is here to make it happen. Let's talk about your project and create something beautiful together.
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

      </main>

      <Footer />
      <LiveChat />
    </div>
  );
}
