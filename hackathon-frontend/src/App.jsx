import About from "./About";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Themes from "./Themes";
import Hero from "./Hero";
import Navbar from "./Navbar";

import "./Dashboard.css";

import { useState } from "react";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";
import HackathonList from "./HackathonList";
import Login from "./Login";
import Register from "./Register";
import AdminBlog from "./AdminBlog";
import Blog from "./Blog";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar
        user={user}
        setUser={setUser}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />

      {!user && showLogin && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowLogin(false);
            setShowRegister(false);
          }}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {showRegister ? (
              <>
                <Register
                  setUser={(data) => {
                    setUser(data);
                    setShowLogin(false);
                    setShowRegister(false);
                  }}
                />

                <p
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    marginTop: "10px",
                  }}
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                >
                  Already have an account? Login
                </p>
              </>
            ) : (
              <>
                <Login
                  setUser={(data) => {
                    setUser(data);
                    setShowLogin(false);
                    setShowRegister(false);
                  }}
                />

                <p style={{ marginTop: "10px" }}>
                  New user?{" "}
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      setShowRegister(true);
                      setShowLogin(true);
                    }}
                  >
                    Register
                  </span>
                </p>
              </>
            )}

            <button
              className="close-btn"
              onClick={() => {
                setShowLogin(false);
                setShowRegister(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Themes />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog user={user} />} />

        <Route
          path="/hackathons"
          element={
            user ? (
              <div className="page-container">
                <p className="section-title">Welcome, {user.name}</p>

                {user.role === "ADMIN" && <AdminBlog user={user} />}

                <HackathonList user={user} />
              </div>
            ) : (
              <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                Please login first
              </h2>
            )
          }
        />

        <Route
          path="/teams"
          element={
            user ? (
              <div className="page-container">
                <p className="section-title">Welcome, {user.name}</p>

                <TeamForm />

                <TeamList currentUser={user.name} user={user} />
              </div>
            ) : (
              <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                Please login first
              </h2>
            )
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;