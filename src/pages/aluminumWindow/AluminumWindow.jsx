import { useCallback, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Slider from "../../components/Slider";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
import Slider from "../../components/Slider";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import Structures from "../../components/Structures";
import GlassUnits from "../../components/GlassUnits";
import Color from "../../components/Color";
import Consultation from "../../components/Consultation";
<<<<<<< HEAD
<<<<<<< HEAD
import Info from "./components/Info";
=======
import Info from "../../components/Info";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
import Info from "../../components/Info";
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import FreeConsultation from "../../components/FreeConsultation";
import StructuresModal from "../../components/StructuresModal";
import Modal from "../../components/Modal";
import ContentModal from "./components/ContentModal";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  aluminium_data,
  aluminium_data_images,
} from "../../services/aluminium/aluminuim_data";
import { glassUnits_data } from "../../services/aluminium/glassUnits_data";
import { about_data } from "../../services/aluminium/about";
import ContentModalGlassunits from "./components/ContentModalGlassunits";
import Profil from "./components/Profil";
import { profile_data } from "../../services/aluminium/profil";
import heroList from "../../assets/heroList.svg";
import banner from "../../assets/aluminium/main2.png";
import SliderAlumin from "./components/SliderAlumin";
import { Helmet } from "react-helmet";

const AluminumWindows = () => {
  const [open, setOpen] = useState({ open: false, data: {} });
  const [openGlassUnits, setOpenGlassUnits] = useState({
    open: false,
    data: {},
  });

  // open struktures modal
  const openModalHandlerStruktures = useCallback(
    (value) => {
      setOpen({ open: true, data: value });
    },
    [open]
  );

  // close struktures modal
  const closeModalHandlerStruktures = useCallback(() => {
    setOpen({ open: false, data: {} });
  }, [open]);

  // open glassunits modal
  const openModalHandlerGlassUnits = useCallback(
    (value) => {
      setOpenGlassUnits({ open: true, data: value });
    },
    [openGlassUnits]
  );

  // close glassunits modal
  const closeModalHandlerGlassUnits = useCallback(() => {
    setOpenGlassUnits({ open: false, data: {} });
  }, [openGlassUnits]);

  return (
    <div>
      <Helmet>
        <title>Алюминиевые излелия в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт -Алюминиевые изделия с доставкой и установкой по Спб и ЛО!"
        />
      </Helmet>
      <main className="w-full md:px-20 lg:px-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-white relative z-40 pt-[40px] lg:pt-[60px] xl:pt-[88px]">
          <div className="px-3 lg:px-4 lg:col-span-2">
            <span className="title uppercase font-Montserrat font-bold text-[23px] lg:text-[30px] xl:text-[45px] flex items-center gap-3 flex-wrap">
              {"АЛЮМИНИЕВЫЕ ИЗДЕЛИЯ ОТ ПРОИЗВОДИТЕЛЯ В САНКТ-ПЕТЕРБУРГЕ И ЛО"
                .split(" ")
                .map((item, index) => (
                  <span
                    key={Math.random().toString()}
                    data-aos="fade-right"
                    data-aos-delay={1500}
                  >
                    {item}
                  </span>
                ))}
            </span>
            <ul className="mt-3 text-[16px] lg:text-[18px] xl:text-[18px]">
              <li
                className="flex items-start gap-5 mb-4"
                data-aos="fade-right"
                data-aos-delay={2200}
              >
                <img src={heroList} alt="" className="mt-1" />
                По телефону зададим Вам несколько <br /> уточняющих вопросов
              </li>
              <li
                className="flex items-start gap-5 mb-4"
                data-aos="fade-right"
                data-aos-delay={2500}
              >
                <img src={heroList} alt="" className="mt-1" />
                Посчитаем предврадительную <br /> стоимость остекления
              </li>
              <li
                className="flex items-start gap-5 mb-4"
                data-aos="fade-right"
                data-aos-delay={2700}
              >
                <img src={heroList} alt="" className="mt-1" /> Согласуем удобное
                для Вас время и ответим на все <br /> интересующие вас вопросы
              </li>
              <li
                className="flex items-start gap-5 mb-4"
                data-aos="fade-right"
                data-aos-delay={2900}
              >
                <img src={heroList} alt="" className="mt-1" />
                Расскажем про основные этапы <br /> остекления
              </li>
            </ul>
          </div>
        </div>
        <img
          src={banner}
          className="absolute -top-[175.5px] xl:top-0 right-0 h-[956px] cornerAnimation object-cover md:object-fill"
          alt=""
        />
      </main>

      {/* free consultation */}
      <FreeConsultation />

      {/* structures */}
      <Structures
        data={aluminium_data}
        openModalHandlerStruktures={openModalHandlerStruktures}
      />

      {/* vid profil */}
      <Profil data={profile_data} />

      {/* glass units */}
      <GlassUnits
        data={glassUnits_data}
        openModalHandlerGlassUnits={openModalHandlerGlassUnits}
      />

      {/* color */}
      <Color />

      {/* info */}
      <Info data={about_data} />

      {/* slide */}
      <SliderAlumin color={true} />

      {/* consultation */}
      <Consultation bg="true" />

      {/* modal structures */}
      {open.open && (
        <StructuresModal
          onClose={closeModalHandlerStruktures}
          open={open.open}
          maxWidth="sm:max-w-5xl"
        >
          <Modal onClose={closeModalHandlerStruktures}>
            <ContentModal
              data={open.data}
              images={aluminium_data_images}
              onClose={closeModalHandlerStruktures}
            />
          </Modal>
        </StructuresModal>
      )}

      {/* modal glassunits */}
      {openGlassUnits.open && (
        <StructuresModal
          onClose={closeModalHandlerGlassUnits}
          open={openGlassUnits.open}
          maxWidth="sm:max-w-5xl"
        >
          <Modal onClose={closeModalHandlerGlassUnits}>
            <ContentModalGlassunits
              data={openGlassUnits.data}
              onClose={closeModalHandlerGlassUnits}
            />
          </Modal>
        </StructuresModal>
      )}
    </div>
  );
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import { aluminium_data, aluminium_data_images } from "../../services/aluminium/aluminuim_data";
import { glassUnits_data } from "../../services/aluminium/glassUnits_data";
import { about_data } from "../../services/aluminium/about";
import ContentModalGlassunits from "./components/ContentModalGlassunits";
import heroList from "../../assets/heroList.svg";
import banner from '../../assets/Plastic-page-hero.png';

const AluminumWindows = () => {
    const [open, setOpen] = useState({ open: false, data: {} });
    const [openGlassUnits, setOpenGlassUnits] = useState({ open: false, data: {} });

    // open struktures modal
    const openModalHandlerStruktures = useCallback(value => {
        setOpen({ open: true, data: value });
    }, [open]);

    // close struktures modal
    const closeModalHandlerStruktures = useCallback(() => {
        setOpen({ open: false, data: {} });
    }, [open]);

    // open glassunits modal
    const openModalHandlerGlassUnits = useCallback(value => {
        setOpenGlassUnits({ open: true, data: value });
    }, [openGlassUnits])

    // close glassunits modal
    const closeModalHandlerGlassUnits = useCallback(() => {
        setOpenGlassUnits({ open: false, data: {} });
    }, [openGlassUnits])

    return (
        <div>
            <main className="w-full md:px-20 lg:px-32 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 text-white relative z-40 pt-[40px] lg:pt-[60px] xl:pt-[88px]">
                    <div className="px-3 lg:px-4 lg:col-span-2">
                        <span className="title uppercase font-Montserrat font-bold text-[23px] lg:text-[30px] xl:text-[45px] flex items-center gap-3 flex-wrap">
                        <span       className="title font-bold uppercase font-Montserrat"
                    data-aos="fade-right"
                    data-aos-delay={2200}
                >Алюминивые окна от производителя в Санкт-Петербурге и ЛО</span>
                            {/* {"Алюминивые окна от производителя в Санкт-Петербурге и ЛО".split(" ").map((item, index) => (
                                <span
                                    key={Math.random().toString()}
                                    data-aos="fade-right"
                                    data-aos-delay={1500 + (index + 1) * 150}
                                >{item}</span>
                            ))} */}
                        </span>
                        <ul className="mt-3 text-[16px] lg:text-[18px] xl:text-[18px]">
                            <li
                                className="flex items-start gap-5 mb-4"
                                data-aos="fade-right"
                                data-aos-delay={2200}
                            >
                                <img src={heroList} alt="" className="mt-1" />
                                По телефону зададим Вам несколько <br /> уточняющих вопросов
                            </li>
                            <li
                                className="flex items-start gap-5 mb-4"
                                data-aos="fade-right"
                                data-aos-delay={2500}
                            >
                                <img src={heroList} alt="" className="mt-1" />
                                Посчитаем предврадительную <br /> стоимость остекления
                            </li>
                            <li
                                className="flex items-start gap-5 mb-4"
                                data-aos="fade-right"
                                data-aos-delay={2700}
                            >
                                <img src={heroList} alt="" className="mt-1" /> Согласуем удобное
                                для Вас время и ответим на все <br /> интересующие вас вопросы
                            </li>
                            <li
                                className="flex items-start gap-5 mb-4"
                                data-aos="fade-right"
                                data-aos-delay={2900}
                            >
                                <img src={heroList} alt="" className="mt-1" />
                                Расскажем про основные этапы <br /> остекления
                            </li>
                        </ul>
                    </div>
                </div>
                <img
                    src={banner}
                    className="absolute -top-[175.5px] right-0 h-[910px] cornerAnimation object-cover md:object-fill" alt=""
                />
            </main>

            {/* free consultation */}
            <FreeConsultation />

            {/* structures */}
            <Structures
                data={aluminium_data}
                openModalHandlerStruktures={openModalHandlerStruktures}
            />

            {/* glass units */}
            <GlassUnits
                data={glassUnits_data}
                openModalHandlerGlassUnits={openModalHandlerGlassUnits}
            />

            {/* color */}
            <Color />

            {/* info */}
            <Info
                data={about_data}
            />

            {/* slide */}
            <Slider />

            {/* consultation */}
            <Consultation />

            {/* modal structures */}
            {open.open && (
                <StructuresModal
                    onClose={closeModalHandlerStruktures}
                    open={open.open}
                    maxWidth="sm:max-w-5xl"
                >
                    <Modal
                        onClose={closeModalHandlerStruktures}
                    >
                        <ContentModal
                            data={open.data}
                            images={aluminium_data_images}
                            onClose={closeModalHandlerStruktures}
                        />
                    </Modal>
                </StructuresModal>
            )}

            {/* modal glassunits */}
            {openGlassUnits.open && (
                <StructuresModal
                    onClose={closeModalHandlerGlassUnits}
                    open={openGlassUnits.open}
                    maxWidth="sm:max-w-5xl"
                >
                    <Modal
                        onClose={closeModalHandlerGlassUnits}
                    >
                        <ContentModalGlassunits
                            data={openGlassUnits.data}
                            onClose={closeModalHandlerGlassUnits}
                        />
                    </Modal>
                </StructuresModal>
            )}
        </div>
    );
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
};

export default AluminumWindows;
