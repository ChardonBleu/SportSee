import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes//home.tsx"),
  route("profile/:userId", "./routes/Profile.tsx"),
] satisfies RouteConfig;
