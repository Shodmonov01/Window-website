import React, { memo, useRef } from "react";
import emailjs from "@emailjs/browser";
import { getToast, getToastWarn } from "../../../services/option";

function Consultation() {
  const name_ref = useRef();
  const email_ref = useRef();

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name_ref.current?.value?.length > 0 &&
      email_ref.current?.value?.length > 0
    ) {
      // send email
      let templateParams = {
        from_name: name_ref.current.value,
        message:
          "Меня зовут " +
          name_ref.current.value +
          ". Мой адрес электронной почты: " +
          email_ref.current.value,
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
            console.log("SUCCESS!", response.status, response.text);
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
    <div className=" lg:mt-10 lg:py-0 px-[10px] lg:px-0  lg:bg-transparent ">
      <div
        className="shadow-lg w-[96%] lg:w-[90%] m-auto pb-[80px] md:pb-93px pt-[40px] md:pt-[53px] rounded-md bg-bg_color "
        data-aos="fade-up"
        data-aos-delay={500}
      >
        <h2 className="text-[23px] md:text-[38px] -tracking-tighter uppercase font-Montserrat  font-bold text-center ">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </h2>
        <form
          className="max-w-screen-xl mx-auto px-4 my-14"
          onSubmit={submitHandler}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Ваше Имя"
              className="bg-[#E8E8ED33] border border-box/50 px-6 h-[65px] rounded-md focus:outline-none text-box"
              ref={name_ref}
              name="user_name"
              id="user_name_id"
              autoComplete="true"
            />
            <input
              type="email"
              placeholder="Ваш E-mail"
              className="bg-[#E8E8ED33] border border-box/50 px-6 h-[65px] rounded-md focus:outline-none text-box"
              ref={email_ref}
              name="user_email"
              id="user_email_id"
              autoComplete="true"
            />
            <div className="relative">
              <button
                className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full md:w-[300px] h-[55px] md:h-[65px]"
                type="submit"
                style={{
                  background: "#EADA86",
                }}
              >
                Отправить
              </button>
              <p className="absolute text-[10px] text-center lg:text-start left-0 md:max-w-[400px] w-full mt-3 text-box">
                *Нажимая на кнопку, вы даете согласие на обработку своих
                персональных данных.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(Consultation);
