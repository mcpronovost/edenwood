import { useTranslation } from "@/services/translation";

import EdwAlert from "./Alert";

export default function EdwFormMessage({ hasError }) {
  const { t } = useTranslation();

  return (
    <div className="edw-form-message">
      {hasError && <EdwAlert title="Error" message={hasError || t("An error occurred")} variant="danger" />}
    </div>
  );
}