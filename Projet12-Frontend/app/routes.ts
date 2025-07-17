import { type RouteConfig, route, index } from "@react-router/dev/routes";

/**
 * Routes gérées par React-Routeur v7, en mode framework
 * Route pour la page d'accueil: /home.tsx 
 *  contient les liens vers deux exemples d'utilisateurs
 * Route pour la page profil d'un utilisateur: /profile/:userId
 *  contient les graphes d'activité
 * @return { array<RouteConfigEntry>}
 */
export default [
  index("./routes//home.tsx"),
  route("profile/:userId", "./routes/Profile.tsx"),
] satisfies RouteConfig;
