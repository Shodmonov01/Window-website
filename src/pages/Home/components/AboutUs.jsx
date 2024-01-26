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
                            <span
                                key={Math.random().toString()}
                                data-aos="fade-right"
                                data-aos-delay={500 + (index + 1) * 150}
                            >{item}</span>
                        ))} */}
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

export default memo(AboutUs);