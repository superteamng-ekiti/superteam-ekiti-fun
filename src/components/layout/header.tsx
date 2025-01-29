import { useAppKitAccount } from "@reown/appkit/react";
import logo from "/src/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { HeaderActions } from "./header-actions";

export function Header() {
  const { isConnected } = useAppKitAccount();
  return (
    <header
      className={cn(
        "w-full container mx-auto flex justify-center items-center py-6 px-4 md:px-0",
        isConnected && "justify-between"
      )}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[142px] h-[18px] md:w-[152px] md:h-[28px]"
        />
      </Link>
      {isConnected && (
        <HeaderActions />
      )}
    </header>
  );
}
