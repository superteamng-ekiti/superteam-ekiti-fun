import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export type Leaderboard = {
    _id: string;
    points: number;
    wallet_address: string;
}

export const useFetchLeaderboard = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const { data }: { data: { response: Leaderboard[] } } = await api.get("/leaderboard");
      return data?.response;
    },
  });
};
