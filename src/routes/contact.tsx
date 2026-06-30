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
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  CheckSquare,
  AlertTriangle
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { LiveChat } from "@/components/home/LiveChat";
import { Reveal } from "@/components/ui/Reveal";

// Import images
import estimateBg from "@/assets/estimate.jpg";
import showroomImg from "@/assets/showroom.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Cinco Services | Houston, TX" },
      { name: "description", content: "Reach out to Cinco Services in Houston. Call (832) 406-2716, email, or fill out our online form for a free residential or commercial estimate." },
      { property: "og:title", content: "Contact Cinco Services" },
      { property: "og:description", content: "We're here to help. Reach out to us for a free construction estimate." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [message, setMessage] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [timeline, setTimeline] = useState("");
  const [consent, setConsent] = useState(false);

  // Status States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Form Validations
    if (!fullName.trim()) return setErrorMessage("Full Name is required.");
    if (!email.trim()) return setErrorMessage("Email Address is required.");
    if (!service) return setErrorMessage("Please select the Service Needed.");
    if (!propertyType) return setErrorMessage("Please select a Property Type.");
    if (!message.trim()) return setErrorMessage("Please describe how we can help you.");
    if (!consent) return setErrorMessage("You must agree to the privacy consent to send a message.");

    // Simulate form submission
    setIsSubmitted(true);
  };

  const trustBadges = [
    { text: "Licensed & Insured" },
    { text: "Satisfaction Guaranteed" },
    { text: "15+ Years Experience" },
    { text: "Free Estimates" },
  ];

  const serviceOptions = [
    "Home Remodeling",
    "New Home Construction",
    "Bathroom Remodeling",
    "Kitchen Remodeling",
    "Roofing Services",
    "Interior Painting",
    "Exterior Painting",
    "Tile Installation",
    "Flooring Installation",
    "Shower Installation / Repair",
    "Commercial Services",
    "Other (please specify)"
  ];

  const timelineOptions = [
    "Immediate",
    "1-3 Months",
    "3-6 Months",
    "Planning Stage"
  ];

  const serviceAreas = [
    "Houston", "Katy", "Sugar Land", "Cypress", "Richmond", "Rosenberg", 
    "Fulshear", "Missouri City", "Stafford", "Pearland", "Jersey Village", 
    "Tomball", "The Woodlands"
  ];

  const faqs = [
    {
      q: "How quickly will you respond to my inquiry?",
      a: "We respond to all calls, emails, and form submissions within one business day. For urgent matters, please call us directly at (832) 406-2716."
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes – we provide free, no-obligation estimates for all residential and commercial projects."
    },
    {
      q: "What information should I prepare before contacting you?",
      a: "It's helpful to have details about your project type, approximate square footage, and any specific needs or concerns. Photos can also be helpful for remote estimates."
    },
    {
      q: "Can I schedule a consultation outside of business hours?",
      a: "Yes – we're happy to accommodate early morning, evening, or weekend appointments upon request."
    },
    {
      q: "Do you serve both residential and commercial clients?",
      a: "Absolutely. We work with homeowners, property managers, business owners, and commercial property developers."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes – we are fully licensed and insured for your protection and peace of mind."
    },
    {
      q: "What if I have an emergency repair need?",
      a: "For urgent roofing, water damage, or other emergency repairs, call us immediately at (832) 406-2716."
    }
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-105"
            style={{ backgroundImage: `url(${estimateBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24 sm:pt-28 pb-10 sm:pb-12 md:pt-36">
            <span className="inline-block bg-[#d62828] text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_4px_12px_rgba(214,40,40,0.3)]">
              Contact Cinco Services
            </span>
            
            <h1 className="font-sans text-[26px] sm:text-[36px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2">
              Contact Us
            </h1>
            
            <p className="mt-4 text-[16px] md:text-[19px] text-sky-200/90 max-w-2xl mx-auto font-medium leading-relaxed">
              We're Here to Help – Reach Out Today
            </p>

            {/* Quick buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
              <a 
                href="tel:8324062716"
                className="bg-[#d62828] hover:brightness-110 rounded-full px-8 py-3 text-[14px] font-bold text-white transition-all shadow-[0_4px_12px_rgba(214,40,40,0.3)]"
              >
                Call (832) 406-2716
              </a>
              <a 
                href="mailto:eli@cincoservicesllc.com"
                className="bg-white/10 hover:bg-white/15 border border-white/25 rounded-full px-8 py-3 text-[14px] font-bold text-white transition-all"
              >
                Email Us
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

        {/* ================= INTRO & MAIN SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Headline, Info Cards & Intake Form */}
              <div className="space-y-12">
                
                {/* Intro text */}
                <Reveal variant="reveal-left" className="space-y-6">
                  <h2 className="text-[28px] md:text-[38px] font-sans font-bold text-[#111827] leading-tight">
                    Let's Talk About Your Project
                  </h2>
                  <p className="text-[16px] md:text-[17px] text-[#4B5563] leading-relaxed">
                    Have a question? Ready to start your project? Need a free estimate? We're just a phone call, email, or visit away. At Cinco Services, we believe in clear communication and responsive service – from the very first conversation to the final walkthrough. Reach out to us today, and let's discuss how we can bring your vision to life.
                  </p>
                </Reveal>

                {/* Get in Touch Info Grid */}
                <Reveal variant="reveal" className="space-y-6">
                  <h3 className="text-xl font-bold text-[#111827] font-sans border-b border-gray-100 pb-3">
                    Get in Touch
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Phone, title: "Phone", details: "(832) 406-2716", sub: "Available during business hours – or leave a voicemail.", href: "tel:8324062716" },
                      { icon: Mail, title: "Email", details: "eli@cincoservicesllc.com", sub: "We respond to all emails within one business day.", href: "mailto:eli@cincoservicesllc.com" },
                      { icon: MapPin, title: "Address", details: "1400 Broadfield Blvd, Houston, TX 77084", sub: "Centrally located to serve the greater Houston area.", href: "https://www.google.com/maps/place/1400+Broadfield+Blvd,+Houston,+TX+77084" },
                      { icon: Clock, title: "Business Hours", details: "Mon–Fri: 7am–7pm | Sat: 8am–7pm", sub: "Appointments available outside regular hours upon request." },
                    ].map((info, idx) => {
                      const Icon = info.icon;
                      return (
                        <div key={idx} className="bg-gray-50 border border-gray-150/50 p-6 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0 text-[#0077b6]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[15px] text-[#111827] font-sans">{info.title}</h4>
                            {info.href ? (
                              <a href={info.href} className="text-[#0077b6] font-bold text-[14px] md:text-[15px] block mt-1 hover:underline">{info.details}</a>
                            ) : (
                              <span className="text-gray-800 font-bold text-[14px] md:text-[15px] block mt-1">{info.details}</span>
                            )}
                            <p className="text-[12px] text-gray-500 mt-1 leading-normal">{info.sub}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>

                {/* Custom Intake Form */}
                <Reveal variant="reveal-left" className="bg-gray-50 border border-gray-150 p-8 rounded-2xl shadow-sm">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold font-sans text-[#111827]">Send Us a Message</h3>
                    <p className="text-gray-500 text-[14px] mt-1">
                      Fill out the form below and we'll get back to you within one business day with answers, ideas, or a free in-home or on-site estimate.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-emerald-800 font-sans">Message Sent Successfully!</h4>
                      <p className="text-[15px] text-emerald-700 leading-relaxed max-w-md mx-auto">
                        Thank you, <strong>{fullName}</strong>! We have received your request regarding <strong>{service}</strong> services. A member of the Cinco Services team will reach out to you within one business day.
                      </p>
                      <button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFullName("");
                          setEmail("");
                          setPhone("");
                          setService("");
                          setPropertyType("");
                          setContactMethod("");
                          setBestTime("");
                          setMessage("");
                          setSqFootage("");
                          setTimeline("");
                          setConsent(false);
                        }}
                        className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[14px] hover:underline pt-4 cursor-pointer"
                      >
                        Send another message &rarr;
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {errorMessage && (
                        <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-[14px] flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Full Name <span className="text-rose-500">*</span></label>
                          <input 
                            type="text" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Email Address <span className="text-rose-500">*</span></label>
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors"
                            placeholder="(832) 555-0199"
                          />
                        </div>

                        {/* Service dropdown */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Service Needed <span className="text-rose-500">*</span></label>
                          <select 
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors cursor-pointer"
                          >
                            <option value="">Select a service...</option>
                            {serviceOptions.map((opt, oIdx) => (
                              <option key={oIdx} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Property type dropdown */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Property Type <span className="text-rose-500">*</span></label>
                          <select 
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors cursor-pointer"
                          >
                            <option value="">Select property type...</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                          </select>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-gray-700 block">Timeline <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <select 
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors cursor-pointer"
                          >
                            <option value="">Select project timeline...</option>
                            {timelineOptions.map((t, tIdx) => (
                              <option key={tIdx} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Preferred Contact Method */}
                        <div className="space-y-1.5 sm:col-span-1">
                          <label className="text-[13px] font-bold text-gray-700 block">Preferred Contact <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <div className="flex gap-4 py-2">
                            <label className="flex items-center gap-2 text-[14px] text-gray-700 cursor-pointer">
                              <input 
                                type="radio" 
                                name="contactMethod" 
                                value="Phone"
                                checked={contactMethod === "Phone"}
                                onChange={() => setContactMethod("Phone")}
                                className="w-4 h-4 text-[#0077b6]"
                              /> Phone
                            </label>
                            <label className="flex items-center gap-2 text-[14px] text-gray-700 cursor-pointer">
                              <input 
                                type="radio" 
                                name="contactMethod" 
                                value="Email"
                                checked={contactMethod === "Email"}
                                onChange={() => setContactMethod("Email")}
                                className="w-4 h-4 text-[#0077b6]"
                              /> Email
                            </label>
                          </div>
                        </div>

                        {/* Best Time to Contact */}
                        <div className="space-y-1.5 sm:col-span-1">
                          <label className="text-[13px] font-bold text-gray-700 block">Best Time to Call <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <select 
                            value={bestTime}
                            onChange={(e) => setBestTime(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors cursor-pointer"
                          >
                            <option value="">Select time...</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                          </select>
                        </div>

                        {/* Square Footage */}
                        <div className="space-y-1.5 sm:col-span-1">
                          <label className="text-[13px] font-bold text-gray-700 block">Approx. Sq. Footage <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <input 
                            type="text" 
                            value={sqFootage}
                            onChange={(e) => setSqFootage(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors"
                            placeholder="e.g. 1500 sqft"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-bold text-gray-700 block">How Can We Help? <span className="text-rose-500">*</span></label>
                        <textarea 
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0077b6] transition-colors resize-none"
                          placeholder="Tell us about your remodeling, painting, tile, or roofing project plans..."
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input 
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="w-4.5 h-4.5 text-[#0077b6] mt-0.5 rounded border-gray-300"
                          />
                          <span className="text-[13px] text-gray-500 leading-snug group-hover:text-gray-700 transition-colors selection:bg-transparent">
                            I agree to be contacted regarding my project. We respect your privacy and will never share your information.
                          </span>
                        </label>
                      </div>

                      {/* Submit */}
                      <div>
                        <button 
                          type="submit"
                          className="w-full bg-[#d62828] hover:brightness-110 text-white rounded-full py-4 text-[15px] font-bold shadow-[0_4px_14px_rgba(214,40,40,0.3)] transition-all duration-300 cursor-pointer"
                        >
                          Send Message
                        </button>
                      </div>

                    </form>
                  )}
                </Reveal>

              </div>

              {/* Right Column: Floating summary card, emergency block & socials */}
              <div className="space-y-8 lg:sticky lg:top-28">
                
                {/* Summary box */}
                <Reveal variant="reveal-right">
                  <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#d62828]" />
                    
                    <h3 className="text-lg font-bold uppercase tracking-wider text-sky-400 mb-6 font-sans">
                      Quick Contact
                    </h3>

                    <div className="space-y-5 text-[14px] text-gray-300">
                      <p className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Call Us</span>
                          <a href="tel:8324062716" className="hover:underline font-bold text-white text-[15px]">(832) 406-2716</a>
                        </div>
                      </p>
                      
                      <p className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Email</span>
                          <a href="mailto:eli@cincoservicesllc.com" className="hover:underline text-white text-[15px]">eli@cincoservicesllc.com</a>
                        </div>
                      </p>

                      <p className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Visit</span>
                          <span className="text-white">1400 Broadfield Blvd,<br />Houston, TX 77084</span>
                        </div>
                      </p>

                      <p className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Hours</span>
                          <span className="text-white">Mon–Fri: 7am–7pm<br />Sat: 8am–7pm | Sun: Closed</span>
                        </div>
                      </p>

                      <p className="flex items-start gap-3">
                        <Map className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Service Radius</span>
                          <span className="text-white">50 Miles around Houston</span>
                        </div>
                      </p>

                      <p className="flex items-start gap-3">
                        <Wrench className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 block uppercase">Services</span>
                          <span className="text-white text-[13px]">Remodeling | Construction | Roofing | Painting | Tile | Flooring</span>
                        </div>
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                      <a 
                        href="#contact" 
                        className="bg-[#d62828] hover:brightness-110 text-white rounded-full py-3 text-[12px] font-bold text-center transition-all shadow-md"
                      >
                        Book Free Estimate
                      </a>
                      <a 
                        href="/projects" 
                        className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full py-3 text-[12px] font-bold text-center transition-all"
                      >
                        View Projects
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Emergency block */}
                <Reveal variant="reveal-right">
                  <div className="bg-rose-50 border-2 border-rose-200 p-6 rounded-2xl shadow-sm relative overflow-hidden flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-rose-900 font-sans">Emergency? Need Immediate Help?</h4>
                      <p className="text-[13px] text-rose-700 leading-relaxed mt-1">
                        If you have a roofing emergency, water damage, or urgent repair need, don't wait – call us right away.
                      </p>
                      <a 
                        href="tel:8324062716" 
                        className="inline-flex items-center gap-2 text-rose-900 font-black text-[15px] hover:underline mt-3.5"
                      >
                        <Phone className="w-4 h-4" /> (832) 406-2716
                      </a>
                      <p className="text-[11px] text-rose-500 font-semibold italic mt-1">
                        Available during business hours. For after-hours emergencies, please leave a voicemail.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Social media connections */}
                <Reveal variant="reveal-right">
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl shadow-sm">
                    <h4 className="text-[15px] font-bold text-gray-800 font-sans mb-3">Stay Connected</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                      Follow us on social media to see our latest projects, get home improvement tips, and stay updated.
                    </p>
                    <div className="grid grid-cols-2 gap-3.5 text-[13px] font-bold text-gray-700">
                      <a href="#" className="flex items-center gap-2 hover:text-[#0077b6] transition-colors">
                        <Facebook className="w-4 h-4 text-blue-600" /> Cinco Services
                      </a>
                      <a href="#" className="flex items-center gap-2 hover:text-[#0077b6] transition-colors">
                        <Instagram className="w-4 h-4 text-pink-600" /> @cincoservices
                      </a>
                      <a href="#" className="flex items-center gap-2 hover:text-[#0077b6] transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-700" /> Cinco Services
                      </a>
                      <a href="#" className="flex items-center gap-2 hover:text-[#0077b6] transition-colors">
                        <Globe className="w-4 h-4 text-emerald-600" /> Google Business
                      </a>
                    </div>
                  </div>
                </Reveal>

              </div>

            </div>
          </div>
        </section>

        {/* ================= MAP & LOCATION DETAILS ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Map detail info */}
              <Reveal variant="reveal-left" className="space-y-6">
                <div className="flex items-center gap-3 text-[#0077b6]">
                  <Map className="w-6 h-6" />
                  <h3 className="text-2xl font-bold font-sans text-[#111827]">
                    Find Us
                  </h3>
                </div>
                
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  We proudly serve Houston and all surrounding communities within a 50-mile radius. Visit our office or give us a call – we're always happy to help.
                </p>

                <div className="space-y-4 pt-2 text-[15px] text-gray-700">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-850 font-bold block mb-0.5">Office Address:</strong>
                      1400 Broadfield Blvd, Houston, TX 77084
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3} />
                    <div>
                      <strong className="text-gray-850 font-bold block mb-0.5">Parking:</strong>
                      Free on-site visitor parking available.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3} />
                    <div>
                      <strong className="text-gray-850 font-bold block mb-0.5">Accessibility:</strong>
                      Ground-level office layout with easy access entries.
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Google Map iframe */}
              <Reveal variant="reveal-right" className="w-full">
                <div className="w-full h-[350px] lg:h-[450px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.637236180327!2d-95.6614067243544!3d29.788129375053632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d968e076b465%3A0x29012edb8fa2e3c3!2s1400%20Broadfield%20Blvd%2C%20Houston%2C%20TX%2077084%2C%20USA!5e0!3m2!1sen!2snp!4v1781422480330!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ================= AREAS WE SERVE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                SERVICE COVERAGE
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Areas We Serve
              </h2>
              <p className="text-gray-500 text-[15px] mt-3">
                We provide professional remodeling, construction, roofing, painting, and tile services throughout Houston and nearby communities within a 50-mile radius.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {serviceAreas.map((city, idx) => (
                <span 
                  key={idx} 
                  className="bg-gray-50 text-gray-700 px-4 py-2.5 rounded-full text-[14px] font-bold border border-gray-100 hover:bg-[#0077b6] hover:text-white hover:border-[#0077b6] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-center text-[14.5px] text-gray-500 font-medium italic mt-8">
              Don't see your city? Contact us – we may still be able to serve you!
            </p>
          </div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-20 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-[#0077b6] uppercase tracking-[0.25em] block">
                FAQ
              </span>
              <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-[#111827] mt-2">
                Frequently Asked Questions About Contacting Us
              </h2>
            </div>

            <Reveal variant="reveal-scale" className="bg-white p-6 md:p-8 rounded-2xl border border-gray-150 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 py-2 last:border-0">
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

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal variant="reveal-scale" className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#111827] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700/30">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d62828]/10 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Don't wait – your dream home or business space is just a conversation away. Contact Cinco Services today and let's make it happen.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:8324062716" 
                  className="inline-flex items-center gap-2 bg-[#d62828] text-white rounded-full px-8 py-4 text-[15px] font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_14px_rgba(214,40,40,0.4)] transition-all duration-300"
                >
                  Call (832) 406-2716
                </a>
                <a 
                  href="mailto:eli@cincoservicesllc.com" 
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-full px-8 py-4 text-[15px] font-bold hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <Mail className="w-[16px] h-[16px]" /> Email Us
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
