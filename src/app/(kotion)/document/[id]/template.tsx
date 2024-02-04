import Sidebar from "@/components/Sidebar/Sidebar";

import "@/components/Sidebar/sidebar.css";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-white relative">
      <Sidebar />
      <div className="app-frame overflow-y-auto">{children}</div>
    </div>
  );
}
