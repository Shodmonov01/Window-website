import { memo, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import { getToast, getToastWarn } from "../services/option";
import formbg from "../assets/form-bg.png";

// million-ignore
const Consultation = () => {
    const [phoneNumber, setPhoneNumber] = useState(null);
    const name_ref = useRef();

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        if (name_ref.current?.value?.length > 0 && phoneNumber?.length === 12) {
            // send email
            let templateParams = {
                from_name: name_ref.current.value,
                message: "Меня зовут " + name_ref.current.value + ". Мой номер телефона: " + phoneNumber
            }
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    getToast("Ваша информация успешно отправлена.");
                }, function (error) {
                    console.log('FAILED...', error);
                    getToastWarn("Произошла ошибка.");
                });
        }
        else getToastWarn("Поле заполнено не полностью.");
    }

    return (
        <div className="consultation overflow-hidden p-2 lg:px-5 mt-[200px] lg:mt-[189px] grid grid-1 lg:grid-cols-2 gap-10 lg:gap-[80px] pl-[10px] lg:pl-[50px] xl:pl-32 items-center">
            <div
                className="bg-[#FAF9F9] rounded-[20px] text-center py-12 px-2 lg:px-8"
                data-aos="fade-right"
                data-aos-delay={500}
                style={{
                    boxShadow: "4px 4px 25px -9px rgba(0, 0, 0, 0.20)"
                }}
            >
                <h2 className="text-[23px] font-Montserrat font-extrabold md:text-[35px] flex items-center gap-3 flex-wrap justify-center">
                    <span className="text-[#2E303D]">ПОЛУЧИТЬ</span>
                    <span>КОНСУЛЬТАЦИЮ</span>
                </h2>
                <p className="text-[15px]md:text-[20px] mb-[30px] lg:mb-[60px]">
                    Оставьте заявку и в ближайшее время мы с <br /> Вами свяжемся
                </p>
                <form
                    className="flex flex-col items-center justify-center"
                    onSubmit={submitHandler}
                >
                    <div className="flex flex-col items-start w-full md:w-auto">
                        <label htmlFor="name" className="text-[#2E303DB8] text-base">
                            Ваше имя
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="10"
                            className="input w-full lg:w-[434px] px-4 mt-2 rounded-md h-[45px] md:h-[52px] outline-none border"
                            ref={name_ref}
                        />
                    </div>
                    <div className="flex flex-col items-start mt-5 w-full md:w-auto">
                        <label htmlFor="name" className="text-[#2E303DB8] text-base">
                            Ваш номер телефона *
                        </label>
                        <PhoneInput
                            className={`phone h-[45px] md:h-[52px] px-1 bg-white rounded-[5px] text-[18px] md:text-[27px] font-[500] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-full md:w-[434px]`}
                            placeholder='+7(___) __-__-__'
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                        />
                    </div>
                    <button
                        className="button mt-12 tracking-[1.62px] h-[70px] lg:h-[78px] w-full md:w-[430px] uppercase text-[18px] font-bold"
                        type="submit"
                        style={{
                            background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                        }}
                    >
                        Получить консультацию
                    </button>
                    <p className="mt-6 text-[18px] text-[#2E303DB8]">
                        Нажимая кнопку, вы даете согласие на <br />
                        <a href="#1" className="underline">обработку персональных данных</a>
                    </p>
                </form>
            </div>
            <div
                className="w-full lg:px-0 lg:mt-0 relative ml-4 lg:ml-10"
                data-aos="fade-left"
                data-aos-delay={600}
            >
                <div className="w-full h-[420px] bg-linear relative">
                    <img
                        src={formbg}
                        className="rounded-none w-full h-[420px] object-cover z-[99] absolute top-[20px] -right-[150px] -left-[20px]"
                        alt="mockup"
                    />
                </div>
            </div>
            {/* <div
                className="px-5 lg:px-0 lg:mt-0 flex items-center justify-end relative ml-0 lg:ml-10"
                data-aos="fade-left"
                data-aso-delay={500}
            >
                <div className="absolute w-full h-[420px] bg-linear -translate-y-5 translate-x-5"></div>
                <img
                    src={formbg}
                    className="rounded-none w-full h-[420px] object-cover z-[99]"
                    alt="mockup"
                />
            </div> */}
        </div>
    )
}

export default memo(Consultation);