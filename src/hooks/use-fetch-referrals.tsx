import { useUser } from '@/context/user.context';
import { api } from '@/lib/api';
import { useMutation } from '@tanstack/react-query';

export const useFetchReferrals = () => {
  const { user, updateUser } = useUser();
  return useMutation({
    mutationFn: async () => {
      const response = await api.post('/fetch-referrals', {
        id: user?.referral_code
      });
      return response;
    },
    onSuccess: async (data) => {
      updateUser({
        ...user,
        referrals: data?.data?.response
      });
    },
    onError: () => {
      // console.log(error);
    },
  });
};
