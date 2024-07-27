import { memo } from "react";
import Accordion from "../../../components/Accordion";

// million-ignore
function Info(props) {
  const { data } = props;

  return (
    <section
      className="px-4 md:px-20 my-[60px] lg:my-[100px] pt-[50px] lg:pt-[50px] pb-[40px] lg:pb-[60px] lg:px-32 bg-[#212121] text-white"
      style={{ fontStyle: "normal" }}
    >
      <span className="title uppercase text-center mb-5 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[35px] xl:text-[45px]">
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
          className="bg_linear_gradient "
        >
          {data.title}
        </span>
      </span>
      <div className="flex flex-col gap-[10px] w-full lg:w-[90%]">
        <span
          className="text-[15px] lg:text-[20px]"
          data-aos="fade-right"
          data-aos-delay={1000}
        >
          {data.textTop}
        </span>
        {/* <span
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
                )} */}
      </div>

      <div className="mt-[30px] w-full lg:w-[100%]">
        <Accordion data={data} />
      </div>
    </section>
  );
}

export default memo(Info);
