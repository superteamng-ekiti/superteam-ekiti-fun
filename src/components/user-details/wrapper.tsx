/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "@/context/user.context";
import { PackagesUsed } from "./packages-used";
import { UserPoints } from "./user-points";
import { useEffect, useMemo } from "react";
import { UserStackSelector } from "./user-stack-selector";
import { useFetchRepositories } from "@/hooks/use-fetch-repositories";
import { useParams } from "react-router";
import { useCheckRepository } from "@/hooks/use-check-repository";
import { useFetchUser } from "@/hooks/use-fetch-user";

export const UserDetailsWrapper = () => {
  const { user } = useUser();
  const { id } = useParams();
  const isScoutEmpty = useMemo(() => {
    return Object.values(user?.current_scout ?? {}).every(
      (stack) => stack.length === 0
    );
  }, [user?.current_scout]);

  const { mutate: fetchUser } = useFetchUser();

  const { data, isLoading } = useFetchRepositories();
  const { mutate: checkRepository, status } = useCheckRepository();
  const filteredRepositories = useMemo(() => {
    return data?.filter((repository: any) => {
      if (repository.language?.toLowerCase() === "rust") {
        return true;
      }

      if (repository.language?.toLowerCase() === "javascript") {
        return true;
      }

      if (repository.language?.toLowerCase() === "typescript") {
        return true;
      }

      if (!repository?.language) {
        return true;
      }

      return false;
    });
  }, [data]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleCheckRepository = async () => {
    if (!data) return;

    try {
      for (const repository of filteredRepositories) {
        await checkRepository(
          {
            github_url: repository.html_url,
            id: id ?? "",
          },
          {
            onSuccess: () => {
              fetchUser();
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
          loadingRepositories={isLoading || status === "pending"}
          handleCheckRepository={handleCheckRepository}
        />
      ) : null}
      {!isScoutEmpty ? (
        <>
          <UserPoints
            isLoading={isLoading || status === "pending"}
            handleCheckRepository={handleCheckRepository}
          />
          <PackagesUsed />
        </>
      ) : null}
    </div>
  );
};
