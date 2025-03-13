"use client";
import { TabList } from "@/components/tabs";
import { usePathname } from "next/navigation";

export default function BracketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathnameIsBrackets = pathname === "/brackets";
  return (
    <>
      <div className="flex flex-row justify-center mt-[11px] mb-[15px]">
        <TabList
          tabs={[
            { children: "Brackets", active: pathnameIsBrackets, href: '/brackets' },
            { children: "Referrals", active: !pathnameIsBrackets, href: '/referrals' },
          ]}
        />
      </div>
      {children}
    </>
  );
}
