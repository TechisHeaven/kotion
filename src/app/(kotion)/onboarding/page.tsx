"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  const session = useSession();
  const [planning, setPlanning] = React.useState<
    "team" | "personal" | "school" | string
  >("");
  if (!session) {
    redirect("/login?callbackUrl=/create");
  }
  const data = [
    {
      id: 1,
      title: "For my team",
      description: "collaborate on your docs, projects , and wikis",
      img: "/team-features-illustration.png",
      type: "team",
    },
    {
      id: 2,
      title: "For personal use",
      description: "Write better. Think more clearly. Stay orgainzed.",
      img: "/use-case-note.png",
      type: "personal",
    },
    {
      id: 3,
      title: "For my team",
      description: "collaborate on your docs, projects , and wikis",
      img: "/use-case-wiki.png",
      type: "school",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <div className="fixed bottom-0 left-0">
        <Image
          src={"/ada-1-dark.png"}
          width={200}
          height={200}
          draggable="false"
          className=" w-48 "
          alt="kotion-with-hand"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          How are you planning to use Kotion?
        </h1>
        <p className="text-gray-500">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        {data.map((data) => {
          return (
            <label
              htmlFor={data.type}
              key={data.id}
              className={`${
                planning === data.type
                  ? "brightness-100 "
                  : "hover:brightness-100 brightness-75"
              } card cursor-pointer   bg-white transition-all relative max-w-[230px] items-center text-center flex flex-col gap-2 w-full p-10 border rounded-md`}
            >
              <Checkbox
                id={data.type}
                onCheckedChange={() => setPlanning(data.type)}
                checked={planning === data.type}
                className="absolute right-6 top-6 rounded-full "
              />
              <Image
                draggable="false"
                className="w-full max-w-[120px] h-[90px] object-contain"
                loading="eager"
                src={data.img}
                width={100}
                height={100}
                alt="card image"
              />
              <h1>{data.title}</h1>
              <p className="text-sm text-gray-400">{data.description}</p>
            </label>
          );
        })}
      </div>
      <Button
        variant={"secondary"}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 text-white w-[280px]"
        disabled={!planning}
      >
        <Link href="/randomId" className="w-full">
          Continue
        </Link>
      </Button>
    </div>
  );
}
