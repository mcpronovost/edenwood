import { Construction } from "lucide-react";
import { useTranslation } from "@/services/translation";
import { EdwFeedback, EdwGrid, EdwHeading } from "@/components/common";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="edw-page edw-home">
      <EdwHeading title={t("Home")} />
      <EdwGrid>
        <EdwFeedback ghost variant="warning" title={t("Under Construction")} message={t("This page is currently under construction. Please check back later.")} icon={Construction} />
      </EdwGrid>
    </section>
  );
}