export default function EdwChip({ children, color = "default", outline = false }) {
  return (
    <span
      className={`edw-chip ${!color?.startsWith("#") ? `edw-chip-${color}` : ""} ${outline ? "edw-chip-outline" : ""}`}
      style={
        color?.startsWith("#")
          ? {
              backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
              borderColor: color,
            }
          : {}
      }
    >
      <span className="edw-chip-content" style={color?.startsWith("#") ? { color: color } : {}}>
        {children}
      </span>
    </span>
  );
}