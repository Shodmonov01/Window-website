import { memo, useCallback, useState } from "react";
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

// million-ignore
function Info(props) {
    const { data } = props;
    const [open, setOpen] = useState(0);

    const handleOpen = useCallback(value => {
        setOpen(open === value ? 0 : value);
    }, [open]);

    return (
        <section
            className="px-4 md:px-20 mt-[153px] mb-[164px] pt-[50px] lg:pt-[76px] pb-[100px] lg:pb-[164px] lg:px-32 bg-[#212121] text-white"
            style={{ fontStyle: "normal" }}
        >
            <h1 className="title uppercase text-center mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[35px] xl:text-[45px]">
                {data.title?.split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        // data-aos-delay={500 + (index + 1) * 150}
                    >{item}</span>
                ))}
            </h1>
            <div className="flex flex-col gap-[10px]">
                <span
                    data-aos="fade-right"
                    data-aos-delay={1000}
                >
                    {data.textTop}
                </span>
                <span
                    data-aos="fade-right"
                    data-aos-delay={1300}
                >
                    {data.textCenter}
                </span>
                {data.textBottom && (
                    <span
                        data-aos="fade-right"
                        data-aos-delay={1600}
                    >
                        {data.textBottom}
                    </span>
                )}
            </div>

            <div className="mt-[40px] lg:mt-[55px] w-full md:w-[70%] lg:w-[60%]">
                {data?.accordion?.length > 0 && data.accordion.map((item, index) => (
                    <Accordion key={item.id} open={open === index + 1} icon={<Icon id={index + 1} open={open} />} className={``} data-aos="fade-right" data-aos-delay={1900 + (index + 1) * 150}>
                        <AccordionHeader onClick={() => handleOpen(index + 1)} className="border-b-0">
                            <div className="text-[17px] lg:text-[18px] xl:text-[22px] font-medium px-0 text-white">
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
                ))}
            </div>
        </section>
    )
}

export default memo(Info);