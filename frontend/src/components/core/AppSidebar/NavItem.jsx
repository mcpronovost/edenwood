import { EdwChip, EdwLink } from "@/components/common";

export default function NavItem({
  icon: IconComponent,
  text,
  href,
  params,
  sideIcon: SideIconComponent,
  sideIconColor = "currentColor",
  sideChip,
  sideChipColor = "default",
  disabled = false,
}) {
  if (sideIconColor !== "currentColor") {
    sideIconColor = `var(--edw-c-${sideIconColor})`;
  }

  return (
    <li className="edw-app-sidebar-nav-item">
      <EdwLink
        routeName={href}
        params={params}
        className={`edw-app-sidebar-nav-item-link ${disabled ? "disabled" : ""}`}
        disabled={disabled}
      >
        <span className="edw-app-sidebar-nav-item-link-icon">
          <IconComponent size={18} />
        </span>
        <span className="edw-app-sidebar-nav-item-link-text">{text}</span>
        {SideIconComponent && (
          <span className="edw-app-sidebar-nav-item-link-side-icon">
            <SideIconComponent size={16} color={sideIconColor} />
          </span>
        )}
        {sideChip && (
          <span className="edw-app-sidebar-nav-item-link-side-chip">
            <EdwChip color={sideChipColor}>{sideChip}</EdwChip>
          </span>
        )}
      </EdwLink>
    </li>
  );
}