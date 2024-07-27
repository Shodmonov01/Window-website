import React, { memo } from 'react';
import Layout from '../../../components/Layout';
import icon3 from '../../../assets/icon/4.svg';
import icon2 from '../../../assets/icon/8.svg';
import icon1 from '../../../assets/icon/9.svg';
const data = [
    {
        id: Math.random().toString(),
        img: icon1
    },
    {
        id: Math.random().toString(),
        img: icon2
    },
    {
        id: Math.random().toString(),
        img: icon3
    },
];

// million-ignore
function Card() {
    return (
        <div className='bg-box py-[50px] lg:py-[70px]'>
            <Layout>
                <div className='flex items-center justify-center text-center'>
                    <span className='bg_linear_gradient text-[23px] lg:text-[35px] xl:text-[45px] font-bold'>ПРАВИЛА ОПЛАТЫ БАНКОВСКОЙ КАРТОЙ</span>
                </div>

                <div className='pt-[40px] lg:pt-[100px] pb-[50px] lg:pb-[70px] w-full lg:w-[70%] text-white'>
                    <span className='text-[16px] lg:text-[20px] '>
                        Для оплаты товара с помощью банковской карты необходимо ввести данные в поля формы и нажать кнопку «Оплатить». Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем:
                    </span>
                </div>

                {/* logo */}
                <div className='flex items-center gap-[30px] lg:gap-[48px]'>
                    {data?.length > 0 && data.map(item => (
                        <div key={item.id}>
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default memo(Card);