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
  Quote, 
  Users, 
  CheckCircle, 
  FileText, 
  Building2, 
  Sparkles, 
  Wrench, 
  Target, 
  Eye, 
  Heart, 
  TrendingUp, 
  Map 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import heroBg from "@/assets/hero.jpg";
import showroomImg from "@/assets/showroom_section.png";
import expertsImg from "@/assets/experts_section.png";
import tileImg from "@/assets/tile_installation_hero.png";
import bathroomImg from "@/assets/bathroom_remodel_hero.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cinco Services | Remodeling & Construction | Houston, TX" },
      { name: "description", content: "Learn about Cinco Services, Houston's premier remodeling, custom construction, roofing, painting, and tile installation firm. Founded by Elibariki Gau on over 15 years of craftsmanship and integrity." },
      { property: "og:title", content: "About Cinco Services" },
      { property: "og:description", content: "Houston's trusted remodeling and construction specialists." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const atAGlance = [
    { icon: Award, label: "Experience", value: "15+ Years" },
    { icon: MapPin, label: "Location", value: "1400 Broadfield Blvd, Houston, TX 77084" },
    { icon: Phone, label: "Phone", value: "(832) 406-2716" },
    { icon: Mail, label: "Email", value: "eli@cincoservicesllc.com" },
    { icon: Map, label: "Service Radius", value: "50 Miles" },
    { icon: Clock, label: "Hours", value: "Mon–Fri: 7am–7pm | Sat: 8am–7pm" },
    { icon: Wrench, label: "Services", value: "Remodeling, Construction, Roofing, Painting, Tile" },
    { icon: Users, label: "Clients", value: "Residential & Commercial" },
    { icon: Shield, label: "Licensed & Insured", value: "Yes (TX General Liability & Workers' Comp)" },
    { icon: CheckCircle, label: "Free Estimates", value: "Yes" },
  ];

  const coreValues = [
    { 
      icon: Wrench, 
      title: "Craftsmanship Above All", 
      desc: "We take pride in every cut, every joint, and every finish. Excellence is in the details." 
    },
    { 
      icon: Shield, 
      title: "Honesty & Transparency", 
      desc: "No hidden fees, no surprises, no shortcuts. We communicate clearly and price honestly." 
    },
    { 
      icon: Heart, 
      title: "Respect for Your Home", 
      desc: "We clean up daily, protect your property, and minimize disruption to your daily life." 
    },
    { 
      icon: Clock, 
      title: "Reliability", 
      desc: "We show up on time, communicate clearly, and finish on schedule. Your time is valuable." 
    },
    { 
      icon: TrendingUp, 
      title: "Continuous Improvement", 
      desc: "We invest in training and stay current with industry best practices to serve you better." 
    },
  ];

  const crewSpecialties = [
    "General contracting & project management",
    "Custom framing & structural work",
    "Roofing installation & repair",
    "Interior & exterior painting",
    "Custom tile, stone, and flooring installation",
    "Kitchen, bathroom, and whole-home remodeling",
  ];

  const reasonsWhyDifferent = [
    "15+ Years of Real Experience – Across multiple disciplines including general contracting, framing, roofing, painting, and tile",
    "50-Mile Service Radius – Proudly serving Greater Houston and surrounding communities",
    "Full-Service Capabilities – Handling everything from design and planning to final cleanup",
    "Residential & Commercial Expertise – Patios, additions, kitchens, baths, roofs, new builds, and commercial fit-outs",
    "Licensed & Insured – Complete general liability and workers' compensation coverage for peace of mind",
    "Zero-Mess Guarantee – We cover all surfaces, clean up every single day, and leave your home spotless",
    "No Shortcuts – We source premium materials, follow structural codes, and never compromise safety",
    "Satisfaction Guaranteed – The project is not finished until you are 100% happy",
    "Saturday Hours Available – Open 8am–7pm on Saturdays for your convenience",
    "Free Estimates – Fully transparent, itemized quotes with no hidden fees",
  ];

  const ourPromises = [
    { title: "Clear Communication", desc: "You'll never be left wondering what's happening. We update you every step of the way." },
    { title: "Quality Materials", desc: "We use trusted brands and top-grade materials for durability and beauty." },
    { title: "Skilled Installation", desc: "Our team is trained in the latest techniques for construction, roofing, and tile." },
    { title: "On-Time Completion", desc: "We respect your schedule and deliver on time." },
    { title: "Post-Project Support", desc: "We stand behind our work and are always here if you need us." },
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
        <section className="relative min-h-[60vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-all duration-[2s]"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-16 md:pt-36">
            <span className="inline-block bg-[#0077b6] text-white rounded-full px-5 py-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] mb-4 shadow-[0_4px_12px_rgba(0,119,182,0.3)]">
              About Cinco Services
            </span>
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Built on Craftsmanship, <br />
              <span className="text-sky-400">Guided by Integrity, Driven by Excellence</span>
            </h1>
          </div>
        </section>

        {/* ================= INTRO & SIDEBAR ================= */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
              
              {/* Left: Intro */}
              <Reveal variant="reveal-left" className="space-y-6">
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Building Houston's Future – <br />
                  <span className="text-[#0077b6]">One Home, One Business, One Project at a Time</span>
                </h2>
                
                <div className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed space-y-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Welcome to Cinco Services – where premium remodeling, new construction, roofing, painting, and custom tile installation come together under one trusted roof. We are a family-owned and operated company proudly serving Houston and surrounding communities within a 50-mile radius.
                  </p>
                  <p>
                    With over 15 years of hands-on experience, we've earned a reputation for delivering structurally sound, beautifully finished projects that stand the test of time. From complete home remodels and custom new builds to roof replacements and intricate tile work, we bring the same level of dedication, precision, and care to every job – regardless of size or scope.
                  </p>
                  <p className="border-l-4 border-[#0077b6] pl-5 italic font-medium text-gray-700 bg-sky-50/50 py-3 rounded-r-lg">
                    We don't take shortcuts. We don't leave messes behind. We simply deliver exceptional results that our clients are proud to show off.
                  </p>
                </div>
              </Reveal>

              {/* Right: At a Glance Sidebar */}
              <Reveal variant="reveal-right">
                <div className="bg-white border border-gray-150 p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0077b6] to-sky-400" />
                  
                  <h3 className="text-xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#0077b6]" /> At a Glance
                  </h3>
                  
                  <div className="space-y-5">
                    {atAGlance.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex gap-4 border-b border-gray-50 pb-4 last:border-b-0 last:pb-0">
                          <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                            <Icon className="w-[18px] h-[18px] text-[#0077b6]" />
                          </div>
                          <div>
                            <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400 block">{item.label}</span>
                            <span className="text-[14px] md:text-[15px] font-bold text-gray-800 leading-snug">{item.value}</span>
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

        {/* ================= STORY SECTION ================= */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Interactive Collage / Image Showcase */}
              <Reveal variant="reveal-left" className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-sky-500/10 rounded-tl-[80px] rounded-br-[80px] -z-10 translate-x-4 translate-y-4" />
                
                <div className="relative overflow-hidden shadow-2xl z-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px]">
                  <img 
                    src={showroomImg} 
                    alt="Cinco Services construction showroom work" 
                    className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1s]" 
                  />
                </div>

                {/* Overlapping floating image */}
                <div className="absolute -bottom-6 -left-6 md:-left-12 w-[140px] md:w-[180px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block">
                  <img 
                    src={tileImg} 
                    alt="Custom tile installation detail" 
                    className="w-full aspect-square object-cover" 
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-[#0077b6] text-white p-5 rounded-2xl shadow-lg border border-sky-400/30 text-center z-30">
                  <span className="text-3xl font-extrabold block">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-sky-100">Years Experience</span>
                </div>
              </Reveal>

              {/* Right: Story Details */}
              <Reveal variant="reveal-right" className="space-y-6">
                <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                  Our Story
                </span>
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  The Cinco Services Story
                </h2>
                
                <div className="text-[16px] text-[#4B5563] leading-relaxed space-y-6">
                  <p>
                    Cinco Services was founded on a simple belief: that every home and business deserves quality craftsmanship delivered with honesty and respect. What started as a small tile installation company has grown into a full-service remodeling and construction firm serving homeowners, property managers, and commercial clients across the Greater Houston area.
                  </p>
                  <p>
                    Our founder, <strong>Elibariki Gau</strong>, brought over 15 years of construction experience to build a company that prioritizes people over profits. We've grown through word-of-mouth referrals because we treat every project as if it's our own property. Whether we're framing a new addition, painting an entire home, or installing a custom marble shower, we stand behind our work with pride.
                  </p>
                  <p>
                    Today, Cinco Services is the go-to choice for homeowners and business owners who want premium results without the headaches. We're licensed, insured, and committed to exceeding expectations on every single project.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= MISSION, VISION & VALUES ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Reveal variant="reveal-scale" className="bg-[#111827] text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500" />
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-2xl font-bold font-sans mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-[15px] md:text-[16px]">
                  To deliver exceptional remodeling, construction, and roofing services that enhance the beauty, value, and safety of homes and businesses throughout Houston – while treating every client with transparency, respect, and integrity.
                </p>
              </Reveal>

              <Reveal variant="reveal-scale" className="bg-[#0077b6] text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-sans mb-4">Our Vision</h3>
                <p className="text-sky-50/90 leading-relaxed text-[15px] md:text-[16px]">
                  To be Houston's most trusted name in full-service construction and remodeling – known for quality craftsmanship, reliable project management, and lasting client relationships built on trust.
                </p>
              </Reveal>
            </div>

            {/* Core Values */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                WHAT GUIDES US
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Reveal 
                    key={idx} 
                    variant="reveal" 
                    className="p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-sky-100 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0077b6]/5 flex items-center justify-center mb-5 group-hover:bg-[#0077b6] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#0077b6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-[#111827] mb-2 font-sans group-hover:text-[#0077b6] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-relaxed">
                      {value.desc}
                    </p>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= MEET THE TEAM SECTION ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
              
              {/* Left: Team Intro & Specialties */}
              <Reveal variant="reveal-left" className="space-y-6">
                <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                  The Professionals
                </span>
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  Meet the Team Behind <br />Your Project
                </h2>
                
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  Our team is made up of skilled craftsmanship, project managers, and support staff who share one common goal: your complete satisfaction. We're not just contractors – we're neighbors, homeowners, and community members who care about the work we do.
                </p>

                <div className="space-y-4 pt-4">
                  <h4 className="text-[14px] font-bold uppercase tracking-wider text-gray-500">
                    Our Crew Includes Licensed Tradesmen Specializing In:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {crewSpecialties.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-150 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0077b6]" strokeWidth={3} />
                        </div>
                        <span className="text-[14px] font-bold text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Right: Founder Highlight Card */}
              <Reveal variant="reveal-right">
                <div className="bg-white border border-gray-150 p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden max-w-[520px] mx-auto lg:ml-auto">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[100px] -z-10" />
                  
                  {/* Avatar / Photo area */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0077b6] flex items-center justify-center text-white text-2xl font-black shadow-md border-4 border-white">
                      EG
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">Elibariki Gau</h3>
                      <p className="text-[#0077b6] font-bold text-[14px] uppercase tracking-wider">Founder & Lead Project Manager</p>
                    </div>
                  </div>

                  <p className="text-[15px] text-[#4B5563] leading-relaxed mb-6">
                    With over 15 years in the construction and remodeling industry, Elibariki brings hands-on expertise in everything from framing and roofing to custom tile and painting. His attention to detail and commitment to quality set the standard for every Cinco Services project.
                  </p>

                  <div className="bg-sky-50/50 p-5 rounded-xl border border-sky-100/50 italic text-gray-700 relative">
                    <Quote className="absolute top-3 right-3 w-8 h-8 text-sky-200/50 shrink-0" />
                    <p className="text-[14px] leading-relaxed font-medium pr-6">
                      "I built this company on the values I was taught – work hard, be honest, and always do the job right. Every project is a reflection of who we are."
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* ================= WHY WE'RE DIFFERENT & PROMISE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
              
              {/* Left: What Sets Us Apart */}
              <Reveal variant="reveal-left" className="space-y-6">
                <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                  Cinco Advantages
                </span>
                <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                  What Sets Cinco Services Apart
                </h2>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  There are plenty of contractors in Houston. But not all of them bring the same level of dedication, skill, and integrity to your project. Here's why Cinco Services is the right choice:
                </p>

                <div className="space-y-4 pt-4">
                  {reasonsWhyDifferent.map((reason, idx) => {
                    const [title, desc] = reason.split(" – ");
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-gray-800 font-bold text-[15px] md:text-[16px] block">{title}</strong>
                          {desc && <span className="text-[14px] text-gray-500 leading-relaxed block mt-0.5">{desc}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* Right: Our Promise */}
              <Reveal variant="reveal-right" className="space-y-6 lg:sticky lg:top-28">
                <div className="bg-[#111827] text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d62828]/10 rounded-full blur-3xl" />
                  
                  <span className="text-[12px] font-bold text-[#d62828] uppercase tracking-[0.25em] block mb-2">
                    OUR GUARANTEE
                  </span>
                  <h3 className="text-2xl font-bold font-sans mb-8">
                    Our Promise to You
                  </h3>

                  <div className="space-y-6">
                    {ourPromises.map((promise, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="w-6 h-6 rounded-full bg-[#d62828] flex items-center justify-center shrink-0 mt-1 shadow-[0_2px_8px_rgba(214,40,40,0.4)]">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[16px] text-white group-hover:text-sky-400 transition-colors">
                            {promise.title}
                          </h4>
                          <p className="text-[14px] text-gray-300 leading-relaxed mt-1">
                            {promise.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
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
                  You can trust Cinco Services to handle your project with professionalism and accountability. We hold all necessary licenses and insurance to protect you and your property.
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
                    Proudly Serving Our Houston Community
                  </h3>
                </div>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  Cinco Services isn't just a business – we're part of the Houston community. We believe in giving back and supporting the neighborhoods we serve. From local charity events to helping neighbors in need, we're committed to making Houston a better place to live and work.
                </p>

                <div className="space-y-4 pt-2">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400">
                    We serve homeowners and businesses in:
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
                    …and many more communities within 50 miles.
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
                Ready to Start Your Project?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you're planning a kitchen remodel, a new roof, a custom tile installation, or a complete home transformation – Cinco Services is here to help. Let's talk about your vision and turn it into reality.
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
