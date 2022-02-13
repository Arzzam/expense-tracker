import React from "react";
import ContactIcons from "./ContactIcons";

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();
const name = "Made By Nafil Arzzam";

function Footer() {
  return (
    <footer>
      <ContactIcons />
      <p> {name}. </p>
      <p>
        {cr}
        {year}.
      </p>
    </footer>
  );
}

export default Footer;
