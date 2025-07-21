import { useEffect, useState, useRef, type ReactElement } from "react";
import { Loading } from "~/utilities/Loading";
import type { Sessions } from "~/types/sesssionTypes";
import { Tooltip, LineChart, Line } from "recharts";
import ApiService from "~/api/ApiService";

/**
 * Component for dayli sessions
 * @param { String } userId id of the user
 * @return { ReactElement }
 */
export function GraphSessions({ userId }: { userId: number }): ReactElement {
  const [UserSessions, setUserSessions] = useState<Sessions | null>(null);
  const graphsessionsRef = useRef<HTMLDivElement>(null);
  const [graphDimensions, setGraphDimensions] = useState({
    width: 400,
    height: 100,
  });

  useEffect(() => {
    const fetchUserSessionsData = async () => {
      const data = await ApiService.getUserSessions(userId)
      setUserSessions(data);
    };
    fetchUserSessionsData();
  }, [userId]);

  useEffect(() => {
    const handleGraphDimensions = () => {
      if (graphsessionsRef.current) {
        let { width, height } =
          graphsessionsRef.current.getBoundingClientRect();
        width = width + 0.01 * width;
        height = height - 0.7 * height;
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

  if (!UserSessions) {
    return <Loading />;
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
        className="custom-tooltip bg-white font-medium text-xs flex flex-col items-center justify-center p-4"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label text-black">{`${payload[0].value}`} min</p>
          </>
        )}
      </div>
    );
  };

  const sessions: Sessions = UserSessions;

  return (
    <>
      <section
        className="bg-tomato rounded-md w-1/3 flex flex-col justify-between pt-4 pb-2 xl:pt-8 xl:pb-4"
        ref={graphsessionsRef}
      >
        <p className="text-white opacity-50 w-full xl:w-1/2 pl-4 xl:pl-8">
          durée moyenne des cessions
        </p>

        <LineChart
          width={graphDimensions.width}
          height={graphDimensions.height}
          data={sessions.sessions}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="25%" stopColor="rgba(255, 255, 255, 0.35)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="75%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#gradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "white" }}
            connectNulls={false}
          />
          <Tooltip content={CustomTooltip} cursor={false} />
        </LineChart>

        <div className="flex justify-between text-white opacity-50  w-full lg:pt-2 pl-4 pr-4">
          <p>L</p>
          <p>M</p>
          <p>M</p>
          <p>J</p>
          <p>V</p>
          <p>S</p>
          <p>D</p>
        </div>
      </section>
    </>
  );
}
