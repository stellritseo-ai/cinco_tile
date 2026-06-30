import { createFileRoute } from "@tanstack/react-router";
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
  Hammer,
  Paintbrush,
  Layers,
  Briefcase,
  Users
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import commercialRemodelHero from "@/assets/commercial_remodel_hero.png";
const showroomBg = commercialRemodelHero;
import expertsImg from "@/assets/experts_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import transformImg from "@/assets/transform_section.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Construction & Remodeling | Cinco Services | Houston, TX" },
      { name: "description", content: "Cinco Services offers professional commercial remodeling, custom construction, flat roofing, painting, and tile installation for Houston businesses. Minimal downtime." },
      { property: "og:title", content: "Commercial Remodeling & Construction - Cinco Services" },
      { property: "og:description", content: "15+ years of commercial building experience in Houston." },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "Satisfaction Guaranteed" },
    { icon: Clock, text: "15+ Years Experience" },
    { icon: Map, text: "50-Mile Service Radius" },
    { icon: Briefcase, text: "Commercial Specialists" },
  ];

  const sidebarItems = [
    { title: "Commercial Remodeling", desc: "Retail, office, restaurant, medical, and more" },
    { title: "New Commercial Construction", desc: "Custom-built business spaces" },
    { title: "Commercial Roofing", desc: "Installation, repair, replacement" },
    { title: "Commercial Painting", desc: "Interior & exterior branding" },
    { title: "Commercial Tile & Flooring", desc: "Porcelain, marble, hardwood, laminate" },
    { title: "Minimal Business Disruption", desc: "After-hours and weekend availability" },
  ];

  const whyChooseUs = [
    { 
      title: "15+ Years of Commercial Experience", 
      desc: "We've successfully executed retail, office, hospitality, and medical remodeling projects with precision." 
    },
    { 
      title: "Minimal Business Disruption", 
      desc: "We work around your schedule, offering night and weekend shifts to prevent losing business hours." 
    },
    { 
      title: "Full-Service Capabilities", 
      desc: "From major construction and roofing down to detailed lobby painting and heavy-duty tile, we do it all." 
    },
    { 
      title: "Code Compliance", 
      desc: "We ensure full compliance with local building codes, ADA regulations, and safety guidelines." 
    },
    { 
      title: "Project Management", 
      desc: "You will have a dedicated commercial project manager as your single point of contact from start to finish." 
    },
    { 
      title: "Scalable Solutions", 
      desc: "Whether you need a quick office refresh or a full-scale commercial build-out, we scale to match your scope." 
    },
    { 
      title: "Licensed & Insured", 
      desc: "Complete General Liability and Workers' Comp coverage ensures full safety compliance for your enterprise." 
    },
    { 
      title: "Transparent Pricing", 
      desc: "Highly detailed, itemized estimates mean you stay on budget with zero hidden fees or surprise change orders." 
    },
  ];

  const servicesList = [
    {
      id: "remodel",
      title: "Commercial Remodeling & Renovations",
      subtitle: "Commercial Remodeling – Modernize Your Business Space",
      desc: "Whether you're updating a single office or renovating an entire retail space, we bring your vision to life while keeping your business running.",
      image: transformImg,
      icon: Hammer,
      bulletPoints: [
        "Office Renovations – Open floor plans, conference rooms, acoustical ceilings, and reception lobbies",
        "Retail Store Remodeling – Storefront entries, display shelving, custom lighting, and durable flooring",
        "Restaurant & Hospitality – Commercial kitchens, walk-in coolers, custom bars, and dining space tile",
        "Medical & Dental Offices – Specialized treatment rooms, waiting lobbies, hygiene-compliant flooring",
        "Warehouse & Industrial – Office build-outs, mezzanine extensions, and functional restroom renovations",
        "Multi-Unit Properties – Apartment common areas, leasing offices, and condo tenant updates"
      ]
    },
    {
      id: "construction",
      title: "New Commercial Construction",
      subtitle: "Custom New Commercial Construction",
      desc: "Building a new commercial property from the ground up? Cinco Services brings the expertise and project management skills to deliver on time and on budget.",
      image: showroomBg,
      icon: Building2,
      bulletPoints: [
        "Complete site preparation, grading, and structural concrete slab work",
        "Heavy-duty framing, load-bearing metal studs, and structural steel beams",
        "Commercial roof framing, deck laying, and insulation systems",
        "Interior partitioning, commercial drywall systems, and fireproofing",
        "Custom tile layouts, high-traffic commercial flooring, and premium branding paint",
        "Managing building inspector walkthroughs for quick occupancy delivery"
      ]
    },
    {
      id: "roofing",
      title: "Commercial Roofing Services",
      subtitle: "Commercial Roofing – Protect Your Investment",
      desc: "Your commercial roof is critical to protecting your inventory, equipment, and employees. We provide professional roofing services designed for commercial durability.",
      image: estimateImg,
      icon: Shield,
      bulletPoints: [
        "Commercial roof installation and full system replacements",
        "Flat roof systems including TPO (Thermoplastic Polyolefin) and EPDM rubber membranes",
        "Metal roofing, standing seam panels, and structural metal repairs",
        "Emergency commercial leak response, storm patching, and temporary tarping",
        "Commercial roof inspections, detailed safety logging, and maintenance plans"
      ]
    },
    {
      id: "painting",
      title: "Commercial Painting – Interior & Exterior",
      subtitle: "Commercial Painting – Professional Finish, Lasting Impression",
      desc: "A fresh, professional paint job enhances your brand image and creates a welcoming environment for customers and employees.",
      image: expertsImg,
      icon: Paintbrush,
      bulletPoints: [
        "Office suites, executive boardrooms, and common lobbies",
        "Retail showrooms, boutique walls, and display area painting",
        "Medical facilities, clinical rooms, and cleanroom wall coatings",
        "Commercial exteriors – brick sealing, stucco repair, metal siding coatings",
        "Storefront entryways, parking garage structures, and safety stripe markers",
        "Full surface preparation, pressure washing, and low-VOC paint options"
      ]
    },
    {
      id: "tile",
      title: "Commercial Tile & Flooring Installation",
      subtitle: "Premium Commercial Tile & Flooring – Durable & Beautiful",
      desc: "With over 15 years of tile and flooring expertise, we deliver commercial-grade installations that withstand high traffic while looking stunning.",
      image: tileImg,
      icon: Layers,
      bulletPoints: [
        "Tile Selections: Heavy-duty Porcelain, Ceramic, Marble, Granite, Slate, Travertine, Limestone",
        "Slip-resistant tiles for commercial kitchens, entryways, and restrooms",
        "Commercial flooring: Solid hardwood, engineered planks, high-wear laminate",
        "Specialty lobby features: Bookmatched marble slabs, mosaic insignias, custom stone surrounds",
        "Restroom tile packages: Full floor-to-ceiling tiling, linear shower drains, epoxy grout lines"
      ]
    }
  ];

  const spaceServices = [
    { type: "Retail Stores", services: "Flooring, painting, storefront updates, display areas, remodeling" },
    { type: "Restaurants & Cafes", services: "Kitchen remodeling, dining area updates, backsplash, flooring, painting" },
    { type: "Medical & Dental Offices", services: "Treatment room updates, reception areas, flooring, painting, tile" },
    { type: "Office Spaces", services: "Open office layouts, conference rooms, private offices, flooring, painting" },
    { type: "Hotels & Hospitality", services: "Lobby remodels, guest room updates, restaurant and bar installations, tile" },
    { type: "Warehouses & Industrial", services: "Office build-outs, flooring, painting, functional renovations" },
    { type: "Multi-Unit Housing", services: "Apartment renovations, common area updates, flooring, painting" },
    { type: "Salons & Spas", services: "Custom tile, flooring, painting, vanity installations" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Commercial Consultation & Estimate",
      desc: "We visit your property, discuss your business needs, take measurements, and provide a detailed, transparent estimate."
    },
    {
      step: "02",
      title: "Planning & Permitting",
      desc: "We handle all necessary permits and approvals. We create a project plan with a clear timeline that works around your business operations."
    },
    {
      step: "03",
      title: "Scheduling & Preparation",
      desc: "We schedule work during off-hours when possible to minimize disruption. We protect your space with dust barriers and floor covers."
    },
    {
      step: "04",
      title: "Professional Installation",
      desc: "Our licensed team executes the work with precision – from demolition and construction to installation and finishing."
    },
    {
      step: "05",
      title: "Cleanup & Quality Check",
      desc: "We clean up thoroughly and do a final walkthrough with you to ensure every detail meets your standards."
    },
    {
      step: "06",
      title: "Satisfaction Guaranteed",
      desc: "We don't consider the job complete until you're 100% happy. We stand behind our commercial work."
    }
  ];

  const testimonials = [
    {
      quote: "Cinco Services remodeled our restaurant dining area and kitchen. They worked overnight to avoid losing business hours and delivered amazing results. Highly recommend for commercial work.",
      author: "Marco R.",
      role: "Restaurant Owner",
      location: "Houston"
    },
    {
      quote: "We hired Cinco Services for a complete office renovation. They handled everything – demolition, new walls, flooring, painting, and custom tile in the lobby. Professional, on time, and within budget.",
      author: "Sarah K.",
      role: "Property Manager",
      location: "Katy"
    },
    {
      quote: "The team replaced our commercial roof and did exterior painting for our retail center. Fast, reliable, and affordable. Will use them for all our future commercial projects.",
      author: "David T.",
      role: "Commercial Property Owner",
      location: "Sugar Land"
    }
  ];

  const faqs = [
    {
      q: "Do you work on commercial properties of all sizes?",
      a: "Yes – we handle commercial renovations and construction of all scales, from boutique retail shops and office suites to large warehouse partition builds and multi-family common areas."
    },
    {
      q: "Are you licensed and insured for commercial work?",
      a: "Absolutely. Cinco Services is fully licensed in the State of Texas. We carry substantial commercial general liability insurance ($2M+) and comprehensive workers' compensation coverage to satisfy commercial property protocols."
    },
    {
      q: "How far do you travel for commercial projects?",
      a: "We serve commercial clients within a 50-mile radius of our main office located at 1400 Broadfield Blvd, Houston, TX 77084. This includes Katy, Sugar Land, Cypress, Richmond, Pearland, and The Woodlands."
    },
    {
      q: "Do you offer free commercial estimates?",
      a: "Yes – we provide itemized, transparent, and completely free commercial consultations and quotes with no obligation to purchase."
    },
    {
      q: "Can you minimize disruption to our business operations?",
      a: "Yes, this is our specialty. We can coordinate evening shifts, night work, and weekend schedules to execute construction phases while your business remains open during normal business hours."
    },
    {
      q: "Do you handle permitting and code compliance?",
      a: "Yes – we manage the entire municipal permitting process and ensure all structural, electrical, plumbing, and tiling layouts meet local building codes and ADA accessibility guidelines."
    },
    {
      q: "How long do commercial projects typically take?",
      a: "Timelines depend entirely on project scope. A minor office remodel might take 2 weeks, while a large restaurant or ground-up build could take months. We supply a clear project calendar upfront and adhere strictly to your deadlines."
    },
    {
      q: "Can you work with our architect or designer?",
      a: "Absolutely. We routinely collaborate with property managers, developers, corporate designers, and third-party architects to implement pre-planned layouts accurately."
    },
    {
      q: "What if we have an emergency repair need?",
      a: "We offer priority emergency response services for commercial clients, addressing urgent roof leaks, storm damage, and structural breaches that threaten business continuity."
    }
  ];

  const industriesList = [
    "Retail & Shopping Centers", "Restaurants & Cafes", "Hotels & Hospitality", 
    "Medical & Dental Offices", "Professional Office Spaces", "Warehouses & Industrial Facilities", 
    "Multi-Unit Residential (Apartments, Condos)", "Salons & Spas", "Educational Facilities", 
    "Religious Institutions", "Fitness Centers & Gyms", "Car Dealerships & Auto Shops"
  ];

  const serviceAreas = [
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
        <section className="relative min-h-[60vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${commercialRemodelHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#0077b6] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(0,119,182,0.3)]">
              Houston Commercial Construction
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[56px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Commercial Services
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[20px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Professional Construction & Remodeling Solutions for Houston Businesses
            </p>

            {/* Trust Badge Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 border-t border-white/10 pt-8 max-w-5xl mx-auto">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-white/95 text-[13px] md:text-[14px] font-bold shrink-0">
                    <Icon className="w-[18px] h-[18px] text-sky-400 shrink-0" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= INTRO & SIDEBAR ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Reliable, Scalable Construction & Remodeling <br />
                  <span className="text-[#0077b6]">for Commercial Properties</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Your commercial property is a reflection of your brand – and it needs to be functional, safe, and impressive. At Cinco Services, we provide comprehensive construction, remodeling, roofing, painting, and tile services for businesses across Houston and surrounding areas.
                  </p>
                  <p>
                    From retail storefronts and office spaces to restaurants, medical facilities, and multi-unit properties, we bring over 15 years of commercial expertise to every project. We understand the importance of minimizing downtime, maintaining professionalism, and delivering results that enhance your business operations and curb appeal.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Get My Free Commercial Estimate
                  </a>
                  <a 
                    href="tel:8324062716" 
                    className="inline-flex items-center gap-2.5 bg-gray-100 hover:bg-gray-150 text-[#111827] rounded-full px-8 py-3.5 text-[15px] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <Phone className="w-[16px] h-[16px]" /> Call (832) 406-2716
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
                    {sidebarItems.map((item, idx) => (
                      <div key={idx} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-[15px] text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d62828] shrink-0" />
                          {item.title}
                        </h4>
                        <p className="text-[13px] text-gray-400 pl-3.5 mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-[14px] space-y-3.5 text-gray-300">
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-sky-400" />
                      <a href="tel:8324062716" className="hover:underline font-bold text-white">(832) 406-2716</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-sky-400" />
                      <a href="mailto:eli@cincoservicesllc.com" className="hover:underline">eli@cincoservicesllc.com</a>
                    </p>
                    <p className="flex items-center gap-3 items-start">
                      <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span>1400 Broadfield Blvd,<br />Houston, TX 77084</span>
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                BUSINESS ADVANTAGES
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Why Businesses Trust Cinco Services
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                Commercial projects require a higher level of coordination, compliance, and speed. Cinco Services delivers on all fronts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((item, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-150/50 hover:shadow-xl hover:border-sky-100 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center mb-5 text-[#0077b6]">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h3 className="font-bold text-[16px] md:text-[17px] text-[#111827] mb-2 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= DETAILED SERVICES SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMMERCIAL SCOPE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Comprehensive Commercial Services – Built for Business
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We offer a complete range of commercial services, so you never have to coordinate multiple contractors. From structural base to roof, inside and out – we handle it.
              </p>
            </div>

            {/* Alternating Service Cards */}
            <div className="space-y-24 md:space-y-32">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <div 
                    key={service.id} 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                  >
                    {/* Image block */}
                    <Reveal 
                      variant={isEven ? "reveal-left" : "reveal-right"}
                      className={`relative ${!isEven ? "lg:order-2" : ""}`}
                    >
                      {/* Decorative Frame */}
                      <div className="absolute -inset-4 bg-sky-500/5 rounded-2xl -z-10 translate-x-3 translate-y-3" />
                      <div className="absolute -inset-4 border border-[#0077b6]/20 rounded-2xl -z-10 -translate-x-3 -translate-y-3" />
                      
                      <div className="overflow-hidden shadow-xl rounded-2xl aspect-[4/3]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1s]" 
                        />
                      </div>
                    </Reveal>

                    {/* Content block */}
                    <Reveal 
                      variant={isEven ? "reveal-right" : "reveal-left"}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0077b6]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-wider block">
                          {service.title}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#111827] leading-tight">
                        {service.subtitle}
                      </h3>
                      
                      <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-3 pt-2">
                        {service.bulletPoints.map((bp, bpIdx) => {
                          const parts = bp.split(" – ");
                          const hasDetails = parts.length > 1;
                          return (
                            <div key={bpIdx} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-sky-500 mt-1 shrink-0" />
                              <div className="text-[14px] md:text-[15px]">
                                {hasDetails ? (
                                  <>
                                    <strong className="text-gray-800 font-bold">{parts[0]}</strong>
                                    <span className="text-gray-500"> – {parts[1]}</span>
                                  </>
                                ) : (
                                  <span className="text-gray-700">{bp}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= SPACE-SPECIFIC SERVICES TABLE ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                SECTOR TAILORED
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Specialized Services for Every Commercial Space
              </h2>
            </div>

            <Reveal variant="reveal-scale">
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-5 font-sans">Business Type</th>
                      <th className="p-5 font-sans">Services We Provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px]">
                    {spaceServices.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-5 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.type}</td>
                        <td className="p-5 text-gray-600 leading-relaxed">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= INDUSTRIES WE SERVE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Serving Diverse Commercial Verticals
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
              {industriesList.map((ind, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-gray-50 text-gray-700 px-5 py-3 rounded-full text-[14px] font-bold border border-gray-100 hover:bg-[#0077b6] hover:text-white hover:border-[#0077b6] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {ind}
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROCESS FOR COMMERCIAL PROJECTS ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                COMMERCIAL PROCESS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Commercial Project Process – Efficient, Professional, Reliable
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We understand that time is money. Our streamlined process ensures your project is completed efficiently with minimal disruption to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-white border border-gray-150/50 p-8 rounded-2xl hover:shadow-xl hover:border-sky-100 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="text-6xl font-black text-slate-100 absolute top-4 right-6 select-none group-hover:text-[#0077b6]/10 transition-colors">
                    {step.step}
                  </span>
                  
                  <h3 className="font-bold text-[17px] text-[#111827] mb-3 font-sans pr-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-[13.5px] md:text-[14.5px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                PORTFOLIO
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Commercial Projects – See Our Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Retail Showroom Tile & Framing", img: showroomBg, desc: "Sleek porcelain lobby layout" },
                { title: "Commercial Office Boardroom Painting", img: expertsImg, desc: "Low-VOC premium color coat" },
                { title: "Restaurant Dining Floor Tiling", img: tileImg, desc: "Slip-resistant ceramic solutions" },
                { title: "Office Common Restroom Remodel", img: bathroomImg, desc: "Epoxy grouting & new plumbing" },
                { title: "Retail Storefront Framing Update", img: transformImg, desc: "Load bearing structural beams" },
                { title: "Flat TPO Roofing System replacement", img: estimateImg, desc: "Leakproof industrial insulation" }
              ].map((proj, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal-scale" 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[16px] text-gray-800 font-sans group-hover:text-[#0077b6] transition-colors">{proj.title}</h3>
                    <p className="text-[13px] text-gray-400 mt-1 font-medium">{proj.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-sky-400 uppercase tracking-[0.25em] block">
                BUSINESS REVIEWS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-white mt-2">
                What Business Owners Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <Reveal 
                  key={idx} 
                  variant="reveal" 
                  className="bg-slate-800 border border-slate-700/30 p-8 rounded-2xl flex flex-col justify-between hover:border-sky-400 transition-all duration-300 relative group"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, starIdx) => (
                        <Sparkles key={starIdx} className="w-[16px] h-[16px] text-[#0077b6] fill-[#0077b6]" />
                      ))}
                    </div>
                    
                    <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed italic mb-6">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="border-t border-slate-700/50 pt-4 mt-auto">
                    <strong className="text-white font-bold block text-[15px]">{test.author}</strong>
                    <span className="text-sky-400 text-[12px] uppercase tracking-wider block font-bold">{test.role}</span>
                    <span className="text-gray-500 text-[11px] block">{test.location}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FAQS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                BUSINESS FAQS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Frequently Asked Questions About Commercial Services
              </h2>
            </div>

            <Reveal variant="reveal-scale" className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200/50 py-2 last:border-0">
                    <AccordionTrigger className="text-[15px] md:text-[16px] font-bold text-gray-850 hover:no-underline hover:text-[#0077b6] transition-colors leading-snug py-4 cursor-pointer">
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

        {/* ================= CREDENTIALS & SERVICE RADIUS ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Credentials */}
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#0077b6]" />
                  <h3 className="text-2xl font-bold font-sans text-[#111827]">
                    Licensed, Insured & Ready to Work
                  </h3>
                </div>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  You can trust Cinco Services to handle your commercial project with safety and accountability. We hold all necessary licenses and comprehensive general liability and workers' compensation coverage.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    "Fully Licensed in the State of Texas",
                    "General Liability Insurance ($2M+ Coverage)",
                    "Worker's Compensation Coverage",
                    "Industry Training & Certifications",
                    "Member of Local Houston Business Organizations"
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-150 shadow-sm hover:border-sky-100 transition-colors">
                      <FileText className="w-[18px] h-[18px] text-[#0077b6]" />
                      <span className="text-[15px] font-bold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Service Areas */}
              <Reveal variant="reveal-right" className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#0077b6]" />
                  <h3 className="text-2xl font-bold font-sans text-[#111827]">
                    Proudly Serving Houston-Area Businesses
                  </h3>
                </div>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  We provide commercial services throughout Houston and nearby communities within a 50-mile radius.
                </p>

                <div className="space-y-4 pt-2">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                    We serve businesses in:
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceAreas.map((city, idx) => (
                      <span 
                        key={idx} 
                        className="bg-white text-gray-700 px-4 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold border border-gray-150 shadow-sm hover:bg-[#0077b6] hover:text-white hover:border-[#0077b6] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-[14px] text-gray-500 font-medium italic pt-2">
                    Additional communities available – contact us to confirm service in your area.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal variant="reveal-scale" className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111827] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/30">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d62828]/10 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
                Ready to Upgrade Your Commercial Property?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're planning a small office refresh or a large-scale commercial build, Cinco Services has the expertise and reliability to deliver exceptional results. Let's talk about your project.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Book My Free Commercial Estimate
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

        {/* Contact Form Section */}
        <ContactForm />
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
