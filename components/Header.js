"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["/work", "Work"], ["/gallery", "Gallery"], ["/reports", "Reports"], ["/about", "About"], ["/contact", "Contact"]];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-sage/60 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight text-moss" onClick={() => setOpen(false)}>Nada Ghonemy</Link>
        <button className="font-display text-sm font-bold md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav aria-label="Main" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-sage/60 bg-paper px-6 pb-4 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`py-2 font-display text-sm font-semibold transition-colors duration-300 hover:text-moss ${path.startsWith(href) ? "text-moss underline decoration-blush decoration-4 underline-offset-8" : "text-muted"}`}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
