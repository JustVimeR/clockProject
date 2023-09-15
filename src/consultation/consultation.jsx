import './consultation.scss';
import upImg from '../../public/images/arr.png';
import '../blocks/pageup.scss';
import jQuery from 'jquery';

const Consultation = () => {
    jQuery(function ($) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
    return (
        <section className='consultation'>
            <div className="container">
                <h2 className="title title_left">
                    Отримайте безкоштовну консультацію <br />
                    щодо підбору пульсометра
                </h2>
                <div className="consultation__descr">
                    Просто заповніть форму заявки <br />
                    і ми передзвонимо вам протягом 10 хвилин
                </div>
                <form id="consultation-form" className="feed-form" action="#">
                    <input name="name" required placeholder="Ваше ім'я" type="text" />
                    <input name="phone" required placeholder="Ваш телефон" type="number" />
                    <input name="email" required placeholder="Ваш E-mail" type="email" />
                    <button className='button button_submit'>замовити КОНСУЛЬТАЦІЮ</button>
                </form>
            </div>

            <a href="#up" className="pageup" >
                <img src={upImg} alt="up" />
            </a>
        </section>
    )
}

export default Consultation;