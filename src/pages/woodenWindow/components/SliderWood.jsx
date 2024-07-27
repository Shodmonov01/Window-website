import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sliderNav_l from "../../../assets/slider-arrow-l.svg";
import sliderNav_r from "../../../assets/slider-arrow-r.svg";
// import sliderImd from "../assets/slider-img.png";
import slider1 from "../../../assets/WoodSlider/wood (1).webp";
import slider2 from "../../../assets/WoodSlider/wood (2).webp";
import slider3 from "../../../assets/WoodSlider/wood (3).webp";
import slider4 from "../../../assets/WoodSlider/wood (4).webp";
import slider5 from "../../../assets/WoodSlider/wood (5).webp";
import slider6 from "../../../assets/WoodSlider/wood (6).webp";
import slider7 from "../../../assets/WoodSlider/wood (7).webp";
import slider8 from "../../../assets/WoodSlider/wood (8).webp";
import slider9 from "../../../assets/WoodSlider/wood (9).webp";
import slider10 from "../../../assets/WoodSlider/wood (10).webp";
import slider11 from "../../../assets/WoodSlider/wood (11).webp";
import slider12 from "../../../assets/WoodSlider/wood (12).webp";
import slider13 from "../../../assets/WoodSlider/wood (13).webp";

import Time from "../../../components/Time";

const data = [
  {
    id: Math.random().toString(),
    imgSrc: slider1,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider2,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider3,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider4,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider5,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider6,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider7,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider8,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider9,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider10,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider11,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider12,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider13,
  },
];

// million-ignore
function SliderWood(props) {
  const { color = "" } = props;
  const swiperRef = useRef();

  return (
    <div>
      <h2
        className="text-[23px] mx-5 font-Montserrat mt-20 mb-0 text-center md:text-[35px] lg:text-[45px] font-bold uppercase"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        Нaши работы
      </h2>
      <h5
        className={`text-[18px] md:text-[20px] lg:text-[25px] bg_[#000] text-center font-medium `}
        data-aos="fade-up"
        data-aos-duration={1500}
        // style={{
        //     color: color ? "#404040" : "#D0C069"
        // }}
      >
        Мы работаем уже
      </h5>
      <Time />

      {/* slider */}
      <div className="relative px-2">
        {/* <Swiper
          slidesPerView={1}
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
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper h-full mt-8"
          data-aos="fade-up"
        >
          {data?.length > 0 &&
            data.map((item, index) => (
              <SwiperSlide key={item.id} className="h-[600px]">
                <div
                  data-aos="fade-up"
                  data-aos-delay={500 + (index + 1) * 100}
                >
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper> */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            778: {
              slidesPerView: 1,
              // spaceBetween: 150,
            },
          }}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={150}
          centeredSlides={true}
          modules={[Navigation]}
          // className="mySwiper  h-full mt-8"
          className={`h-full  mt-8 ${
            window.innerWidth >= 1024 ? "mySwiper" : ""
          }`}
          data-aos="fade-up"
        >
          {data?.length > 0 &&
            data.map((item, index) => (
              <SwiperSlide key={item.id} className=" lg:h-[600px] h-full">
                <div
                  data-aos="fade-up"
                  data-aos-delay={500 + (index + 1) * 100}
                  className=" w-[80%] lg:h-[544px] lg:w-[100%] ml-[38px] lg:ml-0"
                >
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="swiper-slide_1 rounded-2xl h-[233px] lg:h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="slide-nav  arrow_slider  sm:pr-5 flex items-center  justify-between w-full bottom-[230px] md:bottom-full md:top-[50%] z-[9999] absolute">
          <img
            className="swiper-button-prev-1 w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
            src={sliderNav_l}
            alt=""
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <img
            className="swiper-button-next-1 w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
            src={sliderNav_r}
            alt=""
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(SliderWood);
