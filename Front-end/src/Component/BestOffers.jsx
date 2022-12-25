import '../App.css';
import Title from './Title';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import car from '../assets/blackcar.jpg' ; 
import LocationIcon from '../assets/icons/location.svg' ; 
import RightArrow from '../assets/rightarrow.png' ; 
import LeftArrow from '../assets/leftarrow.png' ; 
import { useRef } from "react";
import blackc from '../assets/blackcar.jpg' ; 
import greenc from '../assets/greencar.jpg' ; 
import forth from '../assets/car1.png' ; 


const BestOffers = () => {
    const swiperRef = useRef(null);
    const Cars=
    [
        {name:"car 1" , 
        price:"251000" , 
        car:blackc , 
        location:"Alger" , 
        id:"60"
        },
        {name:"car 2" , 
        price:"1485500" , 
        car:greenc, 
        location:"Batna" ,
        id:"50"
        },
        {name:"car 3" , 
        price:"97100" ,
        car:forth , 
        location:"Skikda" , 
        id:"80"
        },
        {name:"car 4" , 
        price:"251000" ,
        car:blackc,
        location:"Medea" ,  
        id:"90"
        },
        {name:"car 5" , 
        price:"251000" ,
        car:greenc ,
        location:"wahran" ,  
        id:"150"
        },

    ]

    return (
        <div className=" w-full h-screen pt-[90px]" id="BestOffers">
            <Title title={" Meilleurs Offres"}></Title>
          <div className="flex items-center md:space-x-8 sm:mt-[40px] md:mt-[40px] lg:space-x-8">
          
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={LeftArrow} alt="" />
            </div>
    
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {Cars.map((car, idx) => {
                return (
                    
                  <SwiperSlide key={idx}>
                    {({ isActive, isNext, isPrev }) => (
                      <div
                        className={` ${
                          isActive
                            ? "lg:scale-75"
                            : isPrev || isNext
                            ? "lg:scale-100"
                            : "lg:scale-75"
                        }`}
                      >
                        <div className="sm:mt-[50px]">
                        <div className=" border-asfar ml-[20px] shadow-gray-900 shadow-xl dh border-2 w-[300px] h-[320px] p-[10px] rounded-lg ">
                        <img className="rounded-lg  " src={car.car} alt="" />
                        <h3 className='pt-[4px] font-bold' > {car.name} </h3>
                        <h2> {car.price} </h2>
                        <div className='flex flex-row items-end gap-[10px]'>
                        <img src={LocationIcon} alt="" />
                        <h2> location </h2>

                        </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
    
            <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="cursor-pointer  hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={RightArrow} alt="" />
            </div>
          </div>
      
        </div>
        
      );
};
    
   

 
export default BestOffers;