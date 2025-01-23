import { StackSelectorForm } from "./stack-selector-form"


export const UserStackSelector = () => {
  return (
    <div className="container mx-auto z-10 relative">
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center mt-16 max-w-[700px] w-full">
                <h3 className="text-3xl md:text-6xl font-bold champ-black mb-12">Select your stack</h3>

                <StackSelectorForm />
            </div>
        </div>
    </div>
  )
}
