import { memo } from "react";
import StepsImg1 from "../../../assets/Steps-img1.svg";
import StepsImg2 from "../../../assets/Steps-img2.svg";
import StepsImg3 from "../../../assets/Steps-img3.svg";
import rectangle from "../../../assets/regtangle.svg";
import rectangle2 from "../../../assets/regtangle2.svg";

// million-ignore
function Contact() {
    return (
        <section className="why-us bg-[#212121] pt-[80px] lg:pt-[101px] pb-[100px] lg:pb-[183px] px-5 md:px-32 relative">
            <img src={rectangle} alt="" className="absolute left-0 top-0" />
            <img src={rectangle2} alt="" className="absolute right-0 top-0 hidden lg:block" />
            <span className="title text-white text-center uppercase font-Montserrat font-bold flex items-center justify-center gap-3 flex-wrap text-[23px] lg:text-[30px] xl:text-[45px]">
            <span       className="title font-bold uppercase font-Montserrat"
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Оставьте заявку и вам перезвонит менеджер, который</span>
                {/* {"Оставьте заявку и вам перезвонит менеджер, который".split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        data-aos-delay={1000 + (index + 1) * 150}
                    >{item}</span>
                ))} */}
            </span>
            <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 text-white text-center gap-4 ">
                <div
                    className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737]"
                    data-aos="fade-right"
                    data-aos-delay={1000}
                >
                    <img src={StepsImg1} alt="img" />
                    <div className="name text-[25px] tracking-wider my-3 font-semibold">
                        Объяснит
                    </div>
                    <div className="description fs-20">
                        Чем может отличсаться дешевое окно от других предложений ны рынке
                    </div>
                </div>
                <div
                    className="card rounded-[10px] h-auto p-10 flex flex-col items-center max-xl:h-[375px] bg-[#373737]"
                    data-aos="fade-up"
                    data-aos-delay={1500}
                >
                    <img src={StepsImg2} alt="img" />
                    <div className="name text-[25px] tracking-wider my-3 font-semibold">
                        Ответит
                    </div>
                    <div className="description fs-20">
                        На все волнующие вас <br /> вопросы
                    </div>
                </div>
                <div
                    className="card rounded-[10px] h-auto lg:h-[340px] p-5 md:p-10 flex flex-col items-center bg-[#373737]"
                    data-aos="fade-left"
                    data-aos-delay={2000}
                >
                    <img src={StepsImg3} alt="img" className="w-[80px] md:w-[100px]" />
                    <div className="name text-[18px] md:text-[23px] tracking-wider my-3 font-semibold">
                        Подписания договора
                    </div>
                    <div className="description fs-20">
                        Перед началом работы необходимо подписать договор и внести
                        предоплату
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Contact);