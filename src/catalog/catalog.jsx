import './catalog.scss';
import puls from '../../public/images/pulsometr.png';
import $ from 'jquery';
import React from 'react';

const Catalog = () => {

    $(document).ready(function () {

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
                .eq($(this).index()).addClass('catalog__content_active');
        });

        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');
    });

    return (
        <section className="catalog">
            <div className="container">
                <h2 className="title">Каталог пульсометрів</h2>
                <ul className="catalog__tabs">
                    <li className="catalog__tab"><div>Для фітнеса</div></li>
                    <li className="catalog__tab"><div>Для бігу</div></li>
                    <li className="catalog__tab"><div>Для триатлона</div></li>
                </ul>
                <div className="catalog__content catalog__content_active">
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar FT1</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar FT2</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar PM1</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar ZXC1</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar HA2</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar GG3</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar TT1</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar GH6</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                    <div className="catalog-item">
                        <div className="catalog-item__wrapper">
                            <div className="catalog-item__content catalog-item__content_active">
                                <img src={puls} alt="pulsometr" className="catalog-item__img" />
                                <div className="catalog-item__subtitle">Пульсометр Polar OMG3</div>
                                <div className="catalog-item__descr">Для перших кроків у тренуваннях, заснованих на серцевому ритмі</div>
                                <a href="" className="catalog-item__link">ДЕТАЛЬНІШЕ</a>
                            </div>
                            <ul className="catalog-item__list">
                                <li>Ви почуєте звукове сповіщення про потрібний пульс під час тренування;</li>
                                <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                                <li>Також Ви побачите інформацію про витрати калорій за тренування;</li>
                                <li>Ви зможете переглянути дані з 10 тренувань.</li>
                                <a href='#' className='catalog-item__back'>назад</a>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="catalog-item__footer">
                            <div className="catalog-item__prices">
                                <div className="catalog-item__old-price">4 750 грн.</div>
                                <div className="catalog-item__price">4 500 грн.</div>
                            </div>
                            <button className="button button_mini">ПРИДБАТИ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;