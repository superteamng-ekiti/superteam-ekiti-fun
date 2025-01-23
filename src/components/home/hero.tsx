import { useAppKitAccount, useAppKit } from "@reown/appkit/react";
import { Button } from "../ui/button";
import { truncateWalletAddress } from "@/utils/string";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGitHub, logoutGithub } from "@/utils/auth";
import { auth } from "@/config";

export const Hero = () => {
  const { open } = useAppKit();
  const { address: walletAddress, isConnected } = useAppKitAccount();

  const [user] = useAuthState(auth);

  return (
    <div className="container mx-auto flex flex-col items-center justify-between h-[calc(100vh-80px)]">
      <div className="flex w-full flex-col pt-16 md:pt-8">
        <h1 className="max-w-[300px] md:max-w-[746px] mx-auto text-2xl md:text-6xl text-center champ-black text-white font-bold">
          Your reward doesn’t have to wait till Heaven
        </h1>
        <p className="text-center text-gray-300 text-sm md:text-xl work-sans-regular mt-1 md:mt-4">
          Get rewarded for building on solana blockchain 😋
        </p>

        <div className="flex items-center justify-center mt-6 md:mt-12 gap-6">
          <Button onClick={() => open()}>
            {isConnected && walletAddress
              ? truncateWalletAddress(walletAddress ?? "")
              : "Connect Your Wallet"}
          </Button>

          {
            user ? (
              <Button variant="secondary" onClick={logoutGithub}>Logout, {user.displayName}</Button>
            ) : (
              <Button variant="secondary" onClick={signInWithGitHub}>Connect your Github</Button>
            )
          }
        </div>
      </div>

      <img
        src="/src/assets/images/gift-box.svg"
        className="relative z-10 w-[350px] md:w-[464px] h-auto object-cover"
      />
    </div>
  );
};
