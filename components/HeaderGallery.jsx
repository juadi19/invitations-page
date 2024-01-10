"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/index.css";

export const HeaderGallery = () => {
  return (
    <>
      <Carousel
        autoPlay
        interval={3500}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1703578943/pexels-emma-bauso-2253870_mvb6kj.jpg"
            alt="Imagen 1"
            className="header-image-1"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1703578104/pexels-pavel-danilyuk-7221139_wh9ms4.jpg"
            alt="Imagen 2"
            className="header-image "
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704142874/invitationspage/p11_wifqb5.jpg"
            alt="Imagen 3"
            className="header-image"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704142845/invitationspage/p8_is1rno.jpg"
            alt="Imagen 4"
            className="header-image"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704142898/invitationspage/p12_xzbggg.jpg"
            alt="Imagen 5"
            className="header-image"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704142850/invitationspage/p10_qggvsq.jpg"
            alt="Imagen 6"
            className="header-image"
          />
        </div>
      </Carousel>
    </>
  );
};

export default HeaderGallery;
