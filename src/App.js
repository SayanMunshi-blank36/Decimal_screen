import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="parent_div">
        <Navbar />
        <section className="middle_section">
          <Sidebar />
          <Dashboard />
        </section>
        <section className="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
