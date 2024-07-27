import React, { memo, useEffect, useState } from 'react';

function Time() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => {
            // let date = new Date();
            // let res = {
            //     year: date.getFullYear(),
            //     month: String(date.getMonth())?.length === 1 ? "0" + String(date.getMonth()) : date.getMonth(),
            //     day: date.getDate(),
            //     hour: date.getHours(),
            //     minute: date.getMinutes(),
            //     second: date.getSeconds(),
            // }
            setDate(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="flex mt-6 items-center justify-center gap-2 lg:gap-7 flex-wrap">
            {/* <div>
                <p> Time : {date.toLocaleTimeString()}</p>
                <p> Date : {date.toLocaleDateString()}</p>
            </div> */}
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[18px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {date.getFullYear() - 2003}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">год</p>
            </div>
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[18px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {String(date.getMonth())?.length === 1 ? "0" + String(date.getMonth() + 1) : date.getMonth() + 1}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">Месяцев</p>
            </div>
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[18px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {date.getDate()}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">дней</p>
            </div>
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[18px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {date.getHours()}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">часов</p>
            </div>
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[16px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {date.getMinutes()}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">минут</p>
            </div>
            <div
                className=""
                data-aos="fade-up"
                data-aos-duration={1800}
            >
                <div className="border border-black/5 rounded-md pt-[11px] lg:pt-[20px] pb-[9px] lg:pb-[15px] px-[18px] lg:px-[24px] text-[17px] lg:text-[22px] font-semibold text-center">
                    {date.getSeconds()}
                </div>
                <p className="text-[#A4A4A4] text-center text-[14px] md:text-[16px] mt-3 font-medium">секунд</p>
            </div>
        </div>
    )
}

export default memo(Time);