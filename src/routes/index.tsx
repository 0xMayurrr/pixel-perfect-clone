import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
/* Real Photography Project Thumbnails */
const CASE_THUMBS: Record<string, React.ReactNode> = {
  "markeee": (
    <img
      src="/thumbnails/markeee.jpg"
      alt="Markeee AI Marketing Platform Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "bizbrain": (
    <img
      src="/thumbnails/bizbrain.jpg"
      alt="BizBrain AI CRM Executive Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "growzo": (
    <img
      src="/thumbnails/growzo.jpg"
      alt="Growzo AI Voice Sales Studio Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "vibestay": (
    <img
      src="/thumbnails/vibestay.jpg"
      alt="Vibestay Luxury Resort Hospitality"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "campus-aid-buddy": (
    <img
      src="/thumbnails/campus-aid-buddy.jpg"
      alt="Campus Aid Buddy Student Laptop Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "tuition-os": (
    <img
      src="/thumbnails/tuition-os.jpg"
      alt="Tuition OS Classroom Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "clientsync-os": (
    <img
      src="/thumbnails/clientsync-os.jpg"
      alt="ClientSync OS Team Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "kindred": (
    <img
      src="/thumbnails/kindred.jpg"
      alt="Kindred Community Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
  "rs-technologies": (
    <img
      src="/thumbnails/rs-technologies.jpg"
      alt="RS Technologies Digital Agency Workspace"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ),
};

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

const METRICS: { value: number; suffix: string; prefix?: string; label: string; decimals?: number }[] = [
  { prefix: "$", value: 7.7, suffix: "M+", label: "Client revenue generated", decimals: 1 },
  { value: 24.8, suffix: "K+", label: "Monthly automated tasks", decimals: 1 },
  { value: 100, suffix: "%", label: "Verified ROI on systems" },
  { value: 6, suffix: "+", label: "Enterprise systems deployed" },
];

const SERVICES = [
  { n: "01", title: "AI Funnels", body: "Conversion architecture that turns cold traffic into booked calls — landing pages, qualification flows and AI-driven follow-up." },
  { n: "02", title: "AI Receptionists", body: "Voice and chat agents that answer every enquiry, book appointments and hand off qualified leads — around the clock." },
  { n: "03", title: "Automation", body: "Your CRM, calendar, inbox and billing connected into one quiet machine that removes the busywork." },
  { n: "04", title: "Digital Products", body: "Custom dashboards, portals and web apps designed and engineered to the standard of the brands you admire." },
];

const CASES = [
  {
    id: "markeee",
    category: "saas",
    client: "Markeee",
    url: "",
    tag: "AI Marketing Automation",
    year: "2025",
    summary: "AI-powered marketing platform that streamlines lead generation, engagement, and conversion workflows.",
    challenge: "Businesses were manually managing repetitive marketing tasks across disconnected tools, losing time and leads.",
    solution: "Built a unified AI marketing platform with automated workflows, lead management, and conversion-focused landing pages.",
    stack: ["AI Workflow Engine", "Lead Management", "Marketing Automation", "Campaign AI"],
    result: [
      { k: "AI", v: "Powered Workflows" },
      { k: "100%", v: "Automated Campaigns" },
      { k: "3×", v: "Faster Lead Response" },
    ],
  },
  {
    id: "bizbrain",
    category: "saas",
    client: "BizBrain",
    url: "",
    tag: "AI CRM Platform",
    year: "2025",
    summary: "AI-powered CRM unifying customer management, sales workflows, and business operations in one platform.",
    challenge: "Organizations struggled with fragmented CRM tools and lacked intelligent automation for customer and sales data.",
    solution: "Centralized AI CRM with sales workflow automation and intelligent business operations.",
    stack: ["AI CRM Engine", "Sales Automation", "Lead Management", "Business Process Automation"],
    result: [
      { k: "360°", v: "Customer View" },
      { k: "AI", v: "Sales Automation" },
      { k: "−60%", v: "Manual CRM Work" },
    ],
  },
  {
    id: "growzo",
    category: "ai-voice",
    client: "GrowZO",
    url: "",
    tag: "AI Cold Calling & Sales",
    year: "2025",
    summary: "AI-powered cold-calling platform that automates outbound sales calls and scales lead outreach without manual effort.",
    challenge: "Sales teams were bottlenecked by manual cold calling, limiting outreach volume and lead conversion rates.",
    solution: "Built an AI voice agent that handles outbound calls, engages leads with natural conversations, and automates the entire outreach workflow.",
    stack: ["Voice AI", "Outbound Call Automation", "Lead Outreach Engine", "Sales Workflow AI"],
    result: [
      { k: "10×", v: "Outreach Volume" },
      { k: "24/7", v: "Automated Calling" },
      { k: "−80%", v: "Manual Sales Effort" },
    ],
  },
  {
    id: "vibestay",
    category: "platform",
    client: "VibeStay",
    url: "",
    tag: "Hospitality Digital Platform",
    year: "2025",
    summary: "Hospitality-focused platform that reimagines how users discover and interact with stay and accommodation experiences.",
    challenge: "Existing hospitality platforms offered generic, disconnected experiences that failed to engage modern travellers.",
    solution: "Designed a modern hospitality digital platform with a seamless UX for discovering and booking accommodation experiences.",
    stack: ["React", "Hospitality API", "UX Design System", "Booking Engine"],
    result: [
      { k: "Modern", v: "Hospitality UX" },
      { k: "Seamless", v: "Discovery Flow" },
      { k: "+65%", v: "User Engagement" },
    ],
  },
  {
    id: "campus-aid-buddy",
    category: "platform",
    client: "Campus Aid Buddy",
    url: "",
    tag: "Student Campus Platform",
    year: "2024",
    summary: "Student-focused digital platform centralizing academic resources, campus activities, and student support.",
    challenge: "College students struggled to navigate fragmented campus resources and lacked a single digital hub for their needs.",
    solution: "Built a centralized student platform with resource access, activity management, and campus navigation tools.",
    stack: ["React", "Student Portal", "Resource Management", "Campus API"],
    result: [
      { k: "1 Hub", v: "All Campus Needs" },
      { k: "+70%", v: "Resource Accessibility" },
      { k: "EdTech", v: "Student Experience" },
    ],
  },
  {
    id: "tuition-os",
    category: "saas",
    client: "Tuition OS",
    url: "",
    tag: "Education Management SaaS",
    year: "2024",
    summary: "Digital management platform that centralizes student management, academic operations, and admin workflows for tuition centres.",
    challenge: "Tuition institutions relied on manual processes and disconnected tools for student and academic management.",
    solution: "Built a centralized SaaS platform with student management, communication, and automated administrative workflows.",
    stack: ["SaaS Platform", "Student Management", "Academic Workflows", "Admin Automation"],
    result: [
      { k: "100%", v: "Centralized Ops" },
      { k: "−65%", v: "Admin Manual Work" },
      { k: "SaaS", v: "Education Management" },
    ],
  },
  {
    id: "clientsync-os",
    category: "saas",
    client: "ClientSync OS",
    url: "",
    tag: "Client Management Platform",
    year: "2024",
    summary: "Client management and business operations platform that organizes client info, communication, and workflows in one place.",
    challenge: "Organizations managed client relationships across fragmented tools, causing miscommunication and lost opportunities.",
    solution: "Built a unified client management OS with centralized communication, workflow coordination, and business activity tracking.",
    stack: ["CRM Engine", "Client Portal", "Workflow Management", "Communication Hub"],
    result: [
      { k: "360°", v: "Client Visibility" },
      { k: "−50%", v: "Fragmented Workflows" },
      { k: "Unified", v: "Business Operations" },
    ],
  },
  {
    id: "kindred",
    category: "platform",
    client: "Kindred",
    url: "",
    tag: "Community Digital Platform",
    year: "2024",
    summary: "Community-focused digital platform built to create meaningful connections and personalized user experiences.",
    challenge: "Existing community platforms felt generic and failed to foster genuine, meaningful user connections.",
    solution: "Designed a modern community platform with personalized interaction flows and a seamless digital experience.",
    stack: ["React", "Community Engine", "Personalization Layer", "UX Design System"],
    result: [
      { k: "Modern", v: "Community UX" },
      { k: "+80%", v: "User Retention" },
      { k: "Meaningful", v: "Connections" },
    ],
  },
  {
    id: "rs-technologies",
    category: "platform",
    client: "RS Technologies",
    url: "",
    tag: "Technology Business Website",
    year: "2024",
    summary: "Professional technology business website showcasing services, capabilities, and solutions with a modern digital presence.",
    challenge: "RS Technologies lacked a professional digital presence that accurately represented their capabilities and services.",
    solution: "Designed and built a modern business website with clear service presentation, brand identity, and professional UX.",
    stack: ["React", "Web Design", "Brand Identity", "CMS"],
    result: [
      { k: "Modern", v: "Digital Presence" },
      { k: "Pro", v: "Brand Identity" },
      { k: "+90%", v: "Online Credibility" },
    ],
  },
];

const TESTIMONIALS = [
  { quote: "Buildicy didn't hand us a website. They handed us a machine that books patients while we sleep.", name: "Dr. Priya Nair", role: "Founder, Halcyon Dental" },
  { quote: "The most considered team we've worked with. Every screen, every message, every automation had a reason.", name: "Marcus Hale", role: "Director, Luxe Homes" },
  { quote: "We stopped talking about tools and started talking about growth. That's the Buildicy difference.", name: "Elena Ruiz", role: "COO, FlowForge" },
];

const PROCESS = [
  { n: "I", t: "Discover", d: "We map your customer journey and find where revenue leaks." },
  { n: "II", t: "Strategy", d: "We architect the system — flows, voice, interfaces and data." },
  { n: "III", t: "Build", d: "We engineer, integrate and test every touchpoint end-to-end." },
  { n: "IV", t: "Launch", d: "We deploy the system into your live operational environment." },
  { n: "V", t: "Optimize", d: "We measure, refine and compound results month over month." },
];

/* ---------- Motion helpers ---------- */
function useReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: isMobile ? "0px" : "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-zoom, .reveal-left, .reveal-right, .reveal-scale, .img-reveal, .word-inner, .stagger-child").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Counter({ value, suffix, prefix = "", decimals = 0 }: { value: number; suffix: string; prefix?: string; decimals?: number }) {
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
      {prefix}{n.toFixed(decimals)}
      <span className="text-purple-600">{suffix}</span>
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

/* Mobile-only: static globe inside hero */
function MobileHeroGlobe() {
  return (
    <div className="lg:hidden w-full flex justify-center mt-10 mb-2">
      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22)_0%,transparent_70%)] rounded-full" />
        <WebGLParticleGlobe />
      </div>
    </div>
  );
}

