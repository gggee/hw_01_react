import React from "react";
import './css/music_stl.css';
import image from "./img/twice.jpg";
import memb_1 from "./img/momo.jpg";
import memb_2 from "./img/sana.jpg";
import memb_3 from "./img/nayeon.jpg";
import memb_4 from "./img/jeon.jpg";
import memb_5 from "./img/jhyo.jpg";
import memb_6 from "./img/mina.jpg";
import memb_7 from "./img/chaeon.jpg";
import memb_8 from "./img/tsyu.jpg";
import memb_9 from "./img/dahyon.jpg";

import albm_1 from "./img/feel.jpg";
import albm_2 from "./img/wil.jpg"
import albm_3 from "./img/fancy.jpg";
import albm_4 from "./img/yes.jpg";
import albm_5 from "./img/dtna.jpg";
import albm_6 from "./img/tol.webp";
import albm_7 from "./img/fol.webp";
import albm_8 from "./img/More.jpeg";
import albm_9 from "./img/theFeel.png";
import albm_10 from "./img/eyes_w_o.webp";
import albm_11 from "./img/hare.webp";
import albm_12 from "./img/signal.jpg";



const Music = () => {
    return (
        <div className="music-container">
            <div className="header">
                <h1>TWICE</h1>
                <img className="img_group" src={image} />
                <p className="group_info">
                    <b>Twice</b> is a South Korean
                    girl group formed by JYP Entertainment. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                    Chaeyoung, and Tzuyu. Twice was formed under the television program Sixteen (2015) and debuted on October 20, 2015, with the extended
                    play (EP) The Story Begins.

                    Twice rose to domestic fame in 2016 with their single "Cheer Up", which charted at number one on the Gaon Digital Chart,
                    became the best-performing single of the year, and won "Song of the Year" at the Melon Music Awards and
                    Mnet Asian Music Awards. Their next single, "TT", from their third EP Twicecoaster: Lane 1,
                    topped the Gaon charts for four consecutive weeks.
                </p>
            </div>

            <div className="music_block_info">
                <span className="span_memb">MEMBER</span>
                <div className="member">
                    <div className="block_memb">
                        <img className="member_img" src={memb_1} />
                        <p className="memb_name">Momo</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_2} />
                        <p className="memb_name">Sana</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_3} />
                        <p className="memb_name">Nayeon</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_4} />
                        <p className="memb_name">Jeongyeon</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_5} />
                        <p className="memb_name">Jihyo</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_6} />
                        <p className="memb_name">Mina</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_7} />
                        <p className="memb_name">Chaeyoung</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_8} />
                        <p className="memb_name">Tzuyu</p>
                    </div>
                    <div className="block_memb">
                        <img className="member_img" src={memb_9} />
                        <p className="memb_name">Dahyun</p>
                    </div>
                </div>
            </div>

            <div className="block_albm">
                <span className="span_alb">ALBUMS</span>
                <div className="albums">
                    <div className="alb_list">
                        <img className="member_img" src={albm_1} />
                        <p className="albm_name">Feel Special</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_2} />
                        <p className="albm_name">What is love?</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_3} />
                        <p className="albm_name">Fancy</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_4} />
                        <p className="albm_name">Yes or yes?</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_5} />
                        <p className="albm_name">Dance the night away</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_6} />
                        <p className="albm_name">Taste of love</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_7} />
                        <p className="albm_name">Formula of love</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_8} />
                        <p className="albm_name">More & more</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_9} />
                        <p className="albm_name">The feel</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_10} />
                        <p className="albm_name">Eyes wide open</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_11} />
                        <p className="albm_name">Hare & hare</p>
                    </div>
                    <div className="alb_list">
                        <img className="member_img" src={albm_12} />
                        <p className="albm_name">Signal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Music;