import React, { useState } from "react";
import { saveUser, fetchUsers } from "./APIService";
import home from "@/images/home.png";
const Login = ({ onLogin, onToggleToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const storedUser = await fetchUsers(email);
    console.log("storedUser", storedUser);
    if (storedUser && storedUser.password === password) {
      setLoading(false);
      console.log("log in user");
      onLogin(storedUser.email, storedUser.name); // Pass email and name to onLogin callback
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand text-white" href="/adminapphome">
              <img src={home.src} alt="Logo" className="" width="30" />
            </a>
          </div>
          <a className="navbar-brand text-white" href="#">
            <h5 className="mb-0 text-white">Split Equally</h5>
          </a>
        </div>
      </nav>

      <div className="container">
        <h5 className="mb-0">Login</h5>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="grid">
          Email
          <input type="email" placeholder="Email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} required />
          Password
          <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">{loading ? "Please Wait..." : "Login"}</button>
          <p>
            Don't have an account?{" "}
            <button type="button" className="btn btn-outline-warning" onClick={onToggleToRegister}>
              Register here
            </button>
          </p>{" "}
        </form>
      </div>
    </>
  );
};

export default Login;
