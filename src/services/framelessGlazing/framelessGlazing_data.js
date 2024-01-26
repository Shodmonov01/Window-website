import main1 from "../../assets/framelessGlazing/structures/main/main1.png";
import main2 from "../../assets/framelessGlazing/structures/main/main2.png";
import main3 from "../../assets/framelessGlazing/structures/main/main3.png";
// okno
import besedka1 from "../../assets/framelessGlazing/structures/besedka/besedka1.png";
import besedka2 from "../../assets/framelessGlazing/structures/besedka/besedka2.png";
import besedka3 from "../../assets/framelessGlazing/structures/besedka/besedka3.png";
import besedka4 from "../../assets/framelessGlazing/structures/besedka/besedka4.png";
// terassi
import terassa1 from "../../assets/framelessGlazing/structures/terassa/terassa1.png";
// v dver
import varandi1 from "../../assets/framelessGlazing/structures/varandi/varandi1.png";
import varandi2 from "../../assets/framelessGlazing/structures/varandi/varandi2.png";

export const framelessGlazing_data = [
    {
        id: Math.random().toString(),
        name: "Безрамное остекление беседки",
        imgSrc: main1,
        modal: {
            textTop: "Максимум света и свободы пространства.Исправить погоду мы не в силах, но зато можем оснастить любимое место отдыха светопрозрачными конструкциями, которые защитят от непогоды.",
            textCenter: "",
            textBottom: "",
        },
    },
    {
        id: Math.random().toString(),
        name: "Безрамное остекление террасы",
        imgSrc: main3,
        modal: {
            textTop: "тЕРАССА предпочтительнее закрытой, ведь она создает собой полное единение с природой.Однако любое ненастье может сделать отдых не слишком комфортным. Выход из подобной ситуации – безрамное остекление типа Слайд.",
            textCenter: "",
            textBottom: "",
        },
    },
    {
        id: Math.random().toString(),
        name: "Безрамное остекление веранды",
        imgSrc: main2,
        modal: {
            textTop: "Существующие колонны — не преграда для безрамного остекления Miro. Толщина профиля составляет всего несколько сантиметров, что позволяет использовать остекление в самых разных местах.",
            textCenter: "Начались дожди, и сильный ветер с Волги мешал спокойно отдыхать на веранде, даже плотные шторы не спасали. Установили безрамное остекление и разделили каждый проем на 4 полотна, чтобы в открытом положении стекло занимало меньше места.",
            textBottom: "",
        },
    },
];

export const framelessGlazing_data_images = [
    {
        id: Math.random().toString(),
        name: 'Безрамное остекление беседки',
        images: [
            {
                id: Math.random().toString(),
                image: besedka1
            },
            {
                id: Math.random().toString(),
                image: besedka2
            },
            {
                id: Math.random().toString(),
                image: besedka3
            },
            {
                id: Math.random().toString(),
                image: besedka4
            },
        ]
    },
    {
        id: Math.random().toString(),
        name: 'Безрамное остекление террасы',
        images: [
            {
                id: Math.random().toString(),
                image: terassa1
            },
        ]
    },
    {
        id: Math.random().toString(),
        name: 'Безрамное остекление веранды',
        images: [
            {
                id: Math.random().toString(),
                image: varandi1
            },
            {
                id: Math.random().toString(),
                image: varandi2
            },
        ]
    },
];
