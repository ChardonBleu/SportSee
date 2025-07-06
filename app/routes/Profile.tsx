import { LeftBar } from "../dashboard/LeftBar";
import { GraphActivity } from "../dashboard//GraphActivity";
import { GraphSessions } from "../dashboard//GraphSession";
import { GraphPerformance } from "../dashboard//GraphPerformance";
import { KeyDataCard } from "../dashboard//KeyDataCard";
import { mockFetchUser } from "~/api/fetchUser";
import type { Route } from "../routes/+types/home";
import type { User } from "~/types/userTypes";
import { GraphScore } from "~/dashboard/GraphScore";

export async function loader() {
  const user = mockFetchUser();
  return user;
}

export default function Profile({ loaderData }: Route.ComponentProps) {
  if (!loaderData) {
    throw new Error("no datas");
  }

  const user: User = loaderData;
  const calorieCount = `${user.keyData.calorieCount}kCal`;
  const proteinCount = `${user.keyData.proteinCount}g`;
  const carbohydrateCount = `${user.keyData.carbohydrateCount}g`;
  const lipidCount = `${user.keyData.lipidCount}g`;

  return (
    <>
      <main className="flex w-full h-full max-h-full">
        <LeftBar />
        <section className="flex flex-col w-full h-full pt-[3%] pl-[5%] pr-[5%]">
          <h2 className="font-medium text-5xl pb-4">
            Bonjour{" "}
            <span className="text-tomato">{user.userInfos.firstName}</span>
          </h2>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          <div className="flex w-full h-[85%] pt-8 pb-8">
            <div className="flex flex-col w-full">
              <GraphActivity />
              <div className="flex  w-full h-[50%] gap-6 mt-6 ">
                <GraphSessions />
                <GraphPerformance />
                <GraphScore score={user.score} />
              </div>
            </div>
            <div className="flex flex-col gap-6 ml-6 w-1/4 h-full">
              <KeyDataCard
                keyDataCount={calorieCount}
                title="Calories"
                imageUrl="/calories-icon.png"
              />
              <KeyDataCard
                keyDataCount={proteinCount}
                title="Protéines"
                imageUrl="/protein-icon.png"
              />
              <KeyDataCard
                keyDataCount={carbohydrateCount}
                title="Glucides"
                imageUrl="/carbs-icon.png"
              />
              <KeyDataCard
                keyDataCount={lipidCount}
                title="Lipides"
                imageUrl="/fat-icon.png"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
