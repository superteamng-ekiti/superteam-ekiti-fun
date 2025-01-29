import { cn } from "@/lib/utils";
import { Header } from "./header";
import { Outlet, useLocation } from "react-router";

export const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-full relative min-h-screen">
      <Header />
      <Outlet />

      <p className={cn("fixed z-50 bottom-8 w-full left-0 right-0 text-center px-12", pathname === "/" && "text-left")}>
        Built with ❤️ by Superteam Ekiti
      </p>
      <img
        src="/src/assets/images/bg-mesh.png"
        className="absolute -bottom-4 left-0 right-0 w-full h-[240px] object-cover"
      />
    </div>
  );
};
