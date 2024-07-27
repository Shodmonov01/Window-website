<<<<<<< HEAD
import { Fragment, useCallback, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import StructuresModal from "./StructuresModal";
import Logo from "../assets/home/log.svg";
import LogoGold from "../assets/Logo.png";
import LogoGold2 from "../assets/logogold2.png";
import LogoNew from "../assets/navbar/logo.png";
import vatsap from "../assets/navbar/watsap_gold.svg";
import tlg from "../assets/navbar/tlg_gold.svg";
import youtube from "../assets/navbar/youtube_gold.svg";
import youtube_play from "../assets/navbar/youtube_gold_center.svg";
import vk from "../assets/navbar/vk_gold.svg";
import location from "../assets/navbar/location.svg";
import whatsapp from "../assets/Whatsapp.svg";
import ConsultationModal from "./ConsultationModal";
=======
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
// import Logo from "../assets/logo_light.png";
import Logo from "../assets/home/log.svg";
import LogoGold from "../assets/Logo.png";
import vk from "../assets/vk.svg";
import wh from "../assets/whatsup.svg";
import tg from "../assets/tg.png";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

const menuLink = [
  {
    id: Math.random().toString(),
    link: "/services",
<<<<<<< HEAD
    name: "Услуги",
=======
    name: "Услуги"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/payment",
<<<<<<< HEAD
    name: "Договор и оплата",
=======
    name: "Оплата"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/about-us",
<<<<<<< HEAD
    name: "О компании",
  },
  {
    id: Math.random().toString(),
    link: "/delivery",
    name: "Доставка",
  },
  {
    id: Math.random().toString(),
    link: "/pay-for-the-order",
    name: "Оплатить заказ",
  },
  {
    id: Math.random().toString(),
    link: "/news",
    name: "Новости",
=======
    name: "О нас"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/contact",
<<<<<<< HEAD
    name: "Контакты",
  },
];

const menuLinkMobile = [
  {
    id: Math.random().toString(),
    link: "/services",
    name: "Услуги",
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
    link: "/news",
    name: "Новости",
  },
  {
    id: Math.random().toString(),
    link: "/delivery",
    name: "Доставка",
  },
  {
    id: Math.random().toString(),
    link: "/guarantee",
    name: "Гарантия на изделия",
  },
  {
    id: Math.random().toString(),
    link: "/contact",
    name: "Контакты",
=======
    name: "Контакты"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
];

const dropdownMenuLink = [
  {
    id: Math.random().toString(),
<<<<<<< HEAD
    link: "/category/plastic_window",
    name: "Металлопластиковые изделия",
  },
  {
    id: Math.random().toString(),
    link: "/category/aluminum_window",
    name: "Алюминиевые изделия",
=======
    link: "/category/aluminum_window",
    name: "Алюминиевые окна",
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/category/wooden_window",
<<<<<<< HEAD
    name: "Деревянные изделия",
=======
    name: "Деревянные окна",
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  },
  {
    id: Math.random().toString(),
    link: "/category/frameless_glazing",
<<<<<<< HEAD
    name: "Безрамные изделия",
  },
];

const filtered = [
  "/category/aluminum_window",
  "/category/wooden_window",
  "/category/frameless_glazing",
  "/category/plastic_window",
];
=======
    name: "Безрамное остекление",
  },
];

const filtered = ["/category/aluminum_window", "/category/wooden_window", "/category/frameless_glazing", "/category/plastic_window"];
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

