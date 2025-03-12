import type { Metadata } from "next";
import "./globals.css";
import { BottomTabs } from "@/components/bottom-tabs";
import { BracketsIcon } from "@/components/icons/brackets";
import { TicketsIcon } from "@/components/icons/tickets";
import { SearchIcon } from "@/components/icons/search";
import { MarketsIcon } from "@/components/icons/markets";
import { MoreIcon } from "@/components/icons/more";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[url(/background_image.png)] h-full">
      <body className={`antialiased font-gobold flex flex-col justify-between items-stretch h-full`}>
        <div className="h-full">{children}</div>
        <div className="">
          <BottomTabs
            tabs={[
              {
                icon: <BracketsIcon />,
                label: "Brackets",
                href: "/brackets",
              },
              {
                icon: <TicketsIcon />,
                label: "Tickets",
                href: "/tickets",
              },
              {
                icon: <SearchIcon />,
                label: "Search",
                href: "/search",
              },
              {
                icon: <MarketsIcon />,
                label: "Markets",
                href: "/markets",
              },
              {
                icon: <MoreIcon />,
                label: "More",
                href: "/more",
              },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
