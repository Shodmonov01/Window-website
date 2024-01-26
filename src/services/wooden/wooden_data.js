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
];
