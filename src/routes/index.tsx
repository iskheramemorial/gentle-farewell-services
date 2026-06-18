import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Truck,
  Flame,
  Trees,
  ChevronRight,
  Menu,
  X,
  Quote,
  Mail,
  Send,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";

import heroImg from "@/assets/hero-memorial.jpg";
import chairmanAsset from "@/assets/chairman.asset.json";
import vicechairmanAsset from "@/assets/vicechairman.asset.json";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I.S. Khera Memorial Trust — Dignified Final Farewell for Animals" },
      {
        name: "description",
        content:
          "Respectful pickup, transportation, cremation and burial services for deceased dogs and cats across Delhi NCR. 24×7 emergency response: 8882650591.",
      },
      { property: "og:title", content: "I.S. Khera Memorial Trust" },
      {
        property: "og:description",
        content:
          "Dignified final farewell — pickup, cremation and burial services for dogs and cats across Delhi NCR. 24×7.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "I.S. Khera Memorial Trust",
          description: "Dead dog & cat memorial services — pickup, cremation and burial across Delhi NCR.",
          telephone: "+918882650591",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Khera Banquet Hall, Shahdara Tezab Mill",
            addressLocality: "Delhi",
            postalCode: "110032",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "8882650591";
const TEL = `tel:+91${PHONE}`;
const WA = `https://wa.me/91${PHONE}`;
const MAPS = "https://maps.app.goo.gl/N2zWJto9xRWsnZnj9";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
      <span className="h-px w-8 bg-gold/60" />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-dark border-white/10 shadow-elegant"
              : "glass-dark border-white/10"
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-navy-deep">
              <span className="font-display text-lg font-semibold text-gold">IK</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base font-semibold text-white">
                I.S. Khera Memorial Trust
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold/90">
                Dead Dog & Cat Memorial Services
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-white/85 transition hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 rounded-2xl glass-dark border border-white/10 p-4"
            >
              <div className="flex flex-col">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 py-3 text-sm font-medium text-white/85 last:border-0"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href={TEL}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Respectful memorial setting with marigold flowers and candles"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/85 via-[#0B1F3A]/70 to-[#0B1F3A]/95" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <SectionLabel>Trust & Memorial Services</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-white"
          >
            Dignified Final Farewell
            <br />
            <span className="italic text-gold">For Every Animal</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
          >
            We provide respectful pickup, transportation, cremation and burial
            services for deceased dogs and cats across Delhi NCR — with compassion,
            cleanliness and care, available 24×7.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href={TEL}
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              Call Now — {PHONE}
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
          >
            {[
              { icon: Clock, label: "24×7 Service" },
              { icon: Heart, label: "Respectful" },
              { icon: Shield, label: "Hygienic" },
              { icon: Sparkles, label: "Dignified" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/80">
                <item.icon className="h-4 w-4 text-gold" />
                <span className="text-xs uppercase tracking-[0.18em]">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto max-w-2xl text-center"
    >
      <motion.div variants={fadeUp}>
        <SectionLabel>{eyebrow}</SectionLabel>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className={`mt-5 font-display text-4xl md:text-5xl font-medium leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

function Services() {
  const items = [
    {
      icon: Truck,
      title: "Dead Animal Pickup",
      desc: "24×7 pickup service for deceased dogs and cats across Delhi NCR.",
    },
    {
      icon: Shield,
      title: "Safe Transportation",
      desc: "Hygienic, respectful and discreet transportation in dedicated vehicles.",
    },
    {
      icon: Flame,
      title: "Cremation Services",
      desc: "Dignified cremation with proper final rites and respect for every life.",
    },
    {
      icon: Trees,
      title: "Burial Services",
      desc: "Respectful burial arrangements in designated, well-kept areas.",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <SectionHeading
        eyebrow="Our Services"
        title={
          <>
            Compassionate care, <span className="italic text-gold">end to end</span>
          </>
        }
        description="From the first phone call to the final farewell — every step is handled with the dignity your companion deserves."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition shadow-sm hover:shadow-elegant"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold transition group-hover:gradient-gold group-hover:text-navy">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              24×7 Available <ChevronRight className="h-3 w-3" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Call or WhatsApp", desc: "Reach our team anytime, day or night." },
    { n: "02", title: "Share Location", desc: "Send us your address — we coordinate quickly." },
    { n: "03", title: "Team Arrives", desc: "Trained staff reaches you respectfully and discreetly." },
    { n: "04", title: "Pickup Conducted", desc: "Handled hygienically with utmost care." },
    { n: "05", title: "Final Rites", desc: "Cremation or burial performed with dignity." },
    { n: "06", title: "Service Completed", desc: "Peace of mind for the family." },
  ];

  return (
    <section className="relative gradient-navy py-24 md:py-32 text-white">
      <SectionHeading
        eyebrow="How It Works"
        light
        title={
          <span className="text-white">
            A simple, <span className="italic text-gold">respectful</span> process
          </span>
        }
        description="Six steps, handled by us — so your only focus is remembering them."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-gold/40"
          >
            <div className="flex items-start justify-between">
              <div className="font-display text-5xl font-light text-gold/90">{s.n}</div>
              <div className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-gold/60 to-transparent lg:block" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img src={g2} alt="Memorial setting" className="h-[520px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 rounded-2xl border border-gold/30 bg-card p-6 shadow-elegant sm:-right-8">
            <div className="font-display text-5xl font-semibold text-navy">10+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Years of Service
            </div>
            <div className="mt-3 h-px w-12 bg-gold" />
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>About The Trust</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-4xl md:text-5xl font-medium leading-tight text-navy"
          >
            About <span className="italic text-gold">I.S. Khera</span> Memorial Trust
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted-foreground">
            I.S. Khera Memorial Trust is dedicated to providing dignified final
            rites and memorial services for deceased animals. Our mission is to
            ensure that every animal receives respect, care, and a proper
            farewell.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work tirelessly to maintain cleanliness, public hygiene, and
            compassionate service across our operational areas — treating every
            call with the seriousness and warmth it deserves.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Heart, label: "Compassion First" },
              { icon: Shield, label: "Strict Hygiene" },
              { icon: Award, label: "Trusted Service" },
              { icon: Clock, label: "Always Available" },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-gold">
                  <i.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-navy">{i.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Leadership() {
  const leaders = [
    {
      name: "Jaspal Singh Khera",
      role: "Chairman",
      image: chairmanAsset.url,
      desc: "Leading the mission to serve voiceless souls with respect and compassion across Delhi NCR.",
    },
    {
      name: "Himanshu Bhasin",
      role: "Vice Chairman",
      image: vicechairmanAsset.url,
      desc: "Dedicated to animal welfare and ensuring every life gets a dignified farewell.",
    },
  ];

  return (
    <section id="leadership" className="relative bg-muted/40 py-24 md:py-32">
      <SectionHeading
        eyebrow="Our Leadership"
        title={
          <>
            Guided by <span className="italic text-gold">compassion</span>
          </>
        }
        description="The voices and hands behind every dignified farewell we conduct."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 px-5 md:grid-cols-2"
      >
        {leaders.map((l) => (
          <motion.article
            key={l.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-elegant"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={l.image}
                alt={`${l.name}, ${l.role}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
                  {l.role}
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold">{l.name}</h3>
              </div>
            </div>
            <div className="border-t-2 border-gold/40 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: g1, h: "row-span-2", alt: "Lit memorial lamp with petals" },
    { src: g5, h: "", alt: "White lily and candles" },
    { src: g4, h: "", alt: "Memorial stone with marigolds" },
    { src: g3, h: "row-span-2", alt: "Hands holding a candle" },
    { src: g6, h: "", alt: "Service vehicle at dusk" },
    { src: g2, h: "", alt: "Petals and candles arrangement" },
  ];
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            Moments of <span className="italic text-gold">remembrance</span>
          </>
        }
        description="A glimpse of the dignified send-offs we conduct for every animal entrusted to us."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mt-14 grid max-w-7xl auto-rows-[180px] grid-cols-2 gap-4 px-5 md:grid-cols-3 md:auto-rows-[220px] lg:grid-cols-4"
      >
        {imgs.map((img, i) => (
          <motion.button
            type="button"
            key={i}
            variants={fadeUp}
            onClick={() => setActive(img.src)}
            className={`group relative overflow-hidden rounded-xl ${img.h}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/30" />
            <div className="absolute inset-0 ring-0 ring-gold/60 transition group-hover:ring-2" />
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/90 p-4 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={active}
              alt="Memorial moment"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-gold/30 object-contain shadow-elegant"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: Clock, t: "24×7 Availability", d: "Every hour. Every day. Always." },
    { icon: Heart, t: "Respectful Handling", d: "Care that honors every life." },
    { icon: Users, t: "Professional Team", d: "Trained and trusted staff." },
    { icon: Sparkles, t: "Quick Response", d: "Fast arrival across Delhi NCR." },
    { icon: Shield, t: "Clean & Hygienic", d: "Strict sanitation protocols." },
    { icon: Award, t: "Years of Service", d: "Trusted across the community." },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-muted/40">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={
          <>
            Built on <span className="italic text-gold">trust & dignity</span>
          </>
        }
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-3"
      >
        {items.map((i) => (
          <motion.div
            key={i.t}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-gold/50 hover:shadow-elegant"
          >
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-navy text-gold transition group-hover:gradient-gold group-hover:text-navy">
              <i.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-navy">{i.t}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{i.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Coverage() {
  const areas = [
    "Delhi NCR",
    "Shahdara",
    "Seelampur",
    "Yamuna Vihar",
    "Bhajanpura",
    "Kardampuri",
    "Gokulpuri",
    "Welcome",
    "Jaffrabad",
    "Maujpur",
    "Krishna Nagar",
    "Nearby Areas",
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Coverage Areas</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-4xl md:text-5xl font-medium leading-tight text-navy"
          >
            Serving <span className="italic text-gold">Delhi NCR</span> with care
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-muted-foreground">
            Wherever you are in the region, our team can reach you. If your area
            isn't listed below, call us — we'll do our best to help.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-navy"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                {a}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-border shadow-elegant"
        >
          <iframe
            title="I.S. Khera Memorial Trust location"
            src="https://www.google.com/maps?q=Khera+Banquet+Hall+Shahdara+Tezab+Mill+Delhi+110032&output=embed"
            className="h-[460px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      q: "When my dog passed, I was lost. The team arrived quickly, handled everything with respect, and gave him the farewell he deserved.",
      n: "Priya Sharma",
      l: "Shahdara",
    },
    {
      q: "Professional, compassionate and available at 2 AM when I called. Truly a noble service for the voiceless.",
      n: "Rohit Verma",
      l: "Yamuna Vihar",
    },
    {
      q: "They treated our cat with the dignity of a family member. The cremation was conducted respectfully and cleanly.",
      n: "Anita Kapoor",
      l: "Krishna Nagar",
    },
    {
      q: "Quick response and very respectful staff. They explained every step and made a hard day a little easier.",
      n: "Mohit Singh",
      l: "Seelampur",
    },
  ];
  return (
    <section className="relative gradient-navy py-24 md:py-32 text-white">
      <SectionHeading
        eyebrow="Testimonials"
        light
        title={
          <span className="text-white">
            Families we have <span className="italic text-gold">served</span>
          </span>
        }
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {t.map((x) => (
          <motion.figure
            key={x.n}
            variants={fadeUp}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <Quote className="h-7 w-7 text-gold" />
            <blockquote className="mt-4 text-sm leading-relaxed text-white/85">
              "{x.q}"
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <div className="font-display text-base font-semibold text-white">{x.n}</div>
              <div className="text-xs text-gold/90">{x.l}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            We are here, <span className="italic text-gold">whenever you need us</span>
          </>
        }
        description="Call, message, or write to us — our team responds 24×7."
      />

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 px-5 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {[
            {
              icon: Phone,
              title: "24×7 Helpline",
              value: PHONE,
              href: TEL,
              cta: "Call Now",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              value: PHONE,
              href: WA,
              cta: "Message Us",
            },
            {
              icon: MapPin,
              title: "Address",
              value: "Khera Banquet Hall, Shahdara Tezab Mill, Delhi - 110032",
              href: MAPS,
              cta: "Open in Maps",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {c.title}
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-navy">
                  {c.value}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gold">
                  {c.cta} <ChevronRight className="h-3 w-3 transition group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <h3 className="font-display text-2xl font-semibold text-navy">
            Send us a message
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For non-urgent requests. For immediate help, please call.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              required
              type="tel"
              placeholder="Phone number"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="sm:col-span-2 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <textarea
              required
              rows={4}
              placeholder="How can we help you?"
              className="sm:col-span-2 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2 text-sm text-navy"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  Thank you — we'll reach out soon.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/60">
              <span className="font-display text-lg font-semibold text-gold">IK</span>
            </div>
            <div>
              <div className="font-display text-lg text-white">I.S. Khera Memorial Trust</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Dead Dog & Cat Memorial Services
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/65">
            Dedicated to dignified final rites, cremation and burial services
            for deceased dogs and cats across Delhi NCR — available 24×7.
          </p>
          <div className="mt-6 flex gap-3">
            {["FB", "IG", "YT", "X"].map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xs font-semibold text-white/80 transition hover:border-gold hover:text-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-base font-semibold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-base font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={TEL} className="hover:text-gold">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 text-gold" />
              <a href={WA} target="_blank" rel="noopener" className="hover:text-gold">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <a href={MAPS} target="_blank" rel="noopener" className="hover:text-gold">
                Khera Banquet Hall, Shahdara Tezab Mill, Delhi - 110032
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <span>info@iskheratrust.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/55 sm:flex-row">
          <div>© {new Date().getFullYear()} I.S. Khera Memorial Trust. All rights reserved.</div>
          <div>Designed with respect, care and dignity.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1 text-xs text-white group-hover:block">
          WhatsApp Us
        </span>
      </a>
      <a
        href={TEL}
        className="group grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-gold transition hover:scale-105"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Leadership />
        <Gallery />
        <WhyChooseUs />
        <Coverage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
