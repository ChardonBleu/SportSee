import type { KeyDataCardProps } from "~/types/userTypes";
import { type ReactElement } from "react";

/**
 * Component for key Card data
 * @param { KeyDataCardProps } { keyDataCount value of the indicator, title indicator, imageUrl logo indicator }
 * @return { ReactElement }
 */
export function KeyDataCard({
  keyDataCount,
  title,
  imageUrl,
}: KeyDataCardProps): ReactElement {
  return (
    <>
      <section className="bg-dust rounded-md flex items-center gap-8 p-4 xl:p-8 w-full">
        <img src={imageUrl} alt="calories" className="w-[40px] xl:w-[60px] aspect-square" />
        <div className="flex flex-col">
          <p className="font-bold  text-xl">{keyDataCount}</p>
          <h2 className="font-medium text-ashes text-sm">{title}</h2>
        </div>
      </section>
    </>
  );
}
