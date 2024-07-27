import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import BoxData from "./components/BoxData";
import Slider from "../../../../components/Slider";
import Consultation from "../../components/Consultation";
import balcon1 from "../../../../assets/services/slopes/slopes (1).webp";
import balcon2 from "../../../../assets/services/slopes/slopes (2).webp";
import balcon3 from "../../../../assets/services/slopes/slopes (3).webp";
import balcon4 from "../../../../assets/services/slopes/slopes (4).webp";
import balcon5 from "../../../../assets/services/slopes/slopes (5).webp";
import balcon6 from "../../../../assets/services/slopes/slopes (6).webp";
import balcon7 from "../../../../assets/services/slopes/slopes (7).webp";
import balcon8 from "../../../../assets/services/slopes/slopes (8).webp";
import balcon9 from "../../../../assets/services/slopes/slopes (9).webp";
import balcon10 from "../../../../assets/services/slopes/slopes (10).webp";
import balcon11 from "../../../../assets/services/slopes/slopes (11).webp";
import balcon12 from "../../../../assets/services/slopes/slopes (12).webp";
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
];

function Slopes() {
  return (
    <>
      <Helmet>
        <title>Установка откосов и отливов в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Откосы и отливы в Спб и ЛО ! Оставляйте заявку на сайте"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[100px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[23px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"Откосы, отливы".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>

            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              Откосы монтируются на горизонтальные поверхности стен и
              предназначены для предотвращения попадания влаги и грязи в щели
              между стеной и полом, а также для облегчения чистки и ухода за
              помещением. Они обеспечивают гладкое соединение между двумя
              разными поверхностями и придают завершенный вид интерьеру.{" "}
            </p>
            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              Отливы, в свою очередь, устанавливаются на вертикальные края стен
              и служат для защиты от попадания осадков, особенно дождевой воды,
              под облицовочные материалы. Они предотвращают проникновение влаги
              и помогают сохранить целостность и долговечность фасада здания или
              сооружения.
            </p>
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

          {/* carousel swiper */}
          <div className="w-full lg:col-span-4">
            <Carousel data={data} />
          </div>
        </div>
      </section>

      {/* extra data */}
      <BoxData />

      {/* slider */}
      <Slider />

      {/* konsultatsiya */}
      <div className="lg:-mt-0 -mt-28">
        <Consultation />

        </div>
    </>
  );
}

export default Slopes;
