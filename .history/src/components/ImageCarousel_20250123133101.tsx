// "use client"

// import React from 'react';
// import { Galleria } from 'primereact/galleria';
// import "../components/styling/ImageCarousel.css"


// const images = [
//   {
//     itemImageSrc: "/images/responsive web image.png",
//     title: 'Welcome to BitCloud Solutions!',
//     alt: 'Image 1',
//   },
//   {
//     itemImageSrc: "/images/web-developer.jpg",
//     title: 'Welcome to BitCloud Solutions!',
//     alt: 'Image 2'
//   },
//   {
//     itemImageSrc: "/images/p1.avif",
//     title: 'Welcome to BitCloud Solutions!',
//     alt: 'Image 3'
//   }
// ];

// const itemTemplate = (item) => {
//   return (
//     <div className="image-container" style={{ width: '100%', textAlign: 'center' }}>
//       <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />

//       <div key={`${item.itemImageSrc}-heading`} className="carousel-text-heading">
//         {item.title}
//       </div>
//       <div key={`${item.itemImageSrc}-paragraph`} className="carousel-text-paragraph">
//        We Provide all Zoho services like Zoho CRM, Zoho Books, Zoho Projects and many more!!!
//       </div>
//     </div>
//   );
// }

// export const ImageCarousel = () => {
//   return (
//     <div className="card" style={{ width: '100%', height: '100%', margin: '0 auto', position: "relative" }}>
//       <Galleria
//         value={images}
//         numVisible={5}
//         circular
//         responsiveOptions={[
//           {
//             breakpoint: '1024px',
//             numVisible: 3
//           },
//           {
//             breakpoint: '768px',
//             numVisible: 2
//           },
//           {
//             breakpoint: '560px',
//             numVisible: 1
//           }
//         ]}
//         showThumbnails={false}
//         showIndicators
//         // showItemNavigators
//         item={itemTemplate}
//         autoPlay={true}
//         transitionOptions={{ easing: 'ease-in-out', duration: 1000 }}
//       />
//     </div>
//   );
// }



"use client";

import React from "react";
import { Galleria } from "primereact/galleria";
import "../components/styling/ImageCarousel.css";

const images = [
  {
    itemImageSrc: "/images/responsive web image.png",
    title: "Welcome to BitCloud Solutions!",
    alt: "Image 1",
  },
  {
    itemImageSrc: "/images/web-developer.jpg",
    title: "Welcome to BitCloud Solutions!",
    alt: "Image 2",
  },
  {
    itemImageSrc: "/images/p1.avif",
    title: "Welcome to BitCloud Solutions!",
    alt: "Image 3",
  },
];

const itemTemplate = (item) => {
  return (
    <div
      className="image-container"
      style={{
        width: "100%",
        textAlign: "center",
        position: "relative", // Added to allow positioning of inset shadow (Line 21)
      }}
    >
      {/* Added a wrapper div to apply inset shadow */}
      <div
        style={{
          position: "absolute", // Ensure the shadow overlays the image (Line 25)
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: "inset 0 0 50px rgba(0, 0, 255, 0.6)", // Blue inset shadow effect (Line 29)
          zIndex: 1, // Ensures shadow stays above the image (Line 30)
        }}
      ></div>
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{
          width: "100%",
          display: "block",
          position: "relative", // Prevents the shadow from affecting image positioning (Line 36)
          zIndex: 0, // Places image beneath shadow (Line 37)
        }}
      />
      <div
        key={`${item.itemImageSrc}-heading`}
        className="carousel-text-heading"
      >
        {item.title}
      </div>
      <div
        key={`${item.itemImageSrc}-paragraph`}
        className="carousel-text-paragraph"
      >
        We Provide all Zoho services like Zoho CRM, Zoho Books, Zoho Projects
        and many more!!!
      </div>
    </div>
  );
};

export const ImageCarousel = () => {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Galleria
        value={images}
        numVisible={5}
        circular
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 3,
          },
          {
            breakpoint: "768px",
            numVisible: 2,
          },
          {
            breakpoint: "560px",
            numVisible: 1,
          },
        ]}
        showThumbnails={false}
        showIndicators
        // showItemNavigators
        item={itemTemplate}
        autoPlay={true}
        transitionOptions={{ easing: "ease-in-out", duration: 1000 }}
      />
    </div>
  );
};
