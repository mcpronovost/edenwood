// import { useRouter } from "@/services/router";

export default function AppNotfound() {
  // const { n } = useRouter();

  return (
    <section className="edw-app-not-found">
      <div className="edw-app-not-found-content">
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
      <div className="edw-app-not-found-actions">
        <button className="edw-app-not-found-actions-button" onClick={() => /* n("home") */ {}}>
          Go to home
        </button>
      </div>
    </section>
  );
}