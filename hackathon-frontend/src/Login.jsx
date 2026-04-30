import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      if (typeof res.data === "string") {
        alert(res.data);
        return;
      }

      setUser(res.data);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <input
        className="login-input"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleLogin();
        }}
      />

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;