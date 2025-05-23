import { HomeIcon, File, UsersRound } from "lucide-react";

import NavButton from "@/components/NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} href="/home" label="Home" />
          <Link href="/home" className="flex items-center gap-2 justify-center ml-0" title="Home">
            <h1 className="hidden sm:block text-xl font-bold m-0">Computer Repair Shop</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <NavButton icon={File} href="/tickets" label="Tickets" />
          <NavButton icon={UsersRound} href="/customers" label="Customers" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}