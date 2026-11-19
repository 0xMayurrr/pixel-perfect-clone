import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  PhoneCall,
  Users,
  Flame,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Bot,
  Database,
  Layers,
  BarChart3,
  Globe,
  Building2,
  Briefcase,
  GraduationCap,
  Home,
  UserCheck,
  TrendingUp,
  Search,
  Check,
  ExternalLink,
  Laptop,
  Code2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";
import { HeroTypewriter } from "../components/HeroTypewriter";
import { AuditBookingModal } from "../components/AuditBookingModal";
import FolderFloat from "../components/FolderFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Buildicy | AI Growth Systems & Lead Recovery for B2B Service Businesses",
      },
      {
        name: "description",
        content:
          "Buildicy installs AI Growth Systems that capture every enquiry, respond instantly, qualify prospects, and book more qualified meetings for B2B service businesses.",
      },
      {
        name: "keywords",
        content:
          "AI Growth Systems, AI Lead Recovery, B2B Booking Systems, AI Receptionist, WhatsApp AI Lead Capture, Automated Qualification, Buildicy Studio, AI Growth Systems Studio Coimbatore India",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Coimbatore, Tamil Nadu, India" },
      { name: "geo.position", content: "11.0168;76.9558" },
      { name: "ICBM", content: "11.0168, 76.9558" },
      {
        property: "og:title",
        content:
          "Buildicy | AI Growth Systems & Lead Recovery for B2B Service Businesses",
      },
      {
        property: "og:description",
        content:
          "Stop losing leads to slow follow-up. Buildicy installs AI Growth Systems that capture, qualify, and book meetings 24/7 across WhatsApp, Web & Calls.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Buildicy",
          alternateName: "Buildicy AI Growth Systems Studio",
          description:
            "Buildicy installs AI Growth Systems that capture enquiries, qualify prospects, and book qualified meetings for B2B service businesses.",
          url: "https://buildicy.com",
          email: "hello@buildicy.com",
          telephone: "+916381390205",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "Canada" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AI Growth Systems",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Funnel System",
                  description: "Turn website enquiries into qualified booked calls.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Lead Concierge",
                  description:
                    "Handle incoming enquiries and book suitable prospects 24/7 across WhatsApp, Web, and Calls.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Complete AI Growth Engine",
                  description:
                    "Connect enquiries, follow-ups, sales teams, CRM, and revenue reporting.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
});

