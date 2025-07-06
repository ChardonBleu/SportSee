// Ajouter loader avec userSessions

export function GraphScore({ score }: { score: number }) {
  return (
    <>
      <section className="bg-dust rounded-md w-1/3 ">
        <p className="font-medium text-base pt-8 pl-8">Score</p>
        <p className="flex items-center justify-center text-5xl">
          {score * 100}%
        </p>
      </section>
    </>
  );
}
