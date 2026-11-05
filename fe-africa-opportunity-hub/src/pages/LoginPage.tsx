
import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from 'lucide-react';

import './AuthPages.css';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      'Sign-in is not connected yet. We will enable it when the backend is ready.',
    );
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-card__icon">
          <LockKeyhole size={26} />
        </div>

        <div className="auth-card__heading">
          <span className="auth-card__eyebrow">
            WELCOME BACK
          </span>
          <h1>Sign in to your account</h1>
          <p>
            Pick up where you left off and keep your next
            opportunity within reach.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__field">
            <label htmlFor="login-email">Email address</label>
            <div className="auth-form__input-wrapper">
              <Mail size={18} aria-hidden="true" />
              <input
                id="login-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-form__field">
            <div className="auth-form__label-row">
              <label htmlFor="login-password">Password</label>
              <span className="auth-form__coming-soon">
                Forgot password?
              </span>
            </div>

            <div className="auth-form__input-wrapper">
              <LockKeyhole size={18} aria-hidden="true" />
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
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

          {notice && (
            <p className="auth-form__notice" role="status">
              {notice}
            </p>
          )}

          <button
            type="submit"
            className="auth-form__submit"
          >
            Sign in
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-card__switch">
          Don't have an account?{' '}
          <Link to="/register">Create an account</Link>
        </p>

        <div className="auth-card__divider">
          <span>YOUR NEXT CHAPTER STARTS HERE</span>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
