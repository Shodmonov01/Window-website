import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";
import Msg from "./Msg";

// million-ignore
function Portal({ title }) {
  const swiperRef = useRef();

  return (
    <div className="mt-[30px] lg:my-[75px]">
      <div className="flex items-center justify-center text-center">
        <span
          className="text-[23px] md:text-[45px] font-bold uppercase"
          data-aos="zoom"
          data-aos-duration={1500}
        >
          {title}
        </span>
      </div>
      {/* slider */}
      {/* <div className="relative px-2">
                <div className='mt-12'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        pagination={{
                            clickable: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                // spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                // spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                // spaceBetween: 50,
                            },
                        }}
                        // modules={[Pagination]}
                        className="mySwiper2"
                    >
                        <SwiperSlide className='h-[475px] bg-[#CFCFCF]'
                        // data-aos="fade-up"
                        // data-aos-delay={300}
                        ></SwiperSlide>
                        <SwiperSlide className='h-[475px] bg-[#CFCFCF]'
                        // data-aos="fade-up"
                        // data-aos-delay={500}
                        ></SwiperSlide>
                        <SwiperSlide className='h-[475px] bg-[#CFCFCF]'
                        // data-aos="fade-up"
                        // data-aos-delay={700}
                        ></SwiperSlide>
                        <SwiperSlide className='h-[475px] bg-[#CFCFCF]'
                        // data-aos="fade-up"
                        // data-aos-delay={900}
                        ></SwiperSlide>
                    </Swiper>
                </div>
                <div className="lg:hidden slide-nav mt-[30px] px-32 flex items-center justify-between w-full z-[9999] absolute">
                    <img
                        className="swiper-button-prev-1 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer"
                        src={sliderNav_l}
                        alt=""
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <img
                        className="swiper-button-next-1 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer"
                        src={sliderNav_r}
                        alt=""
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </div> */}
      <Msg />
    </div>
  );
}

export default memo(Portal);
