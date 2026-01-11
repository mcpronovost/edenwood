import { Construction } from "lucide-react";
import { useTranslation } from "@/services/translation";
import { EdwFeedback, EdwGrid, EdwHeading } from "@/components/common";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="edw-page edw-about">
      <EdwHeading title={t("About")} />
      <EdwGrid>
        <EdwFeedback ghost variant="warning" title={t("Under Construction")} message={t("This page is currently under construction. Please check back later.")} icon={Construction} />
      </EdwGrid>
    </section>
  );
}