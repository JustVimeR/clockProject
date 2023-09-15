import './banner.scss';
import logo from '../../public/images/logo.png';
import icon1 from '../../public/images/icon_timer.png';
import icon2 from '../../public/images/icon_cart.png';
import icon3 from '../../public/images/icon_message.png';

const Banner = () => {

    return (
        <section id="up" className="promo">
            <div className="container">
                <header className='header'>
                    <a href="#" className="header__logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="header__official">
                        Офіційний представник
                        <span> Garmin, Polar, Suunto</span>
                    </div>
                    <div className="header__contacts">
                        <a href="tel: +380981196618" className="header__phone">+380 (98) 119-66-18</a>
                        <button data-modal="consultation" className='button'>замовити дзвінок</button>
                    </div>
                </header>
                <div className="promo__wrapper">
                    <h1 className="promo__header">
                        Підбір пульсометра
                    </h1>
                    <h2 className="promo__subheader">
                        з урахуванням Вашого рівня підготовки
                    </h2>
                    <div className="promo__icons">
                        <div className="promo__icon">
                            <img src={icon1} alt="timer" />
                            Час підбору: 10 хвилин
                        </div>
                        <div className="promo__icon">
                            <img src={icon2} alt="box" />
                            Безкоштовна доставка
                        </div>
                        <div className="promo__icon">
                            <img src={icon3} alt="message" />
                            Відповімо на всі питання
                        </div>
                    </div>
                    <button data-modal="consultation" className="button button_main">
                        замовити КОНСУЛЬТАЦІЮ
                    </button>
                    <div className="promo__link">
                        або
                        <a href="#"> ПЕРЕЙТИ В КАТАЛОГ</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;