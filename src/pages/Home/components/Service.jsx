import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import d3Icons_1 from "../../../assets/3dicons (1).png";
import d3Icons_2 from "../../../assets/3dicons (2).png";
import d3Icons_3 from "../../../assets/3dicons (3).png";
import d3Icons_4 from "../../../assets/3dicons (4).png";
import InstallationProcess2 from "../../../assets/process-img-2.png";
import Title from "./Title";
const data = [
    {
        id: Math.random().toString(),
        title: "Можно ли отремонтировать пластиковые окна?",
        text: "Да, пластиковые окна ремонтопригодны - при необходимости все поврежденные или изношенные компоненты окон, кроме рамы, заменяют. Для замены рамы необходимо полный демонтаж окна — ремонтом такую замену назвать уже нельзя."
    },
    {
        id: Math.random().toString(),
        title: "Сколько прослужит окно?",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
    {
        id: Math.random().toString(),
        title: "Как заказать звонок специалиста",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
    {
        id: Math.random().toString(),
        title: "Можно ли переустанавливать окна в зимнее время?",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
    {
        id: Math.random().toString(),
        title: "На сколько лет дается гарантия и на что?",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
];

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
function Service() {
    const [open, setOpen] = useState(0);

    const handleOpen = useCallback(value => {
        setOpen(open === value ? 0 : value);
    }, [open]);

    return (
        <div className="section py-20">
            {/* row 1 */}
            <div className="relative">
                <div className="flex mb-24 justify-center lg:justify-between px-[20px] lg:px-[80px] xl:px-[100px] flex-wrap lg:flex-nowrap gap-[50px]">
                    <img
                        src={InstallationProcess2}
                        alt=""
                        className="absolute hidden -bottom-[100px] lg:block left-0"
                    />
                    <div
                        className="img-box"
                        data-aos="fade-right"
                        data-aos-delay={500}
                    >
                        <img src={d3Icons_1} alt="icon" className="w-full h-[300px] md:h-full" />
                    </div>
                    <div className="text-box w-full text-center lg:text-left lg:w-[50%] flex gap-4 justify-center flex-col"
                    >
                        <div className="flex items-center gap-3 text-[23px] lg:text-[30px] xl:text-[45px] justify-center md:justify-start flex-wrap 2xl:flex-nowrap">
                        <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Процесс монтажа</span>
                            {/* {"Процесс монтажа".split(" ").map((item, index) => (
                                <span
                                    key={Math.random().toString()}
                                    className="title font-bold uppercase font-Montserrat"
                                    data-aos="fade-right"
                                    data-aos-delay={500 + (index + 1) * 100}
                                >
                                    {item}
                                </span>
                            ))} */}
                        </div>
                        <p
                            className="text-[15px] lg:text-[16px] xl:text-[20px] font-medium"
                            data-aos="fade-up"
                            data-aos-delay={800}
                            style={{ fontStyle: "normal" }}
                        >
                            В процессе монтажа алюминиевые профильные системы меняются на
                            утепленные из качественного ПВХ. Выполняем замену остекления
                            балкона на теплое быстро, даем гарантии качества. Изготавливаем
                            профильные конструкции на своем производстве.
                        </p>
                        <Link to={"/montage"}>
                            <button
                                className="button mx-auto lg:mx-0 font-semibold tracking-widest uppercase w-full lg:w-[300px] h-[50px] lg:h-[60px] xl:h-[74px] text-[15px] lg:text-[16px] xl:text-[20px]"
                                style={{
                                    background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                                }}
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                Подробнее
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="flex mb-24 justify-center lg:justify-between px-[20px] sm:px-[20px] lg:px-[80px] xl:px-[100px] flex-wrap-reverse lg:flex-nowrap gap-[50px]">
                <div className="text-box w-full text-center lg:text-left lg:w-[50%] flex gap-4 justify-center flex-col"
                >
                    <div className="flex items-center gap-3 text-[23px] lg:text-[30px] xl:text-[45px] justify-center md:justify-start flex-wrap">
                    <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Дополнительные услуги</span>
                        {/* {"Дополнительные услуги".split(" ").map((item, index) => (
                            <span
                                key={Math.random().toString()}
                                className="title font-bold uppercase font-Montserrat"
                                data-aos="fade-right"
                                data-aos-delay={500 + (index + 1) * 100}
                            >
                                {item}
                            </span>
                        ))} */}
                    </div>
                    <p
                        className="text-[15px] lg:text-[16px] xl:text-[20px] font-medium"
                        data-aos="fade-up"
                        data-aos-delay={800}
                        style={{ fontStyle: "normal" }}
                    >
                        Разнообразные варианты дизайна и установки остекления для вашего проекта!
                    </p>
                    <Link to={"/services"}>
                        <button
                            className="button mx-auto lg:mx-0 font-semibold tracking-widest uppercase w-full lg:w-[300px] h-[50px] lg:h-[60px] xl:h-[74px] text-[15px] lg:text-[16px] xl:text-[20px]"
                            style={{
                                background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                            }}
                            data-aos="fade-up"
                            data-aos-delay={800}
                        >
                            Подробнее
                        </button>
                    </Link>
                </div>
                <div
                    className="img-box"
                    data-aos="fade-left"
                    data-aos-delay={800}
                >
                    <img src={d3Icons_2} alt="icon" className="w-full h-[300px] md:h-full" />
                </div>
            </div>

            {/* row 3 */}
            <div className="flex mb-24 justify-center lg:justify-between px-[20px] lg:px-[80px] xl:px-[100px] flex-wrap lg:flex-nowrap gap-[50px]">
                <div
                    className="img-box"
                    data-aos="fade-right"
                    data-aos-delay={1100}
                >
                    <img src={d3Icons_3} alt="icon" className="w-full h-[300px] md:h-full" />
                </div>
                <div
                    className="text-box w-full text-center lg:text-left lg:w-[50%] flex gap-4 justify-center flex-col"
                >
                    <div className="flex items-center gap-3 text-[23px] lg:text-[30px] xl:text-[45px] justify-center md:justify-start flex-wrap 2xl:flex-nowrap">
                    <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >О нашей компании</span>
                        {/* {"О нашей компании".split(" ").map((item, index) => (
                            <span
                                key={Math.random().toString()}
                                className="title font-bold uppercase font-Montserrat"
                                data-aos="fade-right"
                                data-aos-delay={500 + (index + 1) * 100}
                            >
                                {item}
                            </span>
                        ))} */}
                    </div>
                    <p className="text-[15px] lg:text-[16px] xl:text-[20px] font-medium" >
                        <span
                            data-aos="fade-up"
                            data-aos-delay={800}
                        >
                            ЭЛИТПЛАСТ - компания, специализирующаяся на продаже высококачественных пластиковых, деревянных и алюминиевых окон
                        </span>
                        <br /><br />
                        <span
                            data-aos="fade-up"
                            data-aos-delay={900}
                        >
                            Мы предлагаем широкий ассортимент оконных конструкций различных форм и размеров, которые отличаются надежностью, энергоэффективностью и долговечностью.
                        </span>
                        <br /><br />
                        <span
                            data-aos="fade-up"
                            data-aos-delay={1000}
                        >
                            Наша команда профессионалов поможет подобрать окна, которые будут идеально соответствовать вашим потребностям и бюджету.
                        </span>
                    </p>
                    <Link to={"/about-us"}>
                        <button
                            className="button mx-auto lg:mx-0 font-semibold tracking-widest uppercase w-full lg:w-[300px] h-[50px] lg:h-[60px] xl:h-[74px] text-[15px] lg:text-[16px] xl:text-[20px]"
                            style={{
                                background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                            }}
                            data-aos="fade-up"
                            data-aos-delay={800}
                        >
                            Подробнее
                        </button>
                    </Link>
                </div>
            </div>

            {/* row 4 */}
            <div className="flex mb-24 justify-center lg:justify-between px-[15px] sm:px-[20px] lg:px-[80px] xl:px-[100px] flex-wrap-reverse lg:flex-nowrap  gap-[50px] items-start">
                <div
                    className="img-box"
                    data-aos="fade-left"
                    data-aos-delay={1300}
                >
                    <img src={d3Icons_4} alt="icon" className="w-full h-[300px] md:h-full" />
                </div>
                <div className="text-box w-full text-center lg:text-left lg:w-[50%] flex gap-4 justify-center flex-col">
                    <div className="flex items-center gap-3 text-[23px] lg:text-[30px] xl:text-[45px] justify-center md:justify-start flex-wrap">
                        <Title />
                    </div>
                    <div className="mt-[20px] lg:mt-[55px] w-full flex flex-col gap-4 ">
                        {data?.length > 0 && data.map((item, index) => (
                            <Accordion key={item.id} open={open === index + 1} icon={<Icon id={index + 1} open={open} />} className={`${open === index + 1 ? 'bg-white' : 'bg-transparent'} px-4`}>
                                <AccordionHeader onClick={() => handleOpen(index + 1)} className="border-b-0">
                                    <div className="text-[18px] lg:text-[20px] xl:text-[21px] font-semibold px-0 text-left">
                                        {item.title}
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="px-0 pr-[30px] lg:pr-[50px] text-justify lg:text-left py-[20px] pl-[10px] lg:pl-[16px]">
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] font-normal" style={{ lineHeight: "26px" }} >
                                            {item.text}
                                        </p>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default memo(Service);