function FloatingScrollGlobe() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [explodeVal, setExplodeVal] = useState(0);
  const burstedRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    let animationFrameId: number;
    let targetX = 320, targetY = 0, targetScale = 1.0, targetRotate = 10, targetOpacity = 0.95, targetExplode = 0.0;
    let currX = 320, currY = 0, currScale = 1.0, currRotate = 10, currOpacity = 0.95, currExplode = 0.0;

    const onScroll = () => {
      if (window.innerWidth < 1024) return;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const totalScrollable = document.documentElement.scrollHeight - viewportH;
      if (totalScrollable <= 0) return;
      const isTablet = window.innerWidth < 1280;
      const offsetX = isTablet ? window.innerWidth * 0.22 : Math.min(window.innerWidth * 0.26, 400);
      const sectionNodes = [
        { el: document.getElementById("top"), side: "right" },
        { el: document.getElementById("services"), side: "left" },
        { el: document.getElementById("work"), side: "right" },
        { el: document.getElementById("architecture"), side: "left" },
        { el: document.getElementById("process"), side: "right" },
        { el: document.getElementById("profile"), side: "left" },
        { el: document.getElementById("contact"), side: "right" },
      ];
      const viewCenter = scrollY + viewportH / 2;
      let matchedIdx = 0, minDistance = Infinity;
      sectionNodes.forEach((sec, i) => {
        if (!sec.el) return;
        const rect = sec.el.getBoundingClientRect();
        const dist = Math.abs(viewCenter - (scrollY + rect.top + rect.height / 2));
        if (dist < minDistance) { minDistance = dist; matchedIdx = i; }
      });
      const footerEl = document.querySelector("footer");
      const isAtFooter = footerEl ? footerEl.getBoundingClientRect().top < viewportH * 0.85 : false;
      if (isAtFooter) {
        if (!burstedRef.current) {
          burstedRef.current = true;
        }
        targetScale = 0.01; targetOpacity = 0; targetExplode = 1.0;
      } else {
        burstedRef.current = false; targetExplode = 0.0;
        const activeSide = sectionNodes[matchedIdx]?.side || "right";
        targetX = activeSide === "right" ? offsetX : -offsetX;
        targetScale = 1.0; targetOpacity = 0.95;
        targetY = Math.sin((scrollY / totalScrollable) * Math.PI * 3) * 15;
        targetRotate = activeSide === "right" ? 12 : -12;
      }
    };
    const animateLoop = () => {
      const lerpFactor = currExplode > 0.05 ? 0.12 : 0.065;
      currX += (targetX - currX) * lerpFactor;
      currY += (targetY - currY) * lerpFactor;
      currScale += (targetScale - currScale) * lerpFactor;
      currRotate += (targetRotate - currRotate) * lerpFactor;
      currOpacity += (targetOpacity - currOpacity) * lerpFactor;
      currExplode += (targetExplode - currExplode) * lerpFactor;
      setExplodeVal(currExplode);
      if (globeContainerRef.current) {
        globeContainerRef.current.style.transform = `translate3d(${currX}px, ${currY}px, 0) scale(${currScale}) rotate(${currRotate}deg)`;
        globeContainerRef.current.style.opacity = `${currOpacity}`;
      }
      animationFrameId = requestAnimationFrame(animateLoop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll(); animateLoop();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:flex fixed inset-0 pointer-events-none z-[60] items-center justify-center overflow-hidden">
        <div
          id="globe-wrapper"
          ref={globeContainerRef}
          className="w-[400px] h-[400px] lg:w-[480px] lg:h-[480px] pointer-events-none lg:pointer-events-auto"
          style={{ willChange: "transform, opacity", transition: "opacity 0.3s ease" }}
        >
          <WebGLParticleGlobe explodeProgress={explodeVal} />
        </div>
      </div>
    </>
  );
}

