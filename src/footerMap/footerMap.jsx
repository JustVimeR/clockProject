import './footerMap.scss';
import React from "react";
import facebook from '../../public/images/facebook.svg';
import instagram from '../../public/images/instagram.svg';
import pinterest from '../../public/images/pinterest.svg';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FooterMap = () => {
    const defaultProps = {
        center: {
            lat: 50.38346905167663,
            lng: 30.47090440264197
        },
        zoom: 11
    };

    return (
        <footer className='footer'>
            <div style={{ height: '46vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >

                    <AnyReactComponent
                        lat={50.38346905167663}
                        lng={30.47090440264197}
                        text="Taras Shevchenko University"
                    />
                </GoogleMapReact>
            </div>

            <div className="footer__info">
                <address className='footer__addr'>Taras Shevchenko National University of Kyiv</address>
                <a className="footer__phone" href='tel:380981196618'>+380 (98) 119-66-18</a>
                <div className="footer__social">
                    <a href="#" className="footer__social-item">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#" className="footer__social-item">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="#" className="footer__social-item">
                        <img src={pinterest} alt="pinterest" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default FooterMap;