"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname(); 
  const isActive = pathname === href; 

  return (
    <div className={clsx({ "opacity-100": isActive, "opacity-50": !isActive })}>
      {children}
    </div>
  );
}
