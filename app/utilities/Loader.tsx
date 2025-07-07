/**
 * Loader compoenet
 * @return { ReactElement }
 */
export function Loader() {
  return (
    <>
      <section className="bg-dust rounded-md flex flex-col justify-center items-center mt-48">
        <p className="font-base text-5xl">Loading</p>
        <div className="loader mt-16"></div>
      </section>
    </>
  );
}
