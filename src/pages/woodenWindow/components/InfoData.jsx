import React, { memo, useState } from "react";
import check from "../../../assets/icon/check1.png";

function InfoData({ data }) {
  const [visible, setVisible] = useState(false);

  // open data
  const openInfoDataHandler = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="pb-[10px] lg:pb-[20px] text-center">
        <span
          onClick={openInfoDataHandler}
          className="bg_linear_gradient_txt cursor-pointer"
        >
          {visible ? "Закрыть назад" : "Подробнее"}
        </span>
      </div>

      {visible && (
        <div className="flex flex-col gap-[20px] w-full lg:w-[100%] text-[20px]">
          <span data-aos="fade-right" data-aos-delay={1000} className="lg:text-start text-center">
            {data.textTop}
          </span>
          <span data-aos="fade-right" data-aos-delay={1300} className="lg:text-start text-center">
            {data.textCenter}
          </span>
          {data.textBottom && (
            <span
              data-aos="fade-right"
              data-aos-delay={1600}
              className="flex flex-col gap-5"
            >
              {data.textBottom.split("<br />").map((item, index) => (
                <span className="flex flex-col lg:flex-row items-center gap-3">
                  {index !== 0 && index !== 1 && <img src={check} alt="" />}
                  <span className="text-center lg:text-start">{item}</span>
                </span>
              ))}
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default memo(InfoData);
