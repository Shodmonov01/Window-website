import React, { memo } from "react";
import Layout from "../../../components/Layout";
import podxod from "../../../assets/icon/oplata/podxod.png";
import texnologiya from "../../../assets/icon/oplata/texnologiya.png";
import skorost from "../../../assets/icon/oplata/skorost.png";
import car from "../../../assets/icon/oplata/car.png";
import garantiya from "../../../assets/icon/oplata/garantiya.png";
import client from "../../../assets/icon/oplata/client.png";
const data = [
  {
    id: Math.random().toString(),
    icon: podxod,
    title: "Комплексный подход",
    text: "Работы выполняются под ключ, с уборкой и выносом мусора. Клиенту остается только принять результат",
  },
  {
    id: Math.random().toString(),
    icon: texnologiya,
    title: "Прогрессивные технологии",
    text: "Мы строго соблюдаем стандарты и используем мембранные ленты, которые улучшают характеристики изделий",
  },
  {
    id: Math.random().toString(),
    icon: skorost,
    title: "Высокая скорость",
    text: "У нас всегда есть свободные мастера, большие запасы материала и фурнитуры",
  },
  {
    id: Math.random().toString(),
    icon: car,
    title: "Доставка спецтранспортом",
    text: "Готовые оконные системы аккуратно доставляются в любой район Санкт-Петербурга и Ленинградской области",
  },
  {
    id: Math.random().toString(),
    icon: garantiya,
    title: "Официальная гарантия",
    text: "Предоставляем гарантию на все виды изделий до 25 лет и на монтажные работы сроком до 10 лет",
  },
  {
    id: Math.random().toString(),
    icon: client,
    title: "Клиентоориенти-рованность",
    text: "Работаем над новыми предложениями, учитывая запросы потребителей, и регулярно устраиваем акции. Мы сделаем то, что не смогут другие!",
  },
];

// million-ignore
function Why() {
  return (
    <Layout>
      <div className="flex items-center justify-center text-center pb-[10px] lg:pb-[94px] flex-col">
        <span className="uppercase font-bold font-Montserrat text-[23px] lg:text-[35px] xl:text-[45px]">
          ПОЧЕМУ СТОИТ ОБРАЩАТЬСЯ К НАМ! ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА!
        </span>
        <div className="font-Montserrat text-[15px] lg:text-[17px] text-center lg:text-left flex flex-col text-dark pt-[10px] items-center justify-center">
          <span className="">
            У нас можно заказать оконные конструкции любого вида, от дешевых до
            премиальных.
          </span>
          <span>
            {" "}
            После поступления заявки работы выполняются в таком порядке:
          </span>
        </div>
      </div>

      <div className="mb-[30px] lg:mb-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {data?.length > 0 &&
            data.map((item) => (
              <div key={item.id} className="col-span-1">
                <div className="flex flex-col gap-6 lg:gap-4">
                  <div className="flex items-center gap-2 lg:gap-6">
                    <div
                      className="w-[70px] lg:w-[93px] h-[70px] lg:h-[93px] relative rounded-full flex flex-col gap-2"
                      style={{
                        background: "#EADA86",
                      }}
                    >
                      <span className="absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center p-4 lg:p-0">
                        <img src={item.icon} alt="" />
                      </span>
                    </div>
                    <span className="font-bold font-Montserrat text-[16px] lg:text-[18px]">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[14px] lg:text-[16px]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default memo(Why);
