import { memo } from "react";
import Accordion from "../../../components/Accordion";

// million-ignore
function Info(props) {
    const { data } = props;

    return (
        <section
            className="px-4 md:px-20 my-[70px] lg:my-[100px] py-[40px] lg:py-[50px] lg:px-32 bg-[#212121] text-white"
            style={{ fontStyle: "normal" }}
        >
            <span className="title uppercase text-center mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[35px] xl:text-[45px]">
                {/* {data.title?.split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        data-aos-delay={500 + (index + 1) * 150}
                    >{item}</span>
                ))} */}
                <span
                    key={Math.random().toString()}
                    data-aos="fade-right"
                    data-aos-delay={500}
                    className="bg_linear_gradient"
                >{data.title}</span>
            </span>
            <div className="flex flex-col gap-[20px] w-full">
                <span
                    data-aos="fade-right"
                    data-aos-delay={700}
                >
                    {data.textTop}
                </span>
                <span
                    data-aos="fade-right"
                    data-aos-delay={900}
                >
                    {data.textCenter}
                </span>
                {data.textBottom && (
                    <span
                        data-aos="fade-right"
                        data-aos-delay={1100}
                    >
                        {data.textBottom}
                    </span>
                )}
            </div>

            <div className="pt-[50px]">
                <span className="bg_linear_gradient text-[22px] lg:text-[26px] font-bold uppercase">{data.header}</span>
            </div>

            <div className="mt-[25px] w-full">
                <Accordion
                    data={data}
                />
            </div>
        </section>
    )
}

export default memo(Info);