import { api } from "@/lib/api";

export const getReferral = async (referralId: string) => {
  try {
    const { data } = await api.get(`/referral/${referralId}`);
    return data;
  } catch (error) {
    throw error;
  }
};