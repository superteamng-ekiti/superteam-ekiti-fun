import { truncateWalletAddress } from '@/utils/string'

type ReferralCardProps = {
  index: number
  address: string
}

const ReferralCard = ({ index, address }: ReferralCardProps) => {
  return (
    <div className='border py-4 pl-6 bg-background'>
      <div className="flex gap-8">
        <span className='unbounded-regular text-base leading-[20px] text-white'>
          {index}
        </span>

        <span className='text-base work-sans-regular text-white leading-[19px]'>
          {truncateWalletAddress(address, 4, 5)}
        </span>
      </div>

    </div>
  )
}

export default ReferralCard