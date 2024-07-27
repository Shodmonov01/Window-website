import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Boxdata from "./components/Boxdata";
import SliderDark from "../../../../components/SliderDark";
import Consultation_white from "../../components/Consultation_white";
import setki1 from "../../../../assets/services/setki/setki (1).webp";
import setki2 from "../../../../assets/services/setki/setki (2).webp";
import setki3 from "../../../../assets/services/setki/setki (3).webp";
import setki4 from "../../../../assets/services/setki/setki (4).webp";
import setki5 from "../../../../assets/services/setki/setki (5).webp";
import setki6 from "../../../../assets/services/setki/setki (6).webp";
import setki7 from "../../../../assets/services/setki/setki (7).webp";
import setki8 from "../../../../assets/services/setki/setki (8).webp";
import setki9 from "../../../../assets/services/setki/setki (9).webp";
import setki10 from "../../../../assets/services/setki/setki (10).webp";
import setki11 from "../../../../assets/services/setki/setki (11).webp";
import setki12 from "../../../../assets/services/setki/setki (12).webp";
import setki13 from "../../../../assets/services/setki/setki (13).webp";
import setki14 from "../../../../assets/services/setki/setki (14).webp";
import check from "../../../../assets/services/pergolas/check.svg";
import { Helmet } from "react-helmet";

const data = [
  {
    id: Math.random().toString(),
    imgSrc: setki1,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki2,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki3,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki4,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki5,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki6,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki7,
  },

  {
    id: Math.random().toString(),
    imgSrc: setki8,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki9,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki10,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki11,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki12,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki13,
  },
  {
    id: Math.random().toString(),
    imgSrc: setki14,
  },
];

const box_data = [
  {
    id: Math.random().toString(),
    icon: check,
    title: "Сетки плиссе",
    text: "Москитные сетки ПРЕМИАЛЬНОГО качества. Легко открываются и закрываются, складываясь в гармошку. Устанавливаются на окна, двери и раздвижные порталы. Отличное решение для загородных домов или квартир.",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Вставные москитные сетки",
    text: "Защищают от выпадения детей и не пропускают комаров. Рама полностью из металла. Изделие имеет повышенную жесткость. Отличный вариант для квартир. Легко снимается и моется. Металлические ручки, уголки и навесы.",
  },
  {
    id: Math.random().toString(),
    icon: check,
    title: "Рамочные москитные сетки",
    text: "Самый простой и популярный вариант москитных сеток. Неприхотлив в уходе и использовании. Легко ставится и снимается. Металлические ручки, уголки и навесы.",
  },
];

function Mesh() {
  return (
    <>
      <Helmet>
        <title>Маскитные сетки и плиссе в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Маскитные сетки и сетки плиссе в Спб и ЛО!"
        />
      </Helmet>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[100px] lg:pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[27px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex flex-wrap"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"Москитные сетки".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>
            <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
              Наши москитные сетки – это надежная защита от назойливых
              насекомых, которая позволит вам наслаждаться свежим воздухом, не
              беспокоясь о комарах, мухах и других неприятных гостях. Мы
              предлагаем широкий ассортимент москитных сеток, которые подходят
              для окон, дверей, балконов и террас
            </p>
            <p className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]">
              Наши сетки изготовлены из высококачественных материалов, которые
              обеспечивают долговечность и эффективную защиту от насекомых. Они
              прочные и устойчивы к повреждениям, так что вы можете быть уверены
              в их надежности на протяжении многих лет.
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
        className="bg-[#212121] mt-[80px] md:mt-[150px] mb-[50px] md:mb-[100px] px-4 md:px-32 py-[50px] lg:py-[80px] cornerAnimation"
        // data-aos="fade-down-left"
        // data-aos-delay={500}
      >
        <span className="text-[23px] lg:text-[35px] xl:text-[45px] -tracking-tighter uppercase font-bold text-white text-center flex items-center justify-center gap-3 flex-wrap">
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
            Мы готовы Вам предложить
          </span>
        </span>
        <div className="grid grid-cols-1 mt-10 lg:mt-20 lg:grid-cols-3 text-white text-center gap-[20px]">
          {box_data?.length > 0 &&
            box_data.map((item, index) => (
              <div
                key={item.id}
                className="card rounded-[10px] h-auto p-6 flex flex-col bg-[#3C3C3C] items-center gap-[12px]"
                data-aos="fade-up"
                data-aos-delay={500 + (index + 1) * 200}
              >
                <span
                  className="w-[80px] lg:w-[107px] h-[80px] lg:h-[107px] rounded-full flex items-center justify-center"
                  style={{
                    background: "#EADA86",
                  }}
                >
                  <img src={item.icon} alt="" />
                </span>
                <div className="name text-[20px] md:text-[22px] tracking-wider font-semibold">
                  {item.title}
                </div>
                <div className="description text-sm md:text-[1rem] text-[#ffffffb2] text-center">
                  {item.text}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* extra data */}
      <Boxdata />

      {/* slider */}
      <div className="mt-[30px] lg:mt-[100px]">
        <SliderDark />
      </div>

      {/* consultation */}
      <div className="lg:-mt-0 -mt-28">
        <Consultation_white />
      </div>
    </>
  );
}

export default Mesh;
