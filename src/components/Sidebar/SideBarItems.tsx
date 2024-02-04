"use client";
import { ChevronRight, FileText, Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SideBarItems({ sideBarData }: any) {
  const [sidebarData, setSidebarData] = React.useState(sideBarData);
  const [value, setValue] = React.useState({ id: 1, expanded: true });
  useEffect(() => {
    setSidebarData(sideBarData);
  }, [sideBarData]);
  return (
    <>
      {sidebarData.map((item: any, index: number) => {
        return item.childrens.length > 0 ? (
          <div key={item.id}>
            <Link
              href={"/document/id"}
              className="group flex items-center relative gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
            >
              <ChevronRight
                onClick={() =>
                  setValue({ id: item.id, expanded: !value.expanded })
                }
                className={`${
                  item.id === value.id && value.expanded && " rotate-90"
                } w-4 hover:bg-slate-300 transition-all  h-4`}
              />
              <FileText className="w-4 " />
              <p className="text-sm font-semibold">{item.title}</p>
              <div className="transition-opacity items-center gap-1 absolute right-2  group-hover:opacity-100 flex opacity-0">
                <Minus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
                <Plus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
              </div>
            </Link>
            {value.id == item.id &&
              value.expanded &&
              item.childrens.map((child: any) => {
                return (
                  <div key={child.id} className="children ml-4">
                    <Link
                      href={"/document/id"}
                      className="flex group relative items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
                    >
                      <ChevronRight className="w-4 hover:bg-slate-300 transition-colors h-4" />
                      <FileText className="w-4 " />
                      <p className="text-sm font-semibold">{child.title}</p>
                      <div className="transition-opacity items-center gap-1 absolute right-2  group-hover:opacity-100 flex opacity-0">
                        <Minus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
                        <Plus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        ) : (
          <div key={item.id} className="">
            <Link
              href={"/document/id"}
              className="group relative flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors"
            >
              <FileText className="w-4 " />
              <p className="text-sm font-semibold">{item.title}</p>
              <div className="transition-opacity items-center gap-1 absolute right-2  group-hover:opacity-100 flex opacity-0">
                <Minus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
                <Plus className="w-5 p-1 hover:bg-slate-300 transition-colors rounded-md" />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
