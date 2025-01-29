import { useUser } from "@/context/user.context";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router";

export const useFetchUser = () => {
  const { id } = useParams();
  const { updateUser } = useUser();
  return useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/fetch-user", {
        id: id ?? "",
      });
      return data?.response;
    },
    onSuccess: async (data) => {
      await updateUser(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
