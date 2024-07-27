<<<<<<< HEAD
import { memo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "react-international-phone";
import { getToast, getToastWarn } from "../services/option";
import konGif from "../assets/home/kon.gif";

// million-ignore
function FreeConsultation() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const name_ref = useRef();

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (name_ref.current?.value?.length > 0 > 0 && phoneNumber?.length === 12) {
      // send email
      let templateParams = {
        from_name: name_ref.current.value,
        message:
          "Меня зовут " +
          name_ref.current.value +
          ". Мой телефон номер: " +
          phoneNumber,
      };
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          function (response) {
            // console.log('SUCCESS!', response.status, response.text);
            getToast("Ваша информация успешно отправлена.");
          },
          function (error) {
            console.log("FAILED...", error);
            getToastWarn("Произошла ошибка.");
          }
        );
    } else getToastWarn("Поля не заполнены.");
  };

  return (
    <div
      className="rounded-2xl mx-4 md:mx-20 lg:mx-32 bg-[#212121] py-5 lg:py-14 p-4 mt-[20px] relative"
      data-aos="fade-up"
      data-aos-delay={3000}
    >
      <h2 className="text-white font-Montserrat text-[23px] md:text-[38px] uppercase font-bold text-center bg_linear_gradient">
        Бесплатная консультация
      </h2>
      <form
        className="lg:px-16 xl:px-32 mt-5 mb-10 lg:my-12 w-full 2xl:max-w-screen-2xl mx-auto text-white relative z-20"
        onSubmit={submitHandler}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Ваше Имя"
            className="bg-[#E8E8ED33] px-6 h-[55px] md:h-[74px] rounded-md focus:outline-none"
            ref={name_ref}
            required
            autoComplete="true"
          />
          <PhoneInput
            className={`phone_input phone_input_1 h-[55px] md:h-[74px] px-6 pl-2 placeholder:text-[#ffffff99] bg-[#e8e8ed33] rounded-[5px] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none flex items-center phoneInputContact`}
            defaultCountry="ru"
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
            placeholder="+7(___)___-__-__"
            name="phone"
            autoComplete="tel"
          />
          <div className="relative">
            <button
              className="text-white text-[14px] md:text-[17px] rounded-md font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full h-[55px] md:h-[74px]"
              type="submit"
              style={{
                background: "#EADA86",
              }}
            >
              Заказать звонок
            </button>
            <p className="absolute left-0 md:max-w-[400px] w-full mt-3 text-[10px] text-center lg:text-left text-white/80">
              *Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных.
            </p>
          </div>
        </div>
      </form>

      <img
        src={konGif}
        alt=""
        className="absolute lg:top-0 lg:bottom-0 lg:right-0 hidden lg:block"
      />
      <img
        src={konGif}
        alt=""
        className="absolute lg:top-0 lg:bottom-0 lg:left-0 hidden lg:block"
      />
    </div>
  );
}

export default memo(FreeConsultation);
=======
import { memo, useRef } from 'react';
import emailjs from '@emailjs/browser';
import konGif from '../assets/home/kon.gif';
import { getToast, getToastWarn } from '../services/option';

// million-ignore
function FreeConsultation() {
    const name_ref = useRef();
    const email_ref = useRef();

    // submit handler
    const submitHandler = e => {
        e.preventDefault();
        if (name_ref.current?.value?.length > 0 > 0 && email_ref.current?.value?.length > 0) {
            // send email
            let templateParams = {
                from_name: name_ref.current.value,
                message: "Меня зовут " + name_ref.current.value + ". Мой адрес электронной почты: " + email_ref.current.value
            }
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    getToast("Ваша информация успешно отправлена.");
                }, function (error) {
                    console.log('FAILED...', error);
                    getToastWarn("Произошла ошибка.");
                });
        } else getToastWarn("Поля не заполнены.");
    }

    return (
        <div
            className="rounded-2xl mx-4 md:mx-20 lg:mx-32 bg-[#212121] py-14 p-4 mt-[20px] relative"
            data-aos="fade-up"
            data-aos-delay={3000}
        >
            <h2 className="text-white font-Montserrat text-[23px] md:text-[38px] uppercase font-bold text-center">
                Бесплатная консультация
            </h2>
            <form className="lg:px-16 xl:px-32 my-12 w-full 2xl:max-w-screen-2xl mx-auto text-white relative z-20" onSubmit={submitHandler}>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <input
                        type="text"
                        placeholder="Ваше Имя"
                        className="bg-[#E8E8ED33] px-6 h-[55px] md:h-[74px] rounded-md"
                        ref={name_ref}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Ваш E-mail"
                        className="bg-[#E8E8ED33] px-6 h-[55px] md:h-[74px] rounded-md"
                        required
                        ref={email_ref}
                    />
                    <div className='relative'>
                        <button
                            className="button text-[14px] md:text-[17px] rounded-md font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full h-[55px] md:h-[74px]"
                            type='submit'
                            style={{
                                background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                            }}
                        >
                            Отправить
                        </button>
                        <p className="absolute left-0 md:max-w-[400px] w-full mt-3 text-white/80">
                            *Нажимая на кнопку, вы даете согласие на обработку своих
                            персональных данных.
                        </p>
                    </div>
                </div>
            </form>

            <img src={konGif} alt="" className='absolute top-0 bottom-0 right-0' />
            <img src={konGif} alt="" className='absolute top-0 bottom-0 left-0' />
        </div>
    )
}

export default memo(FreeConsultation);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
