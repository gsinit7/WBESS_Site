import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Card from '../Components/Card'
import Moon from '../Img/Moon.svg'

import '../Styles/Gallery.css'

export default function Gallery() {
    return (
            <>
                 <div className="Gallery">
                    <h1>Gallery</h1>
                    <div>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry>
                                <Card image={Moon} name="Wilfred Shereni" title="President"/>
                                <Card image={Moon} name="Zuheb Ibrahim" title="Vice President"/>
                                <Card image={Moon} name="Christian Robinson" title="Treasurer"/>
                                <Card image={Moon} name="Kamila Patris" title="Webmaster Chair"/>
                                <Card image={Moon} name="George Walker" title="Webmaster Chair"/>
                                <Card image={Moon} name="Mulu Yosief" title="Social Chair"/>
                                <Card image={Moon} name="Jordan Edwards" title="Social Chair"/>
                                <Card image={Moon} name="Marco A" title="Webmaster Chair"/>
                                <Card image={Moon} name="Aiden Williams" title="Webmaster Chair"/>
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                 </div>   
            </>
    );
}               