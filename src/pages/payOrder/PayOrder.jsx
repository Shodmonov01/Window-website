import React from "react";
import Consultation from "../../components/Consultation";
import SliderDark from "../../components/SliderDark";
import Order from "./components/Order";
import Card from "./components/Card";
import Desc from "./components/Desc";
import { Helmet } from "react-helmet";

function PayOrder() {
  return (
    <div>
      <Helmet>
        <title>Условия оплаты | ЭлитПласт</title>
        <meta
          name="description"
          content="ЭлитПласт - Вы можете ознакомиться с условиями оплаты наших изделий! Спб и ЛО"
        />
      </Helmet>
      {/* order */}
      <div className="mb-[70px] lg:mb-[100px]">
        <Order />
      </div>

      {/* bank card */}
      <Card />

      {/* desc */}
      <Desc />

      {/* slide */}
      <SliderDark />

      {/* consultation */}
      <div className="lg:-mt-0 mt-28">
        <Consultation />
      </div>
    </div>
  );
}

export default PayOrder;
