import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TRAVELLER</h1>
          <p>Heroimg Create your Own Memories</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square" />
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square" />
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square" />
            </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>PROJECT</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All versions</a>
        </div>
        <div>
            <h4>COMMUNITY</h4>
            <a href="/">GitHub</a>
            <a href="/">Issue</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>HELP</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact us</a>
        </div>
        <div>
            <h4>OTHERS</h4>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
