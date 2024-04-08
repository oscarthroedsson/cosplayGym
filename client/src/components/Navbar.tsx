import logo from "../assets/image/logo.png";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <img src={logo} alt="" className="w-22 h-12" />
        <div className="flex justify-center items-center gap-6">
          <a className="h-fit">Book Instructor</a>
          <a className="h-fit">About Us</a>
          <a className="h-fit">Log In</a>
        </div>
      </nav>
    </>
  );
}
