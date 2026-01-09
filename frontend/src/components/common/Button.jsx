import { Loader } from "lucide-react";

import { useRouter } from "@/services/router";

export default function EdwButton({
  children,
  routeName,
  params = {},
  action,
  icon: IconComponent,
  type = "button",
  disabled = false,
  isLoading = false,
  color = "default",
  plain = false,
  outline = false,
  block = false,
  className = "",
  style = {},
}) {
  const { n, lang } = useRouter();

  const handleClick = (e) => {
    if (type !== "submit") {
      e.preventDefault();
    }
    if (!disabled && routeName) {
      n(routeName, params, lang);
    } else if (!disabled && action) {
      action();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`edw-button ${color ? `edw-button-${color}` : ""} ${plain ? "edw-button-plain" : ""} ${
        outline ? "edw-button-outline" : ""
      } ${block ? "edw-button-block" : ""} ${IconComponent && !children ? "edw-button-icon" : ""} ${className}`}
      style={{
        ...style,
        ...(color?.startsWith("#") && {
          backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
          borderColor: color,
        }),
      }}
    >
      {isLoading && (
        <span className="edw-button-loading">
          <Loader size={16} className="edw-button-loading-icon" />
        </span>
      )}
      <span
        className={`edw-button-content ${isLoading ? "edw-button-content-loading" : ""}`}
        style={color?.startsWith("#") ? { color: color } : {}}
      >
        {IconComponent && <IconComponent size={16} />}
        {children && children}
      </span>
    </button>
  );
}