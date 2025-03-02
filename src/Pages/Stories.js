import '../Styles/Stories.css'


import ngc from '../Img/NGC.png'

import Story from '../Components/Story.js'

export default function Stories() {
        return (
                <>
                     <div className="Stories">
                        <div className="StoriesIntro">
                            <p id="title">NSBE Success Stories</p>
                            <p id="subtext">Real stories from NSBE-WBESS Members. Have one of your own, tell us <a id='succform' href='https://docs.google.com/forms/d/e/1FAIpQLSfMjHlg6cKz5uhoTgF1K0655AyeW_egp5vPeUycRjpakn75aw/viewform?usp=sharing' target='_blank' rel='noreferrer'>here </a> </p>
                        </div>
                        <div className="StoriesCards">
                            <Story id='story' image={ngc} name="Aiden Williams - Northrop Grumman Corporation" desc="My internship opportunity at Northrop Grumman could not have ben possible without NSBE and the preparation from the WBESS chapter. The resume, LinkedIn, and interview prep workshops made me feel confident walking into the National Conference last spring. I would be glad recommend NSBE to all Engineers hoping to grow professionally."/>
                        </div>
                     </div>   
                </>
        );
}               