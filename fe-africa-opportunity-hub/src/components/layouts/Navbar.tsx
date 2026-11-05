import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <Link
          to="/"
          className="navbar__brand"
          aria-label="Africa Opportunity Hub home"
          onClick={closeMenu}
        >
          <span className="navbar__brand-icon" aria-hidden="true">
            <Globe size={26} strokeWidth={2} />
          </span>

          <span className="navbar__brand-text">
            Africa <span>Opportunity Hub</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__navigation ${
            isMenuOpen ? 'navbar__navigation--open' : ''
          }`}
          aria-label="Main navigation"
        >
          <div className="navbar__links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/opportunities"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              Explore Opportunities
            </NavLink>
          </div>

          <div className="navbar__actions">
            <NavLink
              to="/login"
              className="navbar__login"
              onClick={closeMenu}
            >
              Log In
            </NavLink>

            <NavLink
              to="/register"
              className="btn btn-primary navbar__signup"
              onClick={closeMenu}
            >
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;