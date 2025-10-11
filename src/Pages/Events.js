import Event from '../Components/Event.js'
import '../Styles/Events.css'



export default function Events() {
    return (
            <>
                 <div className="Events">
                    <p id='title'>Events</p>
                    
                    <p id="month">October</p>
                    <div className="October">
                        <Event id='event' day="Fri" date="3" eventName="GE Healthcare Site-Visit" time="2:30PM" location="GE Healthcare Madison Factory"/>
                        <Event id='event' day="Fri" date="10" eventName="Findorff Site-Visit" time="2:30PM" location="Center for Black Excellence & Culture"/>
                        <Event id='event' day="Wed" date="15" eventName="PCI Kick-Off" time="?" location="LaFollette High School"/>
                        <Event id='event' day="Mon" date="20" eventName="Blood Drive Fundraiser" time="?" location="Library Mall"/>
                    </div>
                    
                    {/*<p id="month">September</p>
                    <div className="September">
                        <Event id='event' day="Wed" date="29" eventName="General Body Meeting" time="6:00PM" location="1413 Cheney Room Engineering Hall"/>

                    </div>*/}
                 </div>   
            </>
    );
}               