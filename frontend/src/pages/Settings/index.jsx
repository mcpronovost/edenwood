import "@/assets/styles/page/_settings.scss";
import { CircleUser, Cog, Smile, Construction } from "lucide-react";
import { useAuth } from "@/services/auth";
import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import {
  EdwCard,
  EdwFeedback,
  EdwGrid,
  EdwHeading,
  EdwLink,
} from "@/components/common";
import EdwError404 from "@/pages/Error404";
import EdwSettingsProfile from "./Profile";
import EdwSettingsAccount from "./Account";

export default function Settings() {
  const { isAuth } = useAuth();
  const { params } = useRouter();
  const { t } = useTranslation();

  const menu = [
    {
      title: t("Profile"),
      description: t(
        "Change your avatar and cover images, your name, and more"
      ),
      Icon: CircleUser,
      links: [
        {
          name: t("General"),
          routeName: "settings-profile",
        },
      ],
    },
    {
      title: t("Account"),
      description: t("Change settings, configure notifications, and more"),
      Icon: Cog,
      links: [
        {
          name: t("General"),
          routeName: "settings-account",
        },
        {
          name: t("Change Password"),
          routeName: "settings-account-password",
        },
        {
          name: t("Privacy"),
          routeName: "settings-account-privacy",
        },
      ],
    },
    {
      title: t("Friends"),
      description: t("Manage friends and accept invites"),
      Icon: Smile,
      links: [
        {
          name: t("Manage Friends"),
          routeName: "settings-friends",
        },
        {
          name: t("Invites"),
          routeName: "settings-friends-invites",
        },
      ],
    },
  ];

  if (!isAuth) {
    return <EdwError404 />;
  }

  return (
    <section className="edw-page edw-settings">
      <EdwHeading title={t("Settings")} />
      <EdwGrid>
        <div className="edw-settings-grid">
          <aside className="edw-settings-grid-nav">
            <nav className="edw-settings-nav">
              <ul>
                {menu.map((m, index) => (
                  <li key={index} className={`edw-settings-nav-item ${index <= 0 ? "edw-first": ""}`}>
                    <header className="edw-settings-nav-header">
                      <span className="edw-settings-nav-header-icon">
                        <m.Icon size={24} color={"var(--edw-c-primary)"} />
                      </span>
                      <span className="edw-settings-nav-header-title">
                        <span className="edw-settings-nav-header-title-name">
                          {m.title}
                        </span>
                        <small className="edw-settings-nav-header-title-desc">
                          {m.description}
                        </small>
                      </span>
                    </header>
                    <ul className="edw-settings-nav-menu">
                      {m.links.map((l, li) => (
                        <li key={li} className="edw-settings-nav-menu-item">
                          <EdwLink
                            routeName={l.routeName}
                            className={`edw-settings-nav-menu-item-link ${`settings-${params?.section}` === l.routeName ? "edw-active" : ""}`}
                          >
                            {l.name}
                          </EdwLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="edw-settings-grid-main">
            {params?.section === "profile" ? (
              <EdwSettingsProfile />
            ) : params?.section === "account" ? (
              <EdwSettingsAccount />
            ) : (
              <EdwCard>
                <EdwFeedback ghost variant="warning" title={t("Under Construction")} message={t("These settings are currently in development and should be available soon")} icon={Construction} />
              </EdwCard>
            )}
          </div>
        </div>
      </EdwGrid>
    </section>
  );
}
