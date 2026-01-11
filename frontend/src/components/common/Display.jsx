export default function EdwDisplay({ img, name, type, blurred = false }) {
  return (
    <div className={`edw-display ${blurred ? "blurred" : ""}`}>
      <div className="edw-display-overlay" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="edw-display-content">
        <div
          className="edw-display-content-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="edw-display-content-info">
          <h3>{name}</h3>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}
