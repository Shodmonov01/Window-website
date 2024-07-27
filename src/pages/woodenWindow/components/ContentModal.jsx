<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import CarouselGalleryModal from "../../../components/CarouselGalleryModal";

// million-ignore
function ContentModal({ data, images, onClose }) {
  const navigate = useNavigate();
  const { modal } = data;

  // navigate
  const navigateHandler = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 pt-[70px] lg:pt-[90px] pb-[80px] gap-[30px] xl:gap-[85px] px-[10px] lg:px-[52px] text-white">
      <CarouselGalleryModal data={data} d={images} />

      <div className="lg:col-span-1 flex flex-col gap-[15px] lg:gap-[25px] text-[14px] lg:text-[16px]">
        <span>
          <strong>{modal.textTitle}</strong>
          {modal.textTop}
        </span>
        <span className="flex flex-col gap-2">
          {modal.textCenter?.split("<br />").map((item) => (
            <span>{item}</span>
          ))}
        </span>
        <span className="flex flex-col gap-2">
          {modal.textBottom?.split("<br />").map((item) => (
            <span>{item}</span>
          ))}
        </span>
        {modal.textBottom2 && (
          <span className="flex flex-col gap-2">
            {modal.textBottom2?.split("<br />").map((item) => (
              <span>{item}</span>
            ))}
          </span>
        )}
        {modal.textBottom3 && (
          <span className="flex flex-col gap-2">
            {modal.textBottom3?.split("<br />").map((item) => (
              <span>{item}</span>
            ))}
          </span>
        )}
        <button
          className="text-[13px] md:text-[15.5px] tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full lg:w-[281px] h-[51px] md:h-[57px] font-bold"
          style={{
            background: "#EADA86",
          }}
          type="button"
          onClick={navigateHandler}
        >
          Связаться с нами
        </button>
      </div>
    </div>
  );
}

export default memo(ContentModal);
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselGalleryModal from '../../../components/CarouselGalleryModal';

// million-ignore
function ContentModal({ data, images, onClose }) {
    const navigate = useNavigate();
    const { modal } = data;

    // navigate
    const navigateHandler = () => {
        onClose();
        navigate("/contact");
    }

    return (
        <div className='flex flex-col lg:grid lg:grid-cols-2 pt-[106px] pb-[80px] gap-[30px] xl:gap-[85px] px-[10px] lg:px-[52px]'>
            <CarouselGalleryModal
                data={data}
                d={images}
            />

            <div className='lg:col-span-1 flex flex-col gap-[15px] lg:gap-[25px] text-[14px] lg:text-[16px]'>
                <span><strong>{modal.textTitle}</strong>{modal.textTop}</span>
                <span>{modal.textCenter}</span>
                <span>{modal.textBottom}</span>
                {modal.textBottom2 && <span>{modal.textBottom2}</span>}
                {modal.textBottom3 && <span>{modal.textBottom3}</span>}
                <button
                    className="button text-[13px] md:text-[15.5px] font-medium tracking-widest flex items-center justify-center uppercase mx-auto md:mx-0 w-full lg:w-[281px] h-[51px] md:h-[57px]"
                    style={{
                        background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)"
                    }}
                    type="button"
                    onClick={navigateHandler}
                >
                    Связаться с нами
                </button>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default memo(ContentModal);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
export default memo(ContentModal);
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
