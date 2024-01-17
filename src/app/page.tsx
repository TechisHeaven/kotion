import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[1200px] max-w-[1024px] m-auto">
      <div className="flex items-center flex-col gap-4 m-6">
        <h1 className="text-6xl font-bold">New year, new plans.</h1>
        <p className="text-2xl font-semibold">
          Your workspace to write, organize, and collaborate. With AI by your
          side.
        </p>
        <Button variant="default" className="font-semibold text-base">
          Get Notion free
          <ArrowRight className="w-5" />
        </Button>
        <Image
          className="my-4 mt-8"
          width={600}
          height={400}
          src={"/hero-image.webp"}
          alt="hero-image"
          loading="eager"
          draggable="false"
        />
      </div>
    </div>
  );
}
