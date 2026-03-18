import Event from '../Components/Event.js'
import '../Styles/Events.css'



export default function Events() {
    return (
            <>
                 <div className="Events">
                    <p id='title'>Events</p>
                    
                    <p id="month">March</p>
                    <div className="March">
                        <Event id='event' day="Tues" date="3" eventName="March General Body Meeting" time="6:000PM" location="Red Gym BCC Classroom"/>
                        <Event id='event' day="Thurs" date="12" eventName="Challenging the Code" time="6:30PM" location="Witte Classrooms"/>
                        <Event id='event' day="Mon" date="16" eventName="Women's History Month Social" time="6:00PM" location="Wendt Commons"/>
                        <Event id='event' day="Wed" date="18" eventName="Heritage Trivia Night" time="6:00PM" location="1227 Engineering Hall"/>

                    </div>
                    
                    {/*<p id="month">September</p>
                    <div className="September">
                        <Event id='event' day="Wed" date="29" eventName="General Body Meeting" time="6:00PM" location="1413 Cheney Room Engineering Hall"/>

                    </div>*/}
                 </div>   
            </>
    );
}               