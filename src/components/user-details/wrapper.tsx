import { PackagesUsed } from "./packages-used"
import { UserPoints } from "./user-points"
import { UserStackSelector } from "./user-stack-selector";

const data = undefined;

export const UserDetailsWrapper = () => {
  return (
    <div className="container mx-auto z-10 relative">
      {!data ? (<UserStackSelector />) : null}
      {data ? (
        <>
          <UserPoints />
          <PackagesUsed />
        </>
      ) : null}
    </div>
  )
}
