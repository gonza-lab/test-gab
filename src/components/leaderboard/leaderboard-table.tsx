import LeaderboardRow, { UserProps } from "./leaderboard-row";

export default function LeaderboardTable({ users }: { users: UserProps[] }) {
  return (
    <div className="bg-sand">
      <div className="grid grid-cols-[auto_70px_70px_54px] text-cocoa italic text-[13px] mb-[5px]">
        <span className="pl-[5px]">User</span>
        <span className="pl-[5px]">Ticket ID</span>
        <span className="flex items-center pl-[5px]">
          Points
          <div className="flex items-center justify-center w-3 ml-2">
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 9L1 1H13L7 9Z"
                stroke="#682510"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </span>
        <span></span>
      </div>
      {users.map((user, index) => (
        <LeaderboardRow key={index} {...user} />
      ))}
    </div>
  );
}
