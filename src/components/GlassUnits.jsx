import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";

// million-ignore
function GlassUnits({ data, openModalHandlerGlassUnits }) {
<<<<<<< HEAD
<<<<<<< HEAD
  const swiperRef = useRef();

  return (
    <div className="px-5 md:px-20 relative lg:px-32 mt-[27px] lg:mt-[127px]">
      <span className="title uppercase text-center mb-0 lg:mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[30px] xl:text-[45px]">
        <span data-aos="fade-right" data-aos-delay={500}>
          Виды стеклопакетов
        </span>
        {/* {"Виды стеклопакетов".split(" ").map((item, index) => (
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    const swiperRef = useRef();

    return (
        <div className="px-5 md:px-20 relative lg:px-32 mt-[167px] lg:mt-[267px]">
            <span className="title uppercase text-center mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[30px] xl:text-[45px]">
            <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Виды стеклопакетов</span>
                {/* {"Виды стеклопакетов".split(" ").map((item, index) => (
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        data-aos-delay={500 + (index + 1) * 150}
                    >{item}</span>
                ))} */}
<<<<<<< HEAD
<<<<<<< HEAD
      </span>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        lazy={true}
        loop={true}
        spaceBetween={10}
        modules={[Navigation, FreeMode]}
        className="h-full mt-10 "
        data-aos="fade-up"
        data-aos-delay="500"
        breakpoints={{
          778: {
            slidesPerView: 1,
            // spaceBetween: 150,
          },
          992: {
            slidesPerView: 3,
            // spaceBetween: 150,
          },
          1400: {
            slidesPerView: 3,
            // spaceBetween: 150,
          },
        }}
      >
        {data?.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide className="bg-bg_color " key={item.id}>
              <div
                className="card cursor-pointer bg-bg_color p-0 lg:p-8 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={500 + (index + 1) * 500}
                onClick={() => openModalHandlerGlassUnits(item)}
              >
                <div className="card-img h-[250px]">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="cursor-pointer h-[250px]"
                  />
                </div>
                <div className="card-name mt-[60px] border-[#d5d5d5] pb-3 border-b-[2px]">
                  <h5 className="text-[20px] font-semibold">{item.name}</h5>
                </div>
                <span
                  className="text-[13px] lg:text-[15px] block  font-normal font-Montserrat mt-[18px]"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "diagonal-fractions",
                  }}
                >
                  Подробнее
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="slide-nav  flex items-center justify-between w-full  absolute pl-0 pr-[45px] bottom-[200px] lg:px-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0">
        <img
          className="swiper-button-prev-1 z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:ml-[50px]"
          src={sliderNav_l}
          alt=""
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <img
          className="swiper-button-next-1 z-10 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:mr-[50px]"
          src={sliderNav_r}
          alt=""
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
}

export default memo(GlassUnits);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            </span>
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                lazy={true}
                loop={true}
                spaceBetween={10}
                modules={[Navigation, FreeMode]}
                className="h-full mt-20 "
                data-aos="fade-up"
                data-aos-delay="500"
                breakpoints={{
                    778: {
                        slidesPerView: 1,
                        // spaceBetween: 150,
                    },
                    992: {
                        slidesPerView: 3,
                        // spaceBetween: 150,
                    },
                    1400: {
                        slidesPerView: 3,
                        // spaceBetween: 150,
                    },
                }}
            >
                {data?.length > 0 && data.map((item, index) => (
                    <SwiperSlide className="bg-[#F6F6F6]" key={item.id} >
                        <div
                            className="card cursor-pointer bg-[#F6F6F6] p-8 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay={500 + (index + 1) * 500}
                            onClick={() => openModalHandlerGlassUnits(item)}
                        >
                            <div className="card-img h-[250px]">
                                <img src={item.imgSrc} alt="" className="h-[250px]" />
                            </div>
                            <div className="card-name mt-[60px] border-[#d5d5d5] pb-3 border-b-[2px]">
                                <h5 className="text-[20px] font-semibold">
                                    {item.name}
                                </h5>
                            </div>
                            <span className="text-[13px] lg:text-[15px] block lg:hidden font-normal font-Montserrat mt-[18px]"
                                style={{ fontStyle: "normal", fontVariant: "diagonal-fractions" }}
                            >Подробнее</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slide-nav px-32 gap-16 lg:gap-36 flex items-center justify-center w-full top-[50%] z-[9999] my-14">
                <img
                    className="swiper-button-prev-2 w-[30px] cursor-pointer"
                    src={sliderNav_l}
                    alt=""
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <img
                    className="swiper-button-next-2 w-[30px] cursor-pointer"
                    src={sliderNav_r}
                    alt=""
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default memo(GlassUnits);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(GlassUnits);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
