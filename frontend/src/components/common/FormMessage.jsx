import { useTranslation } from "@/services/translation";

import EdwAlert from "./Alert";

export default function EdwFormMessage({ hasError, style }) {
  const { t } = useTranslation();

  return (
    <div className="edw-form-message" style={style}>
      {hasError && <EdwAlert title="Error" message={hasError || t("An error occurred")} variant="danger" />}
    </div>
  );
}