import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Calendar, MapPin, Star, Check, ShieldCheck, Award, Sparkles,
  Hammer, Wrench, Home, ClipboardList, Users, BadgeCheck, ChevronDown,
  Facebook, Instagram, Mail, Clock, ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";

import hero from "@/assets/hero.jpg";
import experts from "@/assets/experts.jpg";
import sStairs from "@/assets/service-stairs.jpg";
import sInstall from "@/assets/service-install.jpg";
import sRepair from "@/assets/service-repair.jpg";
import showroom from "@/assets/showroom.jpg";
import estimate from "@/assets/estimate.jpg";
import faqImg from "@/assets/faq.jpg";
import transform from "@/assets/transform.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pacific Northwest Laminate Experts — Olympia, WA" },
      { name: "description", content: "Bring warmth & style home with expert laminate flooring. Free in-home estimates. Licensed, insured, and lifetime workmanship guarantee." },
      { property: "og:title", content: "Pacific Northwest Laminate Experts" },
      { property: "og:description", content: "Olympia's trusted laminate-only flooring specialists." },
    ],
  }),
  component: Index,
});

const TopBar = () => (
  <div className="bg-ink text-cream/90 text-xs">
    <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
      <div className="hidden sm:flex items-center gap-5">
        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand" /> Serving Olympia & nearby</span>
        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand" /> Mon–Sat 8a–6p</span>
      </div>
      <div className="flex items-center gap-5 ml-auto">
        <span className="hidden sm:inline">Lic# PNWLE*123BC</span>
        <a href="tel:3602025612" className="flex items-center gap-1.5 font-semibold text-cream"><Phone className="w-3.5 h-3.5" /> (360) 202-5612</a>
      </div>
    </div>
  </div>
);

