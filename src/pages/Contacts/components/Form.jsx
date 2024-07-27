import { memo, useRef } from "react";
import emailjs from "@emailjs/browser";
import { getToast, getToastWarn } from "../../../services/option";

// million-ignore
function Form() {
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
    <div
      className="shadow-md rounded-lg pt-8 lg:pt-[53px] pb-20 lg:pb-[158px] bg-box"
      data-aos="fade-up"
    >
      <span className="text-[23px] font-Montserrat mb-4 text-center md:text-[35px] lg:text-[45px] font-bold uppercase flex items-center gap-3 flex-wrap justify-center">
        {"Остались вопросы?".split(" ").map((item, index) => (
          <span
            key={Math.random().toString()}
            data-aos="fade-right"
            data-aos-delay={500 + (index + 1) * 150}
            className="bg_linear_gradient"
          >
            {item}
          </span>
        ))}
      </span>
      <form
        className="px-[10px] md:px-[80px] lg:px-[150px] xl:px-[231px] mt-[30px] lg:mt-[60px]"
        onSubmit={submitHandler}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Ваше Имя"
            className="bg-[#E8E8ED33] px-6 h-[65px] text-white"
            required
            name="user_name"
            ref={name_ref}
            id="name_ref"
            autoComplete="true"
          />
          <input
            type="email"
            placeholder="Ваш E-mail"
            className="bg-[#E8E8ED33] px-6 h-[65px] text-white"
            required
            name="user_email"
            ref={email_ref}
            id="email_ref"
            autoComplete="true"
          />
          <div className="relative">
            <button
              type="submit"
              className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full lg:w-[300px] h-[55px] md:h-[65px]"
              style={{
                background:
                  "linear-gradient(180deg, #DFC38E 36.25%, #CEA654 101.69%)",
              }}
            >
              Отправить
            </button>
            <p className="absolute  -bottom-[55px] w-[400px] left-0 text-white/50 text-[15px] xl:text-[16px] flex flex-col">
              <span className="text-[11px]">
                *Нажимая на кнопку, вы даете согласие на
              </span>
              <span className="text-[11px]">
                обработку своих персональных данных.
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(Form);
