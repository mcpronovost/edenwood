export default function EdwCard({ children, nop = false, className, style }) {
  return (
    <div className={`edw-card ${nop ? "edw-card-nop" : ""} ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
}