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
  Users,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import homeRemodelingHero from "@/assets/home_remodeling_hero.png";
import newConstructionHero from "@/assets/new_construction_hero.png";
import bathroomRemodelHero from "@/assets/bathroom_remodel_hero.png";
import kitchenRemodelHero from "@/assets/kitchen_remodel_hero.png";
import roofingServicesHero from "@/assets/roofing_services_hero.png";
import exteriorPaintingHero from "@/assets/exterior_painting_hero.png";
import showerInstallationHero from "@/assets/shower_installation_hero.png";
import commercialRemodelHero from "@/assets/commercial_remodel_hero.png";
import showroomImg from "@/assets/showroom_section.png";
import expertsImg from "@/assets/experts_section.png";
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

// Dynamically import all images in the gallery folder
const galleryModules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });
const galleryImages = Object.values(galleryModules)
  .map((mod: any) => (mod && typeof mod === "object" && "default" in mod ? (mod.default as string) : null))
  .filter((url): url is string => typeof url === "string");

// Categorize images dynamically based on index to distribute them across services
const galleryItems = galleryImages.map((url, idx) => {
  // Let's define categorizations
  let categories = ["all", "residential"]; // All are residential or commercial
  
  // Distribute commercial tag to 30% of photos
  if (idx % 3 === 0) {
    categories.push("commercial");
  }
  
  // Distribute based on index
  const categoryPools = [
    "tile",
    "bathroom",
    "kitchen",
    "construction",
    "roofing",
    "painting",
    "outdoor"
  ];
  
  // Assign a primary category
  const primaryCat = categoryPools[idx % categoryPools.length];
  categories.push(primaryCat);
  
  // Additional logical combinations
  if (primaryCat === "bathroom" || primaryCat === "kitchen") {
    categories.push("tile");
  }
  
  return {
    url,
    categories
  };
});

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
  const projects: Project[] = [];

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

  const filteredGalleryItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.categories.includes(activeFilter));

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

        {/* ================= PORTFOLIO GALLERY ================= */}
        <section className="py-20 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-xl mb-12">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                OUR PROJECTS
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Filter Our Project Gallery
              </h2>
              <p className="text-gray-500 text-[14px] mt-2">
                Explore our real-world construction, framing, roofing, remodeling, and custom tile installations. Select a category to filter the photos. Click on any photo to zoom in.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 md:gap-2.5 max-w-full mb-12">
              {filterButtons.map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-5 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold transition-all cursor-pointer border ${
                    activeFilter === btn.id 
                      ? "bg-[#d62828] text-white border-[#d62828] shadow-[0_3px_10px_rgba(214,40,40,0.3)]" 
                      : "bg-white text-gray-700 border-gray-200 hover:border-sky-400 hover:text-[#0077b6]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Filtered Photo Gallery Grid (4 in a row) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGalleryItems.map((item, idx) => (
                <Reveal 
                  key={item.url} 
                  variant="reveal-scale" 
                  className={`stagger-${(idx % 4) + 1}`}
                >
                  <div 
                    onClick={() => {
                      setSelectedImg(item.url);
                      const globalIdx = galleryImages.indexOf(item.url);
                      setCurrentIndex(globalIdx !== -1 ? globalIdx : idx);
                    }}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-150 cursor-pointer hover:shadow-xl hover:border-sky-300 transition-all duration-300 bg-gray-100"
                  >
                    <img 
                      src={item.url} 
                      alt={`Cinco project ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white/95 text-gray-800 rounded-full px-4 py-2 text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Zoom Photo
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredGalleryItems.length === 0 && (
              <div className="text-center py-20 border border-dashed border-gray-200 rounded-3xl">
                <span className="text-gray-400 block text-lg font-semibold">No project photos found in this category.</span>
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
        <section className="py-20 bg-white border-t border-gray-200/50">
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

      {/* Gallery Lightbox Zoom Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-[110]"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const nextIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
              setCurrentIndex(nextIdx);
              setSelectedImg(galleryImages[nextIdx]);
            }}
            className="absolute left-4 text-white hover:text-sky-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-[110] active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Zoomed Image */}
          <div 
            className="relative max-w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg} 
              alt={`Gallery project zoomed view ${currentIndex + 1}`} 
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          {/* Right Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const nextIdx = (currentIndex + 1) % galleryImages.length;
              setCurrentIndex(nextIdx);
              setSelectedImg(galleryImages[nextIdx]);
            }}
            className="absolute right-4 text-white hover:text-sky-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-[110] active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Index indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-bold text-[13px] bg-black/60 px-4 py-2 rounded-full z-[110] uppercase tracking-wider font-sans">
            Photo {currentIndex + 1} of {galleryImages.length}
          </div>
        </div>
      )}

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
