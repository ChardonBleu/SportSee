import { type ReactElement, useRef, useState, useEffect } from "react";
import { RadialBarChart, RadialBar } from "recharts";

/**
 * Component for dayli score
 * @param { number } score daily score of the user
 * @return { ReactElement }
 */
export function GraphScore({ score }: { score: number }): ReactElement {
  const graphScoreRef = useRef<HTMLDivElement>(null);
  const [graphDimension, setGraphDimensions] = useState(200);

  useEffect(() => {
    const handleGraphDimensions = () => {
      if (graphScoreRef.current) {
        const { width, height } = graphScoreRef.current.getBoundingClientRect();
        const minDim = Math.min(width, height);
        setGraphDimensions(minDim - 0.2 * minDim);
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

  const userScore = score * 100;

  const data = [
    {
      name: "userScore",
      score: 100,
      fill: "white",
    },
    {
      name: "userScore",
      score: `${userScore}`,
      fill: "var(--color-tomato)",
    },
  ];

  return (
    <>
      <section
        className="bg-dust rounded-md w-1/3 font-medium text-base flex flex-col items-center justify-center relative"
        ref={graphScoreRef}
      >
        <p className="pt-2 pl-4 xl:pt-8 xl:pl-8 self-start">Score</p>
        <div className="w-[`${graphDimension}px`] aspect-square rounded-full bg-white flex justify-center items-center">
          <RadialBarChart
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="110%"
            startAngle={90}
            endAngle={450}
            width={graphDimension}
            height={graphDimension}
          >
            <RadialBar
              dataKey="score"
              background={{ fill: "var(--color-dust" }}
              cornerRadius={20}
              barSize={12}
            />
          </RadialBarChart>
        </div>
        <div className="flex flex-col items-center justify-center absolute inset-y-40">
          <p className="text-coal text-2xl font-bold">{userScore}%</p>
          <p className="text-ashes2 font-medium text-base">
            de votre
            <br /> objectif
          </p>
        </div>
      </section>
    </>
  );
}
