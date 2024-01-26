import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import phoneIcon from "../assets/phone icon.svg";
import LocIcon from "../assets/locatin icon.svg";
import MessIcon from "../assets/message icon.svg";
import Logo from "../assets/Logo.png";
import vk from "../assets/vk-wh.svg";
import poligon from '../assets/Polygon 1.svg';
import footerGif from "../assets/FooterGif.gif";
const data = [
  {
    id: Math.random().toString(),
    link: "/",
    name: "Главная"
  },
  {
    id: Math.random().toString(),
    link: "/contact",
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
  },
];
const menuData = [
  {
    id: Math.random().toString(),
    link: "/category/wooden_window",
    name: "Деревянные окна"
  },
  {
    id: Math.random().toString(),
    link: "/category/plastic_window",
    name: " Пластиковые окна"
  },
  {
    id: Math.random().toString(),
    link: "/category/aluminum_window",
    name: "Алюминивые окна"
  },
  {
    id: Math.random().toString(),
    link: "/category/frameless_glazing",
    name: "Безрамное холодное остекление"
  },
];

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openView, setOpenView] = useState(false);

  // open accordion
  const openAccordionHandler = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const openAccordionViewHandler = useCallback(() => {
    setOpenView(!openView);
  }, [openView]);

  return (
    <footer className="bg-[#212121] text-white overflow-hidden relative w-full mt-[180px] px-4">
      <img
        src={footerGif}
        alt=""
        className="absolute left-[-180px] hidden lg:block"
      />
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
            </div>
          </div>

          {/* col 2 */}
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
          </div>

          {/* col 3 */}
          <div className="flex flex-col items-center justify-start bg-[#3F3F3F] sm:bg-transparent gap-[11px] pt-[8px] sm:pt-0">
            <div
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
    </footer>
  );
};

export default Footer;
