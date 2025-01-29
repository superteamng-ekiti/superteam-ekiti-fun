import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
      </div>
    );
  };