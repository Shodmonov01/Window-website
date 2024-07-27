import { memo } from "react";
import Accordion from "../../../components/Accordion";

// million-ignore
function Info(props) {
    const { data } = props;

    return (
        <section
            className="px-4 md:px-20 my-[70px] lg:my-[100px] pt-[50px] lg:pt-[76px] pb-[40px] lg:pb-[60px] lg:px-32 bg-[#212121] text-white"
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
                    className="bg_linear_gradient_txt"
                >{data.title}</span>
            </span>

            <div className="mt-[30px] lg:mt-[40px] w-full">
                <Accordion
                    data={data}
                />
            </div>
        </section>
    )
}

export default memo(Info);