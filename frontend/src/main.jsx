import "@/assets/styles/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const edwRoot = document.getElementById("edw");
if (edwRoot) {
  createRoot(edwRoot).render(<Root />);
}
