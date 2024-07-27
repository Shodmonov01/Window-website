import { useCallback, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import phoneIcon from "../assets/phone icon.svg";
import LocIcon from "../assets/locatin icon.svg";
import MessIcon from "../assets/message icon.svg";
// import Logo from "../assets/Logo.png";
import Logo from "../assets/LogoFooter.svg";
import LogoGold2 from "../assets/logoGold.svg";

import poligon from "../assets/Polygon 1.svg";
import footerGif from "../assets/FooterGif.gif";
import vatsap from "../assets/navbar/watsap_gold.svg";
import tlg from "../assets/navbar/tlg_gold.svg";
import youtube from "../assets/navbar/youtube_gold.svg";
import youtube_play from "../assets/navbar/youtube_gold_center.svg";
import vk from "../assets/navbar/vk_gold.svg";

=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import { Link } from "react-router-dom";
import phoneIcon from "../assets/phone icon.svg";
import LocIcon from "../assets/locatin icon.svg";
import MessIcon from "../assets/message icon.svg";
import Logo from "../assets/Logo.png";
import vk from "../assets/vk-wh.svg";
import poligon from '../assets/Polygon 1.svg';
import footerGif from "../assets/FooterGif.gif";
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
const data = [
  {
    id: Math.random().toString(),
    link: "/",
<<<<<<< HEAD
<<<<<<< HEAD
    name: "Главная",
  },
  {
    id: Math.random().toString(),
    link: "/payment",
    name: "Договор и оплата",
  },
  {
    id: Math.random().toString(),
    link: "/about-us",
    name: "О компании",
  },
  {
    id: Math.random().toString(),
    link: "/pay-for-the-order",
    name: "Оплатить заказ",
  },
  {
    id: Math.random().toString(),
    link: "/about-us",
    name: "Новости",
  },
];
const data2 = [
  {
    id: Math.random().toString(),
    link: "/services",
    name: "Услуги",
  },
  {
    id: Math.random().toString(),
    link: "/delivery",
    name: "Доставка изделий",
  },
  {
    id: Math.random().toString(),
    link: "/guarantee",
    name: "Гарантия на изделия",
=======
    name: "Главная"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
    name: "Главная"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/contact",
<<<<<<< HEAD
<<<<<<< HEAD
    name: "Контакты",
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    name: "Контакты"
  },
  {
    id: Math.random().toString(),
    link: "/about-us",
    name: "О компании"
  },
  {
    id: Math.random().toString(),
    link: "/payment",
    name: "Оплата"
  },
  {
    id: Math.random().toString(),
    link: "/services",
    name: "Услуги"
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
];
const menuData = [
  {
    id: Math.random().toString(),
<<<<<<< HEAD
<<<<<<< HEAD
    link: "/category/plastic_window",
    name: "Металлопластиковые изделия",
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    link: "/category/wooden_window",
    name: "Деревянные окна"
  },
  {
    id: Math.random().toString(),
    link: "/category/plastic_window",
    name: " Пластиковые окна"
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/category/aluminum_window",
<<<<<<< HEAD
<<<<<<< HEAD
    name: "Алюминиевые изделия",
  },
  {
    id: Math.random().toString(),
    link: "/category/wooden_window",
    name: "Деревянные изделия",
=======
    name: "Алюминивые окна"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
    name: "Алюминивые окна"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/category/frameless_glazing",
<<<<<<< HEAD
<<<<<<< HEAD
    name: "Безрамные изделия",
  },
  // {
  //   id: Math.random().toString(),
  //   link: "/category/frameless_glazing",
  //   name: "Безрамное холодное остекление",
  // },
  // {
  //   id: Math.random().toString(),
  //   link: "/services/sectional-doors",
  //   name: "Секционные ворота, роллеты",
  // },
  // {
  //   id: Math.random().toString(),
  //   link: "/services/blinds-pleated",
  //   name: "Жалюзи плиссе и др.",
  // },
  // {
  //   id: Math.random().toString(),
  //   link: "/services/mosquito-net",
  //   name: "Сетки плиссе и др.",
  // },
  // {
  //   id: Math.random().toString(),
  //   link: "/services/window-sills",
  //   name: "Подоконники",
  // },
  // {
  //   id: Math.random().toString(),
  //   link: "/services/slopes_ebbs",
  //   name: "Откосы, отливы",
  // },
];
// const menuData2 = [
//   {
//     id: Math.random().toString(),
//     link: "/category/frameless_glazing",
//     name: "Безрамное",
//   },
// ];

const Footer = () => {
  let { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openMenuDesktop, setOpenMenuDesktop] = useState(false);
  const [openVidDesktop, setOpenVidDesktop] = useState(false);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    name: "Безрамное холодное остекление"
  },
];

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openView, setOpenView] = useState(false);
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

  // open accordion
  const openAccordionHandler = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const openAccordionViewHandler = useCallback(() => {
    setOpenView(!openView);
  }, [openView]);

