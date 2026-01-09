import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useStore } from "@/services/store";
import EdwAppHeaderMenu from "./Menu";
import EdwAppHeaderNotifications from "./Notifications";

export default function AppHeader() {
  const { storeAppSidebarOpen, setStoreAppSidebarOpen, currentUser } = useStore();

  const handleToggleSidebar = () => {
    setStoreAppSidebarOpen(!storeAppSidebarOpen);
  };

  return (
    <header className="edw-app-header">
      <section className="edw-app-header-toggle">
        <button className="edw-app-header-toggle-button" onClick={handleToggleSidebar}>
          {storeAppSidebarOpen ? <ArrowLeftFromLine size={18} /> : <ArrowRightFromLine size={18} />}
        </button>
      </section>
      <EdwAppHeaderMenu />
      <EdwAppHeaderNotifications />
      <section className="edw-app-header-user">{currentUser ? "logged in" : "logged out"}</section>
    </header>
  );
}
