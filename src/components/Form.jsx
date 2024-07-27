import { memo, useRef } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import emailjs from "@emailjs/browser";
=======
import emailjs from '@emailjs/browser';
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
import emailjs from '@emailjs/browser';
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import { getToast, getToastWarn } from "../services/option";

// million-ignore
function Form() {
<<<<<<< HEAD
<<<<<<< HEAD
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
      className="mx-[20px] lg:mx-[35px] xl:mx-[50px] mt-[100px] lg:mt-[180px] xl:mt-[100px] shadow-md pt-[53px] pb-[158px]"
      data-aos="fade-up"
    >
      <h2 className="font-Montserrat text-[23px] md:text-[38px] uppercase font-bold text-center">
        Узнайте стоимость остекления
      </h2>
      <form
        className="px-[10px] md:px-[80px] lg:px-[150px] xl:px-[231px] mt-[30px] lg:mt-[60px]"
        onSubmit={submitHandler}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Ваше Имя"
            className="bg-[#E8E8ED33] px-6 h-[65px] focus:outline-none border border-gray-300 rounded-md"
            required
            name="user_name"
            ref={name_ref}
            id="name_ref"
            autoComplete="true"
          />
          <input
            type="email"
            placeholder="Ваш E-mail"
            className="bg-[#E8E8ED33] px-6 h-[65px] focus:outline-none border border-gray-300 rounded-md"
            required
            name="user_email"
            ref={email_ref}
            id="email_ref"
            autoComplete="true"
          />
          <div className="relative">
            <button
              type="submit"
              className="text-white text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full lg:w-[300px] h-[55px] md:h-[65px]"
              style={{
                background: "#EADA86",
              }}
            >
              Отправить
            </button>
            <p className="absolute -bottom-[55px] w-[400px] left-0 text-[#00000080] text-[15px] xl:text-[16px] flex flex-col">
              <span className="">*Нажимая на кнопку, вы даете согласие на</span>
              <span>обработку своих персональных данных.</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(Form);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    const name_ref = useRef();
    const email_ref = useRef();

    // submit handler
    const submitHandler = e => {
        e.preventDefault();
        if (name_ref.current?.value?.length > 0 && email_ref.current?.value?.length > 0) {

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
        <div className="mx-[20px] lg:mx-[35px] xl:mx-[50px] mt-[150px] lg:mt-[180px] xl:mt-[200px] shadow-md pt-[53px] pb-[158px]" data-aos="fade-up">
            <h2 className="font-Montserrat text-[23px] md:text-[38px] uppercase font-bold text-center">
                Узнайте стоимость остекления
            </h2>
            <form className="px-[10px] md:px-[80px] lg:px-[150px] xl:px-[231px] mt-[30px] lg:mt-[60px]" onSubmit={submitHandler}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <input
                        type="text"
                        placeholder="Ваше Имя"
                        className="bg-[#E8E8ED33] px-6 h-[65px]"
                        required
                        name="user_name"
                        ref={name_ref}
                        id="name_ref"
                    />
                    <input
                        type="email"
                        placeholder="Ваш E-mail"
                        className="bg-[#E8E8ED33] px-6 h-[65px]"
                        required
                        name="user_email"
                        ref={email_ref}
                        id="email_ref"
                    />
                    <div className="relative">
                        <button
                            type="submit"
                            className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full lg:w-[300px] h-[55px] md:h-[65px]"
                            style={{
                                background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                            }}
                        >
                            Отправить
                        </button>
                        <p className="absolute -bottom-[55px] w-[400px] left-0 text-[#00000080] text-[15px] xl:text-[16px] flex flex-col">
                            <span className="">
                                *Нажимая на кнопку, вы даете согласие на
                            </span>
                            <span>
                                обработку своих персональных данных.
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

<<<<<<< HEAD
export default memo(Form);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(Form);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
