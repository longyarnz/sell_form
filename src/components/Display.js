import React, { useEffect, useRef } from 'react';
import Image from '../files/iphone.jpg';

export default function Display(props) {
  const pictureElement = useRef();

  useEffect(() => {
    const minHeight = pictureElement.current.clientHeight;
    props.setMinHeight(minHeight);
  }, []);

  return (
    <picture ref={pictureElement}>
      <header>
        <h4>Sell Your</h4>
        <h3>iPhone XR</h3>
      </header>
      <img src={Image} alt="iPhone"/>
    </picture>
  )
}
