import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Slider from "../../../../components/Slider";
import Consultation from "../../components/Consultation";
import check from "../../../../assets/services/pergolas/check.svg";
import balcon1 from "../../../../assets/services/pergolas/pergolas (1).webp";
import balcon2 from "../../../../assets/services/pergolas/pergolas (2).webp";
import balcon3 from "../../../../assets/services/pergolas/pergolas (3).webp";
import balcon4 from "../../../../assets/services/pergolas/pergolas (4).webp";
import balcon5 from "../../../../assets/services/pergolas/pergolas (5).webp";
import balcon6 from "../../../../assets/services/pergolas/pergolas (6).webp";
import balcon7 from "../../../../assets/services/pergolas/pergolas (7).webp";
import balcon8 from "../../../../assets/services/pergolas/pergolas (8).webp";
import balcon9 from "../../../../assets/services/pergolas/pergolas (9).webp";
import balcon10 from "../../../../assets/services/pergolas/pergolas (10).webp";
import balcon11 from "../../../../assets/services/pergolas/pergolas (11).webp";
import balcon12 from "../../../../assets/services/pergolas/pergolas (12).webp";
import balcon13 from "../../../../assets/services/pergolas/pergolas (13).webp";
import balcon14 from "../../../../assets/services/pergolas/pergolas (14).webp";
import balcon15 from "../../../../assets/services/pergolas/pergolas (15).webp";
import balcon16 from "../../../../assets/services/pergolas/pergolas (16).webp";
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
    icon: check,
    title: "Датчики",
    text: "реагирующие на внешние факторы в виде дождя, солнца или ветра, и посылающие сигнал для автоматической сборки или разборки конструкции.",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Ветрозащитные системы",
    text: "представленные в виде вспомогательных опор, которые повышают устойчивость большеразмерных тентов или используются при наличии интенсивных ветровых нагрузок.",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Подсветка",
    text: "Используется для освещения террасы, благодаря чему летнее кафе может функционировать даже в вечернее время.",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Уличные обогреватели",
    text: "Обеспечивают поддержание комфортной температуры в условиях открытого пространства, что актуально при прохладной погоде.",
  },
];

function Pergolas() {
  return (
    <>
      <Helmet>
        <title>Маркизы и перголы в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Маркизы и перголы с доставкой и установкой в Спб и ЛО !"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[100px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[23px] font-bold leading-none text-[23px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"Маркизы, перголы".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>
            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-[22px] text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              В компании ЭлитПласт вы можете купить выдвижные террасные маркизы
              «pergola». Алюминиевая конструкция шириной до 13 м с выносом до 10
              м монтируется на стену и имеет дополнительные нижние точки опоры.
              Система управляется автоматически — электродвигателем и пультом
              ДУ.
            </p>
            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-[22px] text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={400}
            >
              Ткань тента двигается по направляющим. Фиксируется в любом
              промежуточном положении. Есть датчики дождя, солнца, ветра.
              Опционально изделия комплектуются уличными обогревателями и
              дополнительными опорами для ветреных мест. При правильном
              обращении служат 10 и более лет.
            </p>
            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-[22px] text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Террасные маркизы используются в качестве быстровозводимого навеса
              для затенения террас, прилегающих к частным домам или коммерческим
              заведениям. Такие навесы позволят создать стильную и комфортную
              зону, надежно защищенную от солнца и осадков.
            </p>
            <div
              data-aos="fade-right"
              data-aos-delay={600}
              className="flex flex-col gap-[6px] lg:gap-[10px]"
            >
              <span className="text-[17px] lg:text-[20px] font-bold text-dark">
                Гарантия
              </span>
              <p className="max-w-[960px] mb-10 font-normal lg:mb-[22px] text-[15px] lg:text-[15px] xl:text-[17px]">
                Даем гарантию на маркизы 1-3 года. Если выявите недостаток во
                время гарантийного срока, устраним бесплатно. Чтобы продлить
                срок гарантии, предлагаем заключить договор на ежегодный осмотр
                и сервисное обслуживание. Постгарантийные поломки устраняем
                быстро и недорого.
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

          {/* carousel swiper */}
          <div className="w-full lg:col-span-4 ">
            <Carousel data={data} />
          </div>
        </div>
      </section>

      <div
        className="bg-[#212121] mt-[100px] md:mt-[120px] mb-[60px] md:mb-[100px] px-4 md:px-32 pt-[50px] lg:pt-[96px] pb-[50px] lg:pb-[80px] cornerAnimation"
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
            Аксессуары для повышения функциональности террасной маркизы
          </span>
        </span>
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 text-white text-center gap-[20px]">
          {box_data?.length > 0 &&
            box_data.map((item, index) => (
              <div
                key={item.id}
                className="card rounded-md h-auto p-6 flex flex-col items-center bg-[#373737]"
                data-aos="fade-up"
                data-aos-delay={500 + (index + 1) * 200}
              >
                <span
                  className="w-[87px] lg:w-[107px] h-[87px] lg:h-[107px] rounded-full flex items-center justify-center"
                  style={{
                    background: "#EADA86",
                  }}
                >
                  <img src={item.icon} alt="" />
                </span>
                <div className="name text-[20px] md:text-[22px] tracking-wider my-3 font-semibold">
                  {item.title}
                </div>
                <div className="description text-sm md:text-[1rem] text-[#ffffff]">
                  {item.text}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* slider */}
      <Slider />

      {/* consultation */}
      <div className="lg:-mt-0 -mt-28">
        <Consultation />

        </div>
    </>
  );
}

export default Pergolas;
