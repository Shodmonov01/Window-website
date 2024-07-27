<<<<<<< HEAD
<<<<<<< HEAD
import okno from "../../assets/wooden/structures/main/okno.png";
import balkon_dver from "../../assets/wooden/structures/main/balkon_dver.png";
import balkon_lodji from "../../assets/wooden/structures/main/balkon_lodji.png";
import vxod_gruppi from "../../assets/wooden/structures/main/vxod_gruppi.png";
import besedka from "../../assets/wooden/structures/main/besedka.png";
import sistemi from "../../assets/wooden/structures/main/sistemi.png";
import kotej from "../../assets/wooden/structures/main/kotej.png";
// okno
import okno1 from "../../assets/wooden/structures/okno/okno1.png";
import okno2 from "../../assets/wooden/structures/okno/okno2.jpg";
import okno3 from "../../assets/wooden/structures/okno/okno3.jpg";
import okno4 from "../../assets/wooden/structures/okno/okno4.jpg";
// dver
import dver1 from "../../assets/wooden/structures/dver/dver1.png";
import dver2 from "../../assets/wooden/structures/dver/dver2.jpg";
import dver3 from "../../assets/wooden/structures/dver/dver3.jpg";
import dver4 from "../../assets/wooden/structures/dver/dver4.jpg";
// balkon
import balkon_lodji1 from "../../assets/wooden/structures/balkon/balkon_lodji1.png";
import balkon_lodji2 from "../../assets/wooden/structures/balkon/balkon_lodji2.jpg";
import balkon_lodji3 from "../../assets/wooden/structures/balkon/balkon_lodji3.jpg";
import balkon_lodji4 from "../../assets/wooden/structures/balkon/balkon_lodji4.jpg";
// vxod_gruppi
import vxod_gruppi1 from "../../assets/wooden/structures/vxod_gruppi/vxod_gruppi1.png";
import vxod_gruppi2 from "../../assets/wooden/structures/vxod_gruppi/vxod_gruppi2.jpg";
import vxod_gruppi3 from "../../assets/wooden/structures/vxod_gruppi/vxod_gruppi3.jpg";
import vxod_gruppi4 from "../../assets/wooden/structures/vxod_gruppi/vxod_gruppi4.jpg";
// besedka
import besedka1 from "../../assets/wooden/structures/besedka/besedka1.png";
import besedka2 from "../../assets/wooden/structures/besedka/besedka2.jpg";
import besedka3 from "../../assets/wooden/structures/besedka/besedka3.jpg";
import besedka4 from "../../assets/wooden/structures/besedka/besedka4.jpg";
// kotej
import kotej1 from "../../assets/wooden/structures/kotej/kotej1.png";
import kotej2 from "../../assets/wooden/structures/kotej/kotej2.jpg";
import kotej3 from "../../assets/wooden/structures/kotej/kotej3.jpg";
import kotej4 from "../../assets/wooden/structures/kotej/kotej4.jpg";

