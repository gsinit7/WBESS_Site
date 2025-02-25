import Event from '../Components/Event.js'
import '../Styles/Events.css'



export default function Events() {
    return (
            <>
                 <div className="Events">
                    <p id='title'>Events</p>
                    {/*<p id="month">March</p>*/}
                    <p id="month">Febuary</p>
                    <div className="Febuary">
                        <Event id='event' day="Wed" date="26" eventName="InterPro Professional Developemnt Presentation" time="6:00PM" location="2255 Engineering Hall"/>
                        <Event id='event' day="Thu" date="20" eventName="Meet The Professional" time="6:00PM" location="Tripp Commons"/>
                        <Event id='event' day="Thu" date="13" eventName="Heritage Trivia Night" time="5:30PM" location="1413 Cheney Room Engineering Hall"/>
                        <Event id='event' day="Tue" date="11" eventName="3D Printing & laser Cutting Valentines Workshop" time="4:00PM" location="Makerspace, Wendt Commons"/>
                        <Event id='event' day="Thu" date="6" eventName="Career Fair Prep Night" time="6:00PM" location="1800 Engineering Hall"/>

                    </div>
                    <p id="month">January</p>
                    <div className="January">
                        <Event id='event' day="Wed" date="29" eventName="General Body Meeting" time="6:00PM" location="1413 Cheney Room Engineering Hall"/>

                    </div>
                 </div>   
            </>
    );
}               