// million-ignore
const NavbarLight = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [navbarShow, setNavbarShow] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
<<<<<<< HEAD
  const [openModal, setOpenModal] = useState(false);

  window.addEventListener("click", () => {
    const downUpIcon = document.querySelector("#downUpIcon");

    if (downUpIcon) setDropdownMenu(false);
  });

  window.addEventListener("resize", () => {
=======

  window.addEventListener('click', () => {
    const downUpIcon = document.querySelector('#downUpIcon');

    if (downUpIcon) setDropdownMenu(false);
  })

  window.addEventListener('resize', () => {
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    if (window.innerWidth >= 1280) {
      setNavbarShow(false);
    }
  });

  // close navbar
  const closeNavbarHandler = (link) => {
    setNavbarShow(false);
    navigate(link);
<<<<<<< HEAD
  };

  // open modal handler
  const openModaLHandler = useCallback(() => {
    setOpenModal(true);
  }, []);
  // close modal handler
  const closeModaLHandler = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
      <div className="">
        <div>
          {/* navbar top */}
          <div className="min-h-[78px] hidden xl:flex items-center justify-center bg-navbar_top_bg_color px-[20px] lg:px-[40px] xl:px-[20px]">
            <ul className="font-medium flex items-center justify-center flex-wrap gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] h-full text-[15px] lg:text-[16px] ">
              <li className="bg_linear_gradient">
                <Link to={"/"} className="text-[18px]">
                  Главная
                </Link>
              </li>
              <li className="drdown cursor-pointer relative">
                <div className="flex items-center gap-2">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button
                      className="flex items-center gap-[8px] rounded-full focus:outline-none"
                      onClick={() => setDropdownMenu((prev) => !prev)}
                    >
                      <span className="bg_linear_gradient text-[18px]">
                        Наша продукция
                      </span>
                      <FaAngleDown
                        className={`text-[11px] duration-[0.3s] text-orange-200 ${
                          dropdownMenu && "rotate-[-180deg]"
                        }`}
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100 "
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        className="absolute -right-3 z-[99] mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[14px]"
                        id="downUpIcon"
                      >
                        <div className="">
                          {dropdownMenuLink?.length > 0 &&
                            dropdownMenuLink.map((item) => (
                              <Menu.Item key={item.id}>
                                <span
                                  className={`pt-[12px] md:pt-[15px] pb-[9px] md:pb-[10.5px] px-[20px] block border-b hover:bg-gray-100 transition-all hover:rounded-md ${
                                    filtered.includes(pathname)
                                      ? "text-dark"
                                      : ""
                                  }`}
                                >
                                  <Link to={item.link} className="text-black">
                                    {item.name}
                                  </Link>
                                </span>
                              </Menu.Item>
                            ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
              {menuLink?.length > 0 &&
                menuLink.map((item) => (
                  <li key={item.id} className="bg_linear_gradient text-[18px]">
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* navbar bottom */}
          <div className="bg-dark  min-h-[204px] px-[20px] lg:px-[60px] xl:px-[120px] hidden xl:block">
            {/* bavbar top */}
            <div className="  pt-[24px] font-medium flex items-center justify-between 2xl:gap-[20px]  text-white text-[14px]">
              <div className="flex  w-[743px] items-center flex-wrap justify-between ">
                <span className="text-[18px]">Ежедневно с 09:00 до 00:00</span>
                <Link to={"/contact?phone=88129841122"}>
                  <span className="text-[22px]">8 (812) 984-11-22</span>
                </Link>

                <Link to={"/contact"}>
                  <span className="underline bg_linear_gradient cursor-pointer text-[18px]">
                    Обратный звонок
                  </span>
                </Link>
              </div>

              <div className="flex w-[743px] items-center justify-between flex-wrap gap-[10px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[0px]">
                <span className="flex items-center gap-[19px] cursor-pointer">
                  <span onClick={openModaLHandler}>
                    <img src={whatsapp} alt="" />
                  </span>
                  <span
                    className="cursor-pointer text-[18px]"
                    onClick={openModaLHandler}
                  >
                    Написать
                  </span>
                </span>
                <span className="text-[18px]">info@elitplast-spb.ru</span>
                <span className="flex items-center gap-[40px] ">
                  <a href="https://wa.me/79626841122" target="_blank">
                    <img src={vatsap} alt="" className="cursor-pointer " />
                  </a>
                  <a href="https://t.me/+79626841122" target="_blank">
                    <img src={tlg} alt="" className="cursor-pointer " />
                  </a>
                  <span className="relative cursor-pointer">
                    <a
                      href="https://youtube.com/@elitplastspb?si=sdnnF9H11s42K0-l"
                      target="_blank"
                    >
                      <img src={youtube} alt="" />
                      <img
                        src={youtube_play}
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                        alt=""
                      />
                    </a>
                  </span>
                  <a href="https://vk.com/elitplastspb" target="_blank">
                    <img src={vk} alt="" className="cursor-pointer" />
                  </a>
                </span>
              </div>
            </div>

            {/* navbar bottom */}
            <div className="flex items-center flex-wrap justify-between pt-[20px] pb-[27px]">
              <div className="flex items-center justify-between gap-[100px]">
                <div className="flex flex-col gap-[13px] text-white">
                  <img
                    src={LogoGold2}
                    alt=""
                    className="w-[157px] h-[82px] cursor-pointer"
                    onClick={() => navigate("/")}
                  />
                  <span className="text-[13px] lg:text-[14px]">
                    работаем с 2003 года
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <img src={location} alt="" />
                  <div className="text-white text-[13px] lg:text-[14px]">
                    <span>
                      Окна и двери от производителя в <br />
                      Санкт-Петербурге и{" "}
                      <Link to={"/contact"}>
                        <span className="bg_linear_gradient">
                          Ленинградской <br /> области
                        </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-[10px] lg:mt-0">
                <button
                  className="h-[60px] rounded-md text-white px-[24px] py-[16px] text-[18px]"
                  style={{
                    background: "#EADA86",
                  }}
                  // style={{
                  //   background:
                  //     "#EADA86",
                  // }}
                  type="button"
                  onClick={openModaLHandler}
                >
                  Бесплатная консультация
                </button>
              </div>
=======
  }

  return (
    <nav className={`border-gray-200 ${filtered.includes(pathname) ? "text-white" : "text-dark"} pb-0 py-[15px] lg:py-[29px] px-5 lg:px-10 xl:px-12 2xl:px-[121px] relative z-50`}>
      <div
        className="flex flex-wrap items-center justify-between h-full relative pb-4"
        data-aos="fade-down"
        data-aos-duration={2000}
        data-aos-delay={1000}
      >
        <Link
          to={"/"}
          className="flex items-center mx-auto lg:mx-0 space-x-3 rtl:space-x-reverse"
        >
          <img src={filtered.includes(pathname) ? LogoGold : Logo} className={` ${filtered.includes(pathname) ? "z-50 w-[159px] md:w-[206px] h-[78px] md:h-[101px]" : "w-[171px] h-[89px] md:h-[89px] ml-[40px] lg:ml-0"}`} alt=" Logo" />
        </Link>
        {!navbarShow ? (
          <RiMenu4Line
            className={`text-[25px] xl:hidden cursor-pointer absolute top-[20px] right-[10px] z-[99] ${filtered.includes(pathname) ? `${navbarShow ? 'text-dark' : 'text-white'}` : "text-dark"}`}
            onClick={() => setNavbarShow(!navbarShow)}
          />
        ) : (
          <span
            className={`text-[35px] xl:hidden cursor-pointer absolute top-[6px] right-[13px] z-[99] ${filtered.includes(pathname) ? `${navbarShow ? 'text-dark' : 'text-white'}` : "text-dark"}`}
            onClick={() => setNavbarShow(!navbarShow)}
          >&times;</span>
        )}
        <div className={`transition-all xl:bg-transparent w-full right-[100%] lg:w-auto pt-10 lg:pt-0 absolute lg:static top-0 h-[100vh] lg:h-auto z-50 text-center lg:text-left hidden xl:flex flex-col lg:flex-row justify-center gap-16 items-center ${navbarShow && "left-0"}`}>
          <ul className="font-medium flex gap-4 flex-col md:flex-row md:space-x-8">
            <li>
              <Link to={"/"} className="text-[17px]">
                Главная
              </Link>
            </li>
            <li className="drdown cursor-pointer relative" >
              <div className="flex items-center gap-2">
                <Link to={"/category/plastic_window"} className="text-[17px]">
                  Пластиковые окна
                </Link>
                <Menu as="div" className="relative inline-block text-left ">
                  <Menu.Button className="flex items-center rounded-full text-white-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => setDropdownMenu((prev) => !prev)}>
                    <span className="sr-only">Open options</span>
                    <FaAngleDown className={`text-[13px] duration-[0.3s] ${dropdownMenu && "rotate-[-180deg]"}`} />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100 "
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -right-3 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="downUpIcon">
                      <div className="">
                        {dropdownMenuLink?.length > 0 && dropdownMenuLink.map(item => (
                          <Menu.Item key={item.id}>
                            <span className={`pt-[12px] md:pt-[15px] pb-[9px] md:pb-[10.5px] px-[26px] block border-b text-[13px] md:text-[15px] hover:bg-gray-100 transition-all ${filtered.includes(pathname) ? "text-dark" : ""}`}>
                              <Link to={item.link}>{item.name}</Link>
                            </span>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
            {menuLink?.length > 0 && menuLink.map(item => (
              <li key={item.id}>
                <Link to={item.link} className="text-[17px]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="phone text-center flex flex-col-reverse lg:flex-row gap-3 items-center">
            <div className="flex gap-3 mr-3">
              <a href='https://t.me/+79626841122' target='_blank'>
                <img src={tg} alt="vk" className="w-[28px] lg:w-[32px] rounded-md" />
              </a>
              <a href='https://vk.com/elitplastspb' target='_blank'>
                <img src={vk} alt="vk" className="w-[28px] lg:w-[32px] rounded-md" />
              </a>
              <a href='https://wa.me/79626841122' target='_blank'>
                <img src={wh} alt="wh" className=" w-[28px] lg:w-[32px]" />
              </a>
            </div>
            <div className="">
              <h6 className="capitalize text-[17px]">круглосуточно</h6>
              <span className=" text-[17px] lg:text-[20px] block">
                +79626841122
              </span>
              {/* <a href="#" className="text-[17px] lg:text-[20px]">
                8 (812) 984-11-22
              </a> */}
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            </div>
          </div>
        </div>

        {/* mobile view */}
<<<<<<< HEAD
        <nav
          className={`block xl:hidden border-gray-200 ${
            filtered.includes(pathname) ? "text-white" : "text-dark"
          } pb-0 py-[15px] lg:py-[29px] px-5 lg:px-10 xl:px-12 2xl:px-[121px] relative z-50`}
        >
          <div
            className="flex flex-wrap items-center justify-between h-full relative pb-4"
            data-aos="fade-down"
            data-aos-duration={2000}
            data-aos-delay={1000}
          >
            <Link
              to={"/"}
              className="flex items-center mx-auto lg:mx-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={filtered.includes(pathname) ? LogoGold : Logo}
                className={` ${
                  filtered.includes(pathname)
                    ? "z-50 w-[159px] md:w-[206px] h-[78px] md:h-[101px]"
                    : "w-[171px] h-[89px] md:h-[89px] ml-[40px] lg:ml-0"
                }`}
                alt=" Logo"
              />
            </Link>
            {!navbarShow ? (
              <RiMenu4Line
                className={`text-[25px] xl:hidden cursor-pointer absolute top-[20px] right-[10px] z-[99] ${
                  filtered.includes(pathname)
                    ? `${navbarShow ? "text-dark" : "text-white"}`
                    : "text-dark"
                }`}
                onClick={() => setNavbarShow(!navbarShow)}
              />
            ) : (
              <span
                className={`text-[35px] xl:hidden cursor-pointer absolute top-[6px] right-[13px] z-[99] ${
                  filtered.includes(pathname)
                    ? `${navbarShow ? "text-dark" : "text-white"}`
                    : "text-dark"
                }`}
                onClick={() => setNavbarShow(!navbarShow)}
              >
                &times;
              </span>
            )}

            {/* mobile */}
            {navbarShow && (
              <div
                className={`animate-wiggle transition-all shadow-md rounded-md bg-dark w-full absolute top-[0px] p-2 z-50 flex flex-col justify-center gap-6 items-center text-dark py-6`}
              >
                <>
                  <ul className="font-medium flex items-center justify-center flex-wrap gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] h-full text-dark text-[15px] lg:text-[16px] p-4 pb-0">
                    <li>
                      <Link
                        to={"/"}
                        onClick={() => setNavbarShow(false)}
                        className="bg_linear_gradient"
                      >
                        Главная
                      </Link>
                    </li>
                    <li className="drdown cursor-pointer relative">
                      <div className="flex items-center gap-2">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <Menu.Button
                            className="flex items-center gap-[8px] rounded-full text-white-400 focus:outline-none"
                            onClick={() => setDropdownMenu((prev) => !prev)}
                          >
                            <span className="bg_linear_gradient">
                              Наша продукция
                            </span>
                            <FaAngleDown
                              className={`text-[11px] duration-[0.3s] text-orange-200 ${
                                dropdownMenu && "rotate-[-180deg]"
                              }`}
                            />
                          </Menu.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100 "
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              className="absolute -right-3 z-[99] mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black text-[14px]"
                              id="downUpIcon"
                            >
                              <div className="">
                                {dropdownMenuLink?.length > 0 &&
                                  dropdownMenuLink.map((item) => (
                                    <Menu.Item key={item.id}>
                                      <span
                                        className={`pt-[12px] md:pt-[15px] pb-[9px] md:pb-[10.5px] px-[20px] block border-b hover:bg-gray-100 transition-all hover:rounded-md ${
                                          filtered.includes(pathname)
                                            ? "text-dark"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          to={item.link}
                                          onClick={() => setNavbarShow(false)}
                                        >
                                          {item.name}
                                        </Link>
                                      </span>
                                    </Menu.Item>
                                  ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </li>
                    {menuLinkMobile?.length > 0 &&
                      menuLinkMobile.map((item) => (
                        <li key={item.id} className="bg_linear_gradient">
                          <Link
                            to={item.link}
                            onClick={() => setNavbarShow(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <div className="bg-dark min-h-[204px] px-[20px] lg:px-[60px] xl:px-[120px]">
                    {/* bavbar top */}
                    <div className="pt-[24px] font-medium flex items-center flex-wrap justify-between gap-[20px] text-white text-[14px]">
                      <div className="grid grid-cols-1 gap-[10px] lg:gap-[20px] 2xl:gap-[50px]">
                        <span className="">Ежедневно с 09:00 до 00:00</span>
                        <span className="">8 (812) 984-11-22</span>
                        <Link
                          to={"/contact"}
                          onClick={() => setNavbarShow(false)}
                        >
                          <span className="underline bg_linear_gradient cursor-pointer">
                            Обратный звонок
                          </span>
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 gap-[10px] lg:gap-[30px] xl:gap-[60px] 2xl:gap-[90px]">
                        <div className="grid grid-cols-1 gap-[10px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                          <span className="flex items-center gap-[19px]">
                            <span
                              className="cursor-pointer"
                              onClick={openModaLHandler}
                            >
                              Написать
                            </span>
                          </span>
                          <span>info@elitplast-spb.ru</span>
                        </div>
                        <span className="flex items-center justify-between gap-[20px] mt-[10px] lg:mt-0">
                          <a href="https://wa.me/79626841122" target="_blank">
                            <img
                              src={vatsap}
                              alt=""
                              className="cursor-pointer"
                            />
                          </a>
                          <a href="https://t.me/+79626841122" target="_blank">
                            <img src={tlg} alt="" className="cursor-pointer" />
                          </a>
                          <span className="relative cursor-pointer">
                            <a href="https://youtube.com/@elitplastspb?si=sdnnF9H11s42K0-l">
                              <img src={youtube} alt="" />
                              <img
                                src={youtube_play}
                                className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                                alt=""
                              />
                            </a>
                          </span>
                          <a href="https://vk.com/elitplastspb" target="_blank">
                            <img src={vk} alt="" className="  cursor-pointer" />
                          </a>
                        </span>
                      </div>
                    </div>

                    {/* navbar bottom */}
                    <div className="flex items-center flex-wrap lg:justify-between pt-[20px] pb-[27px]">
                      <div className="flex items-center gap-[20px] lg:gap-[100px] flex-wrap">
                        <div className="flex flex-col gap-[13px] text-white">
                          <Link
                            to={"/"}
                            onClick={() => setNavbarShow(false)}
                            className="cursor-pointer"
                          >
                            <img
                              src={LogoGold2}
                              alt=""
                              className="w-[157px] h-[82px] "
                            />
                          </Link>
                          <span className="text-[13px] lg:text-[14px]">
                            работаем с 2003 года
                          </span>
                        </div>

                        <div className="flex items-center gap-[12px]">
                          <img src={location} alt="" />
                          <div className="text-white text-[13px] lg:text-[14px] ">
                            <span className="">
                              Окна и двери от производителя в <br />
                              Санкт-Петербурге и{" "}
                              <Link to={"/contact"}>
                                <span className="bg_linear_gradient">
                                  Ленинградской области
                                </span>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-[10px] lg:mt-0">
                        <button
                          className="h-[40px] lg:h-[60px] rounded-md text-white px-[24px] py-[8px]"
                          style={{
                            background:
                              "linear-gradient(93.91deg, rgb(223, 195, 142) 36.257%,rgb(206, 166, 84) 101.633%)",
                          }}
                          type="button"
                          onClick={openModaLHandler}
                        >
                          Бесплатная консультация
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* modal */}
      {openModal && (
        <StructuresModal
          onClose={closeModaLHandler}
          open={openModal}
          maxWidth="sm:max-w-lg"
        >
          <ConsultationModal onClose={closeModaLHandler} bg="" />
        </StructuresModal>
      )}
    </>
=======
        {navbarShow && (
          <div className={`animate-wiggle transition-all shadow-md rounded-md bg-white w-full absolute top-[0px] p-2 z-50 flex flex-col justify-center gap-16 items-center text-dark py-6`}>
            <>
              <ul className="font-medium flex gap-4 flex-col md:flex-row md:space-x-8 ">
                <li>
                  <span onClick={() => closeNavbarHandler("/")} className="text-[17px]" >
                    Главная
                  </span>
                </li>
                <li className="drdown cursor-pointer relative" >
                  <div className="flex items-center gap-2">
                    <span onClick={() => closeNavbarHandler("/category/plastic_window")} className="text-[17px] cursor-pointer" >
                      Пластиковые окна
                    </span>
                    <Menu as="div" className="relative inline-block text-left ">
                      <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => setDropdownMenu((prev) => !prev)}>
                        <span className="sr-only">Open options</span>
                        <FaAngleDown className={`text-[13px] duration-[0.3s] ${dropdownMenu && "rotate-[-180deg]"}`} />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100 "
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-3 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="downUpIcon">
                          <div className="">
                            {dropdownMenuLink?.length > 0 && dropdownMenuLink.map(item => (
                              <Menu.Item key={item.id}>
                                <span className="pt-[12px] md:pt-[15px] pb-[9px] md:pb-[10.5px] px-[26px] block border-b text-[15px] hover:bg-gray-100 transition-all">
                                  <span onClick={() => closeNavbarHandler(item.link)} className='cursor-pointer'>{item.name}</span>
                                </span>
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </li>
                {menuLink?.length > 0 && menuLink.map(item => (
                  <li key={item.id}>
                    <span onClick={() => closeNavbarHandler(item.link)} className="text-[17px] cursor-pointer">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="phone text-center flex gap-3 items-center flex-wrap">
                <div className="flex gap-3 mr-3 ">
                  <a href='https://t.me/+79626841122' target='_blank'>
                    <img src={tg} alt="vk" className="w-[28px] lg:w-[32px] rounded-md" />
                  </a>
                  <a href='https://vk.com/elitplastspb' target='_blank'>
                    <img src={vk} alt="vk" className="w-[28px] lg:w-[32px] rounded-md" />
                  </a>
                  <a href='https://wa.me/79626841122' target='_blank'>
                    <img src={wh} alt="wh" className=" w-[28px] lg:w-[32px]" />
                  </a>
                </div>
                <div className="">
                  <h6 className="capitalize text-[17px]">круглосуточно</h6>
                  <span className=" text-[17px] lg:text-[20px] block">
                    +79626841122
                  </span>
                  {/* <a href="#1" className="text-[17px] lg:text-[20px]">
                    8 (812) 984-11-22
                  </a> */}
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </nav>
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  );
};
export default NavbarLight;
