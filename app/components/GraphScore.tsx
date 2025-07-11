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
        setGraphDimensions(minDim - 0.3 * minDim);
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
      name: "0",
      score: 0,
      fill: "transparent",
    },
    {
      name: "userScore",
      score: `${userScore}`,
      fill: "var(--color-tomato)",
    },
    {
      name: "100",
      score: 100,
      fill: "transparent",
    },
  ];

  return (
    <>
      <section
        className="bg-dust rounded-md w-1/3 font-medium text-base flex flex-col items-center justify-center"
        ref={graphScoreRef}
      >
        <p className="pt-2 pl-4 xl:pt-8 xl:pl-8 self-start">Score</p>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
          width={graphDimension}
          height={graphDimension}
        >
          <RadialBar dataKey="score" radius={20} />
        </RadialBarChart>

        <p>{userScore}%</p>
      </section>
    </>
  );
}
