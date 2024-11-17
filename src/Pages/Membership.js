import '../Styles/Membership.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default function Membership() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div id="Membership" >
                <div className="JoinIntro">
                    <p>Interested?</p>
                    <Button id='button' onClick={handleOpen}>How to Sign Up</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <div id='modal'>
                        <p id='howtotitle'>How to Sign Up</p>
                        <ul className='signup'>
                            <li id='list'>1. Click <a id='link' href='https://mynsbe.nsbe.org/s/joinprocess' target="_blank">this</a> link and select 'Collegiate Member'. Scroll to bottom of the page and hit next</li>
                            <li id='list'>2. You will be brought to a login screen, click create account and fill in your info to create your account</li>
                            <li id='list'>3. After creating your account, you should be brought to a join process page, continue to fill in your information</li>
                            <li id='list'>4. Now you should be at, the Chapter and Education page. Fill in the chapter selection with country as 'United States', Location as 'Wisconsin', and Chapter as 'Wisconsin Black Engineering Student Society'. Fill out the Education section with your information</li>
                            <li id='list'>5. Fill in the Collegiate information page with your information</li>
                            <li id='list'>6. Fill in your Preferences until you reach the payment page</li>
                            <li id='list'>7. Pay for your membership. Welcome to NSBE!</li>

                        </ul>
                    </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}