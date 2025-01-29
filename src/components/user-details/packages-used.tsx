import { useUser } from "@/context/user.context";
import { Package } from "./package"
import { useMemo } from "react";

export const PackagesUsed = () => {
  const { user } = useUser();

  const packages = useMemo(() => {
    return Object.values(user?.current_scout ?? {}).flat().filter((repository) => repository.points > 0);
  }, [user]);

  return (
    <div className='w-full grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-4 mt-8'>
        {packages.length > 0 ? packages.map((repository) => (
            <Package key={repository.id} repository={repository} />
        )) : (
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white text-xl work-sans-regular">No packages used</p>
            </div>
        )}
    </div>
  )
}
