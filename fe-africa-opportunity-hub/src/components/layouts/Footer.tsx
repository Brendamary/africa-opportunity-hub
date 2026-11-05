import { Link } from 'react-router';
import { Globe, ArrowUpRight } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand-section">
            <Link to="/" className="footer__brand">
              <span className="footer__brand-icon" aria-hidden="true">
                <Globe size={24} />
              </span>

              <span className="footer__brand-text">
                Africa <span>Opportunity Hub</span>
              </span>
            </Link>

            <p className="footer__description">
              Connecting young Africans with opportunities to learn,
              grow, and build their futures.
            </p>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Explore</h2>

            <ul className="footer__links">
              <li>
                <Link to="/opportunities">All Opportunities</Link>
              </li>
              <li>
                <Link to="/opportunities?category=jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/opportunities?category=scholarships">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/opportunities?category=internships">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/opportunities?category=fellowships">
                  Fellowships
                </Link>
              </li>
              <li>
                <Link to="/opportunities?category=grants">Grants</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">About</h2>

            <ul className="footer__links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Get Involved</h2>

            <ul className="footer__links">
              <li>
                <Link to="/register">
                  Create an Account <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>

            <p className="footer__note">
              Have an opportunity to share? Join us in connecting people
              with possibilities.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {currentYear} Africa Opportunity Hub. All rights
            reserved.
          </p>

          <p className="footer__tagline">
            Opportunities without borders.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;