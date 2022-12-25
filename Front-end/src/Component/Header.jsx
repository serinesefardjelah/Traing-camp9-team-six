import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import whitecar from "../assets/whitecar.png";
import greencar from "../assets/greencar.jpg";
import blackcar from "../assets/blackcar.jpg";
const Header = () => {
    return (
        <div className="w-full h-screen  bg-asfar pt-[4px] relative" id="Header">
            <div className='absolute z-10 px-16 py-16 ' >
                <h1 className='text-[50px] font-bold text-white  '> Besoin d'une nouvelle <br /> voiture ? </h1>
                <p className='text-[30px] font-bold text-white shadow-lg '> On est la pour vous ! </p>

            </div>

            <Swiper>
                <SwiperSlide> <img className='w-full h-screen ' src={greencar} alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-screen' src={whitecar} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='w-full h-screen' src={blackcar} alt="" /> </SwiperSlide>
            </Swiper>

        </div>
    );
}

export default Header;