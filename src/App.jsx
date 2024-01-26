import { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";

const Home = lazy(() => import("./pages/Home/Home"));
const WoodenWindow = lazy(() => import("./pages/woodenWindow/WoodenWindow"));
const AluminumWindows = lazy(() => import("./pages/aluminumWindow/AluminumWindow"));
const FramelessGlazing = lazy(() => import("./pages/FramelessGlazing/FramelessGlazing"));
const Montage = lazy(() => import("./pages/Montage/Montage"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/Contacts/Contact"));
const PlasticWindows = lazy(() => import("./pages/plasticWindow/PlasticWindows"));
const Services = lazy(() => import("./pages/Services/Services"));
const ServicesDetail = lazy(() => import("./pages/Services/ServicesDetail"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Footer = lazy(() => import("./components/Footer"));
const NavbarLight = lazy(() => import("./components/NavbarLight"));
import Loader from "./components/Loader";
import ContactInfo from "./components/ContactInfo";
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

import "./App.css";

export default function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app max-w-[1924px] m-auto bg-bg_color text-dark overflow-x-hidden font">
      <Suspense fallback={
        <Loader />
      }>
        <NavbarLight />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/plastic_window" element={<PlasticWindows />} />
          <Route path="/category/wooden_window" element={<WoodenWindow />} />
          <Route path="/category/aluminum_window" element={<AluminumWindows />} />
          <Route path="/category/frameless_glazing" element={<FramelessGlazing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-detail/:id/:title" element={<ServicesDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/montage" element={<Montage />} />
        </Routes>
        <ToastContainer
          draggablePercent={60}
          style={{ fontSize: "12px" }}
        />
        <ContactInfo />
        <Footer />
      </Suspense>
    </div>
  );
}
