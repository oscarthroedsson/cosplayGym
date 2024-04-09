import { useState } from "react";
import { Calander } from "./components/Calander";
import { HeaderComponent } from "./components/HeaderComponent";
import { Navbar } from "./components/Navbar";

function App() {
  const [showCalander, setCalander] = useState(false);

  return (
    <>
      <main className="px-4 xl:px-24 2xl:px-32 bg-slate-50">
        <Navbar />
        <header className="h-screen">
          <HeaderComponent />
        </header>
        <div className="">
          <div id="calander" className="h-screen ">
            <Calander />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
