import { Button } from "../ui/button";

export const UserStackSelector = ({
  loadingRepositories,
  handleCheckRepository,
}: {
  loadingRepositories: boolean;
  handleCheckRepository: () => void;
}) => {
  return (
    <div className="container mx-auto z-10 relative">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center mt-16 max-w-[700px] w-full">
          <h3 className="text-3xl md:text-6xl font-bold champ-black">
            Load your rewards
          </h3>
          <p className="text-center text-gray-300 text-sm md:text-xl work-sans-regular mt-1 md:mt-4 px-4 mb-8">
            Seems this is your first time here, let's see what you've earned so
            far
          </p>

          <Button disabled={loadingRepositories} onClick={handleCheckRepository}>Load your rewards</Button>
        </div>
      </div>
    </div>
  );
};
