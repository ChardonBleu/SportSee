import type { KeyDataCardProps } from "~/types/userTypes";

export function KeyDataCard({keyDataCount, title, imageUrl}: KeyDataCardProps) {
  return (
    <>
        <section className="bg-dust rounded-md h-1/4 flex items-center gap-8 pl-8">
        <img src={imageUrl} alt="calories" className="w-[60px] aspect-square" />
        <div className="flex flex-col">
            <p className="font-bold  text-xl">{keyDataCount}</p>
            <h2 className="font-medium text-ashes text-sm">{title}</h2>
        </div>
        </section>

    </>

  );
}