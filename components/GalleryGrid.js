"use client";
import { useEffect, useState } from "react";

export default function GalleryGrid({ items }) {
  const [open, setOpen] = useState(null);
  const real = items.length > 0;
  const tiles = real ? items : Array.from({ length: 9 }, (_, i) => ({ alt: `Photo ${i + 1}` }));

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {!real && <p className="mb-8 rounded-lg bg-pale p-4 font-display text-sm font-semibold text-deep">Placeholders. Add photos to <code>public/gallery</code> and list them in <code>data/site.js</code>.</p>}
      <div className="columns-2 gap-4 md:columns-3">
        {tiles.map((p, i) => (
          <button key={i} disabled={!real} onClick={() => setOpen(p)} className="group mb-4 block w-full overflow-hidden rounded-xl text-left">
            {real ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
            ) : (
              <span className={`block w-full ${["aspect-[3/4]", "aspect-square", "aspect-[4/3]"][i % 3]} ${["bg-blush", "bg-sage", "bg-moss/80"][i % 3]}`} />
            )}
          </button>
        ))}
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 grid animate-fade place-items-center bg-deep/95 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={open.alt} className="max-h-[85vh] max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
}
