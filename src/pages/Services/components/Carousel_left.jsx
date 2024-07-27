import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sliderNav_l from "../../../assets/slider-arrow-l_white.svg";
import sliderNav_r from "../../../assets/slider-arrow-r_white.svg";

// million-ignore
function Carousel({ data }) {
  const swiperRef = useRef();

  return (
    <div className="relative px-2 pr-0">
      <Swiper
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
        }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={170}
        centeredSlides={false}
        modules={[Navigation]}
        className="mySwiper_services_left h-full mt-8 relative"
        data-aos="fade-up"
      >
        {data?.length > 0 &&
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[500px] lg:h-[600px] bg-transparent"
            >
              <div
                className="lg:mt-0 lg:flex relative mr-7 w-full rounded-md "
                data-aos="fade-left"
                data-aos-delay={800}
              >
                <img
                  src={item.imgSrc}
                  className="relative z-10 w-full rounded-md"
                  alt="mockup"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute top-0 left-[30px] lg:left-[95px] w-[92%] lg:w-[375px] h-[500px] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
      {/* navigation */}
      {/* <div className="slide-nav pr-0 arrow_carousel lg:pr-[8rem]  flex items-center lg:px-36 justify-between w-full bottom-[230px] md:bottom-full md:top-[50%] z-[9999] absolute"

      > */}
      <div className="slide-nav  arrow_carousel  flex items-center  justify-between w-full bottom-[230px] md:bottom-full md:top-[50%] z-[9999] absolute"

      >
          <img
            className="swiper-button-prev-1 -ml-[23px] lg:-ml-[201px]  w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
            src={sliderNav_l}
            alt=""
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <img
            className="swiper-button-next-1  w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
            src={sliderNav_r}
            alt=""
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      {/* <div className="slide-nav  flex items-center gap-[340px] lg:gap-[400px] w-full  absolute pl-0 lg:pl-[65px] pr-[45px] bottom-[200px] lg:px-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0">
        <img
          className="swiper-button-prev-1 -ml-[22px] z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:ml[40px]"
          src={sliderNav_l}
          alt=""
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <img
          className="swiper-button-next-1 -mr-[55px] z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:mr-[170px]"
          src={sliderNav_r}
          alt=""
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div> */}
    </div>
  );
}

export default memo(Carousel);
