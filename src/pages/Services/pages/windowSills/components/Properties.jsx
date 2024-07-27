import React, { memo } from "react";
import Layout from "../../../../../components/Layout";
const data = [
  {
    id: Math.random().toString(),
    number: "01",
    title: "Материал",
  },
  {
    id: Math.random().toString(),
    number: "02",
    title: "Размер",
  },
  {
    id: Math.random().toString(),
    number: "03",
    title: "Цвет",
  },
  {
    id: Math.random().toString(),
    number: "04",
    title: "Декор",
  },
];

// million-ignore
function Properties() {
  return (
    <Layout>
      <div>
        <span className="text-[23px] lg:text-[35px] xl:text-[45px] font-bold font-Montserrat text-center flex items-center justify-center uppercase">
          Наиболее значимыми характеристиками подоконника являются
        </span>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-[20px] mt-[40px] lg:mt-[80px]">
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="lg:col-span-2 font-bold text-white h-[175px] flex flex-col justify-center items-center gap-[25px] font-Montserrat py-[37px] px-[54px]"
              style={{
                boxShadow:
                  "0px 1px 3px 0px rgba(186, 186, 186, 0.1),0px 5px 5px 0px rgba(186, 186, 186, 0.09),0px 10px 6px 0px rgba(186, 186, 186, 0.05),0px 18px 7px 0px rgba(186, 186, 186, 0.01),0px 28px 8px 0px rgba(186, 186, 186, 0)",
                background: "#EADA86",
              }}
            >
              <span className="text-[35px] xl:text-[50px]">{item.number}</span>
              <span className="text-[20px] lg:text-[30px] -mt-[10px] text-[#404040]">
                {item.title}
              </span>
            </div>
          ))}
      </div>

      <div className="text-center font-medium text-[18px] mt-[40px] mb-[80px]">
        <span>
          Наша компания поможет Вам подобрать наилучший вариант и дизайнерское
          решение <br /> и множества цветов, материалов, структур, бюджетных и
          премиум подоконников.
        </span>
      </div>
    </Layout>
  );
}

export default memo(Properties);
