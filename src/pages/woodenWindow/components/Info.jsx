import { memo, useCallback, useState } from "react";
import InfoData from "./InfoData";

// million-ignore
function Info(props) {
    const { data } = props;

    return (
        <section
            className="px-4 md:px-20 my-[70px] lg:my-[100px] pt-[50px] lg:pt-[76px] pb-[60px] lg:pb-[80px] lg:px-32 bg-[#212121] text-white"
            style={{ fontStyle: "normal" }}
        >
            <span className="title uppercase text-center mb-4 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[35px] xl:text-[45px]">
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
                    className="bg_linear_gradient_txt "
                >{data.title}</span>
            </span>

            <InfoData data={data} />
        </section>
    )
}

export default memo(Info);