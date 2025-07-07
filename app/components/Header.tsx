import { NavLink } from "react-router";
import { type ReactElement } from "react";

/**
 * Header Component for all routes
 * @param { id } id of the user as an integer
 * @return { ReactElement }
 */
export function Header({ id }: { id: number }): ReactElement {
  return (
    <>
      <header className="flex justify-between items-center  h-20 bg-coal w-full gap-[10%] pl-4 pr-[5%] shadow-md/25">
        <img src="/logo.png" alt="SportSee" width="160px"></img>
        <NavLink
          to="/"
          className="cursor-pointer text-white font-medium text-xl"
        >
          Accueil
        </NavLink>
        <NavLink
          to={`profile/${id}`}
          className="cursor-pointer text-white font-medium text-xl"
        >
          Profil
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer text-white font-medium text-xl"
        >
          Réglage
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer text-white font-medium text-xl"
        >
          Communauté
        </NavLink>
      </header>
    </>
  );
}
