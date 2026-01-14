export default function EdwCard({
  children,
  nop = false,
  fh = false,
  alignTop = false,
  clickable = false,
  className = "",
  style,
  ...props
}) {
  return (
    <div
      className={[
        "edw-card",
        nop ? "edw-card-nop" : "",
        fh ? "edw-card-fh" : "",
        alignTop ? "edw-card-aligntop" : "",
        clickable ? "edw-card-clickable" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
