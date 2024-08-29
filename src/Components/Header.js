import '../Styles/Header.css'
import '../Styles/DarkMode.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

export default function Header() {
  const navigate = useNavigate();
  const switchTheme = () => {
    if(document.querySelector('body').getAttribute('data-theme') == 'dark') {
      document.querySelector('body').setAttribute('data-theme', 'light')
    }
    else {
      document.querySelector('body').setAttribute('data-theme', 'dark')
    }
  }

  return (
    <>
      <div className="Header" id="header">
        <div className="Logo" onClick={()=>{navigate("/home")}}>
          <img id='logo' src={require("../Img/logo.png")} />
          The Wisconsin Black Engineering Student Society
        </div>
        <div className="Tabs">
        {/** For some reason having these in reverse order in code mades them come out as intended on site */}

            <div onClick={switchTheme}>
              <Within className="Mode" duration={750}/>
            </div>
            <div className="Pages">
                <a id="pages" onClick={()=>{navigate("/home")}}>Home </a>
                <a id="pages" onClick={()=>{navigate("/about")}}>About </a>
                {/**<a id="pages" onClick={()=>{navigate("/gallery")}}>Gallery</a>*/}
                {/**<a id="pages" onClick={()=>{navigate("/events")}}>Events</a>*/}
            </div>
            <div className="Socials">
              <a href="https://www.facebook.com/NSBEWBESS/" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/nsbewbess/" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/nsbe-wbess-university-of-wisconsin-madison-577a2a320/" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faLinkedin} />
              </a>
              <a href="https://x.com/nsbe_wbess" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faXTwitter} />
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

