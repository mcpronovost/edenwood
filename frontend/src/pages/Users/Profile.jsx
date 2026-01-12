import "@/assets/styles/page/_users-profile.scss";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import { EdwBanner, EdwCard, EdwFeedback, EdwGrid } from "@/components/common";

export default function UserProfile() {
  const { params } = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (userSlug) => {
    setIsLoading(true);
    setHasError(null);
    try {
      const response = await api.get(`/auth/users/${userSlug}/profile/`);
      if (!response?.success || !response?.user) throw new Error("User doesn't exist");
      setUserData(response.user);
    } catch (error) {
      setHasError(t("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData(params?.userSlug);
  }, [params]);

  return (
    <section className="edw-page edw-userprofile">
      <EdwGrid>
        {(userData && !isLoading && !hasError) ? (
          <>
            <EdwCard nop>
              <EdwBanner avatarSrc={userData.avatar} avatarSize={200} avatarTop={90} avatarBorderSize={8} coverSrc={userData.cover} coverHeight={256} height={298} />
              <section className="edw-userprofile-identity">
                <h1 className="edw-userprofile-identity-name">{userData.name}</h1>
                <small className="edw-userprofile-identity-title">Qui ne fait que passer</small>
              </section>
            </EdwCard>
          </>
        ) : hasError ? (
          <EdwFeedback ghost variant="danger" title={t("Error")} message={hasError} />
        ) : null}
      </EdwGrid>
    </section>
  );
}
