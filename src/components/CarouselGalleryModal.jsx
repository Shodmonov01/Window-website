import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import sliderNav_l from "../assets/slider-arrow-l.svg";
import sliderNav_r from "../assets/slider-arrow-r.svg";

// million-ignore
function CarouselGalleryModal({ data, d }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [imagesData] = useState(d.filter(el => el.name === data.name));
    const swiperRef = useRef();

    return (
        <div className='SwiperWithThumb lg:col-span-1'>
            <div className='relative'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    lazy={true}
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-auto mb-[21px] "
                >
                    {imagesData?.length > 0 && imagesData.map(item => (
                        item.images.map(el => (
                            <SwiperSlide key={el.id} className='w-[100px] lg:w-[300px] h-[357px]'>
                                <img src={el.image} className='w-full lg:w-[300px] h-[300px] swiper-zoom-container' />
                            </SwiperSlide>
                        ))
                    ))}
                </Swiper>
                <div className="absolute gap-36 flex items-center w-full top-0 bottom-0 px-[10px] z-[9999]">
                    <div className="flex items-center gap-14 lg:gap-0 justify-between max-w-[800px] w-full">
                        <img
                            className="swiper-button-prev-modal w-[35px] cursor-pointer rounded-full bg-white p-2"
                            src={sliderNav_l}
                            alt=""
                            onClick={() => swiperRef.current?.slidePrev()}
                        />
                        <img
                            className="swiper-button-next-modal w-[35px] cursor-pointer rounded-full bg-white p-2"
                            src={sliderNav_r}
                            alt=""
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>
                </div>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
                lazy={true}
            >
                {imagesData?.length > 0 && imagesData.map(item => (
                    item.images.map(el => (
                        <SwiperSlide key={el.id} className='w-[77px] lg:w-[83px] h-[72px] lg:h-[78px]'>
                            <img src={el.image} className='w-full h-full cursor-pointer' />
                        </SwiperSlide>
                    ))
                ))}
            </Swiper>
        </div>
    )
}

export default memo(CarouselGalleryModal);