"use client"

import React from 'react';
import { Galleria } from 'primereact/galleria';
import "../components/styling/ImageCarousel.css"


const images = [
  {
    itemImageSrc: "/images/contact-image.jpeg",
    title: 'Welcome to BitCloud Solutions!',
    alt: 'Image 1',
  },
  {
    itemImageSrc: "/images/web-developer.jpg",
    title: 'Welcome to BitCloud Solutions!',
    alt: 'Image 2'
  },
  {
    itemImageSrc: "/images/image1.jpg",
    title: 'Welcome to BitCloud Solutions!',
    alt: 'Image 3'
  }
];

const itemTemplate = (item) => {
  return (
    <div className="image-container" style={{ width: '100%', textAlign: 'center' }}>
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />

      <div key={`${item.itemImageSrc}-heading`} className="carousel-text-heading">
        {item.title}
      </div>
      <div key={`${item.itemImageSrc}-paragraph`} className="carousel-text-paragraph">
       We Provide all Zoho services like Zoho CRM, Zoho Books, Zoho Projects and many more!!!
      </div>
    </div>
  );
}

export const ImageCarousel = () => {
  return (
    <div className="card" style={{ width: '100%', height: '100%', margin: '0 auto', position: "relative" }}>
      <Galleria
        value={images}
        numVisible={5}
        circular
        responsiveOptions={[
          {
            breakpoint: '1024px',
            numVisible: 3
          },
          {
            breakpoint: '768px',
            numVisible: 2
          },
          {
            breakpoint: '560px',
            numVisible: 1
          }
        ]}
        showThumbnails={false}
        showIndicators
        // showItemNavigators
        item={itemTemplate}
        autoPlay={true}
        transitionOptions={{ easing: 'ease-in-out', duration: 1000 }}
      />
    </div>
  );
}