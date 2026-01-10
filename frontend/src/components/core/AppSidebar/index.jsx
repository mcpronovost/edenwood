import {
  Blocks,
  Compass,
  LayoutDashboard,
  ListTodo,
  Settings,
} from "lucide-react";
import { useStore } from "@/services/store";
import { useTranslation } from "@/services/translation";
import EdwAppSidebarHeader from "./Header";
import EdwAppSidebarNavItem from "./NavItem";

export default function AppSidebar() {
  const { currentUser, storeAppSidebarOpen } = useStore();
  const { t } = useTranslation();

  return (
    <aside className={`edw-app-sidebar ${storeAppSidebarOpen ? "open" : ""}`}>
      <EdwAppSidebarHeader />
      <section className="edw-app-sidebar-menu">
        <nav className="edw-app-sidebar-nav">
          <ul className="edw-app-sidebar-nav-list">
            <EdwAppSidebarNavItem icon={LayoutDashboard} text={t("Dashboard")} href="home" />
            <EdwAppSidebarNavItem icon={Compass} text={t("Discover")} href="discover" />
          </ul>
          {currentUser && (
            <ul className="edw-app-sidebar-nav-list">
              <EdwAppSidebarNavItem icon={LayoutDashboard} text={t("Dashboard")} href="home" />
              <EdwAppSidebarNavItem icon={ListTodo} text={t("Tasks")} href="tasks" />
            </ul>
          )}
        </nav>
      </section>
      <footer className="edw-app-sidebar-footer">
        <nav className="edw-app-sidebar-nav">
          <ul className="edw-app-sidebar-nav-list">
            <EdwAppSidebarNavItem icon={Settings} text={t("Settings")} href="settings" />
            <EdwAppSidebarNavItem icon={Blocks} text={t("Components")} href="dev-components" />
          </ul>
        </nav>
      </footer>
    </aside>
  );
}
