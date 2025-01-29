import Trophy from '../assets/images/trophy.svg';
import copyIcon from '../assets/images/copy.svg';
import copy from 'copy-to-clipboard';
import ReferralCard from '@/components/referrals/ReferralCard';
import { useFetchReferrals } from '@/hooks/use-fetch-referrals';
import { useUser } from '@/context/user.context';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export const Referrals = () => {
  const { user } = useUser();
  // console.log(user, 'user data');
  const { toast } = useToast();

  const refferalCode = `https://reward-dev.fun?ref=${user?.referral_code}`;

  const { mutate: fetchReferrals } = useFetchReferrals();

  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);

  const handleCopy = () => {
    copy(refferalCode);
    toast({
      title: `Refferal code copied successfully!`,
      variant: 'success',
    });
  };

  return (
    <div className="w-full container mx-auto flex flex-col md:flex-row justify-center gap-10 md:gap-6 py-6 px-4 md:px-0">
      <div className="bg-card w-full pb-[56px] md:pb-0 md:w-[30%] md:pl-[50px] md:pr-[10px] pt-[56px] px-4 md:pt-[80px] flex flex-col gap-[100px] z-20">
        <div className="flex flex-col gap-[40px]">
          <div>
            <h3 className="champ-black text-[32px] leading-[39px] text-foreground">
              Invite Friends
            </h3>
            <p className="work-sans-regular text-base leading-[23px]">
              Invite someone to gain more points
            </p>
          </div>

          <div className="rounded-md w-fit py-[12px] px-4 flex gap-4 flex-wrap bg-background">
            <span className="text-sm leading-[23px] work-sans-regular text-foreground">
              {refferalCode}
            </span>
            <img src={copyIcon} alt="copy" onClick={handleCopy} />
          </div>
        </div>

        <div className="hidden md:flex justify-end pr-[34px]">
          <img src={Trophy} alt="trophy" className="w-[254px] h-[254px]" />
        </div>
      </div>

      <div className="border bg-background w-full md:w-[70%] z-20 pb-[56px] md:pb-0 px-4 md:pl-[64px] md:pr-[97px] pt-[56px]">
        {(user?.referrals?.length ?? 0) > 0 ? (
          <>
            <h2 className="champ-black text-foreground text-[24px] leading-[28px]">
              Referrals
            </h2>

            <div className="space-y-4 mt-[36px]">
              {user?.referrals?.map((referral, index) => (
                <ReferralCard
                  key={index}
                  index={index + 1}
                  address={referral?.wallet_address ?? ''}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center flex-col gap-[14px] h-full items-center">
            <h3 className="champ-black text-[24px] leading-[28px] text-foreground">
              No Referral
            </h3>
            <p className="work-sans-regular text-base leading-[23px] text-foreground">
              Invite a someone to gain more points
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
