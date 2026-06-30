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
  Hammer,
  Paintbrush,
  Layers,
  ChevronDown,
  Quote,
  Star,
  Users
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import showroomImg from "@/assets/showroom_section.png";
import expertsImg from "@/assets/experts_section.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";
import kitchenImg from "@/assets/kitchen_remodel_hero.png";
import tileImg from "@/assets/tile_installation_hero.png";
import transformImg from "@/assets/transform_section.png";
import estimateImg from "@/assets/estimate_section.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Portfolio & Projects | Cinco Services | Houston, TX" },
      { name: "description", content: "Explore Cinco Services' portfolio of residential and commercial remodeling, roofing, painting, custom tile, and new construction in Houston." },
      { property: "og:title", content: "Our Construction & Remodeling Projects - Cinco Services" },
      { property: "og:description", content: "15+ years of premium builds in Houston, Katy, and Sugar Land." },
    ],
  }),
  component: ProjectsPage,
});

interface Project {
  id: string;
  title: string;
  location: string;
  categoryText: string;
  tags: string[];
  image: string;
  overview: string;
  scope: string[];
  results: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const trustBadges = [
    { text: "15+ Years Experience" },
    { text: "500+ Projects Completed" },
    { text: "100% Satisfaction Guaranteed" },
    { text: "Licensed & Insured" },
  ];

