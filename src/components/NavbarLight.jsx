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

const menuLink = [
  {
    id: Math.random().toString(),
    link: "/services",
    name: "Услуги"
  },
  {
    id: Math.random().toString(),
    link: "/payment",
    name: "Оплата"
  },
  {
    id: Math.random().toString(),
    link: "/about-us",
    name: "О нас"
  },
  {
    id: Math.random().toString(),
    link: "/contact",
    name: "Контакты"
  },
];

const dropdownMenuLink = [
  {
    id: Math.random().toString(),
    link: "/category/aluminum_window",
    name: "Алюминиевые окна",
  },
  {
    id: Math.random().toString(),
    link: "/category/wooden_window",
    name: "Деревянные окна",
  },
  {
    id: Math.random().toString(),
    link: "/category/frameless_glazing",
    name: "Безрамное остекление",
  },
];

const filtered = ["/category/aluminum_window", "/category/wooden_window", "/category/frameless_glazing", "/category/plastic_window"];

// million-ignore
const NavbarLight = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [navbarShow, setNavbarShow] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  window.addEventListener('click', () => {
    const downUpIcon = document.querySelector('#downUpIcon');

    if (downUpIcon) setDropdownMenu(false);
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      setNavbarShow(false);
    }
  });

  // close navbar
  const closeNavbarHandler = (link) => {
    setNavbarShow(false);
    navigate(link);
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
            </div>
          </div>
        </div>

        {/* mobile view */}
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
  );
};
export default NavbarLight;
