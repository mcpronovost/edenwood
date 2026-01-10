import { Info, CircleCheck, CircleX, ShieldAlert } from "lucide-react";

export default function EdwFeedback({
  children,
  title,
  message,
  variant = "default",
  showIcon = true,
  icon: IconComponent,
  iconSize = 64,
  ghost = false,
}) {
  return (
    <div className={`edw-feedback edw-feedback-variant-${variant} ${ghost ? "edw-feedback-ghost" : ""}`}>
      {showIcon && (
        <div className="edw-feedback-icon">
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
      <div className="edw-feedback-content">
        {title && <p className="edw-feedback-content-title">{title}</p>}
        {message && <p className="edw-feedback-content-message">{message}</p>}
        {children && <div className="edw-feedback-content-children">{children}</div>}
      </div>
    </div>
  );
}