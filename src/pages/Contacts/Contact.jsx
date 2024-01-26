import { useState } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import { IoSend } from "react-icons/io5";
import gif from '../../assets/home/kon.gif';
import Form from "../../components/Form";
import { getToast, getToastWarn } from "../../services/option";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);

  // submit handler
  const submitHandler = e => {
    e.preventDefault();

    if (phoneNumber?.length === 12) {
      // send email
      let templateParams = {
        from_name: "Без имени",
        message: "Мой номер телефона: " + phoneNumber
      }
      emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          getToast("Ваша информация успешно отправлена.");
        }, function (error) {
          console.log('FAILED...', error);
          getToastWarn("Произошла ошибка.");
        });
    } else getToastWarn("Номер телефона не указан.");
  }

  return (
    <div>
      <div
        className="bg-[#212121] mt-20 p-6 md:p-14 text-white relative"
        data-aos="fade-down-left"
        data-aos-duration="700"
      >
        <div className="max-w-screen-xl px-4 mx-auto text-center md:text-left">
          <h2
            className="text-[23px] md:text-[45px] font-bold uppercase"
            data-aos="zoom"
            data-aos-duration={1500}
          >
            Контакты
          </h2>
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <h3 className="mt-6 md:mt-0 text-[23px] md:text-[27px] tracking-widest uppercase font-bold">
                Телефон
              </h3>
              <ul>
                <li>
                  <a href="">8 (812) 984-11-22</a>
                </li>
                <li>
                  <a href="">8 (962) 684-11-22</a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <h3 className="mt-6 md:mt-0 text-[23px] md:text-[27px] tracking-widest uppercase font-bold">
                Адресс
              </h3>
              <ul>
                <li>
                  <a href="">Бокситогорская ул, 2, Санкт-Петербург</a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={1100}
            >
              <h3 className="mt-6 md:mt-0 text-[23px] md:text-[27px] tracking-widest uppercase font-bold">
                Почта
              </h3>
              <ul>
                <li>
                  <a href="" className="underline uppercase line-clamp-none">
                    elitplast.spb@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={1400}
            >
              <h3 className=" mt-6 md:mt-0 text-[22px] mb-2 md:text-[27px] tracking-widest uppercase font-bold">
                Перезвоните мне
              </h3>
              <form
                onSubmit={submitHandler}
                className=" flex justify-center md:gap-2 items-center w-full"
              >
                <PhoneInput
                  className={`phone_input phone_input_1 h-[50px] md:h-[60px] px-6 placeholder:text-[#ffffff99] bg-[#e8e8ed33] rounded-[5px] text-sm md:text-[20px] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-[220px]`}
                  placeholder='+7(___) __-__-__'
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
                <button
                  className="bg-[#404040] px-4 rounded h-[50px] md:h-[60px]"
                  type="submit"
                >
                  <IoSend className="text-[23px]" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <img src={gif} alt="" className="absolute top-0 right-0 bottom-0 hidden md:block -z-50" />
        <img src={gif} alt="" className="absolute top-0 left-0 bottom-0 hidden md:block" />
      </div>

      {/* map */}
      <div
        data-aos="fade-up"
        data-aos-delay={500}
        className="my-[41px] w-full"
      >
        <div className="w-full px-[20px] md:px-[60px] lg:px-[136px]" style={{ position: "relative", overflow: "hidden" }}>
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

      {/* form */}
      <Form />
    </div>
  );
};

export default Contact;
