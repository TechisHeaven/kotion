"use client";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const session = useSession();
  React.useEffect(() => {
    if (session.status === "authenticated") {
      redirect("/");
    }
  });
  async function handleLogin() {}

  return (
    session.status === "unauthenticated" && (
      <div className="flex flex-col items-center justify-center  w-full px-40 py-40">
        <div className="max-w-[320px] flex items-center flex-col w-full">
          <h1 className="text-5xl font-bold my-2">Log in</h1>

          <div className="m-2 w-full">
            <Button
              onClick={() => signIn("github")}
              variant="default"
              className="my-2 w-full border rounded-sm flex flex-row gap-2 active:bg-slate-500 "
            >
              <Github className="w-4" /> Continue with Github
            </Button>
            <Button
              variant="ghost"
              className="my-2 w-full border rounded-sm flex flex-row gap-2 active:bg-slate-500 "
            >
              <Image width={20} height={20} src="/google.png" alt="" /> Continue
              with Google
            </Button>
          </div>
          <hr className="h-1 w-full my-2 " />
          <form action="" className="w-full">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-xs text-slate-500">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address..."
                className="focus:outline-blue-400 px-2 py-1 rounded-sm placeholder:text-gray-300 border-slate-200 bg-slate-50  border"
              />
              <Button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                Continue with email
              </Button>
              <Link
                href="/forget-password"
                className="underline text-sm text-center text-slate-600 my-4 hover:text-red-500 transition-colors"
              >
                Forget password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
