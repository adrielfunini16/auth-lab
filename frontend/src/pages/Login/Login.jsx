import { Link } from 'react-router-dom';

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: implementar login durante os estudos.
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <p className="eyebrow">Auth Lab</p>
        <h1 id="login-title">Welcome back</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </div>
          <div className="form-field">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" autoComplete="current-password" />
          </div>
          <button className="button button-primary" type="submit">Log in</button>
        </form>
        <p className="auth-footer">Don't have an account? <Link to="/register">Register</Link></p>
      </section>
    </main>
  );
}
