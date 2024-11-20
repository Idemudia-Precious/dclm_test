"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex-between fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-32">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/logo.png" width={56} height={56} alt="DCLM Logo" />
      </Link>

      <ul className="flex flex-row gap-10">
        {navItems.map(({ url, name }) => (
          <Link key={name} href={url} className="">
            <li
              className={cn(
                "sidebar-nav-item",
                pathname === url && "text-decoration-line: underline"
              )}
            >
              <p className="paragraph-medium hidden lg:block">{name}</p>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex-between gap-5">
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
