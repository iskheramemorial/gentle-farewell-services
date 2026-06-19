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
  ChevronDown,
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
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const SERVICE_AREAS = [
  "Delhi NCR",
  "Shahdara",
  "Seelampur",
  "Bhajanpura",
  "Yamuna Vihar",
  "Kardampuri",
  "Gokulpuri",
  "Welcome",
  "Jaffrabad",
  "Maujpur",
  "Krishna Nagar",
  "Karawal Nagar",
  "Mustafabad",
  "New Delhi",
  "East Delhi",
  "North East Delhi",
  "Noida",
  "Ghaziabad",
];

const FAQS = [
  {
    q: "What should I do if I find a dead dog or cat in Delhi?",
    a: "Stay calm and avoid handling the animal directly. Call I.S. Khera Memorial Trust at 8882650591 — our 24×7 dead dog and dead cat pickup team will reach your location anywhere in Delhi NCR with protective equipment and a dedicated vehicle to remove the animal hygienically and respectfully.",
  },
  {
    q: "How quickly can your team arrive for dead animal pickup in Delhi NCR?",
    a: "Our average response time across Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri and surrounding areas is 30–60 minutes. For nearby areas in Delhi NCR, we typically reach within 60–90 minutes, 24 hours a day, every day of the year.",
  },
  {
    q: "Do you provide cremation services for dogs and cats?",
    a: "Yes. We offer dignified individual and communal cremation services for dogs, cats and other small animals. Final rites are performed respectfully, and the family can be present if they wish. Ashes can be collected on request for private cremations.",
  },
  {
    q: "Do you provide burial services for pets?",
    a: "Yes. We arrange respectful animal burial in designated, well-kept grounds. Each burial is conducted with care, hygiene and the dignity your companion deserves.",
  },
  {
    q: "Which areas in Delhi NCR do you cover?",
    a: "We cover all of Delhi NCR including Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri, Gokulpuri, Welcome, Jaffrabad, Maujpur, Krishna Nagar, Karawal Nagar, Mustafabad, East Delhi, North East Delhi, New Delhi, Noida and Ghaziabad. If your area isn't listed, call us — we'll do our best to help.",
  },
  {
    q: "What are your operating hours?",
    a: "We operate 24 hours a day, 7 days a week, including all public holidays. Death and loss don't follow a schedule — neither do we.",
  },
  {
    q: "How can I contact your team for emergency animal pickup?",
    a: "Call or WhatsApp our 24×7 helpline at 8882650591. You can also reach us through the contact form on this website or visit our address at 28/18A/110, Bhola Nath Nagar Near Shahdara, Metro Station, Delhi- 110032.",
  },
];