function Index() {
  useReveal();

  return (
    <div className="bg-background text-foreground relative">
      <Nav />
      <FloatingScrollGlobe />
      <main className="relative">
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-transparent backdrop-blur-md text-slate-900">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Buildicy Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">Buildicy</span>
            <span className="h-2 w-2 rounded-full bg-purple-600 shadow-[0_0_12px_#9333ea] animate-pulse" />
          </div>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex" aria-label="Primary">
          <a href="#services" className="link-line hover:text-slate-900 transition-colors">Services</a>
          <a href="#work" className="link-line hover:text-slate-900 transition-colors">Work</a>
          <a href="#architecture" className="link-line hover:text-slate-900 transition-colors">Architecture</a>
          <a href="#process" className="link-line hover:text-slate-900 transition-colors">Process</a>
          <a href="#profile" className="link-line hover:text-slate-900 transition-colors">Studio</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-600 hover:shadow-lg">
          Start a project <Arrow className="transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </header>
  );
}

const SAMPLE_ARCS = [
  { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: "#a855f7" },
  { order: 2, startLat: 28.6139, startLng: 77.209, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: "#c084fc" },
  { order: 3, startLat: 35.6762, startLng: 139.6503, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.4, color: "#8b5cf6" },
  { order: 4, startLat: -33.8688, startLng: 151.2093, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.5, color: "#6366f1" },
  { order: 5, startLat: 22.3193, startLng: 114.1694, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.3, color: "#a855f7" },
  { order: 6, startLat: -23.5505, startLng: -46.6333, endLat: 52.52, endLng: 13.405, arcAlt: 0.5, color: "#c084fc" },
  { order: 7, startLat: 1.3521, startLng: 103.8198, endLat: 40.7128, endLng: -74.006, arcAlt: 0.4, color: "#8b5cf6" },
  { order: 8, startLat: 48.8566, startLng: 2.3522, endLat: 28.6139, endLng: 77.209, arcAlt: 0.3, color: "#6366f1" },
  { order: 9, startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5, color: "#a855f7" },
  { order: 10, startLat: 48.8566, startLng: 2.3522, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.6, color: "#c084fc" },
  { order: 11, startLat: 55.7558, startLng: 37.6173, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: "#8b5cf6" },
  { order: 12, startLat: 19.4326, startLng: -99.1332, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.4, color: "#6366f1" },
  { order: 13, startLat: 1.3521, startLng: 103.8198, endLat: -23.5505, endLng: -46.6333, arcAlt: 0.6, color: "#a855f7" },
  { order: 14, startLat: 28.6139, startLng: 77.209, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: "#c084fc" },
];

interface WebGLParticleGlobeProps {
  explodeProgress?: number;
}

