import { useEffect, useState } from "react";
import { User, Image } from "lucide-react";
import { useAuth } from "@/services/auth";
import { useTranslation } from "@/services/translation";
import { EdwBanner, EdwCard } from "@/components/common";

export default function SettingsProfile() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const [profileForm, setProfileForm] = useState({
    avatar: currentUser.avatar,
    cover: currentUser.cover
  });

  return (
    <section className="edw-settings-profile">
      <article className="edw-settings-profile-visual">
        <div className="edw-settings-profile-visual-preview">
          <EdwCard nop fh>
            <EdwBanner avatarSize={80} avatarBorderSize={8} avatarTop={48} avatarSrc={profileForm.avatar} coverSrc={profileForm.cover} />
          </EdwCard>
        </div>
        <div className="edw-settings-profile-visual-avatar">
          <EdwCard fh>
            <User size={24} color={"var(--edw-c-primary)"} />
            <p className="edw-settings-profile-visual-avatar-title">{t("Change Avatar")}</p>
            <small className="edw-settings-profile-visual-avatar-max">{t("200x200px (max 2MB)")}</small>
          </EdwCard>
        </div>
        <div className="edw-settings-profile-visual-cover">
          <EdwCard fh>
            <Image size={24} color={"var(--edw-c-primary)"} />
            <p className="edw-settings-profile-visual-cover-title">{t("Change Cover")}</p>
            <small className="edw-settings-profile-visual-cover-max">{t("1136x256px (max 2MB)")}</small>
          </EdwCard>
        </div>
      </article>
      <EdwCard>
        <div>
          Votre profil
        </div>
      </EdwCard>
    </section>
  );
}
