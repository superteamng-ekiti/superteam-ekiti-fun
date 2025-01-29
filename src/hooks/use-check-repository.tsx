import { api } from "@/lib/api";
import { decryptToken } from "@/utils/encrypt";
import { getValue } from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const useCheckRepository = () => {
  const [newAccessToken, setNewAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = getValue("accessToken");
    if (accessToken) {
      setNewAccessToken(decryptToken(accessToken));
    }
  }, []);
  return useMutation({
    mutationFn: async ({
      // type,
      github_url,
      id,
    }: {
      // type: "js" | "rust";
      github_url: string;
      id: string;
    }) => {
      const response = await api.post("/scout", {
        // type,
        github_url,
        id,
        access_token: newAccessToken,
      });
      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
