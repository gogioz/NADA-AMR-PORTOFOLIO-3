import PageTitle from "../../components/PageTitle";
import WorkGrid from "../../components/WorkGrid";
import { films } from "../../data/site";

export const metadata = { title: "Work | Nada Ghonemy" };

export default function Work() {
  return (
    <main>
      <PageTitle kicker="Films" title="Selected work">Documentaries, features and video stories. Select a film to watch it here.</PageTitle>
      <div className="mx-auto max-w-6xl px-6 py-20"><WorkGrid films={films} /></div>
    </main>
  );
}
