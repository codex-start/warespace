import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">W</span>
              <span>
                Ware<span className="footer__logo-accent">Space</span>
              </span>
            </Link>
            <p className="footer__tagline">
              India's premier platform for industrial warehouse rental and leasing. Connecting businesses with the right space since 2020.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social-link">in</a>
              <a href="#" aria-label="Twitter" className="footer__social-link">X</a>
              <a href="#" aria-label="Instagram" className="footer__social-link">IG</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/warehouses">All Warehouses</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Warehouse Types</h4>
            <ul className="footer__list">
              <li><span>Available on Rent</span></li>
              <li><span>Cold Storage</span></li>
              <li><span>Bonded Warehouses</span></li>
              <li><span>Eco-Certified Spaces</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list footer__list--contact">
              <li>
                <span className="footer__contact-label">Phone</span>
                <a href="tel:+919760470337">+91 97604 70337</a>
              </li>
              <li>
                <span className="footer__contact-label">Email</span>
                <a href="mailto:sagarrana9760@gmail.com">sagarrana9760@gmail.com</a>
              </li>
              <li>
                <span className="footer__contact-label">Office</span>
                <span>Deepak Properties, Reliance Road,<br />Near Pilkuwa Toll Plaza NH9,<br />Hapur – 245304, Delhi NCR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} WareSpace. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
