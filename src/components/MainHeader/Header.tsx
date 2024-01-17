"use client";
import Image from "next/image";
import { NavItems } from "./NavItems";
import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  const { data: session } = useSession();

  return (
    <header
      className={`p-4 flex items-center gap-2 transition-all sticky top-0 bg-white ${
        scroll && "sticky  shadow-sm border-b-2"
      }`}
    >
      <Link href={"/"} className="flex items-center gap-2 font-bold">
        <Image src="/Logo.png" width={32} height={32} alt="logo" />
        <p>Kotion</p>
      </Link>
      <div className="flex-1">
        <NavItems />
      </div>
      <div className="flex flex-row gap-2 items-center">
        {session ? (
          <>
            <Button onClick={() => signOut()} variant={"ghost"}>
              Sign out
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <>
            <Button onClick={() => signIn("github")} variant={"ghost"}>
              Log in
            </Button>
            <Button onClick={() => signIn("github")}>Get Notion free</Button>
          </>
        )}
      </div>
    </header>
  );
}
