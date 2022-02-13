import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

function ContactIcons() {
  return (
    <div>
      <Link href="https://github.com/Arzzam" target="_blank">
        <GitHubIcon className="icons" />
      </Link>
      <Link href="https://www.linkedin.com/in/arzzam19/" target="_blank">
        <LinkedInIcon className="icons" />
      </Link>
      <Link href="https://www.instagram.com/arz_zam/" target="_blank">
        <InstagramIcon className="icons" />
      </Link>
    </div>
  );
}

export default ContactIcons;