export const wooden_data = [
  {
    id: Math.random().toString(),
    name: "Окна",
    imgSrc: okno,
    modal: {
      textTop:
        "Деревянные окна со стеклопакетом можно сделать любого оттенка: с сохранением текстуры дерева или без (однотонное). Все зависит только от вашей фантазии. В производстве окон из массива используются безопасные экологически чистые краски австрийского концерна Adler, специально созданные для того, чтобы максимально защитить и продлить срок службы деревянных окон со стеклопакетом",
      textCenter: "",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Входные и балконные двери",
    imgSrc: balkon_dver,
    modal: {
      textTop:
        "Эффектные деревянные двери из сосны, лиственницы или дуба станут украшением вашего дома. Большой выбор конфигураций (глухие или со стеклопакетом) и современный многозапорный замок с возможностью доступа по отпечатку пальца. Дверь можно сделать любого оттенка: с сохранением текстуры дерева или без (однотонная)",
      textCenter: "",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Балконы, лоджии",
    imgSrc: balkon_lodji,
    modal: {
      textTop:
        "Одним из часто используемых материалов для остекления становится дерево. Деревянные рамы обладают множеством преимуществ:",
      textCenter:
        " · эстетичный внешний вид; <br /> · высокая морозостойкость (до -120°C); <br /> · энергосбережение и экологичность. ",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Входные группы",
    imgSrc: vxod_gruppi,
    modal: {
      textTop:
        "Эффектные деревянные двери из сосны, лиственницы или дуба станут украшением вашего дома. Большой выбор конфигураций (глухие или со стеклопакетом) и современный многозапорный замок с возможностью доступа по отпечатку пальца. Дверь можно сделать любого оттенка: с сохранением текстуры дерева или без (однотонная)",
      textCenter: "",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Террасы, беседки",
    imgSrc: besedka,
    modal: {
      textTop:
        "Раздвижные окна для веранды и террасы нашего производства изготавливаются по европейским стандартам качества – рамы из дерева ценных пород и качественные комплектующие из Европы",
      // textCenter:
      //   "Остекленная терраса позволяет создать максимально открытое, теплое помещение, где вы будете наслаждаться уютными семейными вечерами в любое время года. У нас вы сможете купить европейские системы деревянных раздвижных окон для веранды и на террасу. Цена рассчитывается индивидуально.",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Раздвижные системы",
    imgSrc: sistemi,
    modal: {
      textTop:
        "Остекленная терраса позволяет создать максимально открытое, теплое помещение, где вы будете наслаждаться уютными семейными вечерами в любое время года. У нас вы сможете купить европейские системы деревянных раздвижных окон для веранды и на террасу. Цена рассчитывается индивидуально.",
      // textCenter:
      //   "Остекленная терраса позволяет создать максимально открытое, теплое помещение, где вы будете наслаждаться уютными семейными вечерами в любое время года. У нас вы сможете купить европейские системы деревянных раздвижных окон для веранды и на террасу. Цена рассчитывается индивидуально.",
      textBottom: "",
    },
  },
  {
    id: Math.random().toString(),
    name: "Остекление коттеджей, домов",
    imgSrc: kotej,
    modal: {
      textTop:
        "Деревянные двери на заказ - это элегантное украшение дома, защита от непогоды и незаконного вторжения. Сегодня многие владельцы частных домов в Санкт-Петербурге предпочитают заказать деревянные конструкции, потому что это статусно, изысканно, экологично и надежно. Дверь из дерева защищает от шума, пыли, выглядит презентабельно, а натуральная текстура дерева всегда будет в тренде",
      textCenter: "",
      textBottom: "",
    },
  },
];

export const wooden_data_images = [
  {
    id: Math.random().toString(),
    name: "Окна",
    images: [
      {
        id: Math.random().toString(),
        image: okno1,
      },
      {
        id: Math.random().toString(),
        image: okno2,
      },
      {
        id: Math.random().toString(),
        image: okno3,
      },
      {
        id: Math.random().toString(),
        image: okno4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Входные и балконные двери",
    images: [
      {
        id: Math.random().toString(),
        image: dver1,
      },
      {
        id: Math.random().toString(),
        image: dver2,
      },
      {
        id: Math.random().toString(),
        image: dver3,
      },
      {
        id: Math.random().toString(),
        image: dver4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Балконы, лоджии",
    images: [
      {
        id: Math.random().toString(),
        image: balkon_lodji1,
      },
      {
        id: Math.random().toString(),
        image: balkon_lodji2,
      },
      {
        id: Math.random().toString(),
        image: balkon_lodji3,
      },
      {
        id: Math.random().toString(),
        image: balkon_lodji4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Входные группы",
    images: [
      {
        id: Math.random().toString(),
        image: vxod_gruppi1,
      },
      {
        id: Math.random().toString(),
        image: vxod_gruppi2,
      },
      {
        id: Math.random().toString(),
        image: vxod_gruppi3,
      },
      {
        id: Math.random().toString(),
        image: vxod_gruppi4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Террасы, беседки",
    images: [
      {
        id: Math.random().toString(),
        image: besedka1,
      },
      {
        id: Math.random().toString(),
        image: besedka2,
      },
      {
        id: Math.random().toString(),
        image: besedka3,
      },
      {
        id: Math.random().toString(),
        image: besedka4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Раздвижные системы",
    images: [
      {
        id: Math.random().toString(),
        image: besedka1,
      },
      {
        id: Math.random().toString(),
        image: besedka2,
      },
      {
        id: Math.random().toString(),
        image: besedka3,
      },
      {
        id: Math.random().toString(),
        image: besedka4,
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Остекление коттеджей, домов",
    images: [
      {
        id: Math.random().toString(),
        image: kotej1,
      },
      {
        id: Math.random().toString(),
        image: kotej2,
      },
      {
        id: Math.random().toString(),
        image: kotej3,
      },
      {
        id: Math.random().toString(),
        image: kotej4,
      },
    ],
  },
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import main1 from "../../assets/wooden/structures/main/main1.png";
import main2 from "../../assets/wooden/structures/main/main2.png";
import main3 from "../../assets/wooden/structures/main/main3.png";
// okno
import okno1 from "../../assets/wooden/structures/okno/okno1.jpg";
import okno2 from "../../assets/wooden/structures/okno/okno2.jpg";
import okno3 from "../../assets/wooden/structures/okno/okno3.jpg";
import okno4 from "../../assets/wooden/structures/okno/okno4.jpg";
// stupeni
import stupeni1 from "../../assets/wooden/structures/stupeni/stupeni1.jpg";
import stupeni2 from "../../assets/wooden/structures/stupeni/stupeni2.jpg";
import stupeni3 from "../../assets/wooden/structures/stupeni/stupeni3.jpg";
import stupeni4 from "../../assets/wooden/structures/stupeni/stupeni4.jpg";
// balkon
import balkon1 from "../../assets/wooden/structures/balkon/balkon1.jpg";
import balkon2 from "../../assets/wooden/structures/balkon/balkon2.jpg";
import balkon3 from "../../assets/wooden/structures/balkon/balkon3.jpg";
import balkon4 from "../../assets/wooden/structures/balkon/balkon4.jpg";


export const wooden_data = [
    {
        id: Math.random().toString(),
        name: "Окна и двери",
        imgSrc: main1,
        modal: {
            textTop: "Остекление включает в себя окна, витражи и стеклянные двери, которые пропускают естественный свет и обеспечивают визуальный контакт с окружающей средой. благодаря своей экологичности и эстетичному виду, пользуются большой популярностью среди потребителей.",
            textCenter: "Деревянные окна обладают высокими показателями тепло- и звукоизоляции, долговечностью и устойчивостью к атмосферным воздействиям.",
            textBottom: "",
        },
    },
    {
        id: Math.random().toString(),
        name: "Ступени",
        imgSrc: main2,
        modal: {
            textTop: "Ступени из дерева являются популярным выбором при обустройстве лестниц. Дерево обладает прочностью и долговечностью, а также придает интерьеру натуральный и уютный вид.",
            textCenter: "Они могут быть обработаны специальными пропитками или покрыты лаком для дополнительной защиты от износа и влаги",
            textBottom: "Они прекрасно сочетаются с другими материалами, такими как металл или стекло, создавая элегантный и стильный дизайн лестницы.",
        },
    },
    {
        id: Math.random().toString(),
        name: "Балконы",
        imgSrc: main3,
        modal: {
            textTop: "Остекление балконов из дерева - это процесс установки стеклянных поверхностей на балконные конструкции из дерева. позволяет превратить незащищенное открытое пространство в уютное и комфортное место для отдыха и проведения времени.",
            textCenter: "Остекление балконов из дерева позволяет сохранить тепло и защитить помещение от ветра, дождя и пыли. Оно также обеспечивает звукоизоляцию, что позволяет создать тихое и спокойное пространство на балконе",
            textBottom: "",
        },
    },
];

export const wooden_data_images = [
    {
        id: Math.random().toString(),
        name: 'Окна и двери',
        images: [
            {
                id: Math.random().toString(),
                image: okno1
            },
            {
                id: Math.random().toString(),
                image: okno2
            },
            {
                id: Math.random().toString(),
                image: okno3
            },
            {
                id: Math.random().toString(),
                image: okno4
            },
        ]
    },
    {
        id: Math.random().toString(),
        name: 'Ступени',
        images: [
            {
                id: Math.random().toString(),
                image: stupeni1
            },
            {
                id: Math.random().toString(),
                image: stupeni2
            },
            {
                id: Math.random().toString(),
                image: stupeni3
            },
            {
                id: Math.random().toString(),
                image: stupeni4
            },
        ]
    },
    {
        id: Math.random().toString(),
        name: 'Балконы',
        images: [
            {
                id: Math.random().toString(),
                image: balkon1
            },
            {
                id: Math.random().toString(),
                image: balkon2
            },
            {
                id: Math.random().toString(),
                image: balkon3
            },
            {
                id: Math.random().toString(),
                image: balkon4
            },
        ]
    },
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
];
