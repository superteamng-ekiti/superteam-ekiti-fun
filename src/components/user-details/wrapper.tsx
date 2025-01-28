/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "@/context/user.context";
import { PackagesUsed } from "./packages-used";
import { UserPoints } from "./user-points";
import { useMemo } from "react";
import { UserStackSelector } from "./user-stack-selector";
import { useFetchRepositories } from "@/hooks/use-fetch-repositories";
import { useParams } from "react-router";
import { useCheckRepository } from "@/hooks/use-check-repository";

export const UserDetailsWrapper = () => {
  const { user } = useUser();
  const { id } = useParams();
  const isScoutEmpty = useMemo(() => {
    return Object.values(user?.current_scout ?? {}).every(
      (stack) => stack.length === 0
    );
  }, [user?.current_scout]);

  const { data, isLoading } = useFetchRepositories();
  const { mutate: checkRepository, status } = useCheckRepository();

  const handleCheckRepository = async () => {
    if (!data) return;

    try {
      for (const repository of data) {
        await checkRepository(
          {
            type: repository?.language?.toLowerCase() === "rust" ? "rust" : "js",
            github_url: repository.html_url,
            id: id ?? "",
          },
          {
            onSuccess: (data) => {
              console.log("success", data);
            },
            onError: (error) => {
              console.log("error", error);
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto z-10 relative">
      {isScoutEmpty ? (
        <UserStackSelector
          loadingRepositories={isLoading}
          handleCheckRepository={handleCheckRepository}
        />
      ) : null}
      {!isScoutEmpty ? (
        <>
          <UserPoints />
          <PackagesUsed />
        </>
      ) : null}

      {status === "pending" ? <div>Loading...</div> : null}
    </div>
  );
};
