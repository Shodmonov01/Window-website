<<<<<<< HEAD
import { memo, useEffect, useState } from "react";
import StepsImg1 from "../../../assets/Steps-img1.svg";
import StepsImg2 from "../../../assets/Steps-img3.svg";
import StepsImg3 from "../../../assets/Steps-img2.svg";
import car from "../../../assets/home/car.svg";
import StepMob1 from "../../../assets/Steps-img5.svg";
import StepMob2 from "../../../assets/Steps-img6.svg";
import StepMob3 from "../../../assets/Steps-img4.svg";

// million-ignore
function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  return (
    <section className="why-us bg-[#212121] pt-[40px] lg:pt-[80px] pb-[33px] lg:pb-[120px] px-5 md:px-32 relative">
      <div className="title text-center uppercase font-Montserrat font-bold flex items-center justify-center gap-3 flex-wrap text-[23px] lg:text-[30px] xl:text-[45px] ">
        {/* {"ПРОСТЫЕ ШАГИ ДЛЯ НАЧАЛА РАБОТЫ С НАМИ".split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        className=""
=======
import { memo } from "react";
import StepsImg1 from "../../../assets/Steps-img1.svg";
import StepsImg2 from "../../../assets/Steps-img2.svg";
import StepsImg3 from "../../../assets/Steps-img3.svg";
import rectangle from "../../../assets/regtangle.svg";
import rectangle2 from "../../../assets/regtangle2.svg";

// million-ignore
function Contact() {
    return (
        <section className="why-us bg-[#212121] pt-[80px] lg:pt-[101px] pb-[100px] lg:pb-[183px] px-5 md:px-32 relative">
            <img src={rectangle} alt="" className="absolute left-0 top-0" />
            <img src={rectangle2} alt="" className="absolute right-0 top-0 hidden lg:block" />
            <span className="title text-white text-center uppercase font-Montserrat font-bold flex items-center justify-center gap-3 flex-wrap text-[23px] lg:text-[30px] xl:text-[45px]">
            <span       className="title font-bold uppercase font-Montserrat"
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Оставьте заявку и вам перезвонит менеджер, который</span>
                {/* {"Оставьте заявку и вам перезвонит менеджер, который".split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                        data-aos="fade-right"
                        data-aos-delay={1000 + (index + 1) * 150}
                    >{item}</span>
                ))} */}
<<<<<<< HEAD
        <span
          // key={Math.random().toString()}
          className="bg_linear_gradient font-[700]"
          data-aos="fade-right"
          data-aos-delay={1000}
        >
          ПРОСТЫЕ ШАГИ ДЛЯ НАЧАЛА РАБОТЫ С НАМИ
        </span>
      </div>
      <div className="grid grid-cols-1 mt-8  lg:grid-cols-3 text-white text-center gap-4 ">
        {/* Mobile */}
        <div
          className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737] sm:"
          data-aos="fade-right"
          data-aos-delay={1000}
        >
          <img src={StepsImg1} alt="img" className="hidden lg:block" />
          <img src={StepMob3} alt="img" className="block lg:hidden" />

          <div className=" font_s name text-[18px] md:text-[25px] my-3 font-medium">
            Консультация и запись на замер
          </div>
          <div>
            <span
              onClick={() => setShowDetails(!showDetails)}
              className="bg_linear_gradient_txt font-[500] "
            >
              Подробнее
            </span>
            {showDetails && (
              <div className="font-thin text-[15px] lg:text-[17px]">
                Определим Ваши потребности и поможем выбрать соответствующую
                конструкцию, договоримся на удобное для Вас время для выезда
                нашего специалиста.
              </div>
            )}
          </div>
        </div>
        {/* Desktop */}
        {/* <div
          className="card rounded-[10px] h-auto p-10 sm:flex sm:flex-col sm:items-center max-xl:h-[375px] bg-[#373737] hidden sm:block"
          data-aos="fade-right"
          data-aos-delay={1000}
        >
          <img src={StepsImg1} alt="img" />
          <div className="name text-[18px] md:text-[25px] my-3 font-medium">
            Консультация и запись на замер
          </div>
          <div>
            <div className="font-thin text-[15px] lg:text-[17px]">
              Определим Ваши потребности и поможем выбрать соответствующую
              конструкцию, договоримся на удобное для Вас время для выезда
              нашего специалиста.
            </div>
          </div>
        </div> */}

        <div
          className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737] "
          data-aos="fade-up"
          data-aos-delay={1500}
        >
          <img
            src={StepsImg3}
            alt="img"
            className="w-[90px] md:w-[100px] hidden lg:block"
          />
          <img
            src={StepMob1}
            alt="img"
            className="w-[80px] md:w-[100px] block lg:hidden"
          />
          <div className="font_s name text-[18px] md:text-[25px] my-3 font-medium">
            Договор и оплата
          </div>
          <div>
            <span
              onClick={() => setShowDetails2(!showDetails2)}
              className="bg_linear_gradient_txt font-[500] "
            >
              Подробнее
            </span>
            {showDetails2 && (
              <div className="font-thin text-[15px] lg:text-[17px]">
                Подписание договора на адресе и внесение аванса.
              </div>
            )}
          </div>
        </div>
        {/* <div
          className="card rounded-[10px] h-auto p-10 sm:flex sm:flex-col sm:items-center max-xl:h-[375px] bg-[#373737] hidden sm:block "
          data-aos="fade-up"
          data-aos-delay={1500}
        >
          <img src={StepsImg3} alt="img" className="w-[80px] md:w-[100px]" />
          <div className="name text-[18px] md:text-[25px] my-3 font-medium">
            Договор и оплата
          </div>
          <div className="font-thin text-[15px] lg:text-[17px]">
            Подписание договора на адресе и внесение аванса.
          </div>
        </div> */}

        <div
          className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737] "
          data-aos="fade-left"
          data-aos-delay={2000}
        >
          <img
            src={StepsImg2}
            alt="img"
            className="h-[113px] w-[119px] hidden lg:block"
          />
          <img src={StepMob2} alt="img" className="block lg:hidden" />
          <div className="font_s name text-[18px] md:text-[25px] mb-3 mt-6 font-medium">
            Производство, доставка и монтаж
          </div>
          <div>
            <span
              onClick={() => setShowDetails3(!showDetails3)}
              className="bg_linear_gradient_txt font-[500] "
            >
              Подробнее
            </span>
            {showDetails3 && (
              <div className="font-thin text-[15px] lg:text-[17px]">
                Срок производства заказа зависит от типа, размера и количества
                изделий. Установка производится быстро, после выполнения работы
                мастера оставляют чистоту и порядок.
              </div>
            )}
          </div>
        </div>
        {/* <div
          className="card rounded-[10px] h-auto p-10 sm:flex sm:flex-col sm:items-center max-xl:h-[375px] bg-[#373737] hidden sm:block"
          data-aos="fade-left"
          data-aos-delay={2000}
        >
          <img src={car} alt="img" className="h-[97px] w-[119px] my-[7px]" />
          <div className="name text-[18px] md:text-[25px] my-3 font-medium">
            Производство, доставка и монтаж
          </div>
          <div className="font-thin text-[15px] lg:text-[17px]">
            Срок производства заказа зависит от типа, размера и количества
            изделий. Установка производится быстро, после выполнения работы
            мастера оставляют чистоту и порядок.
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default memo(Contact);
=======
            </span>
            <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 text-white text-center gap-4 ">
                <div
                    className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737]"
                    data-aos="fade-right"
                    data-aos-delay={1000}
                >
                    <img src={StepsImg1} alt="img" />
                    <div className="name text-[25px] tracking-wider my-3 font-semibold">
                        Объяснит
                    </div>
                    <div className="description fs-20">
                        Чем может отличсаться дешевое окно от других предложений ны рынке
                    </div>
                </div>
                <div
                    className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737]"
                    data-aos="fade-up"
                    data-aos-delay={1500}
                >
                    <img src={StepsImg2} alt="img" />
                    <div className="name text-[25px] tracking-wider my-3 font-semibold">
                        Ответит
                    </div>
                    <div className="description fs-20">
                        На все волнующие вас <br /> вопросы
                    </div>
                </div>
                <div
                    className="card rounded-[10px] h-auto lg:h-[340px] p-5 md:p-10 flex flex-col items-center bg-[#373737]"
                    data-aos="fade-left"
                    data-aos-delay={2000}
                >
                    <img src={StepsImg3} alt="img" className="w-[80px] md:w-[100px]" />
                    <div className="name text-[18px] md:text-[23px] tracking-wider my-3 font-semibold">
                        Подписания договора
                    </div>
                    <div className="description fs-20">
                        Перед началом работы необходимо подписать договор и внести
                        предоплату
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Contact);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
