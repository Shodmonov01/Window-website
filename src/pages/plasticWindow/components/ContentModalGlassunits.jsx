import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// million-ignore
function ContentModalGlassunits({ data, onClose }) {
    const navigate = useNavigate();
    const { modal } = data;

    // navigate
    const navigateHandler = () => {
        onClose();
        navigate("/contact");
    }

    return (
        <div className='grid grid-cols-1 pt-[106px] pb-[80px] gap-[30px] xl:gap-[85px] px-[10px] lg:px-[52px]'>
            <div className='lg:col-span-1 flex flex-col gap-[15px] lg:gap-[25px] text-[14px] lg:text-[18px]'>
                <strong className='text-[20px] lg:text-[25px]'>{modal.title}</strong>
                {modal.textTop && <span >{modal.textTop}</span>}
                {modal.textCenter && <span>{modal.textCenter}</span>}
                {modal.textBottom && <span>{modal.textBottom}</span>}
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

export default memo(ContentModalGlassunits);