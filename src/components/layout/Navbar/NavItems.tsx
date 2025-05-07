"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItemsProps = {
  pathname: string;
  className?: string;
  onClick?: () => void;
};

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const NavItems: React.FC<NavItemsProps> = ({
  pathname,
  className,
  onClick,
}) => (
  <ul
    className={cn(
      "flex flex-col md:flex-row gap-6 md:gap-8 text-white/90",
      className
    )}
  >
    {navLinks.map(({ href, label }) => {
      const isActive = pathname === href;

      return (
        <li key={href}>
          <Link
            href={href}
            onClick={onClick}
            className={cn(
              "transition-colors hover:text-white",
              isActive && "font-medium text-white"
            )}
          >
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default NavItems;
