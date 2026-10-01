import PageTitle from "../../components/PageTitle";
import Reveal from "../../components/Reveal";
import { reports } from "../../data/site";

export const metadata = { title: "Reports | Nada Ghonemy" };

export default function Reports() {
  return (
    <main>
      <PageTitle kicker="Journalism" title="Reports and projects">Investigations, digital storytelling projects and features across newsrooms.</PageTitle>
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        {reports.map((r, i) => (
          <Reveal key={r.title} delay={(i % 2) * 100}>
            <article className="h-full rounded-xl border border-sage bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-moss">
              <p className="font-display text-xs font-bold text-moss">{r.outlet} · {r.role}</p>
              <h2 className="mt-2 font-display text-2xl font-bold">{r.title}</h2>
              <p className="mt-3 text-base text-muted">{r.text}</p>
              {r.link && <a href={r.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-display text-sm font-bold text-moss underline decoration-blush decoration-4 underline-offset-4">Read the report</a>}
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
