// Ajouter loader avec userPerformance
import { useEffect, useState } from "react";
import { fetchUserPerformance } from "~/api/fetchUserPerformance";
import { Loader } from "~/utilities/Loader";
import type { Performance } from "~/types/performanceTypes";

export function GraphPerformance({ userId }: { userId: number }) {
  const [Performance, setPerformance] = useState(null);
  
    useEffect(() => {
      const fetchPerformanceData = async () => {
        const data = await fetchUserPerformance(userId);
        setPerformance(data);
      };
      fetchPerformanceData();
    }, [userId]);
  
    if (!Performance) {
      return <Loader />;
    }
  
    const performance: Performance = Performance;

  return (
    <>
      <section className="bg-coal text-white rounded-md w-1/3">
        <div className="p-4">
            {performance.data.map((perf) => 
              <p key={performance.data.indexOf(perf)}>
                {performance.kind[perf.kind.toString()]} : {perf.value}
              </p>
            )}
        </div>
      </section>
    </>
  );
}
