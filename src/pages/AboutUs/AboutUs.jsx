import { useRef, useState } from "react";
<<<<<<< HEAD
import emailjs from "@emailjs/browser";
import { getToast, getToastWarn } from "../../services/option";
import check from "../../assets/icon/check_gold.svg";
import check1 from "../../assets/icon/check1.png";
import Portal from "../../components/Portal";
import SliderDark from "../../components/SliderDark";
import Consultation from "../../components/Consultation";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import PortalAbout from "./PortalAbout";
const data = [
  {
    id: Math.random().toString(),
    title: "165 000+",
    text: "качественных изделий",
  },
  {
    id: Math.random().toString(),
    title: "20 лет",
    text: "преданности своему делу",
  },
  {
    id: Math.random().toString(),
    title: "1 187 000 м²",
    text: "установленных конструкций",
  },
  {
    id: Math.random().toString(),
    title: "48 тысяч",
    text: "довольных клиентов",
  },
];

const data1 = [
  {
    id: Math.random().toString(),
    text: "пвх окна и двери из надежного профиля REHAU",
  },
  {
    id: Math.random().toString(),
    text: "алюминиевые окна, двери, перегородки, балконы, витражи",
  },
  {
    id: Math.random().toString(),
    text: "деревянные окна, двери, балконы, террасы",
  },
  {
    id: Math.random().toString(),
    text: "панорамные конструкции",
  },
  {
    id: Math.random().toString(),
    text: "современные сдвижные двери",
  },
];

const data2 = [
  {
    id: Math.random().toString(),
    icon: "",
    text: "Каждый наш проект — это индивидуальный подход и гарантия качественных материалов и монтажа.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Ответственно выполняя свою работу, уже более 20 лет, МЫ создаем окна для людей, которые выбирают качество, практичность, надежность, безопасность.",
  },
  {
    id: Math.random().toString(),
    icon: check1,
    text: "Бесплатно проконсультируем и сделаем замер, доставим и поднимем на этаж.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Наша компания специализируется на изготовлении и установке пластиковых, алюминиевых и деревянных окон, а также безрамного остекления. Мы предлагаем широкий ассортимент продукции, который включает в себя окна различных размеров и конфигураций, от классических до современных дизайнов.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Мы продолжаем улучшать и совершенствовать качество производимых окон, адаптируя их под климат Санкт-Петербурга и Ленинградской области, а также разрабатываем решения, которые оптимально закрывают оконный вопрос, не вредя семейному бюджету.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Нашим клиентам мы готовы предложить пластиковые окна и балконные конструкции, раздвижные порталы, входные и офисные двери из ПВХ и алюминия, противопожарные конструкции, индивидуальные решения для остекления фасадов жилых и промышленных зданий, торговых центров, объектов специального назначения.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах и получить бесплатную консультацию от нашего специалиста.",
  },
  {
    id: Math.random().toString(),
    icon: "",
    text: "Мы уверены, что Вы останетесь довольны нашей работой и качеством наших изделий!",
  },
];

const data3 = [
  {
    id: Math.random().toString(),
    title: "Наша цель",
    text: "Представлять качественную помощь в строительстве и дизайне жилой и коммерческой недвижимости в инновативной форме. Мы верим и знаем, что технологии REHAU - это будущее, которое может быть доступно каждому с нашей помощью уже сейчас.",
  },
  {
    id: Math.random().toString(),
    title: "Наша миссия",
    text: "Помочь каждой семье обеспечить комфортный климат в своем доме с максимальнным энергосбережением. Богатый выбор возможностей для строителей, архитекторов и инженеров способен обеспечить достойный уровень жизни для комфортного проживания в жилых или офисных помещениях.",
  },
];
=======
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import cardDatailimg from "../../assets/card-detail.png";
import Slider from "../../components/Slider";
import { getToast, getToastWarn } from "../../services/option";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

const AboutUs = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const name_ref = useRef();
  const [open, setOpen] = useState(false);

