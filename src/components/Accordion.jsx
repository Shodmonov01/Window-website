import React, { memo, useCallback, useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#DFC38E"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function AccordionComponent({ data }) {
    const [open, setOpen] = useState(0);

    const handleOpen = useCallback(value => {
        setOpen(open === value ? 0 : value);
    }, [open]);

    return (
        data?.accordion?.length > 0 && data.accordion.map((item, index) => (
            <Accordion key={item.id} open={open === index + 1} icon={<Icon id={index + 1} open={open} />} className={``} data-aos="fade-right" data-aos-delay={1900 + (index + 1) * 150}>
                <AccordionHeader onClick={() => handleOpen(index + 1)} className="border-b-0">
                    <div className="text-[17px] lg:text-[18px] xl:text-[20px] bg_linear_gradient_txt font-medium px-0 ">
                        {item.header}
                    </div>
                </AccordionHeader>
                <AccordionBody className="text-white pt-0">
                    <div className="px-0 pr-[30px] md:pr-[100px] lg:pr-[150px]">
                        <p className="text-[14px] lg:text-[15px] xl:text-[16px] font-normal" style={{ lineHeight: "26px" }} >
                            {item.content}
                        </p>
                    </div>
                </AccordionBody>
            </Accordion>
        ))
    )
}

export default memo(AccordionComponent);