import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="max-w-[1024px] m-auto">
      <div className="flex items-center flex-col gap-4 m-6">
        <h1 className="text-6xl font-bold text-center">
          Write, plan, share. <br></br> With AI at your side.
        </h1>
        <p className="text-2xl font-semibold">
          Notion is the connected workspace where better, faster work happens.
        </p>
        {session?.user ? (
          <Link href="/onboarding">
            <Button variant="default" className="font-semibold text-base">
              Create Kotion <ArrowRight className="w-5" />
            </Button>
          </Link>
        ) : (
          <div className="flex gap-2">
            <Button variant="default" className="font-semibold text-base">
              Get Kotion free <ArrowRight className="w-5" />
            </Button>
            <Link href={"/demo"}>
              <Button
                variant="link"
                className="font-semibold text-blue-500 text-base"
              >
                Request a demo <ArrowRight className="w-5" />
              </Button>
            </Link>
          </div>
        )}

        <Image
          className="my-4 mt-8"
          width={600}
          height={400}
          property="true"
          src={"/hero-image.webp"}
          alt="hero-image"
          loading="eager"
          draggable="false"
        />
      </div>
    </div>
  );
}
