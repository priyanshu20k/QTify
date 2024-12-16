import React, { useEffect, useState } from 'react';
import {ReactComponent as RArrow} from "../../../assets/RArrow.svg";
import Styles from "./RightButton.module.css";
import { useSwiper } from 'swiper/react';

function RightButton() {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsEnd(swiper.isEnd);
        })
    },[swiper]);
  return (
    <div className={Styles.rightNavigation}>
        {!isEnd && <RArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default RightButton;
