import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
<<<<<<< HEAD
<<<<<<< HEAD
import sliderNav_l from "../assets/slider-arrow-l_white.svg";
import sliderNav_r from "../assets/slider-arrow-r_white.svg";
import sliderNav_ll from "../assets/slider-arrow-l.svg";
import sliderNav_rr from "../assets/slider-arrow-r.svg";
=======
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import dub from "../assets/home/laminat/dub.png";
import svetliy_dub from "../assets/home/laminat/svetliy_dub.png";
import zalatoy_dub from "../assets/home/laminat/zolotoy_dub.png";
import karichneviy_kashtan from "../assets/home/laminat/karichneviy_kashtan.png";
import maxagon_kve from "../assets/home/laminat/maxagon_kve.png";
import maxagon from "../assets/home/laminat/maxagon.png";
import zalatoy_orex from "../assets/home/laminat/zalatoy_orex.png";
import orex from "../assets/home/laminat/orex.png";
import zimniy_duglas from "../assets/home/laminat/zimniy_duglas.png";
import duglas from "../assets/home/laminat/duglas.png";
import gornaya_sosna from "../assets/home/laminat/gornaya_sosna.png";
import oregon from "../assets/home/laminat/oregon.png";

const data3 = [
<<<<<<< HEAD
<<<<<<< HEAD
  {
    id: Math.random().toString(),
    name: "Дуб",
    imgSrc: dub,
  },
  {
    id: Math.random().toString(),
    name: "Светлый дуб",
    imgSrc: svetliy_dub,
  },
  {
    id: Math.random().toString(),
    name: "Золотой дуб",
    imgSrc: zalatoy_dub,
  },
  {
    id: Math.random().toString(),
    name: "Коричневый коштан",
    imgSrc: karichneviy_kashtan,
  },
  {
    id: Math.random().toString(),
    name: "Махагон KBE",
    imgSrc: maxagon_kve,
  },
  {
    id: Math.random().toString(),
    name: "Махагон",
    imgSrc: maxagon,
  },
  {
    id: Math.random().toString(),
    name: "Золотой орех",
    imgSrc: zalatoy_orex,
  },
  {
    id: Math.random().toString(),
    name: "Орех",
    imgSrc: orex,
  },
  {
    id: Math.random().toString(),
    name: "Зимний дуглас",
    imgSrc: zimniy_duglas,
  },
  {
    id: Math.random().toString(),
    name: "Дуглас",
    imgSrc: duglas,
  },
  {
    id: Math.random().toString(),
    name: "Горная сосна",
    imgSrc: gornaya_sosna,
  },
  {
    id: Math.random().toString(),
    name: "Орегон",
    imgSrc: oregon,
  },
];

const data4 = [
  {
    id: Math.random().toString(),
    color: "bg-[#871C22]",
    name: "Винно-красный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#A2130F]",
    name: "Темно-красный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#035D3B]",
    name: "Темно-зеленый",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#03AD19]",
    name: "Зеленый",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#261207]",
    name: "Коричневый-темный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#3A2417]",
    name: "Шоколадно-коричневый",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#585B60]",
    name: "Серо-темный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#261207]",
    name: "Коричневый-темный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#3A2417]",
    name: "Шоколадно-коричневый",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#1F1A43]",
    name: "Синий-темный",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#6384AF]",
    name: "Брилиантово-синий",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#C3C4C6]",
    name: "Серый",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#D6D9D2]",
    name: "Серый антрацит",
  },
  {
    id: Math.random().toString(),
    color: "bg-[#EDEEE9]",
    name: "Серый светлый",
  },
];

