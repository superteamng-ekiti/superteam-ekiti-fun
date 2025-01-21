import { useAppKitAccount } from "@reown/appkit/react";
import logo from "/src/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { truncateWalletAddress } from "@/utils/string";
import { HeaderNavItems } from "./header-nav-items";
import { Link } from "react-router";

export function Header() {
  const { address: walletAddress, isConnected } = useAppKitAccount();
  return (
    <header
      className={cn(
        "w-full container mx-auto flex justify-center items-center py-6",
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
        <div className="w-full flex items-center justify-between">
          <div />
          <HeaderNavItems />
          <div className="flex items-center gap-4">
            <p className="text-white text-md champ-black px-8 py-4 bg-primary/40 cursor-pointer">
              {truncateWalletAddress(walletAddress ?? "")}
            </p>

            <img
              src="/src/assets/images/avatar.svg"
              className="w-auto h-[55px] cursor-pointer"
            />
          </div>
        </div>
      )}
    </header>
  );
}
