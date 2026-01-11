import { DOMAIN } from "@/services/api/utils";
import EdwAvatar from "./Avatar";

export default function EdwBanner({
  children,
  avatarSrc,
  avatarAbbr,
  avatarSize,
  avatarBorderSize,
  avatarBorderColor,
  avatarTop = 64,
  showAvatar = true,
  height = 170,
  coverSrc,
  coverHeight = 100,
  coverRadius = "var(--edw-radius)",
  className,
}) {
  return (
    <div
      className={`edw-banner ${className ? className : ""}`}
      style={{ height: `${height}px` }}
    >
      <div
        className="edw-banner-cover"
        style={{
          borderTopLeftRadius: coverRadius,
          borderTopRightRadius: coverRadius,
          height: `${coverHeight}px`,
        }}
      >
        <div
          className="edw-banner-cover-image"
          style={{
            backgroundImage: coverSrc
              ? `url(${
                  !coverSrc.startsWith("http") ? `${DOMAIN}${coverSrc}` : coverSrc
                })`
              : "none",
            height: `${coverHeight}px`,
          }}
        ></div>
      </div>
      {showAvatar && (
        <div className="edw-banner-avatar" style={{ top: `${avatarTop}px` }}>
          <EdwAvatar
            src={avatarSrc}
            abbr={avatarAbbr}
            size={avatarSize}
            borderSize={avatarBorderSize}
            borderColor={avatarBorderColor}
          />
        </div>
      )}
      {children}
    </div>
  );
}
