import { Header } from  "./Header"
import { LeftBar } from "./LeftBar";
import { GraphActivity } from "./GraphActivity"
import { GraphSessions } from "./GraphSession";
import { GraphPerformance } from "./GraphPerformance";
import { KeyDataCard } from "./KeyDataCard";


// Ajouter loader avec user datas


export function Dashboard() {

  return (
    <>
      <Header />
      <main className="flex w-full h-full max-h-full">
        <LeftBar />
        <section className="flex flex-col w-full h-full pt-[3%] pl-[5%] pr-[5%]">
          <h2 className="font-medium text-5xl pb-4">Bonjour <span className="text-tomato">Thomas</span></h2>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          <div className="flex w-full h-[85%] pt-8 pb-8">
            <div className="flex flex-col w-full">
              <GraphActivity />
              <div className="flex  w-full h-[50%] gap-6 mt-6 ">
                <GraphSessions />
                <GraphPerformance />
                <section  className="bg-dust rounded-md w-1/3 ">score</section>
              </div>
            </div>
            <div className="flex flex-col gap-6 ml-6 w-1/4 h-full">
              <KeyDataCard keyDataCount="data" title="Calories" imageUrl="calories-icon.png" />
              <KeyDataCard keyDataCount="data" title="Protéines" imageUrl="protein-icon.png" />
              <KeyDataCard keyDataCount="data" title="Glucides" imageUrl="carbs-icon.png" />
              <KeyDataCard keyDataCount="data" title="Lipides" imageUrl="fat-icon.png" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
