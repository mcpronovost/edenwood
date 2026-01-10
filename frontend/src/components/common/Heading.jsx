export default function EdwHeading({ title, description, actions, ph = 32 }) {
  return (
    <header className="edw-heading" style={{ padding: `0 ${ph}px` }}>
      <div className="edw-heading-wrapper">
        <div className="edw-heading-content">
          {title && <h1 className="edw-heading-content-title">{title}</h1>}
          {description && <p className="edw-heading-content-description">{description}</p>}
        </div>
        {actions && <div className="edw-heading-actions">{actions}</div>}
      </div>
    </header>
  );
}