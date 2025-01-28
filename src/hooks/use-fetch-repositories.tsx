import { useUser } from "@/context/user.context";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchRepositories = () => {
  const { user } = useUser(); // Get user context

  return useQuery({
    queryKey: ["repositories", user?.accessToken],
    queryFn: async () => {
      const { data } = await api.get("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
        params: {
          visibility: "all",
          affiliation: "owner,collaborator",
          per_page: 100,
        },
      });
      return data;
    },
    enabled: !!user?.accessToken, // Only run query if token exists
  });
};
