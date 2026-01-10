import { useTranslation } from "@/services/translation";
import ComponentApiTableItem from "./ComponentApiTableItem";

export default function ComponentApiTable({ items }) {
  const { t } = useTranslation();

  return (
    <table className="edw-components-api-table">
      <thead className="edw-components-api-table-head">
        <tr className="edw-components-api-table-head-row">
          <th>{t("DevComponentName")}</th>
          <th>{t("DevComponentDescription")}</th>
          <th>{t("DevComponentType")}</th>
          <th>{t("DevComponentDefault")}</th>
        </tr>
      </thead>
      <tbody className="edw-components-api-table-body">
        {items.map((item, index) => (
          <ComponentApiTableItem key={index} {...item} />
        ))}
      </tbody>
    </table>
  );
}