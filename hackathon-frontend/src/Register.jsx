import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
        role: email === "ayushsa043@gmail.com" ? "ADMIN" : "USER",
      });

      const loginRes = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      setUser(loginRes.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>

      <input
        className="register-input"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="register-input"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="register-input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;