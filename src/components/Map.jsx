import React, { memo } from "react";

function Map() {
  return (
    <div
      className="w-full lg:w-[38%] py-6 lg:py-[100px] relative"
      data-aos="fade-left"
      data-aos-delay={2000}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/org/elitplast/212916788228/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          ЭлитПласт
        </a>
        <a
          href="https://yandex.ru/maps/2/saint-petersburg/category/windows/184107727/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Окна в Санкт‑Петербурге
        </a>
        <a
          href="https://yandex.ru/maps/2/saint-petersburg/category/doors/184107677/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "28px",
          }}
        >
          Двери в Санкт‑Петербурге
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/org/elitplast/212916788228/?ll=30.448765%2C59.942696&z=16"
          width="100%"
          height="640"
          // frameBorder="1"
          allowFullScreen={true}
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
}

export default memo(Map);
