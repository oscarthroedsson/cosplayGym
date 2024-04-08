import { useState } from "react";
import { Calander } from "./components/Calander";
import { HeaderComponent } from "./components/HeaderComponent";
import { Navbar } from "./components/Navbar";
import { generateMockData } from "./assets/Mock/sessions";

function App() {
  const [showCalander, setCalander] = useState(false);

  return (
    <>
      <main className="px-12 bg-slate-50">
        <Navbar />
        <header className="h-screen">
          <HeaderComponent />
        </header>
        <div className="flex justify-center items-center">
          <div className="h-screen">
            <Calander />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
