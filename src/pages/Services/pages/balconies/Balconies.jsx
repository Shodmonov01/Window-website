import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Consultation from "../../components/Consultation";
import Top5Materials from "./components/Top5Materials";
import BoxData from "./components/BoxData";
import Slider from "../../../../components/Slider";
import balcon1 from "../../../../assets/services/balcon/balcon (1).webp";
import balcon2 from "../../../../assets/services/balcon/balcon (2).webp";
import balcon3 from "../../../../assets/services/balcon/balcon (3).webp";
import balcon4 from "../../../../assets/services/balcon/balcon (4).webp";
import balcon5 from "../../../../assets/services/balcon/balcon (5).webp";
import balcon6 from "../../../../assets/services/balcon/balcon (6).webp";
import balcon7 from "../../../../assets/services/balcon/balcon (7).webp";
import balcon8 from "../../../../assets/services/balcon/balcon (8).webp";
import balcon9 from "../../../../assets/services/balcon/balcon (9).webp";
import balcon10 from "../../../../assets/services/balcon/balcon (10).webp";
import balcon11 from "../../../../assets/services/balcon/balcon (11).webp";
import balcon12 from "../../../../assets/services/balcon/balcon (12).webp";
import balcon13 from "../../../../assets/services/balcon/balcon (13).webp";
import balcon14 from "../../../../assets/services/balcon/balcon (14).webp";
import balcon15 from "../../../../assets/services/balcon/balcon (15).webp";

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
    number: "01",
    title: "Снаружи",
    text: `в этом способе промерзает только наружная часть в сторону вмонтированного утеплителя. При этом экономится внутреннее пространство и сохраняются несущие свойства стены. Однако, самостоятельно утеплять балкон снаружи опасно, необходимо воспользоваться услугами промышленных альпинистов`,
  },
  {
    id: Math.random().toString(),
    number: "02",
    title: "Изнутри",
    text: `самый распространенный метод утепления, который позволяет провести все работы самостоятельно. Только при этом уменьшается внутреннее пространство`,
  },
  {
    id: Math.random().toString(),
    number: "03",
    title: "С двух сторон",
    text: `совершенно нецелесообразный способ, который не улучшает теплоизоляционные свойства, но затраты увеличивает в несколько раз.`,
  },
];

const Balconies = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col-reverse lg:grid px-4 lg:pr-0 pt-8 lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-8 pt-[40px] text-center md:text-left px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px] lg:pr-0 ">
            <span
              className="max-w-2xl mb-[23px] md:mb-[44px] font-bold leading-none text-[23px] md:text-[40px] xl:text-[50px] uppercase items-center gap-3 justify-center lg:justify-start flex"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {"Утепление балконов".split(" ").map((item) => (
                <span key={Math.random().toString()}>{item}</span>
              ))}
            </span>

            <p
              className="max-w-[960px] mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              Современные балконы и лоджии уже не захламляют ненужными вещами, а
              стараются сделать из них дополнительное помещение. Вариантов на
              самом деле много: это может быть комната отдыха, игровая, кабинет
              и др. Все зависит от фантазии владельца балкона. Одним из
              недостатков такого помещения является низкая температура, особенно
              зимой. И поэтому, чтобы сделать из лоджии комнату, первым делом
              необходимо ее утеплить. Для этого стоит разобраться, какие
              материалы необходимы, и каким инструкциям следовать.
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

      <div className="bg-[#212121] mt-[80px] md:mt-[150px] px-1 lg:px-4 md:px-32 pt-[30px] lg:pt-[50px] lg:pt-[80px] cornerAnimation text-white">
        {/* <span className="text-[23px] lg:text-[30px] xl:text-[45px] -tracking-tighter uppercase font-bold text-white text-center flex items-center justify-center gap-3 flex-wrap">
          {"Существует 3 основных способа утепления балконов и лоджий".split(" ").map((item, index) => (
            <span
              key={Math.random().toString()}
              data-aos="fade-right"
              data-aos-delay={400 + (index + 1) * 100}
            >{item}</span>
          ))}
        </span> */}
        <span
          className="text-[23px] lg:text-[35px] xl:text-[45px] -tracking-tighter uppercase font-bold flex items-center justify-center bg_linear_gradient text-center"
          data-aos="fade-right"
          data-aos-delay={400}
        >
          Существует 3 основных способа утепления балконов и лоджий
        </span>
        <div
          className="grid grid-cols-1 mt-10 lg:mt-20 lg:grid-cols-3 text-white text-center gap-4"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          {box_data?.length > 0 &&
            box_data.map((item) => (
              <div
                key={item.id}
                className="card rounded-md h-auto p-6 flex flex-col items-center bg-[#373737]"
              >
                <h2 className="text-linear text-[40px] md:text-[45px] font-bold">
                  {item.number}
                </h2>
                <div className="name text-[16px] md:text-[18px] tracking-wider my-1 lg:my-3 font-semibold">
                  {item.title}
                </div>
                <div className="description text-sm md:text-[1rem] text-[#ffffffb2]">
                  {item.text}
                </div>
              </div>
            ))}
        </div>
        <div
          className="pt-[30px] pb-[50px]"
          // data-aos="fade-right"
          // data-aos-delay={600}
        >
          <p className="text-[15px] lg:text-[16px] text-center text-white">
            При утеплении балкона снаружи не всегда дело ограничивается
            заключением договора с промышленными альпинистами. Иногда требуется
            разрешение властей, особенно тогда, когда здание представляет
            архитектурную ценность. Поэтому данный способ выбирается довольно
            редко.
          </p>
        </div>
      </div>

      {/* top 5 matwerials */}
      <Top5Materials />

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
};

export default Balconies;
