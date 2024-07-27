import React, { memo, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../../../components/Layout";
import { getToast, getToastWarn } from "../../../services/option";
import check from "../../../assets/icon/check1.png";

function Order() {
  const input_ref1 = useRef();
  const input_ref2 = useRef();
  const input_ref3 = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      input_ref1.current?.value?.length > 0 &&
      input_ref2.current?.value?.length > 0 &&
      input_ref3.current?.value?.length > 0
    ) {
      // send email
      let templateParams = {
        from_name: "Клиент",
        message:
          "Моя информация: " +
          "ФИО плательщика: " +
          input_ref1.current.value +
          ", ОГРН: " +
          input_ref2.current.value +
          ", ИНН: " +
          input_ref3.current.value,
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
    <Layout>
      <div className="text-center my-[50px] mb-[40px] lg:mt-[100px] lg:mb-[50px]">
        {/* <span className="font-bold font-Montserrat text-[30px] text-dark lg:text-[35px] xl:text-[45px]">
          Оплатить заказ
        </span> */}
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[50px] items-center">
        <div className="lg:col-span-1">
          <div className="ml-[70px]">
            <p className="uppercase font-Montserrat font-bold text-[45px]">
              онлайн оплата вашего <br /> заказа
            </p>
            <p className="text-black/30">
              Введите простые данные, чтобы проверить информацию о вашем заказе.
            </p>
          </div>
          <form
            style={{
              boxShadow:
                "0px 1px 3px 0px rgba(186, 186, 186, 0.1),0px 5px 5px 0px rgba(186, 186, 186, 0.09),0px 10px 6px 0px rgba(186, 186, 186, 0.05),0px 18px 7px 0px rgba(186, 186, 186, 0.01),0px 28px 8px 0px rgba(186, 186, 186, 0)",
            }}
            className="pt-[20px] lg:pt-[47px] pb-[40px] lg:pb-[72px] px-[10px] lg:px-[75px]"
            // onSubmit={submitHandler}
            onSubmit={(e) => {
              e.preventDefault();
              pay(e.target);
              return false;
            }}
          >
            <input
              className="payform-tinkoff-row"
              type="hidden"
              name="terminalkey"
              value="1708332714384"
            />

            <input
              className="payform-tinkoff-row"
              type="hidden"
              name="frame"
              value="true"
            />
            <input
              className="payform-tinkoff-row"
              type="hidden"
              name="language"
              value="ru"
            />
            <div className="flex flex-col gap-[10px] mb-[20px] lg:mb-[25px]">
              <span className="uppercase text-black/30">ФИО плательщика</span>
              {/* <input
                type="text"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                required
                ref={input_ref1}
                autoComplete="true"
              /> */}
              <input
                // className="payform-tinkoff-row"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                type="text"
                // placeholder="ФИО плательщика"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[20px] lg:mb-[25px]">
              <span className="uppercase text-black/30">Сумма заказа</span>
              {/* <input
                type="text"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                required
                ref={input_ref2}
                autoComplete="true"
              /> */}
              <input
                // className="payform-tinkoff-row"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                type="text"
                // placeholder="Сумма заказа"
                name="amount"
                required
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[20px] lg:mb-[25px]">
              <span className="uppercase text-black/30">E-mail</span>
              {/* <input
                type="text"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                required
                ref={input_ref3}
                autoComplete="true"
              /> */}
              <input
                // className="payform-tinkoff-row"
                className="h-[50px] lg:h-[84px] rounded-[12px] border border-black/10 w-full bg-[#E6E4E4] px-2 focus:outline-none text-[16px] lg:text-[18px]"
                type="email"
                // placeholder="сE-mail"
                name="email"
              />
            </div>
            <button
              className="w-full text-white text-[17px] lg:text-[20px] h-[50px] lg:h-[80px]"
              style={{
                background: "#EADA86",
              }}
              type="submit"
            >
              Оплатить
            </button>
            <div className="flex flex-col mt-[16px] lg:mt-[20px] items-center">
              <span>Нажимая на кнопку, вы соглашаетесьс</span>
              <span className="text-[#DFC38E] cursor-pointer">
                политикой конфиденциальности
              </span>
            </div>
          </form>
        </div>
        <div className="lg:col-span-1 ">
          
          <div className="flex flex-col gap-[40px] items-center font-bold text-[18px] lg:text-[20px] px-[50px]  pt-[20px] lg:pt-[100px]">

          <div>
              <p className="font-Montserrat font-bold text-center px-10">
                Простая и быстрая оплата банковской  картой не выходя из
                дома!
              </p>
            </div>

            <div className="">
              <span className="flex items-center gap-5 text-left">
                <img src={check} alt="" />
                <p>
                  Работа с системой онлайн оплаты осуществляется в защищенном
                  режиме.
                </p>
              </span>
            </div>

            <div className="">
              <span className="flex items-center gap-5 text-left">
                <img src={check} alt="" />
                <p>
                  Работу с банковскими картами обеспечивает платежный шлюз АО
                  «Тинькофф Банк», отвечающий самым современным стандартам
                  безопасности.
                </p>
              </span>
            </div>

            <div className="">
              <span className="flex items-center gap-5 text-left">
                <img src={check} alt="" />
                <p>
                  Данные банковских карт вводятся непосредственно в платежном
                  шлюзе АО «Тинькофф Банк»
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default memo(Order);
