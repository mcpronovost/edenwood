export default function EdwGrid({ children, className, ...props }) {
  return (
    <section className={`edw-grid ${className ? className : ""}`} {...props}>
      {children}
    </section>
  );
}