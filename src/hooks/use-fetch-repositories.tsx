import { api } from "@/lib/api";
import { decryptToken } from "@/utils/encrypt";
import { useQuery } from "@tanstack/react-query";

export const useFetchRepositories = () => {

  const accessToken = decryptToken(localStorage.getItem("accessToken") ?? "");

  return useQuery({
    queryKey: ["repositories", accessToken],
    queryFn: async () => {
      const { data } = await api.get("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          visibility: "all",
          affiliation: "owner,collaborator",
          per_page: 100,
        },
      });
      return data;
    },
    enabled: !!accessToken,
  });
};
