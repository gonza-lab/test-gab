import Link from "next/link";
import { ReactNode } from "react";
import NavItem from "./nav-item";

interface Tab {
  icon: ReactNode;
  label: string;
  href: string;
}

function BottomTab({ icon, label, href }: Tab) {
  return (
    <Link href={href}>
      <div className="flex flex-col justify-center items-center">
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
        <p className="text-[12px] text-cocoa mt-1	">{label}</p>
      </div>
    </Link>
  );
}

export function BottomTabs({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="flex flex-row gap-4 justify-center bg-[#FFF4D3] border-t-2 border-t-[#BDA57D] py-2">
      {tabs.map((tab) => (
        <NavItem key={tab.href} href={tab.href}>
          <BottomTab {...tab} />
        </NavItem>
      ))}
    </div>
  );
}
