import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useUser } from "@/context/user.context";
import { ShareButton } from "./share-button";
export const UserPoints = ({
  isLoading,
  handleCheckRepository,
}: {
  isLoading: boolean;
  handleCheckRepository: () => void;
}) => {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <p className="text-white text-xl work-sans-regular">User Points</p>

      <h3 className="text-white text-7xl champ-black text-center">
        {user?.points}
      </h3>

      <div className="flex items-center gap-4 mt-6">
        <Button size="sm" disabled={isLoading} onClick={handleCheckRepository}>
          Update Point
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
        <ShareButton
          title={`I'm building on Solana and I've earned ${user?.points} points with Reward Dev!`}
          url={`https://reward-dev.fun?ref=${user?.referral_code}`}
        />
      </div>
    </div>
  );
};
