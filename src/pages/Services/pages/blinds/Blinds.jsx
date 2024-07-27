import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import balcon1 from "../../../../assets/services/jalyuzi/jalyuzi (1).webp";
import balcon2 from "../../../../assets/services/jalyuzi/jalyuzi (2).webp";
import balcon3 from "../../../../assets/services/jalyuzi/jalyuzi (3).webp";
import balcon4 from "../../../../assets/services/jalyuzi/jalyuzi (4).webp";
import balcon5 from "../../../../assets/services/jalyuzi/jalyuzi (5).webp";
import balcon6 from "../../../../assets/services/jalyuzi/jalyuzi (6).webp";
import balcon7 from "../../../../assets/services/jalyuzi/jalyuzi (7).webp";
import balcon8 from "../../../../assets/services/jalyuzi/jalyuzi (8).webp";
import balcon9 from "../../../../assets/services/jalyuzi/jalyuzi (9).webp";
import balcon10 from "../../../../assets/services/jalyuzi/jalyuzi (10).webp";
import balcon11 from "../../../../assets/services/jalyuzi/jalyuzi (11).webp";
import balcon12 from "../../../../assets/services/jalyuzi/jalyuzi (12).webp";
import balcon13 from "../../../../assets/services/jalyuzi/jalyuzi (13).webp";
import balcon14 from "../../../../assets/services/jalyuzi/jalyuzi (14).webp";
import balcon15 from "../../../../assets/services/jalyuzi/jalyuzi (15).webp";
import check from "../../../../assets/services/pergolas/check.svg";
import BoxData from "./components/BoxData";
import SliderDark from "../../../../components/SliderDark";
import Consultation_white from "../../components/Consultation_white";
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
];

const box_data = [
  {
    id: Math.random().toString(),
    icon: check,
    text: "Без проблем устанавливаются на пластиковые окна, наклонные и потолочные окна",
  },
  {
    id: Math.random().toString(),
    icon: check,
    text: "Не теряют своей внешней привлекательности даже после долгой эксплуатации",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Подсветка",
    text: "Имеют несколько вариантов управления – ручной и автоматический",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Уличные обогреватели",
    text: "Обладают грязе- и пылеотталкивающими свойствами",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Уличные обогреватели",
    text: "Можно устанавливать в помещениях с повышенной влажностью",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Уличные обогреватели",
    text: "Можно мыть в воде",
  },
];

function Blinds() {
  return (
    <>
      <Helmet>
        <title>Жалюзи плиссе в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Жалюзи плиссе для окон и балконов в Спб и ЛО!"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[30px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[27px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex flex-wrap"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"жалюзи плиссе и др.".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>
            <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
              Жалюзи (шторы) плиссе изготовлены из специальной ткани,
              закреплённой с двух сторон в специальном карнизе в виде
              алюминиевого профиля. Они удерживаются на окне при помощи
              специальных направляющих, протянутых между карнизами. Такие
              направляющие проходят сквозь все складки, что дает возможность
              осуществлять открытие и закрытие.
            </p>
            <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
              Эти изящные и легкие светофильтры идеально подойдут для арочных,
              круглых или треугольных проемов, так как могут открываться и
              закрываться не только вверх-вниз, но и по механизму веера.
            </p>
            <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
              Второй особенностью жалюзи плиссе является их невероятно
              элегантный облик. «Гармошка» из ткани в качестве оконного декора
              выглядит очень стильно и необычно, что позволяет использовать их
              для украшения самых оригинальных интерьеров.
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
          <div className="w-full lg:col-span-4 ">
            <Carousel data={data} />
          </div>
        </div>
      </section>
      <div
        className="bg-[#212121] mt-[30px] md:mt-[150px] mb-[70px] md:mb-[100px] px-4 md:px-32 pt-[60px] lg:pt-[96px] pb-[50px] lg:pb-[80px] cornerAnimation"
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
            className="bg_linear_gradient"
          >
            Преимущества современных штор плиссе
          </span>
        </span>
        <div className="grid grid-cols-1 mt-10 lg:mt-20 lg:grid-cols-3 text-white text-center gap-[20px]">
          {box_data?.length > 0 &&
            box_data.map((item, index) => (
              <div
                key={item.id}
                className="card rounded-[10px] h-auto p-6 flex flex-col bg-[#3C3C3C] items-center lg:items-start gap-[16px]"
                data-aos="fade-up"
                data-aos-delay={500 + (index + 1) * 200}
              >
                <span
                  className="w-[50px] lg:w-[73px] h-[50px] lg:h-[73px] rounded-full p-[15px] flex items-center justify-center"
                  style={{
                    background: "#EADA86",
                  }}
                >
                  <img src={item.icon} alt="" />
                </span>
                <div className="description text-sm md:text-[1rem] text-[#ffffff] text-center lg:text-left">
                  {item.text}
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* extra data */}
      <BoxData />
      {/* slider dark */}
      <div className="mt-[100px]">
        <SliderDark />
      </div>
      {/* consultation */}
      <div className="lg:-mt-0 -mt-28">
      <Consultation_white />{" "}
      </div>
    </>
  );
}

export default Blinds;
