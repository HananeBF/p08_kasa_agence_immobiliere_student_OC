import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "@/assets/LOGO.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to={`./`}>
        <img src={logo} />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>

          <li>
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
