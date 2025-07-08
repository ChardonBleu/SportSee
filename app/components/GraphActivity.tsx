import { useEffect, useRef, useState, type ReactElement } from "react";
import { fetchUserActivity } from "~/api/fetchUserActivity";
import type { Activity } from "~/types/activityTypes";
import { Loader } from "../utilities/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

/**
 * Component for daily activity
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphActivity({ userId }: { userId: number }): ReactElement {
  const [UserActivity, setUserActivity] = useState<Activity | null>(null);
  const graphActivityRef = useRef<HTMLDivElement>(null);
  const [graphDimensions, setGraphDimensions] = useState({
    width: 730,
    height: 250,
  });

  useEffect(() => {
    const fetchUserActivityData = async () => {
      const data = await fetchUserActivity(userId);
      setUserActivity(data);
    };
    fetchUserActivityData();
  }, [userId]);

  useEffect(() => {
    const handleGraphDimensions = () => {
      if (graphActivityRef.current) {
        let { width, height } =
          graphActivityRef.current.getBoundingClientRect();
        width = width - 0.02 * width;
        height = height - 0.2 * height;
        setGraphDimensions({ width, height });
      }
    };

    // Appeler handleGraphDimensions immédiatement pour obtenir les dimensions initiales
    // Ajoutez un délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      handleGraphDimensions();
    }, 100);

    // Ajouter un écouteur d'événement pour les redimensionnements
    window.addEventListener("resize", handleGraphDimensions);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleGraphDimensions);
      clearTimeout(timer);
    };
  }, []);

  if (!UserActivity) {
    return <Loader />;
  }

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
  }) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="custom-tooltip bg-tomato font-medium text-xs flex flex-col items-center justify-center gap-6 m-3 p-3"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label text-white pb-4">{`${payload[0].value}`}kg</p>
            <p className="label text-white">{`${payload[1].value}`}kCal</p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="bg-dust rounded-md w-full h-[50%]" ref={graphActivityRef}>
        <section className="flex justify-between items-center p-6">
          <h2 className="text-base text-coal font-medium">
            Activité quotidienne
          </h2>
          <div className="flex justify-between gap-10 items-center text-base">
            <div className="flex items-center">
              <div className="bg-coal w-[8px] h-[8px] rounded-full mr-3"></div>
              <p className="text-ashes2">Poids (kg)</p>
            </div>
            <div className="flex items-center">
              <div className="bg-tomato w-[8px] h-[8px] rounded-full mr-3"></div>
              <p className="text-ashes2">Calories brûlées (kCal)</p>
            </div>
          </div>
        </section>
        <div className="pl-6">
          <BarChart
            width={graphDimensions.width}
            height={graphDimensions.height}
            data={UserActivity.sessions}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" stroke="var(--color-ashes)" />
            <YAxis orientation="right" stroke="var(--color-ashes)" />
            <Tooltip content={CustomTooltip} />
            <Bar
              dataKey="kilogram"
              fill="var(--color-coal)"
              barSize={8}
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="var(--color-tomato"
              barSize={8}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </div>
      </div>
    </>
  );
}
