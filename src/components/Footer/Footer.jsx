import React from "react";
import ContactIcons from "./ContactIcons";
import "./Footer.css";
import styled from "styled-components";

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();
const name = "Made By Nafil Arzzam";

const FooterDiv = styled.div`
  padding-bottom: 1rem;
`;

function Footer() {
  return (
    <footer>
      <FooterDiv>
        <ContactIcons />
        <p> {name}. </p>
        <p>
          {cr}
          {year}.
        </p>
      </FooterDiv>
    </footer>
  );
}

export default Footer;
