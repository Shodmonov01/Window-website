import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sliderNav_l from "../../../assets/slider-arrow-l.svg";
import sliderNav_r from "../../../assets/slider-arrow-r.svg";
// import sliderImd from "../assets/slider-img.png";
import slider1 from "../../../assets/PlasticSlider/plastic (1).webp";
import slider2 from "../../../assets/PlasticSlider/plastic (2).webp";
import slider3 from "../../../assets/PlasticSlider/plastic (3).webp";
import slider4 from "../../../assets/PlasticSlider/plastic (4).webp";
import slider5 from "../../../assets/PlasticSlider/plastic (5).webp";
import slider6 from "../../../assets/PlasticSlider/plastic (6).webp";
import slider7 from "../../../assets/PlasticSlider/plastic (7).webp";
import slider8 from "../../../assets/PlasticSlider/plastic (8).webp";
import slider9 from "../../../assets/PlasticSlider/plastic (9).webp";
import slider10 from "../../../assets/PlasticSlider/plastic (10).webp";
import slider11 from "../../../assets/PlasticSlider/plastic (11).webp";
import slider12 from "../../../assets/PlasticSlider/plastic (12).webp";
import slider13 from "../../../assets/PlasticSlider/plastic (13).webp";
import slider14 from "../../../assets/PlasticSlider/plastic (14).webp";
import slider15 from "../../../assets/PlasticSlider/plastic (15).webp";
import slider16 from "../../../assets/PlasticSlider/plastic (16).webp";
import slider17 from "../../../assets/PlasticSlider/plastic (17).webp";
import slider18 from "../../../assets/PlasticSlider/plastic (18).webp";
import slider19 from "../../../assets/PlasticSlider/plastic (19).webp";
import slider21 from "../../../assets/PlasticSlider/plastic (21).webp";
import slider20 from "../../../assets/PlasticSlider/plastic (20).webp";
import slider22 from "../../../assets/PlasticSlider/plastic (22).webp";
import slider23 from "../../../assets/PlasticSlider/plastic (23).webp";
import Time from "../../../components/Time";
// import slider24 from "../../../assets/PlasticSlider/plastic (24).webp";
// import slider25 from "../../../assets/PlasticSlider/plastic (25).webp";

const data = [
  {
    id: Math.random().toString(),
    imgSrc: slider3,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider2,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider1,
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
  {
    id: Math.random().toString(),
    imgSrc: slider14,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider15,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider16,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider17,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider18,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider19,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider20,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider21,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider22,
  },
  {
    id: Math.random().toString(),
    imgSrc: slider23,
  },
];

// million-ignore
function SliderPlastic(props) {
  const { color = "" } = props;
  const swiperRef = useRef();

  return (
    <div>
      <h2
        className="text-[23px] mx-5 font-Montserrat mt-[30px] lg:mt-20 mb-0 text-center md:text-[35px] lg:text-[45px] font-bold uppercase"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        Нaши работы
      </h2>
      <h5
        className={`text-[18px] md:text-[20px] lg:text-[25px] text-center font-medium bg_[#000]`}
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

export default memo(SliderPlastic);
