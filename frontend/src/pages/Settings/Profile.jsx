import { useEffect, useRef, useState } from "react";
import { User, Image } from "lucide-react";
import { api } from "@/services/api";
import { useAuth } from "@/services/auth";
import { useTranslation } from "@/services/translation";
import { EdwBanner, EdwButton, EdwCard, EdwForm, EdwFormField, EdwFormMessage } from "@/components/common";

export default function SettingsProfile() {
  const { currentUser, setUser } = useAuth();
  const { t } = useTranslation();

  const avatarRef = useRef(null);
  const coverRef = useRef(null);
  const nameRef = useRef(null);
  const slugRef = useRef(null);
  const abbrRef = useRef(null);

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
    console.log("handleChange");
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
    if (field === "avatar") avatarRef.current?.click();
    if (field === "cover") coverRef.current?.click();
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

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setHasError(null);
    try {
      const formData = new FormData();
      formData.append("name", profileForm.name);
      if (profileForm.avatarFile) {
        formData.append("avatar", profileForm.avatarFile);
      }
      if (profileForm.coverFile) {
        formData.append("cover", profileForm.coverFile);
      }
      const result = await api.post("/auth/me/edit/", formData);
      if (result.success && result.user) {
        setUser(result.user);
        setProfileForm((prev) => ({
          ...prev,
          name: result.user.name,
          slug: result.user.slug,
          abbr: result.user.abbr
        }));
        nameRef.current.value = result.user.name;
        slugRef.current.value = result.user.slug;
        abbrRef.current.value = result.user.abbr;
      } else {
        throw new Error();
      }
    } catch (e) {
      setHasError(e.error || t("An error occurred"));
    } finally {
      setIsLoading(false);
    }
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
              ref={avatarRef}
              name="avatar"
              type="file"
              accept="image/png, image/jpeg, image/webp"
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
              ref={coverRef}
              name="cover"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              hidden
              onChange={handleCoverChange}
            />
          </EdwCard>
        </div>
      </article>
      <EdwCard>
        <EdwForm className="edw-settings-form" isLoading={isLoading} onSubmit={handleSubmit}>
          <h2 className="edw-settings-form-title">{t("Your Profile")}</h2>
          <EdwFormField
            ref={nameRef}
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
            ref={slugRef}
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
            ref={abbrRef}
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
