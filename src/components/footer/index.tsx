import logo from "/fav.ico";
import { Avatar, AvatarImage } from "../ui/avatar"; // Import Avatar components

import "./style.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram } from "react-icons/fa"; // Import the Instagram icon

export default () => {
  return (
    <section className="hero-section">
      <div className="flower-shop-container">
        <p className="main-content-container">
          <span className="vibrant-flower-heading">Forever</span>
          <span className="large-roboto-text"> </span>
          <span className="footer-text-2">Flowers</span>
        </p>
        <Avatar style={{ height: "150px", width: "150px" }}>
          <AvatarImage src={logo} alt="Forever Flowers Logo" />
        </Avatar>
      </div>

      <div className="flower-shop-info-box">
        <p className="flower-shop-description-text-style">
          Handcrafted with love, our high-quality crochet flowers never fade, and our dolls bring warmth and charm to any home. Timeless beauty in every stitch!
        </p>
      </div>

      <div className="vertical-center-column">
        <Link className="link-list-styles" to="/">Home</Link>
        <Link className="link-list-styles" to="/shop">Shop</Link>
        {/* <Link className="link-list-styles" to="/contact">Contact</Link> */}
      </div>

      <div className="vertical-center-column">
        <div className="link-list-styles contact-info-container">
          <FaEnvelope /> 
          <a href="mailto:studio.forever.flowers@gmail.com" className="list-style">
            studio.forever.flowers@gmail.com
          </a>
        </div>

        <div className="link-list-styles contact-info-container">
          <FaInstagram /> 
          <a href="https://www.instagram.com/foreverflowers" className="list-style" target="_blank" rel="noopener noreferrer">
            forever.flowers.studio
          </a>
        </div>
      </div>
    </section>
  );
};