import Logo from "../../assests/l1.jpg";
import "./Footer.css";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <img src={Logo} alt="Logo" className="im" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum
            architecto ad in neque soluta adipisci reiciendis, quo aliquam
            culpa.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <ul>
            <li>About</li>
            <li>Plans</li>
            <li>AI Models</li>
            <li>Contact</li>
          </ul>
        </article>
        <article>
          <h4>Insights</h4>
          <ul>
            <li>About</li>
            <li>Plans</li>
            <li>AI Models</li>
            <li>Contact</li>
          </ul>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <ul>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Made with ❤️ 2023 &copy;</small>
      </div>
    </footer>
  );
};

export default Footer;
