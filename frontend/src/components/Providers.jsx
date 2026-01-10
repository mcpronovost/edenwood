import { RouterProvider } from "@/services/router";
import { StoreProvider } from "@/services/store";
import { TranslationProvider } from "@/services/translation";

export default function EdwProviders({ children }) {
  return (
    <StoreProvider>
      <RouterProvider>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </RouterProvider>
    </StoreProvider>
  );
}
