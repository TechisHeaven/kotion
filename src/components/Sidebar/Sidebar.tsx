"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LogOutIcon, PlusCircle, Search, Settings, User } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./sidebar.css";
import SideBarItems from "./SideBarItems";
import SearchBox from "./Search/SearchBox";

export default function Sidebar() {
  //   const session = await getServerSession();
  const { data: session } = useSession();
  const [expand, setExpand] = React.useState("");

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = React.useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState(268);
  const [sideBarData, setSideBarData] = React.useState(sideBarItems);

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

  function handleContent() {
    const id = uuidv4();
    const newElement = {
      id,
      title: "untitled new element",
      icon: "default",
      childrens: [
        {
          id,
          title: "untitled element childsssss",
          icon: "default",
        },
      ],
    };
    setSideBarData([...sideBarData, newElement]);
  }

  return (
    <div
      ref={sidebarRef}
      className="sticky top-0 left-0 app-sidebar w-[240px] h-screen  border border-r-slate-300 bg-slate-200 flex flex-row"
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
          <SearchBox />

          <Link
            href={"/settings"}
            className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
          >
            <Settings className="w-4" />
            <p className="text-sm  font-semibold">Settings & members</p>
          </Link>
          <div
            onClick={handleContent}
            className="newPage flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
          >
            <PlusCircle className="w-4" />
            <p className="text-sm  font-semibold">New page</p>
          </div>

          <div className="content-pages my-4 flex flex-col gap-1">
            <SideBarItems sideBarData={sideBarData} />
          </div>
        </div>
      </div>
      <div className="app-sidebar-resizer" onMouseDown={startResizing} />
    </div>
  );
}

const sideBarItems = [
  {
    id: "1",
    title: "Untitled",
    icon: "default",
    childrens: [
      {
        id: "22",
        title: "Untitled 22",
        icon: "default",
        childrens: [{ id: 2323, title: "Untitled 22", icon: "default" }],
      },
    ],
  },
  {
    id: "2",
    title: "Untitled 2",
    icon: "default",
    childrens: [
      {
        id: "222",
        title: "Untitled 2",
        icon: "default",
        childrens: [
          {
            id: "223",
            title: "Untitled 223",
            icon: "default",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Untitled 3",
    icon: "default",
    childrens: [],
  },
];
