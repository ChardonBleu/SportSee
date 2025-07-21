import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "./components/Header";
import type { ReactElement } from "react";

/**
 * Pour le contenu des balises link du layout
 * @return { Array<object> }
 */
export const links = (): Array<object> => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

/**
 * Pour le contenu des balises meta du layout
 * @return { array<object> }
 */
export function meta(): Array<object> {
  return [
    { title: "SportSee" },
    { name: "description", content: "Welcome to SportSee!" },
  ];
}

/**
 * Layout donnant la structure de base de la page index.html
 * @return { ReactElement }
 */
export function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Composant App intégré au Layout à l'emplacement du children
 * @return { ReactElement }
 */
export default function App(): ReactElement {
  // A terme valeur de l'id pour le Header à remplacer par valeur fournie par authentification
  return (
    <>
      <Header id={18} />
      <Outlet />
    </>
  );
}

/**
 * Gestion des erreurs de route avec personnalisation du contenu de la page d'erreur 404.
 * @return { ReactElement }
 */
export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps): ReactElement {
  let message = "Zut!";
  let details = "Une; erreur inattendue est survenue.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Erreur 404" : "Erreur";
    details =
      error.status === 404
        ? "Oups! Le page est partie nager 🏊"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto flex flex-col items-center justify-center text-3xl font-semibold">
      <h1 className="pb-10 text-5xl">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto text-base">
          <code>{stack}</code>
        </pre>
      )}
      <NavLink to="/" className="font-light mt-50 underline">
        Retour à l&#39;accueil
      </NavLink>
    </main>
  );
}
