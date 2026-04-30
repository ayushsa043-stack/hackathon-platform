import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ user, setUser, setShowRegister, setShowLogin }) {

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Hackathon Platform</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/hackathons">Hackathons</Link></li>

        <li><Link to="/teams">Teams</Link></li>

        <li><Link to="/blog">Blog</Link></li>

        <li><Link to="/about">About</Link></li>

        <li>Contact</li>

        {!user ? (
          <li
            className="login-btn"
            onClick={() => {
              setShowLogin(true);
              setShowRegister(false);
            }}
          >
            Login
          </li>
        ) : (
          <>
            <li className="login-btn">Hi, {user.name}</li>
            <li className="login-btn" onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;