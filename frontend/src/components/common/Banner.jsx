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
  coverHeight = 100,
  className,
}) {
  return (
    <div className={`edw-banner ${className ? className : ""}`} style={{ height: `${height}px` }}>
      <div className="edw-banner-cover" style={{ height: `${coverHeight}px` }}></div>
      {showAvatar && (
        <div className="edw-banner-avatar" style={{ top: `${avatarTop}px` }}>
          <EdwAvatar src={avatarSrc} abbr={avatarAbbr} size={avatarSize} borderSize={avatarBorderSize} borderColor={avatarBorderColor} />
        </div>
      )}
      {children}
    </div>
  );
}