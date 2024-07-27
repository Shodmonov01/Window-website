import React from "react";
import Consultation from "../../components/Consultation";
import SliderDark from "../../components/SliderDark";
import Layout from "../../components/Layout";
import gIcon from "../../assets/icon/g.png";
import Slider from "../../components/Slider";
import { Helmet } from "react-helmet";
const data = [
  {
    id: Math.random().toString(),
    name: "-Уверенность в долговечности изделий и установки.",
  },
  {
    id: Math.random().toString(),
    name: "-Непревзойденная красота немецких окон.",
  },
  {
    id: Math.random().toString(),
    name: "-Четкость в расчетах.",
  },
  {
    id: Math.random().toString(),
    name: "-Возможность увеличить зрительное пространство за счет уникальных возможностей нашей компании и наших изделий.",
  },
  {
    id: Math.random().toString(),
    name: "-Соблюдение культуры монтажа в соответствии со стандартом ГОСТ и обязательствами перед нашими клиентами.",
  },
];

const data2 = [
  {
    id: Math.random().toString(),
    name: "По закону бесплатное обслуживание и устранение поломок является обязательным условием сотрудничества с частными и корпоративными клиентами.",
  },
  {
    id: Math.random().toString(),
    name: "Договор предусматривает ответственность за качество изготовления конструкции и выполнение монтажных работ.",
  },
  {
    id: Math.random().toString(),
    name: "Период составляет - до 25 лет на изделия и до 10 лет на монтаж.",
  },
  {
    id: Math.random().toString(),
    name: "Сколько лет предоставляется в конкретном случае, можно узнать у наших менеджеров при консультации по телефону или у Вас на адресе, поскольку срок зависит от типа профильной системы и ее технических параметров.",
  },
  {
    id: Math.random().toString(),
    name: "Обязательства не распространяются на стекла, которые были разбиты по вине пользователя, попадание на пластик и стекла окалины во время сварки, другие дефекты, которые появились вследствие несоблюдения рекомендаций по эксплуатации и уходу, неаккуратного обращения, использования химически агрессивных средств.",
  },
];

function Guarantee() {
  return (
    <div className="mt-[50px] lg:mt-[100px]">
      <Helmet>
        <title>Гарантия на изделия | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Гарантия на наши изделия в Спб и ЛО! Оставьте заявку на нашем сайте"
        />
      </Helmet>
      <Layout>
        <div className="flex items-center justify-center gap-[20px] flex-wrap text-center">
          <span
            style={{
              background: "#EADA86",
            }}
            className="rounded-full flex items-center justify-center p-4"
          >
            <img src={gIcon} alt="" />
          </span>
          <span className="font-bold font-Montserrat text-[23px] uppercase lg:text-[35px] xl:text-[45px]">
            ГАРАНТИЯ НА ИЗДЕЛИЯ
          </span>
        </div>

        <div className="w-full lg:w-[80%] mt-[50px] lg:mt-[100px]">
          <div className="text-center lg:text-left w-full lg:w-[60%]">
            <span className="uppercase text-[20px] lg:text-[24px] font-bold font-Montserrat">
              Гарантийные обязательства компании ЭлитПласт - это прежде всего:
            </span>
          </div>
          <div className="mt-[30px]">
            <ul className="flex flex-col gap-[10px] items-center lg:items-start text-center lg:text-left">
              {data?.length > 0 && data.map((item) => <li>{item.name}</li>)}
            </ul>
          </div>
        </div>
      </Layout>

      <div className="bg-box pt-[50px] lg:pt-[60px] pb-[60px] lg:pb-[80px] text-white mt-[60px] lg:mt-[80px]">
        <Layout>
          <div>
            <span className="text-[23px] font-Montserrat mb-4 text-center lg:text-[35px] xl:text-[45px] font-bold uppercase flex items-center gap-1 lg:gap-3 flex-wrap justify-center">
              {"СРОК  ГАРАНТИИ  НА  КАЧЕСТВЕННЫЕ  ИЗДЕЛИЯ  ОТ  КОМПАНИИ  ЭЛИТПЛАСТ"
                .split(" ")
                .map((item, index) => (
                  <span
                    key={Math.random().toString()}
                    data-aos="fade-right"
                    data-aos-delay={500}
                    className="bg_linear_gradient font-bold"
                  >
                    {item}
                  </span>
                ))}
            </span>
          </div>

          <div className="mt-0 lg:mt-[30px]">
            <ul className="flex flex-col gap-[10px] text-[15px] text-center lg:text-left">
              {data2?.length > 0 &&
                data2.map((item, index) => (
                  <li
                    data-aos="fade-right"
                    data-aos-delay={1200 + (index + 1) * 200}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </Layout>
      </div>

      {/* slide */}
      <Slider />

      {/* consultation */}

      <Consultation bg="black" />
    </div>
  );
}

export default Guarantee;
