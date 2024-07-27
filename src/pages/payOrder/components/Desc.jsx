import React, { memo } from 'react';
import Layout from '../../../components/Layout';

// million-ignore
function Desc() {
    return (
        <Layout>
            <div className='mt-[50px] lg:mt-[100px] text-[30px] lg:text-[35px] xl:text-[45px] font-bold font-Montserrat flex items-center justify-center text-center'>
                <span>ОПИСАНИЕ ПРОЦЕССА ПЕРЕДАЧИ ДАННЫХ</span>
            </div>

            <div className='w-full lg:w-[80%] text-[16px] lg:text-[18px] pt-[40px] lg:pt-[80px] pb-[100px] lg:pb-[150px] text-center lg:text-left'>
                <span>
                    Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платежный шлюз ПАО СБЕРБАНК. Соединение с платежным шлюзом и передача информации осуществляется в защищенном режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard SecureCode для проведения платежа также может потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введенная информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платежных систем МИР, Visa Int. и MasterCard Europe Sprl.
                </span>
            </div>
        </Layout>
    )
}

export default memo(Desc);