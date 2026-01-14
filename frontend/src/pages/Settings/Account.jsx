import { useEffect, useRef, useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@/services/auth";
import { useTranslation } from "@/services/translation";
import {
  EdwAlert,
  EdwButton,
  EdwCard,
  EdwForm,
  EdwFormField,
  EdwFormMessage,
  EdwLoading,
} from "@/components/common";

export default function SettingsAccount() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [initialAccountForm, setInitialAccountForm] = useState({
    username: "",
    email: "",
  });
  const [accountForm, setAccountForm] = useState(initialAccountForm);

  const fetchAccountData = async () => {
    setIsLoading(true);
    setHasError(null);
    try {
      const result = await api.get("/auth/me/account/");
      if (!result.success || !result.account) throw Error();
      setInitialAccountForm((prev) => ({
        ...prev,
        username: result.account.username,
        email: result.account.email,
      }));
      setAccountForm((prev) => ({
        ...prev,
        username: result.account.username,
        email: result.account.email,
      }));
    } catch {
      setHasError({
        form: t("An error occurred"),
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleReset = async () => {
    setAccountForm({
      username: initialAccountForm.username,
      email: initialAccountForm.email,
    });
    usernameRef.current.value = initialAccountForm.username || "";
    emailRef.current.value = initialAccountForm.email || "";
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  return (
    <section className="edw-settings-profile">
      {hasError?.form ? (
        <EdwCard>
          <EdwAlert
            title={t("An error occurred")}
            message={t(
              "Unable to access account data, check your internet connection or try again later"
            )}
            variant="danger"
          />
        </EdwCard>
      ) : (
        <EdwCard>
          {isLoading ? (
            <EdwLoading />
          ) : (
            <EdwForm className="edw-settings-form" isLoading={isLoading}>
              <h2 className="edw-settings-form-title">{t("Your Account")}</h2>
              <EdwFormField
                ref={usernameRef}
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
                ref={emailRef}
                label={t("Email")}
                name="email"
                defaultValue={accountForm.email}
                onChange={handleChange}
                hasError={hasError?.fields?.email}
                required
              />
              {hasError?.email && <EdwFormMessage hasError={hasError?.email} />}
              <div className="edw-form-actions">
                <EdwButton
                  type="submit"
                  color="primary"
                  disabled={isLoading || isSubmitLoading}
                >
                  {isSubmitLoading ? t("Saving...") : t("Save")}
                </EdwButton>
                <EdwButton
                  type="reset"
                  disabled={isLoading || isSubmitLoading}
                  outline
                  action={handleReset}
                >
                  {t("Cancel")}
                </EdwButton>
              </div>
            </EdwForm>
          )}
        </EdwCard>
      )}
    </section>
  );
}
