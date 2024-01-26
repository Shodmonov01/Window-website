import { memo } from 'react';

// million-ignore
function Modal({ onClose, children }) {

    return (
        <div
            style={{ fontStyle: "normal" }}
        >
            {/* close modal icon */}
            <span className='absolute top-[31px] right-[30px] lg:right-[48px] cursor-pointer' onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 25 25" fill="none">
                    <path d="M22.7201 22.7045L12.3601 12.3523M12.3601 12.3523L2 2M12.3601 12.3523L22.7202 2M12.3601 12.3523L2 22.7046" stroke="#404040" strokeWidth="3.14519" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>

            {/* content */}
            {children}
        </div>
    )
}

export default memo(Modal);
