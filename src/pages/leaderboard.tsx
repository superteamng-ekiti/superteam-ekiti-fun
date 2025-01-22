import React, { useEffect, useState } from "react";
import { dataType, columns } from "../components/leadersBoard/columns";
import { DataTable } from "../components/leadersBoard/data-table";

const fetchData = async (): Promise<dataType[]> => {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      no: 1,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 2,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 3,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 4,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 4,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 5,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 6,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 7,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 8,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },
    {
      id: "728ed52f",
      no: 9,
      address: "EXPLS....hse5rm",
      email: "john@g..com",
      referrals: 30,
      points: 3000,
    },

    // Add more data if needed
  ];
};

export const Leaderboard: React.FC = () => {
  const [data, setData] = useState<dataType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLeaderboardData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError("Failed to fetch leaderboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="max-w-[300px] md:max-w-[746px] mx-auto text-2xl md:text-5xl text-center champ-black text-white font-bold">
        Leaderboard
      </h1>
      <div className="mx-auto py-10 px-4 max-w-3xl">
        {data && <DataTable columns={columns} data={data} />}
      </div>
      <p>Built with ❤️ by Superteam Ekiti</p>
    </div>
  );
};
