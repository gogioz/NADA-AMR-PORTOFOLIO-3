import PageTitle from "../../components/PageTitle";
import ContactForm from "../../components/ContactForm";
import { site } from "../../data/site";

export const metadata = { title: "Contact | Nada Ghonemy" };

export default function Contact() {
  return (
    <main>
      <PageTitle kicker="Contact" title="Let's make something real">Available for documentary projects, reports, field assignments and commissions.</PageTitle>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6 font-display">
          {[["Email", site.email, `mailto:${site.email}`], ["Phone", site.phone, `tel:${site.phone.replace(/\s/g, "")}`], ["Location", site.location]].map(([l, v, h]) => (
            <div key={l}>
              <p className="text-sm font-bold text-moss">{l}</p>
              {h ? <a href={h} className="break-all text-xl font-semibold transition-colors hover:text-moss">{v}</a> : <p className="text-xl font-semibold">{v}</p>}
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
