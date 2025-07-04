import { Header } from  "./Header"
import { LeftBar } from "./LeftBar";

export function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex w-full">
        <LeftBar />
        <section className="flex flex-col p-4 w-full">
          <h2>Bonjour Thomas</h2>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <section>activité quotidienne</section>
              <div className="flex justify-center items-center">
                <section>durée moyenne des cessions</section>
                <div>radar</div>
                <section>score</section>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <section>calories</section>
              <section>protéines</section>
              <section>glucides</section>
              <section>lipides</section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
