import { api } from "@/lib/api";
import { decryptToken } from "@/utils/encrypt";
import { useQuery } from "@tanstack/react-query";
import { getValue } from "@/utils/storage";
import { useEffect, useState } from "react";

export const useFetchRepositories = () => {
  const [newAccessToken, setNewAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = getValue("accessToken");
    if (accessToken) {
      console.log(decryptToken(accessToken), "decrypted token");
      setNewAccessToken(decryptToken(accessToken));
    }
  }, []);

  return useQuery({
    queryKey: ["repositories", newAccessToken],
    queryFn: async () => {
      const { data } = await api.get("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
        params: {
          visibility: "all",
          affiliation: "owner,collaborator",
          per_page: 100,
        },
      });
      return data;
    },
    enabled: !!newAccessToken,
  });
};
