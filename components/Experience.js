"use client";
import { useState } from "react";

export default function Experience({ jobs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-sage border-y border-sage">
      {jobs.map((j, i) => {
        const isOpen = open === i;
        return (
          <div key={j.org}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-start justify-between gap-6 py-6 text-left">
              <span>
                <span className="block font-display text-sm font-semibold text-muted">{j.when}</span>
                <span className="block font-display text-xl font-bold sm:text-2xl">{j.title}</span>
                <span className="block font-display font-semibold text-moss">{j.org}</span>
              </span>
              <span className={`mt-2 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-sage font-display text-lg transition duration-300 ${isOpen ? "rotate-45 border-moss bg-blush text-deep" : ""}`}>+</span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <ul className="max-w-2xl list-disc space-y-1.5 pb-7 pl-5 text-base text-muted marker:text-moss">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
