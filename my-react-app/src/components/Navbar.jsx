import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  const currentUrl = location.pathname;
  console.log(currentUrl);

  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <Link to="/" className="text-2xl ">
            GeekFoods
          </Link>
        </div>
        <ul>
          <li className={currentUrl === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentUrl === "/quotes" ? "active" : ""}>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li className={currentUrl === "/restaurant" ? "active" : ""}>
            <Link to="/restaurant">Restaurant</Link>
          </li>
          <li className={currentUrl === "/food" ? "active" : ""}>
            <Link to="/food">Foods</Link>
          </li>
          <li className={currentUrl === "/contact" ? "active" : ""}>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
        <button className="px-4 py-[0.6rem] bg-blue-700 text-white font-bold rounded">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Navbar;
