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
import roofingServicesHero from "@/assets/roofing_services_hero.png";
import expertsImg from "@/assets/experts_section.png";
import showroomImg from "@/assets/showroom_section.png";
import transformImg from "@/assets/transform_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/roofing-services")({
  head: () => ({
    meta: [
      { title: "Residential & Commercial Roofing Services | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers expert roof installations, repairs, and full replacements in Houston. Licensed, insured storm damage roofing contractors." },
      { property: "og:title", content: "Roofing Services - Cinco Services" },
      { property: "og:description", content: "Durable roof installations and storm repairs in Katy, Sugar Land, and Cypress, TX." },
    ],
  }),
  component: RoofingServicesPage,
});

function RoofingServicesPage() {
  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Free Estimates" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Services Provided", value: "Installation, Repair, Replacement, Tarping" },
    { icon: Clock, label: "Roofing Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Estimates", value: "Free Visual Consultations" },
    { icon: MapPin, label: "Houston Coverage", value: "Within 50-Mile Radius" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years of Roofing Experience", desc: "We've installed and repaired hundreds of roofs across the Houston area, surviving the toughest storms." },
    { icon: Wrench, title: "Premium Materials", desc: "We use only top-quality shingles, underlayment, flashing, sealants, and ventilation systems from top brands." },
    { icon: Sparkles, title: "Expert Installation", desc: "Our team follows manufacturer specifications and industry best practices for a watertight seal." },
    { icon: Shield, title: "Storm Damage Specialists", desc: "We handle emergency tarping, inspect wind/hail impact, and help compile evidence for insurance claims." },
    { icon: Building2, title: "Residential & Commercial", desc: "We handle standard family houses, commercial retail storefronts, office buildings, and warehouse roofs." },
    { icon: FileText, title: "Transparent Pricing", desc: "We provide transparent, highly detailed estimates with no surprises or hidden charges." },
    { icon: CheckCircle, title: "Licensed & Insured", desc: "Complete general liability and workers' compensation coverage protects your property during work." },
    { icon: Heart, title: "Clean & Respectful", desc: "We cover landscaping with tarps, run magnets to catch nails, and clean up thoroughly daily." },
    { icon: Heart, title: "Satisfaction Guaranteed", desc: "Our team stands behind all of our roofing work. We don't finish until you are 100% happy." },
    { icon: Map, title: "Local Houston Expertise", desc: "We understand Houston's extreme heat building requirements, windstorm building codes, and local permits." }
  ];

  const resRoofing = [
    { mat: "Asphalt Shingles", benefit: "Affordable, versatile, available in many colors", lifespan: "20–30 years" },
    { mat: "Metal Roofing", benefit: "Durable, energy-efficient, fire-resistant", lifespan: "40–70 years" },
    { mat: "Tile Roofing", benefit: "Beautiful, durable, excellent for Texas climate", lifespan: "50–100 years" },
    { mat: "Slate Roofing", benefit: "Premium, timeless elegance, extremely durable", lifespan: "75–100+ years" },
    { mat: "Wood Shake", benefit: "Natural, rustic beauty", lifespan: "20–30 years" }
  ];

  const comRoofing = [
    { mat: "TPO Roofing", bestFor: "Flat roofs, energy-efficient, reflective", lifespan: "20–30 years" },
    { mat: "EPDM Roofing", bestFor: "Flat roofs, durable, affordable", lifespan: "20–30 years" },
    { mat: "Modified Bitumen", bestFor: "Flat roofs, strong, weather-resistant", lifespan: "20–25 years" },
    { mat: "Metal Roofing", bestFor: "Industrial, warehouses, retail", lifespan: "40–70 years" },
    { mat: "Built-Up Roofing (BUR)", bestFor: "Flat roofs, multiple layers, durable", lifespan: "20–30 years" }
  ];

  const processSteps = [
    { step: "Step 1", title: "Free Roofing Consultation & Estimate", desc: "We inspect your roof, identify leaks or issues, and provide a detailed estimate with photos." },
    { step: "Step 2", title: "Material Selection", desc: "We help you choose the right materials (shingles, metal, TPO) based on your budget, style, and property needs." },
    { step: "Step 3", title: "Scheduling & Preparation", desc: "We schedule work at your convenience and prepare the site, covering landscaping and walkways for protection." },
    { step: "Step 4", title: "Roof Installation, Repair, or Replacement", desc: "Our licensed team executes the work with precision, following strict manufacturer safety standards." },
    { step: "Step 5", title: "Cleanup & Quality Check", desc: "We clean up all debris, run magnets to collect all loose nails, and perform a final walkthrough." },
    { step: "Step 6", title: "Satisfaction Guaranteed", desc: "We don't consider the job complete until you're 100% happy. We back all of our labor with warranties." }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Cinco Services replaced our roof after a storm. They responded quickly, helped with our insurance claim, and did an excellent job. The roof looks beautiful and we have peace of mind.",
      author: "Laura T., Katy"
    },
    {
      stars: 5,
      quote: "We needed a complete roof replacement for our commercial property. Cinco Services was professional, on time, and within budget. Highly recommend.",
      author: "David R., Commercial Property Owner, Houston"
    },
    {
      stars: 5,
      quote: "Our old roof had multiple leaks. Cinco Services repaired it quickly and at a fair price. Great communication and craftsmanship.",
      author: "Maria G., Sugar Land"
    },
    {
      stars: 5,
      quote: "They installed a new metal roof on our home. The quality is outstanding, and the team was respectful and clean. We love it!",
      author: "The Peterson Family, Cypress"
    }
  ];

  const faqs = [
    {
      q: "How do I know if I need a roof repair or replacement?",
      a: "If your roof has isolated damage or a few missing shingles from a windstorm, a repair is usually sufficient. If your roof is over 20 years old, has widespread leaks, or extensive shingle curling/granule loss, a replacement is the better long-term investment."
    },
    {
      q: "How much does a new roof cost?",
      a: "Costs vary based on roof square footage, materials chosen, and slope complexity. We provide detailed, transparent in-home estimates so you know exactly what to expect."
    },
    {
      q: "What type of roofing is best for Texas weather?",
      a: "Asphalt shingles are the most common and cost-effective. Metal and clay/concrete tiles offer superior heat reflectivity and higher durability against Texas hail, storms, and intense heat."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and carry comprehensive liability and worker's compensation insurance for all structural work."
    },
    {
      q: "How long does a roof installation take?",
      a: "Most residential roof replacements take only 1 to 3 days depending on roof size. Commercial flat roof installations can take longer depending on single-ply membrane layers."
    },
    {
      q: "Do you offer warranties on roofing work?",
      a: "Yes – we provide workmanship warranties on our labor and assist with standard manufacturer warranties on materials."
    },
    {
      q: "Do you help with insurance claims for storm damage?",
      a: "Absolutely. We provide comprehensive inspections, detailed damage reports, photos, and itemized construction estimates to support your insurance claim."
    },
    {
      q: "How far do you travel for roofing projects?",
      a: "We serve property owners within a 50-mile radius of our office located at 1400 Broadfield Blvd, Houston, TX."
    },
    {
      q: "What do you do to protect my property during roofing?",
      a: "We cover landscaping, custom flowerbeds, walkways, and driveways with heavy tarps. We perform thorough post-work cleanup and sweep the property with industrial magnet rollers to collect nails."
    },
    {
      q: "Can I stay in my home during a roof replacement?",
      a: "Yes. The construction is loud during the day, but we work quickly, minimize disruptions, and keep the property safe and clean each evening."
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
            style={{ backgroundImage: `url(${roofingServicesHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Roofing
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Roofing Services
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Protecting Your Home or Business with Quality Roofing That Lasts
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Get My Free Roofing Estimate
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
                  Expert Roofing Installation, Repair & Replacement <br />
                  <span className="text-[#0077b6]">Built for Texas Weather</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your roof is your property's first line of defense against Houston's intense heat, heavy rains, and unpredictable storms. At Cinco Services, we provide professional roofing services designed to protect your home or business for decades to come.
                  </p>
                  <p>
                    With over 15 years of experience, we specialize in roof installation, repair, replacement, and maintenance for both residential and commercial properties. We use premium materials, follow industry-best practices, and stand behind our work with a satisfaction guarantee. Whether you need a new roof, storm damage repair, or a routine inspection, Cinco Services delivers reliability and craftsmanship you can count on.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Request a Free Roof Inspection
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
                ROOFING STANDARDS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Houston Property Owners Trust Us for Roofing
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
                CAPABILITIES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Roofing Services
              </h2>
            </div>

            {/* Roof Installation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  New Build & Replacements
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  New Roof Installation
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Whether you're building a new home, constructing a commercial building, or replacing an old, worn-out roof, we provide professional installation services that deliver long-lasting protection.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-gray-600">
                  <div className="space-y-2">
                    <strong className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Residential Installs:</strong>
                    {["Asphalt shingle roofs", "Metal roofing structures", "Clay & concrete tiles", "Slate & wood shakes"].map((x, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-[#0077b6]" strokeWidth={3} />
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <strong className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Commercial Installs:</strong>
                    {["TPO single-ply systems", "EPDM rubber roofs", "Modified bitumen rolls", "Industrial metal sheets"].map((x, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-[#0077b6]" strokeWidth={3} />
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 text-[13px] text-gray-500 leading-relaxed">
                  <strong>Every Installation Includes:</strong> Tear-off, deck inspection, ice/water underlayment, valley/chimney flashing, intake ventilation, gutter installations, and complete site cleaning.
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={estimateImg} alt="New Roof Installation" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Roof Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="order-2 lg:order-1">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={expertsImg} alt="Roof leak repairs" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="order-1 lg:order-2 space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Fast Repairs
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Professional Roof Repair
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Roof damage can happen unexpectedly. We provide prompt, professional roof repair services to stop leaks, patch shingle loss, and prevent costly structural water damage inside.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-gray-600 font-medium">
                  {[
                    "Leak detection & repair",
                    "Missing or cracked shingles",
                    "Chimney & vent flashing repair",
                    "Plywood deck patching",
                    "Wind & hail impact repair",
                    "Fascia & soffit wood repair",
                    "Gutter leak repair & replace",
                    "Emergency roof tarping"
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100/50 text-[13px] leading-relaxed text-gray-600">
                  <strong>Our Repair Process:</strong> Thorough leak inspection &rarr; Detailed photographic estimate &rarr; Prompt, professional repair &rarr; Clean up & sweep &rarr; Watertight test follow-up.
                </div>
              </Reveal>
            </div>

            {/* Roof Replacement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="inline-block bg-sky-50 text-[#0077b6] rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
                  Full Replacements
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">
                  Full Roof Replacement
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  When repair cycles become frequent, a full roof replacement is a safer and more cost-effective long-term solution. We manage the entire project from initial demolition to final walkthrough.
                </p>
                <div className="space-y-3.5 text-[14px] text-gray-600 font-semibold">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Triggers for Replacement:</strong> Roof age reaches 20+ years, widespread shingle curling, heavy granule loss in gutters, sagging beams, or severe windstorm damage.</span>
                  </div>
                  <div className="flex items-start gap-2 border-t border-gray-100 pt-3.5">
                    <Check className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                    <span><strong>Our Replacement Process:</strong> Comprehensive drone/manual inspection &rarr; Material & colors selection &rarr; Protective tarping &rarr; Deck repair & underlayment &rarr; Shingle layout installation &rarr; Final walkthrough.</span>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src={transformImg} alt="Full Roof replacement" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Emergency & Inspections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Emergency */}
              <Reveal variant="reveal-left" className="space-y-6 bg-rose-50 p-8 rounded-2xl border border-rose-150/50">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#d62828] flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900 font-sans">Storm Damage & Emergency Roofing</h3>
                <p className="text-[14px] text-rose-700 leading-relaxed">
                  Houston weather is unpredictable. When severe storms cause immediate leaks, our crews respond quickly to tarp the damaged deck and secure your property.
                </p>
                <div className="space-y-2.5 text-[13.5px] text-rose-800 font-semibold">
                  {["Immediate emergency roof tarping", "Temporary leak stops & repairs", "Complete photographic storm damage assessments", "Detailed estimates for insurance adjusters", "Work directly with claims documentation"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#d62828] shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/80 p-5 rounded-xl border border-rose-200/50 italic text-[13.5px] text-rose-800 relative">
                  <Quote className="absolute top-2 right-3 w-6 h-6 text-rose-300/40" />
                  "The team responded quickly after our roof was damaged by a storm. They tarped it immediately, helped with our insurance claim, and replaced the roof with quality materials. Highly recommend."
                  <strong className="block mt-2 font-bold text-rose-900 text-right">– Mark T., Cypress</strong>
                </div>
              </Reveal>

              {/* Maintenance */}
              <Reveal variant="reveal-right" className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-150/50">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Inspections & Maintenance</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Regular roof maintenance and professional inspections can extend your roof's lifespan and catch small flashing cracks before they turn into major structural leaks.
                </p>
                <div className="space-y-2 text-[13.5px] text-gray-650 font-medium">
                  <strong>Inspections:</strong> Residential, commercial, pre-purchase home checks, insurance-required inspections, post-storm checks.
                </div>
                <div className="space-y-2 border-t border-gray-200 pt-3 text-[13.5px] text-gray-650 font-medium">
                  <strong>Maintenance:</strong> Debris removal, gutter cleaning, flashing seal check, shingle replacement.
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ================= COMPARISON TABLES ================= */}
        <section className="py-20 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            
            <div className="text-center max-w-xl mx-auto">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                ROOFING MATERIALS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Residential & Commercial Roofing Options
              </h2>
            </div>

            {/* Residential */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Residential Roofing Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Material</th>
                      <th className="p-4 font-sans">Benefits</th>
                      <th className="p-4 font-sans">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {resRoofing.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.mat}</td>
                        <td className="p-4 text-gray-650 leading-relaxed border-r border-gray-100">{row.benefit}</td>
                        <td className="p-4 text-gray-800 font-semibold">{row.lifespan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Commercial */}
            <Reveal variant="reveal-scale" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 font-sans pl-2 border-l-4 border-[#0077b6]">Commercial Roofing Options</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-4 font-sans">Material</th>
                      <th className="p-4 font-sans">Best For</th>
                      <th className="p-4 font-sans">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {comRoofing.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-4 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.mat}</td>
                        <td className="p-4 text-gray-650 leading-relaxed border-r border-gray-100">{row.bestFor}</td>
                        <td className="p-4 text-gray-800 font-semibold">{row.lifespan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= ROOFING PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR WORKFLOW
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Roofing Process
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Professional, Efficient, Transparent – Seamless executions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                COMPLETED ROOFS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                See Our Roofing Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: expertsImg, title: "Architectural Shingles - Katy, TX" },
                { img: showroomImg, title: "Commercial Flat TPO - Houston, TX" },
                { img: transformImg, title: "Premium Standing Seam Metal" },
                { img: tileImg, title: "Clay Tile Installation" },
                { img: estimateImg, title: "Storm Damage Repair Tarp" },
                { img: kitchenImg, title: "Residential Gutter Fitting" }
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
                What Our Clients Say About Our Roofing Services
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
                Frequently Asked Questions About Roofing
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
                We provide professional roofing services throughout Houston and nearby communities within a 50-mile radius.
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
                Protect Your Home or Business with Quality Roofing
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Don't wait until a small leak becomes a big problem. Whether you need a new roof, repair, replacement, or inspection, Cinco Services is here to help. Contact us today for a free estimate.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Get My Free Roofing Estimate
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
