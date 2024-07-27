import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Slider from "../../../../components/Slider";
import Consultation from "../../components/Consultation";
import Carousel_left from "../../components/Carousel_left";

import vorota1 from "../../../../assets/services/vorota/vorota1.png";
import vorota2 from "../../../../assets/services/vorota/vorota2.png";
import vorota3 from "../../../../assets/services/vorota/vorota3.png";
import vorota4 from "../../../../assets/services/vorota/vorota4.png";
import vorota6 from "../../../../assets/services/vorota/vorota6.png";
import vorota7 from "../../../../assets/services/vorota/vorota7.png";
import vorota8 from "../../../../assets/services/vorota/vorota8.png";
// import vorota9 from "../../../../assets/services/vorota/vorota9.png";
// import vorota10 from "../../../../assets/services/vorota/vorota10.png";
// import vorota11 from "../../../../assets/services/vorota/vorota11.png";
import balcon1 from "../../../../assets/services/vorota/voroto (1).webp";
import balcon2 from "../../../../assets/services/vorota/voroto (2).webp";
import balcon3 from "../../../../assets/services/vorota/voroto (3).webp";
import balcon4 from "../../../../assets/services/vorota/voroto (4).webp";
import balcon5 from "../../../../assets/services/vorota/voroto (5).webp";
import balcon6 from "../../../../assets/services/vorota/voroto (6).webp";
import balcon7 from "../../../../assets/services/vorota/voroto (7).webp";
import balcon8 from "../../../../assets/services/vorota/voroto (8).webp";
import balcon9 from "../../../../assets/services/vorota/voroto (9).webp";
import balcon10 from "../../../../assets/services/vorota/voroto (10).webp";
import balcon11 from "../../../../assets/services/vorota/voroto (11).webp";
import balcon12 from "../../../../assets/services/vorota/voroto (12).webp";
import balcon13 from "../../../../assets/services/vorota/voroto (13).webp";
import balcon14 from "../../../../assets/services/vorota/voroto (14).webp";
import { Helmet } from "react-helmet";
const data = [
  {
    id: Math.random().toString(),
    imgSrc: balcon1,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon2,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon3,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon4,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon5,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon6,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon7,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon8,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon9,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon10,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon11,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon12,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon13,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon14,
  },
];

const data2 = [
  {
    id: Math.random().toString(),
    imgSrc: vorota1,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota2,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota3,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota4,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota6,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota7,
  },
  {
    id: Math.random().toString(),
    imgSrc: vorota8,
  },
  // {
  //   id: Math.random().toString(),
  //   imgSrc: vorota9,
  // },
  // {
  //   id: Math.random().toString(),
  //   imgSrc: vorota10,
  // },
  // {
  //   id: Math.random().toString(),
  //   imgSrc: vorota11,
  // },
];

function SectionalDoors() {
  return (
    <>
      <Helmet>
        <title>Секционные ворота и роллеты в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - секционные ворота и роллеты с доставкой и установкой в Спб и ЛО!"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse items-center lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[100px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[27px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex flex-wrap"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"Секционные ворота, роллеты".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>
            <div
              data-aos="fade-right"
              data-aos-delay={600}
              className="flex flex-col gap-[6px] lg:gap-[10px]"
            >
              <span className="text-[17px] lg:text-[20px] font-bold text-dark">
                Воротные системы
              </span>
              <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
                Секционные автоматические ворота применяются для промышленных и
                производственных помещений, а также подойдут и для бытовых нужд.
                Такой тип ворот самый распространенный в Европе. Они
                представляют собой панели, которые соединены петлями.
                Передвигается такая конструкция по направляющим, которые
                крепятся по краям проема и заводятся под перекрытия. При
                открывании ворот, панели по направляющим шинам поднимаются под
                потолок, не занимая тем самым лишнего пространства.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                to={"/contact"}
                className="text-white font-semibold tracking-widest flex items-center justify-center mt-5 uppercase w-full mx-4 md:mx-0 md:w-[300px] h-[55px] md:h-[65px]"
                data-aos="fade-up"
                data-aos-delay={500}
                style={{
                  background: "#EADA86",
                }}
              >
                Связаться с нами
              </Link>
            </div>
          </div>

          {/* carousel swiper */}
          <div className="w-[100%] lg:col-span-4 ">
            <Carousel data={data} />
          </div>
        </div>
      </section>

      <section className="my-[70px] lg:my-[120px] bg-box">
        <div className="flex flex-col lg:grid px-4 lg:pr-0 pt-8 pb-4 lg:gap-8 xl:gap-0 lg:pt-20 lg:pb-32 lg:grid-cols-12">
          {/* carousel swiper */}
          <div className="w-full ml-0 xl:ml-[100px] lg:col-span-4">
            <Carousel_left data={data2} />
          </div>

          <div className="flex flex-col w-full lg:col-span-8 py-[100px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <div
              data-aos="fade-right"
              data-aos-delay={600}
              className="flex flex-col gap-[6px] lg:gap-[10px]"
            >
              <span className="text-[20px] lg:text-[35px] uppercase font-bold bg_linear_gradient_txt">
                Роллетные системы
              </span>
              <p className="max-w-2xl mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px] text-white">
                Современные роллетные системы способны служить прекрасным
                дополнением к архитектурному стилю зданий. Мы изготавливаем
                роллеты различных размеров и конфигураций, в многочисленных
                цветовых решениях, предназначенные для выполнения разноплановых
                функций.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                to={"/contact"}
                className="text-white font-semibold tracking-widest flex items-center justify-center uppercase w-full mx-4 md:mx-0 md:w-[300px] h-[55px] md:h-[65px]"
                data-aos="fade-up"
                data-aos-delay={500}
                style={{
                  background: "#EADA86",
                }}
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider color="dark" />

      {/* consultation */}

      <div className="lg:-mt-0 -mt-28">
        <Consultation />
      </div>
    </>
  );
}

export default SectionalDoors;
