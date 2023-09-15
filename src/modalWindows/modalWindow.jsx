import './modalWindow.scss';
import React from 'react';
import jQuery from 'jquery';


const ModalWindow = () => {

    jQuery(function ($) {
        $('[data-modal=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function () {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
        });

        $('.button_mini').each(function (i) {
            $(this).on('click', function () {
                $("#order .modal__descr").text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });

        $('form').submit(function (e) {
            e.preventDefault();

            if (!$(this).valid()) {
                return;
            }

            $.ajax({
                type: "POST",
                url: "../mailer/smart.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');
                $('form').trigger('reset');
            });
            return false;
        });
    });

    return (
        <div className='overlay'>
            <div className="modal" id='consultation'>
                <div className="modal__close">&times;</div>
                <div className="modal__subtitle">
                    Просто заповніть форму заявки
                </div>
                <div className="modal__descr">
                    і ми передзвонимо вам протягом 10 хвилин
                </div>
                <form className="feed-form feed-form_mt25" action="#">
                    <input required name="name" placeholder="Ваше ім'я" type="text" />
                    <input required name="phone" placeholder="Ваш телефон" type="number" />
                    <input required name="email" placeholder="Ваш E-mail" type="email" />
                    <button className='button button_submit'>замовити КОНСУЛЬТАЦІЮ</button>
                </form>
            </div>

            <div className="modal" id='order'>
                <div className="modal__close">&times;</div>
                <div className="modal__subtitle">
                    Ваше замовлення:
                </div>
                <div className="modal__descr">
                    Пульсометр Polar FT1
                </div>
                <form className="feed-form feed-form_mt25" action="#">
                    <input name="name" required placeholder="Ваше ім'я" type="text" />
                    <input name="phone" required placeholder="Ваш телефон" type="number" />
                    <input name="email" required placeholder="Ваш E-mail" type="email" />
                    <button className='button button_submit'>ПРИДБАТИ</button>
                </form>
            </div>

            <div className="modal modal_mini" id='thanks'>
                <div className="modal__close">&times;</div>
                <div className="modal__subtitle">
                    Дякую за вашу заявку!
                </div>
                <div className="modal__descr">
                    Наш менеджер зв'яжеться з вами найближчим часом!
                </div>
            </div>


        </div>

    )
}

export default ModalWindow;