<<<<<<< HEAD
<<<<<<< HEAD
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import { getToastWarn } from "../../../services/option";
import Map from "../../../components/Map";
import heroList from "../../../assets/heroList.svg";
import vatsap from ".././../../assets/navbar/watsap_gold.svg";
import tlg from ".././../../assets/navbar/tlg_gold.svg";
import youtube from ".././../../assets/navbar/youtube_gold.svg";
import youtube_play from ".././../../assets/navbar/youtube_gold_center.svg";
import vk from ".././../../assets/navbar/vk_gold.svg";

// million-ignore
function AboutUs() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (phoneNumber?.length === 12) {
      navigate("/contact");
    } else getToastWarn("Поле заполнено не полностью.");
  };

  return (
    <section className="pt-[0px] xl:pt-[0px] pb-[0px] px-[20px] xl:px-[80px] 2xl:px-[120px] text-white -mt-[100px] lg:mt-[100px] relative z-50 bg-box">
      <div className="flex flex-wrap 2xl:flex-nowrap gap-2 lg:gap-4 items-start ">
        <div
          className="w-full lg:w-[58%]"
          data-aos="fade-right"
          data-aos-delay={1500}
        >
          <span className="text-[23px] font-Montserrat mt-[28px] lg:mt-20 mb-0 lg:text-[30px] xl:text-[45px] font-bold uppercase text-center md:text-left relative z-50 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
            {/* {"ОСтавьте заявку на остекление или позвоните нам".split(" ").map((item, index) => (
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input';
import { getToastWarn } from "../../../services/option";
import heroList from "../../../assets/heroList.svg";
import rectangle from "../../../assets/regtangle.svg";
import rectangle2 from "../../../assets/regtangle2.svg";

// million-ignore
function AboutUs() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState(null);
    const checkbox_ref = useRef();

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        if (phoneNumber?.length === 12) {
            if (checkbox_ref.current.checked) {
                navigate("/contact");
            }
            else getToastWarn("Согласие не дается.");
        }
        else getToastWarn("Поле заполнено не полностью.");
    }

    return (
        <section className="pt-[130px] xl:pt-[219px] pb-[98px] px-[20px] xl:px-[80px] 2xl:px-[120px] text-dark mt-[106px] relative z-50">
            <div className="flex flex-wrap 2xl:flex-nowrap gap-2 lg:gap-4 items-start">
                <div
                    className="w-full lg:w-[58%]"
                    data-aos="fade-right"
                    data-aos-delay={1500}
                >
                    <span className="text-[23px] font-Montserrat mt-20 mb-0 lg:text-[30px] xl:text-[45px] font-bold uppercase text-center md:text-left relative z-50 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                    <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >ОСтавьте заявку на остекление или позвоните нам</span>
                        {/* {"ОСтавьте заявку на остекление или позвоните нам".split(" ").map((item, index) => (
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                            <span
                                key={Math.random().toString()}
                                data-aos="fade-right"
                                data-aos-delay={500 + (index + 1) * 150}
                            >{item}</span>
                        ))} */}
<<<<<<< HEAD
<<<<<<< HEAD
            <span
              key={Math.random().toString()}
              className="bg_linear_gradient"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Оставьте заявку на остекление или позвоните нам
            </span>
          </span>
          <ul
            className="mt-4 lg:mt-8 relative z-50 text-[15px] lg:text-[16px] xl:text-[18px]"
            data-aos="fade-right"
            data-aos-delay={1500}
          >
            <li className="flex items-start gap-5 mb-4">
              <img src={heroList} alt="" className="mt-1" />
              По телефону зададим Вам несколько уточняющих вопросов
            </li>
            <li className="flex items-start gap-5 mb-4">
              <img src={heroList} alt="" className="mt-1" />
              Посчитаем предврадительную стоимость остекления
            </li>
            <li className="flex items-start gap-5 mb-4">
              <img src={heroList} alt="" className="mt-1" /> Согласуем удобное
              для Вас время и ответим на все интересующие вас вопросы
            </li>
            <li className="flex items-start gap-5 mb-4">
              <img src={heroList} alt="" className="mt-1" />
              Расскажем про основные этапы остекления
            </li>
          </ul>
          <div data-aos="fade-right" data-aos-delay={500}>
            <div className="mt-[35px] lg:mt-[44px] font-medium text-[15px] lg:text-[16px] xl:text-[18px] pb-[9px] text-start  lg:text-left relative z-50">
              <span className="lg:text-[#EADA86]">Ваш номер телефона</span>
            </div>
            <form
              className="max-w-screen-xl mx-auto lg:pr-24 mb-[15px] relative z-50"
              onSubmit={submitHandler}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PhoneInput
                  className={`phone h-[55px] md:h-[76px] px-1 bg-white rounded-[5px] text-[18px] md:text-[27px] border border-gray-300 font-[500] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-full selection:bg-blue-500 selection:text-white text-black flex items-center phoneInputHome`}
                  defaultCountry="ru"
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  placeholder="+7(___) __-__-__"
                  name="phone"
                  autoComplete="tel"
                />
                <button
                  className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full h-[55px] md:h-[76px]"
                  style={{ background: "rgb(234, 218, 134)" }}
                  type="submit"
                >
                  Связаться с нами
                </button>
              </div>
              <div className="flex gap-3 mt-4 items-start">
                <span className="flex items-center gap-2 flex-wrap lg:flex-nowrap text-[7px] lg:text-[14px]">
                  <span>Нажимая на кнопку вы соглашаетест с уловиями </span>
                  <a
                    href="#1"
                    className="underline decoration-slice text-[#EADA86]"
                  >
                    Политики Конфиденциональности
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-2 mt-6">
                <div className="">
                  <span className="text-[16px] lg:text-[18px] text-[#EADA86]">
                    Напишите нам, мы онлайн
                  </span>
                  <div className="flex flex-wrap justify-start gap-[16px] pt-[11px]">
                    <div className="flex flex-col lg:flex-row items-center gap-[20px]">
                      <a href="https://wa.me/79626841122" target="_blank">
                        <img src={vatsap} alt="" className="cursor-pointer" />
                      </a>
                      <a href="https://t.me/+79626841122" target="_blank">
                        <img src={tlg} alt="" className="cursor-pointer " />
                      </a>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-[20px]">
                      <span className="relative cursor-pointer">
                        <a
                          href="https://youtube.com/@elitplastspb?si=sdnnF9H11s42K0-l"
                          target="_blank"
                        >
                          <img src={youtube} alt="" />
                          <img
                            src={youtube_play}
                            className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                            alt=""
                          />
                        </a>
                      </span>
                      <a href="https://vk.com/elitplastspb" target="_blank">
                        <img src={vk} alt="" className="cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] lg:text-[18px] text-[#EADA86]">
                    Или позвоните
                  </span>
                  <p className="font-thin">Ежедневно с <br /> 09:00 до 00:00</p>
                  <span className="text-[16px] lg:text-[18px] font-medium">
                    {/* +7(962) 684-11-22 */}8 (812) 984-11-22
                  </span>
                  <span className="text-[16px] lg:text-[18px] font-medium">
                    8 (962) 684-11-22
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* map */}
        <Map />
      </div>
    </section>
  );
}

