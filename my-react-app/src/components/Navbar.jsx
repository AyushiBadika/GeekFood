import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <h3>GeekFoods</h3>
        </div>
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <button>Get Started</button>
      </div>
    </>
  );
}

export default Navbar;
