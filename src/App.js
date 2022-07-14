import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faRightToBracket,
  faRightFromBracket,
  faUserPlus,
  faPaperPlane,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFontAwesome,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faRightToBracket,
  faRightFromBracket,
  faGithub,
  faGoogle,
  faFontAwesome,
  faUserPlus,
  faPaperPlane,
  faEye,
  faEyeSlash
);

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
