import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";
import sliderImd from "../assets/slider-img.png";
import slider1 from "../assets/slider/1.jpg";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/slider/3.jpg";
import slider4 from "../assets/slider/4.jpg";
import slider5 from "../assets/slider/5.jpg";
import slider6 from "../assets/slider/6.jpg";
import slider7 from "../assets/slider/7.jpg";
import slider8 from "../assets/slider/8.jpg";
import slider9 from "../assets/slider/9.jpg";
import slider10 from "../assets/slider/10.jpg";
import slider11 from "../assets/slider/11.jpg";
import slider12 from "../assets/slider/12.jpg";

const data = [
    {
        id: Math.random().toString(),
        imgSrc: sliderImd
    },
    {
        id: Math.random().toString(),
        imgSrc: slider1
    },
    {
        id: Math.random().toString(),
        imgSrc: slider2
    },
    {
        id: Math.random().toString(),
        imgSrc: slider3
    },
    {
        id: Math.random().toString(),
        imgSrc: slider4
    },
    {
        id: Math.random().toString(),
        imgSrc: slider5
    },
    {
        id: Math.random().toString(),
        imgSrc: slider6
    },
    {
        id: Math.random().toString(),
        imgSrc: slider7
    },
    {
        id: Math.random().toString(),
        imgSrc: slider8
    },
    {
        id: Math.random().toString(),
        imgSrc: slider9
    },
    {
        id: Math.random().toString(),
        imgSrc: slider10
    },
    {
        id: Math.random().toString(),
        imgSrc: slider11
    },
    {
        id: Math.random().toString(),
        imgSrc: slider12
    },
];

// million-ignore
function Slider() {
    const swiperRef = useRef();

    return (
        <div className="">
            <h2
                className="text-[23px] mx-5 font-Montserrat mt-20 mb-0 text-center md:text-[35px] lg:text-[45px] font-bold uppercase"
                data-aos="fade-up"
                data-aos-duration={1000}
            >
                Нaши работы
            </h2>
            <h5
                className="text-[18px] md:text-[20px] lg:text-[25px] text-center font-semibold"
                data-aos="fade-up"
                data-aos-duration={1500}
            >
                Мы остеклили более{" "}
            </h5>
            <div className="flex mt-3 items-center justify-center gap-7">
                <div
                    className=""
                    data-aos="fade-up"
                    data-aos-duration={1800}
                >
                    <div className="border rounded-md p-1 px-2 text-[20px] md:text-[25px] bg-white font-semibold">
                        15 000
                    </div>
                    <p className="text-[#A4A4A4] text-center text-[16px] md:text-[20px] mt-3 font-medium">Домов</p>
                </div>
                <div
                    className=""
                    data-aos="fade-up"
                    data-aos-duration={2200}
                >
                    <div className="border rounded-md p-1 px-2 text-[20px] md:text-[25px] bg-white font-semibold">
                        150 +
                    </div>
                    <p className="text-[#A4A4A4] text-center text-[16px] md:text-[20px] mt-3 font-medium">
                        Районов
                    </p>
                </div>
                <div
                    className=""
                    data-aos="fade-up"
                    data-aos-duration={2600}
                >
                    <div className="border rounded-md p-1 px-2 text-[20px] md:text-[25px] bg-white font-semibold">
                        27 400
                    </div>
                    <p className="text-[#A4A4A4] text-center text-[16px] md:text-[20px] mt-3 font-medium">
                        Квартир
                    </p>
                </div>
            </div>

            {/* slider */}
            <div className="relative px-2">
                <Swiper
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
                    {data?.length > 0 && data.map((item, index) => (
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
                </Swiper>
                <div className="slide-nav px-32 flex items-center justify-between w-full -bottom-[87px] md:bottom-full md:top-[50%] z-[9999] absolute">
                    <img
                        className="swiper-button-prev-1 w-[30px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                        src={sliderNav_l}
                        alt=""
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <img
                        className="swiper-button-next-1 w-[30px] lg:w-[35px] xl:w-[40px] cursor-pointer"
                        src={sliderNav_r}
                        alt=""
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Slider);