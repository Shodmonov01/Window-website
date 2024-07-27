import React, { memo, useState } from 'react';
import { Tooltip } from "@material-tailwind/react";
import { BsTelephone, BsXLg, BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import vk from "../assets/vk.svg";
import wh from "../assets/whatsup.svg";
import tg from "../assets/tg.png";

// million-ignore
function ContactInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {visible && (
                <span className='fixed bottom-[85px] right-8 flex flex-col gap-[5px] z-10 animate-wiggle'>
                    <Tooltip content="Контакт" className="z-50 p-1 bg-black/70">
                        <Link to={"/contact"}>
                            <div>
                                <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                                    <BsTelephoneFill className="text-green-700" />
                                </span>
                            </div>
                        </Link>
                    </Tooltip>
                    <Tooltip content="Телеграм" className="z-50 p-1 bg-black/70">
                        <div>
                            <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                                <a href='https://t.me/+79626841122' target='_blank'>
                                    <img src={tg} alt="vk" className="w-[28px] lg:w-[32px] rounded-full" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip content="WhatsApp" className="z-50 p-1 bg-black/70">
                        <div>
                            <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                                <a href='https://wa.me/79626841122' target='_blank'>
                                    <img src={wh} alt="wh" className="w-[28px] lg:w-[32px] rounded-full" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip content="вКонтакте" className="z-50 p-1 bg-black/70">
                        <div>
                            <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                                <a href='https://vk.com/elitplastspb' target='_blank'>
                                    <img src={vk} alt="wh" className="w-[28px] lg:w-[32px] rounded-full" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                </span>
            )}

<<<<<<< HEAD
            <span className="fixed bottom-8 right-8 flex h-12 w-12 z-10 cursor-pointer" onClick={() => setVisible(!visible)}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfc38e] opacity-75"></span>
                <span className="relative rounded-full h-12 w-12 bg-[#dfc38e] flex items-center justify-center animate-wiggle">
=======
            <span class="fixed bottom-8 right-8 flex h-12 w-12 z-10 cursor-pointer" onClick={() => setVisible(!visible)}>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfc38e] opacity-75"></span>
                <span class="relative rounded-full h-12 w-12 bg-[#dfc38e] flex items-center justify-center animate-wiggle">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    {visible ? (
                        <BsXLg className="text-white" />
                    ) : (
                        <BsTelephone className="text-white" />
                    )}
                </span>
            </span>
        </div>
    )
}

export default memo(ContactInfo);