<<<<<<< HEAD
<<<<<<< HEAD
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });
  };

  return (
    <footer className="bg-[#212121] text-white overflow-hidden relative w-full mt-[40px] lg:mt-[40px] px-4">
=======
  return (
    <footer className="bg-[#212121] text-white overflow-hidden relative w-full mt-[180px] px-4">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
  return (
    <footer className="bg-[#212121] text-white overflow-hidden relative w-full mt-[180px] px-4">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      <img
        src={footerGif}
        alt=""
        className="absolute left-[-180px] hidden lg:block"
      />
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="px-0 md:px-8 lg:px-[120px] text-center lg:text-left py-10 relative">
        <div
          className={`grid grid-cols-1 gap-4 sm:gap-[10rem] md:grid-cols-2 lg:grid-cols-${
            pathname === "/about-us" ? 4 : 3
          } xl:grid-cols-${pathname === "/about-us" ? 5 : 4} items-start`}
        >
          {/* col 1 */}
          <div className="h-full">
            <div>
              <Link onClick={scrollToTop} to='/'>
                <img
                  src={Logo}
                  className="mx-auto hidden lg:mx-0 lg:block"
                  alt="logo"
                />
                <img
                  src={LogoGold2}
                  className="mx-auto block lg:hidden lg:mx-0 "
                  alt="logo"
                />
              </Link>

              <p className="text-[14px] mt-4 lg:hidden">
                Полный комплекс услуг по остеклению <br />
                квартир и частных домов.
              </p>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      <div className="px-0 md:px-5 lg:px-32 text-center lg:text-left py-10 ">
        <div className="grid grid-cols-1 gap-4 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
          {/* col 1 */}
          <div className="h-full">
            <Link to={"/"}>
              <img src={Logo} className="mx-auto lg:mx-0 " alt="logo" />
            </Link>
            <p className="text-[17px] mt-4">
              Полный комплекс услуг по остеклению <br /> квартир и частных
              домов.
            </p>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] my-3">Мы в социальных сетях:</p>
            <div className="flex items-center justify-center sm:justify-start">
              <img src={vk} alt="" className="w-[150px]" />
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            </div>
          </div>

          {/* col 2 */}
<<<<<<< HEAD
<<<<<<< HEAD

          <div className="flex flex-col  gap-[11px]">
            <p className="font-medium lg:text-[20px] bg_linear_gradient_txt hidden lg:block">
              Мы в социальных сетях:
            </p>
            <p className="font-[700] lg:text-[20px] text-white block lg:hidden">
              Мы в социальных сетях:
            </p>
            {/* icons */}
            <div className="flex items-center justify-center sm:justify-start gap-[26px]">
              <a href="https://wa.me/79626841122" target="_blank">
                <img src={vatsap} alt="" className="cursor-pointer" />
              </a>
              <a href="https://t.me/+79626841122" target="_blank">
                <img src={tlg} alt="" className="cursor-pointer" />
              </a>
              <a
                href="https://youtube.com/@elitplastspb?si=sdnnF9H11s42K0-l"
                target="_blank"
              >
                <span className="relative cursor-pointer">
                  <img src={youtube} alt="" />
                  <img
                    src={youtube_play}
                    className="absolute top-[12px]  lg:top-0 -left-[2px] lg:left-[2px] right-0 bottom-0 lg:m-auto"
                    alt=""
                  />
                </span>
              </a>
              <a href="https://vk.com/elitplastspb" target="_blank">
                <img src={vk} alt="" className="cursor-pointer" />
              </a>
            </div>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
          <div className="flex flex-col items-center justify-start bg-[#3F3F3F] sm:bg-transparent gap-[11px] pt-[8px] sm:pt-0">
            <div
              className="flex items-center w-full justify-center sm:justify-start font-medium text-[18px] md:text-[20px] lg:text-[23px] cursor-pointer sm:cursor-default"
              onClick={openAccordionHandler}
            >
              <span className="relative">
                Меню сайта
                <img src={poligon} className="absolute top-[9px] -right-8 w-2 h-[12px] sm:hidden" />
              </span>
            </div>
            <div className="sm:hidden">
              {openMenu && (
                <ul className={`mt-5 space-y-4 `}>
                  {data?.length > 0 && data.map(item => (
                    <li key={item.id} className="cursor-pointer">
                      <Link
                        to={item.link}
                        className="text-[16px] lg:text-[17px]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className={`space-y-4 hidden sm:flex w-full flex-col items-start`}>
              {data?.length > 0 && data.map(item => (
                <li key={item.id} className="cursor-pointer">
                  <Link
                    to={item.link}
                    className="text-[16px] lg:text-[17px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
          </div>

          {/* col 3 */}
          <div className="flex flex-col items-center justify-start bg-[#3F3F3F] sm:bg-transparent gap-[11px] pt-[8px] sm:pt-0">
            <div
<<<<<<< HEAD
<<<<<<< HEAD
              className="flex items-center lg:pl-[25px] w-full justify-center sm:justify-start font-medium text-[18px] lg:text-[20px] cursor-pointer sm:cursor-default"
              onClick={openAccordionViewHandler}
            >
              <span className="relative bg_linear_gradient_txt">
                Виды остекления
                <img
                  src={poligon}
                  className="absolute top-[9px] -right-8 w-2 h-[12px] sm:hidden"
                />
              </span>
            </div>
            {/* mobile */}
            <div className="sm:hidden">
              {openView && (
                <ul className={`space-y-4`}>
                  {menuData?.length > 0 &&
                    menuData.map((item) => (
                      <li
                        key={item.id}
                        className="cursor-pointer hover:text-orange-100 transition-all"
                      >
                        <Link
                          to={item.link}
                          className="text-[16px] lg:text-[17px]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* desktop */}
            <div className="text-left w-full  pl-[25px] hidden sm:block">
              <span
                className="bg_linear_gradient_txt underline cursor-pointer text-[16px] font-medium"
                onClick={() => setOpenMenuDesktop(!openMenuDesktop)}
              >
                Подробнее
              </span>
              {openMenuDesktop && (
                <div className="flex gap-10">
                  <ul
                    className={`hidden sm:flex w-full flex-col items-start gap-2 pt-[10px] mb-[70px]`}
                  >
                    {menuData?.length > 0 &&
                      menuData.map((item) => (
                        <li
                          key={item.id}
                          className="cursor-pointer hover:text-orange-100 transition-all"
                        >
                          <Link
                            to={item.link}
                            className="text-[16px] lg:text-[17px]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* col 4 */}
          <div className="flex flex-col items-center justify-start bg-[#3F3F3F] sm:bg-transparent gap-[11px] pt-[8px] sm:pt-0 sm:pl-[23px]">
            <div
              className="flex items-center w-full justify-center sm:justify-start font-medium text-[18px] lg:text-[20px] cursor-pointer sm:cursor-default"
              onClick={openAccordionHandler}
            >
              <span className="relative  bg_linear_gradient_txt">
                Меню сайта
                <img
                  src={poligon}
                  className="absolute top-[9px] -right-8 w-2 h-[12px] sm:hidden"
                />
              </span>
            </div>
            {/* mobile */}
            <div className="sm:hidden">
              {openMenu && (
                <ul className={`mt-5 space-y-4 flex flex-col gap-2`}>
                  {data?.length > 0 &&
                    data.map((item) => (
                      <li key={item.id} className="cursor-pointer">
                        <Link
                          to={item.link}
                          className="text-[16px] lg:text-[17px]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* desktop */}
            <div className="text-left w-full hidden sm:block ">
              <span
                className="bg_linear_gradient_txt underline cursor-pointer text-[16px] font-medium"
                onClick={() => setOpenVidDesktop(!openVidDesktop)}
              >
                Подробнее
              </span>
              {openVidDesktop && (
                <div className="flex gap-10">
                  <ul
                    className={`hidden sm:flex w-full flex-col items-start gap-2 pt-[10px] mb-[70px]`}
                  >
                    {data?.length > 0 &&
                      data.map((item) => (
                        <li
                          key={item.id}
                          className="cursor-pointer hover:text-orange-100 transition-all"
                        >
                          <Link
                            to={item.link}
                            className="text-[16px] lg:text-[17px]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul
                    className={`hidden sm:flex w-full flex-col items-start gap-2 pt-[10px] mb-[70px]`}
                  >
                    {data2?.length > 0 &&
                      data2.map((item) => (
                        <li
                          key={item.id}
                          className="cursor-pointer hover:text-orange-100 transition-all"
                        >
                          <Link
                            to={item.link}
                            className="text-[16px] lg:text-[17px]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* col 5 */}
          {/* {pathname === "/about-us" && (
            <div className="flex flex-col items-center lg:items-start gap-[11px] text-[14px]">
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">ИНН: </span>
                <span>262611398505</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">ОГРНИП: </span>
                <span>3237 8470 0305 496</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">Р/с: </span>
                <span>4080 2810 9000 05256224</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">БИК: </span>
                <span>044525974</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">АО: </span>
                <span>“Тинькофф Банк”</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg_linear_gradient_txt">К/с: </span>
                <span>3010 1810 1452 5000 0974</span>
              </div>
            </div>
          )} */}
        </div>

        <div
          className={`   lg:bottom-0 left-[10px] md:left-[20px] lg:left-[480px] ${
            pathname === "/about-us" ? "xl:left-[300px]" : "xl:left-[508px]"
          } pb-0 lg:pb-[50px] pt-[30px] lg:pt-0`}
        >
          {/* <div className="text-center lg:hidden">
            <span>Наши контакты</span>
          </div> */}
          <ul className="text-sm w-full flex mr-[60px]  flex-col items-center lg:flex-row lg:items-start mt-0 lg:mt-10 text-[14px] gap-[20px] lg:justify-between  pt-[0px]">
            <li className="hidden lg:block">
              <p className="text-[14px] mt-4 ">
                Полный комплекс услуг по остеклению <br /> квартир и частных
                домов.
              </p>
            </li>

            <li className="flex flex-col lg:flex-row items-center gap-3">
              <img src={phoneIcon} className="w-[23px]" alt="" />
              <div className="flex flex-col gap-2">
                <Link to={"/contact?phone=88129841122"}>
                  <span className="block">8 (812) 984-11-22</span>
                </Link>
                <Link to={"/contact?phone=89626841122"}>
                  <span className="block">8 (962) 684-11-22</span>
                </Link>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={LocIcon} className="w-[23px]" alt="" />
              <div className="">
                <a href="#3" className="block">
                  Бокситогорская ул, 2,
                  <br /> Санкт-Петербург
                </a>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={MessIcon} className="w-[23px]" alt="" />
              <div className="">
                <a href="#4" className="block">
                  info@elitplast-spb.ru
                </a>
              </div>
            </li>
            <li>
              <span className="bg_linear_gradient cursor-pointer">
                График работы
              </span>{" "}
              пн-вс <br /> с 09:00 до 00:00
            </li>
            <li>
              {/* col 5 */}
              {pathname === "/about-us" && (
                <div className="flex flex-col items-center  lg:items-start gap-[11px] text-[14px]">
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">ИНН: </span>
                    <span>262611398505</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">ОГРНИП: </span>
                    <span>3237 8470 0305 496</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">Р/с: </span>
                    <span>4080 2810 9000 05256224</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">БИК: </span>
                    <span>044525974</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">АО: </span>
                    <span>“Тинькофф Банк”</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg_linear_gradient_txt">К/с: </span>
                    <span>3010 1810 1452 5000 0974</span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <img src={footerGif} alt="" className="absolute top-0 right-[-180px]" />
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
              className="flex items-center w-full justify-center sm:justify-start font-medium text-[18px] md:text-[20px] lg:text-[23px] cursor-pointer sm:cursor-default"
              onClick={openAccordionViewHandler}
            >
              <span className="relative">
                Виды остекления
                <img src={poligon} className="absolute top-[9px] -right-8 w-2 h-[12px] sm:hidden" />
              </span>
            </div>
            <div className="sm:hidden">
              {openView && (
                <ul className={`space-y-4`}>
                  {menuData?.length > 0 && menuData.map(item => (
                    <li key={item.id} className="cursor-pointer">
                      <Link
                        to={item.link}
                        className="text-[16px] lg:text-[17px]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="space-y-4 hidden sm:flex list-none w-full flex-col items-start">
              {menuData?.length > 0 && menuData.map(item => (
                <li key={item.id} className="cursor-pointer">
                  <Link
                    to={item.link}
                    className="text-[16px] lg:text-[17px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* col 4 */}
          <div className="flex flex-col gap-[11px]">
            <p className="font-medium text-[23px]">Наши контакты</p>
            <ul className="mt-2 space-y-4 text-sm w-full flex-col items-start">
              <li className="flex flex-col md:flex-row  items-center  md:items-start gap-3">
                <img src={phoneIcon} className="w-[23px]" alt="" />
                <div className="">
                  <a
                    href="#"
                    className=" text-[17px]  block transition hover:opacity-75"
                  >
                    8 (812) 984-11-22
                  </a>
                  <a
                    href="#"
                    className=" text-[17px] mt-2 block transition hover:opacity-75"
                  >
                    8 (962) 684-11-22
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row  items-center  md:items-start gap-3">
                <img src={LocIcon} className="w-[23px]" alt="" />
                <div className="">
                  <a
                    href="#"
                    className=" text-[17px] block transition hover:opacity-75"
                  >
                    Бокситогорская ул, 2, Санкт-Петербург
                  </a>
                </div>
              </li>
              <li className="flex  flex-col md:flex-row  items-center  md:items-start gap-3">
                <img src={MessIcon} className="w-[23px]" alt="" />
                <div className="">
                  <a
                    href="#"
                    className=" text-[17px] block transition hover:opacity-75"
                  >
                    elitplast.spb@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <img
        src={footerGif}
        alt=""
        className="absolute top-0 right-[-180px]"
      />
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    </footer>
  );
};

export default Footer;
