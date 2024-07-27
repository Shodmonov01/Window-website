import React, { memo } from 'react';

function Title() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        "Ответы на частые вопросы!".split(" ").map((item, index) => (
            <span
                key={Math.random().toString()}
                className="title font-bold uppercase font-Montserrat"
                data-aos="fade-right"
                data-aos-delay={500 }
                data-aos-once={true}
            >
                {item}
            </span>
        ))
=======
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
        <span       className="title font-bold uppercase font-Montserrat"
                    data-aos="fade-right"
                    data-aos-delay={500}
                >Ответы на частые вопросы!</span>
        // "Ответы на частые вопросы!".split(" ").map((item, index) => (
        //     <span
        //         key={Math.random().toString()}
        //         className="title font-bold uppercase font-Montserrat"
        //         data-aos="fade-right"
        //         data-aos-delay={500 + (index + 1) * 100}
        //         data-aos-once={true}
        //     >
        //         {item}
        //     </span>
        // ))
<<<<<<< HEAD
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
=======
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
    )
}

export default memo(Title);