import { memo } from "react";
import image1 from "../../../assets/home/1.svg";
import image2 from "../../../assets/home/2.svg";
import image3 from "../../../assets/home/3.svg";
import image4 from "../../../assets/home/4.svg";
import image5 from "../../../assets/home/5.svg";
import image6 from "../../../assets/home/6.svg";
<<<<<<< HEAD
const data = [
  {
    row: [
      {
        id: Math.random().toString(),
        imgSrc: image1,
        title: "Гарантия",
        textTop: "Предоставляем до 25 лет на ",
        textBottom: "конструкции и до 10 лет на монтаж",
      },
      {
        id: Math.random().toString(),
        imgSrc: image2,
        title: "Изготовим за 7 дней",
        textTop: "Привезем и установим до 3 дней. ",
        textBottom: "",
      },
    ],
  },
  {
    row: [
      {
        id: Math.random().toString(),
        imgSrc: image3,
        title: "Опыт",
        textTop: "Изготавливаем и устанавливаем ",
        textBottom: "светопрозрачные конструкции более 20 лет",
      },
      {
        id: Math.random().toString(),
        imgSrc: image4,
        title: "Без наценки",
        textTop: "Собственный завод по изготовлению ",
        textBottom: "окон в Санкт-Петербурге",
      },
    ],
  },
  {
    row: [
      {
        id: Math.random().toString(),
        imgSrc: image5,
        title: "Качество",
        textTop: "Немецкие окна из ПВХ профиля",
        textBottom: "REHAU",
      },
      {
        id: Math.random().toString(),
        imgSrc: image6,
        title: "Сложные проекты",
        textTop: "Выполняем остекление зимних",
        textBottom: "садов, фасадов, коттеджей",
      },
    ],
  },
=======
import image7 from "../../../assets/home/7.svg";
import image8 from "../../../assets/home/8.svg";
const data = [
    {
        row: [
            {
                id: Math.random().toString(),
                imgSrc: image1,
                title: "Гарантия",
                textTop: "Предоставляем 3 года гарантии на",
                textBottom: "конструкции и 5 лет на установку",
            },
            {
                id: Math.random().toString(),
                imgSrc: image2,
                title: "Сделаем за 5 дней",
                textTop: "Предоставляем 3 года гарантии на ",
                textBottom: "конструкции и 5 лет на установку",
            },
        ],
    },
    {
        row: [
            {
                id: Math.random().toString(),
                imgSrc: image3,
                title: "Опыт",
                textTop: "Изготавливаем и устанавливаем ",
                textBottom: "окна уже 20 лет",
            },
            {
                id: Math.random().toString(),
                imgSrc: image4,
                title: "Без наценки",
                textTop: "Собственный завод по изготовлению ",
                textBottom: "окон в Санкт-Петербурге",
            },
        ],
    },
    {
        row: [
            {
                id: Math.random().toString(),
                imgSrc: image5,
                title: "Качество",
                textTop: "Немецкие окна из ПВХ профиля",
                textBottom: "REHAU",
            },
            {
                id: Math.random().toString(),
                imgSrc: image6,
                title: "Сложные проекты",
                textTop: "Выполняем остекление зимних",
                textBottom: "садов, фасадов, коттеджей",
            },
        ],
    },
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
];

// million-ignore
function About() {
<<<<<<< HEAD
  return (
    <section
      className="text-white why-us bg-[#212121] px-[10px] md:px-[40px] lg:px-[80px] xl:px-[120px] relative pb-[33px] lg:pb-[100px]"
      style={{
        boxShadow:
          "0px 3px 6px 0px rgba(199, 199, 199, 0.10), 0px 10px 10px 0px rgba(199, 199, 199, 0.09), 0px 23px 14px 0px rgba(199, 199, 199, 0.05), 0px 41px 17px 0px rgba(199, 199, 199, 0.01), 0px 65px 18px 0px rgba(199, 199, 199, 0.00)",
      }}
    >
      <h2
        className="title text-center flex items-center justify-center gap-3 flex-wrap text-[35px] lg:text-[45px] xl:text-[50px] pt-8 pb-[18px] lg:py-[40px] xl:py-[59px]"
        style={{
          color:
            "linear-gradient(rgba(223, 195, 142, 1), rgba(206, 166, 84, 1))",
        }}
      >
        <span
          data-aos="fade-right"
          data-aos-delay={500}
          className="bg_linear_gradient font-bold uppercase "
        >
          Почему мы?
        </span>
      </h2>
      <div
        className="grid lg:grid-cols-1 xl:grid-cols-2 pt-[59px] pb-[59px] rounded-[15px] px-[50px] lg:px-[100px] xl:px-[100px] gap-[35px] lg:gap-[81px]"
        style={{
          background:
            "linear-gradient(98deg, rgba(217, 217, 217, 0.01) 0.44%, rgba(217, 217, 217, 0.00) 100.28%)",
          backdropFilter: "blur(3.5px)",
          border: "1px solid #FFF",
        }}
      >
        {data?.length > 0 &&
          data.map((item) =>
            item.row.map((elem, index) => (
              <div
                key={elem.id}
                className="flex items-center flex-col lg:flex-row gap-[14px] lg:gap-[18px]  sm:flex-nowrap justify-center sm:justify-normal"
                data-aos="fade-right"
                data-aos-delay={500 + (index + 1) * 100}
              >
                <img
                  src={elem.imgSrc}
                  alt=""
                  className="w-[72px] lg:w-[102px] h-[70px] lg:h-[100px]"
                />
                <div className="flex flex-col">
                  <span
                    className="text-[18px] lg:text-[20px] xl:text-[27px] font-semibold text-center md:text-left"
                    style={{ fontStyle: "normal" }}
                  >
                    {elem.title}
                  </span>
                  <div className="flex flex-col text-[14px] lg:text-[17px] text-center md:text-left font-thin">
                    <span className="">{elem.textTop}</span>
                    <span className="">{elem.textBottom}</span>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </section>
  );
}

export default memo(About);
=======
    return (
        <section className="text-white why-us bg-[#212121] px-[10px] md:px-[40px] lg:px-[80px] xl:px-[120px] relative pb-[80px] lg:pb-[120px] xl:pb-[152px]"
            style={{
                boxShadow: "0px 3px 6px 0px rgba(199, 199, 199, 0.10), 0px 10px 10px 0px rgba(199, 199, 199, 0.09), 0px 23px 14px 0px rgba(199, 199, 199, 0.05), 0px 41px 17px 0px rgba(199, 199, 199, 0.01), 0px 65px 18px 0px rgba(199, 199, 199, 0.00)"
            }}
        >
            <img src={image8} alt="" className="absolute left-0 top-[10px] h-[250px] lg:h-[350x] xl:h-[500px]" />
            <img src={image7} alt="" className="absolute right-0 bottom-0 hidden xl:block" />
            <h2 className="title text-center flex items-center justify-center gap-3 flex-wrap text-[40px] lg:text-[45px] xl:text-[50px] pt-[30px] lg:pt-[60px] xl:pt-[83px] pb-[15px] lg:pb-[36px] xl:pb-[59px]">
                <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Почему мы?</span>
                {/* {"Почему мы?".split(" ").map((item, index) => (
                ))} */}
            </h2>
            <div
                className="grid lg:grid-cols-1 xl:grid-cols-2 pt-[59px] pb-[89px] rounded-[15px] px-[50px] lg:px-[100px] xl:px-[100px] gap-[81px]"
                style={{
                    background: "linear-gradient(98deg, rgba(217, 217, 217, 0.01) 0.44%, rgba(217, 217, 217, 0.00) 100.28%)",
                    backdropFilter: "blur(3.5px)",
                    border: "1px solid #FFF",
                }}
            >
                {data?.length > 0 && data.map(item => (
                    item.row.map((elem, index) => (
                        <div
                            key={elem.id}
                            className="flex items-center gap-[14px] lg:gap-[18px] flex-wrap sm:flex-nowrap justify-center sm:justify-normal"
                            data-aos="fade-right"
                            data-aos-delay={500 + (index + 1) * 100}
                        >
                            <img src={elem.imgSrc} alt="" className="w-[72px] lg:w-[102px] h-[70px] lg:h-[100px]" />
                            <div className="flex flex-col">
                                <span className="text-[18px] lg:text-[20px] xl:text-[27px] font-medium text-center md:text-left" style={{ fontStyle: "normal" }}>{elem.title}</span>
                                <div className="flex flex-col text-[14px] lg:text-[17px] text-center md:text-left">
                                    <span className="">{elem.textTop}</span>
                                    <span className="">{elem.textBottom}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </section >
    )
}

export default memo(About);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
