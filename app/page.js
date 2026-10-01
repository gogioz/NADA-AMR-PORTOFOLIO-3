import Link from "next/link";
import Reveal from "../components/Reveal";
import WorkGrid from "../components/WorkGrid";
import { site, films, reports, services } from "../data/site";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-moss text-white">
        <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] animate-float rounded-full bg-blush/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-36">
          <p className="animate-rise font-display text-sm font-bold text-blush">{site.role}</p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,14vw,10rem)] font-extrabold leading-[.88] tracking-tighter">
            <span style={{ animationDelay: "150ms" }} className="block animate-rise">Nada</span>
            <span style={{ animationDelay: "300ms" }} className="block animate-rise text-blush">Ghonemy</span>
          </h1>
          <p style={{ animationDelay: "500ms" }} className="mt-8 max-w-xl animate-rise text-xl text-pale">{site.tagline}</p>
          <div style={{ animationDelay: "650ms" }} className="mt-10 flex flex-wrap gap-3 font-display font-bold animate-rise">
            <Link href="/work" className="rounded-full bg-blush px-7 py-3.5 text-deep transition duration-300 hover:-translate-y-0.5 hover:bg-white">View work</Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-7 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-blush hover:text-blush">Get in touch</Link>
          </div>
          <dl style={{ animationDelay: "800ms" }} className="mt-16 grid max-w-lg animate-rise grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[["10+", "years of experience"], ["5", "media organizations"], ["3", "formats: video, words, photo"]].map(([n, l]) => (
              <div key={l}><dd className="font-display text-4xl font-extrabold text-blush">{n}</dd><dt className="text-sm text-white/70">{l}</dt></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-moss sm:text-5xl">Selected work</h2>
          <Link href="/work" className="font-display text-sm font-bold text-moss underline decoration-blush decoration-4 underline-offset-4">All films</Link>
        </Reveal>
        <Reveal><WorkGrid films={films} limit={3} /></Reveal>
      </section>

      <section className="bg-pale py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><h2 className="mb-12 font-display text-4xl font-extrabold tracking-tight text-moss sm:text-5xl">What I do</h2></Reveal>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 100}>
                <h3 className="border-t-2 border-moss pt-4 font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-base text-muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-moss sm:text-5xl">Reports and projects</h2>
          <Link href="/reports" className="font-display text-sm font-bold text-moss underline decoration-blush decoration-4 underline-offset-4">See all</Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {reports.slice(0, 3).map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <article className="h-full rounded-xl border border-sage bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-moss">
                <p className="font-display text-xs font-bold text-moss">{r.outlet}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-base text-muted">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
