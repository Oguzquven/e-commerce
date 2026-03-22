import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
