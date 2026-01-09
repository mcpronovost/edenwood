import { createElement, Suspense } from "react";
import { useRouter } from "@/services/router";
import Providers from "@/components/Providers";
import EdwAppHeader from "@/components/core/AppHeader";
import EdwAppSidebar from "@/components/core/AppSidebar";
import EdwAppLoading from "@/components/core/AppLoading";
import EdwAppNotFound from "@/components/core/AppNotFound";

function MainLayout() {
  const { route } = useRouter();

  return (
    <main id="edw-app-main">
      {route && route.component ? (
        <Suspense fallback={<EdwAppLoading />}>
          {createElement(route.component)}
        </Suspense>
      ) : (
        <EdwAppNotFound />
      )}
    </main>
  );
}

function Layout() {
  return (
    <div id="edw-app">
      <EdwAppSidebar />
      <div id="edw-app-core">
        <EdwAppHeader />
        <MainLayout />
      </div>
    </div>
  );
}

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
}

export default App;