export default memo(AboutUs);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                        <img src={rectangle} alt="" className="absolute -top-[140px] xl:-top-[200px] -left-[20px] xl:-left-[80px] 2xl:-left-[120px]" />
                    </span>
                    <ul
                        className="mt-8 relative z-50"
                        data-aos="fade-right"
                        data-aos-delay={1500}
                    >
                        <li className="flex items-start gap-5 text-[16px] lg:text-[18px] xl:text-[21px] mb-4">
                            <img src={heroList} alt="" className="mt-1" />
                            По телефону зададим Вам несколько уточняющих вопросов
                        </li>
                        <li className="flex items-start gap-5 text-[16px] lg:text-[18px] xl:text-[21px] mb-4">
                            <img src={heroList} alt="" className="mt-1" />
                            Посчитаем предврадительную стоимость остекления
                        </li>
                        <li className="flex items-start gap-5 text-[16px] lg:text-[18px] xl:text-[21px] mb-4">
                            <img src={heroList} alt="" className="mt-1" /> Согласуем удобное
                            для Вас время и ответим на все интересующие вас вопросы
                        </li>
                        <li className="flex items-start gap-5 text-[16px] lg:text-[18px] xl:text-[21px] mb-4">
                            <img src={heroList} alt="" className="mt-1" />
                            Расскажем про основные этапы остекления
                        </li>
                    </ul>
                    <div
                        data-aos="fade-right"
                        data-aos-delay={500}
                    >
                        <div className="mt-[44px] font-medium text-[16px] lg:etxt-[17px] xl:text-[19px] text-center lg:text-left relative z-50">
                            <span>Ваш номер телефона</span>
                        </div>
                        <form className="max-w-screen-xl mx-auto lg:pr-24 mb-[15px] relative z-50" onSubmit={submitHandler}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <PhoneInput
                                    className={`phone h-[55px] md:h-[76px] px-1 bg-white rounded-[5px] text-[18px] md:text-[27px] border border-gray-300 font-[500] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-full selection:bg-blue-500 selection:text-white`}
                                    placeholder='+7(___) __-__-__'
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                                <button
                                    className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full h-[55px] md:h-[76px]"
                                    style={{
                                        background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                                    }}
                                    type="submit"
                                >
                                    Связаться с нами
                                </button>
                            </div>
                            <div className="flex gap-3 mt-4 items-start">
                                <input type="checkbox" name="" id="" className="check w-6 h-6 lg:w-5 lg:h-5" ref={checkbox_ref} />
                                <span className="flex items-center gap-2 md:flex-wrap flex-nowrap">
                                    <span>Нажимая на кнопку вы соглашаетест с уловиями{" "}</span>
                                    <a href="#1" className="underline decoration-slice text-[#CEA654]">
                                        Политики Конфиденциональности
                                    </a>
                                </span>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
                                <div className="">
                                    <h2 className="text-[16px] font-semibold lg:text-[18px] text-dark">
                                        Напишите нам, мы онлайн
                                    </h2>
                                </div>
                                <div className=" text-dark">
                                    <h2 className="text-[18px] font-semibold lg:text-[20px]">
                                        Или позвоните
                                    </h2>
                                    <p>ПН-Сб с 10:00 до 19:00</p>
                                    <p>Сб-Вс с 10:00 до 17:00</p>
                                    <h3 className="text-[16px] lg:text-[18px] font-semibold">
                                        +79626841122
                                    </h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className="w-full lg:w-[38%] py-[53px] relative"
                    data-aos="fade-left"
                    data-aos-delay={2000}
                >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                        <a href="https://yandex.ru/maps/org/elitplast/212916788228/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>
                            ЭлитПласт</a>
                        <a href="https://yandex.ru/maps/2/saint-petersburg/category/windows/184107727/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
                            Окна в Санкт‑Петербурге
                        </a>
                        <a href="https://yandex.ru/maps/2/saint-petersburg/category/doors/184107677/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }}>
                            Двери в Санкт‑Петербурге
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/org/elitplast/212916788228/?ll=30.448765%2C59.942696&z=16"
                            width="100%"
                            height="400"
                            // frameBorder="1"
                            allowFullScreen={true}
                            style={{ position: "relative" }}
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <img src={rectangle2} alt="" className="hidden lg:block absolute lg:bottom-[200px] right-0 -z-10" />
        </section>
    )
}

<<<<<<< HEAD
export default memo(AboutUs);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(AboutUs);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
