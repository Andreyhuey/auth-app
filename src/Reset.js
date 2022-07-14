import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashbord");
  }, [user, loading]);

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
          send email reset link
          <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="icon" />
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now
        </div>
      </div>
    </div>
  );
}

export default Reset;
