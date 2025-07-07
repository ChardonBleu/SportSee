import { useEffect, useState, type ReactElement } from "react";
import { fetchUserPerformance } from "~/api/fetchUserPerformance";
import { Loader } from "~/utilities/Loader";
import type { Performance } from "~/types/performanceTypes";

/**
 * Component for preformances radar
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphPerformance({ userId }: { userId: number }): ReactElement {
  const [UserPerformance, setUserPerformance] = useState<Performance | null>(
    null,
  );

  useEffect(() => {
    const fetchUserPerformanceData = async () => {
      const data = await fetchUserPerformance(userId);
      setUserPerformance(data);
    };
    fetchUserPerformanceData();
  }, [userId]);

  if (!UserPerformance) {
    return <Loader />;
  }

  return (
    <>
      <section className="bg-coal text-white rounded-md w-1/3">
        <div className="p-4">
          {UserPerformance.data.map((perf) => (
            <p key={UserPerformance.data.indexOf(perf)}>
              {UserPerformance.kind[perf.kind.toString()]} : {perf.value}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
