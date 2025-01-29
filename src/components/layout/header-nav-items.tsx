import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export const HeaderNavItems = () => {
  return (
    <div className="border border-border py-3 px-6 flex flex-col md:flex-row w-full md:w-auto items-center gap-8 md:gap-4">
      <NavLink
        className={({ isActive }) =>
          cn(
            "text-md text-white",
            isActive && "text-primary-foreground px-2 py-1 bg-primary"
          )
        }
        to="/leaderboard"
      >
        Leaderboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(
            "text-md text-white",
            isActive && "text-primary-foreground px-2 py-1 bg-primary"
          )
        }
        to="/referral"
      >
        Referrals
      </NavLink>
    </div>
  );
};
