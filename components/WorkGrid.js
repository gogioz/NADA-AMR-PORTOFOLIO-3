"use client";
import { useEffect, useState } from "react";

export default function WorkGrid({ films, limit }) {
  const [active, setActive] = useState(null);
  const list = limit ? films.slice(0, limit) : films;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f) => (
          <button key={f.id} onClick={() => setActive(f)} className="group text-left">
            <span className="relative block aspect-video overflow-hidden rounded-xl bg-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://img.youtube.com/vi/${f.id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-blush shadow-lg transition duration-300 group-hover:scale-110">
                  <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-deep" />
                </span>
              </span>
            </span>
            <span className="mt-3 block font-display text-xl font-bold transition-colors group-hover:text-moss">{f.title}</span>
            {f.meta && <span className="text-sm text-muted">{f.meta}</span>}
          </button>
        ))}
      </div>

      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)} className="fixed inset-0 z-50 grid animate-fade place-items-center bg-deep/90 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`} title={active.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
            <div className="mt-4 flex items-center justify-between font-display text-white">
              <span className="text-lg font-bold">{active.title}</span>
              <button onClick={() => setActive(null)} className="rounded-full bg-blush px-5 py-2 text-sm font-bold text-deep hover:bg-white">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
