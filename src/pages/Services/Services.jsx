<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";

// new images
import utepleniye_balkonov from "../../assets/services/main/utepleniye_balkonov.png";
import setki from "../../assets/services/main/setki.png";
import jalyuzi from "../../assets/services/main/jalyuzi.png";
import rolleti from "../../assets/services/main/rolleti.png";
import markizi from "../../assets/services/main/markizi.png";
import padakonnik from "../../assets/services/main/padakonnik.png";
import otkozi from "../../assets/services/main/otkozi.png";
import { Helmet } from "react-helmet";

const data = [
  {
    id: Math.random().toString(),
    imgSrc: utepleniye_balkonov,
    title: "Утепление балконов",
    link: "/services/insulation-of-balconies",
    aos_duration: 2200,
    // data: {
    //   title: "Утепление балконов",
    //   textTop: "Современные балконы и лоджии уже не захламляют ненужными вещами, а стараются сделать из них дополнительное помещение. Вариантов на самом деле много: это может быть комната отдыха, игровая, кабинет и др. Все зависит от фантазии владельца балкона. Одним из недостатков такого помещения является низкая температура, особенно зимой. И поэтому, чтобы сделать из лоджии комнату, первым делом необходимо ее утеплить. Для этого стоит разобраться, какие материалы необходимы, и каким инструкциям следовать.",
    //   textCenter: "",
    //   textBottom: "",
    //   box: {
    //     title: "Существует 3 основных способа утепления балконов и лоджий",
    //     col1: {
    //       title: "Снаружи",
    //       text: "в этом способе промерзает только наружная часть в сторону вмонтированного утеплителя. При этом экономится внутреннее пространство и сохраняются несущие свойства стены. Однако, самостоятельно утеплять балкон снаружи опасно, необходимо воспользоваться услугами промышленных альпинистов",
    //     },
    //     col2: {
    //       title: "Изнутри",
    //       text: "самый распространенный метод утепления, который позволяет провести все работы самостоятельно. Только при этом уменьшается внутреннее пространство",
    //     },
    //     col3: {
    //       title: "С двух сторон",
    //       text: "совершенно нецелесообразный способ, который не улучшает теплоизоляционные свойства, но затраты увеличивает в несколько раз.",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: setki,
    title: "Сетки плиссе, москитные",
    link: "/services/mosquito-net",
    aos_duration: 2200,
    // data: {
    //   title: "Маскитные Сетки",
    //   textTop: "Наши маскитные сетки – это надежная защита от назойливых насекомых, которая позволит вам наслаждаться свежим воздухом, не беспокоясь о комарах, мухах и других неприятных гостях. Мы предлагаем широкий ассортимент маскитных сеток, которые подходят для окон, дверей, балконов и террас.",
    //   textCenter: "Наши сетки изготовлены из высококачественных материалов, которые обеспечивают долговечность и эффективную защиту от насекомых. Они прочные и устойчивы к повреждениям, так что вы можете быть уверены в их надежности на протяжении многих лет.",
    //   textBottom: "",
    //   box: {
    //     title: "Преимущества маскитных сеток",
    //     col1: {
    //       title: "Защита от насекомых",
    //       text: "Маскитные сетки эффективно предотвращают проникновение комаров, мух, и других  насекомых в ваше жилище . Они создают барьер, который не позволяет насекомым проникнуть в помещение",
    //     },
    //     col2: {
    //       title: "Поддержание свежего воздуха",
    //       text: "сетки позволяют полноценно проветривать помещение, не допуская насекомых. Вы сможете наслаждаться свежим воздухом, не беспокоясь о необходимости закрывать окна и двери.",
    //     },
    //     col3: {
    //       title: "Долговечность и надежность",
    //       text: "Наши сетки изготовлены из качественных материалов, которые обладают высокой стойкостью к воздействию солнечных лучей, влаги и механических повреждений",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: jalyuzi,
    title: "Жалюзи плиссе и др.",
    link: "/services/blinds-pleated",
    aos_duration: 2400,
    // data: {
    //   title: "Сетки плиссе",
    //   textTop: "Пластиковые окна являются надежным и практичным решением для вашего дома. Они обеспечивают отличную теплоизоляцию, шумоизоляцию и защиту от внешних воздействий. Однако, чтобы создать максимальный комфорт и сохранить ваше жилье от насекомых и пыли, мы предлагаем вам дополнительную услугу - установку сеток плиссе.",
    //   textCenter: "Уcтановка сеток плиссе осуществляется профессиональными мастерами, которые учтут все особенности ваших оконных проемов и подберут наиболее подходящий вариант. Сетки изготавливаются на заказ, поэтому вы можете быть уверены, что они будут идеально соответствовать вашим окнам.",
    //   textBottom: "",
    //   box: {
    //     title: "Преимущества сеток ПЛиссе",
    //     col1: {
    //       title: "Защита от насекомых",
    //       text: "Эффективно предотвращают проникновение комаров, мух, ос и других назойливых насекомых в ваше жилище или офис. Они создают барьер, который не позволяет насекомым проникнуть в помещение",
    //     },
    //     col2: {
    //       title: "Пылезащита",
    //       text: "Сетки задерживают пыль и другие мелкие частицы, создавая более чистую и здоровую атмосферу в помещении.",
    //     },
    //     col3: {
    //       title: "Легко чистятся",
    //       text: "Сетки плиссе легко снимаются для чистки и ухода, что обеспечивает длительный срок их эксплуатации.",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: rolleti,
    title: "Секционные ворота, роллеты",
    link: "/services/sectional-doors",
    aos_duration: 2600,
    // data: {
    //   title: "Тканевые ролеты",
    //   textTop: "Наши тканевые ролеты - идеальное решение для вашего окна. Они сочетают в себе функциональность и элегантность, создавая уютную атмосферу в вашем доме.",
    //   textCenter: "Тканевые ролеты идеально подходят для регулировки проникновения света в помещение. Вы сами решаете, насколько освещенным будет ваше помещение - от полной затемненности до мягкого проникновения света. Также они эффективно защищают от солнечных лучей, предотвращая перегрев помещения и сохраняя комфортную температуру.",
    //   textBottom: "Мы предлагаем широкий выбор тканей для ролет, чтобы каждый клиент мог найти идеальное сочетание цвета и текстуры под свой интерьер. Наши ткани изготовлены из высококачественных материалов, которые не выгорают на солнце и легко чистятся.",
    //   box: {
    //     title: "Преимущества ролетов",
    //     col1: {
    //       title: "Стильный внешний вид",
    //       text: "Тканевые ролеты создают уютную и современную атмосферу в помещении, придают комнате индивидуальность и стиль.",
    //     },
    //     col2: {
    //       title: "Регулируемость освещения",
    //       text: "Тканевые ролеты можно легко регулировать, открывая и закрывая их на нужную высоту. Это позволяет контролировать освещение в помещении и создавать комфортную атмосферу.",
    //     },
    //     col3: {
    //       title: "Звукоизоляция",
    //       text: "Тканевые ролеты также помогают улучшить звукоизоляцию помещения, снижая шум извне и создавая более спокойную атмосферу внутри.",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: markizi,
    title: "Маркизы, перголы",
    link: "/services/pergolas",
    aos_duration: 2800,
    // data: {
    //   title: "маркизы, перголы",
    //   textTop: "Представляет собой процесс отделки и обработки внутренних откосов оконного проема. Это важная процедура, которая не только придает красоту и завершенный вид окнам, но и имеет несколько преимуществ.",
    //   textCenter: "Являются неотъемлемым компонентом качественного оконного ремонта. Она помогает улучшить теплоизоляцию, звукоизоляцию, а также придает окнам эстетический вид, обеспечивая комфорт и удобство в жилище.",
    //   textBottom: "",
    //   box: {
    //     title: "Преимущества откосов",
    //     col1: {
    //       title: "Улучшение теплоизоляции",
    //       text: "Откосы помогают устранить холодные мосты и минимизировать потерю тепла через оконные проемы. Это позволяет снизить затраты на отопление и создать комфортные условия в помещении.",
    //     },
    //     col2: {
    //       title: "Визуальное преображение окон",
    //       text: "Придают и эстетически привлекательный вид оконам. Они могут быть выполнены в различных стилях и отделках, позволяя согласовать их с интерьером помещения и создать гармоничный образ.",
    //     },
    //     col3: {
    //       title: "Легкость в уходе",
    //       text: "Правильно установленные откосы позволяют легко ухаживать за окнами и оконными рамами. Они облегчают процесс чистки окон и поддержания их в идеальном состоянии.",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: padakonnik,
    title: "Подоконники",
    link: "/services/window-sills",
    aos_duration: 3000,
    // data: {
    //   title: "Подоконники",
    //   textTop: "Окна с установленными подоконниками обеспечивают не только функциональность, но и эстетическую привлекательность помещения. Выбор оконных подоконников предоставляет широкие возможности для создания уютной и комфортной атмосферы в помещении, а также повышения тепло- и звукоизоляции.",
    //   textCenter: "",
    //   textBottom: "",
    //   box: {
    //     title: "Преимущества наших подоконников",
    //     col1: {
    //       title: "Защита оконного проема",
    //       text: "Подоконник предотвращает проникновение осадков и грязи в оконные проемы, что способствует сохранению качества окон и их долговечности.",
    //     },
    //     col2: {
    //       title: "Простота обслуживания",
    //       text: "Установка не требует сложных работ и может быть выполнена профессиональными мастерами. При этом, для ухода за подоконником достаточно регулярного чистки и протирания.",
    //     },
    //     col3: {
    //       title: "Удобство использования",
    //       text: "Предоставляет дополнительное пространство для размещения различных предметов, таких как декоративные элементы, цветы, книги и т.д. Это позволяет делать помещение более функциональным и уютным.",
    //     },
    //   }
    // }
  },
  {
    id: Math.random().toString(),
    imgSrc: otkozi,
    title: "Откосы, отливы",
    link: "/services/slopes_ebbs",
    aos_duration: 3000,
    // data: {
    //   title: "Подоконники",
    //   textTop: "Окна с установленными подоконниками обеспечивают не только функциональность, но и эстетическую привлекательность помещения. Выбор оконных подоконников предоставляет широкие возможности для создания уютной и комфортной атмосферы в помещении, а также повышения тепло- и звукоизоляции.",
    //   textCenter: "",
    //   textBottom: "",
    //   box: {
    //     title: "Преимущества наших подоконников",
    //     col1: {
    //       title: "Защита оконного проема",
    //       text: "Подоконник предотвращает проникновение осадков и грязи в оконные проемы, что способствует сохранению качества окон и их долговечности.",
    //     },
    //     col2: {
    //       title: "Простота обслуживания",
    //       text: "Установка не требует сложных работ и может быть выполнена профессиональными мастерами. При этом, для ухода за подоконником достаточно регулярного чистки и протирания.",
    //     },
    //     col3: {
    //       title: "Удобство использования",
    //       text: "Предоставляет дополнительное пространство для размещения различных предметов, таких как декоративные элементы, цветы, книги и т.д. Это позволяет делать помещение более функциональным и уютным.",
    //     },
    //   }
    // }
  },
];

