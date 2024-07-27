import React, { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Layout from "../../../components/Layout";
import sliderNav_l from "../../../assets/slider-arrow-l_white.svg";
import sliderNav_r from "../../../assets/slider-arrow-r_white.svg";

// million-ignore
function Profil({ data }) {
  const swiperRef = useRef();

  return (
    <div className="bg-box pt-[25px] lg:pt-[83px] pb-[0px] lg:pb-[40px]">
      <Layout>
        <div className="flex items-center justify-center">
          <span className="text-[23px] lg:text-[35px] xl:text-[50px] font-Montserrat bg_linear_gradient_txt font-bold">
            {data.header}
          </span>
        </div>

        {/* slider */}
        <div className="relative">
          <Swiper
            slide
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            className="mySwiper_profil h-full"
            data-aos="fade-up"
            spaceBetween={100}
            breakpoints={{
              640: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {data.images?.length > 0 &&
              data.images.map((item, index) => (
                <SwiperSlide key={item.id} className="bg-transparent w-full">
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={500 + (index + 1) * 100}
                    className="flex flex-col gap-[30px] flex-wrap lg:flex-nowrap h-auto items-center lg:items-start"
                  >
                    <div className="w-[278px] h-[348px] lg:col-span-1">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[278px] h-[348px] object-fill"
                      />
                    </div>
                    <div className="text-white pt-[10px] lg:pt-[50px] flex flex-col text-left lg:col-span-1 p-1">
                      <span className="bg_linear_gradient text-[20px] lg:text-[23px] font-bold font-Montserrat">
                        {item.title}
                      </span>
                      <span className="text-[14px] lg:text-[16px] py-[20px] lg:py-[40px]">
                        {item.text}
                      </span>
                      <ul className="list-none">
                        {item.property?.length > 0 &&
                          item.property.map((elem) => (
                            <li
                              key={elem.id}
                              className={`text-[14px] lg:text-[16px] flex items-center justify-between border-[#7E7B7B] border-t-[1px] pt-[15px] lg:pt-[18px] pb-[18px] lg:pb-[21px]`}
                            >
                              <span className="text-white/60">{elem.name}</span>
                              <span>{elem.value}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="slide-nav flex items-center justify-between w-full z-[999] absolute px-[0px] bottom-[800px] lg:px-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0">
            <img
              className="swiper-button-prev-1 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:-ml-[50px]"
              src={sliderNav_l}
              alt=""
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <img
              className="swiper-button-next-1 w-[20px] lg:w-[25px] xl:w-[30px] cursor-pointer lg:-mr-[50px]"
              src={sliderNav_r}
              alt=""
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default memo(Profil);
