import React from 'react';
import Layout from '../../../components/Layout';
import SliderDark from '../../../components/SliderDark';
import Consultation from '../../../components/Consultation';
import pvc from '../../../assets/news/pvc.png';

function PVCWindows() {
    return (
        <>
            <Layout>
                <div className='text-dark flex items-center justify-center pb-[40px] lg:pb-[59px] pt-[50px] lg:pt-[124px] text-center'>
                    <span className='font-Montserrat font-bold text-[23px] lg:text-[35px] xl:text-[45px]'>ОКНА ПВХ С ШУМОИЗОЛЯЦИЕЙ</span>
                </div>

                <div>
                    <img src={pvc} className='w-full h-[200px] lg:h-[640px] object-cover' alt="" />
                </div>

                <div className='flex flex-col gap-[26px] pt-[52px] pb-[80px] lg:pb-[148px] w-full lg:w-[90%] text-center lg:text-left'>
                    <span>
                        Живя в городе, особенно в крупном мегаполисе, с большой натяжкой можно говорить о каком-либо приемлемом акустическом комфорте. Находясь на работе или передвигаясь по городу, мы готовы мирится с повседневным уличным шумом (как с чем-то неизбежным). Но приходя домой, хочется покоя и тишины.
                    </span>
                    <span>
                        Основным барьером между уличным шумом и тишиной в доме, является ОКНО. Можно ли понизить шум, проникающий в квартиру через окно? Можно! Для получения большей шумоизоляции пластиковых окон, рекомендуется следующее:
                    </span>
                    <span>
                        Наполнение межстекольного пространства тяжелым газом (понижение шума на 2 дБ).
                    </span>
                    <span>
                        Установка в стеклопакеты наружного стекла шириной 6 мм (понижение шума на 2 дБ).
                    </span>
                    <span>
                        Использование в стеклопакете звукоизолирующего ламинированного стекла.
                    </span>
                    <span>
                        Использование в стеклопакете звукоизолирующего ламинированного стекла.
                    </span>
                    <span>
                        Как самый крайний и максимально эффективный способ, установка ПВХ окон в две «нитки», т.е. по сути две оконные рамы (как в старых домах, одна за другой) для достижения наибольшего расстояния между стёклами.
                    </span>
                </div>
            </Layout>

            {/* slider */}
            <SliderDark />

            {/* consultation */}
            <Consultation />
        </>
    )
}

export default PVCWindows;