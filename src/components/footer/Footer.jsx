import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral">
      <div className="footer p-10  text-neutral-content lg:container mx-auto lg:max-w-6xl lg:px-7">
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/reviews" className="link link-hover">
            Reviews
          </Link>
          <Link to="/genres" className="link link-hover">
            Genres
          </Link>
          <Link to="/recommendations" className="link link-hover">
            Recommendations
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Discover</h6>
          <Link to="/about-us" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/submit" className="link link-hover">
            Submit a Book
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms-of-use" className="link link-hover">
            Terms of Use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
