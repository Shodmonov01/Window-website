import { useCallback, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
// import Slider from "../../components/Slider";
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
import FreeConsultation from "../../components/FreeConsultation";
import Modal from "../../components/Modal";
import StructuresModal from "../../components/StructuresModal";
import ContentModal from "./components/ContentModal";
import ContentModalGlassunits from "./components/ContentModalGlassunits";
import {
  plastic_data,
  plastic_data_images,
} from "../../services/plastic/plastic_data";
import { about_data } from "../../services/plastic/about";
import { glassUnits_data } from "../../services/plastic/glassUnits_data";
import Info from "./components/Info";
import Profil from "./components/Profil";
import { profile_data } from "../../services/plastic/profil";
import heroList from "../../assets/heroList.svg";
import banner from "../../assets/aluminium/main2.png";
import SliderPlastic from "./components/SliderPlastic";
import { Helmet } from "react-helmet";

const PlasticWindows = () => {
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
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import Info from "../../components/Info";
import FreeConsultation from "../../components/FreeConsultation";
import Modal from "../../components/Modal";
import heroList from "../../assets/heroList.svg";
import banner from '../../assets/Plastic-page-hero.png';
import StructuresModal from "../../components/StructuresModal";
import ContentModal from "./components/ContentModal";
import ContentModalGlassunits from "./components/ContentModalGlassunits";
import { plastic_data, plastic_data_images } from "../../services/plastic/plastic_data";
import { about_data } from "../../services/plastic/about";
import { glassUnits_data } from "../../services/plastic/glassUnits_data";

const PlasticWindows = () => {
  const [open, setOpen] = useState({ open: false, data: {} });
  const [openGlassUnits, setOpenGlassUnits] = useState({ open: false, data: {} });

  // open struktures modal
  const openModalHandlerStruktures = useCallback(value => {
    setOpen({ open: true, data: value });
  }, [open]);
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

  // close struktures modal
  const closeModalHandlerStruktures = useCallback(() => {
    setOpen({ open: false, data: {} });
  }, [open]);

  // open glassunits modal
<<<<<<< HEAD
<<<<<<< HEAD
  const openModalHandlerGlassUnits = useCallback(
    (value) => {
      setOpenGlassUnits({ open: true, data: value });
    },
    [openGlassUnits]
  );
=======
  const openModalHandlerGlassUnits = useCallback(value => {
    setOpenGlassUnits({ open: true, data: value });
  }, [openGlassUnits])
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
  const openModalHandlerGlassUnits = useCallback(value => {
    setOpenGlassUnits({ open: true, data: value });
  }, [openGlassUnits])
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

  // close glassunits modal
  const closeModalHandlerGlassUnits = useCallback(() => {
    setOpenGlassUnits({ open: false, data: {} });
<<<<<<< HEAD
<<<<<<< HEAD
  }, [openGlassUnits]);

  return (
    <div>
      <Helmet>
        <title>Металлопластиковые изделия в Спб и ЛО | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Металлопластиковые изделия с установкой и доставкой по Спб и ЛО!"
        />
      </Helmet>
      <main className="w-full md:px-20 lg:px-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-white relative z-40 pt-[40px] lg:pt-[60px] xl:pt-[88px]">
          <div className="px-3 lg:px-4 lg:col-span-2">
            <span className="title uppercase font-Montserrat font-bold text-[23px] lg:text-[30px] xl:text-[45px] flex items-center gap-1 flex-wrap">

                  <span
                    key={Math.random().toString()}
                    data-aos="fade-right"
                    // data-aos-delay={1500 + (index + 1) * 150}
                    data-aos-delay={1500}
                  >
                    МЕТАЛЛОПЛАСТИКОВЫЕ ИЗДЕЛИЯ ОТ ПРОИЗВОДИТЕЛЯ В САНКТ-ПЕТЕРБУРГЕ И ЛО
                  </span>
                
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  }, [openGlassUnits])

  return (
    <div>
      <main className="w-full md:px-20 lg:px-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-white relative z-40 pt-[40px] lg:pt-[60px] xl:pt-[88px]">
          <div className="px-3 lg:px-4 lg:col-span-2">
            <span className="title uppercase font-Montserrat font-bold text-[23px] lg:text-[30px] xl:text-[45px] flex items-center gap-3 flex-wrap">
            <span
                    data-aos="fade-right"
                    data-aos-delay={2200}
                >Пластиковые окна от производителя в Санкт-Петербурге и ЛО</span>
              {/* {"Пластиковые окна от производителя в Санкт-Петербурге и ЛО".split(" ").map((item, index) => (
                <span
                  key={Math.random().toString()}
                  data-aos="fade-right"
                  data-aos-delay={1500 + (index + 1) * 150}
                >{item}</span>
              ))} */}
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
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
<<<<<<< HEAD
<<<<<<< HEAD
          className="absolute -top-[175.5px] xl:top-0 right-0 h-[910px] cornerAnimation object-cover md:object-fill"
          alt=""
=======
          className="absolute -top-[175.5px] right-0 h-[910px] cornerAnimation object-cover md:object-fill" alt=""
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
          className="absolute -top-[175.5px] right-0 h-[910px] cornerAnimation object-cover md:object-fill" alt=""
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        />
      </main>

      {/* free consultation */}
      <FreeConsultation />

      {/* structures */}
      <Structures
        data={plastic_data}
        openModalHandlerStruktures={openModalHandlerStruktures}
      />

<<<<<<< HEAD
<<<<<<< HEAD
      {/* vid profil */}
      <Profil data={profile_data} />

=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      {/* glass units */}
      <GlassUnits
        data={glassUnits_data}
        openModalHandlerGlassUnits={openModalHandlerGlassUnits}
      />

      {/* color */}
      <Color />

      {/* info */}
<<<<<<< HEAD
<<<<<<< HEAD
      <Info data={about_data} />

      {/* slide */}
      <SliderPlastic color={true} />

      {/* consultation */}
      <Consultation bg="true" />
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      <Info
        data={about_data}
      />

      {/* slide */}
      <Slider />

      {/* consultation */}
      <Consultation />
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

      {/* modal structures */}
      {open.open && (
        <StructuresModal
          onClose={closeModalHandlerStruktures}
          open={open.open}
          maxWidth="sm:max-w-5xl"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          <Modal onClose={closeModalHandlerStruktures}>
=======
          <Modal
            onClose={closeModalHandlerStruktures}
          >
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
          <Modal
            onClose={closeModalHandlerStruktures}
          >
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            <ContentModal
              data={open.data}
              images={plastic_data_images}
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
<<<<<<< HEAD
<<<<<<< HEAD
          maxWidth="sm:max-w-5xl "
        >
          <Modal onClose={closeModalHandlerGlassUnits}>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
          maxWidth="sm:max-w-5xl"
        >
          <Modal
            onClose={closeModalHandlerGlassUnits}
          >
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            <ContentModalGlassunits
              data={openGlassUnits.data}
              onClose={closeModalHandlerGlassUnits}
            />
          </Modal>
        </StructuresModal>
      )}
    </div>
  );
};

export default PlasticWindows;