// million-ignore
function Color(props) {
  const { visible = true } = props;
  const swiperRef = useRef();
  const swiperRef2 = useRef();

  return (
    <div className=" relative  mt-[0px] lg:mt-[100px]">
      {visible && (
        <>
          <p
            className="text-[20px] lg:text-[24px]  font-semibold text-center"
            data-aos="fade-up"
            data-aos-delay="500"
            style={{ fontStyle: "normal" }}
          >
            Современные окна доступны в более 250 оттенках и 50 вариантов
            ламинации, ниже
            <br className="lg:block hidden" /> представлены основные стандартные
            цвета
          </p>
          {/* color1 */}
          <div className="card-shadow mt-[30px] pb-[35px] lg:pb-[80px] pt-[35px] lg:pt-[40px] lg:py-[60px] bg-box text-white ">
            <p
              className="text-center uppercase font-bold font-Montserrat text-[22px] lg:text-[26px] xl:text-[30px] bg_linear_gradient_txt"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              Основные цвета ламинации
            </p>
            <div className="relative">
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={11}
                loop
                spaceBetween={20}
                modules={[Navigation]}
                className="h-full mt-4 lg:mt-10 px-5 max-w-[1600px] w-full"
                data-aos="fade-up"
                data-aos-delay="500"
                breakpoints={{
                  300: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  378: {
                    slidesPerView: 3,
                    // spaceBetween: 150,
                  },
                  578: {
                    slidesPerView: 3,
                    // spaceBetween: 150,
                  },
                  778: {
                    slidesPerView: 11,
                    // spaceBetween: 150,
                  },
                  1400: {
                    slidesPerView: 11,
                    // spaceBetween: 150,
                  },
                }}
              >
                {data3?.length > 0 &&
                  data3.map((item, index) => (
                    <SwiperSlide className="bg-transparent" key={item.id}>
                      <div
                        className="flex flex-col items-center justify-center"
                        data-aos="fade-up"
                        data-aos-delay={500 + (index + 1) * 200}
                      >
                        <div>
                          <img
                            src={item.imgSrc}
                            alt="img"
                            className="w-[71px] h-[69px]"
                          />
                        </div>
                        <span
                          className="text-center font-medium text-[16px] lg:text-[18px]"
                          style={{ fontStyle: "normal" }}
                        >
                          {item.name}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="absolute gap-16 top-[20px] lg:gap-36 flex items-center  lg:justify-center  w-full top-[125%] lg:top-[20%] z-[9999]">
                <div className="flex items-center justify-between gap-14 lg:gap-0 lg:justify-between max-w-[1700px] w-full">
                  <img
                    className=" swiper-button-prev-2  w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                    src={sliderNav_l}
                    alt=""
                    onClick={() => swiperRef.current?.slidePrev()}
                  />
                  <img
                    className="swiper-button-next-2 w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                    src={sliderNav_r}
                    alt=""
                    onClick={() => swiperRef.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* color2 */}
          <div className="card-shadow mt-[30px] pb-[35px] lg:pb-[80px] pt-[35px] lg:pt-[40px] lg:py-[60px] text-black">
            <p className="text-center uppercase text-[22px] font-bold font-Montserrat  lg:text-[26px] xl:text-[30px]">
              Основные цвета покраски
            </p>
            <div className="relative">
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef2.current = swiper;
                }}
                slidesPerView={11}
                loop={true}
                spaceBetween={20}
                modules={[Navigation]}
                className="h-full  mt-4 lg:mt-10 px-5 max-w-[1600px] w-full"
                data-aos="fade-up"
                data-aos-delay="600"
                breakpoints={{
                  300: {
                    slidesPerView: 3,
                    // spaceBetween: 150,
                  },
                  378: {
                    slidesPerView: 3,
                    // spaceBetween: 150,
                  },
                  578: {
                    slidesPerView: 3,
                    // spaceBetween: 150,
                  },
                  778: {
                    slidesPerView: 11,
                    // spaceBetween: 150,
                  },
                  1400: {
                    slidesPerView: 11,
                    // spaceBetween: 150,
                  },
                }}
              >
                {data4?.length > 0 &&
                  data4.map((item, index) => (
                    <SwiperSlide className="bg-transparent" key={item.id}>
                      <div
                        className="flex flex-col items-center justify-center"
                        data-aos="fade-up"
                        data-aos-delay={500 + (index + 1) * 200}
                      >
                        <div
                          className={`${item.color} w-[79px] h-[79px] rounded-md`}
                        ></div>
                        <span
                          className="text-center font-medium text-[16px] lg:text-[18px]"
                          style={{ fontStyle: "normal" }}
                        >
                          {item.name}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="absolute gap-16 top-[20px] lg:gap-36 flex items-center  lg:justify-center  w-full top-[125%] lg:top-[20%] z-[9999]">
                <div className="flex items-center justify-between gap-14 lg:gap-0 lg:justify-between max-w-[1700px] w-full">
                  <img
                    className="swiper-button-prev-3 w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                    src={sliderNav_ll}
                    alt=""
                    onClick={() => swiperRef2.current?.slidePrev()}
                  />
                  <img
                    className="swiper-button-next-3 w-[20px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                    src={sliderNav_rr}
                    alt=""
                    onClick={() => swiperRef2.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(Color);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    {
        id: Math.random().toString(),
        name: "Дуб",
        imgSrc: dub,
    },
    {
        id: Math.random().toString(),
        name: "Светлый дуб",
        imgSrc: svetliy_dub,
    },
    {
        id: Math.random().toString(),
        name: "Золотой дуб",
        imgSrc: zalatoy_dub,
    },
    {
        id: Math.random().toString(),
        name: "Коричневый коштан",
        imgSrc: karichneviy_kashtan,
    },
    {
        id: Math.random().toString(),
        name: "Махагон KBE",
        imgSrc: maxagon_kve,
    },
    {
        id: Math.random().toString(),
        name: "Махагон",
        imgSrc: maxagon,
    },
    {
        id: Math.random().toString(),
        name: "Золотой орех",
        imgSrc: zalatoy_orex,
    },
    {
        id: Math.random().toString(),
        name: "Орех",
        imgSrc: orex,
    },
    {
        id: Math.random().toString(),
        name: "Зимний дуглас",
        imgSrc: zimniy_duglas,
    },
    {
        id: Math.random().toString(),
        name: "Дуглас",
        imgSrc: duglas,
    },
    {
        id: Math.random().toString(),
        name: "Горная сосна",
        imgSrc: gornaya_sosna,
    },
    {
        id: Math.random().toString(),
        name: "Орегон",
        imgSrc: oregon,
    },
];

const data4 = [
    {
        id: Math.random().toString(),
        color: "bg-[#871C22]",
        name: "Винно-красный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#A2130F]",
        name: "Темно-красный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#035D3B]",
        name: "Темно-зеленый",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#03AD19]",
        name: "Зеленый",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#261207]",
        name: "Коричневый-темный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#3A2417]",
        name: "Шоколадно-коричневый",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#585B60]",
        name: "Серо-темный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#261207]",
        name: "Коричневый-темный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#3A2417]",
        name: "Шоколадно-коричневый",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#1F1A43]",
        name: "Синий-темный",
    },
    {
        id: Math.random().toString(),
        color: "bg-[#6384AF]",
        name: "Брилиантово-синий",
    },
];

// million-ignore
function Color() {
    const swiperRef = useRef();
    const swiperRef2 = useRef();

    return (
        <div className="md:px-20 relative lg:px-32 mt-[120px] lg:mt-[163px]">
            <p
                className="text-[28px] font-semibold text-center"
                data-aos="fade-up"
                data-aos-delay="500"
                style={{ fontStyle: "normal" }}
            >
                Современные окна доступны в более 250 оттенках и 50 вариантов
                ламинации, ниже представлены основные стандартные цвета
            </p>
            <div className="card-shadow mt-[67px] py-[80px] lg:py-[60px] text-black">
                <p
                    className="text-center text-[22px] lg:text-[26px] xl:text-[30px]"
                    data-aos="fade-right"
                    data-aos-delay="700"
                >
                    Основные цвета ламинации
                </p>
                <div className="relative">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={6}
                        loop
                        spaceBetween={20}
                        modules={[Navigation]}
                        className="h-full mt-20 max-w-[700px] w-full"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                // spaceBetween: 150,
                            },
                            378: {
                                slidesPerView: 3,
                                // spaceBetween: 150,
                            },
                            578: {
                                slidesPerView: 3,
                                // spaceBetween: 150,
                            },
                            778: {
                                slidesPerView: 6,
                                // spaceBetween: 150,
                            },
                            1400: {
                                slidesPerView: 6,
                                // spaceBetween: 150,
                            },
                        }}
                    >
                        {data3?.length > 0 && data3.map((item, index) => (
                            <SwiperSlide className="" key={item.id}>
                                <div
                                    className="flex flex-col items-center justify-center"
                                    data-aos="fade-up"
                                    data-aos-delay={500 + (index + 1) * 200}
                                >
                                    <div>
                                        <img src={item.imgSrc} alt="img" className="w-[71px] h-[69px]" />
                                    </div>
                                    <span
                                        className="text-center font-medium text-[16px] lg:text-[18px]"
                                        style={{ fontStyle: "normal" }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute gap-16 lg:gap-36 flex items-center justify-center w-full top-[125%] lg:top-[35%] z-[9999]">
                        <div className="flex items-center justify-center gap-14 lg:gap-0 lg:justify-between max-w-[800px] w-full">
                            <img
                                className=" swiper-button-prev-2  w-[30px] cursor-pointer"
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
                </div>
            </div>

            <div className="card-shadow mt-[67px] py-[80px] lg:py-[60px] text-black">
                <p className="text-center text-[22px] lg:text-[26px] xl:text-[30px]">Основные цвета покраски</p>
                <div className="relative">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef2.current = swiper;
                        }}
                        slidesPerView={6}
                        loop={true}
                        spaceBetween={20}
                        modules={[Navigation]}
                        className="h-full mt-20 max-w-[700px] w-full"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                // spaceBetween: 150,
                            },
                            378: {
                                slidesPerView: 3,
                                // spaceBetween: 150,
                            },
                            578: {
                                slidesPerView: 3,
                                // spaceBetween: 150,
                            },
                            778: {
                                slidesPerView: 6,
                                // spaceBetween: 150,
                            },
                            1400: {
                                slidesPerView: 6,
                                // spaceBetween: 150,
                            },
                        }}
                    >
                        {data4?.length > 0 && data4.map((item, index) => (
                            <SwiperSlide className="" key={item.id}>
                                <div
                                    className="flex flex-col items-center justify-center"
                                    data-aos="fade-up"
                                    data-aos-delay={500 + (index + 1) * 200}
                                >
                                    <div className={`${item.color} w-[79px] h-[79px] rounded-md`}></div>
                                    <span
                                        className="text-center font-medium text-[16px] lg:text-[18px]"
                                        style={{ fontStyle: "normal" }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute gap-16 lg:gap-36 flex items-center justify-center w-full top-[125%] lg:top-[35%] z-[9999]">
                        <div className="flex items-center justify-center gap-14 lg:gap-0 lg:justify-between max-w-[800px] w-full">
                            <img
                                className="swiper-button-prev-3 w-[30px] cursor-pointer"
                                src={sliderNav_l}
                                alt=""
                                onClick={() => swiperRef2.current?.slidePrev()}
                            />
                            <img
                                className="swiper-button-next-3 w-[30px] cursor-pointer"
                                src={sliderNav_r}
                                alt=""
                                onClick={() => swiperRef2.current?.slideNext()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default memo(Color);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(Color);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
