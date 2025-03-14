"use client";
import { ReferralsLeaderboardRowProps } from "@/components/referrals-leaderboard/referrals-leaderboard-row";
import ReferralsLeaderboardTable from "@/components/referrals-leaderboard/referrals-leaderboard-table";
import { useState } from "react";

export const referralsData: Omit<
  ReferralsLeaderboardRowProps,
  "onToggleExpand"
>[] = [
  {
    id: 1,
    rank: 1,
    username: "JohnDoe",
    referrals: 15000,
    referees: [
      { id: 2, username: "Alice", referrals: 15000 },
      { id: 3, username: "Bob", referrals: 15000 },
      { id: 4, username: "Charlie", referrals: 15000 },
    ],
    isExpanded: true,
  },
  {
    id: 5,
    rank: 2,
    username: "JaneSmith",
    referrals: 12000,
    referees: [
      { id: 6, username: "David", referrals: 12000 },
      { id: 7, username: "Eve", referrals: 12000 },
    ],
    isExpanded: false,
  },
  {
    id: 8,
    rank: 3,
    username: "MichaelBrown",
    referrals: 10000,
    referees: [{ id: 9, username: "Frank", referrals: 10000 }],
    isExpanded: false,
  },
  {
    id: 10,
    rank: 4,
    username: "EmilyJohnson",
    referrals: 8000,
    referees: [
      { id: 11, username: "Grace", referrals: 8000 },
      { id: 12, username: "Hank", referrals: 8000 },
    ],
    isExpanded: false,
  },
  {
    id: 13,
    rank: 5,
    username: "ChrisWilson",
    referrals: 5000,
    referees: [],
    isExpanded: false,
  },
];

export function ReferralsTable() {
  const [tableData, setTableData] = useState(referralsData);

  const handleToggleReferral = (referralId: number) => {
    setTableData((prev) =>
      prev.map((referral) =>
        referral.id === referralId
          ? { ...referral, isExpanded: !referral.isExpanded }
          : referral,
      ),
    );
  };

  return (
    <ReferralsLeaderboardTable
      referrals={tableData}
      onClickReferral={handleToggleReferral}
    />
  );
}
