import { cn } from "@/utils/cn";

export interface ReferralsLeaderboardRowProps {
  id: number;
  rank: number;
  username: string;
  referrals: number;
  referees?: {
    id: number;
    username: string;
    referrals: number;
  }[];
  isExpanded: boolean;
  onToggleExpand: (id: number) => void;
}

export default function ReferralsLeaderboardRow({
  id,
  rank,
  username,
  referrals,
  isExpanded,
  referees,
  onToggleExpand,
}: ReferralsLeaderboardRowProps) {
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-[auto_100px] items-center mb-1 bg-gold border-[#DAC385] border-2 cursor-pointer",
          { "border-cocoa": isExpanded },
        )}
        onClick={() => onToggleExpand(id)}
      >
        <div className={cn("flex flex-row gap-[5px] p-[5px] w-full")}>
          <div className="flex flex-row justify-center items-center gap-[5px]">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] md:text-[12px] text-[#A79069]">{rank}</span>
            <span className="text-[13px] md:text-[14px] text-cocoa">{username}</span>
          </div>
        </div>

        <div className="flex items-center p-[5px] w-full h-full text-[12px] md:text-[14px] text-cocoa">
          <span>{referrals.toLocaleString()}</span>
        </div>
      </div>
      {isExpanded ? (
        referees?.map((referral, index) => (
          <div
            key={referral.id}
            className="grid grid-cols-[auto_100px] items-center mb-1 bg-sunset"
          >
            <div className={cn("flex flex-row gap-[5px] p-[5px] w-full")}>
              <div className="flex flex-row justify-center items-center gap-[5px]">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center"></div>
              </div>
              <div className="flex flex-col text-white">
                <span className="text-[11px] md:text-[12px]">{index+1}</span>
                <span className="text-[13px] md:text-[14px]">
                  {referral.username}
                </span>
              </div>
            </div>

            <div className="flex items-center p-[5px] w-full h-full text-[12px] md:text-[14px] text-white">
              <span>{referral.referrals.toLocaleString()}</span>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
