import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useAuth } from "@/services/auth";
import { useStore } from "@/services/store";
import EdwAppHeaderMenu from "./Menu";
import EdwAppHeaderNotifications from "./Notifications";
import EdwAppHeaderAuth from "./Auth";
import EdwAppHeaderUser from "./User";

export default function AppHeader() {
  const { isAuth } = useAuth();
  const { storeAppSidebarOpen, setStoreAppSidebarOpen } = useStore();

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
      <section className="edw-app-header-user">{isAuth ? <EdwAppHeaderUser /> : <EdwAppHeaderAuth />}</section>
    </header>
  );
}