const WHATSAPP_URL = `https://wa.me/916381390205?text=${encodeURIComponent(
  "Hi Buildicy, I would like to book a free AI Growth Audit for my business."
)}`;

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
      { threshold: 0.05, rootMargin: isMobile ? "0px" : "0px 0px -50px 0px" }
    );
    const observeAll = () => {
      document
        .querySelectorAll(
          ".reveal:not(.is-in), .reveal-zoom:not(.is-in), .reveal-left:not(.is-in), .reveal-right:not(.is-in)"
        )
        .forEach((el) => observer.observe(el));
    };
    observeAll();
    let moRaf: number | null = null;
    const mo = new MutationObserver(() => {
      if (moRaf) return;
      moRaf = requestAnimationFrame(() => {
        observeAll();
        moRaf = null;
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
      if (moRaf) cancelAnimationFrame(moRaf);
    };
  }, []);
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(168,85,247,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/* =========================================================================
   ORIGINAL THREE.JS WEBGL PARTICLE GLOBE
   ========================================================================= */

const GLOBAL_HUBS = [
  { id: "delhi", name: "New Delhi", lat: 28.6139, lng: 77.209, color: "#ffffff", size: 0.95 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lng: 77.5946, color: "#ffffff", size: 0.95 },
  { id: "mumbai", name: "Mumbai", lat: 19.076, lng: 72.8777, color: "#ffffff", size: 0.9 },
  { id: "dubai", name: "Dubai", lat: 25.2048, lng: 55.2708, color: "#ffffff", size: 0.9 },
  { id: "singapore", name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#ffffff", size: 0.9 },
  { id: "london", name: "London", lat: 51.5072, lng: -0.1276, color: "#ffffff", size: 0.9 },
  { id: "newyork", name: "New York", lat: 40.7128, lng: -74.006, color: "#ffffff", size: 0.95 },
  { id: "sanfrancisco", name: "San Francisco", lat: 37.7749, lng: -122.4194, color: "#ffffff", size: 0.95 },
  { id: "tokyo", name: "Tokyo", lat: 35.6762, lng: 139.6503, color: "#ffffff", size: 0.9 },
  { id: "berlin", name: "Berlin", lat: 52.52, lng: 13.405, color: "#ffffff", size: 0.85 },
  { id: "sydney", name: "Sydney", lat: -33.8688, lng: 151.2093, color: "#ffffff", size: 0.85 },
];

const SAMPLE_ARCS = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.22, color: "#e879f9" },
  { order: 2, startLat: 25.2048, startLng: 55.2708, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: "#c084fc" },
  { order: 3, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, arcAlt: 0.32, color: "#a855f7" },
  { order: 4, startLat: 40.7128, startLng: -74.006, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.25, color: "#c084fc" },
  { order: 5, startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.36, color: "#8b5cf6" },
  { order: 6, startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.26, color: "#e879f9" },
  { order: 7, startLat: 1.3521, startLng: 103.8198, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.24, color: "#a855f7" },
  { order: 8, startLat: 51.5072, startLng: -0.1276, endLat: 52.52, endLng: 13.405, arcAlt: 0.18, color: "#c084fc" },
  { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.34, color: "#6366f1" },
];

function WebGLParticleGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    let animId: number;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    let isVisible = true;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
      },
      { threshold: 0.02 }
    );
    visibilityObserver.observe(container);

    while (container.firstChild) container.removeChild(container.firstChild);

    Promise.all([import("three"), import("three-globe")])
      .then(([THREE, threeGlobeMod]) => {
        if (cancelled) return;
        try {
          const ThreeGlobe =
            (threeGlobeMod as any)?.default?.default ||
            (threeGlobeMod as any)?.default ||
            (threeGlobeMod as any);
          if (!ThreeGlobe) return;

          (window as any).THREE = THREE;

          const isMobile = window.innerWidth < 768;
          const width = container.clientWidth || 360;
          const height = container.clientHeight || 360;
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
          camera.position.set(0, 0, 310);

          const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile,
            alpha: true,
            powerPreference: "high-performance",
          });
          renderer.setSize(width, height);
          renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
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
            .atmosphereAltitude(0.2)
            .arcsData(SAMPLE_ARCS)
            .arcColor((e: any) => e.color)
            .arcAltitude((e: any) => e.arcAlt)
            .arcStroke(0.65)
            .arcDashLength(0.45)
            .arcDashGap(2.2)
            .arcDashInitialGap((e: any) => e.order * 0.7)
            .arcDashAnimateTime(1100)
            .pointsData(GLOBAL_HUBS)
            .pointLat((d: any) => d.lat)
            .pointLng((d: any) => d.lng)
            .pointColor(() => "#ffffff")
            .pointAltitude(0.028)
            .pointRadius((d: any) => d.size || 0.9);

          if (typeof (globe as any).ringsData === "function") {
            (globe as any)
              .ringsData(GLOBAL_HUBS)
              .ringLat((d: any) => d.lat)
              .ringLng((d: any) => d.lng)
              .ringAltitude(0.024)
              .ringColor(() => (t: number) => `rgba(232, 121, 249, ${Math.max(0, (1 - t) * 0.92)})`)
              .ringMaxRadius(3.8)
              .ringPropagationSpeed(1.6)
              .ringRepeatPeriod(1300);
          }

          const globeMaterial = (globe as any).globeMaterial?.();
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
                  .hexPolygonResolution(isMobile ? 2 : 3)
                  .hexPolygonMargin(0.35)
                  .hexPolygonAltitude(0.005)
                  .hexPolygonColor(() => "rgba(255,255,255,0.92)");
              }
            })
            .catch(() => {});

          const globeGroup = new THREE.Group();
          globeGroup.add(globe);
          scene.add(globeGroup);

          let isDragging = false;
          let prevX = 0,
            prevY = 0;
          let userRotY = 0,
            userRotX = 0.08;
          let t = 0;

          const onPointerDown = (e: PointerEvent) => {
            isDragging = true;
            prevX = e.clientX;
            prevY = e.clientY;
            container.style.cursor = "grabbing";
          };

          const onPointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            userRotY += (e.clientX - prevX) * 0.009;
            userRotX = Math.max(-0.85, Math.min(0.85, userRotX + (e.clientY - prevY) * 0.009));
            prevX = e.clientX;
            prevY = e.clientY;
          };

          const onPointerUp = () => {
            if (!isDragging) return;
            isDragging = false;
            container.style.cursor = "grab";
          };

          container.addEventListener("pointerdown", onPointerDown);
          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
          window.addEventListener("pointercancel", onPointerUp);

          function animate() {
            animId = requestAnimationFrame(animate);
            if (!isVisible) return;
            t += 0.007;
            globe.rotation.y = userRotY + t;
            globe.rotation.x = userRotX + Math.sin(t * 0.35) * 0.1;
            renderer.render(scene, camera);
          }
          animate();

          const handleResize = () => {
            const w = container.clientWidth || 360;
            const h = container.clientHeight || 360;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          };
          window.addEventListener("resize", handleResize);

          cleanup = () => {
            visibilityObserver.disconnect();
            cancelAnimationFrame(animId);
            container.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            window.removeEventListener("resize", handleResize);
            if (container.contains(renderer.domElement)) {
              container.removeChild(renderer.domElement);
            }
            renderer.dispose();
          };
        } catch (err) {
          console.warn("WebGL globe initialization skipped:", err);
        }
      })
      .catch((err) => {
        console.warn("Failed to load Three.js globe dependencies:", err);
      });

    return () => {
      cancelled = true;
      visibilityObserver.disconnect();
      cleanup?.();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none touch-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.35)_0%,rgba(168,85,247,0.18)_55%,transparent_80%)] rounded-full filter blur-2xl pointer-events-none" />
      <div
        ref={mountRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
}

function MobileHeroGlobe() {
  return (
    <div className="lg:hidden w-full flex justify-center mt-8 mb-2">
      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22)_0%,transparent_70%)] rounded-full" />
        <WebGLParticleGlobe />
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN CONTROLLER
   ========================================================================= */

function Index() {
  useReveal();
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedAuditPkg, setSelectedAuditPkg] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string>("India — INR");

  const handleOpenAudit = (pkg?: string, market?: string) => {
    setSelectedAuditPkg(pkg || null);
    if (market) setSelectedMarket(market);
    setAuditModalOpen(true);
  };

  return (
    <div className="bg-[#faf8f5] text-slate-900 selection:bg-purple-600 selection:text-white page-enter min-h-screen font-sans">
      <ScrollProgressBar />
      <Nav onOpenAudit={() => handleOpenAudit()} />
      <main className="relative">
        <Hero onOpenAudit={() => handleOpenAudit()} />
        <FollowUpBottleneck />
        <VideoDashboardSection onOpenAudit={() => handleOpenAudit()} />
        <AIGrowthSystemsPackages onSelectPkg={(pkg, market) => handleOpenAudit(pkg, market)} />
        <DeploymentProtocol onOpenAudit={() => handleOpenAudit()} />
        <RealEstateProofOfImpact onOpenAudit={() => handleOpenAudit()} />
        <BuildicyStudioSection onOpenAudit={() => handleOpenAudit("Buildicy Studio — Custom Build")} />
        <MinimalistFAQ onOpenAudit={() => handleOpenAudit()} />
        <FinalCTA onOpenAudit={() => handleOpenAudit()} />
      </main>
      <Footer onOpenAudit={() => handleOpenAudit()} />

      {auditModalOpen && (
        <AuditBookingModal
          initialPackage={selectedAuditPkg}
          initialMarket={selectedMarket}
          onClose={() => setAuditModalOpen(false)}
        />
      )}
    </div>
  );
}

