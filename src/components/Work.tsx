import { useState, useEffect } from "react";

const CASE_THUMBS: Record<string, React.ReactNode> = {
  markeee: <img src="/thumbnails/markeee.jpg" alt="Markeee" className="w-full h-full object-cover object-center" loading="lazy" />,
  bizbrain: <img src="/thumbnails/bizbrain.jpg" alt="BizBrain" className="w-full h-full object-cover object-center" loading="lazy" />,
  growzo: <img src="/thumbnails/growzo.jpg" alt="GrowZO" className="w-full h-full object-cover object-center" loading="lazy" />,
  vibestay: <img src="/thumbnails/vibestay.jpg" alt="VibeStay" className="w-full h-full object-cover object-center" loading="lazy" />,
  "campus-aid-buddy": <img src="/thumbnails/campus-aid-buddy.jpg" alt="Campus Aid Buddy" className="w-full h-full object-cover object-center" loading="lazy" />,
  "tuition-os": <img src="/thumbnails/tuition-os.jpg" alt="Tuition OS" className="w-full h-full object-cover object-center" loading="lazy" />,
  "clientsync-os": <img src="/thumbnails/clientsync-os.jpg" alt="ClientSync OS" className="w-full h-full object-cover object-center" loading="lazy" />,
  kindred: <img src="/thumbnails/kindred.jpg" alt="Kindred" className="w-full h-full object-cover object-center" loading="lazy" />,
  "rs-technologies": <img src="/thumbnails/rs-technologies.jpg" alt="RS Technologies" className="w-full h-full object-cover object-center" loading="lazy" />,
};

const CASES = [
  { id: "markeee", client: "Markeee", tag: "AI Marketing System", year: "2025", summary: "Automated lead generation, marketing workflows, and conversion landing pages.", stack: ["AI Workflow Engine", "Lead Capture", "Campaign Automation"] },
  { id: "bizbrain", client: "BizBrain", tag: "AI CRM System", year: "2025", summary: "Unified customer management, sales pipeline tracking, and business process automation.", stack: ["CRM Engine", "Sales Automation", "Pipeline Intelligence"] },
  { id: "growzo", client: "GrowZO", tag: "AI Calling Agent", year: "2025", summary: "Autonomous AI voice agent handling outbound sales calls and natural conversations.", stack: ["Voice AI", "Autonomous Outbound", "Speech Synthesis"] },
  { id: "vibestay", client: "VibeStay", tag: "Hospitality Platform", year: "2025", summary: "Modern booking engine and digital guest experience management platform.", stack: ["React", "Hospitality API", "Booking Architecture"] },
  { id: "campus-aid-buddy", client: "Campus Aid Buddy", tag: "Campus Support Platform", year: "2024", summary: "Centralized student academic resources, campus support, and activity portal.", stack: ["Portal Architecture", "Resource Management", "API Services"] },
  { id: "tuition-os", client: "Tuition OS", tag: "Education Operations", year: "2024", summary: "Centralized tuition centre management, student tracking, and automated administrative operations.", stack: ["SaaS Architecture", "Student Records", "Admin Workflows"] },
  { id: "clientsync-os", client: "ClientSync OS", tag: "Client Management", year: "2024", summary: "Client management OS with centralized communications and workflow coordination.", stack: ["Client Portal", "Workflow Coordination", "Data Hub"] },
  { id: "kindred", client: "Kindred", tag: "Community Platform", year: "2024", summary: "Modern digital community platform with personalized interaction flows and engagement tools.", stack: ["Community Engine", "Real-Time Interaction", "UX Design"] },
  { id: "rs-technologies", client: "RS Technologies", tag: "Business Website", year: "2024", summary: "Modern corporate digital web platform showcasing technology services and enterprise capabilities.", stack: ["Modern Web Architecture", "Brand Identity", "Interactive UI"] },
];

