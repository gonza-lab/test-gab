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
      <div className="flex flex-row justify-center md:justify-start mt-[11px] mb-[15px] md:max-w-2xl md:mx-auto">
        <TabList
          tabs={[
            {
              children: "Brackets",
              active: pathnameIsBrackets,
              href: "/brackets",
            },
            {
              children: "Referrals",
              active: !pathnameIsBrackets,
              href: "/referrals",
            },
          ]}
        />
      </div>
      <div className="md:max-w-2xl md:mx-auto">{children}</div>
    </>
  );
}
