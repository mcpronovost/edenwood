import { Menu } from "lucide-react";
import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import { EdwButton, EdwDropdown, EdwLink } from "@/components/common";

export default function AppHeaderMenu() {
  const { n } = useRouter();
  const { t } = useTranslation();

  const menuList = [
    {
      label: t("About"),
      routeName: "about",
      onClick:() => n("about"),
    },
    {
      label: t("Privacy Policy"),
      routeName: "privacy-policy",
      onClick: () => n("privacy-policy"),
    },
  ];

  return (
    <section className="edw-app-header-menu">
      <div className="edw-app-header-menu-mobile">
        <EdwDropdown
          toggle={
            <EdwButton className="oyk-app-bar-menu-mobile-toggle" plain style={{ padding: 0 }}>
              <Menu size={24} />
            </EdwButton>
          }
          menu={menuList}
          direction="right"
        />
      </div>
      <nav className="edw-app-header-menu-nav">
        <ul className="edw-app-header-menu-nav-list">
          {menuList.map((item) => (
            <li key={item.label} className="edw-app-header-menu-nav-item">
              <EdwLink routeName={item.routeName} className="edw-app-header-menu-nav-item-link">
                {item.label}
              </EdwLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
