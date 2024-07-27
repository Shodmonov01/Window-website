import blitz_new from "../../assets/metal/structures/profil/blitz_new.png";
import brilliant from "../../assets/metal/structures/profil/brilliant.png";
import crazio from "../../assets/metal/structures/profil/crazio.png";
import delight from "../../assets/metal/structures/profil/delight.png";
import geneo from "../../assets/metal/structures/profil/geneo.png";
import intellio from "../../assets/metal/structures/profil/intellio.png";
import thermo from "../../assets/metal/structures/profil/thermo.png";

export const profile_data = {
  header: "ВИДЫ ПРОФИЛЕЙ",
  images: [
    {
      id: Math.random().toString(),
      img: blitz_new,
      title: "Пластиковые окна REHAU Blitz NEW",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 100,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 50,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 50,
        },
      ],
      text: "Эта система разработана с учетом российского климата, сильных морозов и перепадов температур. Благодаря многокамерному стеклопакету эта оконная система сохраняет в помещении тепло",
      property: [
        {
          id: Math.random().toString(),
          name: "Трехкамерный профиль толщиной:",
          value: "60 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр =0,70 м2 °C/вт",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value:
            "возможна установка устройств для усиленной защиты от проникновения",
        },
      ],
    },
    {
      id: Math.random().toString(),
      img: delight,
      title: "Пластиковые окна REHAU Delight",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 80,
        },
      ],
      text: "Если ваша комната выходит на теневую сторону, для большей естественной освещенности остеклите ее пластиковыми окнами REHAU Delight.",
      property: [
        {
          id: Math.random().toString(),
          name: "Пятикамерный профиль толщиной:",
          value: "70 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр. = 0,85 м2 °C/вт",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value:
            "может быть усиленной благодаря смещению на 13 мм приборного паза на профиле.",
        },
      ],
    },
    {
      id: Math.random().toString(),
      img: intellio,
      title: "Пластиковые окна REHAU Intelio 80",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 100,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 100,
        },
      ],
      text: "Такой тип профиля завоевал репутацию одного из самых «тихих» на рынке благодаря высокому уровню шумоизоляции.",
      property: [
        {
          id: Math.random().toString(),
          name: "Шестикамерный профиль толщиной:",
          value: "80 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр.=0,98 м2 °C/вт",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value: "3",
        },
        {
          id: Math.random().toString(),
          name: "Класс водонепроницаемости:",
          value: "до категории А",
        },
      ],
    },
    {
      id: Math.random().toString(),
      img: thermo,
      title: "Пластиковые окна REHAU Thermo",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 50,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 60,
        },
      ],
      text: "Недавно разработанная оконная система “Thermo-Design”, подходит для всех климатических условий. Такие окна отлично, служат как в жарком, засушливом климате, так и в более холодных погодных условиях. Уникальность системы, может также исправно служить в регионах, с постоянными перепадами температуры.",
      property: [
        {
          id: Math.random().toString(),
          name: "Трехкамерный профиль толщиной:",
          value: "60 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "Более чем 0.79 с/Вт - м2",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value:
            "Сдвиг приборной оси в сторону на 13 миллиметров, позволили усилить запирающие замки;",
        },
      ],
    },

    {
      id: Math.random().toString(),
      img: crazio,
      title: "Пластиковые окна REHAU Grazio",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 60,
        },
      ],
      text: "Окна с профилем REHAU Grazio защитят ваш дом от сквозняков и холода, будут надежным заслоном от шума, даже если вы живете поблизости от оживленной автострады.",
      property: [
        {
          id: Math.random().toString(),
          name: "Пятикамерный профиль толщиной:",
          value: "70 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр. = 0,85 м2 °C/вт",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value: "3",
        },
      ],
    },
    {
      id: Math.random().toString(),
      img: brilliant,
      title: "Пластиковые окна REHAU Brillant",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 50,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 100,
        },
      ],
      text: "REHAU Brillant-Design – сочетание элегантного дизайна, повышенного уровня комфорта и достойных функциональных возможностей. Технические и эстетические характеристики окон и балконных дверей Rehau Brillant идеально подходят для применения в строительстве премиум-класса, элитном строительстве, возведении и реконструкции энергоэффективных домов.",
      property: [
        {
          id: Math.random().toString(),
          name: "Пятикамерный профиль толщиной:",
          value: "70 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр. = 0,79м²*°С/Вт.",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value:
            "повышенная благодаря смещению на 13 мм приборного паза и монтажу взломозащитной фурнитуры.",
        },
      ],
    },

    {
      id: Math.random().toString(),
      img: geneo,
      title: "Пластиковые окна REHAU",
      progress: [
        {
          id: Math.random().toString(),
          name: "Больше света",
          per: 50,
        },
        {
          id: Math.random().toString(),
          name: "Сохранение тепла",
          per: 80,
        },
        {
          id: Math.random().toString(),
          name: "Защита от шума",
          per: 100,
        },
      ],
      text: "Профильная система REHAU Geneo-Design – первый в мире пластиковый оконный профиль без использования стального усиления, утяжеляющего конечное изделие и ограничивающего его изоляционные возможности.  Окна и двери Geneo не имеют себе равных для установки в строениях с особыми требованиями к энергоэффективности. Система прошла успешные испытания и уже широко применяется на практике при строительстве домов с нулевым энергопотреблением. Она активно внедряется застройщиками как при новом строительстве, так и при реконструкции зданий премиум класса.",
      property: [
        {
          id: Math.random().toString(),
          name: "Шестикамерный профиль толщиной:",
          value: "86 мм",
        },
        {
          id: Math.random().toString(),
          name: "Уровень теплоизоляции:",
          value: "R опр. = минимум 1,05 м2*°C/вт.",
        },
        {
          id: Math.random().toString(),
          name: "Класс взломобезопасности:",
          value: "минимальный класс — 2",
        },
        {
          id: Math.random().toString(),
          name: "Класс водонепроницаемости:",
          value: "до категории А",
        },
      ],
    },
  ],
};
