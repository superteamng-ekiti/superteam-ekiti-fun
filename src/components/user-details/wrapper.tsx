import { PackagesUsed } from "./packages-used"
import { UserPoints } from "./user-points"

export const UserDetailsWrapper = () => {
  return (
    <div className="container mx-auto z-10 relative">
        <UserPoints />
        <PackagesUsed />
    </div>
  )
}
