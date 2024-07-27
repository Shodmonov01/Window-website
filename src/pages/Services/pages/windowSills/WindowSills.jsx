import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Properties from "./components/Properties";
import SliderDark from "../../../../components/SliderDark";
import Consultation_white from "../../components/Consultation_white";
import balcon1 from "../../../../assets/services/windowsills/sills (1).webp";
import balcon2 from "../../../../assets/services/windowsills/sills (2).webp";
import balcon3 from "../../../../assets/services/windowsills/sills (3).webp";
import balcon4 from "../../../../assets/services/windowsills/sills (4).webp";
import balcon5 from "../../../../assets/services/windowsills/sills (5).webp";
import balcon6 from "../../../../assets/services/windowsills/sills (6).webp";
import balcon7 from "../../../../assets/services/windowsills/sills (7).webp";
import balcon8 from "../../../../assets/services/windowsills/sills (8).webp";
import balcon9 from "../../../../assets/services/windowsills/sills (9).webp";
import balcon10 from "../../../../assets/services/windowsills/sills (10).webp";
import balcon11 from "../../../../assets/services/windowsills/sills (11).webp";
import balcon12 from "../../../../assets/services/windowsills/sills (12).webp";
import balcon13 from "../../../../assets/services/windowsills/sills (13).webp";
import balcon14 from "../../../../assets/services/windowsills/sills (14).webp";
import balcon15 from "../../../../assets/services/windowsills/sills (15).webp";
import balcon16 from "../../../../assets/services/windowsills/sills (16).webp";
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
  {
    id: Math.random().toString(),
    imgSrc: balcon15,
  },
  {
    id: Math.random().toString(),
    imgSrc: balcon16,
  },
];

const box_data = [
  {
    id: Math.random().toString(),
    number: "01",
    title: "Защита оконного проема",
    text: "Подоконник предотвращает проникновение осадков и грязи в оконные проемы, что способствует сохранению качества окон и их долговечности.",
  },
  {
    id: Math.random().toString(),
    number: "02",
    title: "Простота обслуживания",
    text: "Установка не требует сложных работ и может быть выполнена профессиональными мастерами. При этом, для ухода за подоконником достаточно регулярной чистки и протирания.",
  },
  {
    id: Math.random().toString(),
    number: "03",
    title: "Удобство использования",
    text: "Предоставляет дополнительное пространство для размещения различных предметов, таких как декоративные элементы, цветы, книги и т.д. Это позволяет делать помещение более функциональным и уютным.",
  },
];

function WindowSills() {
  return (
    <>
      <Helmet>
        <title>Установка подоконников в Спб и ЛО | Элитпласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Установка подоконников в Спб и ЛО! записывайтесь на сайте"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[100px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[27px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"ПОДОКОННИКИ".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>

            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              Окна с установленными подоконниками обеспечивают не только
              функциональность, но и эстетическую привлекательность помещения.
              Выбор оконных подоконников предоставляет широкие возможности для
              создания уютной и комфортной атмосферы в помещении, а также
              повышения тепло- и звукоизоляции.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                to={"/contact"}
                className="font-semibold tracking-widest flex items-center justify-center uppercase w-full mx-4 md:mx-0 md:w-[300px] h-[50px] md:h-[64px] text-white"
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
          <div className="w-full lg:col-span-4 ">
            <Carousel data={data} />
          </div>
        </div>
      </section>

      <div
        className="bg-[#212121] mt-[80px] md:mt-[150px] mb-[60px] md:mb-[100px] px-4 md:px-32 pt-[50px] lg:pt-[96px] pb-[50px] lg:pb-[80px] cornerAnimation"
        // data-aos="fade-down-left"
        // data-aos-delay={500}
      >
        <span className="text-[23px] lg:text-[30px] xl:text-[45px] -tracking-tighter uppercase font-bold text-white text-center flex items-center justify-center gap-3 flex-wrap">
          {/* {box.title.split(" ").map((item, index) => (
                        <span
                            key={Math.random().toString()}
                            data-aos="fade-right"
                            data-aos-delay={400 + (index + 1) * 150}
                        >{item}</span>
                    ))} */}
          <span
            key={Math.random().toString()}
            data-aos="fade-right"
            data-aos-delay={400}
            className="bg_linear_gradient_txt"
          >
            ПРЕИМУЩЕСТВА НАШИХ ПОДОКОННИКОВ
          </span>
        </span>
        <div className="grid grid-cols-1 mt-10 lg:mt-20 lg:grid-cols-3 text-white text-center gap-4">
          {box_data?.length > 0 &&
            box_data.map((item, index) => (
              <div
                key={item.id}
                className="card rounded-md h-auto p-6 flex flex-col items-center bg-[#373737]"
                data-aos="fade-up"
                data-aos-delay={500 + (index + 1) * 200}
              >
                <h2 className="text-linear text-[40px] md:text-[45px] font-bold">
                  {item.number}
                </h2>
                <div className="name text-[20px] md:text-[22px] tracking-wider my-3 font-semibold">
                  {item.title}
                </div>
                <div className="description text-sm md:text-[1rem] text-[#ffffffb2]">
                  {item.text}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* extra properties windowsills's */}
      <Properties />

      {/* slider */}
      <SliderDark className="bg-box" />

      {/* consultation */}
      <div className="lg:-mt-0 -mt-28">
        

      <Consultation_white />
        </div>
    </>
  );
}

export default WindowSills;
