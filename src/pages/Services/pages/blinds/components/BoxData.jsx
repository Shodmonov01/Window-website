import React, { memo } from 'react';
import Layout from '../../../../../components/Layout';
import jalyuzi from '../../../../../assets/services/jalyuzi/jalyuzi1.png';
import rim from '../../../../../assets/services/jalyuzi/rim.png';
import rulon from '../../../../../assets/services/jalyuzi/rulon.png';
import zebra from '../../../../../assets/services/jalyuzi/zebra.png';
const data = [
    {
        id: Math.random().toString(),
        img: rulon,
        name: "Рулонные шторы",
        link: "",
    },
    {
        id: Math.random().toString(),
        img: zebra,
        name: "Шторы зебра",
        link: "",
    },
    {
        id: Math.random().toString(),
        img: jalyuzi,
        name: "Вертикальные, горизонтальные жалюзи",
        link: "",
    },
    {
        id: Math.random().toString(),
        img: rim,
        name: "Римские шторы",
        link: "",
    },
];

// million-ignore
function BoxData() {
    return (
        <Layout>
            <div>
                <span className='uppercase text-[23px] lg:text-[35px] xl:text-[45px] font-bold font-Montserrat text-center flex items-center justify-center'>Также можем предложить</span>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 mt-[30px] lg:mt-[50px] gap-[20px] text-center font-bold'>
                {data?.length > 0 && data.map(item => (
                    <div key={item.id} className='text-white lg:col-span-1 bg-[#E6E4E4] flex items-center justify-center flex-col font-Montserrat relative'>
                        <img src={item.img} alt="" className='h-full' />
                        <span className='text-[17px] lg:text-[20px] absolute bottom-[55px] left-0 right-0'>{item.name}</span>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default memo(BoxData);