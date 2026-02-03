import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Card from '../Components/Card'
{/**import Moon from '../Img/Moon.svg'**/}
import axios from 'axios'

import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';

import '../Styles/Gallery.css'

export default function Gallery() {

    return (
            <>
                 <div className="Gallery">
                    <div className="GalleryIntro">
                        <p id="title">Gallery</p>
                        <p id="subtext">Come see what we have been up to!</p>
                    </div>
                    <div>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DR7wTItjh8R/?img_index=1/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DRAQWd0Dv3c/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DQDPkT2joyy/" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DQe9kvOjngo/?img_index=1" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DQNK_yPjkRi/?img_index=1" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DPT6drojuIr/?img_index=1" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DOmdHzBjgjd/?img_index=1" width={328} />
                                </div>
                                <div id='post' style={{ display: 'flex', justifyContent: 'center' }}>
                                   <InstagramEmbed url="https://www.instagram.com/p/DJSlJ8PvhEU/?img_index=1" width={328} />
                                </div> 
                                
                                
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                 </div>   
            </>
    );
}               