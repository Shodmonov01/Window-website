import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderNav_l from "../../assets/slider-arrow-l.svg";
import sliderNav_r from "../../assets/slider-arrow-r.svg";
import diplom1 from "../../assets/diplom/diplom (1).jpg";
import diplom2 from "../../assets/diplom/diplom (2).jpg";
import diplom3 from "../../assets/diplom/diplom (3).jpg";
import diplom4 from "../../assets/diplom/diplom (4).jpg";
import diplom5 from "../../assets/diplom/diplom (5).jpg";
import diplom6 from "../../assets/diplom/diplom (6).jpg";
import diplom7 from "../../assets/diplom/diplom (7).jpg";
import diplom9 from "../../assets/diplom/diplom (9).jpg";
import diplom10 from "../../assets/diplom/diplom (10).jpg";
import diplom11 from "../../assets/diplom/diplom (11).jpg";
import diplom12 from "../../assets/diplom/diplom (12).jpg";
import diplom13 from "../../assets/diplom/diplom (13).jpg";
import diplom14 from "../../assets/diplom/diplom (14).jpg";

// million-ignore
function PortalContact({ title }) {
  const swiperRef = useRef();

  // Array of photo paths
  const photos = [
    diplom1,
    diplom2,
    diplom3,
    diplom4,
    diplom5,
    diplom6,
    diplom7,
    diplom9,
    diplom10,
    diplom11,
    diplom12,
    diplom13,
    diplom14,
  ];

  return (
    <div className="my-[40px] lg:my-[75px]">
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
      <div className="relative px-[50px] lg:px-2">
        <div className="mt-2">
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
              200: {
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
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt={`diplom ${index + 1}`}
                  className="h-[475px] bg-[#CFCFCF]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className=" slide-nav mt-[30px] px-32 flex items-center justify-between w-full z-[9999] absolute">
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
        </div> */}
        <div className="slide-nav  flex items-center justify-between w-full  absolute pl-0 pr-[45px] bottom-[200px] lg:px-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0">
          <img
            className="swiper-button-prev-1 -ml-[50px] z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:-ml-[50px]"
            src={sliderNav_l}
            alt=""
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <img
            className="swiper-button-next-1 z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:-mr-[50px]"
            src={sliderNav_r}
            alt=""
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(PortalContact);
