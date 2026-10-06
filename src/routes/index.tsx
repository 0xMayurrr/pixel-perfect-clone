import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buildicy — AI Growth Systems Studio" },
      {
        name: "description",
        content:
          "Buildicy builds AI-powered funnels, intelligent receptionists and digital systems that help businesses capture, qualify and convert more customers.",
      },
      { property: "og:title", content: "Buildicy — Turn Your Business Into a Growth System" },
      {
        property: "og:description",
        content: "AI funnels, AI receptionists, automation and custom digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Editable content ---------- */
const CLIENTS = ["Northwind", "Halcyon Dental", "Luxe Homes", "Arden & Co.", "FlowForge", "Meridian Clinics", "Oakline", "Vesper Legal"];

const METRICS: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 120, suffix: "+", label: "Clients served" },
  { value: 240, suffix: "+", label: "Projects delivered" },
  { value: 1.8, suffix: "M", label: "Leads generated", decimals: 1 },
  { value: 85, suffix: "", label: "AI systems built" },
];

const SERVICES = [
  { n: "01", title: "AI Funnels", body: "Conversion architecture that turns cold traffic into booked calls — landing pages, qualification flows and AI-driven follow-up." },
  { n: "02", title: "AI Receptionists", body: "Voice and chat agents that answer every enquiry, book appointments and hand off qualified leads — around the clock." },
  { n: "03", title: "Automation", body: "Your CRM, calendar, inbox and billing connected into one quiet machine that removes the busywork." },
  { n: "04", title: "Digital Products", body: "Custom dashboards, portals and web apps designed and engineered to the standard of the brands you admire." },
];

const CASES = [
  {
    client: "Halcyon Dental",
    tag: "AI Receptionist",
    year: "2026",
    img: case1,
    w: 1200,
    h: 1408,
    problem: "38% of after-hours calls went unanswered, leaking new-patient bookings every week.",
    strategy: "Treat the front desk as a system: capture every enquiry, triage intent, book instantly.",
    built: "A branded voice + chat receptionist synced to their practice calendar and CRM.",
    result: [{ k: "+64%", v: "new bookings" }, { k: "0", v: "missed calls" }, { k: "11 hrs", v: "saved weekly" }],
  },
  {
    client: "Luxe Homes",
    tag: "AI Funnel",
    year: "2025",
    img: case2,
    w: 1600,
    h: 1008,
    problem: "High ad spend, low-intent leads, and an agent team chasing the wrong buyers.",
    strategy: "Qualify before contact — score buyers by budget, timeline and location in the funnel.",
    built: "Editorial listing funnel with AI qualification, instant SMS follow-up and agent routing.",
    result: [{ k: "3.2×", v: "qualified leads" }, { k: "−41%", v: "cost per lead" }, { k: "$4.1M", v: "pipeline in 90 days" }],
  },
  {
    client: "FlowForge",
    tag: "Automation Platform",
    year: "2025",
    img: case3,
    w: 1408,
    h: 1008,
    problem: "Operations ran on 14 disconnected tools and a spreadsheet nobody trusted.",
    strategy: "One source of truth with automations observable from a single dashboard.",
    built: "Custom workflow analytics product plus 40+ automations across sales and ops.",
    result: [{ k: "24.8K", v: "monthly executions" }, { k: "98.1%", v: "success rate" }, { k: "2 FTE", v: "hours reclaimed" }],
  },
];

const TESTIMONIALS = [
  { quote: "Buildicy didn't hand us a website. They handed us a machine that books patients while we sleep.", name: "Dr. Priya Nair", role: "Founder, Halcyon Dental" },
  { quote: "The most considered team we've worked with. Every screen, every message, every automation had a reason.", name: "Marcus Hale", role: "Director, Luxe Homes" },
  { quote: "We stopped talking about tools and started talking about growth. That's the Buildicy difference.", name: "Elena Ruiz", role: "COO, FlowForge" },
];

const PROCESS = [
  { n: "I", t: "Diagnose", d: "We map your customer journey and find where revenue leaks." },
  { n: "II", t: "Design", d: "We architect the system — flows, voice, interfaces and data." },
  { n: "III", t: "Build", d: "We engineer, integrate and test every touchpoint end-to-end." },
  { n: "IV", t: "Scale", d: "We measure, refine and compound results month over month." },
];

