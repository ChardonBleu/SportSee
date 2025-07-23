import { type RouteConfig, route, index } from "@react-router/dev/routes";

/**
 * Routes gérées par React-Routeur v7, en mode framework
 * Route pour la page d'accueil: /
 *  contient les liens vers deux exemples d'utilisateurs
 * Route pour la page profil d'un utilisateur: /profile/:userId
 *  contient les graphes d'activité
 * React Router V7 gère le routing à partir des composants Layout et App
 * qui se trouvent dans le fichier root.tsx
 * La route ci-dessous équivaut à:
 * {
    path: "/",
    Component: App, // Composant parent
    children: [
      index("./routes/home.tsx"),
      route("profile/:userId", "./routes/Profile.tsx"),
    ]
  }
    Flux de rendu géré automatiquement par React Router:
    Layout
└── {children} = App
    └── <Header id={18} />
    └── <Outlet /> = contenu de la route active
 * @return { array<RouteConfigEntry>}
 */
export default [
  index("./routes/home.tsx"),
  route("profile/:userId", "./routes/Profile.tsx"),
] satisfies RouteConfig;
