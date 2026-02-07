import '../Styles/Home.css'

import Contact from './Contact'
import Membership from './Membership'
// import Calendar from './Calendar';
import Events from './Events';
// import Stories from './Stories'

export default function Home() {
        return (
                <>
                     <div className="Home">
                        <div className="Intro">
                                <div className="IntroSection">
                                        <p id='intro'>Welcome to the Wisconsin Black Engineering Student Society at The University of Wisconsin - Madison!</p>
                                </div>
                        </div>
                        <p name='contact'>
                                <Contact />
                        </p>
                        <p name='events'>
                                <Events />
                        </p>
                        <p name='calendar'>
                                {//*<Calendar />
                                }
                        </p>
                        {/* <a name='stories'>
                                <Stories />
                        </a> */}
                        <p name='membership'>
                                <Membership />
                        </p>
                     </div>   
                </>
        );
}               