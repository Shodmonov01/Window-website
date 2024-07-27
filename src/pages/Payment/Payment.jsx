// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
<<<<<<< HEAD
import Layout from "../../components/Layout";
import Montaj from "./components/Montaj";
import SliderDark from "../../components/SliderDark";
import Consultation from "../../components/Consultation";
import { Helmet } from "react-helmet";

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Договор и оплата | ЭлитПласт</title>
        <meta
          name="description"
          content="Элитпласт- Условия оплаты наших изделий в Спб и ЛО! можете оставить заявку на нашем сайте"
        />
      </Helmet>
      <div className="mx-auto mt-10 lg:mt-32">
        <Layout>
          <div className="">
            <span className="text-[23px] font-Montserrat mb-0 lg:mb-4 text-center md:text-[35px] lg:text-[45px] font-bold uppercase flex items-center gap-3 flex-wrap justify-center">
              {"Договор и оплата".split(" ").map((item, index) => (
                <span
                  key={Math.random().toString()}
                  data-aos="fade-right"
                  data-aos-delay={500}
                >
                  {item}
                </span>
              ))}
            </span>
            <div
              className="flex gap-4 mt-7 lg:mt-10 w-full"
              data-aos="fade-right"
            >
              <div className="w-full flex px-5 lg:px-0 flex-col gap-[29px]">
                <p className="text-[15px] md:text-[20px] text-center lg:text-justify md:text-left">
                  После того, как вы прочли и подписали договор, компания
                  ЭлитПласт будет нести полную ответственность за выполнение
                  вашего заказа. Каждый договор является индивидуальным, с
                  собственным номером, который занесен в реестр. Поэтому вы
                  можете не переживать по поводу безопасности, все абсолютно
                  прозрачно и честно
                </p>
                <p className="text-[15px] md:text-[20px] text-center lg:text-justify md:text-left">
                  После того, как вы прочли и подписали договор, компания
                  ЭлитПласт будет нести полную ответственность за выполнение
                  вашего заказа. Каждый договор является индивидуальным, с
                  собственным номером, который занесен в реестр. Поэтому вы
                  можете не переживать по поводу безопасности, все абсолютно
                  прозрачно и честно
                </p>
              </div>
            </div>
          </div>
        </Layout>
        {/* montaj */}
        <Montaj />
        {/* slider */}
        <SliderDark />
        {/* consultation */}
        <div className="mt-28">
        <Consultation />

        </div>
=======
import Slider from "../../components/Slider";
import Form from "../../components/Form";

const Payment = () => {

  return (
    <div>
      <div className="mx-auto mt-32">
        <div className="px-4 md:px-12">
          <h2 className="text-[23px] font-Montserrat mb-4 text-center md:text-left md:text-[35px] lg:text-[45px] font-bold uppercase">
            Оплата
          </h2>
          <p className="font-Montserrat text-center md:text-left font-semibold text-[16px] md:text-[20px]">
            Мы предлагаем вам удобные и гибкие способы оплаты за <br /> наши
            услуги по остеклению.
          </p>
          <div
            className="flex gap-4 mt-20 max-w-[1071px] w-full"
            data-aos="fade-right"
          >
            <div className="line my-1 min-w-[6px] md:min-w-[9px] bg-linear"></div>
            <div className="">
              <h4 className="text-[18px] md:text-[22px] mb-2 text-dark font-semibold">
                Наличный расчет
              </h4>
              <p className="text-[15px] md:text-[20px] text-justify md:text-left">
                Вы можете оплатить наши услуги наличными. Для вашего удобства, мы
                принимаем как национальную валюту, так и иностранную.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center gap-4 mt-16 max-w-[1071px] w-full"
            data-aos="fade-right"
          >
            <div className="line my-1 min-w-[6px] md:min-w-[9px] bg-linear"></div>
            <div className="">
              <h4 className="text-[18px] md:text-[22px] mb-2 text-dark font-semibold">
                Безналичный расчет
              </h4>
              <p className="text-[15px] md:text-[20px] text-justify md:text-left">
                Оплата по безналичному расчету доступна для юридических лиц. Для
                оформления договора и получения счета-фактуры, пожалуйста,
                свяжитесь с нашим отделом продаж. После получения счета-фактуры,
                вы сможете произвести оплату через банковский перевод.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center gap-4 mt-16 max-w-[1071px] w-full"
            data-aos="fade-right"
          >
            <div className="line my-1 min-w-[6px] md:min-w-[9px]  bg-linear"></div>
            <div className="">
              <h4 className="text-[18px] md:text-[22px] mb-2 text-dark font-semibold">
                Оплата банковской картой
              </h4>
              <p className="text-[15px] md:text-[20px] text-justify md:text-left">
                Для вашего удобства, мы принимаем оплату банковскими картами Visa,
                MasterCard и Maestro. Оплата производится через защищенную
                платежную систему, что гарантирует безопасность ваших финансовых
                данных.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center gap-4 mt-16 max-w-[1071px] w-full"
            data-aos="fade-right"
          >
            <div className="line my-1 min-w-[6px] md:min-w-[9px]  bg-linear"></div>
            <div className="">
              <h4 className="text-[18px] md:text-[22px] mb-2 text-dark font-semibold">
                Рассрочка платежа
              </h4>
              <p className="text-[15px] md:text-[20px] text-justify md:text-left">
                Мы предлагаем возможность рассрочки платежа нашим постоянным
                клиентам. Пожалуйста, свяжитесь с нашим отделом продаж для
                уточнения условий и оформления договора на рассрочку.
              </p>
            </div>
          </div>
        </div>

        {/* slider */}
        <Slider />

        {/* form */}
        <Form />
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      </div>
    </div>
  );
};

export default Payment;
