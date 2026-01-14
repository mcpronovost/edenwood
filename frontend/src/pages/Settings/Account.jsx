import { useState } from "react";
import { useAuth } from "@/services/auth";
import { useTranslation } from "@/services/translation";
import { EdwButton, EdwCard, EdwForm, EdwFormField, EdwFormMessage } from "@/components/common";

export default function SettingsAccount() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [accountForm, setAccountForm] = useState({
    username: currentUser.username,
    email: currentUser.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountForm((prev) => ({
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

  return (
    <section className="edw-settings-profile">
      <EdwCard>
        <EdwForm className="edw-settings-form" isLoading={isLoading}>
          <h2 className="edw-settings-form-title">{t("Your Account")}</h2>
          <EdwFormField
            label={t("Username")}
            name="username"
            defaultValue={accountForm.username}
            onChange={handleChange}
            hasError={hasError?.fields?.username}
            required
          />
          {hasError?.username && (
            <EdwFormMessage hasError={hasError?.username} />
          )}
          <EdwFormField
            label={t("Email")}
            name="email"
            defaultValue={accountForm.email}
            onChange={handleChange}
            hasError={hasError?.fields?.email}
            required
          />
          {hasError?.email && (
            <EdwFormMessage hasError={hasError?.email} />
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
