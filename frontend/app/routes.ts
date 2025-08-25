import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
    route("dashboard", "routes/admin/dashbord.tsx")

] satisfies RouteConfig;
