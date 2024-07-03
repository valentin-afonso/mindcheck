"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ name, href }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassName = isActive ? "text-black" : "text-black/60";
  return (
    <>
      <Link
        href={href}
        className={`px-0 py-1 inline-block text-sm hover:text-black select-none transition-all ${linkClassName}`}
      >
        {name}
      </Link>
    </>
  );
}
