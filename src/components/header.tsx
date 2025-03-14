import Image from "next/image";
import { BellIcon } from "./icons/bell";
import { SearchOutlineIcon } from "./icons/search-outline";
import { ChevronDownIcon } from "./icons/chevron-down";
import { BottomTabs } from "./bottom-tabs";
import { BracketsIcon } from "./icons/brackets";
import { TicketsIcon } from "./icons/tickets";
import { MarketsIcon } from "./icons/markets";
import { ActivityIcon } from "./icons/activity";
import { LeaderBoardIcon } from "./icons/leaderboard";

export default function Header() {
  return (
    <header className="bg-sand border-b-[#BDA57D] border-b-[2px] md:border-b-0 px-[15px] bg-[url(/bg_header_mobile.png)]">
      {/* Mobile Header */}
      <div className="flex justify-between items-center h-[44px] lg:hidden">
        {/* Logo */}
        <Image
          src="/logo_header.png"
          alt="March Madness Logo"
          width={44}
          height={34}
        />

        {/* Icono de Notificaciones */}
        <div className="relative">
          <BellIcon />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center h-[60px] px-6">
        <div className="max-w-[1100px] w-full mx-auto lg:flex justify-between items-center h-full">
          {/* Sección Izquierda: Logo y Barra de Búsqueda */}
          <div className="flex items-center gap-[13px]">
            <Image
              src="/logo_header.png"
              alt="March Madness Logo"
              width={66}
              height={51}
            />

            {/* Barra de búsqueda */}
            <div className="flex items-center border-2 border-cocoa rounded-[5px] p-[9px] bg-[#FFF4D3] h-[35px]">
              <SearchOutlineIcon className="text-cocoa" />
              <input
                type="text"
                placeholder="Search games"
                className="ml-[10px] bg-transparent outline-none text-cocoa text-[12px] placeholder-[#B38359] placeholder:italic placeholder:font-gobold-lowplus"
              />
            </div>
          </div>

          <nav>
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
                  icon: <MarketsIcon />,
                  label: "Markets",
                  href: "/markets",
                },
                {
                  icon: <ActivityIcon />,
                  label: "Activity",
                  href: "/activity",
                },
                {
                  icon: <LeaderBoardIcon />,
                  label: "Leaderboard",
                  href: "/leaderboard",
                },
              ]}
            />
          </nav>

          {/* Sección Derecha: Botones y Perfil */}
          <div className="flex items-center h-full">
            {/* Botón "Copy ref. link" */}
            <div className="flex flex-col justify-center items-center relative h-full px-[3px]">
              <button className="bg-sunset text-white text-[12px] px-1 py-[6px] border-[2px] border-white font-gobold-lowplus z-10 cursor-pointer">
                Copy ref. link
              </button>
              <div className="absolute bg-[#582614] left-0 right-0 top-0 bottom-[19%] rounded-b-[3px]"></div>
            </div>

            <button className="bg-[#4CA2B5] text-white px-3 py-[3px] border-[2px] border-[#582614] text-[16px] ml-8 italic cursor-pointer">
              Deposit
            </button>

            {/* Icono de Notificaciones */}
            <div className="relative ml-[30px]">
              <BellIcon />
            </div>

            <div className="ml-[10px]">
              <svg
                width="2"
                height="32"
                viewBox="0 0 2 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V31"
                  stroke="#682510"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Avatar y menú */}
            <div className="flex items-center gap-2 cursor-pointer ml-[10px]">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center border-[#582614] border-[2px]"></div>
              <ChevronDownIcon className="text-cocoa" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
