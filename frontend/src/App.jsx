import Providers from "@/components/Providers";

function Layout() {
  return (
    <div id="edw-app">
      <aside className="edw-app-sidebar">side</aside>
      <div id="edw-app-core">
        <header className="edw-app-header">header</header>
        <main id="edw-app-main">
          <h1>Welcome to Edenwood</h1>
        </main>
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
