import React from "react";
import { Link, NavLink } from "react-router-dom";
import "@components/Header.css";
import logo from "@/assets/LOGO.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to={`./`} className="Logo">
        <img src={logo} />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/home">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/a-propos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
