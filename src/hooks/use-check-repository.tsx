import { useUser } from "@/context/user.context";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const useCheckRepository = () => {
  const { user } = useUser();
  return useMutation({
    mutationFn: async ({
      type,
      github_url,
      id,
    }: {
      type: "js" | "rust";
      github_url: string;
      id: string;
    }) => {
      const response = await api.post(
        "/scout",
        {
          type,
          github_url,
          id,
          access_token: user?.accessToken,
        }
      );
      return response;
    },
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};