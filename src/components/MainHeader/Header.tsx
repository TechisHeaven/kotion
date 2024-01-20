"use client";
import Image from "next/image";
import { NavItems } from "./NavItems";
import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useToast } from "../ui/use-toast";
import { title } from "process";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { LogOutIcon, User } from "lucide-react";

export default function Header() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  const { data: session } = useSession();
  const { toast } = useToast();

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
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={session.user?.image || ""}
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {session.user?.name ? session.user?.name[0] : "t"}
                    </AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem asChild>
                    <Link
                      href={"/profile"}
                      className="flex items-center gap-2 font-semibold"
                    >
                      <User className="w-4" />
                      Profile
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Button
                      className="p-0 h-6"
                      onClick={async () => {
                        await signOut();
                        toast({
                          title: "Sign Out",
                          description: "User logged Out",
                        });
                      }}
                      variant={"ghost"}
                    >
                      <LogOutIcon className="h-4" />
                      Sign out
                    </Button>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </>
        ) : (
          <>
            <Button asChild variant={"ghost"}>
              <Link href={"/login"}>Log in</Link>
            </Button>
            <Button asChild variant={"default"}>
              <Link href={"/login"}>Get Notion free</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
