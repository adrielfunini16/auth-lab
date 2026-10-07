import { Link } from 'react-router-dom';

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: implementar cadastro durante os estudos.
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <p className="eyebrow">Auth Lab</p>
        <h1 id="register-title">Create account</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="register-name">Name</label>
            <input id="register-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
          </div>
          <div className="form-field">
            <label htmlFor="register-email">Email</label>
            <input id="register-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </div>
          <div className="form-field">
            <label htmlFor="register-password">Password</label>
            <input id="register-password" name="password" type="password" autoComplete="new-password" />
          </div>
          <div className="form-field">
            <label htmlFor="register-confirm-password">Confirm password</label>
            <input id="register-confirm-password" name="confirmPassword" type="password" autoComplete="new-password" />
          </div>
          <button className="button button-primary" type="submit">Register</button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Log in</Link></p>
      </section>
    </main>
  );
}
