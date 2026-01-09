import { useStore } from "@/services/store";
import EdwAppSidebarHeader from "./Header";

export default function AppSidebar() {
  const { storeAppSidebarOpen } = useStore();

  return (
    <aside className={`edw-app-sidebar ${storeAppSidebarOpen ? "open" : ""}`}>
      <EdwAppSidebarHeader />
    </aside>
  );
}
