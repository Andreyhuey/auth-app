import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert(
        "An error occured while fetching user data, please reload page to display data"
      );
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="provider">{user?.providerId}</div>
        <h4>Verified User As</h4>
        <div className="details">
          <div>Display Name: {name}</div>
          <div>ID: {user?.uid}</div>
          <div>Email Address: {user?.email}</div>
        </div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
          <FontAwesomeIcon
            icon="fa-solid fa-right-from-bracket"
            className="icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
