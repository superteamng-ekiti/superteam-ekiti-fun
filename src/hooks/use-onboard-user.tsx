import { useUser } from "@/context/user.context";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useOnboardUser = () => {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  return useMutation({
    mutationFn: async ({
      walletAddress,
      email,
      referralCode,
    }: {
      walletAddress: string;
      email: string;
      referralCode: string;
    }) => {
      const response = await api.post("/onboard", {
        wallet_address: walletAddress,
        email,
        referral_code: referralCode,
      });
      return response;
    },
    onSuccess: async (data) => {
      await updateUser(data?.data?.response);
      navigate(`/${data?.data?.response?._id}`);
    },
    onError: () => {
      // console.log(error);
    },
  });
};
