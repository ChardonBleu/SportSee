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
      score: `${userScore}`,
      fill: "var(--color-tomato)",
    },
  ];

  return (
    <>
      <section
        className="bg-dust rounded-md w-1/3 font-medium text-base flex flex-col items-center justify-center"
        ref={graphScoreRef}
      >
        <p className="pt-2 pl-4 xl:pt-8 xl:pl-8 self-start">Score</p>
        <div className="flex justify-center items-center mb-8 relative">
          <RadialBarChart
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="95%"
            startAngle={90}
            endAngle={90 + score * 360}
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
          <div className="flex flex-col items-center justify-center absolute bg-white w-[80%] aspect-square rounded-full">
            <p className="text-coal text-2xl font-bold">{userScore}%</p>
            <p className="text-ashes2 font-medium text-base">
              de votre
              <br /> objectif
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