const SERVICE_DETAILS = [
  {
    id: "dead-dog-pickup",
    icon: Truck,
    title: "Dead Dog Pickup Service in Delhi NCR",
    short: "24×7 respectful pickup of deceased dogs across Delhi NCR.",
    body: [
      "Finding a deceased dog — whether your beloved pet at home or a stray on the road — is emotionally difficult and raises immediate public health concerns. I.S. Khera Memorial Trust provides professional dead dog pickup services across Delhi NCR, 24 hours a day, 7 days a week, including Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri and all nearby areas.",
      "Our trained team arrives in a dedicated, sanitised vehicle with full protective equipment. Every deceased dog is handled with the same respect we would offer a human family member — lifted carefully, wrapped in clean cloth, and transported discreetly. We never expose the animal to public view during transport.",
      "We coordinate the entire process from your first call through to final cremation or burial. Families dealing with the loss of a pet receive priority emotional support; stray dog pickups are conducted with the same dignity, because every life matters. Call 8882650591 for immediate pickup anywhere in Delhi NCR.",
    ],
  },
  {
    id: "dead-cat-pickup",
    icon: Truck,
    title: "Dead Cat Pickup Service in Delhi NCR",
    short: "Hygienic, dignified pickup of deceased cats anywhere in Delhi.",
    body: [
      "Cats hold a special place in many families, and losing one is painful. Our dead cat pickup service across Delhi NCR ensures that your companion — or any deceased cat you have found — is collected promptly, handled with compassion, and given a proper farewell.",
      "We serve every neighbourhood in Delhi including Shahdara, Seelampur, Yamuna Vihar, Bhajanpura, Kardampuri, Krishna Nagar and the wider NCR. Our team is equipped with dedicated cat carriers, biohazard-safe materials and trained handlers who understand both hygiene protocols and emotional sensitivity.",
      "Following pickup, families can choose between individual cremation, communal cremation or a respectful burial. We document each step, maintain strict sanitisation of vehicles and equipment, and never leave the family with questions unanswered. Available 24×7 at 8882650591.",
    ],
  },
  {
    id: "animal-cremation",
    icon: Flame,
    title: "Animal Cremation Service in Delhi",
    short: "Dignified individual and communal cremation with proper final rites.",
    body: [
      "Our animal cremation service in Delhi is conducted with the same reverence as any final rite. Each cremation is performed at a clean, dedicated facility under trained supervision. Families may choose individual cremation — where the ashes belong only to your pet and can be returned to you — or communal cremation for stray and unclaimed animals.",
      "Every cremation begins with a brief moment of respect: a final blessing, a placed flower, and the family's words if they wish to be present. We coordinate cremation timings around your needs and offer both daytime and night services, recognising that grief does not wait for office hours.",
      "Beyond the ceremony itself, we handle paperwork, transportation, sanitisation and ash collection. Our cremation services are available for dogs, cats, and other small animals across Delhi NCR including Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri and surrounding areas. Call 8882650591 to arrange a cremation today.",
    ],
  },
  {
    id: "animal-burial",
    icon: Trees,
    title: "Animal Burial Service in Delhi NCR",
    short: "Respectful pet burial in designated, well-maintained grounds.",
    body: [
      "For families who prefer burial as a final farewell, I.S. Khera Memorial Trust offers a respectful animal burial service across Delhi NCR. Each grave is dug carefully in designated, well-kept grounds. Burials follow hygienic protocols and any religious or personal observances the family wishes to include.",
      "We provide simple grave markers on request, allowing families to visit, remember and place flowers. Our team handles the deceased animal with reverence from collection through to interment — no part of the process is treated as routine work.",
      "Whether you live in Shahdara, Yamuna Vihar, Bhajanpura, Kardampuri, Seelampur or anywhere in Delhi NCR, we will guide you through every step. Pet burial bookings can be arranged on the same day in most cases. Call 8882650591 to schedule.",
    ],
  },
  {
    id: "memorial",
    icon: Heart,
    title: "Animal Memorial Service in Delhi",
    short: "Personalised memorial ceremonies to honour your companion's life.",
    body: [
      "A memorial is a chance to gather, share memories, and acknowledge how much an animal meant to a family. Our animal memorial service in Delhi creates a quiet, dignified space — with lamps, flowers and meaningful tributes — where families can say goodbye on their own terms.",
      "We coordinate small home memorials, on-site memorials at our facility, and combined ceremonies that include cremation or burial. Families can include their faith traditions, music, photos and personal words. Our team handles every logistical detail so you can focus on remembering.",
      "Memorial services are available across Delhi NCR including Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri and nearby areas. Pricing is transparent and shared upfront. Speak with our team at 8882650591 to plan a memorial that truly honours your companion.",
    ],
  },
  {
    id: "emergency",
    icon: Clock,
    title: "24×7 Emergency Animal Pickup in Delhi NCR",
    short: "Round-the-clock emergency response for dead dogs, cats and animals.",
    body: [
      "Emergencies don't follow business hours. Our 24×7 emergency animal pickup service in Delhi NCR responds to calls at midnight, on holidays, and during festivals — whenever you need us. A small dedicated dispatch team monitors our helpline at 8882650591 around the clock.",
      "We treat every emergency call as a priority. Whether it is a road accident involving a stray, a pet who has passed at home unexpectedly, or a society reporting a deceased animal in a public area, our team will reach you, handle the situation hygienically, and conduct the final rites with care.",
      "Emergency coverage spans Shahdara, Seelampur, Bhajanpura, Yamuna Vihar, Kardampuri, Krishna Nagar, Karawal Nagar, Mustafabad, East Delhi and the wider NCR including Noida and Ghaziabad. Save 8882650591 in your phone — when the moment comes, you'll know exactly who to call.",
    ],
  },
];

const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EmergencyService"],
  "@id": "/#organization",
  name: "I.S. Khera Memorial Trust",
  alternateName: "Khera Memorial Trust",
  description:
    "24×7 dead dog and cat pickup, cremation, burial and memorial services across Delhi NCR.",
  url: "/",
  telephone: "+918882650591",
  email: "iskheramemorial@gmail.com",
  priceRange: "₹₹",
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "28/18A/110, Bhola Nath Nagar, Near Shahdara",
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110032",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.6914, longitude: 77.289 },
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+918882650591",
      contactType: "Emergency",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
      contactOption: "TollFree",
    },
  ],
  sameAs: [],
};

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "I.S. Khera Memorial Trust",
  url: "/",
  logo: "/og-image.jpg",
  founder: [
    { "@type": "Person", name: "Jaspal Singh Khera", jobTitle: "Chairman" },
    { "@type": "Person", name: "Himanshu Bhasin", jobTitle: "Vice Chairman" },
  ],
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "I.S. Khera Memorial Trust",
  url: "/",
  inLanguage: "en-IN",
};

