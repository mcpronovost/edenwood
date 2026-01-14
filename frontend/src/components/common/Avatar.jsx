import { User } from "lucide-react";
import { DOMAIN } from "@/services/api/utils";

export default function EdwAvatar({
  name = "",
  abbr = "",
  src,
  icon: IconComponent = User,
  size = 64,
  bgColor = "var(--edw-c-primary)",
  fgColor = "var(--edw-c-primary-fg)",
  borderColor = "var(--edw-card-bg)",
  borderSize = 2,
}) {
  return (
    <div
      className="edw-avatar"
      style={{
        backgroundColor: src ? borderColor : bgColor,
        borderColor: borderColor,
        borderWidth: borderSize ? `${borderSize}px` : "2px",
        color: fgColor,
        width: size,
        height: size,
      }}
    >
      {src ? (
        <img src={(!src.startsWith("http") && !src.startsWith("blob")) ? `${DOMAIN}${src}` : src} alt={name} className="edw-avatar-img" />
      ) : abbr || name ? (
        <span className="edw-avatar-abbr" style={{ fontSize: size * 0.35 }}>
          {abbr || name.charAt(0).toUpperCase()}
        </span>
      ) : (
        <span className="edw-avatar-icon">
          <IconComponent size={size * 0.5} />
        </span>
      )}
    </div>
  );
}