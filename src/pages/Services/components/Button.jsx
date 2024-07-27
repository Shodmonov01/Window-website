import React, { memo } from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="lg:hidden flex items-center justify-center mt-[30px]">
      <Link
        to={"/contact"}
        className="text-white font-semibold tracking-widest flex items-center justify-center mt-5 uppercase w-[90%] mx-4 md:mx-0 md:w-[250px] h-[55px] md:h-[65px] text-[14px]"
        data-aos="fade-up"
        data-aos-delay={500}
        style={{
          background: "#EADA86",
        }}
      >
        Связаться с нами
      </Link>
    </div>
  );
}

export default memo(Button);
