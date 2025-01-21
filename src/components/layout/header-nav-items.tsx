import { cn } from '@/lib/utils'
import { NavLink } from 'react-router'

export const HeaderNavItems = () => {
  return (
    <div className='border border-border py-3 px-6 flex items-center gap-4'>
        <NavLink className={({isActive}) => cn('text-md text-white', isActive && 'text-primary-foreground px-2 py-1 bg-primary')} to="/leaderboard">Leaderboard</NavLink>
        <NavLink className={({isActive}) => cn('text-md text-white', isActive && 'text-primary-foreground px-2 py-1 bg-primary')} to="/:id/referral">Referrals</NavLink>
    </div>
  )
}
