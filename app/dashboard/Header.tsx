import { NavLink } from "react-router"

export function Header() {
  return (
    <>
        <header className="flex justify-between items-center">
            <img src="/logo.png" alt="SportSee" width="180px"></img>
            <nav>
                <NavLink to="/" className="cursor-pointer">Accueil</NavLink>
                <NavLink to="/" className="cursor-pointer">Profil</NavLink>
                <NavLink to="/" className="cursor-pointer">Réglage</NavLink>
                <NavLink to="/" className="cursor-pointer">communaté</NavLink>
            </nav>
        </header>
    </>

  );
}