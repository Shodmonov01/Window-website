import montage1 from '../../assets/home/montage1.png';
import montage2 from '../../assets/home/montage2.png';
import montage3 from '../../assets/home/montage3.png';
import montage4 from '../../assets/home/montage4.png';
import banner from '../../assets/home/banner.png';
<<<<<<< HEAD
<<<<<<< HEAD
import banner2 from '../../assets/banner2.png';
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
import Form from '../../components/Form';
const data = [
    {
        id: Math.random().toString(),
        imgSrc: montage1,
        name: "Демонтажа старых окон",
        number: "01"
    },
    {
        id: Math.random().toString(),
        imgSrc: montage2,
        name: "Удаление всех видов уплотнителей и утеплителей",
        number: "02"
    },
    {
        id: Math.random().toString(),
        imgSrc: montage3,
        name: "Выравнивания стенок проема.",
        number: "03"
    },
];

function Montage() {
    return (
        <div className="my-[50px] mb-0">
            {/* row 1 */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="bg-box px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[30px] lg:py-[50px] text-white/70 text-center md:text-left">
                <span className="bg_linear_gradient_txt text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white">
=======
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[70px] lg:py-[92px] text-white/70 text-center md:text-left">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[70px] lg:py-[92px] text-white/70 text-center md:text-left">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    Монтаж  окон по ГОСТу
                </span>
                <p>
                    Металлопластиковые окна предназначены для длительной эксплуатации на протяжении 10 – 15 лет. Чтобы с ними не возникло проблем, необходимо очень тщательно подходить к выбору самой конструкции и выполнению монтажных операций. От способа установки окна и квалификации монтажников порой зависит больше, чем от качества самой конструкции.
                </p>
                <p>
                    Производители окон и других металлопластиковых конструкций разработали определенные технологии монтажа в стенах из различных материалов, которых необходимо придерживаться в обязательном порядке. Будет довольно досадно, если вокруг пятикамерного профиля с двухкамерным энергосберегающим стеклопакетом начнет промерзать стена или появятся пятна плесени.
                </p>
                <p>
                    В Европе и России приняты специальные стандарты, которые регламентируют количество, вид и последовательность операций при монтаже пластиковых окон. В частности, в России действуют ГОСТ 30971. 2002 г. и ГОСТ Р52749. 2007г. Все требования стандартов выполнить сложно, но ориентироваться на них совершенно необходимо — только в этом случае окно прослужит надлежащим образом на протяжении всего предусмотренного срока.
                </p>
            </div>

            {/* row 2 */}
            <div className='px-[20px] lg:px-[35px] xl:px-[50px] mt-[70px] md:mt-[95px]'>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex items-center lg:items-start flex-col gap-2'>
                    <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-center lg:text-left">
                        Подготовка оконного проема
                    </span>
                    <span className="capitalize text-[15px] lg:text-[17px] xl:text-[22px] text-center lg:text-left">
                        Этот процесс состоит из нескольких этапов
                    </span>
                </div>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat flex flex-col">
                    Подготовка оконного
                    <span>проема</span>
                </span>
                <span className="capitalize text-[15px] lg:text-[17px] xl:text-[18px]">
                    ЭТОТ ПРОЦЕСС СОСТОИТ ИЗ НЕСКОЛЬКИХ ЭТАПО
                </span>
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[15px] md:gap-[20px] mt-[40px] lg:mt-[59px]'>
                    {data?.length > 0 && data.map(item => (
                        <div className='flex flex-col gap-[11px]'>
                            <img src={item.imgSrc} alt="" />
                            <div className='flex items-center gap-[15px]'>
                                <span
                                    className='text-[16px] lg:text-[18px] xl:text-[22px] text-white w-[50px] h-[50px] lg:w-[61px] lg:h-[61px] flex items-center justify-center rounded-full'
                                    style={{ background: "linear-gradient(90deg, #DFC38E 36.25%, #CEA654 101.69%)" }}
                                >
                                    <span className=''>{item.number}</span>
                                </span>
                                <span className='text-[16px] lg:text-[18px] xl:text-[20px] font-semibold'>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex flex-col gap-[20px] w-full mt-[45px] lg:mt-[57px] text-[16px] lg:text-[20px] text-black/70 font-medium'>
=======
                <div className='flex flex-col gap-[20px] w-full lg:w-[70%] mt-[45px] lg:mt-[57px] text-[16px] lg:text-[20px] text-black/70 font-medium'>
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
                <div className='flex flex-col gap-[20px] w-full lg:w-[70%] mt-[45px] lg:mt-[57px] text-[16px] lg:text-[20px] text-black/70 font-medium'>
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    <span>
                        Правильный монтаж пластиковых окон по ГОСТу возможен только в том случае, если они изготовлены на промышленном оборудовании и полностью соответствуют сделанным ранее замерам. Еще на этапе подготовительных работ необходимо учесть тот факт, что проем должен быть на 2 – 5 см шире и выше оконной конструкции, чтобы там можно было сформировать полноценный монтажный шов, состоящий из 3 слоев.
                    </span>
                    <span>
                        Проще всего, если окна устанавливаются в новостройках, там отпадает один из самых сложных этапов — демонтаж. Но в случае замены окон, он обязателен. Начинается удаление старого окна со снятия створок. Как правило, на этом этапе сложностей не возникает, если рама не прогнила полностью. В этом случае необходимо сначала снять стекла, чтобы они не выпали при изъятии створки
                    </span>
                    <span>
                        Саму раму можно удалить несколькими способами, среди которых есть и весьма щадящие, но требующие больших затрат времени, позволяющие сохранить раму целой и пригодной для дальнейшего использования, например на даче или в качестве несущего элемента теплицы. Чаще всего старая рама просто разрезается дисковой пилой и удаляется по фрагментам
                    </span>
                    <span>
                        Проем тщательно очищается от мусора и остатков старого герметика. Если на стенках проема есть выемки, выбоины и трещины диаметром более 2 мм, то ГОСТ требует их заделки штукатурным или шпатлевочным раствором. Этого пункта мало кто придерживается в связи с тем, что полное высыхание штукатурки происходит в течение 5 - 8 дней, что не совсем удобно. Все это время проем будет открытым. Но можно воспользоваться быстросохнущими гипсовыми или полимерными смесями, которые сократят период ожидания до нескольких часов.
                    </span>
                </div>
            </div>

            {/* row 3 */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="bg-box px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[50px] lg:py-[60px] text-white/70 text-center md:text-left mt-[50px] lg:mt-[80px]">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat bg_linear_gradient_txt">
                    <span>Установка и выравнивание окна в проеме</span>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[70px] lg:py-[92px] text-white/70 text-center md:text-left mt-[80px] lg:mt-[184px]">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white flex flex-col">
                    <span>Установка и выравнивание</span>
                    <span>окна в проеме</span>
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                </span>
                <p>
                    После правильной подготовки проема, дальнейший монтаж продолжается установкой рамы. При этом необходимо учесть, что конструкция устанавливается по отвесу, а не по краям проема. В большинстве старых многоквартирных домов советской постройки, да и нередко в частных домах, боковые стенки проема далеки от вертикали, а нижняя и верхняя — от горизонтали
                </p>
                <p>
                    Если взять за ориентир одну из них, не проверив предварительно уровня, то раму установить можно, но со створками будет сложнее — вся фурнитура рассчитана на строгое соответствие уровню.
                </p>
                <p>
                    При установке пластиковых окон по ГОСТу инструкция требует соблюдения определенных допусков — отклонение по вертикали не более 3мм./м. (менее 4,5 мм. на всю длину конструкции). Проверяется правильность установки рамы при помощи водяного или лазерного строительного уровня.
                </p>
                <p>
                    До начала запенивания шва проверить отвесность рамы можно и другим способом — просто открыть створку более чем наполовину. Если она самопроизвольно открывается дальше или начинает закрываться, то окно установлено с нарушением вертикали и положение рамы необходимо корректировать. Если этого не сделать, должной герметизации не будет, что угрожает не только более низкой температурой в комнате, но и повреждением оконной конструкции вследствие появления наледи.
                </p>

                <img src={banner} alt="" className='mt-[30px] lg:mt-[40px]' />
            </div>

            {/* row 4 */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='px-[20px] lg:px-[35px] xl:px-[50px] mt-[50px] lg:mt-[100px] text-center md:text-left'>
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat">
                    Наклеивание ПСУЛ
                </span>
                <div className='flex flex-col gap-[20px] w-full mt-[20px] lg:mt-[30px] text-[16px] lg:text-[20px] text-black/70 font-medium '>
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
            <div className='px-[20px] lg:px-[35px] xl:px-[50px] mt-[100px] lg:mt-[150px] xl:mt-[200px] text-center md:text-left'>
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat">
                    Наклеивание ПСУЛ
                </span>
                <div className='flex flex-col gap-[20px] w-full lg:w-[70%] mt-[36px] lg:mt-[57px] text-[16px] lg:text-[20px] text-black/70 font-medium '>
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    <span>
                        Начинается формирование шва еще до начала установки, если используется лента ПСУЛ. Она наклеивается по периметру рамы или проема при помощи самоклеящегося состава, нанесенного на поверхность скрученной в ролик ленты.
                    </span>
                    <img src={montage4} alt="" className='my-[40px] lg:my-[50px] w-full md:w-[642px] h-[437px]' />
                    <span>
                        Это позволит достичь сразу двух целей — создать надежную защиту от проникновения влаги внутрь шва извне и не допустить выдавливания монтажной пены за срез рамы. Лента производится по ГОСТ 30971-2002 и создана специально для обустройства вентилируемых швов при монтаже конструкций из металлопластика. Она используется только в комплексе с монтажной пеной. ПСУЛ сделана из пенополиуретана, пропитанного специальными гидрофобными компонентами и покрыта самоклеящимся слоем.
                    </span>
                    <span>
                        Продается лента в рулонах, готовая к непосредственному применению после разматывания. Клеящий слой обладает отличной адгезией к ПВХ и большинству стеновых материалов, которые должны быть сухими и очищенными от пыли. Пористые материалы рекомендуется обработать грунтом глубокого проникновения.
                    </span>
                    <span>
                        Скорость расширения ленты зависит от температуры. При + 30 0С она расширяется полностью за 30 минут, при нулевой температуре — на протяжении 48 часов. Поэтому при установке окон осенью или зимой необходимо использовать строительный фен на минимальном положении регулятора нагрева.
                    </span>
                </div>
            </div>

            {/* row 5 */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[40px] lg:py-[76px] text-white/70 text-center md:text-left mt-[70px] lg:mt-[100px]">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat bg_linear_gradient_txt">
=======
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[40px] lg:py-[76px] text-white/70 text-center md:text-left mt-[100px] lg:mt-[200px] xl:mt-[268px]">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
            <div className="bg-[#212121] px-[20px] lg:px-[35px] xl:px-[50px] flex flex-col gap-[20px] lg:gap-[26px] py-[40px] lg:py-[76px] text-white/70 text-center md:text-left mt-[100px] lg:mt-[200px] xl:mt-[268px]">
                <span className="text-[30px] lg:text-[40px] xl:text-[45px] font-bold uppercase font-Montserrat text-white">
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
                    Заполнение шва монтажной пеной
                </span>
                <p>
                    После установки защитной ленты, шов задувается монтажной пеной (пенополиуретановым герметиком). Желательно использовать профессиональные пены PRO, которые распыляются при помощи пистолета. Они обеспечивают надлежащую плотность материала после расширения и отличную теплоизоляцию, при этом их расход ниже, чем бытовых герметиков, распыляющихся из аэрозольных баллончиков.
                </p>
                <p>
                    Производители предлагают универсальные пенные герметики в зимнем и летнем исполнении. Это определение касается только минимальной температуры воздуха, при которой их можно наносить. Летние используются при температурах выше +5 0С, а зимние можно распылять при нескольких (до — 10) градусах мороза. После полимеризации (вопреки бытующему мнению) они нечем не отличаются ни по механическим, ни по теплотехническим свойствам.
                </p>

<<<<<<< HEAD
<<<<<<< HEAD
                <img src={banner2} alt="" className='my-[20px]' />
=======
                <img src={banner} alt="" className='my-[20px]' />
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
                <img src={banner} alt="" className='my-[20px]' />
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149

                <p>
                    При работе с пеной необходимо учитывать, что полимеризация происходит исключительно при контакте с влагой. Перед заполнением шва пеной, все поверхности необходимо увлажнить, а после окончания распылить немного воды по периметру. Но необходимо помнить, что пена расширяется до 40% от первоначального объема (имеется в виду профессиональный материал), поэтому плотно заполнять шов не требуется. Если герметика задуто в щель слишком много, то при расширении он способен деформировать раму.
                </p>
                <p>
                    Чтобы частично нивелировать возникающие при полимеризации пены нагрузки, заполнять ею швы необходимо после установки всех створок и стеклопакетов и перемещении открывающихся частей в закрытое положение.
                </p>
                <p>
                    При использовании пенного герметика следует помнить, что он, независимо от того, профессиональный или бытовой, боится воздействия ультрафиолета и влаги из воздуха. Под прямыми солнечными лучами он разрушается быстрее, в тени — медленнее. Но если не защитить теплоизоляционный слой от внешних воздействий, то спустя 2 – 3 года он разрушится и холод непременно проникнет внутрь дома по периметру окна.
                </p>
                <p>
                    Внешняя лента ПСУЛ не допускает внутрь ни влаги ни ультрафиолета, поэтому теплоизоляции ничто не угрожает. В это же время структура ленты позволяет избытку водяного пара покидать толщу шва, он просушивается естественным путем, что тоже благоприятно влияет на долговечность. Если ленты ПСУЛ нет, то использовать можно специальные герметики на акриловой основе.
                </p>
            </div>

            {/* row 6 */}
            <Form />
        </div>
    )
}

export default Montage;