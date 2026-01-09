import { RouterProvider } from "@/services/router";
import { StoreProvider } from "@/services/store";

export default function EdwProviders({ children }) {
  return (
    <StoreProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </StoreProvider>
  );
}
