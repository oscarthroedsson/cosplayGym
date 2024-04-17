import { Calander } from "./components/Calander";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <main className="px-4 xl:px-24 2xl:px-32 bg-slate-50 h-screen">
        <Navbar />
        <header>
          <Header />
        </header>
        <div>
          <div id="calander" className="max-w-7xl mx-auto mb-10 ">
            <Calander />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
