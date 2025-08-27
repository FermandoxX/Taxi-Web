import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
    route("home", "routes/admin/home.tsx")

] satisfies RouteConfig;
