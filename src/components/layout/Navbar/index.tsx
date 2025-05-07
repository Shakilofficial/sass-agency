"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EqualIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full px-4 py-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between rounded-full border-2 border-white/10 bg-black/20 px-8 py-5 backdrop-blur-sm">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8">
              <Image src={logo} alt="Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems pathname={pathname} />
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <EqualIcon className="h-16 w-16" />
            )}
          </Button>
        </nav>

        <div
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <Button
            onClick={toggleMenu}
            className="absolute right-6 top-6 text-black rounded-2xl"
            aria-label="Close menu"
          >
            <X />
          </Button>
          <NavItems
            pathname={pathname}
            className="flex flex-col items-center space-y-6 text-xl"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
