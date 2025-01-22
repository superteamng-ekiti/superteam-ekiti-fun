"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type dataType = {
  id: string;
  no: number;
  address: string;
  //   status: "pending" | "processing" | "success" | "failed";
  email: string;
  referrals: number;
  points: number;
};

export const columns: ColumnDef<dataType>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "referrals",
    header: "Referrals",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
];
