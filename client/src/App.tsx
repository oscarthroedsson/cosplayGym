import { useState } from "react";
import { Calander } from "./components/Calander";
import { HeaderComponent } from "./components/HeaderComponent";
import { Navbar } from "./components/Navbar";
// import BookingForm from "./components/BookingForm";

function App() {
  const [showCalander, setCalander] = useState(false);

  return (
    <>
      <main className="px-4 xl:px-24 2xl:px-32 bg-slate-50 h-screen">
        <Navbar />
        <header className="">
          <HeaderComponent />
        </header>
        <div className="">
          <div id="calander" className="max-w-7xl mx-auto  ">
            <Calander />
          </div>
          {/* <BookingForm /> */}
        </div>
      </main>
    </>
  );
}

export default App;
