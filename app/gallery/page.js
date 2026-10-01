import PageTitle from "../../components/PageTitle";
import GalleryGrid from "../../components/GalleryGrid";
import { gallery } from "../../data/site";

export const metadata = { title: "Gallery | Nada Ghonemy" };

export default function Gallery() {
  return (
    <main>
      <PageTitle kicker="Photography" title="Gallery">Stills from the field, from sets and from stories along the way.</PageTitle>
      <div className="mx-auto max-w-6xl px-6 py-20"><GalleryGrid items={gallery} /></div>
    </main>
  );
}