function WebGLParticleGlobe({ explodeProgress = 0 }: WebGLParticleGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const explodeRef = useRef(explodeProgress);

  useEffect(() => {
    explodeRef.current = explodeProgress;
  }, [explodeProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // Clear any existing canvas before mounting (guards against StrictMode double-invoke)
    while (container.firstChild) container.removeChild(container.firstChild);

    Promise.all([import("three"), import("three-globe")]).then(([THREE, { default: ThreeGlobe }]) => {
      if (cancelled) return;
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
      camera.position.set(0, 0, 310);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xc084fc, 1.8);
      scene.add(ambientLight);
      const dLightLeft = new THREE.DirectionalLight(0xffffff, 1.8);
      dLightLeft.position.set(-400, 200, 200);
      scene.add(dLightLeft);
      const dLightTop = new THREE.DirectionalLight(0xffffff, 1.4);
      dLightTop.position.set(-200, 500, 200);
      scene.add(dLightTop);
      const pointLight = new THREE.PointLight(0xe879f9, 2.0);
      pointLight.position.set(200, 300, 400);
      scene.add(pointLight);

      const globe = new ThreeGlobe()
        .showAtmosphere(true)
        .atmosphereColor("#c084fc")
        .atmosphereAltitude(0.22)
        .arcsData(SAMPLE_ARCS)
        .arcColor((e: any) => e.color)
        .arcAltitude((e: any) => e.arcAlt)
        .arcStroke(0.8)
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashInitialGap((e: any) => e.order * 1)
        .arcDashAnimateTime(1000);

      const globeMaterial = globe.globeMaterial() as any;
      if (globeMaterial) {
        globeMaterial.color = new THREE.Color("#4c1d95");
        globeMaterial.emissive = new THREE.Color("#2e1065");
        globeMaterial.emissiveIntensity = 0.5;
        globeMaterial.shininess = 0.9;
      }

      fetch("/countries.json")
        .then((res) => res.json())
        .then((countries) => {
          if (countries?.features) {
            globe
              .hexPolygonsData(countries.features)
              .hexPolygonResolution(3)
              .hexPolygonMargin(0.3)
              .hexPolygonAltitude(0.01)
              .hexPolygonColor(() => "rgba(255,255,255,1)");
          }
        })
        .catch(() => {});

      const rings = SAMPLE_ARCS.flatMap((arc) => [
        { lat: arc.startLat, lng: arc.startLng, color: arc.color },
        { lat: arc.endLat, lng: arc.endLng, color: arc.color },
      ]);
      globe.ringsData(rings).ringColor((e: any) => e.color).ringMaxRadius(5).ringPropagationSpeed(3.5).ringRepeatPeriod(700);

      const globeGroup = new THREE.Group();
      globeGroup.add(globe);
      scene.add(globeGroup);

      let isDragging = false;
      let prevX = 0;
      let prevY = 0;
      let userRotX = 0;
      let userRotY = 0;

      const onPointerDown = (e: PointerEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        userRotY += (e.clientX - prevX) * 0.005;
        userRotX += (e.clientY - prevY) * 0.005;
        prevX = e.clientX; prevY = e.clientY;
      };
      const onPointerUp = () => { isDragging = false; };

      container.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.004;
        const exp = explodeRef.current;
        const s = 1.0 + exp * 2.5;
        globeGroup.scale.set(s, s, s);
        globe.rotation.y = userRotY + t;
        globe.rotation.x = userRotX + Math.sin(t * 0.3) * 0.08;
        renderer.render(scene, camera);
      }
      animate();

      const handleResize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        cancelAnimationFrame(animId);
        container.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("resize", handleResize);
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        renderer.dispose();
      };
    });

    return () => { cancelled = true; cleanup?.(); cancelAnimationFrame(animId); };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.35)_0%,rgba(168,85,247,0.18)_55%,transparent_80%)] rounded-full filter blur-2xl pointer-events-none" />
      <div ref={mountRef} className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

function TypewriterWord() {
  const words = ["software.", "websites.", "funnels.", "systems."];
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length]!;
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <span className="relative inline-flex items-center px-4 py-1.5 rounded-xl bg-purple-600 text-white font-extrabold shadow-md shadow-purple-600/20 transition-all duration-300">
      <span>{displayed}</span>
      <span className="inline-block w-1 h-6 bg-purple-200 ml-1.5 rounded-full animate-pulse" />
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] w-full bg-[#faf8f5] text-slate-900 flex flex-col justify-center overflow-hidden px-6 pt-36 pb-24 md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.10)_0%,rgba(99,102,241,0.03)_40%,#faf8f5_75%)] pointer-events-none" />
      <div className="cinematic-noise opacity-30" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 order-1 flex flex-col justify-center items-start text-left max-w-3xl pl-4 sm:pl-8 lg:pl-12 mt-8 lg:mt-24">
          <h1 className="reveal-zoom font-sans text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.15] tracking-tight text-slate-900 font-extrabold text-left">
            <span className="block text-slate-900 mb-1">We build <span className="text-purple-700">growth systems.</span></span>
            <span className="inline-flex items-center flex-wrap gap-x-3.5 gap-y-2 text-slate-400 mt-1">
              <span>Not just</span>
              <TypewriterWord />
            </span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-slate-600 text-base md:text-xl leading-relaxed font-normal text-left">
            We engineer AI funnels, intelligent receptionists, and operational platforms that help businesses capture, qualify, and convert more customers.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-slate-900 text-white px-6 py-3.5 text-sm font-semibold transition-all hover:bg-purple-700 hover:shadow-lg hover:scale-105">
              Explore The Systems
            </a>
            <a href="#contact" className="rounded-full border border-purple-300 bg-white px-6 py-3.5 text-sm font-semibold text-purple-900 transition-all hover:bg-purple-50 hover:border-purple-400 shadow-sm">
              Initiate Project
            </a>
          </div>
          <MobileHeroGlobe />
        </div>
        <div className="lg:col-span-5 order-2 hidden lg:block min-h-[480px]" aria-hidden />
      </div>
    </section>
  );
}

const CLIENT_LOGOS: Record<string, React.ReactNode> = {
  "Northwind": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <polygon points="60,4 68,18 84,18 72,27 76,42 60,33 44,42 48,27 36,18 52,18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="60" y="38" textAnchor="middle" fontSize="9" fontFamily="serif" fontWeight="700" fill="currentColor" letterSpacing="2">NORTHWIND</text>
    </svg>
  ),
  "Halcyon Dental": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <path d="M18 8 C14 8 10 12 10 18 C10 26 18 32 18 32 C18 32 26 26 26 18 C26 12 22 8 18 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <text x="34" y="24" fontSize="10" fontFamily="sans-serif" fontWeight="700" fill="currentColor" letterSpacing="1">HALCYON</text>
      <text x="34" y="34" fontSize="7" fontFamily="sans-serif" fill="currentColor" letterSpacing="2" opacity="0.6">DENTAL</text>
    </svg>
  ),
  "Luxe Homes": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <path d="M14 28 L14 18 L20 12 L26 18 L26 28Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M10 20 L20 10 L30 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="36" y="24" fontSize="10" fontFamily="serif" fontWeight="700" fill="currentColor" letterSpacing="1">LUXE</text>
      <text x="36" y="34" fontSize="7" fontFamily="serif" fill="currentColor" letterSpacing="3" opacity="0.6">HOMES</text>
    </svg>
  ),
  "Arden & Co.": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <text x="20" y="24" textAnchor="middle" fontSize="9" fontFamily="serif" fontWeight="700" fill="currentColor">A</text>
      <text x="38" y="24" fontSize="10" fontFamily="serif" fontWeight="700" fill="currentColor" letterSpacing="1">ARDEN</text>
      <text x="38" y="34" fontSize="7" fontFamily="serif" fill="currentColor" letterSpacing="2" opacity="0.6">&amp; CO.</text>
    </svg>
  ),
  "FlowForge": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <path d="M10 20 Q16 12 22 20 Q28 28 34 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="20" r="3" fill="currentColor" />
      <text x="44" y="25" fontSize="11" fontFamily="sans-serif" fontWeight="800" fill="currentColor" letterSpacing="0.5">FlowForge</text>
    </svg>
  ),
  "Meridian Clinics": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <rect x="16" y="14" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="12" y="18" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <text x="36" y="22" fontSize="9" fontFamily="sans-serif" fontWeight="700" fill="currentColor" letterSpacing="0.5">MERIDIAN</text>
      <text x="36" y="32" fontSize="7" fontFamily="sans-serif" fill="currentColor" letterSpacing="2" opacity="0.6">CLINICS</text>
    </svg>
  ),
  "Oakline": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <path d="M20 30 L20 18 M20 18 C20 18 14 14 14 10 C14 10 20 12 20 18 M20 18 C20 18 26 14 26 10 C26 10 20 12 20 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="34" y="25" fontSize="12" fontFamily="serif" fontWeight="700" fill="currentColor" letterSpacing="1">Oakline</text>
    </svg>
  ),
  "Vesper Legal": (
    <svg viewBox="0 0 120 40" fill="none" className="w-36 h-14">
      <path d="M14 10 L20 30 L26 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="34" y="22" fontSize="10" fontFamily="serif" fontWeight="700" fill="currentColor" letterSpacing="1">VESPER</text>
      <text x="34" y="33" fontSize="7" fontFamily="serif" fill="currentColor" letterSpacing="2" opacity="0.6">LEGAL</text>
    </svg>
  ),
};

