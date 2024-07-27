import React, { memo } from 'react';
import Layout from '../../../../../components/Layout';
const data = [
    {
        id: Math.random().toString(),
        number: "01",
        title: "Защита от насекомых",
        text: "Москитные сетки эффективно предотвращают проникновение комаров, мух, и других  насекомых в ваше жилище . Они создают барьер, который не позволяет насекомым проникнуть в помещение"
    },
    {
        id: Math.random().toString(),
        number: "02",
        title: "Поддержание свежего воздуха",
        text: "сетки позволяют полноценно проветривать помещение, не допуская насекомых. Вы сможете наслаждаться свежим воздухом, не беспокоясь о необходимости закрывать окна и двери."
    },
    {
        id: Math.random().toString(),
        number: "03",
        title: "Долговечность и надежность",
        text: "Наши сетки изготовлены из качественных материалов, которые обладают высокой стойкостью к воздействию солнечных лучей, влаги и механических повреждений"
    },
];

// million-ignore
function Boxdata() {
    return (
        <Layout>
            <div>
                <span className='text-[23px] lg:text-[35px] xl:text-[45px] font-bold font-Montserrat text-center flex items-center justify-center'>Преимущества москитных сеток</span>
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-[20px] mt-[0px] lg:mt-[50px] text-center font-bold'>
                {data?.length > 0 && data.map((item, index) => (
                    <div
                        className='lg:col-span-1 bg-[#E6E4E4] lg:pt-[47px] pt-[20px] lg:pb-[85px] pb-[0px] flex items-center justify-center flex-col font-Montserrat'
                        style={{
                            boxShadow: "0px 1px 3px 0px rgba(186, 186, 186, 0.1),0px 5px 5px 0px rgba(186, 186, 186, 0.09),0px 10px 6px 0px rgba(186, 186, 186, 0.05),0px 18px 7px 0px rgba(186, 186, 186, 0.01),0px 28px 8px 0px rgba(186, 186, 186, 0)"
                        }}
                        data-aos="fade-up"
                        data-aos-delay={400 + (index + 1) * 200}
                    >
                        <span className='bg_linear_gradient text-[35px] xl:text-[45px] font-bold'>{item.number}</span>
                        <span className='text-[18px] lg:text-[22px] font-bold font-Montserrat'>{item.title}</span>
                        <span className='text-[16px] lg:text-[18px] font-medium'>{item.text}</span>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default memo(Boxdata);