"use client";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
// import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

const Topbar = () => {
  //   const { isSignedIn } = useAuth();
  const topRounds = [
    { label: "Giới thiệu", path: "/introduces" },
    { label: "Gói vay", path: "/lend" },
    { label: "Thỏa thuận sử dụng", path: "/terms " },
  ];
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const pathName = usePathname();

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      router.push(`search?query=${searchInput.trim()}`);
    }
    setSearchInput("");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-t from-[#0A4297] to-[#016BB8] ">
      <div className="flex items-center justify-between md:container md:mx-auto ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Elending Logo"
            className="dark:invert"
            width={300}
            height={24}
            priority
          />
        </Link>

        <div className="flex gap-6 items-center">
          <div className="max-sm:hidden flex gap-6 ">
            {topRounds.map((route) => (
              <Link
                className="text-sm  hover:text-[#111] text-[#fff]"
                key={route.path}
                href={route.path}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
