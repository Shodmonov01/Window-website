import React, { memo } from "react";
import Layout from "../../../../../components/Layout";
import balkon2 from "../../../../../assets/services/balcon/balkon2.png";
import balkon3 from "../../../../../assets/services/balcon/balkon3.png";
import balkon4 from "../../../../../assets/services/balcon/balkon4.png";
import balkon5 from "../../../../../assets/services/balcon/balkon5.png";
import balkon6 from "../../../../../assets/services/balcon/balkon6.png";
import Button from "../../../components/Button";

// million-ignore
function Top5Materials() {
  return (
    <Layout>
      <div className="mt-[30px] lg:mt-[100px] mb-[30px] lg:mb-[130px]">
        <div className="text-[23px] lg:text-[35px] xl:text-[45px] font-bold text-center uppercase">
          ТОП-5 материалов для утепления
        </div>
      </div>

      {/* row 1 */}
      <div className="flex flex-col-reverse lg:grid gap-[50px] lg:grid-cols-12">
        <div className="lg:col-span-7 pr-0 lg:pr-[40px] xl:pr-[50px] 2xl:pr-[100px]">
          <div className="text-[16px] lg:text-[20px] text-dark flex flex-col font-medium text-center lg:text-left">
            <span className="uppercase font-bold font-Montserrat">
              Пенопласт (пенополистирол)
            </span>
            <span className="pt-[14px] lg:pt-[12px]">
              Один из самых распространенных материалов утепления. Чаще всего
              применяется листовой пенопласт толщиной 5 см, если климат суровый,
              то толщина составляет 10 см.
            </span>
            <span className="font-semibold mt-[30px] lg:mt-[20px]">
              Из преимуществ пенополистирола стоит отметить следующие:
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · Низкий коэффициент теплопроводности, что подразумевает высокую
              теплоизоляцию без дополнительных материалов;
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · Высокое влагопоглощение, поэтому нет необходимости монтировать
              дополнительную гидроизоляцию;
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · Хорошая прочность материала позволяет применять плотные
              отделочные материалы;
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · При монтаже не образуется пыль;
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · Не содержит вредных химических веществ, что говорит об
              экологичности и гигиеничности материала
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · Легко режется на куски, поэтому проблем при монтаже не возникает
            </span>
            <span className="mt-[15px] lg:mt-[10px]">
              · При соблюдении технологий сроки эксплуатации составляют до 30
              лет.
            </span>
            <span className="mt-[30px] lg:mt-[22px]">
              Из недостатков пенополистирола можно выделить высокую горючесть,
              плохую шумоизоляцию и воздухопроводность, что требует установки
              дополнительной вентиляции.
            </span>
          </div>

          <Button />
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={balkon2}
              alt=""
              className="w-[98%] lg:w-[100%] h-[550px] object-fill 2xl:h-[690px] rounded-md relative z-10"
            />
            <div className="absolute top-0 left-[25px] h-[550px] w-[95%] lg:w-[100%] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className="flex flex-wrap flex-col lg:grid gap-[50px] lg:grid-cols-12 my-[100px] lg:my-[150px]">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={balkon3}
              alt=""
              className="w-[98%] lg:w-[100%] h-[550px] object-fill 2xl:h-[612px] rounded-md relative z-10"
            />
            <div className="absolute top-0 left-[25px] h-[550px] w-[95%] lg:w-[100%] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
          </div>
        </div>
        <div className="lg:col-span-7 pl-0 lg:pl-[40px] xl:pl-[50px] 2xl:pl-[100px]">
          <div className="text-[16px] lg:text-[20px] text-dark flex flex-col font-medium text-center lg:text-left">
            <span className="uppercase font-bold font-Montserrat">
              Пеноплекс
            </span>
            <span className="pt-[14px] lg:pt-[17px]">
              Пеноплекс – это улучшенная версия пенопласта. Он имеет равномерную
              пористую структуру и более низкий показатель теплопроводности.
              Также пеноплекс демонстрирует хорошую пожаробезопасность и высокую
              прочность (его можно класть даже на пол). В остальном преимущества
              материала соответствуют пенопласту. Из недостатков стоит выделить
              только высокую стоимость.
            </span>
            <span className="mt-[30px] lg:mt-[41px] font-semibold">
              Листы пеноплекса скрепляются «жидкими гвоздями» или монтажной
              пеной.
            </span>
          </div>

          <Button />
        </div>
      </div>

      {/* row 3 */}
      <div className="flex flex-col-reverse lg:grid gap-[50px] lg:grid-cols-12">
        <div className="lg:col-span-7 pr-0 lg:pr-[40px] xl:pr-[50px] 2xl:pr-[100px]">
          <div className="text-[16px] lg:text-[20px] text-dark flex flex-col font-medium text-center lg:text-left">
            <span className="uppercase font-bold font-Montserrat">
              Минеральная вата
            </span>
            <span className="pt-[14px] lg:pt-[17px]">
              Сегодня чаще используют базальтовую мин.вату, к ее преимуществам
              можно отнести следующие:
            </span>
            <span className="mt-[30px] lg:mt-[37px]">
              · Показатель теплопроводности как у пеноплекса;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Не пропускает влагу;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Отличается хорошим показателем воздухопроводности;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Высокие показатели шумоизоляции;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Высокая прочность и огнестойкость;
            </span>
            <span className="mt-[35px] lg:mt-[53px]">
              Из недостатков стоит отметить высокую цену, а также необходимость
              монтажа в спецодежде.
            </span>
            <span className="mt-[18px] lg:mt-[26px]">
              При монтаже классической минеральной ваты лучше пользоваться
              услугами специалистов. Так как частицы мин. ваты могут въесться в
              кожу, волосы и осесть на слизистых оболочках.
            </span>
          </div>

          <Button />
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={balkon4}
              alt=""
              className="w-[98%] lg:w-[100%] h-[550px] object-fill 2xl:h-[612px] rounded-md relative z-10"
            />
            <div className="absolute top-0 left-[25px] h-[550px] w-[95%] lg:w-[100%] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* row 4 */}
      <div className="flex flex-wrap flex-col lg:grid gap-[50px] lg:grid-cols-12 my-[100px] lg:my-[150px]">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={balkon5}
              alt=""
              className="w-[98%] lg:w-[100%] h-[550px] object-fill 2xl:h-[612px] rounded-md relative z-10"
            />
            <div className="absolute top-0 left-[25px] h-[550px] w-[95%] lg:w-[100%] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
          </div>
        </div>
        <div className="lg:col-span-7 pl-0 lg:pl-[40px] xl:pl-[50px] 2xl:pl-[100px]">
          <div className="text-[16px] lg:text-[20px] text-dark flex flex-col font-medium text-center lg:text-left">
            <span className="uppercase font-bold font-Montserrat">Пенофол</span>
            <span className="pt-[14px] lg:pt-[17px]">
              Пенофолом называется вспененный полиэтилен с внешним слоем фольги.
              Данный материал поставляется в матах и рулонах, что делает его
              монтаж легким и быстрым. Еще одно достоинство – отражение тепла за
              счет фольгированного слоя.
            </span>
            <span className="mt-[20px] lg:mt-[27px]">
              Только использовать пенофол без дополнительных материалов
              бессмысленно, так как он не может обеспечить необходимый уровень
              теплоизоляции. Для отражения потоков тепла фольгированная сторона
              должна быть направлена внутрь помещения.
            </span>
          </div>

          <Button />
        </div>
      </div>

      {/* row 5 */}
      <div className="flex flex-col-reverse lg:grid gap-[50px] lg:grid-cols-12">
        <div className="lg:col-span-7 pr-0 lg:pr-[40px] xl:pr-[50px] 2xl:pr-[100px]">
          <div className="text-[16px]  lg:text-[20px] text-dark flex flex-col font-medium text-center lg:text-left">
            <span className="uppercase font-bold font-Montserrat">Изолон</span>
            <span className="pt-[14px] lg:pt-[17px]">
              Изолон – это усовершенствованный пенофол, который так же отражает
              тепло и производится в рулонах, однако, у него гораздо больше
              преимуществ:
            </span>
            <span className="mt-[30px] lg:mt-[37px]">
              · Высокий показатель огнестойкости – при воздействии огня материал
              распадается на воду и углекислоту;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Демонстрирует отличные показатели шумо- и теплоизоляции;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · Хорошо подходит для климата с резкими перепадами температур;
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              · При соблюдении технологий срок эксплуатации достигает 100 лет.
            </span>
            <span className="mt-[35px] lg:mt-[53px]">
              Из недостатков отмечается высокая стоимость и тонкость. Также,
              если неправильно уложить, то материал потеряет свои
              характеристики.
            </span>
            <span className="mt-[15px] lg:mt-[20px]">
              После выбора материала следует приступать к процессу утепления.
            </span>
          </div>

          <Button />
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={balkon6}
              alt=""
              className="w-[98%] lg:w-[100%] h-[550px] object-fill 2xl:h-[612px] rounded-md relative z-10"
            />
            <div className="absolute top-0 left-[25px] h-[550px] w-[95%] lg:w-[100%] lg:h-full bg-linear -translate-y-3 lg:-translate-y-5 rounded-md"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default memo(Top5Materials);
