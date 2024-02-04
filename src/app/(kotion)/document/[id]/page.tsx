"use client";
import { OutputData } from "@editorjs/editorjs";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const LoadingIndicator = () => {
  return (
    <div className="h-screen w-full bg-white grid place-items-center">
      <Loader2 className="animate-spin text-gray-500" />
    </div>
  ); // Replace with your actual loading indicator
};

export default function Page() {
  const CustomEditor = dynamic(
    () => import("@/components/Editor/CustomEditor"),
    {
      ssr: false,
      loading: () => <LoadingIndicator />,
    }
  );
  const [data, setData] = useState<OutputData>();
  return (
    <div className="mt-16 m-8">
      <CustomEditor
        data={data}
        onChange={setData}
        holder="blocknote-container"
      />
    </div>
  );
  // return <div>create kotion</div>;
}
