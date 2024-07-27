import React, { memo, useEffect } from "react";

function Order() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <form
          className="payform-tinkoff"
          name="payform-tinkoff"
          onSubmit={(e) => {
            e.preventDefault();
            pay(e.target);
            return false;
          }}
        >
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="terminalkey"
            value="1708332714384"
          />

          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="frame"
            value="true"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="language"
            value="ru"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Описание заказа"
            name="description"
          />
          <input
            className="payform-tinkoff-row"
            type="tel"
            placeholder="Контактный телефон"
            name="phone"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Сумма заказа"
            name="amount"
            required
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Номер заказа"
            name="order"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="ФИО плательщика"
            name="name"
          />
          <input
            className="payform-tinkoff-row"
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="password"
            value="csjjz7hw60ojvrm1"
          />
          <input
            className="cursor-pointer payform-tinkoff-row payform-tinkoff-btn"
            type="submit"
            value="Оплатить"
          />
        </form>
      </div>
    </>
  );
}

export default memo(Order);