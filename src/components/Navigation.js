import React from "react";
import "../navigation.css";
import logo from "../assets/PNG_GREENSIA_LOGO_HORIZONTAL_COLOR.png";
import search from "../assets/Icon feather-search.png";
import shopping from "../assets/Icon feather-shopping-cart.png";
import user from "../assets/user.svg"
import menu from "../assets/menu.svg"

function Navigation() {
  return (
    <header>
      <nav class="nav-container">
        <div class="nav-links">
          <img class="logo" src={logo} href="#" alt="logo-pic" />

          <ul className="nav-layout">
      
            <li>
              {" "}
              <img class="nav-icon" src={search} alt="Search Bar" />
            </li>
            <li>
              {" "}
              <img class="nav-icon" src={shopping} alt="Shopping Cart" />
            </li>
            <li>
              {" "}
              <img class="nav-icon" src={user} alt="User" />
            </li>
            <li>
              {" "}
              <img class="mobile-nav-icon" src={menu} alt="Hamburger Menu" />
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
