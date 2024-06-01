import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <h3>GeekFoods</h3>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/">Restaurant</Link>
          </li>
          <li>
            <Link to="/">Foods</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
    </>
  );
}

export default Navbar;
