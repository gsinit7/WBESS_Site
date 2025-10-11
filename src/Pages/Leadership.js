import Card from '../Components/Card'
import Moon from '../Img/Moon.svg'

import Marco from '../Img/BoardPix25-26/Marco.jpeg'
import Kamila from '../Img/BoardPix25-26/Kamila.jpeg'
import Wynton from '../Img/BoardPix25-26/Wynton.jpeg'
import Claire from '../Img/BoardPix25-26/Claire.jpeg'
import Jeremy from '../Img/BoardPix25-26/Jeremy.jpeg'
import Aaron from '../Img/BoardPix25-26/Aaron.jpeg'
import Mulu from '../Img/BoardPix25-26/Mulu.jpeg'
import Aiden from '../Img/BoardPix25-26/Aiden.jpeg'
import Cornell from '../Img/BoardPix25-26/Cornell.jpeg'
import George from '../Img/BoardPix25-26/George.jpeg'
import Sinit from '../Img/BoardPix25-26/Sinit.jpeg'
import Jeremie from '../Img/BoardPix25-26/Jeremie.jpeg'
import DeMario from '../Img/BoardPix25-26/DeMario.jpeg'
import Jaynika from '../Img/BoardPix25-26/Jaynika.jpeg'
import Wilfred from '../Img/BoardPix25-26/Wilfred.jpeg'
import Zuheb from '../Img/BoardPix25-26/Zuheb.jpeg'


import '../Styles/Leadership.css'


export  function Leadership() {
    return (
        <>
            <div className="Leadership">
                <Card id='eboard' image={Marco} name="Marco Assam" title="President"/>
                <Card id='eboard' image={Kamila} name="Kamila Patris" title="Vice President"/>
                <Card id='eboard' image={Wynton} name="Wynton Wright" title="Treasurer"/>
                <Card id='eboard' image={Claire} name="Claire Neblett" title="Secretary"/>
                <Card id='eboard' image={Jaynika} name="Jaynika Williams" title="Senator"/>
                <Card id='eboard' image={DeMario} name="DeMario Randle" title="Senator"/>
                <Card id='eboard' image={Wilfred} name="Wilfred Shereni" title="President Emeritus"/>
                <Card id='eboard' image={Zuheb} name="Zuheb Ibrahim" title="Vice-President Emeritus"/>


            </div>
        </>
    )
}

export function Chairs() {
    return (
        <>
            <div className="Chairs">
                <Card id='eboard' image={Jeremy} name="Jeremy Moore" title="Pre-Collegiate Initiative Chair"/>
                <Card id='eboard' image={Aaron} name="Aaron Dent" title="Academic & Professional Excellence Chair"/>
                <Card id='eboard' image={Mulu} name="Mulu Yosief" title="Social Chair"/>
                <Card id='eboard' image={Aiden} name="Aiden Williams" title="Social Chair"/>
                <Card id='eboard' image={Cornell} name="Cornell Stewart" title="Fundraising Chair"/>
                <Card id='eboard' image={George} name="George Walker" title="T.O.R.C.H. Chair"/>
                <Card id='eboard' image={Sinit} name="Sinit Gebrehiwet" title="Webmaster Chair"/>
                <Card id='eboard' image={Jeremie} name="Jeremie Peart" title="Outreach Chair"/>
            </div>
        </>
    )
}