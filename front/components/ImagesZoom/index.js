import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';


import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>image details</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper></SlickWrapper>
            <div>
                <Slick 
                    initialSlide={0}
                    afterChange={(slide) => setCurrentSlide(slide)}
                    infinite
                    arrows={false}
                    slideToShow={1}
                    slidesToScroll={1}
                >
                    {images.map((v) => (
                        <ImgWrapper key={v.src}>
                            <img src={v.src} alt={v.src} />
                        </ImgWrapper>
                    ))}
                </Slick>
                <Indicator>
                    <div>
                        {currentSlide + 1}
                        {' '}
                        /
                        {images.length}
                    </div>
                </Indicator>
            </div>
        </Overlay>
    );
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;