const SERVICE_LD = SERVICE_DETAILS.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: s.title,
  provider: { "@type": "LocalBusiness", name: "I.S. Khera Memorial Trust" },
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  description: s.body[0],
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: "+918882650591",
    availableLanguage: ["en", "hi"],
  },
}));

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "I.S. Khera Memorial Trust | Dead Dog & Cat Pickup, Cremation & Burial Services Delhi NCR",
      },
      {
        name: "description",
        content:
          "24×7 dead dog and cat pickup services in Delhi NCR. Professional animal cremation, burial and memorial services. Call 8882650591.",
      },
      {
        property: "og:title",
        content:
          "I.S. Khera Memorial Trust | Dead Dog & Cat Pickup, Cremation & Burial Services Delhi NCR",
      },
      {
        property: "og:description",
        content:
          "24×7 dead dog and cat pickup, cremation and burial services across Delhi NCR. Respectful animal memorial services. Call 8882650591.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { property: "og:image:alt", content: "Dignified animal memorial setting with marigolds and candles" },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:image:alt", content: "I.S. Khera Memorial Trust" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS_LD) },
      { type: "application/ld+json", children: JSON.stringify(ORGANIZATION_LD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_LD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_LD) },
      ...SERVICE_LD.map((s) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify(s),
      })),
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
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Areas", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
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
              <span className="font-display text-lg font-semibold text-gold">ISK</span>
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
    image: "/chairman.png",   // ← plain string, no import needed
    desc: "Leading the mission to serve voiceless souls with respect and compassion across Delhi NCR.",
  },
  {
    name: "Himanshu Bhasin",
    role: "Vice Chairman",
    image: "/vicechairman.png",  // ← plain string
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
    <section id="coverage" className="relative py-24 md:py-32">
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
              value: "28/18A/110, Bhola Nath Nagar Near Shahdara, Metro Station, Delhi- 110032",
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
              <span className="font-display text-lg font-semibold text-gold">ISK</span>
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
                28/18A/110, Bhola Nath Nagar Near Shahdara, Metro Station, Delhi- 110032
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <span>Iskheramemorial@gmail.com</span>
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

function ServiceDetails() {
  return (
    <section id="service-details" className="relative bg-muted/30 py-24 md:py-32">
      <SectionHeading
        eyebrow="Detailed Services"
        title={
          <>
            Every service, <span className="italic text-gold">explained with care</span>
          </>
        }
        description="Transparent details about what we do, how we do it, and the areas of Delhi NCR we serve — so you know exactly what to expect when you call."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-5 lg:grid-cols-2"
      >
        {SERVICE_DETAILS.map((s) => (
          <motion.article
            key={s.id}
            id={s.id}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-elegant"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-gold/90">{s.short}</p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-navy-deep"
              >
                <Phone className="h-3.5 w-3.5" /> Call {PHONE}
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy transition hover:border-gold"
              >
                Read FAQ <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Answers when you <span className="italic text-gold">need them most</span>
          </>
        }
        description="Common questions about our dead dog and cat pickup, cremation, burial and memorial services across Delhi NCR."
      />
      <div className="mx-auto mt-14 max-w-3xl px-5">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="border-b border-border last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg font-semibold text-navy">
                  {f.q}
                </span>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Call 24×7 — {PHONE}
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:border-gold"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function EmergencyCTA() {
  return (
    <section className="relative gradient-navy py-20 text-white">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <SectionLabel>24×7 Emergency Helpline</SectionLabel>
        <h2 className="mt-5 font-display text-3xl md:text-4xl font-medium leading-tight">
          Need urgent dead animal pickup in Delhi NCR?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75">
          Our team is on standby around the clock. Call or WhatsApp now — we
          will reach you anywhere in Delhi NCR with discretion, hygiene and
          respect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" /> Visit Location
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceDetails />
        <HowItWorks />
        <About />
        <Leadership />
        <Gallery />
        <WhyChooseUs />
        <Coverage />
        <EmergencyCTA />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
