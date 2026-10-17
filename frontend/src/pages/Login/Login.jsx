import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin(formData);
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <p className="eyebrow">Auth Lab</p>
        <h1 id="login-title">Welcome back</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={handleFormChange}
            />
          </div>
          <button className="button button-primary" type="submit">
            Log in
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </section>
    </main>
  );
}
