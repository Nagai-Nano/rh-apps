import React, { useState, useEffect, useRef } from 'react';
import { FrownOutlined } from '@ant-design/icons';

import { ImageContainer, ImageLoading, ImageError } from './Styles';

function ImageLoader({ src, alt, onImageClick }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = onImageLoad;
    img.onerror = onImageError;
    // eslint-disable-next-line
  }, [src]);

  const onImageLoad = () => {
    if (imageRef && imageRef.current) {
      imageRef.current.src = src;
      setError(false);
      setLoading(false);
    }
  };

  const onImageError = () => {
    setError(true);
    setLoading(false);
  };

  const handleClick = (event) => {
    onImageClick(event);
  };

  return (
    <ImageContainer
      className={!loading && !error && 'hoverable clickable'}
      onClick={!loading && !error && onImageClick ? handleClick : undefined}
    >
      {loading && <ImageLoading />}
      {error && (
        <ImageError>
          <FrownOutlined />
          <p>Failed to load this image</p>
        </ImageError>
      )}
      <img ref={imageRef} alt={alt} />
    </ImageContainer>
  );
}

export default ImageLoader;
