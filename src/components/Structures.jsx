import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";

// million-ignore
function Structures(props) {
    const swiperRef = useRef();

    return (
        <div className="px-5 md:px-20 relative lg:px-32 mt-[100px] lg:mt-[200px]">
            <span className="title uppercase text-center mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[30px] xl:text-[45px]">
            <span
                    data-aos="fade-right"
                    data-aos-delay={550}
                >Виыд конструкций</span>
                {/* {"Виыд конструкций".split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        data-aos-delay={500 + (index + 1) * 150}
                    >{item}</span>
                ))} */}
            </span>
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                data-aos="fade-up"
                data-aos-delay={1000}
                lazy={true}
                loop={true}
                spaceBetween={20}
                modules={[FreeMode, Navigation]}
                className="h-full"
                breakpoints={{
                    778: {
                        slidesPerView: 1,
                        // spaceBetween: 150,
                    },
                    992: {
                        slidesPerView: 2,
                        // spaceBetween: 150,
                    },
                    1400: {
                        slidesPerView: 2,
                        // spaceBetween: 150,
                    },
                }}
            >
                {props.data?.length > 0 && props.data.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        className="h-[300px] lg:h-[450px]"
                    >
                        <div
                            className="card relative w-full h-[300px] lg:h-full bg-dark cursor-pointer rounded-lg"
                            data-aos="fade-up"
                            data-aos-delay={500 + (index + 1) * 500}
                            onClick={() => props.openModalHandlerStruktures(item)}
                        >
                            <img src={item.imgSrc} alt="card" className="w-full h-full rounded-[10px]" />
                            <div className="card-content my-10 absolute text-white bottom-0 w-full text-center text-[20px] lg:text-[25px] xl:text-[30px] font-semibold flex items-center justify-center flex-col gap-[18px]"
                                style={{
                                    fontVariant: "all-small-caps"
                                }}
                            >
                                <span className="">{item.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="338" height="1" viewBox="0 0 338 1" fill="none">
                                    <path d="M0 0.5H337.5" stroke="#BDBDBD" />
                                </svg>
                                <span className="text-[13px] lg:text-[15px] block lg:hidden font-normal font-Montserrat"
                                    style={{ fontStyle: "normal", fontVariant: "diagonal-fractions" }}
                                >
                                    Подробнее
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slide-nav px-32 gap-16 lg:gap-36 flex items-center justify-center w-full top-[50%] relative z-[9999] my-14">
                <img
                    className="swiper-button-prev-body w-[30px] cursor-pointer"
                    src={sliderNav_l}
                    alt=""
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <img
                    className="swiper-button-next-body w-[30px] cursor-pointer"
                    src={sliderNav_r}
                    alt=""
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </div>
        </div>
    )
}

export default memo(Structures);