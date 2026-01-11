import { useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@/services/auth";
import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import { validateUsername, validatePassword } from "@/utils";
import {
  EdwButton,
  EdwCard,
  EdwForm,
  EdwFormField,
  EdwFormMessage,
  EdwLink,
} from "@/components/common";

export default function Login() {
  const { setUser, setRat } = useAuth();
  const { n } = useRouter();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    // Fields validation
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);

    usernameError && (newErrors.username = usernameError);
    passwordError && (newErrors.password = passwordError);

    setHasError({ fields: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setHasError(null);
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }
    try {
      const result = await api.login(formData);
      if (result.token) {
        setRat(result.token);
        setUser(result.user);
        n("home");
      } else {
        throw new Error();
      }
    } catch (e) {
      setHasError(e.error || t("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="edw-page edw-auth">
      <div className="edw-auth-container">
        <div className="edw-auth-header">
          <h1 className="edw-auth-header-title">
            {t("Sign in to your account")}
          </h1>
          <p className="edw-auth-header-subtitle">
            {t("Or")}{" "}
            <EdwLink routeName="register" className="edw-auth-header-subtitle">
              {t("create a new account")}
            </EdwLink>
          </p>
        </div>

        <EdwCard>
          <EdwForm
            className="edw-auth-form"
            onSubmit={handleSubmit}
            isLoading={isLoading}
          >
            <EdwFormField
              label={t("Username")}
              name="username"
              defaultValue={formData.username}
              onChange={handleChange}
              hasError={hasError?.fields?.username}
              required
              block
            />
            <EdwFormField
              label={t("Password")}
              name="password"
              type="password"
              defaultValue={formData.password}
              onChange={handleChange}
              hasError={hasError?.fields?.password}
              required
              block
            />
            {hasError?.message && (
              <EdwFormMessage hasError={hasError?.message} />
            )}
            <div className="edw-form-actions">
              <EdwButton
                type="submit"
                color="primary"
                disabled={isLoading}
                block
              >
                {isLoading ? t("Signing in...") : t("Sign in")}
              </EdwButton>
            </div>
          </EdwForm>
        </EdwCard>
      </div>
    </section>
  );
}
