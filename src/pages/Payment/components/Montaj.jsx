import React, { memo } from "react";
import Layout from "../../../components/Layout";
import icon1 from "../../../assets/icon/1.svg";
import icon2 from "../../../assets/icon/2.svg";
import icon3 from "../../../assets/icon/3.svg";
import icon4 from "../../../assets/icon/4.svg";
import icon5 from "../../../assets/icon/5.svg";
import icon7 from "../../../assets/icon/7.svg";
import icon8 from "../../../assets/icon/8.svg";
import icon9 from "../../../assets/icon/9.svg";
import icon10 from "../../../assets/icon/10.svg";
import icon11 from "../../../assets/icon/11.svg";
import icon12 from "../../../assets/icon/12.svg";
import icon13 from "../../../assets/icon/13.svg";
import check from "../../../assets/icon/check1.png";
import Why from "./Why";
const data = [
  {
    id: Math.random().toString(),
    img: icon9,
  },
  {
    id: Math.random().toString(),
    img: icon8,
  },
  {
    id: Math.random().toString(),
    img: icon7,
  },
  {
    id: Math.random().toString(),
    img: icon4,
  },
  {
    id: Math.random().toString(),
    img: icon11,
  },
  {
    id: Math.random().toString(),
    img: icon10,
  },

  {
    id: Math.random().toString(),
    img: icon12,
  },
  {
    id: Math.random().toString(),
    img: icon5,
  },
  {
    id: Math.random().toString(),
    img: icon13,
  },
  {
    id: Math.random().toString(),
    img: icon3,
  },
  {
    id: Math.random().toString(),
    img: icon2,
  },
  {
    id: Math.random().toString(),
    img: icon1,
  },
];

const data2 = [
  {
    id: Math.random().toString(),
    name: "Предмет – изделия и комплектующие.",
  },
  {
    id: Math.random().toString(),
    name: "Вся информация о готовой конструкции предоставляется в спецификации.",
  },
  {
    id: Math.random().toString(),
    name: "Под заказ выполняется монтаж, отделка, оказываются услуги по демонтажу и вывозу отходов.",
  },
  {
    id: Math.random().toString(),
    name: "Компания обязана провести обмер проемов, ознакомить клиента с видами продукции, фурнитурой, отделкой, подготовить заказ-эскиз, рассчитать стоимость.",
  },
  {
    id: Math.random().toString(),
    name: "Клиент может внести изменения в конфигурацию и комплектацию не позднее 2 часов после оформления и подписания договора. Сборка изделий начинается после поступления оплаты.",
  },
  {
    id: Math.random().toString(),
    name: "Срок выполнения монтажа и отделки составляет 1-7 дней.",
  },
  {
    id: Math.random().toString(),
    name: "Гарантийный срок на изделия до 25 лет, в зависимости от комплектации.",
  },
  {
    id: Math.random().toString(),
    name: "Гарантия на монтажные работы и регулировку запорного механизма составляет до 10 лет.",
  },
  {
    id: Math.random().toString(),
    name: "Также указывается общая сумма, ответственность сторон и прочие услуги.",
  },
];

const data3 = [
  {
    id: Math.random().toString(),
    name: "доставку конструкции к месту установки;",
  },
  {
    id: Math.random().toString(),
    name: "демонтаж старых систем;",
  },
  {
    id: Math.random().toString(),
    name: "уборку и вывоз строительного мусора;",
  },
  {
    id: Math.random().toString(),
    name: "установку, регулировку фурнитуры;",
  },
  {
    id: Math.random().toString(),
    name: "отделку откосов.",
  },
];

function Montaj() {
  return (
    <>
      <div className="bg-box mt-[50px] lg:mt-[88px] pb-10 lg:pb-[100px]">
        <Layout>
          <div className="flex items-center justify-center text-center lg:pt-[88px] pt-[35px] lg:pt-[50px]  pb-[35px] lg:pb-[80px]">
            <span className="bg_linear_gradient_txt uppercase font-bold font-Montserrat text-[23px] lg:text-[35px] xl:text-[45px]">
              ДОГОВОР на ИЗГОТОВЛЕНИе И МОНТАЖ изделий включает в себя:
            </span>
          </div>

          <div className="font-Montserrat text-[15px] lg:text-[17px] text-center lg:text-left flex flex-col text-white gap-4 lg:gap-[25px]">
            <span className="lg:uppercase lg:font-bold pb-[15px]">
              С каждым клиентом заключается договор, которому присваивается
              персональный номер. Основные положения, касаются следующих
              моментов:
            </span>
            {data2?.length > 0 &&
              data2.map((item) => (
                <span
                  key={item.id}
                  className="flex items-center flex-col lg:flex-row gap-2 lg:gap-4"
                >
                  <img src={check} alt="" />
                  <span>{item.name}</span>
                </span>
              ))}
          </div>
        </Layout>
      </div>

      {/* payment brand */}
      <div className="mt-[50px] lg:mt-[80px] mb-[40px] lg:mb-[180px]">
        <Layout>
          <div className="font-Montserrat text-center uppercase lg:text-start text-[23px] font-bold lg:text-[26px]">
            <span>Принимаем к оплате</span>
          </div>
          {/* logo */}
          <div className="flex flex-col gap-[30px] mt-[50px] pl-0 lg:pl-[20px]">
            <div className="grid grid-cols-4 xl:grid-cols-6 gap-[20px] w-[100%] lg:w-[70%] xl:w-[50%]">
              {data?.length > 0 &&
                data.map((item) => (
                  <div key={item.id}>
                    <img src={item.img} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </Layout>
      </div>

      <div className="bg-box mt-[50px] lg:mt-[88px] mb-[20px] lg:mb-[150px] pb-12 lg:pb-[100px]">
        <Layout>
          <div className="flex items-center justify-center text-center pt-8 lg:pt-[88px] pb-[50px] lg:pb-[94px]">
            <span className="bg_linear_gradient_txt uppercase font-bold font-Montserrat text-[23px] lg:text-[35px] xl:text-[45px]">
              ЗАКЛЮЧЕНИЕ ДОГОВОРА НА ИЗГОТОВЛЕНИЕ изделий С МОНТАЖОМ ИЛИ БЕЗ
            </span>
          </div>

          <div className="font-Montserrat text-[15px] lg:text-[17px] text-center lg:text-left flex flex-col text-white gap-[25px]">
            <span className="lg:uppercase lg:font-bold pb-[15px] w-full lg:w-[50%]">
              В зависимости от ситуации можно заказать только конструкции или
              полное выполнение работ «под ключ», которые включают:
            </span>
            {data3?.length > 0 &&
              data3.map((item) => (
                <span key={item.id} className="flex items-center gap-4">
                  <img src={check} alt="" />
                  <span className="text-start">{item.name}</span>
                </span>
              ))}
            <span className="lg:uppercase lg:font-bold">
              При покупке комплекта любых видов изделий для квартиры или
              коттеджа действуют выгодные скидки.
            </span>
          </div>
        </Layout>
      </div>

      <Why />
    </>
  );
}

export default memo(Montaj);
