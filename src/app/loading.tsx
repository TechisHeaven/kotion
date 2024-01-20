import { Loader2, LoaderIcon } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-screen bg-white grid place-items-center">
      <Loader2 className="animate-spin text-gray-500" />
    </div>
  );
}