<<<<<<< HEAD
  const submitHandler = (e) => {
=======
  const submitHandler = e => {
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    e.preventDefault();

    if (name_ref.current?.value.length > 0) {
      if (phoneNumber?.length === 12) {
        // send email
        let templateParams = {
          from_name: name_ref.current.value,
<<<<<<< HEAD
          message:
            "Меня зовут " +
            name_ref.current.value +
            ". Мой номер телефона: " +
            phoneNumber,
        };
        emailjs
          .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              getToast("Ваша информация успешно отправлена.");
            },
            function (error) {
              console.log("FAILED...", error);
              getToastWarn("Произошла ошибка.");
            }
          );
      } else getToastWarn("Номер телефона был введен неверно.");
    } else getToastWarn("Поля не заполнены.");
  };

  return (
    <div className="">
      <Helmet>
        <title>Информация о нашей компании | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Информация о нашей компании! Остекление балконов и лоджий в Спб и ЛО"
        />
      </Helmet>
      <div className="px-4 md:px-32 mx-auto mt-10 lg:mt-32 flex flex-col gap-[20px] lg:gap-[40px]">
        <h2 className="text-[23px] font-Montserrat md:text-left md:text-[35px] lg:text-[45px]   font-bold uppercase flex items-center gap-3 justify-center">
          {"О нашей компании".split(" ").map((item, index) => (
            <div
              key={Math.random().toString()}
              data-aos="fade-right"
              data-aos-delay={300}
            >
              {item}
            </div>
          ))}
        </h2>

        {/* box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px]">
          {data?.length > 0 &&
            data.map((item, index) => (
              <div
                className="col-span-1 rounded-[16px] pt-[29px] pb-[43px] px-[40px] text-white"
                style={{
                  background: "#EADA86",
                }}
                data-aos={"fade-up"}
                data-aos-delay={400 + (index + 1) * 200}
              >
                <div className="flex flex-col gap-1 items-center lg:items-start">
                  <span className="text-[20px] lg:text-[28px] font-bold">
                    {item.title}
                  </span>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
        </div>

        <div className="text-left  w-full text-[15px] lg:text-[17px] xl:text-[20px] font-medium flex flex-col gap-[10px] lg:gap-[18px] mt-0 lg:mt-[70px]">
          <p
            className="uppercase font-bold font-Montserrat pb-[20px] text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay={900}
          >
            Изготавливаем остекление любой сложности
          </p>

          {data1?.length > 0 &&
            data1.map((item, index) => (
              <p
                key={item.id}
                className="text-[15px] lg:text-[16px] flex items-center text-left gap-[20px]"
                data-aos="fade-right"
                data-aos-delay={1000 + (index + 1) * 200}
              >
                <img src={check1} alt="" />
                {item.text}
              </p>
            ))}

          <div className="mt-5 lg:mt-[80px] ">
            <p
              className="uppercase font-bold text-center lg:text-start font-Montserrat pb-[20px]"
              data-aos="fade-right"
              data-aos-delay={1700}
            >
              ТО, ЧТО НЕ МОГУТ ИЗГОТОВИТЬ ДРУГИЕ, СДЕЛАЕМ МЫ!
            </p>

            <div className="flex flex-col gap-[20px] ">
              {data2?.length > 0 &&
                data2.map((item, index) => (
                  <p
                    key={item.id}
                    className="text-[15px] text-center lg:text-start lg:text-[16px] flex items-center gap-[20px]"
                    data-aos="fade-right"
                    data-aos-delay={1800 + (index + 1) * 200}
                  >
                    {item.icon && <img src={item.icon} alt="" />}
                    {item.text}
                  </p>
                ))}
            </div>
          </div>
=======
          message: "Меня зовут " + name_ref.current.value + ". Мой номер телефона: " + phoneNumber
        }
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            getToast("Ваша информация успешно отправлена.");
          }, function (error) {
            console.log('FAILED...', error);
            getToastWarn("Произошла ошибка.");
          });
      } else getToastWarn("Номер телефона был введен неверно.");
    }
    else getToastWarn("Поля не заполнены.");
  }

  return (
    <div className="">
      <div className="px-4 md:px-12 mx-auto mt-32 flex flex-col gap-[30px] lg:gap-[40px]">
        <h2
          className="text-[23px] font-Montserrat md:text-left md:text-[35px] lg:text-[45px] font-bold uppercase flex items-center gap-3 md:justify-start justify-center"
        >
          <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >О нашей компании</span>
          {/* {"О нашей компании".split(" ").map((item, index) => (
            <div
              key={Math.random().toString()}
              data-aos="fade-right"
              data-aos-delay={300 + (index + 1) * 150}
            >
              {item}
            </div>
          ))} */}
        </h2>
        <div className="text-center md:text-left max-w-[1100px] w-full text-[15px] lg:text-[17px] xl:text-[20px] font-medium flex flex-col gap-[10px] lg:gap-[18px]">
          <p
            className=""
            data-aos="fade-right"
            data-aos-delay={900}
          >
            Наша компания уже более 20 лет на российском рынке и
            специализируется на изготовлении светопрозрачных конструкций
            различной степени сложности.
          </p>
          <p
            className=""
            data-aos="fade-right"
            data-aos-delay={1000}
          >
            Мы до сих пор продолжаем улучшать и совершенствовать качество
            производимых окон, адаптируя их под климат Санкт-Петербурга и
            Ленинградской области, а также разрабатываем решения, которые
            оптимально закрывают оконный вопрос не вредя семейному бюджету.
          </p>
          <p
            className=""
            data-aos="fade-right"
            data-aos-delay={1100}
          >
            Нашим клиентам мы готовы предложить пластиковые окна и балконные
            конструкции, раздвижные порталы, входные и офисные двери из ПВХ и
            алюминия, противопожарные конструкции, индивидуальные решения для
            остекления фасадов жилых и промышленных зданий, торговых центров,
            объектов специального назначения.
          </p>
          <p
            className=""
            data-aos="fade-right"
            data-aos-delay={1200}
          >
            На сегодняшний день наша компания является крупнейшим переработчиком
            профильных систем REHAU и алюминиевого профиля на территории
            Северо-Западного региона. Производственные мощности завода
            составляют около 20000 м2 готовой продукции в месяц.
          </p>
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        </div>
      </div>

      <div
<<<<<<< HEAD
        className="bg-[#212121] py-12 text-white my-[20px] lg:my-[108px]"
        data-aos="fade-down-left"
        data-aos-delay={500}
      >
        <div className=" px-4 md:px-20   lg:px-32 ">
          <span className="text-[23px] font-Montserrat mb-4 text-center md:text-left lg:text-[30px] xl:text-[45px] font-bold uppercase flex items-center gap-3 justify-center">
            {"ЗА ЧЕСТНОСТЬ И КАЧЕСТВО".split(" ").map((item, index) => (
=======
        className="bg-[#212121] py-12 text-white my-[70px] lg:my-[108px]"
        data-aos="fade-down-left"
        data-aos-delay={500}
      >
        <div className="max-w-screen-xl px-4 mx-auto">
          <span className="text-[23px] font-Montserrat mb-4 text-center md:text-left lg:text-[30px] xl:text-[45px] font-bold uppercase flex items-center gap-3">
          <span
                    data-aos="fade-right"
                    data-aos-delay={550}
                >ЗА ЧЕСТНОСТЬ И КАЧЕСТВО</span>
            {/* {"ЗА ЧЕСТНОСТЬ И КАЧЕСТВО".split(" ").map((item, index) => (
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
              <div
                key={Math.random().toString()}
                data-aos="fade-right"
                data-aos-delay={500 + (index + 1) * 150}
<<<<<<< HEAD
                className="bg_linear_gradient_txt"
              >
                {item}
              </div>
            ))}
          </span>
          <div className=" text-center ">
            <span
              className="text-linear text-[14px] md:text-[16px] underline text-[#CEA654] cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={1300}
              onClick={() => setOpen(!open)}
            >
              {!open ? "Читать далее" : "Закрыть назад"}
            </span>
          </div>

          {open && (
            <div className="mt-[30px]" style={{ fontStyle: "normal" }}>
              <ul className="list-none text-[15px] lg:text-[18px] flex flex-col items-center lg:items-start">
                <li className="font-bold uppercase text-[24px] lg:text-[28px]">
                  У нас на сайте НЕТ:
                </li>
                <li>❌ обманывающих калькуляторов</li>
                <li>❌ нечестных цен</li>
                <li>❌ несуществующих скидок</li>
              </ul>

              <div className="flex flex-col gap-[21px] mt-[40px] items-center lg:items-start text-center lg:text-left">
                <span className="text-[16px] font- lg:text-[18px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими
                  глазами проходят множество ошибок частных заказчиков, дилеров,
                  производителей, когда сайт не несет достоверной информации,
                  когда дорогие окна "на словах" в итоге оказываются, самыми
                  дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими
                  глазами проходят множество ошибок частных заказчиков, дилеров,
                  производителей, когда сайт не несет достоверной информации,
                  когда дорогие окна "на словах" в итоге оказываются, самыми
                  дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими
                  глазами проходят множество ошибок частных заказчиков, дилеров,
                  производителей, когда сайт не несет достоверной информации,
                  когда дорогие окна "на словах" в итоге оказываются, самыми
                  дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Я считаю, что если наш завод предоставляет скидку, то она
                  должна быть настоящей, то есть не включена в изначальную цену,
                  и должна быть обоснованной, например, как поощрение за быстрое
                  заключение сделки или повторный заказ, за объем или за заказ
                  по рекомендации. В таких случаях, мы готовы предоставить
                  РЕАЛЬНУЮ скидку! Нам это выгодно, так как нам не нужно
                  вкладывать деньги в рекламу, а команде не нужно заниматься{" "}
                  <br />
                  Будьте внимательны к тому, что вам предлагают за ваши деньги!
                  Выбор светопрозрачных конструкций требует тщательного и
                  многогранного подхода!
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  А мы всегда готовы Вам помочь с консультацией и качественным
                  подбором изделий под Ваш бюджет и желания!
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша цель - создать наилучшие решения для каждого заказа! Ведь
                  <span className="text-[#CEA654]"> КАЧЕСТВО НА ГОДА</span>{" "}
                  превыше всего!
=======
              >
                {item}
              </div>
            ))} */}
          </span>
          <span
            className="text-linear text-[14px] md:text-[16px] underline text-[#CEA654] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={1300}
            onClick={() => setOpen(!open)}
          >
            {!open ? "Читать далее" : "Закрыть назад"}
          </span>

          {open && (
            <div className="" style={{ fontStyle: 'normal' }}>
              <ul className="list-none text-[15px] lg:text-[18px]">
                <li>У нас на сайте НЕТ:</li>
                <li>обманывающих калькуляторов  ❌</li>
                <li>нечестных цен  ❌</li>
                <li>несуществующих скидок ❌</li>
              </ul>

              <div className="flex flex-col gap-[21px] mt-[40px]">
                <span className="text-[17px] lg:text-[20px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими глазами проходят множество ошибок частных заказчиков, дилеров, производителей, когда сайт не несет достоверной информации, когда дорогие окна "на словах" в итоге оказываются, самыми дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими глазами проходят множество ошибок частных заказчиков, дилеров, производителей, когда сайт не несет достоверной информации, когда дорогие окна "на словах" в итоге оказываются, самыми дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша команда досконально знает Питерский рынок. Перед нашими глазами проходят множество ошибок частных заказчиков, дилеров, производителей, когда сайт не несет достоверной информации, когда дорогие окна "на словах" в итоге оказываются, самыми дешевыми конструкциями, выходящими из строя через год.
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Я считаю, что если наш завод предоставляет скидку, то она должна быть настоящей, то есть не включена в изначальную цену, и должна быть обоснованной, например, как поощрение за быстрое заключение сделки или повторный заказ, за объем или за заказ по рекомендации. В таких случаях, мы готовы предоставить РЕАЛЬНУЮ скидку! Нам это выгодно, так как нам не нужно вкладывать деньги в рекламу, а команде не нужно заниматься <br />
                  Будьте  внимательны к тому, что вам предлагают за ваши деньги! Выбор светопрозрачных конструкций требует тщательного и многогранного подхода!
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  А мы всегда готовы Вам помочь с консультацией и качественным подбором изделий под Ваш бюджет и желания!
                </span>
                <span className="text-[15px] lg:text-[18px]">
                  Наша цель - создать наилучшие решения для каждого заказа! Ведь КАЧЕСТВО НА ГОДА превыше всего!
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

<<<<<<< HEAD
      <Layout>
        <div className="">
          <h2
            className="text-[23px] mb-5 font-Montserrat flex items-center justify-center text-dark mb-0 text-center md:text-left md:text-[45px] font-bold uppercase"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Цели
          </h2>
          <div className="grid px-5 grid-cols-1 mt-0 md:mt-10 lg:grid-cols-2 gap-6">
            {data3?.length > 0 &&
              data3.map((item) => (
                <div
                  className="card flex flex-col items-center lg:items-start gap-0 md:gap-2 card-shadow rounded-md py-10 h-auto px-5 text-white"
                  data-aos="fade-up"
                  data-aos-delay={500}
                  style={{
                    background: "#EADA86",
                  }}
                >
                  <div className="flex items-center flex-col lg:flex-row gap-[30px]">
                    <span className="bg-white flex items-center justify-center w-[100px] h-[100px] rounded-full">
                      <img src={check} alt="" />
                    </span>
                    <span className="text-[20px] md:text-[26px] text-[#404040] font-Montserrat font-bold ">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[15px] md:text-[16px] text-center w-full lg:w-[90%] lg:text-justify">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>

          <PortalAbout title="Сертификаты, дипломы и награды" />
        </div>
      </Layout>

      {/* slider */}
      <SliderDark />

      {/* consultstion */}
      <div className="mt-24">
        <Consultation />
=======
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-[23px] font-Montserrat text-dark mb-0 text-center md:text-left md:text-[45px] font-bold uppercase"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          Цели
        </h2>
        <div className="grid px-5 grid-cols-1 mt-0 md:mt-10  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="card flex flex-col md:flex-row items-center gap-0 md:gap-8 card-shadow rounded-md py-10 h-auto px-5"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-Montserrat font-bold ">
              01
            </h2>
            <p className="text-[15px] md:text-[18px] text-center md:text-left text-dark ">
              Максимальное удовлетворение потребности клиента.
            </p>
          </div>
          <div
            className="card flex flex-col md:flex-row items-center gap-0 md:gap-8 card-shadow rounded-md py-10 h-auto px-5"
            data-aos="fade-up"
            data-aos-delay={700}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-Montserrat font-bold ">
              02
            </h2>
            <p className="text-[15px] md:text-[17px] text-center md:text-left text-dark ">
              Внедрение и развитие новых направлений деятельности компании.
            </p>
          </div>
          <div
            className="card flex flex-col md:flex-row items-center gap-0 md:gap-8 card-shadow rounded-md py-10 h-auto px-5"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            <h2 className="text-linear text-[40px] md:text-[45px] font-Montserrat font-bold ">
              03
            </h2>
            <p className="text-[15px] md:text-[18px] text-center md:text-left text-dark ">
              Достижение конкурентного преимущества благодаря выполнению полного
              цикла работ
            </p>
          </div>
        </div>

        <h2 className="text-[23px] mx-5 font-Montserrat mt-20 text-dark mb-0 text-center md:text-left md:text-[45px] font-bold uppercase flex items-center gap-3 justify-center flex-wrap">
        <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Сертификаты, дипломы и награды</span>
          {/* {"Сертификаты, дипломы и награды".split(" ").map((item, index) => (
            <div
              key={Math.random().toString()}
              data-aos="fade-right"
              data-aos-delay={500 + (index + 1) * 150}
            >
              {item}
            </div>
          ))} */}
        </h2>
        <div className="hidden md:grid px-5 grid-cols-1 mt-0 md:mt-10  md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="card h-[400px] bg-[#D9D9D9]"
            data-aos="fade-up"
            data-aos-delay={300}
          ></div>
          <div
            className="card h-[400px] bg-[#D9D9D9]"
            data-aos="fade-up"
            data-aos-delay={500}
          ></div>
          <div
            className="card h-[400px] bg-[#D9D9D9]"
            data-aos="fade-up"
            data-aos-delay={700}
          ></div>
          <div
            className="card h-[400px] bg-[#D9D9D9]"
            data-aos="fade-up"
            data-aos-delay={900}
          ></div>
        </div>
      </div>

      {/* slider */}
      <Slider />

      <div className="consultation overflow-hidden p-2 lg:px-5 mt-[200px] lg:mt-[189px] grid grid-1 lg:grid-cols-2 gap-10 lg:gap-[80px] pl-[10px] lg:pl-[50px] xl:pl-32 items-center">
        <div
          className="bg-[#FAF9F9] rounded-[20px] text-center py-12 px-2 lg:px-8"
          data-aos="fade-right"
          data-aos-delay={300}
          style={{
            boxShadow: "4px 4px 25px -9px rgba(0, 0, 0, 0.20)"
          }}
        >
          <h2 className="text-dark text-[18px] lg:text-[20px] xl:text-[22px] font-Montserrat font-extrabold md:text-[35px]">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </h2>
          <p className="text-dark text-[15px] lg:text-[16px] xl:text-[18px]">
            Оставьте заявку и в ближайшее время мы с <br /> Вами свяжемся
          </p>
          <form
            className="flex flex-col items-center justify-center w-full pt-[60px]"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col items-start w-full lg:w-[430px]">
              <label htmlFor="name" className="text-[#2E303DB8] text-base">
                Ваше имя
              </label>
              <input
                type="text"
                name="user_name"
                id="name_1"
                placeholder="10"
                className="input w-full lg:w-[430px] px-4 mt-2 rounded-md h-[60px] md:h-[50px]"
                ref={name_ref}
                required
              />
            </div>
            <div className="flex flex-col items-start mt-5 w-full lg:w-[430px]">
              <label htmlFor="name" className="text-[#2E303DB8] text-base">
                Ваш номер телефона *
              </label>
              <PhoneInput
                className={`phone_input h-[60px] bg-white text-[15px] md:text-[17px] font-[500] py-[1px] pr-[5px] md:pr-[10px] focus:outline-none w-full md:w-[430px] px-4 mt-2 rounded-md md:h-[50px]`}
                placeholder='+7(___) __-__-__'
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
            <button
              className="button mt-12 md:w-[430px] tracking-[1.62px] h-[50px] lg:h-[60px] xl:h-[70px] w-full uppercase text-[15px] lg:text-[16px] xl:text-[18px] font-bold"
              type="submit"
              style={{
                background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
              }}
            >
              Получить консультацию
            </button>
            <p className="mt-6 text-[15px] lg:text-[16px] text-[#2E303DB8]">
              Нажимая кнопку, вы даете согласие на <br />
              <a href="#1" className="underline">обработку персональных данных</a>
            </p>
          </form>
        </div>
        <div
          className="w-full lg:px-0 lg:mt-0 relative ml-4 lg:ml-10"
          data-aos="fade-left"
          data-aos-delay={600}
        >
          <div className="w-full h-[420px] bg-linear relative">
            <img
              src={cardDatailimg}
              className="rounded-none w-full h-[420px] object-cover z-[99] absolute top-[20px] -right-[150px] -left-[20px]"
              alt="mockup"
            />
          </div>
        </div>
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      </div>
    </div>
  );
};

export default AboutUs;
