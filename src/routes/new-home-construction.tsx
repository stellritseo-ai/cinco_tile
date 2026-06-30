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
import newConstructionHero from "@/assets/new_construction_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/new-home-construction")({
  head: () => ({
    meta: [
      { title: "Custom New Home Construction | Cinco Services | Houston, TX" },
      { name: "description", content: "Build your dream custom home from the ground up with Cinco Services in Houston. Site preparation, foundation, framing, roofing, and premium finishes." },
      { property: "og:title", content: "New Home Construction Services - Cinco Services" },
      { property: "og:description", content: "Custom homes designed for you and built to last in Houston, Katy, and Cypress." },
    ],
  }),
  component: NewHomeConstructionPage,
});

function NewHomeConstructionPage() {
  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Custom Home Builder" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Ground Up Custom Home Building" },
    { icon: Clock, label: "Building Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Consultation" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Construction Expertise", desc: "We've built hundreds of homes across the Houston area, bringing expert local engineering to every project." },
    { icon: Wrench, title: "Full-Service Capabilities", desc: "We handle everything from site prep and foundations to final structural roofing and finishes – no sub juggling." },
    { icon: Sparkles, title: "Custom Design Flexibility", desc: "Work with your architect or ours. We build to your exact custom specifications and layouts." },
    { icon: Shield, title: "Premium Materials", desc: "We use top-quality materials for structural framing integrity, weatherized roofing, flooring, and tiles." },
    { icon: FileText, title: "Transparent Pricing", desc: "We provide detailed custom construction estimates with no hidden fees or surprise costs." },
    { icon: TrendingUp, title: "Project Management Excellence", desc: "You'll have one dedicated contact coordinating your project from groundbreaking to move-in day." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "We carry comprehensive liability and worker's compensation insurance for complete peace of mind." },
    { icon: Clock, title: "On-Time Delivery", desc: "We respect your family's move-in timeline and coordinate framing, inspections, and finishes to deliver when promised." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our work. We don't hand over the keys until you are 100% happy." },
    { icon: Map, title: "Local Houston Soil Expertise", desc: "We understand local Houston soil conditions, windstorms engineering, and local building codes." }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Consultation & Site Visit", desc: "We meet with you to discuss your vision, budget, and timeline. We visit your site to assess soil conditions, access, and utilities." },
    { step: "Step 2", title: "Design & Planning", desc: "We work with you and your architect (or ours) to finalize plans. We help you select materials, finishes, and features. We obtain all necessary permits and approvals." },
    { step: "Step 3", title: "Detailed Estimate & Contract", desc: "We provide a comprehensive, transparent estimate with all costs clearly outlined. Once signed, we set a construction start date." },
    { step: "Step 4", title: "Site Preparation & Foundation", desc: "We clear and grade the site, excavate, and pour the foundation. Utility connections are established." },
    { step: "Step 5", title: "Framing & Structural Construction", desc: "We build the framework of your home – walls, floors, and roof structure." },
    { step: "Step 6", title: "Exterior Finishing", desc: "We install roofing, siding or brick, windows, doors, and exterior painting." },
    { step: "Step 7", title: "Interior Rough-In", desc: "We install HVAC, plumbing, and electrical systems within the walls. Inspections are conducted to ensure compliance." },
    { step: "Step 8", title: "Interior Finishing", desc: "We install drywall, painting, flooring, cabinets, countertops, tile, trim, and fixtures." },
    { step: "Step 9", title: "Final Walkthrough & Inspection", desc: "We do a thorough walkthrough with you to ensure every detail is perfect. A final inspection is conducted for occupancy approval." },
    { step: "Step 10", title: "Move-In & Satisfaction Guarantee", desc: "We hand over the keys. We're available for follow-up questions and support. We don't consider the job complete until you're 100% happy." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services built our dream home from the ground up. They guided us through every step, communicated clearly, and delivered a stunning home that exceeded our expectations. We couldn't be happier.",
      author: "The Johnson Family, Cypress"
    },
    {
      stars: 5,
      quote: "We were nervous about building a custom home, but Cinco Services made it easy. They were professional, transparent, and the quality is outstanding. We highly recommend them.",
      author: "Mark & Diane S., Katy"
    },
    {
      stars: 5,
      quote: "From site preparation to move-in, Cinco Services handled everything flawlessly. Our new home is beautiful, and the craftsmanship is top-notch. Thank you!",
      author: "The Anderson Family, Fulshear"
    },
    {
      stars: 5,
      quote: "We built a custom home with Cinco Services and the experience was excellent. They stayed on budget, finished on time, and the quality is exceptional.",
      author: "Robert & Laura M., Sugar Land"
    }
  ];

  const faqs = [
    {
      q: "Do you build custom homes or only from existing plans?",
      a: "We build custom homes tailored to your vision. You can bring your own plans, work with our architect, or we can help you design from scratch."
    },
    {
      q: "How much does it cost to build a custom home?",
      a: "Costs vary based on size, location, materials, and features. We provide detailed, transparent estimates so you know exactly what to expect."
    },
    {
      q: "How long does it take to build a new home?",
      a: "Most custom homes take 6–12 months to build, depending on size, complexity, and weather conditions. We provide a clear timeline upfront."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and carry comprehensive liability and worker's compensation insurance."
    },
    {
      q: "Do you offer warranties on new construction?",
      a: "Yes – we provide warranties on our workmanship and stand behind the quality of our builds."
    },
    {
      q: "Can you build on my land?",
      a: "Yes – we build on your lot or help you find suitable land."
    },
    {
      q: "How far do you travel for new home construction?",
      a: "We build homes within a 50-mile radius of our Houston location at 1400 Broadfield Blvd."
    },
    {
      q: "Do you handle permits and inspections?",
      a: "Yes – we manage all necessary permits, inspections, and code compliance."
    },
    {
      q: "Can I make changes during construction?",
      a: "Yes – we work with you to accommodate changes within the project timeline and budget."
    },
    {
      q: "What styles of homes do you build?",
      a: "We build any style – modern, traditional, Mediterranean, ranch, craftsman, farmhouse, and more."
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
            style={{ backgroundImage: `url(${newConstructionHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Construction
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              New Home Construction
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Build Your Dream Home from the Ground Up – With Quality, Care, and Precision
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Construction Estimate
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
                  Custom New Home Construction <br />
                  <span className="text-[#0077b6]">Designed for You, Built to Last</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    There's nothing quite like a home built specifically for you – your lifestyle, your family, and your future. At Cinco Services, we specialize in custom new home construction that brings your vision to life from the ground up.
                  </p>
                  <p>
                    With over 15 years of experience in the Houston area, we manage every aspect of the building process – from site preparation and foundation work to framing, roofing, interior finishing, and final walkthrough. We combine skilled craftsmanship, premium materials, and attentive project management to deliver a home that exceeds your expectations.
                  </p>
                  <p>
                    Whether you have a complete set of plans or just a dream, we're here to guide you through every step of the journey.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Start Your Custom Home Build
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
                CINCO RELIABILITY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Homeowners Trust Us to Build Their Dream Home
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

        {/* ================= SERVICES SHOWCASE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                BUILDING PHASES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Home Building Services
              </h2>
            </div>

            {/* Site Prep & Foundations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Phase 1 & 2
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Site Preparation & Foundation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Before we build, we clear grading, excavate, and pour a solid foundation. We design foundations built to withstand Houston's unique soil compaction levels and flood hazards.
                </p>
                <div className="space-y-3.5 text-[14px] text-gray-600 font-semibold">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Site Preparation:</strong> Clearing grading, excavations, utility connections (sewer, electrical, water), soil test analysis.</span>
                  </div>
                  <div className="flex items-start gap-2 border-t border-gray-100 pt-3.5">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Foundations We Build:</strong> Slab-on-grade (Houston standard), pier & beam (ideal for flood zones), basements, and crawl spaces. Includes rebar cure reinforcement.</span>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={estimateImg} alt="Site Prep & Foundation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Framing & Roofing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={expertsImg} alt="Framing & Structural skeleton" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Phase 3 & 4
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Framing & Roofing
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  We erect the plumb skeleton structure of your custom home, framing load-bearing walls and installing premium weather-resistant roofing systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Wood or steel structural framing",
                    "Floor joists & subflooring",
                    "Roof trusses & rafters",
                    "Weather barriers & sheathing",
                    "Window rough-in frame openings",
                    "Proper drainage & gutters",
                    "Underlayment waterproofing",
                    "Ventilation system insulation"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Roofing Options We Install:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Slate Roofing", "Flat TPO Systems"].map((x, i) => (
                      <span key={i} className="bg-sky-50 text-[#0077b6] border border-sky-100 rounded-full px-3 py-1 text-[12px] font-bold">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Exterior & Interior Finishing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Exterior */}
              <Reveal variant="reveal-left" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Exterior Finishing</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We install beautiful, durable, and low-maintenance claddings that enhance curb appeal while protecting the structural components underneath.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-650 font-medium">
                  {["Siding claddings (brick, stone, stucco, wood, vinyl)", "Premium outdoor painting", "Window & door installations", "Trim, fascia, and soffit assemblies", "Walkway, driveway, and drainage grading"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Interior */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Interior Finishing</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  This is where your custom home comes to life. We handle drywalls, paints, trims, cabinets, and premium custom installations.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-gray-650 font-medium">
                  {["Drywall tape-and-float finishing & trim moldings", "Interior custom paints (low-VOC selections)", "Premium custom wood cabinetry installation", "Quartz, granite, and marble countertop fittings", "Complete plumbing, HVAC, and lighting fixtures"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Custom Tile, Flooring & Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Luxury Installations
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Custom Tile, Flooring & Features
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  With over 15 years of tile and floor expertise, we design and install premium waterproofing systems, luxury marble patterns, LVP, and hardwood flooring.
                </p>

                <div className="grid grid-cols-2 gap-4 text-[13px] text-gray-600 pt-2">
                  <div className="space-y-2">
                    <strong className="text-[11px] uppercase tracking-wider text-gray-400 block">Tile Materials:</strong>
                    {["Ceramic", "Porcelain", "Marble", "Slate", "Travertine", "Limestone"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-bold">
                        <Check className="w-3.5 h-3.5 text-[#0077b6]" strokeWidth={3} />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <strong className="text-[11px] uppercase tracking-wider text-gray-400 block">Custom Features:</strong>
                    {["Gourmet Kitchens", "Spa Bathrooms", "Smart Home Systems", "Outdoor Kitchens", "Energy Efficiency", "In-Law Suites"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-bold">
                        <Check className="w-3.5 h-3.5 text-[#0077b6]" strokeWidth={3} />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={showroomImg} alt="Custom Showroom Features" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ================= BUILDING PROCESS ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR ROADMAP
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our New Home Construction Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Seamless, Transparent, Stress-Free – Groundbreaking to Move-In.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                    <h3 className="font-extrabold text-[14px] text-[#111827] font-sans mb-3 mt-1 leading-snug">
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMPLETED HOMES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                See Our New Home Construction Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: expertsImg, title: "Custom Brick Ranch - Katy, TX" },
                { img: showroomImg, title: "Modern Craftsman - Cypress, TX" },
                { img: transformImg, title: "Spa-Suite Living - Fulshear, TX" },
                { img: kitchenImg, title: "Chef's Kitchen Feature" },
                { img: bathroomImg, title: "Luxury Master Tub Install" },
                { img: tileImg, title: "Foyer Faux Marble Flooring" }
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
                What Our Homeowners Are Saying
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
                New Home Construction FAQs
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
                Proudly Building Homes Across Houston
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We provide new home construction services throughout Houston and nearby communities within a 50-mile radius.
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
                Ready to Build Your Dream Home?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Your dream home is just a conversation away. Let's talk about your vision, your budget, and your timeline. Cinco Services is here to bring your dream to life – with quality, care, and craftsmanship that lasts.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Book My Free Construction Consultation
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
