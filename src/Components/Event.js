import '../Styles/Event.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faClock, faXmark, faImage  } from '@fortawesome/free-solid-svg-icons'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Event(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="Event" >
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                    <div id='gallery'>
                        <h1>Picture Gallery</h1>
                        <p>Pictures Coming Soon...</p>
                    </div>
                </Modal>
                <div className="Date">
                    <p id='day'>{props.day}</p>
                    <p id='date'>{props.date}</p>
                </div>
                <div className="eventContent">
                    <div className="eventName">
                        <p id='eventName'>{props.eventName}</p>
                    </div>
                    <div className="stackedProps">
                        <div className="Location">
                            <FontAwesomeIcon id="eventProps" icon={faHouse} /> 
                            <p id='location'>{props.location}</p>
                        </div>
                        <div className="Time">
                            <FontAwesomeIcon id="eventProps" icon={faClock} /> 
                            <p id='time'>{props.time}</p>
                        </div>
   
                    </div>
                </div>
                
                <Button className="photoGalleryButton" onClick={handleOpen}> 
                        <FontAwesomeIcon  id="enterModal" icon={faImage} size="lg"/> 
                </Button> 
            </div>
        </>
    )
}
