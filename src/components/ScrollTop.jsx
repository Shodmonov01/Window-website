import { FaAngleUp } from "react-icons/fa6";

function ScrollTop() {

    document.addEventListener('scroll', () => {
        const scrolRef = document.querySelector('.scrolRef');
        console.log(window.scrollY);
        if (window.scrollY > 500) {
            scrolRef?.setAttribute('style', 'block');
        } else {
            scrolRef?.setAttribute('style', 'none');
        }
    })

    const topToPageHandler = () => {

    }

    return (
        <div onClick={topToPageHandler} className="scrolRef fixed bottom-[50px] right-[50px] rounded-full bg-orange-400 z-10 w-[40px] h-[40px] flex items-center justify-center" style={{ display: "none" }}>
            <FaAngleUp className={``} />
        </div>
    )
}

export default ScrollTop