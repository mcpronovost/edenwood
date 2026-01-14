import { useEffect, useRef, useState } from "react";
import { User, Image } from "lucide-react";
import { useAuth } from "@/services/auth";
import { useTranslation } from "@/services/translation";
import { EdwBanner, EdwButton, EdwCard, EdwForm, EdwFormField, EdwFormMessage } from "@/components/common";

export default function SettingsProfile() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [profileForm, setProfileForm] = useState({
    avatar: currentUser.avatar,
    cover: currentUser.cover,
    name: currentUser.name,
    slug: currentUser.slug,
    abbr: currentUser.abbr
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error when user starts typing
    if (hasError?.fields?.[name]) {
      setHasError((prev) => ({
        ...prev,
        fields: {
          ...prev.fields,
          [name]: "",
        },
      }));
    }
  };
  
  const handleImageClick = (field) => {
    setHasError((prev) => ({
      ...prev,
      [field]: null
    }));
    if (field === "avatar") avatarInputRef.current?.click();
    if (field === "cover") coverInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optional validation
    if (file.size > 2 * 1024 * 1024) {
      setHasError({ avatar: t("Avatar image must be smaller than 2MB") });
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setProfileForm((prev) => ({
      ...prev,
      avatar: previewUrl,
      avatarFile: file,
    }));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optional validation
    if (file.size > 2 * 1024 * 1024) {
      setHasError({ cover: t("Cover image must be smaller than 2MB") });
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setProfileForm((prev) => ({
      ...prev,
      cover: previewUrl,
      coverFile: file,
    }));
  };

  useEffect(() => {
    return () => {
      if (profileForm.avatar?.startsWith("blob:")) {
        URL.revokeObjectURL(profileForm.avatar);
      }
      if (profileForm.cover?.startsWith("blob:")) {
        URL.revokeObjectURL(profileForm.cover);
      }
    };
  }, [profileForm.avatar, profileForm.cover]);

  return (
    <section className="edw-settings-profile">
      <article className="edw-settings-profile-visual">
        <div className="edw-settings-profile-visual-preview">
          <EdwCard nop fh alignTop>
            <EdwBanner avatarSize={80} avatarBorderSize={8} avatarTop={48} avatarSrc={profileForm.avatar} coverSrc={profileForm.cover} height={150} />
            {(hasError?.avatar || hasError?.cover) && (
              <EdwFormMessage hasError={hasError?.avatar || hasError?.cover} style={{margin: "0 16px 16px"}} />
            )}
          </EdwCard>
        </div>
        <div className="edw-settings-profile-visual-avatar">
          <EdwCard fh clickable onClick={() => handleImageClick("avatar")}>
            <User size={24} color={"var(--edw-c-primary)"} />
            <p className="edw-settings-profile-visual-avatar-title">{t("Change Avatar")}</p>
            <small className="edw-settings-profile-visual-avatar-max">{t("200x200px (max 2MB)")}</small>
            <input
              ref={avatarInputRef}
              name="avatar"
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </EdwCard>
        </div>
        <div className="edw-settings-profile-visual-cover">
          <EdwCard fh clickable onClick={() => handleImageClick("cover")}>
            <Image size={24} color={"var(--edw-c-primary)"} />
            <p className="edw-settings-profile-visual-cover-title">{t("Change Cover")}</p>
            <small className="edw-settings-profile-visual-cover-max">{t("1136x256px (max 2MB)")}</small>
            <input
              ref={coverInputRef}
              name="cover"
              type="file"
              accept="image/*"
              hidden
              onChange={handleCoverChange}
            />
          </EdwCard>
        </div>
      </article>
      <EdwCard>
        <EdwForm className="edw-settings-form" isLoading={isLoading}>
          <h2 className="edw-settings-form-title">{t("Your Profile")}</h2>
          <EdwFormField
            label={t("Public Name")}
            name="name"
            defaultValue={profileForm.name}
            onChange={handleChange}
            hasError={hasError?.fields?.name}
            required
          />
          {hasError?.name && (
            <EdwFormMessage hasError={hasError?.name} />
          )}
          <EdwFormField
            label={t("Slug")}
            name="slug"
            defaultValue={profileForm.slug}
            onChange={handleChange}
            hasError={hasError?.fields?.slug}
            disabled
          />
          {hasError?.slug && (
            <EdwFormMessage hasError={hasError?.slug} />
          )}
          <EdwFormField
            label={t("Abbreviation")}
            name="abbr"
            defaultValue={profileForm.abbr}
            onChange={handleChange}
            hasError={hasError?.fields?.abbr}
            disabled
          />
          {hasError?.abbr && (
            <EdwFormMessage hasError={hasError?.abbr} />
          )}
          <div className="edw-form-actions">
            <EdwButton
              type="submit"
              color="primary"
              disabled={isLoading}
            >
              {isLoading ? t("Saving...") : t("Save")}
            </EdwButton>
          </div>
        </EdwForm>
      </EdwCard>
    </section>
  );
}
