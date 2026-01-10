export default function EdwForm({ children, onSubmit, isLoading, ...props }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit && !isLoading) {
      onSubmit(e);
    }
  };

  return (
    <form className="edw-form" onSubmit={handleSubmit} disabled={isLoading} {...props}>
      {children}
    </form>
  );
}