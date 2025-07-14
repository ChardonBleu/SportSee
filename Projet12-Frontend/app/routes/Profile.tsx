import type { ReactElement } from "react";
import { LeftBar } from "../components/LeftBar";
import { GraphActivity } from "../components/GraphActivity";
import { GraphSessions } from "../components/GraphSession";
import { GraphPerformance } from "../components/GraphPerformance";
import { KeyDataCard } from "../components/KeyDataCard";
import type { Route } from "./+types/Profile";
import type { User } from "~/types/userTypes";
import { GraphScore } from "~/components/GraphScore";
import { fetchUser } from "~/api/fetchUser";
import { Loader } from "../utilities/Loader";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const user = await fetchUser(params.userId);
  return user;
}

export function HydrateFallback() {
  return <Loader />;
}

/**
 *Profil Component with all user datas
 * @return { ReactElement }
 */
export default function Profile({
  loaderData,
}: Route.ComponentProps): ReactElement {
  if (!loaderData) {
    throw new Error("sorry, no user datas!");
  }

  const user: User = loaderData;
  const calorieCount = `${user.keyData.calorieCount}kCal`;
  const proteinCount = `${user.keyData.proteinCount}g`;
  const carbohydrateCount = `${user.keyData.carbohydrateCount}g`;
  const lipidCount = `${user.keyData.lipidCount}g`;

  return (
    <>
      <main className="flex h-full max-h-full">
        <LeftBar />
        <section className="flex flex-col w-[95%] h-full pt-[3%] pl-[5%] xl:pt-[5%] xl:pl-48 pr-[5%]">
          <h2 className="font-medium text-5xl pb-4">
            Bonjour{" "}
            <span className="text-tomato">{user.userInfos.firstName}</span>
          </h2>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          <div className="flex items-center gap-4 w-full h-[85%] pt-8 pb-8">
            <div className="flex flex-col w-3/4">
              <GraphActivity userId={user.id} />
              <div className="flex w-full h-[50%] gap-6 mt-6">
                <GraphSessions userId={user.id} />
                <GraphPerformance userId={user.id} />
                <GraphScore score={user.score} />
              </div>
            </div>
            <div className="flex flex-col gap-6 ml-6 h-full">
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
