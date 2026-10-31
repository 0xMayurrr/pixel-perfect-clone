import { useState } from "react";

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
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-slate-200 p-6 md:p-10 text-slate-900 shadow-2xl no-scrollbar" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center justify-center text-lg font-bold cursor-pointer shadow-sm z-10" aria-label="Close modal">✕</button>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">{c.tag}</span>
          <span className="text-xs font-mono text-slate-500">{c.year}</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">{c.client}</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#080808] mb-6">
          <div className="w-full max-h-[360px] overflow-hidden">{CASE_THUMBS[c.id]}</div>
        </div>
        <div className="mb-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <h3 className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-2">System Capability</h3>
          <p className="text-base text-slate-700 font-light leading-relaxed">{c.summary}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">Engineered Stack</h3>
          <div className="flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span key={s} className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-100 shadow-sm px-3.5 py-1.5 rounded-xl">{s}</span>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button onClick={onOpenAudit} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg cursor-pointer">
            Deploy Similar System <Arrow />
          </button>
          <button onClick={onClose} className="text-xs font-mono text-slate-500 hover:text-slate-900 font-semibold underline underline-offset-4 transition-colors cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  );
}

function Card({ c, className = "", onSelect }: { c: (typeof CASES)[number]; className?: string; onSelect: () => void }) {
  return (
    <article onClick={onSelect} className={`group relative overflow-hidden bg-slate-200 cursor-pointer ${className}`}>
      <div className="absolute inset-0">{CASE_THUMBS[c.id]}</div>
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/55 transition-all duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-[9px] font-mono text-purple-300 font-semibold uppercase tracking-widest mb-0.5">{c.tag}</p>
        <h3 className="font-display text-base font-extrabold text-white leading-tight">{c.client}</h3>
        <p className="text-[10px] font-mono text-white/60 mt-0.5">{c.year} · {c.stack[0]}</p>
      </div>
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/15 border border-white/0 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
        <Arrow className="text-white/0 group-hover:text-white transition-colors duration-300 w-3 h-3" />
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
              className={`rounded-full transition-all duration-300 ${activePage === i ? "w-5 h-2 bg-slate-900" : "w-2 h-2 bg-slate-300 hover:bg-slate-500"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActivePage((p) => Math.max(0, p - 1))}
            disabled={activePage === 0}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 disabled:opacity-30 transition-all"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M10 7l-5 5 5 5" /></svg>
          </button>
          <span className="text-xs font-mono text-slate-400 w-10 text-center">{activePage + 1} / {PAGES.length}</span>
          <button
            onClick={() => setActivePage((p) => Math.min(PAGES.length - 1, p + 1))}
            disabled={activePage === PAGES.length - 1}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 disabled:opacity-30 transition-all"
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
