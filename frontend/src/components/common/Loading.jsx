export default function EdwLoading({ variant = "circles", fullview = false }) {
  return (
    <div className={`edw-loading ${fullview ? "edw-loading-fullview" : ""}`}>
      <div className={`edw-loading-spinner edw-${variant}`}></div>
    </div>
  );
}