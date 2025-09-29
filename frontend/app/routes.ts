import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  route("sign-in", "routes/auth/sign-in.tsx"),
  route("sign-up", "routes/auth/sign-up.tsx"),
  route("apply", "routes/auth/apply.tsx"),

  layout("routes/admin/layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("profile", "routes/admin/profile.tsx"),
  ]),
] satisfies RouteConfig;
