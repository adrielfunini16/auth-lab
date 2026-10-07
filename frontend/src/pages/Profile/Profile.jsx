import Navbar from '../../components/Navbar/Navbar.jsx';
import './Profile.css';

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="container page-content">
        <h1>Profile</h1>
        <section className="profile-card" aria-label="User information">
          <div className="profile-avatar" role="img" aria-label="Placeholder avatar for John Doe">JD</div>
          {/* Dados fictícios: conectar ao usuário durante os estudos. */}
          <dl className="profile-details">
            <div>
              <dt>Name</dt>
              <dd>John Doe</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>john@example.com</dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}
