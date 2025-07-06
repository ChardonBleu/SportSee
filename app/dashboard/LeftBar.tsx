export function LeftBar() {
  return (
    <>
      <aside className="flex flex-col items-center justify-between bg-coal w-24 pt-[15%] h-full">
        <div className="flex flex-col gap-6">
          <img
            src="/icon-yoga.png"
            alt="bouton yoga"
            className="cursor-pointer"
            width="40px"
          ></img>
          <img
            src="/icon-swim.png"
            alt="bouton yoga"
            className="cursor-pointer"
            width="40px"
          ></img>
          <img
            src="/icon-bike.png"
            alt="bouton yoga"
            className="cursor-pointer"
            width="40px"
          ></img>
          <img
            src="/icon-muscle.png"
            alt="bouton yoga"
            className="cursor-pointer"
            width="40px"
          ></img>
        </div>
        <p className="writing-vertical-lr rotate-180 text-white text-xs mb-8">
          Copyright, SportSee 2020
        </p>
      </aside>
    </>
  );
}
