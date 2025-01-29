import { HeaderNavItems } from "./header-nav-items";
import { truncateWalletAddress } from "@/utils/string";
import {
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { useUser } from "@/context/user.context";
import { logoutGithub } from "@/utils/auth";

export const HeaderActions = () => {
  const { disconnect } = useDisconnect();
  const { address: walletAddress } = useAppKitAccount();
  const navigate = useNavigate();
  const { logoutUser } = useUser();

  const handleLogout = () => {
    disconnect();
    navigate("/");
    localStorage.removeItem("accessToken");
    logoutUser();
    logoutGithub();
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div />
      <div className="hidden md:flex">
        <HeaderNavItems />
      </div>

      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger>
            <img
              src="/src/assets/images/avatar.svg"
              className="w-auto h-[48px] cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-md champ-black text-white">{truncateWalletAddress(walletAddress ?? "")}</p>
              <div className="block md:hidden w-full">
                <HeaderNavItems />
              </div>
              <Button size="sm" onClick={handleLogout}>Logout</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
