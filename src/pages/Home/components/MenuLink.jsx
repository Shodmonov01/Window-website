import { memo } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import metal from "../../../assets/home/alyumin.png";
import derevo from "../../../assets/home/derevo.png";
import bezramniye from "../../../assets/home/bezramniye.png";
import alyumin from "../../../assets/home/alyumin2.png";
const data = [
  {
    id: Math.random().toString(),
    link: "/category/plastic_window",
    imgSrc: metal,
    text: "Металлопластиковые изделия",
  },
  {
    id: Math.random().toString(),
    link: "/category/aluminum_window",
    imgSrc: alyumin,
    text: "Алюминиевые изделия",
  },
  {
    id: Math.random().toString(),
    link: "/category/frameless_glazing",
    imgSrc: bezramniye,
    text: "Безрамные изделия",
  },
  {
    id: Math.random().toString(),
    link: "/category/wooden_window",
    imgSrc: derevo,
    text: "Деревянные изделия",
  },
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import cardImg_1 from "../../../assets/image 1 (5).png";
import cardImg_2 from "../../../assets/image 1 (3).png";
import cardImg_3 from "../../../assets/image 1 (4).png";
import cardImg_4 from "../../../assets/image 7.png";
const data = [
    {
        id: Math.random().toString(),
        link: "/category/plastic_window",
        imgSrc: cardImg_1,
        text: "Пластиковые окна"
    },
    {
        id: Math.random().toString(),
        link: "/category/wooden_window",
        imgSrc: cardImg_2,
        text: "Деревянные окна"
    },
    {
        id: Math.random().toString(),
        link: "/category/aluminum_window",
        imgSrc: cardImg_3,
        text: "Алюминиевые окна"
    },
    {
        id: Math.random().toString(),
        link: "/category/frameless_glazing",
        imgSrc: cardImg_4,
        text: "Безрамное холодное остекление"
    },
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
];

// million-ignore
function MenuLink() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div
      className="grid uppercase py-[46px] lg:py-24 grid-cols-2 gap-4 px-[10px] md:px-20 lg:px-32"
      style={{ fontStyle: "normal" }}
    >
      {data?.length > 0 &&
        data.map((item, index) => (
          <Link key={item.id} to={item.link}>
            <div
              className="rounded-lg bg-transparent h-[250px] lg:h-[313px] flex justify-center gap-4 flex-col items-center shadow-md  font-medium relative"
              data-aos="fade-right"
              data-aos-delay={500 + (index + 1) * 100}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className=" object-cover rounded-lg w-full h-[313px]"
              />
              <div className="padding_sm text-white font-[500] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[27px] text-center absolute bottom-[25px] lg:bottom-[28px] right-0 left-0 font-Montserrat">
                {item.text}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default memo(MenuLink);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

    return (
        <div className="grid uppercase py-32 grid-cols-2 gap-4 md:px-20 lg:px-32" style={{ fontStyle: "normal" }}>
            {data?.length > 0 && data.map((item, index) => (
                <Link key={item.id} to={item.link}>
                    <div
                        className="rounded-lg h-[313px] flex justify-center gap-4 flex-col items-center shadow-md font-Montserrat font-medium"
                        data-aos="fade-right"
                        data-aos-delay={500 + (index + 1) * 100}
                    >
                        <img src={item.imgSrc} alt="img" className="h-[200px] lg:h-[220px]" />
                        <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[27px] text-center">
                            {item.text}
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

<<<<<<< HEAD
export default memo(MenuLink);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(MenuLink);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
