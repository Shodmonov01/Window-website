import React, { memo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "react-international-phone";
import { getToast, getToastWarn } from "../services/option";

function ConsultationModal(props) {
  const { bg = false } = props;
  const [phoneNumber, setPhoneNumber] = useState("");
  const name_ref = useRef();

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (name_ref.current?.value?.length > 0 && phoneNumber?.length === 12) {
      // send email
      let templateParams = {
        from_name: name_ref.current.value,
        message:
          "Меня зовут " +
          name_ref.current.value +
          ". Мой номер телефона: " +
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
    } else getToastWarn("Поле заполнено не полностью.");
  };

  return (
    <div style={{ fontStyle: "normal" }} className="text-white">
      {/* close modal icon */}
      <span
        className="absolute top-[18px] right-[10px] lg:right-[20px] cursor-pointer"
        onClick={props.onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 25 25"
          fill="null"
        >
          <path
            d="M22.7201 22.7045L12.3601 12.3523M12.3601 12.3523L2 2M12.3601 12.3523L22.7202 2M12.3601 12.3523L2 22.7046"
            stroke="black"
            strokeWidth="3.14519"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* content */}
      <div className={`overflow-hidden ${bg && "bg-box pt-[80px] text-dark"}`}>
        <div
          className={`${
            bg ? "bg-dark" : "bg-[#e6e4e4]"
          } rounded-[10px] text-center py-12`}
          style={{
            boxShadow: "4px 4px 25px -9px rgba(0, 0, 0, 0.20)",
          }}
        >
          <h2 className="text-[22px] font-Montserrat font-extrabold md:text-[28px] flex items-center gap-3 flex-wrap justify-center">
            <span
              className={`${bg ? "bg_linear_gradient_txt" : "text-[#2E303D]"}`}
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </span>
          </h2>
          <p className="text-[14px] md:text-[16px] mb-[30px] lg:mb-[20px] text-[#2E303DB8]">
            Оставьте заявку и в ближайшее время мы с <br /> Вами свяжемся
          </p>
          <form
            className="flex flex-col items-center justify-center w-full px-4"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col items-start w-full md:w-auto">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
                className="text-black input w-full lg:w-[434px] px-4 rounded-md h-[45px] md:h-[52px] outline-none border border border-blue-gray-100 bg-transparent"
                ref={name_ref}
                required
                autoComplete="true"
              />
            </div>
            <div className="flex flex-col items-start mt-5 w-full md:w-auto">
              <input
                className=" input w-full lg:w-[434px] px-4 rounded-md h-[45px] md:h-[52px] outline-none border border border-blue-gray-100 bg-transparent"
                // defaultCountry="ru"
                // value={phoneNumber}
                // onChange={(phone) => setPhoneNumber(phone)}
                placeholder="+7(___) __-__-__"
                style={{
                  color: bg ? "white" : "black",
                }}
                name="phone"
                // autoComplete="tel"
              />
            </div>
            <button
              className="button mt-5 tracking-[1.62px] h-[50px] lg:h-[56px] w-full md:w-[430px] uppercase text-[16px] font-bold"
              type="submit"
              style={{
                background: "#EADA86",
              }}
            >
              Получить консультацию
            </button>
            <p
              className={`mt-6 text-[16px] ${
                bg ? "text-white" : "text-[#2E303DB8]"
              }`}
            >
              Нажимая кнопку, вы даете согласие на <br />
              <a href="#1" className="underline">
                обработку персональных данных
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(ConsultationModal);
