"use client";
import EditorHeader from "@/components/EditorHeader/EditorHeader";
import { OutputData } from "@editorjs/editorjs";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

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
  const [pageTitle, setPageTitle] = useState("Untitled Page");
  const TitleRef = useRef<HTMLHeadingElement>();

  function handleTitleChange(e) {
    e.stopPropagation();
    if (TitleRef.current) {
      setPageTitle(TitleRef.current.innerText);
    }
  }

  useEffect(() => {
    // Focus on the end of the line when the component mounts or text changes
    if (TitleRef.current) {
      // TitleRef.current.innerText = pageTitle;
      const range = document.createRange();
      const sel = window.getSelection();

      if (TitleRef.current.childNodes.length > 0) {
        range.setStart(
          TitleRef.current.childNodes[0],
          TitleRef.current.innerText.length
        );
      } else {
        // If no child nodes, set the start at the end of the element
        range.setStart(TitleRef.current, TitleRef.current.innerText.length);
      }

      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [pageTitle]);

  //!todo complete this errror reversing string or auto focusing!!!!
  return (
    <>
      <EditorHeader setPageTitle={setPageTitle} pageTitle={pageTitle} />
      <div className="mt-16 max-w-[708px] m-auto w-full">
        <h1
          className="text-4xl font-bold px-12 outline-none"
          contentEditable
          onInput={handleTitleChange}
          ref={TitleRef}
          // defaultValue={pageTitle}
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        />
        <div className="max-w-[708px] m-auto">
          <CustomEditor />
        </div>
      </div>
    </>
  );
  // return <div>create kotion</div>;
}
