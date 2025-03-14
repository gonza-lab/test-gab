import Image from "next/image";
import { BellIcon } from "./icons/bell";

export default function Header() {
  return (
    <header className="bg-sand relative h-[44px] border-b-[#BDA57D] border-b-[2px] px-[15px] bg-[url(/bg_header_mobile.png)]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo_header.png" // Reemplaza con la ruta correcta del logo
          alt="March Madness Logo"
          width={44}
          height={34}
        />

        {/* Icono de Notificaciones */}
        <div className="relative">
          <BellIcon />
        </div>
      </div>
    </header>
  );
}
