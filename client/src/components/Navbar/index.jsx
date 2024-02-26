import React from "react";
import "./navbar.css";
import { dataNav } from "../../data/dataNav";

import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="container nav__container">
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav__list">
          {dataNav.data.map((item) => {
            return (
              <li key={item.id} className="dropdown nav__item">
                <a href="#" className="nav__link">
                  {item.title}
                </a>
                <div class="dropdown-content">
                  <p>Hello World!</p>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div class="dropdown">
        <span>Mouse over me</span>
        <div class="dropdown-content">
          <p>Hello World!</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
