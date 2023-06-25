import "./Navbar.css";
import Logo from "../assests/l1.jpg";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Kissan" />
          </li>
          <li>
            <a className="link-styled">Home</a>
          </li>
          <li>
            <a className="link-styled">Features</a>
          </li>
          <li>
            <a className="link-styled">ChatBot</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
