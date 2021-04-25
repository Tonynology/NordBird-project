import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
    const [showImageZoom, setShowImageZoom] = useState(false);

    const onZoom = useCallback(() => {  //이미지를 확대해서 볼수 있도록. (케루셀)
        setShowImageZoom(true);
    }, []);
    // postcard.js에서 이미지 0일땐 props가 오지 않도록 설정함. 
    if (images.length === 1) {
        return (
            <div>
                {/* //role="presentation" 는 이미지 reader한테 누를 필요 없는 기능들을 알려줌. */}
                <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} /> 
                {showImageZoom && <ImagesZoom images={images} onClose={onClise} />}
            </div>
        );
    }
    if (images.length === 2) {
        return (
            <div>
                {/* //role="presentation" 는 이미지 reader한테 누를 필요 없는 기능들을 알려줌.  각 이미지 width를 절반씩.*/}
                <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} width="50%" onClick={onZoom} />
                <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[1].src} width="50%" onClick={onZoom} />
                {showImageZoom && <ImagesZoom image={images} onClose={onClise} />}
            </div>
        );
    }
    return (
        <div>
            <div>
                <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} /> 
                <div
                    role="presentation"
                    src={`http://localhost:3065/${images[0].src}`}
                    style={{ display: 'inline-block', width: '50%', textAlign:'center', verticalAlign:'middle'}}
                    onClick={onZoom}
                >
                    <PlusOutlined />
                    <br />
                    {images.length - 1}
                    show personal image
                </div>
            </div>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
        </div>
    )
};

PostImages.propTypes = {
    images: propTypes.arrayOf(propTypes.object),
}

export default PostImages;