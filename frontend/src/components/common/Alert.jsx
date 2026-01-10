import { Info, CircleCheck, CircleX, ShieldAlert } from "lucide-react";

export default function EdwAlert({
  children,
  title,
  message,
  variant = "default",
  showIcon = true,
  icon: IconComponent,
  iconSize = 24,
}) {
  return (
    <div className={`edw-alert edw-alert-variant-${variant}`}>
      {showIcon && (
        <div className="edw-alert-icon">
          {IconComponent ? (
            <IconComponent size={iconSize} />
          ) : variant === "danger" ? (
            <CircleX size={iconSize} />
          ) : variant === "warning" ? (
            <ShieldAlert size={iconSize} />
          ) : variant === "success" ? (
            <CircleCheck size={iconSize} />
          ) : (
            <Info size={iconSize} />
          )}
        </div>
      )}
      <div className="edw-alert-content">
        {title && <p className="edw-alert-content-title">{title}</p>}
        {message && <p className="edw-alert-content-message">{message}</p>}
        {children}
      </div>
    </div>
  );
}