export default function EdwCard({ children, nop = false, fh = false, className, style }) {
  return (
    <div className={`edw-card ${nop ? "edw-card-nop" : ""} ${fh ? "edw-card-fh" : ""} ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
}