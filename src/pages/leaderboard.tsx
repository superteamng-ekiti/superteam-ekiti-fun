import { LoadingSpinner } from "@/components/ui/loader";
import { columns } from "../components/leadersBoard/columns";
import { DataTable } from "../components/leadersBoard/data-table";
import { useFetchLeaderboard } from "@/hooks/use-leaderboard";
import { ErrorScreen } from "@/components/ui/error";

export const Leaderboard: React.FC = () => {
  const {
    data: leaderboardData,
    isLoading,
    error: leaderboardError,
  } = useFetchLeaderboard();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (leaderboardError) {
    return <ErrorScreen />;
  }

  return (
    <div className="pt-8">
      <h1 className="max-w-[300px] md:max-w-[746px] mx-auto text-2xl md:text-5xl text-center champ-black text-white font-bold">
        Leaderboard
      </h1>
      <div className="mx-auto py-8 px-4 max-w-3xl">
        {leaderboardData && (
          <DataTable columns={columns} data={leaderboardData} />
        )}
      </div>
      
    </div>
  );
};
