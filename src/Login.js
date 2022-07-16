import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      //maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <h2 className="heading">Tic-Tac-Toe App</h2>
      <div className="login">
        <div className="login__container">
          <div className="auth-sign">
            <button
              className="login__btn login__google beta"
              onClick={signInWithGoogle}
            >
              <FontAwesomeIcon icon="fa-brands fa-google" className="icon" />
              google login
            </button>

            <button
              className="login__github login__btn beta"
              onClick={signInWithGithub}
            >
              <FontAwesomeIcon icon="fa-brands fa-github" className="icon" />
              github login
            </button>
          </div>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />

          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {/* <FontAwesomeIcon icon="fa-solid fa-eye" className="eye" /> */}

          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-right-to-bracket"
              className="icon"
            />
            Login
          </button>

          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
