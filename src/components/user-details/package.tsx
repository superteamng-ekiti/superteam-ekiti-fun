import { extractRepoName } from "@/utils/github";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Package = ({ repository }: { repository: any }) => {
  const name = useMemo(() => extractRepoName(repository?.git_url ?? ""), [repository?.git_url]);

  return (
    <div className="w-full flex items-center justify-between px-10 py-6 bg-card">
      <p className="text-foreground text-md work-sans-regular">{name}</p>
      <h6 className="text-white text-xl champ-black">{repository?.points}</h6>
    </div>
  );
};
