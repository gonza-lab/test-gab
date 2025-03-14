import ReferralsLeaderboardRow, {
  ReferralsLeaderboardRowProps,
} from "./referrals-leaderboard-row";

export default function ReferralsLeaderboardTable({
  referrals,
  onClickReferral,
}: {
  referrals: Omit<ReferralsLeaderboardRowProps, "onToggleExpand">[];
  onClickReferral: (id: number) => void;
}) {
  return (
    <div className="bg-sand">
      <div className="grid grid-cols-[auto_100px] text-cocoa italic text-[13px] mb-[5px]">
        <span className="pl-[5px]">User</span>
        <span className="flex items-center pl-[5px]">
          Referrals
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </span>
      </div>
      {referrals.map((referral, index) => (
        <ReferralsLeaderboardRow
          key={referral.id}
          {...referral}
          onToggleExpand={onClickReferral}
        />
      ))}
    </div>
  );
}
