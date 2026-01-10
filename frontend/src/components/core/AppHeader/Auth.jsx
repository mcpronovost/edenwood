import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import { EdwAvatar, EdwButton } from "@/components/common";

export default function AppBarAuth() {
  const { n } = useRouter();
  const { t } = useTranslation();

  return (
    <section className="edw-app-bar-auth">
      <EdwButton
        className="edw-app-bar-user-button"
        action={() => n("login")}
        plain
        style={{
          padding: "0",
        }}
      >
        <span className="edw-app-bar-user-button-name">{t("Sign In")}</span>
        <EdwAvatar size={36} />
      </EdwButton>
    </section>
  );
}