/* ---------- Motion helpers ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .img-reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/* ---------- Page ---------- */
function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Metrics />
        <Services />
        <Work />
        <GrowthSystem />
        <Testimonials />
        <Process />
        <Profile />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-baseline gap-1 text-lg font-medium tracking-tight">
          Buildicy<span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary">
          <a href="#services" className="link-line hover:text-foreground">Services</a>
          <a href="#work" className="link-line hover:text-foreground">Work</a>
          <a href="#process" className="link-line hover:text-foreground">Process</a>
          <a href="#profile" className="link-line hover:text-foreground">Studio</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-ink-foreground transition-colors hover:bg-primary">
          Start a project <Arrow className="transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-6 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-10 flex items-center gap-3 text-muted-foreground">
          <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
          <span className="eyebrow">AI Growth Studio — Booking Q1 2027</span>
        </div>
        <h1 className="reveal font-display text-[clamp(3.2rem,9vw,9.5rem)] leading-[0.92] tracking-[-0.02em]">
          Turn Your Business
          <br />
          Into a <em className="text-primary">Growth</em> System.
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="reveal max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-7">
            We build AI-powered funnels, intelligent receptionists and digital systems that help businesses capture, qualify and convert more customers.
          </p>
          <div className="reveal flex flex-wrap gap-3 md:col-span-12 md:col-start-7 md:-mt-4">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-ink">
              Explore Our Work <Arrow className="transition-transform group-hover:rotate-45" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-7 py-4 transition-colors hover:border-foreground">
              Start a Conversation
            </a>
          </div>
        </div>
        <div className="img-reveal mt-20 overflow-hidden">
          <img src={hero} alt="Buildicy AI sales funnel dashboard on laptop and phone" width={1600} height={1104} className="aspect-[16/9] w-full object-cover" />
        </div>
        <div className="flex justify-between border-b border-border py-4 text-muted-foreground">
          <span className="eyebrow">Fig. 01 — Reddie AI Funnel</span>
          <span className="eyebrow">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Trusted clients" className="overflow-hidden py-14">
      <p className="eyebrow mb-8 text-center text-muted-foreground">Trusted by ambitious operators</p>
      <div className="marquee flex w-max gap-16 whitespace-nowrap">
        {list.map((c, i) => (
          <span key={i} className="font-display text-3xl text-foreground/40 md:text-4xl">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ idx, label, title }: { idx: string; label: string; title: React.ReactNode }) {
  return (
    <div className="mb-16 grid gap-6 md:grid-cols-12">
      <div className="reveal eyebrow text-muted-foreground md:col-span-3">
        <span className="text-primary">{idx}</span> — {label}
      </div>
      <h2 className="reveal font-display text-5xl leading-[1] tracking-tight md:col-span-9 md:text-7xl">{title}</h2>
    </div>
  );
}

function Metrics() {
  return (
    <section className="border-y border-border px-6 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div key={m.label} className={`reveal py-12 md:py-16 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} border-border px-4 md:px-8`}>
            <div className="font-display text-6xl tracking-tight md:text-7xl">
              <Counter value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
            </div>
            <p className="eyebrow mt-3 text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead idx="01" label="Capabilities" title={<>Four disciplines.<br /><em className="text-muted-foreground">One growth engine.</em></>} />
        <ul className="border-t border-border">
          {SERVICES.map((s) => (
            <li key={s.n} className="reveal group grid cursor-default gap-4 border-b border-border py-10 transition-colors hover:bg-card md:grid-cols-12 md:items-baseline md:px-4">
              <span className="eyebrow text-primary md:col-span-1">{s.n}</span>
              <h3 className="font-display text-4xl transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-5xl">{s.title}</h3>
              <p className="max-w-md text-muted-foreground md:col-span-5">{s.body}</p>
              <Arrow className="hidden h-6 w-6 text-primary opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100 md:col-span-1 md:block md:justify-self-end" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-ink px-6 py-28 text-ink-foreground md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid gap-6 md:grid-cols-12">
          <div className="reveal eyebrow text-ink-muted md:col-span-3">
            <span className="text-primary-soft">02</span> — Selected work
          </div>
          <h2 className="reveal font-display text-5xl leading-[1] tracking-tight md:col-span-9 md:text-7xl">
            Systems that moved the <em className="text-primary-soft">numbers.</em>
          </h2>
        </div>
        <div className="space-y-32">
          {CASES.map((c, i) => (
            <CaseStudy key={c.client} c={c} flip={i % 2 === 1} n={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ c, flip, n }: { c: (typeof CASES)[number]; flip: boolean; n: number }) {
  const steps = [
    ["Problem", c.problem],
    ["Strategy", c.strategy],
    ["What we built", c.built],
  ];
  return (
    <article className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className={`group md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="img-reveal overflow-hidden">
          <img src={c.img} alt={`${c.client} project mockup`} width={c.w} height={c.h} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
        </div>
        <div className="mt-4 flex justify-between text-ink-muted">
          <span className="eyebrow">Case 0{n} — {c.tag}</span>
          <span className="eyebrow">{c.year}</span>
        </div>
      </div>
      <div className={`flex flex-col justify-between md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div>
          <h3 className="reveal font-display text-5xl md:text-6xl">{c.client}</h3>
          <dl className="mt-10 space-y-6">
            {steps.map(([k, v]) => (
              <div key={k} className="reveal grid grid-cols-[7rem_1fr] gap-4 border-t border-ink-foreground/15 pt-5">
                <dt className="eyebrow pt-1 text-primary-soft">{k}</dt>
                <dd className="leading-relaxed text-ink-foreground/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal mt-10 border-t border-ink-foreground/15 pt-6">
          <p className="eyebrow mb-5 text-primary-soft">Result</p>
          <div className="grid grid-cols-3 gap-4">
            {c.result.map((r) => (
              <div key={r.v}>
                <div className="font-display text-4xl md:text-5xl">{r.k}</div>
                <div className="mt-1 text-xs text-ink-muted">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function GrowthSystem() {
  const nodes = [
    { t: "Attract", d: "Ads · SEO · Content" },
    { t: "Capture", d: "AI funnels · Forms" },
    { t: "Qualify", d: "AI receptionist · Scoring" },
    { t: "Convert", d: "Booking · Follow-up" },
    { t: "Retain", d: "Automation · CRM" },
  ];
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead idx="03" label="The Buildicy system" title={<>Every lead, <em className="text-primary">accounted for.</em></>} />
        <div className="reveal relative border border-border bg-card p-6 md:p-12">
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px] opacity-50" aria-hidden />
          <ol className="relative grid gap-4 md:grid-cols-5 md:gap-0">
            {nodes.map((n, i) => (
              <li key={n.t} className="group relative flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                <div className="flex w-full items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-foreground/20 bg-background font-mono text-sm transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    0{i + 1}
                  </span>
                  {i < nodes.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-primary to-border md:block" />}
                </div>
                <div>
                  <h3 className="font-display text-3xl">{n.t}</h3>
                  <p className="eyebrow mt-1 text-muted-foreground">{n.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="relative mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              ["Response time", "< 8 sec"],
              ["Lead coverage", "24 / 7 / 365"],
              ["Avg. conversion lift", "+47%"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-6">
                <p className="eyebrow text-muted-foreground">{k}</p>
                <p className="mt-2 font-display text-4xl">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i]!;
  return (
    <section className="border-y border-border px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
        <div className="eyebrow text-muted-foreground md:col-span-3">
          <span className="text-primary">04</span> — In their words
        </div>
        <figure className="md:col-span-9">
          <blockquote key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700 font-display text-4xl leading-[1.1] tracking-tight md:text-6xl">
            <span className="text-primary">“</span>
            {t.quote}
            <span className="text-primary">”</span>
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, j) => (
                <button key={j} role="tab" aria-selected={i === j} aria-label={`Testimonial ${j + 1}`} onClick={() => setI(j)} className={`h-1 rounded-full transition-all ${i === j ? "w-12 bg-primary" : "w-6 bg-foreground/20 hover:bg-foreground/40"}`} />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead idx="05" label="Process" title={<>Calm, deliberate, <em className="text-muted-foreground">relentless.</em></>} />
        <div className="grid gap-px bg-border md:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.n} className="reveal group bg-background p-8 transition-colors hover:bg-ink hover:text-ink-foreground">
              <span className="font-display text-6xl text-primary">{p.n}</span>
              <h3 className="mt-16 text-xl font-medium">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section id="profile" className="px-6 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 bg-primary-soft p-8 md:grid-cols-12 md:p-16">
        <div className="md:col-span-7">
          <p className="eyebrow text-accent-foreground">06 — Studio</p>
          <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl">Buildicy Company Profile</h2>
          <p className="mt-6 max-w-md text-accent-foreground/80">
            Our capabilities, case studies, engagement models and team — in one 24-page document for your stakeholders.
          </p>
          <a href="/buildicy-company-profile.pdf" download className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-ink-foreground transition-colors hover:bg-primary">
            Download profile <span className="font-mono text-xs opacity-60">PDF</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M12 4v14m-6-6 6 6 6-6M5 21h14" /></svg>
          </a>
        </div>
        <div className="relative md:col-span-5" aria-hidden>
          <div className="mx-auto aspect-[3/4] w-56 rotate-[-6deg] bg-ink p-6 text-ink-foreground shadow-2xl transition-transform duration-700 hover:rotate-0 md:w-64">
            <div className="flex h-full flex-col justify-between">
              <span className="text-sm">Buildicy<span className="text-primary-soft">.</span></span>
              <div>
                <p className="font-display text-4xl leading-none">Company<br />Profile</p>
                <p className="eyebrow mt-4 text-ink-muted">Edition 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="bg-ink px-6 py-32 text-ink-foreground md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <p className="reveal eyebrow text-ink-muted">Let's talk</p>
        <h2 className="reveal mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
          Ready to build your <em className="text-primary-soft">growth system?</em>
        </h2>
        <div className="reveal mt-16 flex flex-wrap items-center gap-6">
          <a href="mailto:hello@buildicy.com" className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-lg text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink">
            Start a Conversation <Arrow className="transition-transform group-hover:rotate-45" />
          </a>
          <a href="mailto:hello@buildicy.com" className="link-line text-lg text-ink-foreground/80">hello@buildicy.com</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 text-ink-muted md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-4 border-t border-ink-foreground/15 pt-8 text-sm">
        <span>© 2026 Buildicy Studio</span>
        <div className="flex gap-6">
          <a href="#" className="link-line hover:text-ink-foreground">LinkedIn</a>
          <a href="#" className="link-line hover:text-ink-foreground">Instagram</a>
          <a href="#" className="link-line hover:text-ink-foreground">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
