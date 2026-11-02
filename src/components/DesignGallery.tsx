"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";
import { DESIGNS, waLink, type Design } from "@/lib/site";

/**
 * The design collection. Each card shows a cover; tapping it plays the preview video
 * in a phone-shaped viewer. Videos are silent, have no download button and no
 * right-click menu — the working templates themselves never leave the private links.
 */
export default function DesignGallery() {
  const [open, setOpen] = useState<Design | null>(null);

  return (
    <>
      <div className="design-grid">
        {DESIGNS.map((d) => (
          <button key={d.slug} type="button" className="design-card" onClick={() => setOpen(d)} aria-label={`Watch the ${d.name} preview`}>
            <div className="design-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/designs/${d.slug}.webp`} alt={`${d.name} invitation design`} loading="lazy" draggable={false} />
              <span className="design-play"><Play size={18} fill="currentColor" /></span>
              {d.plan === "Signature" && <span className="design-badge">Signature</span>}
            </div>
            <div className="design-meta">
              <div className="design-name">{d.name}</div>
              <div className="design-note">{d.note}</div>
            </div>
          </button>
        ))}
      </div>

      {open && <Viewer design={open} onClose={() => setOpen(null)} />}

      <style>{`
        .design-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
        .design-card{all:unset;cursor:pointer;display:block;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);
          background:var(--cream);box-shadow:0 18px 40px -28px rgba(110,28,43,.3);transition:transform .25s ease,box-shadow .25s ease}
        .design-card:hover{transform:translateY(-4px);box-shadow:0 26px 50px -28px rgba(110,28,43,.45)}
        .design-card:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
        .design-cover{position:relative;aspect-ratio:9/16;background:var(--paper-2);overflow:hidden}
        .design-cover img{width:100%;height:100%;object-fit:cover;display:block;user-select:none;-webkit-user-drag:none;pointer-events:none}
        .design-play{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);width:44px;height:44px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.92);color:var(--maroon);
          box-shadow:0 8px 20px -6px rgba(0,0,0,.35)}
        .design-badge{position:absolute;top:12px;right:12px;font-family:var(--font-ui);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;
          background:var(--gold);color:#3a2a24;padding:4px 10px;border-radius:999px}
        .design-meta{padding:14px 16px 18px}
        .design-name{font-family:var(--font-display);font-size:1.25rem;color:var(--maroon)}
        .design-note{font-family:var(--font-ui);font-size:.8rem;color:var(--muted);margin-top:4px}
        @media (max-width:1000px){.design-grid{grid-template-columns:repeat(3,1fr)}}
        @media (max-width:720px){.design-grid{grid-template-columns:repeat(2,1fr);gap:14px}.design-name{font-size:1.05rem}.design-note{font-size:.72rem}}
      `}</style>
    </>
  );
}

function Viewer({ design, onClose }: { design: Design; onClose: () => void }) {
  const vid = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    vid.current?.play().catch(() => {});
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={`${design.name} preview`} onClick={onClose}>
      <div className="viewer-inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="viewer-close" onClick={onClose} aria-label="Close preview"><X size={20} /></button>
        <div className="viewer-phone" onContextMenu={(e) => e.preventDefault()}>
          <video
            ref={vid}
            src={`/designs/${design.slug}.mp4`}
            poster={`/designs/${design.slug}.webp`}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          />
        </div>
        <div className="viewer-side">
          <div className="eyebrow">{design.plan} design</div>
          <div className="viewer-name">{design.name}</div>
          <p className="viewer-note">{design.note}</p>
          <a
            className="btn"
            style={{ background: "var(--gold)", color: "#3a2a24" }}
            href={waLink(`Hi Aamantran! I love the ${design.name} design — I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire about this design <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .viewer{position:fixed;inset:0;z-index:100;background:rgba(30,12,16,.78);backdrop-filter:blur(6px);
          display:flex;align-items:center;justify-content:center;padding:20px;animation:vfade .25s ease}
        @keyframes vfade{from{opacity:0}to{opacity:1}}
        .viewer-inner{position:relative;display:flex;align-items:center;gap:36px;max-height:100%}
        .viewer-phone{height:min(80vh,720px);aspect-ratio:9/16;border-radius:28px;overflow:hidden;background:#000;
          box-shadow:0 0 0 8px #1b1214,0 30px 80px -20px rgba(0,0,0,.7)}
        .viewer-phone video{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
        .viewer-side{max-width:300px;color:#f3e3cf}
        .viewer-side .eyebrow{color:var(--gold-2)}
        .viewer-name{font-family:var(--font-display);font-size:2.2rem;color:#fff;margin:8px 0 6px;line-height:1.1}
        .viewer-note{font-family:var(--font-ui);font-size:.92rem;color:#e8d3bd;margin-bottom:22px}
        .viewer-close{all:unset;cursor:pointer;position:absolute;top:-6px;right:-6px;transform:translate(100%,-100%);
          width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;display:flex;align-items:center;justify-content:center}
        @media (max-width:720px){
          .viewer{padding:14px}
          .viewer-inner{flex-direction:column;gap:16px}
          .viewer-phone{height:min(68vh,620px);border-radius:20px;box-shadow:0 0 0 5px #1b1214,0 30px 80px -20px rgba(0,0,0,.7)}
          .viewer-side{text-align:center;max-width:none}
          .viewer-name{font-size:1.5rem;margin:4px 0}
          .viewer-note{display:none}
          .viewer-close{top:0;right:0;transform:translate(30%,-30%)}
        }
      `}</style>
    </div>
  );
}
