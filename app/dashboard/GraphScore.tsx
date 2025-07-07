// Ajouter loader avec userSessions

export function GraphScore({ score }: { score: number }) {
  return (
    <>
      <section className="bg-dust rounded-md w-1/3 font-medium text-base">
        <p className=" pt-8 pl-8">Score</p>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-5xl">
            {score * 100}%
          </p>
          <p className="text-ashes">de votre<br/>objectif</p>
        </div>
      </section>
    </>
  );
}
