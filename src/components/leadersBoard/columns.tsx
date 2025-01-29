"use client";

import { Leaderboard } from "@/hooks/use-leaderboard";
import { truncateWalletAddress } from "@/utils/string";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<Leaderboard>[] = [
  {
    accessorKey: "_id",
    header: "No",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "wallet_address",
    header: "Address",
    cell: ({ cell }) => {
      return <div>{truncateWalletAddress(cell.getValue() as string, 6, 3)}</div>;
    },
  },
  {
    accessorKey: "points",
    header: "Points",
  },
];
