"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getServerSession } from "next-auth";
import Link from "next/link";
import {
  ArrowDownIcon,
  ChevronDown,
  ChevronRight,
  FileText,
  LogOutIcon,
  PlusCircle,
  Search,
  Settings,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

import "./sidebar.css";

export default function Sidebar() {
  //   const session = await getServerSession();
  const { data: session } = useSession();

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = React.useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState(268);

  const startResizing = React.useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLElement>) => {
      setIsResizing(true);
    },
    []
  );

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: React.MouseEvent<HTMLElement>) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
  return (
    <div
      ref={sidebarRef}
      className=" app-sidebar w-[240px] h-screen  border border-r-slate-300 bg-slate-200 flex flex-row"
      style={{ width: sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-content">
        <Popover>
          <PopoverTrigger className="p-2 px-4 hover:bg-white transition-colors w-full rounded-sm">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={session?.user?.image || ""}
                width={25}
                height={25}
                alt="user-image"
              />
              <h1 className="text-sm font-semibold truncate">
                {session?.user?.name?.split(" ", 1) || "guest"} Kotion
              </h1>
            </div>
          </PopoverTrigger>
          <PopoverContent className="ml-2">
            <p className="text-xs mb-2">{session?.user?.email}</p>
            <Link
              href="/profile"
              className="p-1 text-sm items-center gap-1 rounded-sm flex w-full  hover:bg-gray-200 transition-colors"
            >
              <User className="w-4" />
              {session?.user?.name}
            </Link>
            <p className="p-1 text-sm cursor-pointer items-center gap-1 rounded-sm flex w-full  hover:bg-gray-200 transition-colors">
              <LogOutIcon className="w-4" />
              logout
            </p>
          </PopoverContent>
        </Popover>
        <div className="content">
          <div className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors">
            <Search className="w-4" />
            <p className="text-sm  font-semibold">Search</p>
          </div>
          <div className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors">
            <Settings className="w-4" />
            <p className="text-sm  font-semibold">Settings & members</p>
          </div>
          <div className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors">
            <PlusCircle className="w-4" />
            <p className="text-sm  font-semibold">New page</p>
          </div>

          <div className="content-pages my-4 flex flex-col gap-1">
            <Link
              href={"/id"}
              className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
            >
              <ChevronRight className="w-4 hover:bg-slate-300 transition-colors h-4" />
              <FileText className="w-4 " />
              <p className="text-sm font-semibold">Untitled</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="app-sidebar-resizer" onMouseDown={startResizing} />
    </div>
  );
}
