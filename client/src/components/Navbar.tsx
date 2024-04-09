import { useState } from "react";
import logo from "../assets/image/logo.png";

export function Navbar() {
  const [seeMobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-full">
        <img src={logo} alt="" className="w-22 h-12" />

        <div className="bg-green-200">
          <svg
            className="text-slate-800"
            aria-hidden="true"
            fill=""
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="hidden flex justify-center items-center gap-6">
          <a className="h-fit">Book Instructor</a>
          <a className="h-fit">About Us</a>
          <a className="h-fit">Log In</a>
        </div>
      </nav>
    </>
  );
}
