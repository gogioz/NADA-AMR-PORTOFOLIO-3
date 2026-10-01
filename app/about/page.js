import PageTitle from "../../components/PageTitle";
import Reveal from "../../components/Reveal";
import Experience from "../../components/Experience";
import { experience, skills, languages, education, training } from "../../data/cv";

export const metadata = { title: "About | Nada Ghonemy" };

export default function About() {
  return (
    <main>
      <PageTitle kicker="About" title="Nada Ghonemy" />
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
            Multimedia journalist and video producer with 10+ years of experience creating digital video, written stories, documentaries and feature content for established media organizations. Experienced across the full production process, from story development to digital publishing, with a strong background in human-interest storytelling and field reporting. Leads visual teams and manages digital projects.
          </p>
        </Reveal>

        <Reveal className="mt-20"><h2 className="mb-6 font-display text-3xl font-extrabold text-moss">Experience</h2><Experience jobs={experience} /></Reveal>

        <Reveal className="mt-20">
          <h2 className="mb-6 font-display text-3xl font-extrabold text-moss">Skills</h2>
          {Object.entries(skills).map(([g, items]) => (
            <div key={g} className="mb-6">
              <h3 className="mb-3 font-display text-lg font-bold">{g}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => <span key={s} className="rounded-full bg-pale px-3.5 py-1.5 font-display text-sm font-semibold text-deep transition duration-300 hover:bg-moss hover:text-white">{s}</span>)}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-20 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-display text-lg font-bold">Education</h3>
            <p className="text-base text-muted">{education.degree}, {education.school}.</p>
            <h3 className="mb-2 mt-6 font-display text-lg font-bold">Languages</h3>
            <p className="text-base text-muted">{languages}</p>
          </div>
          <div>
            <h3 className="mb-2 font-display text-lg font-bold">Training</h3>
            <ul className="list-disc space-y-1.5 pl-5 text-base text-muted marker:text-moss">{training.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
