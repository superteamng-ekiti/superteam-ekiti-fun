import { Package } from "./package"

export const PackagesUsed = () => {
  return (
    <div className='w-full grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-4 mt-8'>
        <Package />
        <Package />
        <Package />
        <Package />
    </div>
  )
}