function Clients() {
  return (
    <section aria-label="Trusted clients" className="bg-[#1a1a1a] py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="reveal-zoom font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white text-center tracking-tight mb-16 md:mb-20">
          The operators that <span style={{ background: "linear-gradient(135deg,#b450f0,#8c28dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>trust us.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {CLIENTS.map((c, i) => (
            <div
              key={c}
              className="reveal group flex flex-col items-center justify-center gap-3 py-10 px-6 bg-[#1a1a1a] hover:bg-white/5 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-white/25 group-hover:text-white/70 transition-colors duration-300">
                {CLIENT_LOGOS[c]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-y border-slate-200 bg-[#faf8f5] px-6 md:px-10 text-slate-900">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div key={m.label} className={`reveal py-12 md:py-16 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} border-slate-200 px-4 md:px-8`} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="font-display text-6xl tracking-tight md:text-7xl font-extrabold text-slate-900">
              <Counter value={m.value} suffix={m.suffix} prefix={m.prefix ?? ""} decimals={m.decimals ?? 0} />
            </div>
            <p className="eyebrow mt-3 text-slate-500 font-semibold">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* SVG icons per service — morph/draw on hover */
const SERVICE_ICONS = [
  /* AI Funnels — funnel shape that fills */
  <svg key="funnel" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path className="origin-top transition-all duration-700 group-hover:stroke-white" strokeLinecap="round" d="M6 10h36l-14 16v10l-8-4V26L6 10z" />
    <circle cx="24" cy="38" r="3" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white scale-0 group-hover:scale-100 origin-center" />
  </svg>,
  /* AI Receptionists — headset that draws */
  <svg key="headset" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path strokeLinecap="round" d="M10 26v-4a14 14 0 0128 0v4" className="transition-all duration-500 group-hover:stroke-white" />
    <rect x="6" y="24" width="8" height="12" rx="3" className="transition-all duration-500 group-hover:fill-purple-300/30 group-hover:stroke-white" />
    <rect x="34" y="24" width="8" height="12" rx="3" className="transition-all duration-500 group-hover:fill-purple-300/30 group-hover:stroke-white" />
    <path strokeLinecap="round" d="M38 36v2a6 6 0 01-6 6h-4" className="transition-all duration-500 group-hover:stroke-white" />
  </svg>,
  /* Automation — circular arrows that spin */
  <svg key="auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path strokeLinecap="round" d="M40 24a16 16 0 01-27.3 11.3" className="transition-all duration-700 group-hover:stroke-white group-hover:rotate-180 origin-center" />
    <path strokeLinecap="round" d="M8 24a16 16 0 0127.3-11.3" className="transition-all duration-700 group-hover:stroke-white" />
    <path strokeLinecap="round" d="M40 16v8h-8" className="transition-all duration-500 group-hover:stroke-white" />
    <path strokeLinecap="round" d="M8 32v-8h8" className="transition-all duration-500 group-hover:stroke-white" />
  </svg>,
  /* Digital Products — screen with sparkle */
  <svg key="product" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <rect x="4" y="8" width="40" height="28" rx="3" className="transition-all duration-500 group-hover:stroke-white" />
    <path strokeLinecap="round" d="M16 44h16M24 36v8" className="transition-all duration-500 group-hover:stroke-white" />
    <path strokeLinecap="round" d="M18 20l4 4 8-8" className="transition-all duration-700 group-hover:stroke-white scale-0 group-hover:scale-100 origin-center" />
  </svg>,
];

function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="px-6 py-16 md:px-10 md:py-40 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
      /* Tell the globe to hide when any service is hovered */
      onMouseEnter={() => {
        const globe = document.getElementById("globe-wrapper");
        if (globe) globe.style.opacity = hoveredIdx !== null ? "0" : "";
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 order-1 hidden lg:block min-h-[480px]" aria-hidden />
          <div className="lg:col-span-7 order-2">
            <div className="mb-8">
              <h2 className="reveal-zoom font-display text-4xl leading-[1.05] tracking-tight md:text-6xl text-slate-900 font-bold">
                Four disciplines.<br />
                <em className="text-slate-500 font-normal italic">One growth engine.</em>
              </h2>
            </div>
            <ul className="border-t border-slate-200">
              {SERVICES.map((s, i) => (
                <li
                  key={s.n}
                  className="reveal group grid cursor-default gap-6 border-b border-slate-200 py-8 transition-all duration-500 md:grid-cols-12 md:items-center md:px-4"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onMouseEnter={() => {
                    setHoveredIdx(i);
                    const globe = document.getElementById("globe-wrapper");
                    if (globe) globe.style.transition = "opacity 0.4s ease, transform 0.4s ease";
                    if (globe) globe.style.opacity = "0";
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    const globe = document.getElementById("globe-wrapper");
                    if (globe) globe.style.opacity = "";
                  }}
                >
                  {/* Animated icon box — morphs on hover like escolhadigital */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl border border-purple-200 group-hover:border-purple-500 bg-white group-hover:bg-purple-600 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-[0_0_20px_rgba(140,40,220,0.4)] group-hover:scale-110 text-purple-500">
                      {SERVICE_ICONS[i]}
                    </div>
                  </div>
                  {/* Title slides right */}
                  <h3 className="font-display text-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-purple-700 md:col-span-4 md:text-4xl text-slate-900 font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-500 md:col-span-6 font-normal leading-relaxed md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [activeTab, setActiveTab] = useState<"all" | "saas" | "ai-voice" | "platform">("all");
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCase, setSelectedCase] = useState<(typeof CASES)[number] | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter cases based on active tab
  const filteredCases = CASES.filter((c) => {
    if (activeTab === "saas") return c.category === "saas";
    if (activeTab === "ai-voice") return c.category === "ai-voice";
    if (activeTab === "platform") return c.category === "platform";
    return true;
  });

  // Double the array for seamless infinite looping
  const carouselDeck = [...filteredCases, ...filteredCases];

  const handleScroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  // Drag interaction states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="work" className="bg-slate-50 py-16 md:py-36 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient radial aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.08)_0%,rgba(99,102,241,0.03)_50%,transparent_80%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-10 mb-6 md:mb-10">
        {/* Top Header Row (k-wu.com Playground Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-5 gap-4">
          <div>
            {/* Giant Editorial Title Inspired by k-wu.com */}
            <h2 className="reveal-zoom font-display text-[clamp(2rem,7vw,6.5rem)] font-extrabold tracking-tighter uppercase leading-[1.0] md:leading-[0.9] text-slate-900">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600">WORKS.</span>
            </h2>
          </div>
        </div>

      </div>

      {/* Horizontal Cards Showcase Track */}
      <div className="relative w-full">
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none z-10 bg-gradient-to-l from-slate-50 via-slate-50/85 to-transparent transition-opacity duration-700" />
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar px-4 md:px-12 py-4 cursor-grab active:cursor-grabbing select-none"
        >
          <div
            className={`flex gap-6 md:gap-8 w-max transition-all ${
              !isPaused
                ? direction === "left"
                  ? "animate-carousel-left"
                  : "animate-carousel-right"
                : ""
            }`}
          >
            {carouselDeck.map((c, idx) => (
              <CaseStudyCard
                key={`${c.id}-${idx}`}
                c={c}
                n={(idx % filteredCases.length) + 1}
                total={filteredCases.length}
                onSelect={() => setSelectedCase(c)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Progress & Helper Hint */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 border-t border-slate-200 pt-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span>Interactive Showcase • Drag or click cards to view full architecture</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{filteredCases.length} Systems Active</span>
          <span>•</span>
          <span className="text-emerald-500 font-semibold">100% Verified ROI</span>
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal c={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </section>
  );
}

function CaseStudyCard({
  c,
  n,
  total,
  onSelect,
}: {
  c: (typeof CASES)[number];
  n: number;
  total: number;
  onSelect: () => void;
}) {
  return (
    <article
      onClick={onSelect}
      className="group relative w-[300px] sm:w-[380px] lg:w-[440px] shrink-0 rounded-[20px] bg-white border border-slate-100 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(140,40,220,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#080808] transition-transform duration-700 ease-out group-hover:scale-105">
        {CASE_THUMBS[c.id]}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Tag pill */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            {c.tag}
          </span>
        </div>
        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-mono text-white/60">{c.year}</span>
        </div>
        {/* Bottom image overlay: client + metric */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <h3 className="font-display text-2xl font-extrabold text-white tracking-tight leading-tight">
            {c.client}
          </h3>
          {c.result[0] && (
            <div className="text-right">
              <div className="font-display text-xl font-black text-white">{c.result[0].k}</div>
              <div className="text-[9px] font-mono text-white/60 uppercase tracking-wider">{c.result[0].v}</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom content */}
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-2">{c.summary}</p>
        </div>
        <div className="shrink-0 w-9 h-9 rounded-full bg-slate-900 group-hover:bg-purple-600 transition-colors flex items-center justify-center shadow-sm">
          <Arrow className="text-white transition-transform group-hover:rotate-45" />
        </div>
      </div>

      {/* Bottom metrics strip */}
      <div className="px-5 pb-5 flex items-center gap-3">
        {c.result.slice(1).map((r) => (
          <div key={r.v} className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-center">
            <div className="font-display text-sm font-extrabold text-slate-900">{r.k}</div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wide mt-0.5">{r.v}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function CaseStudyModal({
  c,
  onClose,
}: {
  c: (typeof CASES)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-slate-200 p-6 md:p-10 text-slate-900 shadow-2xl no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center justify-center text-lg font-bold cursor-pointer shadow-sm z-10"
          aria-label="Close case study details"
        >
          ✕
        </button>

        {/* Modal Top Metadata */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
            {c.tag}
          </span>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            {c.year} Verified Case Study
          </span>
        </div>

        {/* Title & Client URL */}
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
          {c.client}
        </h2>


        {/* Thumbnail Feature */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808] mb-8">
          <div className="w-full max-h-[380px] overflow-hidden">{CASE_THUMBS[c.id]}</div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <h3 className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-2">
            Executive Summary
          </h3>
          <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed">
            {c.summary}
          </p>
        </div>

        {/* Verified Results Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
            Verified Business Impact & Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {c.result.map((r, i) => (
              <div
                key={r.v}
                className={`p-5 rounded-2xl border ${
                  i === 0
                    ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-200"
                    : "bg-white border-slate-200 text-slate-900 shadow-sm"
                }`}
              >
                <div className="font-display text-3xl md:text-4xl font-black">{r.k}</div>
                <div className={`text-xs font-mono mt-1 ${i === 0 ? "text-purple-200" : "text-slate-500"}`}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Problem & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100 shadow-sm">
            <h4 className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>⚡</span> Operational Problem
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              {c.challenge}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm">
            <h4 className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>✨</span> Buildicy Architecture
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              {c.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">
            Engineered Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span key={s} className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 shadow-sm px-3.5 py-1.5 rounded-xl">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg cursor-pointer"
          >
            Deploy Similar System Architecture <Arrow />
          </a>
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-500 hover:text-slate-900 font-semibold underline underline-offset-4 transition-colors cursor-pointer"
          >
            Close Preview (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}

function GrowthSystem() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      n: "01",
      title: "Attract Customers",
      subtitle: "High-Converting Pages",
      d: "Smart landing pages and funnels that turn your website traffic into warm, interested leads.",
      tags: ["Landing Pages", "Lead Capture", "Traffic"],
      metric: "More Qualified Leads",
    },
    {
      n: "02",
      title: "Qualify Instantly",
      subtitle: "Smart Filtering",
      d: "Interactive forms that automatically filter out bad leads and identify high-value prospects based on their budget.",
      tags: ["Smart Forms", "Lead Scoring", "Filtering"],
      metric: "Zero Wasted Time",
    },
    {
      n: "03",
      title: "24/7 AI Receptionist",
      subtitle: "Instant Responses",
      d: "Custom AI agents that answer customer questions and handle enquiries immediately, day or night.",
      tags: ["AI Chat", "Voice AI", "Instant Reply"],
      metric: "100% Enquiry Coverage",
    },
    {
      n: "04",
      title: "Automated Booking",
      subtitle: "Direct Scheduling",
      d: "Qualified leads are automatically booked straight into your team's calendar without any back-and-forth.",
      tags: ["Calendar Sync", "Easy Booking", "SMS Reminders"],
      metric: "More Appointments",
    },
    {
      n: "05",
      title: "Connected Operations",
      subtitle: "Zero Manual Work",
      d: "Everything syncs perfectly with your CRM and billing software, eliminating manual data entry for your staff.",
      tags: ["CRM Sync", "Automated Billing", "Smooth Ops"],
      metric: "Hours Saved Daily",
    },
  ];

  return (
    <section id="architecture" className="px-6 py-16 md:px-10 md:py-36 bg-[#faf8f5] text-slate-900 border-t border-slate-200 relative">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Spatial Slot for Floating Globe on LEFT */}
          <div className="lg:col-span-5 order-1 hidden lg:block sticky top-36 min-h-[480px]" aria-hidden />

          {/* Right Column: Clean Interactive Architecture Steps */}
          <div className="lg:col-span-7 order-2">
            {/* Header moved inside to avoid globe overlap */}
            <div className="mb-10">
              <h2 className="reveal-zoom font-display text-3xl leading-[1.05] tracking-tight md:text-6xl text-slate-900 font-bold">
                Autonomous growth pipeline. <em className="text-slate-500 font-normal italic">Engineered for scale.</em>
              </h2>
              <p className="reveal mt-4 text-slate-600 text-lg max-w-xl font-light leading-relaxed">
                How Buildicy connects intent capture, AI qualification, calendar booking, and CRM operations into one unified machine.
              </p>
            </div>
            
            <div className="space-y-3">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={s.n}
                    onClick={() => setActiveStep(idx)}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                    className={`reveal cursor-pointer rounded-2xl border p-4 md:p-6 transition-all duration-300 ${
                      isActive
                        ? "bg-white border-purple-400 shadow-[0_15px_40px_rgba(168,85,247,0.12)] ring-1 ring-purple-100 -translate-y-1"
                        : "bg-white border-slate-200 hover:border-purple-300 hover:bg-slate-50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                          isActive ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}>
                          STEP {s.n}
                        </span>
                        <div>
                          <h3 className={`font-display text-xl md:text-2xl font-bold transition-colors ${isActive ? "text-purple-900" : "text-slate-900"}`}>
                            {s.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-500">{s.subtitle}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-600 bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-lg">
                        {s.metric}
                      </span>
                    </div>
                    <div className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] mt-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <div className="overflow-hidden">
                        <div className="pt-4 border-t border-slate-100 space-y-4">
                          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">{s.d}</p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {s.tags.map((t) => (
                              <span key={t} className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-md shadow-sm">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-10">
          {[
            ["System Latency", "< 800ms", "Instant lead triage"],
            ["Availability", "99.98%", "24/7 autonomous operation"],
            ["Conversion Lift", "+47%", "Average client revenue growth"],
          ].map(([label, val, sub], i) => (
            <div key={label} className="reveal p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-purple-300 hover:-translate-y-1" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-mono text-xs text-purple-600 font-bold uppercase tracking-wider">{label}</p>
              <p className="font-display text-4xl font-extrabold text-slate-900 mt-2">{val}</p>
              <p className="text-xs text-slate-500 mt-1 font-light">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[i]!;
  return (
    <section className="border-y border-slate-200 bg-[#faf8f5] px-6 py-14 text-slate-900 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
        <figure className="md:col-span-12">
          <blockquote key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700 font-display text-2xl leading-[1.2] tracking-tight md:text-6xl text-slate-900 font-bold">
            <span className="text-purple-700">“</span>
            {t.quote}
            <span className="text-purple-700">”</span>
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-bold text-slate-900 text-lg">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, j) => (
                <button key={j} role="tab" aria-selected={i === j} aria-label={`Testimonial ${j + 1}`} onClick={() => setI(j)} className={`h-1.5 rounded-full transition-all ${i === j ? "w-12 bg-purple-600 shadow-md" : "w-6 bg-slate-300 hover:bg-slate-400"}`} />
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
    <section id="process" className="px-6 py-16 md:px-10 md:py-40 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content Column */}
          <div className="lg:col-span-7 order-1">
            <div className="mb-12">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl text-slate-900 font-bold">
                Calm, deliberate, <em className="text-slate-500 font-normal italic">relentless.</em>
              </h2>
            </div>
            <div className="grid gap-3 grid-cols-2 xl:grid-cols-3">
              {PROCESS.map((p, i) => (
                <div key={p.n} className="reveal group bg-white p-5 md:p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:bg-slate-900 hover:text-white" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-display text-5xl font-extrabold text-purple-600">{p.n}</span>
                  <h3 className="mt-8 text-2xl font-extrabold text-slate-900 group-hover:text-white">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-300 font-normal">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Spatial Slot for Floating Globe on RIGHT */}
          <div className="lg:col-span-5 order-2 hidden lg:block min-h-[480px]" aria-hidden />
        </div>
      </div>
    </section>
  );
}

const STUDIO_PDFS = [
  {
    id: "company-profile",
    title: "Company Profile",
    sub: "Main Studio Overview",
    tag: "Primary Deck",
    pages: "24 Pages",
    size: "4.2 MB",
    d: "Our core capabilities, AI architecture diagrams, client case studies, engagement models and team — compiled into a comprehensive studio profile.",
    file: "/buildicy-company-profile.pdf",
    isMain: true,
  },
  {
    id: "services-solutions",
    title: "Services & Solutions",
    sub: "What We Offer",
    tag: "Capabilities Guide",
    pages: "16 Pages",
    size: "2.8 MB",
    d: "Comprehensive breakdown of AI Funnels, Autonomous Voice Receptionists, CRM Automations, and Custom Web Applications.",
    file: "/buildicy-services-solutions.pdf",
  },
  {
    id: "case-studies",
    title: "Case Studies & Results",
    sub: "Proven Client Proof",
    tag: "ROI Breakdown",
    pages: "20 Pages",
    size: "3.5 MB",
    d: "Real performance metrics, conversion lifts, and deployment case studies across healthcare, SaaS, luxury, and platforms.",
    file: "/buildicy-case-studies.pdf",
  },
  {
    id: "how-we-work",
    title: "How We Work",
    sub: "Execution & Delivery",
    tag: "5-Phase Process",
    pages: "12 Pages",
    size: "1.9 MB",
    d: "Step-by-step engineering roadmap from initial intent discovery to live operational deployment and month-over-month optimization.",
    file: "/buildicy-how-we-work.pdf",
  },
  {
    id: "capabilities",
    title: "Capabilities & Specs",
    sub: "For Serious Prospects",
    tag: "Technical Specs",
    pages: "14 Pages",
    size: "2.4 MB",
    d: "In-depth system architecture blueprints, response time benchmarks (<800ms), data security standards, and API integration protocols.",
    file: "/buildicy-capabilities.pdf",
  },
  {
    id: "find-your-solution",
    title: "Find Your Solution",
    sub: "Problem-Based Guide",
    tag: "Decision Matrix",
    pages: "10 Pages",
    size: "1.8 MB",
    d: "Diagnostic guide mapping specific business revenue leaks to the exact AI funnel or automation infrastructure required.",
    file: "/buildicy-find-your-solution.pdf",
  },
];

function Profile() {
  const [activePdfModal, setActivePdfModal] = useState<boolean>(false);

  return (
    <section id="profile" className="px-6 py-16 md:px-10 md:py-36 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Buildicy.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg font-light leading-relaxed">
            See what we build, how we work, and how we can help your business transform into an automated growth machine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Spatial Slot for Floating Globe on LEFT */}
          <div className="lg:col-span-5 order-1 hidden lg:block sticky top-36 min-h-[440px]" aria-hidden />

          {/* Right Content Column: Single Download Card */}
          <div className="lg:col-span-7 order-2 flex justify-center lg:justify-start">
            <div
              onClick={() => setActivePdfModal(true)}
              className="reveal w-full max-w-2xl bg-white p-8 md:p-12 rounded-3xl border border-purple-200 shadow-[0_15px_40px_rgba(168,85,247,0.08)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)] transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100 group-hover:bg-purple-100 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Buildicy Resources
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-md mx-auto">
                    Access our comprehensive company profile, case studies, capabilities, and system architectures.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all group-hover:bg-purple-700 shadow-md">
                  View & Download PDFs <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Screen Overlay Modal */}
      {activePdfModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden relative">
            <button
              onClick={() => setActivePdfModal(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors text-lg font-bold z-10"
            >
              ✕
            </button>
            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="mb-10 text-center max-w-xl mx-auto">
                <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">Buildicy PDF Hub</h3>
                <p className="text-slate-500 text-sm">Download our exclusive resources, capability briefs, and case studies to see how we build scalable systems.</p>
              </div>
              <div className="space-y-4">
                {STUDIO_PDFS.map((pdf) => (
                  <div key={pdf.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-sm bg-slate-50/50 transition-all gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h4 className="font-display text-lg font-bold text-slate-900">{pdf.title}</h4>
                        {pdf.isMain && <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-mono font-bold uppercase tracking-wider">Main Deck</span>}
                      </div>
                      <p className="text-slate-500 text-xs mb-2 leading-relaxed">{pdf.d}</p>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
                        <span>{pdf.pages}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{pdf.size}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-purple-600/70">{pdf.tag}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <a href={pdf.file} download className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-sm font-semibold text-slate-700 hover:text-purple-700 transition-all shadow-sm">
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="bg-[#141414] px-6 py-20 text-white md:px-10 md:py-48 text-center relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[950px] flex flex-col items-center justify-center">
        <h2 className="reveal-zoom font-display text-[clamp(2.2rem,7vw,7rem)] leading-[1.08] tracking-tight text-white font-extrabold pb-2">
          Ready to build your{" "}
          <span className="font-normal italic inline-block pb-4 pt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">
            growth system?
          </span>
        </h2>
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6">
          <a href="mailto:hello@buildicy.com" className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-semibold text-slate-900 transition-all hover:bg-purple-600 hover:text-white shadow-lg hover:scale-105">
            Start a Conversation <Arrow className="transition-transform group-hover:rotate-45" />
          </a>
          <a href="mailto:hello@buildicy.com" className="link-line text-lg text-white/50 hover:text-white transition-colors">hello@buildicy.com</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pb-12 md:px-10" style={{ position: "relative", zIndex: 0 }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="border-t border-white/8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Buildicy" className="h-10 w-auto object-contain" />
              <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter" style={{
                background: "linear-gradient(135deg, #b450f0 0%, #8c28dc 50%, #5014b4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Buildicy</div>
            </div>
            <p className="text-white/30 text-xs font-mono tracking-widest uppercase">AI Growth Systems Studio</p>
          </div>
          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="#" className="link-line text-xs font-mono text-white/40 hover:text-purple-400 transition-colors">LinkedIn</a>
              <a href="#" className="link-line text-xs font-mono text-white/40 hover:text-purple-400 transition-colors">Instagram</a>
              <a href="#" className="link-line text-xs font-mono text-white/40 hover:text-purple-400 transition-colors">Dribbble</a>
            </div>
            <span className="text-xs text-white/20 font-mono">© 2026 Buildicy Studio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
