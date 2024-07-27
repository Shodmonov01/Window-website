import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SliderDark from "../../components/SliderDark";
import Consultation from "../../components/Consultation";
import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import { Helmet } from "react-helmet";
const data = [
  {
    id: Math.random().toString(),
    img: news1,
    data: "23.01.2024",
    title: "Демонтаж старых окон",
    text: "Грамотно делают свою работу. Отдельный респект за скорость и качество. Отдельный респект",
    link: "/news/old_windows",
  },
  {
    id: Math.random().toString(),
    img: news2,
    data: "21.01.2024",
    title: "Окна пвх с шумоизоляцией",
    text: "Пластиковые окна с шумоизоляцией. Можно ли понизить уличный шум, проникающий через окно?",
    link: "/news/pvc_windows",
  },
];

function News() {
  return (
    <>
      <Helmet>
        <title>Новости | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - интересные и полезные новости в мире окон !"
        />
      </Helmet>
      <Layout>
        <div
          className="flex items-center justify-center py-[50px] lg:py-[100px]"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <span className="font-Montserrat font-bold text-[30px] lg:text-[35px] xl:text-[45px] text-dark">
            Новости
          </span>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[20px] mb-[60px]">
          {data?.length > 0 &&
            data.map((item, index) => (
              <div key={item.id} className="lg:col-span-1 text-dark">
                <div
                  style={{
                    boxShadow:
                      "0px 1px 3px 0px rgba(186, 186, 186, 0.1),0px 5px 5px 0px rgba(186, 186, 186, 0.09),0px 10px 6px 0px rgba(186, 186, 186, 0.05),0px 18px 7px 0px rgba(186, 186, 186, 0.01),0px 28px 8px 0px rgba(186, 186, 186, 0)",
                  }}
                  className="pb-[56px] rounded-md"
                  data-aos="fade-up"
                  data-aos-delay={400 + (index + 1) * 200}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[324px] object-cover"
                  />
                  <div className="px-[15px] lg:px-[35px] pt-[20px]">
                    <span className="px-[18px] py-[5px] rounded-md text-[#A8A1A1] bg-[#DFC38E47]">
                      {item.data}
                    </span>
                    <div className="pt-[14px]">
                      <span className="font-bold text-[20px] lg:text-[22px]">
                        {item.title}
                      </span>
                    </div>
                    <div>
                      <span className="text-[15px] lg:text-[17px]">
                        {item.text}
                      </span>
                    </div>
                    <Link to={item.link}>
                      <div className="mt-[37px]">
                        <span className="bg_linear_gradient text-[15px] lg:text-[17px]">
                          Подробнее
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Layout>

      {/* slider dark */}
      <SliderDark />

      {/* consultation */}
      <Consultation />
    </>
  );
}

export default News;
