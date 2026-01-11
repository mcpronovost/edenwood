import { Ghost } from "lucide-react";
import { useRouter } from "@/services/router";
import { useTranslation } from "@/services/translation";
import { EdwButton, EdwFeedback, EdwGrid, EdwHeading } from "@/components/common";

export default function Error404() {
  const { n } = useRouter();
  const { t } = useTranslation();

  return (
    <section className="edw-page edw-error404">
      <EdwHeading title="404" />
      <EdwGrid>
        <EdwFeedback ghost title={t("Page Not Found")} message={t("The requested page could not be found. Please check the URL and try again.")} icon={Ghost}>
          <EdwButton action={() => n("home")} color="primary">
            {t("Go to Home")}
          </EdwButton>
        </EdwFeedback>
      </EdwGrid>
    </section>
  );
}