const Nav = () => (
  <header className="absolute top-9 left-0 right-0 z-30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-background/85 backdrop-blur-md rounded-full border border-border/60 shadow-sm px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 pl-3">
          <div className="w-9 h-9 rounded-full bg-brand grid place-items-center text-primary-foreground">
            <Home className="w-4.5 h-4.5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold">Pacific Northwest</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Laminate Experts</div>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {["Services","Areas","About","Gallery","FAQ"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-brand transition-colors">{l}</a>
          ))}
        </nav>
        <a href="tel:3602025612" className="inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:brightness-105 shadow-[0_8px_24px_-8px_oklch(0.74_0.165_55/0.6)]">
          <Phone className="w-4 h-4" /> Call (360) 202-5612
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[760px] flex items-end overflow-hidden">
    <img src={hero} alt="Living room with warm laminate flooring" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-44 w-full">
      <div className="max-w-2xl text-cream">
        <span className="inline-flex items-center gap-2 bg-brand/20 backdrop-blur border border-brand/40 text-brand-soft rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Olympia's #1 Laminate Specialists
        </span>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
          Bring Warmth & Style<br/>Home with Expert <span className="text-brand italic">Laminate Flooring</span>
        </h1>
        <p className="mt-6 text-lg text-cream/85 max-w-xl leading-relaxed">
          Upgrade your home with beautiful, durable laminate floors — installed by Olympia's most trusted laminate-only experts. Free in-home estimates, lifetime workmanship guarantee.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#estimate" className="inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-7 py-4 font-semibold hover:brightness-105 shadow-[0_14px_40px_-12px_oklch(0.74_0.165_55/0.7)]">
            <Calendar className="w-5 h-5" /> Book My Free Estimate
          </a>
          <a href="tel:3602025612" className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur border border-cream/30 text-cream rounded-full px-7 py-4 font-semibold hover:bg-cream/15">
            <Phone className="w-5 h-5" /> Call (360) 202-5612
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { i: ShieldCheck, t: "Licensed & Insured" },
            { i: BadgeCheck, t: "Satisfaction Guaranteed" },
            { i: Award, t: "Lifetime Warranty" },
          ].map(({i:Icon,t}) => (
            <div key={t} className="flex items-center gap-2 text-sm">
              <span className="w-9 h-9 rounded-full bg-brand/20 border border-brand/40 grid place-items-center"><Icon className="w-4.5 h-4.5 text-brand" /></span>
              <span className="text-cream/90 font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 bg-brand-soft text-brand rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
    <span className="w-1.5 h-1.5 rounded-full bg-brand" /> {children}
  </span>
);

const LocalExperts = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <img src={experts} alt="Bright interior with laminate floors" className="rounded-2xl w-full aspect-[5/4] object-cover" width={800} height={640} loading="lazy" />
        <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-xl border border-border p-5 max-w-[220px]">
          <div className="flex -space-x-2 mb-2">
            {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-brand-soft border-2 border-background" />)}
          </div>
          <div className="text-2xl font-display font-semibold">2,400+</div>
          <div className="text-xs text-muted-foreground">Floors installed across Thurston County</div>
        </div>
      </div>
      <div>
        <SectionEyebrow>About</SectionEyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Your Local Laminate-Only Experts</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          At Pacific Northwest Laminate Experts, we focus on one thing — laminate flooring. That singular focus makes us Olympia's most trusted, dedicated, and skilled installation team.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Licensed, insured, and proudly local, we serve Olympia, Lacey, Tumwater, and surrounding communities with workmanship guaranteed for life and a customer experience that feels truly local.
        </p>
        <a href="#about" className="mt-7 inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-6 py-3 font-semibold hover:brightness-105">
          Learn More About Us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const Services = () => {
  const items = [
    { img: sStairs, title: "Stairs & Transitions", desc: "Custom-cut steps and seamless threshold work." },
    { img: sInstall, title: "Laminate Installation", desc: "Precision plank-by-plank professional installs." },
    { img: sRepair, title: "Repair & Restoration", desc: "Fix scratches, gaps, and damaged sections." },
  ];
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        <div className="lg:sticky lg:top-24">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Everything Laminate,<br/>All in One Place</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At Pacific Northwest Laminate Experts, laminate flooring is all we do. From new installs to repair and stair work, we have the tools, training, and experience to handle every project with care.
          </p>
          <a href="#services" className="mt-7 inline-flex items-center gap-2 border border-foreground/20 rounded-full px-6 py-3 font-semibold hover:bg-background">
            See All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map(s => (
            <div key={s.title} className="group relative rounded-2xl overflow-hidden bg-ink aspect-[3/4] cursor-pointer">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={600} height={700} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <div className="font-display text-xl font-semibold">{s.title}</div>
                <div className="text-xs text-cream/70 mt-1">{s.desc}</div>
              </div>
              <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand grid place-items-center text-primary-foreground opacity-0 group-hover:opacity-100 transition">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { i: ClipboardList, t: "Free Consultation & In-Home Estimate", d: "We measure your space and recommend the perfect laminate for your home." },
    { i: Hammer, t: "Professional Installation", d: "Our laminate-only crews install with precision and respect for your home." },
    { i: BadgeCheck, t: "Satisfaction Guaranteed", d: "Backed by a lifetime workmanship guarantee on every single project." },
  ];
  return (
    <section className="py-24 bg-cream-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize:"24px 24px"}} />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <SectionEyebrow>Our Process</SectionEyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">How We Make Your Floors Beautiful</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A simple, transparent three-step path to floors you'll love.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={s.t} className="relative bg-background/70 backdrop-blur rounded-2xl p-8 border border-border/60">
              <div className="w-16 h-16 rounded-2xl bg-brand grid place-items-center mx-auto text-primary-foreground shadow-[0_12px_30px_-10px_oklch(0.74_0.165_55/0.6)]">
                <s.i className="w-7 h-7" />
              </div>
              <div className="absolute top-6 right-6 font-display text-3xl text-brand/30">0{idx+1}</div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
      <div className="grid grid-cols-2 gap-4">
        <img src={showroom} alt="Laminate showroom" className="rounded-2xl object-cover w-full h-full aspect-[3/4]" width={800} height={700} loading="lazy" />
        <div className="grid gap-4">
          <img src={sInstall} alt="Installation" className="rounded-2xl object-cover w-full aspect-square" loading="lazy" />
          <img src={faqImg} alt="Cozy living room" className="rounded-2xl object-cover w-full aspect-square" loading="lazy" />
        </div>
      </div>
      <div>
        <SectionEyebrow>Why Us</SectionEyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Here's why Olympia homeowners trust Pacific Northwest Laminate Experts</h2>
        <div className="mt-8 space-y-5">
          {[
            { i: ShieldCheck, t: "Licensed & Insured", d: "Fully bonded, insured, and PNW-local for your complete peace of mind." },
            { i: Users, t: "Laminate-Only Specialists", d: "We don't dabble. Laminate is our entire craft." },
            { i: BadgeCheck, t: "Satisfaction Guaranteed", d: "Lifetime workmanship guarantee on every install." },
            { i: Award, t: "Local & Trusted", d: "Hundreds of happy neighbors across Thurston County." },
          ].map(it => (
            <div key={it.t} className="flex gap-4">
              <span className="shrink-0 w-11 h-11 rounded-xl bg-brand-soft grid place-items-center"><it.i className="w-5 h-5 text-brand" /></span>
              <div>
                <div className="font-semibold">{it.t}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{it.d}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#estimate" className="mt-8 inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-6 py-3 font-semibold hover:brightness-105">
          Book Your Free Estimate <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const TickerBar = () => (
  <div className="bg-brand-soft border-y border-brand/20">
    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-around gap-x-10 gap-y-3 text-sm font-semibold text-foreground/80">
      {["Expertise","Quality","Licensed & Insured","Trust","Workmanship"].map(t => (
        <span key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> {t}</span>
      ))}
    </div>
  </div>
);

const EstimateCTA = () => (
  <section id="estimate" className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden">
        <img src={estimate} alt="Laminate samples" className="absolute inset-0 w-full h-full object-cover" width={1600} height={600} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/30" />
        <div className="relative p-10 md:p-16 text-cream max-w-2xl">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-cream">Book Your Free In-Home Estimate Today</h2>
          <p className="mt-4 text-cream/85">We come to you with samples, expert advice, and a clear, honest quote — no pressure, no surprises.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-6 py-3.5 font-semibold hover:brightness-105"><Calendar className="w-5 h-5" /> Book My Free Estimate</a>
            <a href="tel:3602025612" className="inline-flex items-center gap-2 bg-cream/10 border border-cream/30 text-cream rounded-full px-6 py-3.5 font-semibold hover:bg-cream/15"><Phone className="w-5 h-5" /> (360) 202-5612</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { n: "Sarah M.", l: "Olympia, WA", r: "Pacific Northwest installed laminate throughout our home. The team was professional, fast, and the floors look absolutely stunning." },
    { n: "David H.", l: "Lacey, WA", r: "Incredible attention to detail. They handled tricky stair transitions like true pros. Highly recommend this team." },
    { n: "Linda P.", l: "Tumwater, WA", r: "Affordable, honest, and the work is flawless. Our living room finally feels like home again." },
  ];
  return (
    <section className="py-24 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-14 items-start">
        <div>
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">What Our Customers Say</h2>
          <p className="mt-4 text-muted-foreground">Real reviews from neighbors across Olympia and nearby communities.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold">Read all reviews on Google <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.n} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm">
              <div className="flex gap-0.5 text-brand mb-3">{[...Array(5)].map((_,i)=>(<Star key={i} className="w-4 h-4 fill-current" />))}</div>
              <p className="text-sm text-foreground/80 leading-relaxed">"{r.r}"</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-soft grid place-items-center text-brand font-semibold text-sm">{r.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.l}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const items = [
    { i: Sparkles, t: "Stylish & Versatile", d: "Hundreds of finishes mimic real hardwood and stone to match any home aesthetic." },
    { i: Award, t: "Affordable Luxury", d: "Get the high-end look at a fraction of the price of solid hardwood." },
    { i: ShieldCheck, t: "Durable & Easy to Maintain", d: "Resistant to scratches, spills, and daily wear — built for real family life." },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionEyebrow>Benefits</SectionEyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Why Homeowners Choose Laminate Flooring</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Discover the style, durability, and value that make laminate Olympia's smartest flooring choice.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.t} className="bg-cream rounded-2xl p-8 text-left border border-border/60 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-brand grid place-items-center text-primary-foreground rotate-[8deg]">
                <it.i className="w-6 h-6 -rotate-[8deg]" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const towns = ["Olympia","Lacey","Tumwater","Shelton","Centralia","Chehalis","DuPont","Lakewood","Tacoma","Yelm","..."];
  return (
    <section id="areas" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-deep border border-border">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(135deg, oklch(0.78 0.08 145) 0%, oklch(0.65 0.12 145) 100%)",
          }} />
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
            <path d="M0,150 Q100,100 200,140 T400,120" stroke="white" strokeWidth="2" fill="none" />
            <path d="M0,180 Q150,200 250,170 T400,200" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M50,0 L80,300 M180,0 L160,300 M280,0 L300,300" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-40 w-12 h-12" />
              <div className="relative w-12 h-12 rounded-full bg-brand grid place-items-center text-primary-foreground shadow-xl">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-2 bg-background rounded-lg px-3 py-1.5 text-xs font-semibold shadow-lg whitespace-nowrap">Olympia, WA</div>
          </div>
        </div>
        <div>
          <SectionEyebrow>Service Areas</SectionEyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Proudly Serving Olympia & Nearby Communities</h2>
          <p className="mt-4 text-muted-foreground">We proudly bring premium laminate flooring expertise to homes across the South Sound region.</p>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {towns.map(t => (
              <span key={t} className="bg-brand text-primary-foreground rounded-full px-4 py-2.5 text-sm font-semibold flex items-center justify-between gap-2">
                {t} <MapPin className="w-3.5 h-3.5 opacity-80" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How much does laminate flooring cost in Olympia?", a: "Most projects range from $4–$9 per square foot installed, depending on the laminate grade and room complexity. We provide free, no-obligation in-home estimates." },
    { q: "How long does installation take?", a: "Most homes are completed in 1–3 days. Larger or multi-room projects may take a bit longer — we'll give you a clear timeline upfront." },
    { q: "Is laminate flooring waterproof?", a: "Modern laminate is highly water-resistant, and we offer fully waterproof lines ideal for kitchens, bathrooms, and entries." },
    { q: "Do you offer warranties?", a: "Yes — every installation comes with our lifetime workmanship guarantee on top of the manufacturer's product warranty." },
  ];
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know about laminate flooring in the Pacific Northwest.</p>
          <img src={faqImg} alt="Cozy interior" className="mt-8 rounded-2xl aspect-[4/3] object-cover w-full" width={800} height={700} loading="lazy" />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button key={f.q} onClick={() => setOpen(open===i?null:i)} className="w-full text-left bg-cream rounded-2xl border border-border/60 overflow-hidden">
              <div className="flex items-center justify-between gap-4 p-6">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand shrink-0 transition-transform ${open===i?"rotate-180":""}`} />
              </div>
              {open===i && <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const TransformCTA = () => (
  <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <SectionEyebrow>Ready?</SectionEyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Transform Your Home with Expert Laminate Flooring</h2>
        <p className="mt-4 text-muted-foreground">Let's talk style, color, and durability — with a no-pressure free estimate from Olympia's most trusted laminate specialists.</p>
        <ul className="mt-6 space-y-2.5 text-sm">
          {["Serving Olympia & surrounding communities","Licensed & insured","Satisfaction guaranteed"].map(t => (
            <li key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> {t}</li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-brand text-primary-foreground rounded-full px-6 py-3.5 font-semibold"><Calendar className="w-5 h-5" /> Book My Free Estimate</a>
          <a href="tel:3602025612" className="inline-flex items-center gap-2 font-semibold"><Phone className="w-5 h-5 text-brand" /> (360) 202-5612</a>
        </div>
      </div>
      <img src={transform} alt="Bedroom with laminate" className="rounded-2xl aspect-[5/4] object-cover w-full" width={900} height={600} loading="lazy" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-ink text-cream/80">
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-brand grid place-items-center text-primary-foreground"><Home className="w-5 h-5" /></div>
          <div>
            <div className="font-display text-lg text-cream">Pacific Northwest</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-brand">Laminate Experts</div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed max-w-sm">Olympia's trusted laminate-only flooring specialists. Bringing warmth, style, and craftsmanship to every Pacific Northwest home.</p>
        <div className="mt-5 flex gap-2">
          {[Facebook, Instagram, Mail].map((I,i)=>(
            <a key={i} href="#" className="w-9 h-9 rounded-full border border-cream/20 grid place-items-center hover:bg-brand hover:border-brand transition"><I className="w-4 h-4" /></a>
          ))}
        </div>
      </div>
      <div>
        <div className="text-cream font-semibold mb-4 text-sm">Quick Links</div>
        <ul className="space-y-2 text-sm">{["Services","About","Gallery","FAQ","Contact"].map(l=><li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-brand">{l}</a></li>)}</ul>
      </div>
      <div>
        <div className="text-cream font-semibold mb-4 text-sm">Areas Served</div>
        <ul className="space-y-2 text-sm">{["Olympia","Lacey","Tumwater","Shelton","Centralia"].map(l=><li key={l}>{l}</li>)}</ul>
      </div>
      <div>
        <div className="text-cream font-semibold mb-4 text-sm">Contact</div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand" /> (360) 202-5612</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand" /> hello@pnwlaminate.com</li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-brand mt-0.5" /> Olympia, WA 98501</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-3 text-xs text-cream/60">
        <div>© 2026 Pacific Northwest Laminate Experts. All rights reserved.</div>
        <div className="flex gap-5"><a href="#" className="hover:text-brand">Privacy</a><a href="#" className="hover:text-brand">Terms</a><a href="#" className="hover:text-brand">Sitemap</a></div>
      </div>
    </div>
  </footer>
);

function Index() {
  return (
    <div className="bg-background text-foreground">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <LocalExperts />
        <Services />
        <Process />
        <Trust />
        <TickerBar />
        <EstimateCTA />
        <Testimonials />
        <WhyChoose />
        <ServiceAreas />
        <FAQ />
        <TransformCTA />
      </main>
      <Footer />
    </div>
  );
}
