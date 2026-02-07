import '../Styles/Header.css'
import '../Styles/DarkMode.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

import logo from "../Img/logo.png"


export default function Header() {
  const navigate = useNavigate();
  const switchTheme = () => {
    if(document.querySelector('body').getAttribute('data-theme') === 'dark') {
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
          <img id='logo' src={logo} alt = "NSBE-WBESS logo" />
          The Wisconsin Black Engineering Student Society
        </div>
        <div className="Tabs">
        {/** For some reason having these in reverse order in code mades them come out as intended on site */}

            <div onClick={switchTheme}>
              <Within className="Mode" duration={750}/>
            </div>
            <div className="Pages">
                <p id="pages" onClick={()=>{navigate("/home")}}>Home </p>
                <p id="pages" onClick={()=>{navigate("/about")}}>About </p>
                <p id="pages" onClick={()=>{navigate("/gallery")}}>Gallery </p>
                {/**<a id="pages" onClick={()=>{navigate("/events")}}>Events</a>*/}
            </div>
            <div className="Socials">
              {/**<a href="https://www.facebook.com/NSBEWBESS/" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faFacebook} color={'#1877F2'}/>
              </a> **/}
              <a href="https://www.instagram.com/nsbewbess/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon id="socials" icon={faInstagram} color={'#E1306C'}/>
              </a>
              <a href="https://www.linkedin.com/in/nsbe-wbess-university-of-wisconsin-madison-577a2a320/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon id="socials" icon={faLinkedin} color={'#0077B5'}/>
              </a>
              {/**<a href="https://x.com/nsbe_wbess" target="_blank">
                  <FontAwesomeIcon id="socials" icon={faXTwitter} color={'black'}/>
              </a> **/}
            </div>
        </div>
      </div>
    </>
  );
}

