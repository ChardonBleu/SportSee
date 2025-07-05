import { NavLink } from "react-router"

export function Header() {
  return (
    <>
        <header className="flex justify-between items-center  h-20 bg-coal w-full gap-[10%] pl-4 pr-[5%]">
            <img src="/logo.png" alt="SportSee" width="160px"></img>
            <NavLink to="/" className="cursor-pointer text-white font-medium text-xl">Accueil</NavLink>
            <NavLink to="/" className="cursor-pointer text-white font-medium text-xl">Profil</NavLink>
            <NavLink to="/" className="cursor-pointer text-white font-medium text-xl">Réglage</NavLink>
            <NavLink to="/" className="cursor-pointer text-white font-medium text-xl">Communauté</NavLink>
        </header>
    </>

  );
}