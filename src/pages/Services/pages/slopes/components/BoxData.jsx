import React, { memo } from "react";
import Layout from "../../../../../components/Layout";
const data = [
  {
    id: Math.random().toString(),
    title: "Откосы на окнах из пластика",
    textTop: `Откосы для окон из пластиковых панелей довольно простые в монтаже, не потребуется тщательно подготавливать поверхность, они хорошо скроют все дефекты стен. За поверхностью очень легко ухаживать, она не трескается со временем и не загрязняется, в отличие от штукатурки. Под пластиковые откосы на окна можно положить утеплительный материал, который создаст в помещении дополнительный комфорт. Такие откосы на окнах своими руками может сделать каждый, для этого потребуется только правильно рассчитать необходимое количество материала и аккуратно вырезать все пластиковые заготовки.`,
    textBottom: ``,
  },
  {
    id: Math.random().toString(),
    title: "ПВХ-сэндвич панели",
    textTop: `Идеально подойдут для монтажа откосов, можно придать привлекательный внешний вид и одновременно утеплить оконный проем. Можно выбрать такой цвет сэндвич-панели, который идеально подойдет под интерьер помещения. Также сэндвич-панели отличаются влагоустойчивостью и паропроницаемостью, в процессе эксплуатации необходим минимальный уход. Для декоративного завершения монтажных работ по откосам используется F-профиль. F-профиль ПВХ для откосов применяется для торцевых элементов, угловых соединений, стыков между панелью и оконным проемом. Профиль легко разрезается на необходимые по размеру планки, для этого можно использовать ножовку.`,
    textBottom: ``,
  },
  {
    id: Math.random().toString(),
    title: "Уголок пластиковый для откосов",
    textTop: `Изготавливается из жесткого ПВХ путем сгибания листа, применяется для того, чтобы скрыть зазор между окном и четвертью. Также уголок скрывает монтажную пену и защищает ее от разрушения на воздухе.`,
    textBottom: `Наружные отливы для окон должны быть предусмотрены у каждого окна, их основная задача – отвод воды, попадающей на окно. Помимо этого, наружные отливы придают окну законченный вид. Они являются неотъемлемым элементом, как самого окна, так и всего фасада в целом.`,
  },
  {
    id: Math.random().toString(),
    title: "Защитные функции отлива",
    textTop: `Отливы – это обязательный элемент окон ПВХ, предотвращающий попадание влаги в конструкцию окон. При попадании влаги в область соединения проема окна и коробки ПВХ начинается разрушение строительной пены, а также, из-за отсутствия выхода влаги, начинает засоряться конструкция, образуется грибок и из-под окна начинает поддувать. Как мы видим, при неправильной установке отлива мы получаем целый комплекс проблем, которые в дальнейшем будут вызывать у нас неудобства.`,
    textBottom: `Поэтому, учитывая все вышеперечисленные нюансы, установка отливов должна проводиться таким образом, чтобы исключить попадание влаги в область соединения проема окна и коробки. И выбор места установки отлива на саморезы очень важен. Под оконным профилем находится, так называемый, подставочный профиль. И как правило отливы при помощи саморезов крепятся именно к нему. Это делается специально, чтобы отлив полностью был под оконным профилем, и влага, стекающая по окну не могла попасть под отлив.`,
  },
];

// million-ignore
function BoxData() {
  return (
    <div className="bg-box mt-[80px] lg:mt-[150px]">
      <Layout>
        <div className="pt-[50px] lg:pt-[80px] pb-[80px] lg:pb-[100px] flex flex-col gap-[30px] lg:gap-[50px] w-full">
          {data?.length > 0 &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-[11px] text-white text-[15px] lg:text-[17px] text-center lg:text-left"
              >
                <span className="bg_linear_gradient text-[18px] lg:text-[20px] font-bold font-Montserrat">
                  {item.title}
                </span>
                {item.textTop.split("<br />").map((elem, index) => (
                  <span className="" key={index}>
                    {elem}
                  </span>
                ))}
                {item.textBottom && <span>{item.textBottom}</span>}
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
}

export default memo(BoxData);
