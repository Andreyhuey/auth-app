import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <div className="beta">
          <button
            className="register__btn register__google beta"
            onClick={signInWithGoogle}
          >
            <FontAwesomeIcon icon="fa-brands fa-google" className="icon" />
            Register with Google
          </button>
          <button
            className="register__btn register__github beta"
            onClick={signInWithGithub}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" className="icon" />
            Register with Github
          </button>
        </div>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn beta" onClick={register}>
          <FontAwesomeIcon icon="fa-solid fa-user-plus" className="icon" />
          Register
        </button>

        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
