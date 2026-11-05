
import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react';

import './AuthPages.css';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notice, setNotice] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      setNotice('Your passwords do not match. Please try again.');
      return;
    }

    setNotice(
      'Registration is not connected yet. We will enable account creation when the backend is ready.',
    );
  }

  return (
    <section className="auth-page">
      <div className="auth-card auth-card--register">
        <div className="auth-card__icon">
          <UserRound size={26} />
        </div>

        <div className="auth-card__heading">
          <span className="auth-card__eyebrow">
            JOIN OUR COMMUNITY
          </span>
          <h1>Create your account</h1>
          <p>
            Discover opportunities, plan your next step, and
            make your ambitions count.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__field">
            <label htmlFor="register-name">Full name</label>
            <div className="auth-form__input-wrapper">
              <UserRound size={18} aria-hidden="true" />
              <input
                id="register-name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>
          </div>

          <div className="auth-form__field">
            <label htmlFor="register-email">Email address</label>
            <div className="auth-form__input-wrapper">
              <Mail size={18} aria-hidden="true" />
              <input
                id="register-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-form__field">
            <label htmlFor="register-password">Password</label>
            <div className="auth-form__input-wrapper">
              <LockKeyhole size={18} aria-hidden="true" />
              <input
                id="register-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="auth-form__password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="auth-form__field">
            <label htmlFor="register-confirm-password">
              Confirm password
            </label>
            <div className="auth-form__input-wrapper">
              <LockKeyhole size={18} aria-hidden="true" />
              <input
                id="register-confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Enter your password again"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="auth-form__password-toggle"
                onClick={() =>
                  setShowConfirmPassword((visible) => !visible)
                }
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirm password'
                    : 'Show confirm password'
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {notice && (
            <p className="auth-form__notice" role="status">
              {notice}
            </p>
          )}

          <button
            type="submit"
            className="auth-form__submit"
          >
            Create account
            <ArrowRight size={18} />
          </button>

          <p className="auth-form__terms">
            By creating an account, you agree to use the platform
            responsibly. We will add our formal terms and privacy
            policy before launch.
          </p>
        </form>

        <p className="auth-card__switch">
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
