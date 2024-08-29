import Card from '../Components/Card'
import Moon from '../Img/Moon.svg'

import Wilfred from '../Img/wilfred.jpeg'
import Zuheb from '../Img/zuheb.jpeg'
import Christian from '../Img/Christian.jpeg'
import Kamila from '../Img/Kamila.jpeg'
import Jordan from '../Img/jordan.jpeg'
import Mulu from '../Img/mulu.png'
import George from '../Img/George.jpeg'
import Marco from '../Img/Marco.jpeg'
import Aiden from '../Img/Aiden.jpeg'

import '../Styles/Leadership.css'


export default function Leadership() {
    return (
        <>
            <div className="Leadership">
                <Card id='eboard' image={Wilfred} name="Wilfred Shereni" title="President"/>
                <Card id='eboard' image={Zuheb} name="Zuheb Ibrahim" title="Vice President"/>
                <Card id='eboard' image={Christian} name="Christian Robinson" title="Treasurer"/>
                <Card id='eboard' image={Marco} name="Marco A" title="Secretary"/>
                <Card id='eboard' image={Kamila} name="Kamila Patris" title="Pre-Collegiate Initiative Chair"/>
                <Card id='eboard' image={George} name="George Walker" title="Academic Excellence Chair"/>
                <Card id='eboard' image={Mulu} name="Mulu Yosief" title="Social Chair"/>
                <Card id='eboard' image={Jordan} name="Jordan Edwards" title="Social Chair"/>
                <Card id='eboard' image={Aiden} name="Aiden Williams" title="Webmaster Chair"/>
            </div>
        </>
    )
}