import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-moss text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold text-blush">{site.name}</p>
          <p className="text-base text-pale">{site.role} · {site.location}</p>
        </div>
        <div className="font-display text-sm font-semibold sm:text-right">
          <a href={`mailto:${site.email}`} className="block transition-colors hover:text-blush">{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-blush">{site.phone}</a>
          <p className="mt-3 font-normal text-sage">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
