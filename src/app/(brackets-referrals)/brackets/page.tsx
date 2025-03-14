import LeaderboardTable from "@/components/leaderboard/leaderboard-table";

const users = [
  { rank: 1, username: "Username", ticketId: "#120 557", points: 999999 },
  { rank: 2, username: "Username", ticketId: "#120 557", points: 999999 },
  { rank: 3, username: "Username", ticketId: "#120 557", points: 999999 },
  { rank: 4, username: "Username", ticketId: "#120 557", points: 999999 },
  { rank: 5, username: "Username", ticketId: "#120 557", points: 999999 },
  { rank: 6, username: "Username", ticketId: "#120 557", points: 999999 },
];

export default function Page() {
  return (
    <div className="px-4">
      <LeaderboardTable users={users} />
    </div>
  );
}
