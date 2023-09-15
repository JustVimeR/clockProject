import './carousel.scss';
import slide1 from '../../public/images/slide1.png';
import slide2 from '../../public/images/slide2.png';
import slide3 from '../../public/images/slide3.png';
import $ from 'jquery';
import React from 'react';

const Carousel = () => {

    $(document).ready(function () {
        $('.carousel__inner').slick({
            speed: 1200,
            adaptiveHeight: false,
            prevArrow: '<button type="button" class="slick-prev"><img src="../../public/images/left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../../public/images/right.svg"></button>'
        });
    });

    return (
        <section className="carousel">
            <div className="container">
                <div className='carousel__inner'>
                    <div>
                        <img src={slide1} alt="1" />
                    </div>
                    <div>
                        <img src={slide2} alt="2" />
                    </div>
                    <div>
                        <img src={slide3} alt="3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel;