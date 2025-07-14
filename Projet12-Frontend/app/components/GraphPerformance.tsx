import { useEffect, useState, type ReactElement, useRef } from "react";
import { fetchUserPerformance } from "~/api/fetchUserPerformance";
import { Loader } from "~/utilities/Loader";
import type { Performance, KindTranslation } from "~/types/performanceTypes";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import type { TickItemTextProps } from "recharts/types/polar/PolarAngleAxis";

/**
 * Component for preformances radar
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphPerformance({ userId }: { userId: number }): ReactElement {
  const [UserPerformance, setUserPerformance] = useState<Performance | null>(
    null,
  );
  const graphPerformanceRef = useRef<HTMLDivElement>(null);
  const [graphDimensions, setGraphDimensions] = useState({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const fetchUserPerformanceData = async () => {
      const data = await fetchUserPerformance(userId);
      setUserPerformance(data);
    };
    fetchUserPerformanceData();
  }, [userId]);

  useEffect(() => {
    const handleGraphDimensions = () => {
      if (graphPerformanceRef.current) {
        const { width, height } =
          graphPerformanceRef.current.getBoundingClientRect();
        setGraphDimensions({ width, height });
      }
    };
    const timer = setTimeout(() => {
      handleGraphDimensions();
    }, 100);
    window.addEventListener("resize", handleGraphDimensions);
    return () => {
      window.removeEventListener("resize", handleGraphDimensions);
      clearTimeout(timer);
    };
  }, []);

  if (!UserPerformance) {
    return <Loader />;
  }

  const kindTranslation: KindTranslation = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  const reorderedUserPerformance = UserPerformance.data
    .slice(2)
    .concat(UserPerformance.data.slice(0, 2));
  const formatedUserPerformance = reorderedUserPerformance.map((perf) => ({
    value: perf.value,
    kind: kindTranslation[UserPerformance.kind[perf.kind.toString()]],
  }));

  const CustomTick = ({
    payload,
    x,
    y,
    textAnchor,
    ...rest
  }: TickItemTextProps) => {
    y = Number(y);
    const newy =
      payload.coordinate == 90
        ? y - 8
        : payload.coordinate === -90
          ? y + 10
          : y;

    return (
      <g {...rest}>
        <text
          x={x}
          y={newy}
          textAnchor={textAnchor}
          fill="#FFFFFF"
          fontSize={12}
          fontWeight="medium"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <>
      <section
        className="bg-coal text-white rounded-md w-1/3"
        ref={graphPerformanceRef}
      >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={formatedUserPerformance}
          width={graphDimensions.width}
          height={graphDimensions.height}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={CustomTick}
          />

          <Radar
            dataKey="value"
            fill="var(--color-tomato)"
            fillOpacity={0.6}
            activeDot={false}
          />
        </RadarChart>
      </section>
    </>
  );
}