/* =========================================================================
   NAVIGATION (Clean, Minimalist, Original Rhythm)
   ========================================================================= */

function Nav({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md text-slate-900">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Buildicy Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Buildicy
            </span>
            <span className="h-2 w-2 rounded-full bg-purple-600 shadow-[0_0_12px_#9333ea] animate-pulse" />
          </div>
        </a>
        <nav
          className="hidden gap-5 text-xs font-medium text-slate-700 lg:flex"
          aria-label="Primary"
        >
          <a href="#problem" className="link-line hover:text-slate-900 transition-colors">
            Follow-Up
          </a>
          <a href="#dashboard" className="link-line hover:text-slate-900 transition-colors">
            Autonomous Engine
          </a>
          <a href="#systems" className="link-line hover:text-slate-900 transition-colors">
            AI Growth Systems
          </a>
          <a href="#protocol" className="link-line hover:text-slate-900 transition-colors">
            Protocol
          </a>
          <a href="#proof" className="link-line hover:text-slate-900 transition-colors">
            Real Estate Proof
          </a>
          <a href="#studio" className="link-line hover:text-slate-900 transition-colors">
            Buildicy Studio
          </a>
          <Link to="/founders" className="link-line hover:text-purple-600 transition-colors">
            Founders
          </Link>
          <a href="#faq" className="link-line hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>
        <button
          onClick={onOpenAudit}
          className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-purple-600 hover:shadow-lg cursor-pointer shrink-0"
        >
          <span className="hidden sm:inline">Book Free AI Growth Audit</span>
          <span className="sm:hidden">Book Audit</span>
          <Arrow className="transition-transform group-hover:rotate-45" />
        </button>
      </div>
    </header>
  );
}

/* =========================================================================
   HERO (Original Clean Headline + WebGL Globe, Pill/Image Removed)
   ========================================================================= */

