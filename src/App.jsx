import { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";

const Home = lazy(() => import("./pages/Home/Home"));
const WoodenWindow = lazy(() => import("./pages/woodenWindow/WoodenWindow"));
<<<<<<< HEAD
<<<<<<< HEAD
const AluminumWindows = lazy(() =>
  import("./pages/aluminumWindow/AluminumWindow")
);
const FramelessGlazing = lazy(() =>
  import("./pages/FramelessGlazing/FramelessGlazing")
);
=======
const AluminumWindows = lazy(() => import("./pages/aluminumWindow/AluminumWindow"));
const FramelessGlazing = lazy(() => import("./pages/FramelessGlazing/FramelessGlazing"));
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
const AluminumWindows = lazy(() => import("./pages/aluminumWindow/AluminumWindow"));
const FramelessGlazing = lazy(() => import("./pages/FramelessGlazing/FramelessGlazing"));
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
const Montage = lazy(() => import("./pages/Montage/Montage"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/Contacts/Contact"));
<<<<<<< HEAD
<<<<<<< HEAD
const PlasticWindows = lazy(() =>
  import("./pages/plasticWindow/PlasticWindows")
);
const Services = lazy(() => import("./pages/Services/Services"));
const Balconies = lazy(() =>
  import("./pages/Services/pages/balconies/Balconies")
);
const Slopes = lazy(() => import("./pages/Services/pages/slopes/Slopes"));
const Pergolas = lazy(() => import("./pages/Services/pages/pergolas/Pergolas"));
const WindowSills = lazy(() =>
  import("./pages/Services/pages/windowSills/WindowSills")
);
const SectionalDoors = lazy(() =>
  import("./pages/Services/pages/sectionalDoors/SectionalDoors")
);
const Blinds = lazy(() => import("./pages/Services/pages/blinds/Blinds"));
const Mesh = lazy(() => import("./pages/Services/pages/mesh/Mesh"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const PayOrder = lazy(() => import("./pages/payOrder/PayOrder"));
const News = lazy(() => import("./pages/news/News"));
const OldWindows = lazy(() => import("./pages/news/pages/OldWindows"));
const PVCWindows = lazy(() => import("./pages/news/pages/PVCWindows"));
const Delivery = lazy(() => import("./pages/delivery/Delivery"));
const Guarantee = lazy(() => import("./pages/guarantee/Guarantee"));
const NotFound = lazy(() => import("./pages/NotFound"));
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
const PlasticWindows = lazy(() => import("./pages/plasticWindow/PlasticWindows"));
const Services = lazy(() => import("./pages/Services/Services"));
const ServicesDetail = lazy(() => import("./pages/Services/ServicesDetail"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
const Footer = lazy(() => import("./components/Footer"));
const NavbarLight = lazy(() => import("./components/NavbarLight"));
import Loader from "./components/Loader";
import ContactInfo from "./components/ContactInfo";
<<<<<<< HEAD
<<<<<<< HEAD

// react-international-phone
import "react-international-phone/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// toastify
import "react-toastify/dist/ReactToastify.css";
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
// import ScrollTop from "./components/ScrollTop";

// react phone number input
import 'react-phone-number-input/style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

// toastify
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

import "./App.css";

export default function App() {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======

>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  useEffect(() => {
    AOS.init();
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD


  return (
    <div className="app max-w-[1924px] m-auto bg-bg_color text-dark overflow-x-hidden font">
      <Suspense fallback={<Loader />}>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
  return (
    <div className="app max-w-[1924px] m-auto bg-bg_color text-dark overflow-x-hidden font">
      <Suspense fallback={
        <Loader />
      }>
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        <NavbarLight />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/plastic_window" element={<PlasticWindows />} />
          <Route path="/category/wooden_window" element={<WoodenWindow />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route
            path="/category/aluminum_window"
            element={<AluminumWindows />}
          />
          <Route
            path="/category/frameless_glazing"
            element={<FramelessGlazing />}
          />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/insulation-of-balconies"
            element={<Balconies />}
          />
          <Route path="/services/slopes_ebbs" element={<Slopes />} />
          <Route path="/services/window-sills" element={<WindowSills />} />
          <Route path="/services/pergolas" element={<Pergolas />} />
          <Route
            path="/services/sectional-doors"
            element={<SectionalDoors />}
          />
          <Route path="/services/blinds-pleated" element={<Blinds />} />
          <Route path="/services/mosquito-net" element={<Mesh />} />
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
          <Route path="/category/aluminum_window" element={<AluminumWindows />} />
          <Route path="/category/frameless_glazing" element={<FramelessGlazing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-detail/:id/:title" element={<ServicesDetail />} />
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/montage" element={<Montage />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/pay-for-the-order" element={<PayOrder />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/old_windows" element={<OldWindows />} />
          <Route path="/news/pvc_windows" element={<PVCWindows />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          draggablePercent={60}
          style={{ fontSize: "12px", zIndex: "99999" }}
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        </Routes>
        <ToastContainer
          draggablePercent={60}
          style={{ fontSize: "12px" }}
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        />
        <ContactInfo />
        <Footer />
      </Suspense>
    </div>
  );
}
