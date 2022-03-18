import React from "react";
import logoSolo from '../assets/Logo Solo PNG.png'
import instagram from '../assets/Icon awesome-instagram.png'
import '../index.css'

function Footer() {
  return (
    <div>
      <footer>
        <img
          class="footer-logo"
          src={logoSolo}
          alt="Greensia Earthworks Logo"
        />

        <img
          class="footer-instagram"
          src={instagram}
          alt="Greensia Earthworks Instagram"
        />
      </footer>
    </div>
  );
}

export default Footer;
