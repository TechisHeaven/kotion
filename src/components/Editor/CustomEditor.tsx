import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

export default function CustomEditor({ data, onChange }: any) {
  // Creates a new editor instance.
  const initialContent = {
    children: [],
    content: [
      {
        styles: {},
        text: "Untitled",
        type: "text",
      },
    ],
    id: "b72b4488-667b-49da-a271-f3aea5d6025a",
    props: {
      backgroundColor: "default",
      level: 1,
      textAlignment: "left",
      textColor: "default",
    },
    type: "heading",
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable: true,
    initialContent: [initialContent],
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
  });

  // Renders the editor instance using a React component.
  return (
    <div className="max-w-[708px] m-auto">
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
}
