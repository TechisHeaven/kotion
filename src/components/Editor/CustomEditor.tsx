import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { MutableRefObject, useRef, useState } from "react";

export default function CustomEditor() {
  // Creates a new editor instance.
  // const initialContent = {
  //   children: [],
  //   content: [
  //     {
  //       styles: {},
  //       text: "Untitled",
  //       type: "text",
  //     },
  //   ],
  //   id: "b72b4488-667b-49da-a271-f3aea5d6025a",
  //   props: {
  //     backgroundColor: "default",
  //     level: 1,
  //     textAlignment: "left",
  //     textColor: "default",
  //   },
  //   type: "heading",
  // };

  const editor: BlockNoteEditor = useBlockNote({
    editable: true,
    onEditorContentChange: (editor) => {
      //handle live saving in server
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={"light"} />;
}