  const atAGlance = [
    { icon: CheckCircle, label: "Projects Completed", value: "500+" },
    { icon: Clock, label: "Experience", value: "15+ Years" },
    { icon: Award, label: "Client Satisfaction", value: "98%" },
    { icon: Users, label: "Type", value: "Residential & Commercial" },
    { icon: Wrench, label: "Capabilities", value: "Full-Service Construction" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes" },
    { icon: FileText, label: "Free Estimates", value: "Yes" },
    { icon: MapPin, label: "Location", value: "1400 Broadfield Blvd, Houston, TX" },
  ];

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "kitchen", label: "Kitchen Remodeling" },
    { id: "bathroom", label: "Bathroom Remodeling" },
    { id: "construction", label: "New Construction" },
    { id: "roofing", label: "Roofing" },
    { id: "painting", label: "Painting" },
    { id: "tile", label: "Tile & Flooring" },
    { id: "outdoor", label: "Outdoor & Patio" }
  ];

  const projects: Project[] = [
    // Residential Projects
    {
      id: "res-1",
      title: "Whole-Home Remodel",
      location: "Katy, TX",
      categoryText: "Residential | Full Home Remodeling",
      tags: ["residential", "kitchen", "bathroom", "construction", "tile"],
      image: transformImg,
      overview: "This Katy family wanted to completely transform their 1980s home into a modern, open-concept living space. We handled everything from wall removal and structural framing to new flooring, custom kitchen cabinets, and a luxurious master bathroom.",
      scope: [
        "Full interior demolition",
        "Structural framing and new load-bearing beams",
        "Custom kitchen with quartz countertops and backsplash",
        "Master bathroom remodel with custom tile shower and soaking tub",
        "Hardwood flooring throughout main living areas",
        "Interior painting and custom trim work",
        "New roof installation"
      ],
      results: "A stunning, modern home that feels twice as spacious. The family now enjoys an open floor plan perfect for entertaining, with premium finishes throughout.",
      testimonial: {
        quote: "Cinco Services transformed our dated home into our dream home. The attention to detail and quality of work is unmatched. We couldn't be happier!",
        author: "James & Sarah R., Katy"
      }
    },
    {
      id: "res-2",
      title: "Luxury Bathroom Remodel",
      location: "Houston, TX",
      categoryText: "Residential | Bathroom Remodeling",
      tags: ["residential", "bathroom", "tile"],
      image: bathroomImg,
      overview: "This Houston homeowner wanted a spa-like master bathroom retreat. We delivered a complete transformation featuring custom marble tile, a walk-in shower with a bench, and a freestanding soaking tub.",
      scope: [
        "Full bathroom demolition",
        "Custom marble tile flooring and walls",
        "Walk-in shower with bench and niche",
        "Freestanding soaking tub installation",
        "Custom vanity with quartz countertop",
        "New lighting and plumbing fixtures",
        "Shower pan installation and waterproofing"
      ],
      results: "A luxurious, spa-inspired bathroom that feels like a five-star hotel. The use of premium marble and custom fixtures creates a serene, elegant space.",
      testimonial: {
        quote: "The team at Cinco Services did an incredible job on my master bathroom. The marble tile work is flawless. I'll definitely use them again.",
        author: "Lisa M., Houston"
      }
    },
    {
      id: "res-3",
      title: "Kitchen Remodel with Custom Tile Backsplash",
      location: "Sugar Land, TX",
      categoryText: "Residential | Kitchen Remodeling",
      tags: ["residential", "kitchen", "tile"],
      image: kitchenImg,
      overview: "This Sugar Land homeowner wanted to modernize their kitchen with custom cabinetry, premium countertops, and a stunning tile backsplash. We delivered a fresh, contemporary look that complements the home's open concept.",
      scope: [
        "Custom cabinetry installation",
        "Quartz countertops",
        "Custom ceramic tile backsplash",
        "Under-cabinet lighting",
        "Hardwood flooring installation",
        "Interior painting"
      ],
      results: "A bright, modern kitchen that's both functional and beautiful. The custom tile backsplash serves as a stunning focal point.",
      testimonial: {
        quote: "Our new kitchen is absolutely beautiful. The tile backsplash is exactly what we envisioned. Cinco Services made the entire process stress-free.",
        author: "Maria T., Sugar Land"
      }
    },
    {
      id: "res-4",
      title: "New Home Construction",
      location: "Cypress, TX",
      categoryText: "Residential | New Home Construction",
      tags: ["residential", "construction", "roofing", "painting", "tile"],
      image: expertsImg,
      overview: "This Cypress family entrusted us to build their dream home from the ground up. We managed everything from site preparation to final finishing, delivering a custom 3,500 sq. ft. home with premium materials and finishes.",
      scope: [
        "Site preparation and foundation",
        "Custom floor plan and framing",
        "Roofing installation",
        "Custom tile and hardwood flooring",
        "Interior and exterior painting",
        "Complete HVAC, plumbing, and electrical",
        "Landscaping and exterior finishing"
      ],
      results: "A stunning, custom-built home that the family will enjoy for generations. Every detail was carefully planned and executed.",
      testimonial: {
        quote: "Building a home from scratch can be overwhelming, but Cinco Services made it easy. They guided us through every step and delivered a home that exceeds our expectations.",
        author: "The Johnson Family, Cypress"
      }
    },
    {
      id: "res-5",
      title: "Shower Pan Installation & Tile",
      location: "Richmond, TX",
      categoryText: "Residential | Tile & Flooring",
      tags: ["residential", "bathroom", "tile"],
      image: tileImg,
      overview: "This Richmond homeowner needed a shower pan replacement and custom tile installation after a leak caused water damage. We provided a complete rebuild with proper waterproofing and stunning tile work.",
      scope: [
        "Shower pan removal and replacement",
        "Custom tile shower walls",
        "New waterproofing and drainage system",
        "Glass shower door installation"
      ],
      results: "A beautiful, fully waterproof shower that looks brand new and will last for years."
    },
    {
      id: "res-6",
      title: "Exterior Painting & Roofing",
      location: "Pearland, TX",
      categoryText: "Residential | Roofing & Painting",
      tags: ["residential", "roofing", "painting"],
      image: estimateImg,
      overview: "This Pearland homeowner wanted to refresh the exterior of their home with new paint and a roof replacement. We delivered a complete exterior transformation.",
      scope: [
        "Full roof replacement (asphalt shingles)",
        "Exterior painting (stucco, trim, doors)",
        "Gutter installation",
        "Pressure washing and surface preparation"
      ],
      results: "A home that looks brand new with improved curb appeal and protection."
    },

    // Commercial Projects
    {
      id: "com-1",
      title: "Full Restaurant Remodel",
      location: "Houston, TX",
      categoryText: "Commercial | Restaurant Renovation",
      tags: ["commercial", "tile", "painting", "outdoor"],
      image: tileImg, // Restaurant has high-traffic tile
      overview: "This popular Houston restaurant needed a complete remodel to update its dining area and kitchen. We worked overnight shifts to minimize business disruption and delivered on time.",
      scope: [
        "Dining area renovation with custom tile flooring",
        "Kitchen remodeling with commercial-grade finishes",
        "Custom tile backsplash in kitchen and bar area",
        "Interior painting with brand colors",
        "New lighting and fixtures",
        "Bar counter installation"
      ],
      results: "A modern, inviting restaurant that attracted new customers and increased revenue. The owners were thrilled with the result.",
      testimonial: {
        quote: "Cinco Services transformed our restaurant. They worked around our schedule, and the quality is outstanding. Our customers love the new look!",
        author: "Marco R., Restaurant Owner, Houston"
      }
    },
    {
      id: "com-2",
      title: "Office Space Renovation",
      location: "Katy, TX",
      categoryText: "Commercial | Office Remodeling",
      tags: ["commercial", "tile", "painting"],
      image: showroomImg, // Represents corporate interiors
      overview: "This growing company needed to expand and modernize their office space. We delivered a complete renovation that included new walls, flooring, painting, and custom tile in the reception area.",
      scope: [
        "New wall framing and open office layout",
        "Commercial carpet and tile flooring",
        "Custom tile in lobby and reception",
        "Interior painting throughout",
        "New lighting and fixtures",
        "Conference room installation"
      ],
      results: "A professional, modern office that impressed clients and improved employee morale.",
      testimonial: {
        quote: "Our new office looks incredible. Cinco Services handled everything professionally and delivered on time. We highly recommend them.",
        author: "Sarah K., Property Manager, Katy"
      }
    },
    {
      id: "com-3",
      title: "Retail Storefront Remodel",
      location: "Sugar Land, TX",
      categoryText: "Commercial | Retail Renovation",
      tags: ["commercial", "tile", "painting"],
      image: transformImg,
      overview: "This retail store wanted to refresh its storefront and interior to attract more customers. We delivered a complete transformation with a modern, inviting design.",
      scope: [
        "Storefront redesign with new signage prep",
        "Porcelain tile flooring throughout",
        "Custom display areas and shelving",
        "Interior painting with brand colors",
        "Lighting upgrade",
        "Exterior painting and fascia repair"
      ],
      results: "A fresh, modern retail space that saw increased foot traffic and sales."
    },
    {
      id: "com-4",
      title: "Medical Office Renovation",
      location: "Houston, TX",
      categoryText: "Commercial | Medical & Dental",
      tags: ["commercial", "tile", "painting"],
      image: bathroomImg, // Focus on clean sterile tile installs
      overview: "This medical practice wanted to update their waiting area and treatment rooms to create a calming, professional atmosphere. We delivered with premium finishes and minimal disruption.",
      scope: [
        "Waiting room renovation",
        "Treatment room updates",
        "Luxury vinyl tile and laminate flooring",
        "Interior painting in calming colors",
        "Custom millwork and cabinetry",
        "New lighting and fixtures"
      ],
      results: "A serene, professional medical office that patients and staff love."
    },
    {
      id: "com-5",
      title: "Commercial Roof Replacement & Painting",
      location: "Cypress, TX",
      categoryText: "Commercial | Roofing & Painting",
      tags: ["commercial", "roofing", "painting"],
      image: estimateImg,
      overview: "This Cypress shopping center needed a new roof and exterior painting to refresh its appearance and protect the property. We delivered both with speed and professionalism.",
      scope: [
        "Full commercial roof replacement (TPO system)",
        "Exterior painting of all units",
        "Fascia and trim repair",
        "Gutter installation"
      ],
      results: "A protected, attractive shopping center that drew more tenants and customers.",
      testimonial: {
        quote: "Cinco Services replaced our commercial roof and painted our entire shopping center. Fast, reliable, and affordable. Highly recommend.",
        author: "David T., Commercial Property Owner, Cypress"
      }
    }
  ];

  const beforeAfterTransformations = [
    { title: "Kitchen Remodels", desc: "Dated cabinets and tiles turned into modern culinary spaces." },
    { title: "Bathroom Remodels", desc: "Old standard tubs transformed into luxury custom showers." },
    { title: "Flooring Installations", desc: "Worn carpet replaced with premium tile and oak hardwood." },
    { title: "Roofing Projects", desc: "Decayed shingles replaced with high-durability modern shingles." },
    { title: "Painting Projects", desc: "Faded siding and walls refreshed with professional finishes." },
    { title: "Commercial Spaces", desc: "Drab offices and stores transformed into active business environments." },
    { title: "New Construction", desc: "From empty plots to custom-framed finished structures." }
  ];

  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Satisfied Clients", value: "98%" },
    { label: "Service Radius", value: "50 Miles" },
    { label: "Cities Served", value: "13+" },
    { label: "Residential Projects", value: "350+" },
    { label: "Commercial Projects", value: "150+" },
    { label: "Satisfaction Guarantee", value: "100%" }
  ];

  const categoriesOverview = [
    { cat: "Kitchen Remodeling", desc: "Full kitchen transformations with custom cabinetry, countertops, backsplashes, and flooring" },
    { cat: "Bathroom Remodeling", desc: "Spa-like bathroom renovations with custom tile, vanities, tubs, and showers" },
    { cat: "New Home Construction", desc: "Custom-built homes from the ground up" },
    { cat: "Home Additions", desc: "Expanding your home's footprint with professionally built additions" },
    { cat: "Roofing Projects", desc: "Residential and commercial roof installation, repair, and replacement" },
    { cat: "Interior Painting", desc: "Professional painting for walls, ceilings, trim, and cabinetry" },
    { cat: "Exterior Painting", desc: "Full exterior painting for homes and commercial properties" },
    { cat: "Tile Installation", desc: "Custom tile for floors, walls, showers, backsplashes, and fireplaces" },
    { cat: "Flooring Installation", desc: "Hardwood, laminate, ceramic, porcelain, marble, and more" },
    { cat: "Commercial Projects", desc: "Retail, office, restaurant, medical, and industrial renovations" },
    { cat: "Outdoor & Patio", desc: "Patio tiles, outdoor kitchens, decks, and exterior living spaces" }
  ];

  // Filtering Logic
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(proj => proj.tags.includes(activeFilter));

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans">
      <TopBar />
      <Nav />

      <main className="flex-grow pb-[68px] md:pb-0">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[60vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${showroomImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Cinco Portfolio
            </span>

            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Our Projects
            </h1>

            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              Showcasing Our Craftsmanship – Real Results for Real Clients
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveFilter("residential")}
                className="bg-white/10 hover:bg-white/15 border border-white/25 rounded-full px-6 py-2.5 text-[13px] md:text-[14px] font-bold text-white transition-all cursor-pointer"
              >
                View Residential Projects
              </button>
              <button
                onClick={() => setActiveFilter("commercial")}
                className="bg-white/10 hover:bg-white/15 border border-white/25 rounded-full px-6 py-2.5 text-[13px] md:text-[14px] font-bold text-white transition-all cursor-pointer"
              >
                View Commercial Projects
              </button>
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
                  See What We've Built <br />
                  <span className="text-[#0077b6]">for Houston Homes & Businesses</span>
                </h2>

                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    At Cinco Services, we take pride in every project we complete. From whole-home remodels and custom new construction to commercial renovations, roofing replacements, and luxury tile installations – each project reflects our commitment to quality, precision, and client satisfaction.
                  </p>
                  <p>
                    Browse through our portfolio to see the transformative work we've delivered for homeowners and business owners across Houston and surrounding communities.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-3.5 text-[15px] font-bold hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300"
                  >
                    Start Your Project Today
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-8 mt-8">
                  {trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex flex-col border-l-2 border-[#0077b6] pl-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Cinco Standards</span>
                      <span className="text-[14px] md:text-[15px] font-bold text-gray-800 leading-tight mt-1">{badge.text}</span>
                    </div>
                  ))}
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

        {/* ================= PROJECT FILTER TABS ================= */}
        <section className="py-12 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-xl mb-8">
              <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-[#111827]">
                Filter Our Portfolio
              </h2>
              <p className="text-gray-500 text-[14px] mt-1">
                Explore our projects by category to find inspiration for your own home or business.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 md:gap-2.5 max-w-full">
              {filterButtons.map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-5 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold transition-all cursor-pointer border ${activeFilter === btn.id
                      ? "bg-[#d62828] text-white border-[#d62828] shadow-[0_3px_10px_rgba(214,40,40,0.3)]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-sky-400 hover:text-[#0077b6]"
                    }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PORTFOLIO CARDS GRID ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {filteredProjects.map((project, idx) => (
                <Reveal
                  key={project.id}
                  variant="reveal-scale"
                  className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col hover:shadow-xl hover:border-sky-100 transition-all duration-300"
                >
                  {/* Photo area */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-white rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider">
                      {project.location}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-[12px] font-bold text-[#0077b6] uppercase tracking-wider block">
                        {project.categoryText}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-850 font-sans mt-1 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-[14px] text-gray-500 leading-relaxed mt-4">
                        {project.overview}
                      </p>

                      {/* Scope of Work */}
                      <div className="mt-6 pt-5 border-t border-gray-100">
                        <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                          Scope of Work:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.scope.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2 text-[13px] text-gray-600 leading-snug">
                              <Check className="w-3.5 h-3.5 text-[#0077b6] shrink-0 mt-0.5" strokeWidth={3} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mt-5 p-4 bg-sky-50/50 rounded-xl border border-sky-100/50 text-[13.5px] leading-relaxed text-gray-700">
                        <strong className="text-gray-850 font-bold block mb-1">Results:</strong>
                        {project.results}
                      </div>
                    </div>

                    {/* Testimonial block if present */}
                    {project.testimonial && (
                      <div className="mt-6 pt-5 border-t border-gray-100 relative bg-gray-50 p-5 rounded-xl border border-gray-150">
                        <Quote className="absolute top-3 right-4 w-7 h-7 text-sky-200/50" />
                        <p className="text-[13px] text-gray-600 italic leading-relaxed pr-6">
                          "{project.testimonial.quote}"
                        </p>
                        <strong className="text-[13px] font-bold text-gray-850 block mt-3 text-right">
                          – {project.testimonial.author}
                        </strong>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 border border-dashed border-gray-200 rounded-3xl">
                <span className="text-gray-400 block text-lg font-semibold">No featured projects found in this category.</span>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="text-[#0077b6] font-bold text-[14px] mt-2 hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ================= BEFORE & AFTER GALLERY ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                TRANSFORMATIONS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Before & After Transformations
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                See the dramatic difference Cinco Services makes. Click on any category to imagine what is possible for your property.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beforeAfterTransformations.map((item, idx) => (
                <Reveal
                  key={idx}
                  variant="reveal-scale"
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-[16px] md:text-[17px] text-[#111827] mb-2 font-sans group-hover:text-[#0077b6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[#0077b6] font-bold text-[13px] group-hover:text-[#d62828] transition-colors cursor-pointer">
                    <span>View comparison</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="py-20 bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-sky-400 uppercase tracking-[0.25em] block">
                CINCO IMPACT
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-white mt-2">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-400 text-[14px] mt-3">
                Over 15 years, we've built a track record of excellence that speaks for itself.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <Reveal
                  key={idx}
                  variant="reveal-scale"
                  className="text-center p-6 bg-slate-800/50 border border-slate-700/30 rounded-2xl hover:border-[#0077b6] transition-all"
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-[#0077b6] block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] md:text-[13px] font-bold text-gray-400 uppercase tracking-wider block mt-3">
                    {stat.label}
                  </span>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= CATEGORIES TABLE SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                WHAT WE DO
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Explore Our Project Categories
              </h2>
            </div>

            <Reveal variant="reveal-scale">
              <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
                      <th className="p-5 font-sans">Category</th>
                      <th className="p-5 font-sans">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px] md:text-[15px] bg-white">
                    {categoriesOverview.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/10 transition-colors">
                        <td className="p-5 font-bold text-gray-800 border-r border-gray-100 whitespace-nowrap bg-sky-50/20">{row.cat}</td>
                        <td className="p-5 text-gray-600 leading-relaxed">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-12 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal variant="reveal-scale" className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111827] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/30">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d62828]/10 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
                Ready to Start Your Own Project?
              </h2>

              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Inspired by what you've seen? Let's create something beautiful together. Whether you're planning a home remodel, a commercial renovation, or new construction, Cinco Services is ready to bring your vision to life.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Book My Free Estimate
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
