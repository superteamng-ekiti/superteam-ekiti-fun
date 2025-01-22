import { Button } from "../ui/button"

export const UserPoints = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-white text-xl work-sans-regular">
            User Points
        </p>

        <h3 className="text-white text-7xl champ-black text-center">3000</h3>

        <div className="flex items-center gap-4 mt-6">
            <Button size="sm">Update Point</Button>
            <Button size="sm" variant="secondary">
                Share on

                <img src="/src/assets/images/twitter.svg" alt="twitter" className="w-5 h-5" />
            </Button>
        </div>
    </div>
  )
}
