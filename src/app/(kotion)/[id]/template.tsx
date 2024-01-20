import Sidebar from "@/components/Sidebar/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import "@/components/Sidebar/sidebar.css";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-white relative">
      <Sidebar />
      <div className="app-frame">{children}</div>
    </div>
  );
}
