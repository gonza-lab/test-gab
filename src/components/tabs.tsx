import { cn } from "@/utils/cn";
import Link from "next/link";
import { ReactNode } from "react";

interface TabItemProps {
  children: ReactNode;
  active?: boolean;
  href: string;
}

export function TabItem({ children, active, href }: TabItemProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "bg-[#F4DF89] rounded-t-[5px] border-2 border-b-0 border-cocoa text-cocoa text-[14px] px-[10px] py-[5px]",
          { "bg-cocoa text-white": active },
        )}
      >
        {children}
      </div>
    </Link>
  );
}

interface TabListProps {
  tabs: TabItemProps[];
}

export function TabList({ tabs }: TabListProps) {
  return (
    <div className="flex flex-row gap-5 border-b-cocoa border-b-2">
      {tabs.map((tab, index) => (
        <TabItem key={index} {...tab} />
      ))}
    </div>
  );
}