function Hero({ onOpenAudit }: { onOpenAudit: () => void }) {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full bg-[#faf8f5] text-slate-900 flex flex-col justify-center overflow-hidden px-6 pt-36 pb-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.10)_0%,rgba(99,102,241,0.03)_40%,#faf8f5_75%)] pointer-events-none" />
      <div className="cinematic-noise opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Clean Headline with Typewriter, Subheadline & CTAs */}
        <div className="lg:col-span-8 order-1 flex flex-col justify-center items-start text-left max-w-3xl pl-0 sm:pl-8 lg:pl-12 mt-4 lg:mt-16">
          <h1 className="font-sans text-[clamp(2.2rem,5.4vw,5.2rem)] leading-[1.12] tracking-tight text-slate-900 font-extrabold text-left animate-in fade-in duration-500">
            Stop losing leads to{" "}
            <span className="inline-block text-purple-700 whitespace-nowrap align-bottom">
              <HeroTypewriter
                words={["slow follow-up.", "missed enquiries.", "manual delays."]}
              />
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-slate-600 text-base md:text-xl leading-relaxed font-normal text-left animate-in fade-in duration-700">
            Buildicy installs AI Growth Systems that capture every enquiry, respond
            instantly, qualify prospects, and book more qualified meetings for B2B service
            businesses.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-in fade-in duration-700">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto text-center rounded-full bg-purple-600 text-white px-7 py-3.5 sm:py-4 text-sm font-semibold transition-all hover:bg-purple-700 hover:shadow-lg active:scale-95 shadow-md shadow-purple-600/20 cursor-pointer"
            >
              Book a Free AI Growth Audit
            </button>
            <a
              href="#systems"
              className="w-full sm:w-auto text-center rounded-full border border-slate-300 bg-white px-6 py-3.5 sm:py-4 text-sm font-semibold text-slate-800 transition-all hover:bg-purple-50 hover:border-purple-300 shadow-2xs"
            >
              Explore the 3 AI Systems
            </a>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Built for B2B service businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>India + International clients</span>
            </div>
          </div>

          {!isDesktop && <MobileHeroGlobe />}
        </div>

        {/* Right Column: WebGL Interactive Particle Globe */}
        <div className="lg:col-span-4 order-2 hidden lg:flex items-center justify-center min-h-[480px] relative pointer-events-auto">
          <div className="w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] relative flex items-center justify-center">
            {isDesktop && <WebGLParticleGlobe />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FOLLOW-UP BOTTLENECK (Clean, Minimalist, Architectural)
   ========================================================================= */

function FollowUpBottleneck() {
  const problems = [
    {
      title: "Slow response",
      metric: "4+ hours delay",
      desc: "Prospect buying intent peaks in the first 10 minutes. When replies take hours, deals go to the first vendor who responds.",
    },
    {
      title: "Missed calls & messages",
      metric: "62% unanswered",
      desc: "After-hours and weekend enquiries bounce into voicemails nobody checks, leaking high-intent revenue straight to competitors.",
    },
    {
      title: "Unqualified leads",
      metric: "70% wasted time",
      desc: "Senior closers spend hours fielding low-budget tire-kickers instead of closing qualified buyers.",
    },
    {
      title: "No follow-up",
      metric: "80% drop-off",
      desc: "Most B2B contracts require 5+ touchpoints, yet 44% of sales reps abandon prospects after just one attempt.",
    },
  ];

  return (
    <section
      id="problem"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="reveal max-w-3xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            The Follow-Up Bottleneck
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Most businesses do not have a lead problem.{" "}
            <span className="text-slate-500 font-normal italic">
              They have a follow-up problem.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, idx) => (
            <div
              key={p.title}
              className="reveal border-t border-slate-300 pt-5 flex flex-col justify-between group hover:border-purple-600 transition-colors duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div>
                <span className="text-[11px] font-mono text-purple-700 font-semibold uppercase tracking-wider">
                  {p.metric}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-purple-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   THE AUTONOMOUS ENGINE (Pixel-Perfect Minimalist Dashboard Simulation)
   Engineered with luxury minimalist card design matching the reference style
   ========================================================================= */

function VideoDashboardSection({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const STAGES = [
    { id: 0, label: "01 Pipeline Overview", subtitle: "01 Pipeline Overview: Real-time lead recovery velocity and SLA response tracking." },
    { id: 1, label: "02 Inbound Stream", subtitle: "02 Inbound Stream: Multi-channel capture across WhatsApp, Website Chat & Voice." },
    { id: 2, label: "03 Sub-Minute Triage", subtitle: "03 Sub-Minute Triage: Autonomous AI responds in under 18s at peak intent." },
    { id: 3, label: "04 Qualification & Booking", subtitle: "04 Qualification & Booking: Verified ICP scoring and direct calendar sync." },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((cur) => (cur + 1) % STAGES.length);
          return 0;
        }
        return prev + 1.25; // ~5.3s per stage
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isPlaying, STAGES.length]);

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  return (
    <section
      id="dashboard"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="reveal max-w-3xl mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            The Autonomous Engine
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Watch how the system runs your pipeline.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A real-time command center that captures incoming enquiries across WhatsApp,
            web, and calls, qualifies their budget, and books high-ticket meetings automatically.
          </p>
        </div>

        {/* Minimalist Stage Navigation Tabs */}
        <div className="reveal flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
            Workflow:
          </span>
          {STAGES.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectTab(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-purple-600 text-white shadow-sm shadow-purple-600/30 scale-102"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-purple-300 hover:text-purple-700"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard Canvas Container (Ultra-Minimalist Light Aesthetic) */}
        <div className="reveal-zoom rounded-3xl bg-white border border-slate-200/90 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-4 w-px bg-slate-200 mx-1" />
              <span className="font-mono text-xs font-semibold text-slate-700">
                buildicy.engine / autonomous-pipeline-demo
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Simulation
              </span>

              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 shadow-2xs cursor-pointer"
                title={isPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-slate-600" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-purple-600" />
                    <span className="text-purple-700 font-bold">Auto-Play</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Canvas (Style of reference frame_1.jpg, frame_3.jpg, frame_4.jpg) */}
          <div className="relative bg-gradient-to-br from-[#f0f4ff]/70 via-[#f8fafc] to-[#ffffff] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between overflow-hidden">
            {/* Soft Ambient Radial Blur Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/25 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl pointer-events-none" />

            {/* TAB 0: 01 PIPELINE OVERVIEW (Style of frame_1.jpg) */}
            {activeTab === 0 && (
              <div className="relative z-10 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      Live Inbound Pipeline • All Connected Workspaces
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active SLA 99.98%
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Card 1 */}
                  <div className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                        $
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ↑ +28.4%
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Pipeline Value
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      $184.5k
                    </div>
                    {/* Minimalist Sparkline */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Target: $250k</span>
                      <span className="text-[11px] font-mono font-semibold text-purple-700">73.8% to goal</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ↑ +38 new
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Inbound Enquiries
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      1,482
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">WhatsApp & Web</span>
                      <span className="text-[11px] font-mono font-semibold text-blue-700">Zero Leakage</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        &lt; 30s SLA
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Median Response
                    </span>
                    <div className="font-display text-3xl font-extrabold text-emerald-600 mt-1">
                      18.4s
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Manual Lag: 4.2h</span>
                      <span className="text-[11px] font-mono font-semibold text-emerald-600">99.2% faster</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="rounded-[24px] bg-white border border-slate-100 p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                        92% show rate
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Booked Meetings
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      318 Calls
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Direct CRM sync</span>
                      <span className="text-[11px] font-mono font-semibold text-indigo-700">Qualified Only</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: 02 OMNICHANNEL STREAM (Style of frame_4.jpg) */}
            {activeTab === 1 && (
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
                {/* Left Live Volume Box */}
                <div className="lg:col-span-5 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-lg">Active Enquiries</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-rose-50 text-rose-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Live
                      </span>
                    </div>
                    <div className="font-display text-5xl sm:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight">
                      1,482
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mt-3">
                      ↑ +38 incoming in last 10 minutes
                    </div>
                  </div>

                  {/* Soundwave / Activity Bars */}
                  <div className="mt-8 flex items-end gap-2.5 h-24 pt-4">
                    {[35, 55, 40, 75, 60, 95, 50, 80, 65, 100].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md transition-all duration-500 ${
                          i === 9 ? "bg-purple-600" : "bg-purple-200"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Live Activity Feed */}
                <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-bold text-slate-900 text-lg">Live Inbound Activity</span>
                    <span className="text-xs font-mono text-purple-700 font-semibold">Sub-30s Triage</span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      {
                        initials: "WA",
                        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        name: "Rajesh V.",
                        company: "Commercial Real Estate (Bangalore)",
                        msg: "Need automated booking for 8 commercial office parks",
                        time: "Just now",
                      },
                      {
                        initials: "WB",
                        color: "bg-blue-50 text-blue-700 border-blue-200",
                        name: "Sarah Jenkins",
                        company: "VP Sales • Elevate Growth Partners",
                        msg: "Inbound demo qualification for 40 monthly website leads",
                        time: "6s ago",
                      },
                      {
                        initials: "VR",
                        color: "bg-purple-50 text-purple-700 border-purple-200",
                        name: "Marcus Vance",
                        company: "Principal • Executive Search",
                        msg: "Missed call recovered • Transcribed intent: Retained search",
                        time: "18s ago",
                      },
                      {
                        initials: "WA",
                        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        name: "Dr. Alan Hayes",
                        company: "Founder • Private Aesthetic Clinic",
                        msg: "After-hours WhatsApp consultation booking inquiry",
                        time: "34s ago",
                      },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-purple-50/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs border shrink-0 ${row.color}`}
                          >
                            {row.initials}
                          </span>
                          <div>
                            <div className="text-xs font-semibold text-slate-900">
                              {row.name}{" "}
                              <span className="font-normal text-slate-500">• {row.company}</span>
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                              "{row.msg}"
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: 03 SUB-MINUTE TRIAGE (Chat & Speed-to-Lead) */}
            {activeTab === 2 && (
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
                {/* Left Conversational AI Box */}
                <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-900 text-lg">Autonomous AI Exchange</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active Chat
                      </span>
                    </div>

                    <div className="space-y-3.5 mt-2">
                      {/* Prospect message */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 max-w-lg">
                        <span className="text-[11px] font-mono font-semibold text-slate-500 block mb-1">
                          Sarah Jenkins (Website Chat • 18s ago)
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                          "Hi! We are losing after-hours leads on our website. Can Buildicy help qualify and book them automatically?"
                        </p>
                      </div>

                      {/* AI Concierge response */}
                      <div className="bg-purple-50/80 p-4 rounded-2xl border border-purple-200/80 ml-auto max-w-lg">
                        <span className="text-[11px] font-mono font-bold text-purple-700 block mb-1">
                          Buildicy AI Concierge • Dispatched in 18.2s
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                          "Hi Sarah! Absolutely. We install systems that qualify and book prospects in under 60 seconds across WhatsApp, web & voice. How many active monthly inquiries do you currently handle?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-purple-700 font-semibold">
                    <span>✓ ZERO HUMAN LATENCY</span>
                    <span>1-CLICK MEETING SCHEDULING</span>
                  </div>
                </div>

                {/* Right Latency Benchmark Box */}
                <div className="lg:col-span-5 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-lg block">Speed-to-Lead</span>
                    <span className="text-xs text-slate-500 font-normal mt-0.5 block">
                      Buying intent peaks within the first 10 minutes.
                    </span>

                    <div className="font-display text-5xl sm:text-6xl font-extrabold text-slate-900 mt-6 tracking-tight">
                      18.2s
                    </div>
                    <span className="text-xs font-mono text-purple-700 font-semibold block mt-1">
                      Buildicy AI Median Latency
                    </span>

                    <div className="mt-6 space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="font-semibold text-slate-800">Buildicy AI</span>
                          <span className="text-emerald-600 font-bold">&lt; 20s (Instant)</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                          <span>Traditional Manual Delay</span>
                          <span className="text-rose-500 font-semibold">4.2 Hours</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-rose-400 rounded-full w-[12%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold text-center border border-emerald-200 mt-4">
                    ✓ 99.2% faster engagement than standard teams
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: 04 QUALIFICATION & BOOKING (Style of frame_3.jpg) */}
            {activeTab === 3 && (
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
                {/* Left Channel Attribution (Donut breakdown) */}
                <div className="lg:col-span-5 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-lg">Channel Distribution</span>
                      <span className="text-xs font-mono text-slate-500">All Sources</span>
                    </div>

                    {/* Donut Simulation */}
                    <div className="my-6 flex items-center justify-center">
                      <div className="relative w-40 h-40 rounded-full border-[18px] border-purple-600 flex items-center justify-center border-t-blue-500 border-l-emerald-500 shadow-inner">
                        <div className="text-center">
                          <div className="font-display text-2xl font-extrabold text-slate-900">
                            1,482
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase">
                            Ingested
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-medium">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          WhatsApp Business
                        </span>
                        <span className="font-mono font-bold text-slate-900">42% (622 leads)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          Website Concierge
                        </span>
                        <span className="font-mono font-bold text-slate-900">36% (534 leads)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                          Voice AI Reception
                        </span>
                        <span className="font-mono font-bold text-slate-900">22% (326 leads)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Confirmed Booking & CRM Sync */}
                <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-100 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-900 text-lg">Confirmed Booking</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ SLOTTED & SYNCED
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 mb-5">
                      <div className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">
                        Discovery Call Reserved
                      </div>
                      <div className="font-display text-2xl font-bold text-slate-900 mt-1">
                        Tomorrow, Thursday • 2:30 PM EST
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Attendee: Sarah Jenkins (VP Sales • Elevate Growth Partners)
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Google Meet invitation generated and delivered</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>HubSpot CRM deal ($24,000 value) automatically created</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>WhatsApp & SMS reminder sequences armed (T-24h & T-1h)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Slack notification dispatched to sales leadership</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">ICP Score: 96/100 (Tier 1)</span>
                    <button
                      onClick={onOpenAudit}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-800 cursor-pointer inline-flex items-center gap-1"
                    >
                      Install this engine →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Minimalist Bottom Caption & Progress Bar (Matching reference video's clean caption) */}
            <div className="relative z-10 mt-8 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                <span className="font-mono text-slate-700 font-medium">
                  {STAGES[activeTab]?.subtitle || ""}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full sm:w-48 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist CTA Below Dashboard */}
        <div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div>
            <div className="font-display text-lg font-bold text-slate-900">
              Want this autonomous engine installed into your business?
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              We audit your inbound channels, design your custom blueprint, and connect your CRM within 7–14 days.
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto shrink-0 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md shadow-purple-600/20"
          >
            Book a Free AI Growth Audit →
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   THE THREE AI GROWTH SYSTEMS (Our 3 Core Systems / Packages)
   ========================================================================= */

function AIGrowthSystemsPackages({
  onSelectPkg,
}: {
  onSelectPkg: (name: string, market: string) => void;
}) {
  const [market, setMarket] = useState<"india" | "intl">("india");
  const isIntl = market === "intl";
  const marketLabel = isIntl ? "International — USD" : "India — INR";

  const systems = [
    {
      id: "ai-funnel",
      name: "AI Funnel System",
      systemNumber: "System 01",
      tagline: "Turn website enquiries into qualified booked calls.",
      popular: false,
      indiaSetup: "₹35,000",
      indiaMonthly: "₹7,000/mo",
      intlSetup: "$1,500",
      intlMonthly: "$400/mo",
      bestFor: "Agencies, consultants, coaches with traffic but weak booking conversion.",
      includes: [
        "Landing page architecture + lead form / chat intake",
        "Qualification scoring questions calibrated to your ICP",
        "Instant CRM capture & contact tagging",
        "Direct calendar booking integration",
        "Automated calendar reminders & basic follow-up",
      ],
      example:
        "A consulting firm receives website enquiries; Buildicy qualifies them and offers a discovery-call booking slot.",
      cta: "Get My Funnel Blueprint",
    },
    {
      id: "ai-concierge",
      name: "AI Lead Concierge",
      systemNumber: "System 02",
      tagline:
        "Handle incoming enquiries and help suitable prospects book—even when your team is busy.",
      popular: true,
      indiaSetup: "₹65,000",
      indiaMonthly: "₹15,000/mo",
      intlSetup: "$3,000",
      intlMonthly: "$850/mo",
      bestFor: "Businesses receiving enquiries through website chat, email, WhatsApp, or calls.",
      includes: [
        "Everything in AI Funnel System",
        "Autonomous AI replies on WhatsApp, Web & Email",
        "Conversational qualification, booking & painless rescheduling",
        "Conversation summaries & instant human handover",
        "Optional voice reception & missed-call SMS/WhatsApp auto-recovery",
      ],
      example:
        "An after-hours WhatsApp enquiry gets answered using approved information, qualified, and offered a consultation slot.",
      cta: "Book a System Demo",
    },
    {
      id: "growth-engine",
      name: "Complete AI Growth Engine",
      systemNumber: "System 03",
      tagline:
        "Connect your enquiries, follow-ups, sales team, and reporting in one managed system.",
      popular: false,
      indiaSetup: "₹1,25,000",
      indiaMonthly: "₹35,000/mo",
      intlSetup: "$5,500",
      intlMonthly: "$1,800/mo",
      bestFor: "Established businesses with multiple lead sources and a sales team.",
      includes: [
        "Everything in AI Lead Concierge",
        "Full CRM integration (HubSpot, GoHighLevel, Salesforce, custom)",
        "Pipeline stages, lead routing & sales automation",
        "Multi-touch no-show recovery & post-meeting follow-up",
        "Executive owner dashboard & monthly optimization",
      ],
      example:
        "A marketing agency connects website, ads, and referral leads into one CRM, routes qualified leads to salespeople, and views pipeline in a dashboard.",
      cta: "Book a Growth Audit",
      note: "Advertising, outbound prospecting, and custom software are scoped separately.",
    },
  ];

  return (
    <section
      id="systems"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            Buildicy Core Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            The Three AI Growth Systems
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Turn inbound traffic, WhatsApp, and calls into qualified booked calls. Choose
            the system that fits your current operational volume.
          </p>

          {/* Currency Toggle */}
          <div className="mt-5 flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-200/80 border border-slate-300/80">
              <button
                type="button"
                onClick={() => setMarket("india")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  market === "india" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600"
                }`}
              >
                India — INR
              </button>
              <button
                type="button"
                onClick={() => setMarket("intl")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  market === "intl" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600"
                }`}
              >
                International — USD
              </button>
            </div>
          </div>
        </div>

        {/* 3 Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {systems.map((sys, idx) => {
            const setup = isIntl ? sys.intlSetup : sys.indiaSetup;
            const monthly = isIntl ? sys.intlMonthly : sys.indiaMonthly;
            const isPopular = sys.popular;

            return (
              <div
                key={sys.id}
                className={`reveal rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white border-2 border-purple-500 shadow-xl shadow-purple-600/10 lg:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-2xs hover:border-purple-300"
                }`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      {sys.systemNumber}
                    </span>
                    {isPopular && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                        ★ Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mt-2">
                    {sys.name}
                  </h3>

                  <p className="text-xs text-slate-700 font-medium my-3 leading-relaxed">
                    “{sys.tagline}”
                  </p>

                  <div className="my-4 p-4 rounded-2xl bg-[#faf8f5] border border-slate-200/80">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-display text-3xl font-extrabold text-slate-900">
                          {setup}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 uppercase ml-1">
                          Setup
                        </span>
                      </div>
                      <div className="text-xs font-mono text-purple-700 font-bold">
                        + {monthly}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">{sys.bestFor}</p>

                  <div className="space-y-2 mb-6">
                    {sys.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 mb-4 text-xs text-slate-700 italic">
                    <span className="font-bold text-purple-800 not-italic block mb-0.5 text-[10px] uppercase font-mono">
                      Scenario Example
                    </span>
                    {sys.example}
                  </div>

                  {sys.note && (
                    <p className="text-[11px] font-mono text-slate-400 italic mb-4">
                      * {sys.note}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPkg(sys.name, marketLabel)}
                    className={`w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20"
                        : "bg-slate-900 hover:bg-purple-600 text-white"
                    }`}
                  >
                    <span>{sys.cta}</span>
                    <Arrow />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   DEPLOYMENT PROTOCOL (Minimalist Split: Left Headline & Arrow, Right Folder)
   ========================================================================= */

function DeploymentProtocol({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [selectedDeliverable, setSelectedDeliverable] = useState<string | null>(null);

  const DELIVERABLES = [
    "01 • System Leakage Audit",
    "02 • Conversation Blueprint",
    "03 • WhatsApp Business API",
    "04 • AI Voice Concierge",
    "05 • HubSpot & CRM Sync",
    "06 • Smart Calendar Slotting",
    "07 • Synthetic Stress Testing",
    "08 • Zero-Downtime Launch",
  ];

  const handleSelectPill = (val: string) => {
    setSelectedDeliverable(val);
    toast.success("Deployment Module Selected", {
      description: `${val} calibrated and staged for zero-downtime cutover.`,
    });
  };

  return (
    <section
      id="protocol"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Minimalist Context with Direct Arrow Pointer */}
          <div className="reveal-left lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              DEPLOYMENT PROTOCOL
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              From Audit to Live System.
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Every system deliverable calibrated, stress-tested, and launched with zero downtime to your existing operations.
            </p>

            {/* Clean Arrow Pointer to Folder */}
            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-purple-100/70 border border-purple-200 text-purple-900 shadow-sm">
                <span className="text-xs font-mono font-bold tracking-tight">
                  Hover or click the dossier
                </span>
                <ArrowRight className="w-4 h-4 text-purple-700 animate-pulse" />
              </div>
            </div>

            {/* Clean CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-purple-700 text-white text-xs font-mono font-semibold transition-all shadow-md group"
              >
                <span>Book a Free AI Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span className="text-xs text-slate-500 font-mono">14-Day Delivery SLA</span>
            </div>
          </div>

          {/* Right Column: Zero-Gravity Folder Animation (Clean, No Clutter) */}
          <div className="reveal-right lg:col-span-7 flex flex-col items-center justify-center relative min-h-[460px] overflow-visible py-10">
            <FolderFloat
              items={DELIVERABLES}
              label="Buildicy Deployment Dossier"
              sublabel="8 Core Architecture Modules"
              trigger="hover"
              physics={true}
              drift={0.65}
              closeOnSelect={false}
              onSelect={handleSelectPill}
              folderColor="#4c1d95"
              frontColor="#7c3aed"
              paperColor="#ffffff"
              itemColor="#ffffff"
              itemTextColor="#0f172a"
              labelColor="#ffffff"
              width={300}
              height={200}
              radius={18}
              spread={230}
              lift={44}
              tilt={10}
              bounce={0.32}
            />

            {selectedDeliverable && (
              <div className="mt-8 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 text-xs font-mono text-purple-900 shadow-sm animate-in fade-in">
                Active Module: <span className="font-bold">{selectedDeliverable}</span> (Calibrated & ready)
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   REAL ESTATE CASE STUDY: BEFORE VS AFTER (With ✕ and ✓)
   (Exactly matching user's requested single-industry high-impact format)
   ========================================================================= */

function RealEstateProofOfImpact({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section
      id="proof"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="reveal max-w-2xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            Industry Proof of Impact • Real Estate Case Study
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Built for measurable lead recovery.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            How a high-ticket real estate firm transformed missed calls and slow WhatsApp
            inquiries into 14 confirmed private viewings per month.
          </p>
        </div>

        {/* Side-by-side Before (✕) vs After (✓) */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Before Buildicy (✕) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold">
                  Before Buildicy (Manual Follow-Up)
                </span>
                <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center">
                  ✕
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>62% of inbound calls missed:</strong> Evening &amp; weekend
                    property inquiries went to voicemail; buyers immediately called rival
                    brokers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>4+ hour response delay:</strong> Enquiries sat in unread WhatsApp
                    inboxes until the next morning when buyer interest was already cold.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>Wasted agent time:</strong> Agents spent 15+ hours weekly giving
                    walkthroughs to unqualified buyers with no pre-approved financing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>38% appointment no-show rate:</strong> Zero automated reminder
                    sequences meant prospects simply forgot scheduled walkthroughs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-rose-700 font-medium">
              Result: Estimated $35,000+ in lost monthly commission.
            </div>
          </div>

          {/* After Buildicy (✓) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-purple-500 shadow-xl shadow-purple-600/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold">
                  After Buildicy (AI Growth System)
                </span>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                  ✓
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Sub-20s auto text-back:</strong> Missed phone calls immediately
                    trigger automated WhatsApp/SMS response with property sheets and FAQs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Automated buyer qualification:</strong> AI screens budget, purchase
                    timeline, and pre-approval status before ever offering booking slots.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Direct calendar booking:</strong> Vetted buyers schedule private
                    viewings directly on the assigned agent’s calendar in seconds.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>88% show-up rate:</strong> Automated multi-channel confirmation
                    briefings sent to the buyer's WhatsApp with directions and 1-click reschedule.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ★ Outcome: +14 qualified viewings booked/month
              </span>

              <button
                onClick={onOpenAudit}
                className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Book a Free AI Growth Audit</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   BUILDICY STUDIO (Impressive, Clean, Professional Software Engineering)
   ========================================================================= */

function BuildicyStudioSection({ onOpenAudit }: { onOpenAudit: () => void }) {
  const capabilities = [
    {
      title: "Custom CRM & Pipelines",
      desc: "Tailored deal stages, automated routing rules, and custom data schemas.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Branded Client Portals",
      desc: "Secure hubs for deliverable reviews, asynchronous messaging & project tracking.",
      icon: <Laptop className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Internal AI Operations Tools",
      desc: "Custom agents that summarize calls, parse contracts, and eliminate busywork.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Full-Stack SaaS / MVP",
      desc: "Production web applications engineered on modern high-velocity stacks.",
      icon: <Code2 className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section
      id="studio"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
              Custom Engineering Division
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Need custom software built around your business?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Buildicy Studio designs and engineers custom software for businesses that have
              outgrown generic off-the-shelf tools.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="rounded-full bg-slate-900 hover:bg-purple-600 text-white px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer shrink-0"
          >
            Discuss a Custom Build →
          </button>
        </div>

        {/* 4 Impressive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="reveal rounded-3xl p-6 bg-white border border-slate-200 shadow-2xs hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {cap.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MINIMALIST FAQ (Concise Answers)
   ========================================================================= */

function MinimalistFAQ({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will AI replace my team?",
      a: "No. Buildicy handles immediate frontline response and qualification so your team only spends time closing vetted buyers.",
    },
    {
      q: "Which channels can Buildicy connect?",
      a: "Website chat, WhatsApp Business API, Instagram DMs, email, and inbound calls with missed-call SMS recovery.",
    },
    {
      q: "Do we own the system and data?",
      a: "Yes, 100%. All systems, prompts, and lead data are deployed directly into your own infrastructure.",
    },
    {
      q: "How long does implementation take?",
      a: "Typically 7 to 14 business days from initial audit to live deployment with zero downtime.",
    },
    {
      q: "Do you manage ads?",
      a: "No. We focus exclusively on capturing, qualifying, and booking the leads your existing marketing generates.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We work with clients across India, North America, the UK, Europe, Australia, and the Middle East.",
    },
  ];

  return (
    <section
      id="faq"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="reveal text-center mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q} className="py-4">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-2 font-display text-base sm:text-lg font-bold text-slate-900 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400 text-sm ml-4">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FINAL CTA
   ========================================================================= */

function FinalCTA({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Ready to stop losing leads?
        </h2>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          Book a free AI Growth Audit. We will map where leads are leaking and show the
          system Buildicy would install.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenAudit}
            className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-sm font-semibold transition-all shadow-md shadow-purple-600/20 cursor-pointer"
          >
            Book a Free AI Growth Audit
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   ORIGINAL FOOTER (Restored Exact Match from Original Codebase)
   ========================================================================= */

function Footer({ onOpenAudit }: { onOpenAudit?: () => void }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-white pt-24 md:pt-36 pb-0"
      style={{
        background: "linear-gradient(180deg, #0b111e 0%, #060913 45%, #020306 100%)",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Subtle atmospheric ambient glow matching deep night ocean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(168,85,247,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Subtle twilight ocean mist line in the distance */}
      <div
        className="absolute bottom-0 inset-x-0 h-96 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 90% 40% at 50% 90%, rgba(30, 58, 138, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12">
        {/* Top Tag */}
        <div className="mb-6 md:mb-10">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/50 block">
            Have something in mind?
          </span>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Cinematic Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.6rem,6.2vw,5.6rem)] font-light md:font-normal leading-[1.05] tracking-tight text-white">
              Let’s build your <br className="hidden sm:inline" />
              growth system
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 shadow-[0_0_16px_#a855f7] ml-3 align-baseline animate-pulse" />
            </h2>
          </div>

          {/* Right Column: Studio Info, Description, CTA, Direct Email */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1 lg:pt-3 space-y-7">
            {/* Actual Logo & Studio Tag */}
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="Buildicy Logo"
                className="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    Buildicy
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
                </div>
                <span className="text-[11px] font-mono tracking-wider text-purple-300/80 uppercase">
                  AI Growth Systems Studio
                </span>
              </div>
            </div>

            {/* Concise Mission / Positioning matching reference */}
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md">
              Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7.
              Built around your business.
            </p>

            {/* Action Links */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={onOpenAudit}
                className="group inline-flex items-center gap-2.5 text-xl md:text-2xl font-medium text-white hover:text-purple-300 transition-colors cursor-pointer text-left"
              >
                <span>Start a conversation</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-purple-400">
                  ↗
                </span>
              </button>

              <div>
                <a
                  href="mailto:hello@buildicy.com"
                  className="text-sm md:text-base font-mono text-white/50 hover:text-white transition-colors"
                >
                  hello@buildicy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 mt-16 md:mt-24 pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Based in... */}
          <div className="text-xs md:text-sm font-mono text-white/50 space-y-1">
            <div>Based in India.</div>
            <div>Working worldwide.</div>
          </div>

          {/* Nav Links + Back to top */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/70">
            <a href="#problem" className="hover:text-white transition-colors">
              Follow-Up
            </a>
            <a href="#dashboard" className="hover:text-white transition-colors">
              Autonomous Engine
            </a>
            <a href="#systems" className="hover:text-white transition-colors">
              AI Growth Systems
            </a>
            <a href="#protocol" className="hover:text-white transition-colors">
              Protocol
            </a>
            <Link
              to="/founders"
              className="hover:text-white transition-colors text-purple-300 font-semibold"
            >
              Founders
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 text-white hover:text-purple-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span className="text-purple-400">↗</span>
            </button>
          </div>
        </div>

        {/* Massive Bottom Wordmark: BUILDICY */}
        <div className="relative mt-12 md:mt-20 overflow-hidden select-none pointer-events-none -mx-6 sm:-mx-8 md:-mx-12">
          <div className="w-full text-center">
            <div
              className="font-display font-black text-[15.5vw] tracking-[-0.035em] leading-[0.76] text-white uppercase text-center w-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.22) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BUILDICY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
