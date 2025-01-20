import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between h-[calc(100vh-80px)]">
      <div className="flex w-full flex-col pt-8">
        <h1 className="max-w-[746px] mx-auto text-6xl text-center champ-black text-white font-bold">
          Your reward doesn’t have to wait till Heaven
        </h1>
        <p className="text-center text-gray-300 text-xl work-sans-regular mt-4">
          Get rewarded for building on solana blockchain 😋
        </p>

        <div className="flex items-center justify-center mt-12 gap-6">
            <Button>Connect Your Wallet</Button>
            <Button variant="secondary">Connect your Github</Button>
        </div>
      </div>

      <img src="/src/assets/images/gift-box.svg" className="relative z-10 w-[464px] h-auto object-cover" />
    </div>
  );
};
