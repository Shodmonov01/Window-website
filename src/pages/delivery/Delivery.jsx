import React from "react";
import Layout from "../../components/Layout";
import Consultation from "../../components/Consultation";
import checkIcon from "../../assets/icon/check1.png";
import Slider from "../../components/Slider";
import { Helmet } from "react-helmet";

function Delivery() {
  return (
    <>
      <Helmet>
        <title>Доставка | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Условия доставки наших изделий в Спб и ЛО!"
        />
      </Helmet>
      <Layout>
        <div className="mt-[40px] lg:mt-[124px] lg:mb-[80px] mb-8 " >
          <div className="flex items-center justify-center">
            <span
              className="text-[23px] lg:text-[35px] xl:text-[45px] font-bold uppercase font-Montserrat text-center"
              data-aos="fade-right"
              data-aos-duration={300}
            >
              ДОСТАВКА ИЗДЕЛИЙ
            </span>
          </div>
          <div className="mt-[10px] lg:mt-[60px] text-center lg:text-left">
            <p className="text-[14px] lg:text-[16px] w-full">
              Оконные системы требуют аккуратного обращения, поэтому их
              транспортировка должна производиться специально оборудованными
              машинами. Быстрая доставка конструкций по Санкт-Петербургу и
              Ленинградской области – сервис, который позволяет клиентам быстро
              получить покупку. Профессиональная перевозка обеспечивает
              безопасность – стекла не разобьются, и рама не будет
              деформирована.
            </p>
          </div>
        </div>
      </Layout>

      <div className="mt-[40px] mb-[80px] bg-box py-[30px] lg:py-[50px]">
        <Layout>
          <div className="text-center lg:text-left flex flex-col gap-[20px] text-[14px] lg:text-[16px] w-full text-white">
            <span className="font-bold font-Montserrat text-[16px] lg:text-[20px] uppercase bg_linear_gradient">
              Основными «плюсами» наших услуг является:
            </span>
            <ul className="flex flex-col gap-4 text-left">
              <li className="flex flex-col lg:flex-row items-center text-center lg:text-start  gap-2">
                <img src={checkIcon} className="w-[20px]" alt="" />
                парк современных автомобилей;
              </li>
              <li className="flex flex-col lg:flex-row items-center text-center lg:text-start  gap-2">
                <img src={checkIcon} className="w-[20px]" alt="" />
                надежное крепление изделий «пирамидами»;
              </li>
              <li className="flex flex-col lg:flex-row items-center text-center lg:text-start  gap-2">
                <img src={checkIcon} className="w-[20px]" alt="" />
                аккуратная выгрузка такелажными приспособлениями.
              </li>
            </ul>
            <p className="">
              Мы доставляем окна точно по согласованному с Вами графику и
              никогда не опаздываем. Наш менеджер обязательно позвонит в день
              готовности Вашего заказа и согласует с Вами день и время доставки.
            </p>
          </div>
        </Layout>
      </div>

      {/* slider */}
      <Slider />

      {/* consultation */}
      <Consultation />
    </>
  );
}

export default Delivery;