// million-ignore
const Services = () => {
  return (
    <div className="mb-[0px] md:mb-[244px]">
      <Helmet>
        <title>Утепление балконов и лоджий в Спб и ЛО |ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Утепление балконов и лоджий в Спб и ЛО! "
        />
      </Helmet>

      <h1 className="title uppercase font-Montserrat my-[25px] lg:my-[50px] md:my-[86px] font-bold text-[23px] lg:text-[35px] xl:text-[45px] flex items-center gap-3 flex-wrap justify-center">
        {/* {"ДОПОЛНИТЕЛЬНЫЕ" <br /> "УСЛУГИ".split(" ").map((item, index) => ( */}
        <span
          key={Math.random().toString()}
          data-aos="fade-right"
          data-aos-delay={1700}
          className="text-center"
        >
          ДОПОЛНИТЕЛЬНЫЕ <br /> УСЛУГИ
        </span>
        {/* ))} */}
      </h1>
      <div className="services-cards pr-10 lg:pr-4 pl-10 max-w-[1800px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {data?.length > 0 &&
          data.map((item) => (
            <Link to={item.link} key={item.id}>
              <div
                className="card relative cursor-pointer"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={item.aos_duration}
              >
                <img src={item.imgSrc} alt="card" className="mb-[18px]" />
                <div className="w-full absolute text-white bottom-[15px] lg:bottom-6 md:bottom-[25px] flex items-center flex-col text-center text-[20px] lg:text-[22px]">
                  <h5>{item.title}</h5>
                  <hr className="w-[50%] md:w-[80%] lg:mt-3 mt-1 mb-1 lg:mb-3 h-[1px] bg-[#BDBDBD]" />
                  <span
                    className="text-[13px] lg:text-[15px] block  font-normal font-Montserrat"
                    style={{
                      fontStyle: "normal",
                      fontVariant: "diagonal-fractions",
                    }}
                  >
                    Подробнее
                  </span>
                </div>
              </div>
            </Link>
          ))}
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import { useNavigate } from "react-router-dom";
import cardDatailimg from "../../assets/card-detail.png";
import cardImg from "../../assets/Rectangle 109.png";
import details1 from "../../assets/home/details1.png";
import details2 from "../../assets/home/details2.png";
import details3 from "../../assets/home/details3.png";
import details4 from "../../assets/home/details4.png";
import pod from "../../assets/home/pod.png";
import otkos from "../../assets/home/otkos.png";
import setki from "../../assets/home/setki.png";
import tkan from "../../assets/home/tkan.png";
const data = [
  {
    id: Math.random().toString(),
    imgSrc: cardImg,
    inlineImgSrc: cardDatailimg,
    title: "Сетки",
    aos_duration: 2200,
    data: {
      title: "Маскитные Сетки",
      textTop: "Наши маскитные сетки – это надежная защита от назойливых насекомых, которая позволит вам наслаждаться свежим воздухом, не беспокоясь о комарах, мухах и других неприятных гостях. Мы предлагаем широкий ассортимент маскитных сеток, которые подходят для окон, дверей, балконов и террас.",
      textCenter: "Наши сетки изготовлены из высококачественных материалов, которые обеспечивают долговечность и эффективную защиту от насекомых. Они прочные и устойчивы к повреждениям, так что вы можете быть уверены в их надежности на протяжении многих лет.",
      textBottom: "",
      box: {
        title: "Преимущества маскитных сеток",
        col1: {
          title: "Защита от насекомых",
          text: "Маскитные сетки эффективно предотвращают проникновение комаров, мух, и других  насекомых в ваше жилище . Они создают барьер, который не позволяет насекомым проникнуть в помещение",
        },
        col2: {
          title: "Поддержание свежего воздуха",
          text: "сетки позволяют полноценно проветривать помещение, не допуская насекомых. Вы сможете наслаждаться свежим воздухом, не беспокоясь о необходимости закрывать окна и двери.",
        },
        col3: {
          title: "Долговечность и надежность",
          text: "Наши сетки изготовлены из качественных материалов, которые обладают высокой стойкостью к воздействию солнечных лучей, влаги и механических повреждений",
        },
      }
    }
  },
  {
    id: Math.random().toString(),
    imgSrc: details1,
    inlineImgSrc: setki,
    title: "Сетки плиссе",
    aos_duration: 2400,
    data: {
      title: "Сетки плиссе",
      textTop: "Пластиковые окна являются надежным и практичным решением для вашего дома. Они обеспечивают отличную теплоизоляцию, шумоизоляцию и защиту от внешних воздействий. Однако, чтобы создать максимальный комфорт и сохранить ваше жилье от насекомых и пыли, мы предлагаем вам дополнительную услугу - установку сеток плиссе.",
      textCenter: "Уcтановка сеток плиссе осуществляется профессиональными мастерами, которые учтут все особенности ваших оконных проемов и подберут наиболее подходящий вариант. Сетки изготавливаются на заказ, поэтому вы можете быть уверены, что они будут идеально соответствовать вашим окнам.",
      textBottom: "",
      box: {
        title: "Преимущества сеток ПЛиссе",
        col1: {
          title: "Защита от насекомых",
          text: "Эффективно предотвращают проникновение комаров, мух, ос и других назойливых насекомых в ваше жилище или офис. Они создают барьер, который не позволяет насекомым проникнуть в помещение",
        },
        col2: {
          title: "Пылезащита",
          text: "Сетки задерживают пыль и другие мелкие частицы, создавая более чистую и здоровую атмосферу в помещении.",
        },
        col3: {
          title: "Легко чистятся",
          text: "Сетки плиссе легко снимаются для чистки и ухода, что обеспечивает длительный срок их эксплуатации.",
        },
      }
    }
  },
  {
    id: Math.random().toString(),
    imgSrc: details2,
    inlineImgSrc: tkan,
    title: "Тканевые ролеты",
    aos_duration: 2600,
    data: {
      title: "Тканевые ролеты",
      textTop: "Наши тканевые ролеты - идеальное решение для вашего окна. Они сочетают в себе функциональность и элегантность, создавая уютную атмосферу в вашем доме.",
      textCenter: "Тканевые ролеты идеально подходят для регулировки проникновения света в помещение. Вы сами решаете, насколько освещенным будет ваше помещение - от полной затемненности до мягкого проникновения света. Также они эффективно защищают от солнечных лучей, предотвращая перегрев помещения и сохраняя комфортную температуру.",
      textBottom: "Мы предлагаем широкий выбор тканей для ролет, чтобы каждый клиент мог найти идеальное сочетание цвета и текстуры под свой интерьер. Наши ткани изготовлены из высококачественных материалов, которые не выгорают на солнце и легко чистятся.",
      box: {
        title: "Преимущества ролетов",
        col1: {
          title: "Стильный внешний вид",
          text: "Тканевые ролеты создают уютную и современную атмосферу в помещении, придают комнате индивидуальность и стиль.",
        },
        col2: {
          title: "Регулируемость освещения",
          text: "Тканевые ролеты можно легко регулировать, открывая и закрывая их на нужную высоту. Это позволяет контролировать освещение в помещении и создавать комфортную атмосферу.",
        },
        col3: {
          title: "Звукоизоляция",
          text: "Тканевые ролеты также помогают улучшить звукоизоляцию помещения, снижая шум извне и создавая более спокойную атмосферу внутри.",
        },
      }
    }
  },
  {
    id: Math.random().toString(),
    imgSrc: details3,
    inlineImgSrc: otkos,
    title: "Откосы",
    aos_duration: 2800,
    data: {
      title: "Откосы",
      textTop: "Представляет собой процесс отделки и обработки внутренних откосов оконного проема. Это важная процедура, которая не только придает красоту и завершенный вид окнам, но и имеет несколько преимуществ.",
      textCenter: "Являются неотъемлемым компонентом качественного оконного ремонта. Она помогает улучшить теплоизоляцию, звукоизоляцию, а также придает окнам эстетический вид, обеспечивая комфорт и удобство в жилище.",
      textBottom: "",
      box: {
        title: "Преимущества откосов",
        col1: {
          title: "Улучшение теплоизоляции",
          text: "Откосы помогают устранить холодные мосты и минимизировать потерю тепла через оконные проемы. Это позволяет снизить затраты на отопление и создать комфортные условия в помещении.",
        },
        col2: {
          title: "Визуальное преображение окон",
          text: "Придают и эстетически привлекательный вид оконам. Они могут быть выполнены в различных стилях и отделках, позволяя согласовать их с интерьером помещения и создать гармоничный образ.",
        },
        col3: {
          title: "Легкость в уходе",
          text: "Правильно установленные откосы позволяют легко ухаживать за окнами и оконными рамами. Они облегчают процесс чистки окон и поддержания их в идеальном состоянии.",
        },
      }
    }
  },
  {
    id: Math.random().toString(),
    imgSrc: details4,
    inlineImgSrc: pod,
    title: "Подоконники",
    aos_duration: 3000,
    data: {
      title: "Подоконники",
      textTop: "Окна с установленными подоконниками обеспечивают не только функциональность, но и эстетическую привлекательность помещения. Выбор оконных подоконников предоставляет широкие возможности для создания уютной и комфортной атмосферы в помещении, а также повышения тепло- и звукоизоляции.",
      textCenter: "",
      textBottom: "",
      box: {
        title: "Преимущества наших подоконников",
        col1: {
          title: "Защита оконного проема",
          text: "Подоконник предотвращает проникновение осадков и грязи в оконные проемы, что способствует сохранению качества окон и их долговечности.",
        },
        col2: {
          title: "Простота обслуживания",
          text: "Установка не требует сложных работ и может быть выполнена профессиональными мастерами. При этом, для ухода за подоконником достаточно регулярного чистки и протирания.",
        },
        col3: {
          title: "Удобство использования",
          text: "Предоставляет дополнительное пространство для размещения различных предметов, таких как декоративные элементы, цветы, книги и т.д. Это позволяет делать помещение более функциональным и уютным.",
        },
      }
    }
  },
];

const Services = () => {
  const navigate = useNavigate();

  // navigate handler
  const navigateHandler = value => {
    navigate(`/services-detail/${value.id}/${value.title}`, { state: value });
  }

  return (
    <div className="mb-[122px] md:mb-[244px]">
      {/* <h2 className="title text-center my-[50px] md:my-[86px]">Наши услуги</h2> */}
      <h1
        className="title uppercase font-Montserrat my-[50px] md:my-[86px] font-bold text-[25px] lg:text-[35px] xl:text-[45px] flex items-center gap-3 flex-wrap justify-center">
          <span
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Наши услуги</span>
        {/* {"Наши услуги".split(" ").map((item, index) => (
          <span
            key={Math.random().toString()}
            data-aos="fade-right"
            data-aos-delay={1700 + (index + 1) * 150}
          >{item}</span>
        ))} */}
      </h1>
      <div className="services-cards px-4 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {data?.length > 0 && data.map(item => (
          <div
            key={item.id}
            className="card relative cursor-pointer"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={item.aos_duration}
            onClick={() => navigateHandler(item)}
          >
            <img src={item.imgSrc} alt="card" className="mb-[18px]" />
            <div className="w-full absolute text-white bottom-[45px] md:bottom-[71.5px] flex items-center flex-col text-center text-[20px] md:text-[25px]">
              <h5>{item.title}</h5>
              <hr className="w-[50%] md:w-[80%] mt-[15.5px] mb-[18px] lg:mb-0" />
              <span className="text-[13px] lg:text-[15px] block lg:hidden font-normal font-Montserrat"
                style={{ fontStyle: "normal", fontVariant: "diagonal-fractions" }}
              >Подробнее</span>
            </div>
          </div>
        ))}
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      </div>
    </div>
  );
};

export default Services;
