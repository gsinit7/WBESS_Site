import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Card from '../Components/Card'
import Moon from '../Img/Moon.svg'
import axios from 'axios'

import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';

import '../Styles/Gallery.css'

export default function Gallery() {

    return (
            <>
                 <div className="Gallery">
                    <div className="GalleryIntro">
                        <p id="title">Posts Gallery</p>
                        <p id="subtext">Come see what we have been up to</p>
                    </div>                    
                    <div>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry>

                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBcjxT8P_A-/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DCSCyo3PyIf/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DCH38BzsVu2/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DCFWdPevO4V/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DB913cephuH/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DB7Zp8uPttV/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DB4zrCAPBZY/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DB1fR-Rv6xQ/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBzpVGOvdOF/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBxDeT-PavN/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBuSVUWsHIX/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBrxffovZBM/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBe43Ngv6FM/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBcGtLLPpif/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DBZiqLmPu6B/" width={328} />
                                </div>

                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                 </div>   
            </>
    );
}               