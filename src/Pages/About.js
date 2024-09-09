import '../Styles/About.css'

import {Leadership, Chairs} from './Leadership'


export default function About() {
    return (
            <>
                 <div className="About">
                    <div className="AboutIntro">
                        <p id="title">About Us</p>
                        <p id="subtext">The WBESS student-chapter affiliated with NSBE is dedicated to promoting success of ethnic minorities pursuing STEM at UW-Madison.</p>
                        <p id="footer">Fo' solid, fo'life!</p>
                    </div>
                    <div className="LeadershipPage">
                        <h1 id="leadershiptitle">Executive Board</h1>
                        <Leadership />
                        <h1 id="leadershiptitle">Chairmen</h1>
                        <Chairs />
                    </div>
                 </div>   
            </>
    );
}               