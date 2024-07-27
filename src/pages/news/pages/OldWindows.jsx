import React from 'react';
import Layout from '../../../components/Layout';
import oldwindow1 from '../../../assets/news/oldwindow1.png';
import SliderDark from '../../../components/SliderDark';
import Consultation from '../../../components/Consultation';

const OldWindows = () => {
    return (
        <>
            <Layout>
                <div className='text-dark flex items-center justify-center pb-[40px] lg:pb-[59px] pt-[50px] lg:pt-[124px]'>
                    <span className='font-Montserrat font-bold text-[23px] lg:text-[35px] xl:text-[45px] text-center'>ДЕМОНТАЖ СТАРЫХ ОКОН</span>
                </div>

                <div>
                    <img src={oldwindow1} className='w-full h-[200px] lg:h-[640px] object-cover' alt="" />
                </div>

                <div className='flex flex-col gap-[26px] pt-[52px] pb-[80px] lg:pb-[148px] w-full lg:w-[90%] text-center lg:text-left'>
                    <span>
                        Поэтому, сейчас можно заметить, что большинство квартир имеют пластиковые окна, а деревянные товарищи уходят в небытие. Итак, методом логики мы выявили, что для установки современных пластиковых окон нужно демонтировать старые деревянные, ну или старые пластиковые, которые портят ваш интерьер, были установлены не совсем тем концом, что нужно или вы просто осознали, что лучше окон Рехау просто не существует и что лучше компании “Умные Окна” никто не сможет их установить.
                    </span>
                    <span>
                        По многим известным фильмам мы часто видим, что пулевые ранения может легко прооперировать любой сельский ветеринар, но так ли это? Стоит ли доверять “посредственному” профессионалу то, от чего зависит многое?
                    </span>
                    <span>
                        Всегда хорошо, когда свою работу делает профессионал и делает ее с любовью, знанием и огромной мотивацией. Заказывая демонтаж ваших старых окон в ”Умных окнах”, вы можете быть уверены, что работой будут заниматься умные монтажники, работающие в этой сфере многие годы, и они будут делать все с максимальной точностью, дабы не повредить конструкцию и не сделать хуже.
                    </span>
                    <span>
                        От умных рабочих, у которых есть руки и они растут и правильного места, требуются определенные знания в технике безопасности, при этом требуются специальные инструменты для снятия рам.
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

export default OldWindows;