const PAGES = [CASES.slice(0, 3), CASES.slice(3, 6), CASES.slice(6, 9)];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function CaseStudyModal({ c, onClose, onOpenAudit }: { c: (typeof CASES)[number]; onClose: () => void; onOpenAudit: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl max-h-[85dvh] sm:max-h-[88dvh] overflow-y-auto rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200 p-5 sm:p-8 md:p-10 text-slate-900 shadow-2xl no-scrollbar overscroll-contain flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Badges and Accessible Close Button */}
        <div className="flex items-center justify-between gap-3 mb-2.5 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {c.tag}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-slate-500 font-medium">
              {c.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center text-base sm:text-lg font-bold cursor-pointer shrink-0 shadow-2xs"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Client Title */}
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
          {c.client}
        </h2>

        {/* Responsive Thumbnail Preview Banner */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 mb-5 relative aspect-[16/10] sm:aspect-[16/9] w-full shadow-inner shrink-0">
          <div className="w-full h-full flex items-center justify-center">
            {CASE_THUMBS[c.id]}
          </div>
        </div>

        {/* System Capability Highlight */}
        <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-purple-50/50 border border-purple-100/90 shadow-2xs">
          <h3 className="text-[11px] sm:text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            System Capability
          </h3>
          <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
            {c.summary}
          </p>
        </div>

        {/* Engineered Stack */}
        <div className="mb-6">
          <h3 className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2.5">
            Engineered Stack
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] sm:text-xs font-mono text-purple-700 bg-purple-50/80 border border-purple-200/70 shadow-2xs px-3 py-1.5 rounded-xl font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions (Optimized for Mobile Touch) */}
        <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-purple-700 active:scale-[0.98] px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Deploy Similar System <Arrow />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 text-xs font-mono font-semibold transition-all text-center cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Card({ c, className = "", onSelect }: { c: (typeof CASES)[number]; className?: string; onSelect: () => void }) {
  return (
    <article
      onClick={onSelect}
      className={`group relative overflow-hidden bg-slate-900 cursor-pointer select-none active:scale-[0.99] transition-transform ${className}`}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {CASE_THUMBS[c.id]}
      </div>
      {/* Bottom gradient on mobile keeps client name legible without needing hover; darker hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent sm:bg-none sm:group-hover:bg-slate-950/60 transition-all duration-300" />
      
      {/* Details: visible on mobile, reveals on desktop hover */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-0 opacity-100 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
        <p className="text-[9px] font-mono text-purple-300 font-semibold uppercase tracking-widest mb-0.5">
          {c.tag}
        </p>
        <h3 className="font-display text-sm sm:text-base font-extrabold text-white leading-tight">
          {c.client}
        </h3>
        <p className="text-[10px] font-mono text-white/75 mt-0.5">
          {c.year} · {c.stack[0]}
        </p>
      </div>

      {/* Floating Arrow Badge: visible on mobile, styled cleanly */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 rounded-full bg-black/40 sm:bg-white/0 sm:group-hover:bg-white/20 border border-white/20 sm:border-white/0 sm:group-hover:border-white/30 flex items-center justify-center transition-all duration-300 backdrop-blur-xs">
        <Arrow className="text-white sm:text-white/0 sm:group-hover:text-white transition-colors duration-300 w-3 h-3" />
      </div>
    </article>
  );
}

export function Work({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [selectedCase, setSelectedCase] = useState<(typeof CASES)[number] | null>(null);
  const [activePage, setActivePage] = useState(0);
  const page = PAGES[activePage]!;

  return (
    <section id="systems" className="bg-[#faf8f5] text-slate-900 border-t border-slate-200">

      {/* Compact header */}
      <div className="px-4 md:px-10 pt-8 md:pt-16 pb-4 md:pb-8 flex items-end justify-between gap-4 max-w-[1400px] mx-auto">
        <div>
          <span className="eyebrow text-purple-700 font-bold block mb-1 text-[10px] tracking-widest uppercase">Architecture</span>
          <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-slate-900">
            Founder-built<br />work.
          </h2>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
            Our portfolio / <span className="text-purple-600 font-semibold">{page[0]?.client}</span>
          </p>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">{CASES.length} systems</p>
        </div>
      </div>

      {/* Images — full bleed, dominate the section */}
      {/* Mobile: 1 big card full width, then 2 side by side */}
      <div className="sm:hidden w-full">
        {page[0] && (
          <Card c={page[0]} className="w-full h-[58vw]" onSelect={() => setSelectedCase(page[0]!)} />
        )}
        <div className="grid grid-cols-2 w-full">
          {page[1] && <Card c={page[1]} className="h-[46vw]" onSelect={() => setSelectedCase(page[1]!)} />}
          {page[2] && <Card c={page[2]} className="h-[46vw]" onSelect={() => setSelectedCase(page[2]!)} />}
        </div>
      </div>

      {/* Desktop: 3 equal columns */}
      <div className="hidden sm:grid sm:grid-cols-3 w-full">
        {page.map((c) => (
          <Card key={c.id} c={c} className="aspect-[4/3]" onSelect={() => setSelectedCase(c)} />
        ))}
      </div>

      {/* Footer bar */}
      <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-[1400px] mx-auto border-t border-slate-200">
        <div className="flex items-center gap-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${activePage === i ? "w-5 h-2 bg-slate-900" : "w-2 h-2 bg-slate-300 hover:bg-slate-500"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActivePage((p) => Math.max(0, p - 1))}
            disabled={activePage === 0}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 disabled:opacity-30 transition-all cursor-pointer"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M10 7l-5 5 5 5" /></svg>
          </button>
          <span className="text-xs font-mono text-slate-400 w-10 text-center">{activePage + 1} / {PAGES.length}</span>
          <button
            onClick={() => setActivePage((p) => Math.min(PAGES.length - 1, p + 1))}
            disabled={activePage === PAGES.length - 1}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 disabled:opacity-30 transition-all cursor-pointer"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
          </button>
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal
          c={selectedCase}
          onClose={() => setSelectedCase(null)}
          onOpenAudit={() => { setSelectedCase(null); onOpenAudit(); }}
        />
      )}
    </section>
  );
}

