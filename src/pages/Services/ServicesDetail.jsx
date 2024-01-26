import { useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { getToast, getToastWarn } from '../../services/option';

const ServicesDetail = () => {
  const location = useLocation();
  const { state } = location;
  const { data } = state;
  const { box } = data;
  const name_ref = useRef();
  const email_ref = useRef();
  console.log(state);

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
    <section className="">
      <div className="flex flex-col-reverse lg:grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
        <div className="mr-auto lg:col-span-8 pt-[40px] text-center md:text-left">
          <h1
            className="max-w-2xl mb-[30px] md:mb-[44px] font-bold leading-none text-[23px] md:text-[40px] xl:text-[50px] uppercase hidden items-center gap-3 justify-center md:justify-start lg:flex"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            {state.title.split(" ").map(item => (
              <span key={Math.random().toString()}>{item}</span>
            ))}
          </h1>
          <p
            className="max-w-2xl mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            {data.textTop && data.textTop}
          </p>
          <p
            className="max-w-2xl mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            {data.textCenter && data.textCenter}
          </p>
          {data.textBottom && (
            <p
              className="max-w-2xl mb-10 font-normal lg:mb-8 text-[15px] lg:text-[15px] xl:text-[17px]"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {data.textBottom && data.textBottom}
            </p>
          )}
          <div className='flex items-center justify-center md:justify-start'>
            <Link
              to={"/contact"}
              className="button font-semibold tracking-widest flex items-center justify-center mt-5 uppercase w-full mx-4 md:mx-0 md:w-[300px] h-[55px] md:h-[65px]"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              Связаться с нами
            </Link>
          </div>
        </div>
        <div className='w-full lg:col-span-4 '>
          <h1
            className="max-w-2xl mb-[80px] md:mb-[44px] font-bold leading-none text-[23px] md:text-[40px] xl:text-[50px] uppercase flex items-center gap-3 justify-center md:justify-start lg:hidden my-[50px]"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            {state.title.split(" ").map(item => (
              <span key={Math.random().toString()}>{item}</span>
            ))}
          </h1>
          <div
            className="lg:mt-0 lg:flex relative mr-7"
            data-aos="fade-left"
            data-aos-delay={800}
          >
            <div className="absolute w-full h-full bg-linear translate-x-7 -translate-y-7"></div>
            <img
              src={state.inlineImgSrc}
              className="rounded-none h-[500px] object-cover relative z-10 w-full"
              alt="mockup"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-[#212121] mt-[180px] md:mt-[253px] mb-[120px] md:mb-[176px] px-4 md:px-32 pt-[96px] pb-[80px] cornerAnimation"
      // data-aos="fade-down-left"
      // data-aos-delay={500}
      >
        <span className="text-[23px] lg:text-[30px] xl:text-[45px] -tracking-tighter uppercase font-bold text-white text-center flex items-center justify-center gap-3 flex-wrap">
          {box.title.split(" ").map((item, index) => (
            <span
              key={Math.random().toString()}
              data-aos="fade-right"
              data-aos-delay={400 + (index + 1) * 150}
            >{item}</span>
          ))}
        </span>
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 text-white text-center gap-4 ">
          <div
            className="card rounded-md h-auto p-6 flex flex-col items-center bg-[#373737]"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-bold">
              01
            </h2>
            <div className="name text-[20px] md:text-[22px] tracking-wider my-3 font-semibold">
              {box?.col1?.title}
            </div>
            <div className="description text-sm md:text-[1rem] text-[#ffffffb2]">
              {box?.col1?.text}
            </div>
          </div>
          <div
            className="card h-auto rounded-md p-6 md:p-8 flex flex-col items-center bg-[#373737]"
            data-aos="fade-up"
            data-aos-delay={700}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-bold">
              02
            </h2>
            <div className="name text-[20px] md:text-[20px] tracking-wider my-3 font-semibold">
              {box?.col2?.title}
            </div>
            <div className="description text-sm md:text-[1rem] text-[#ffffffb2]">
              {box?.col2?.text}
            </div>
          </div>
          <div
            className="card h-auto rounded-lg p-6 md:p-8 flex flex-col items-center bg-[#373737]"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-bold">
              03
            </h2>
            <div className="name text-[20px] md:text-[22px] tracking-wider my-3 font-semibold">
              {box?.col3?.title}
            </div>
            <div className="description text-sm md:text-[1rem] text-[#ffffffb2]">
              {box?.col3?.text}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mb-[140px] md:mb-[180px] shadow-lg w-[90%] m-auto pb-[80px] md:pb-93px pt-[40px] md:pt-[53px] rounded-md"
        data-aos="fade-up"
        data-aos-delay={500}
      >
        <h2 className="text-[23px] md:text-[38px] -tracking-tighter uppercase font-bold text-center">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </h2>
        <form className="max-w-screen-xl mx-auto px-4 my-14" onSubmit={submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Ваше Имя"
              className="bg-[#E8E8ED33] px-6 h-[65px]"
              ref={name_ref}
              name="user_name"
              id="user_name_id"
            />
            <input
              type="email"
              placeholder="Ваш E-mail"
              className="bg-[#E8E8ED33] px-6 h-[65px]"
              ref={email_ref}
              name="user_email"
              id="user_email_id"
            />
            <div className='relative'>
              <button
                className="button text-[14px] md:text-[17px] font-semibold tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full md:w-[300px] h-[55px] md:h-[65px]"
                type='submit'
                style={{
                  background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                }}
              >
                Отправить
              </button>
              <p className="absolute left-0 md:max-w-[400px] w-full mt-3 text-[#00000080]">
                *Нажимая на кнопку, вы даете согласие на обработку своих
                персональных данных.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServicesDetail;
