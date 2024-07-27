import React, { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { PhoneInput } from 'react-international-phone';
import { IoSend } from "react-icons/io5";
import { getToast, getToastWarn } from "../../../services/option";

function Phone() {
    const location = useLocation();
    const [phoneNumber, setPhoneNumber] = useState(location?.search ? location?.search.split("=")[1] : "");

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
        <form
            onSubmit={submitHandler}
            className="flex justify-center md:gap-2 items-center w-full"
        >
            <PhoneInput
                className={`phone_input phone_input_1 h-[50px] md:h-[60px] px-6 pl-2 placeholder:text-[#ffffff99] bg-[#e8e8ed33] rounded-[5px] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-[220px] flex items-center phoneInputContact`}
                defaultCountry="ru"
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                placeholder='Номер телефона'
                name="phone"
                autoComplete="tel"
            />
            <button
                className="bg-[#404040] px-4 rounded h-[50px] md:h-[60px]"
                type="submit"
            >
                <IoSend className="text-[23px]" />
            </button>
        </form>
    )
}

export default memo(Phone);