import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide2A from "@/assets/slide2-a.svg";
import slide2B from "@/assets/slide2-b.svg";
import slide2C from "@/assets/slide2-c.svg";
import slide2D from "@/assets/slide2-d.svg";
import slide2E from "@/assets/slide2-e.svg";
import slide3A from "@/assets/slide3-a.svg";
import slide3B from "@/assets/slide3-b.svg";
import slide3C from "@/assets/slide3-c.svg";
import slide3D from "@/assets/slide3-d.svg";

export default function Features() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      text: (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl font-semibold mb-2 text-center">
            Dupin AI handles your customer's questions
          </h2>
          <img src={slide2A.src} alt="Image 1" className="mx-auto mt-16" />
        </div>
      ),
    },
    {
      text: (
        <div className="flex flex-col items-center">
          <div className="w-3/2">
            <h2 className="text-3xl font-semibold mb-2 ">
              Dupin integrates your favourites management tools
            </h2>
          </div>
          <div className="w-1/2 mt-16">
            <div className="flex flex-col ">
              <div className="flex gap-4 ">
                <img
                  className="mx-auto object-contain h-80"
                  src={slide2A.src}
                  alt="Slide 2A"
                />
                <div className="flex items-center ">
                  <img
                    className="mx-auto object-contain h-16"
                    src={slide2E.src}
                    alt="Slide 2E"
                  />
                </div>

                <div className="flex flex-col justify-center gap-8 ml-6">
                  <div className="h-20 bg-gray-900 px-2 py-4 rounded-lg">
                    <img
                      className="mx-auto h-full object-contain"
                      src={slide2B.src}
                      alt="Slide 2B"
                    />
                  </div>
                  <div className="h-20 bg-gray-900 px-2 py-4 rounded-lg">
                    <img
                      className="mx-auto h-full object-contain"
                      src={slide2C.src}
                      alt="Slide 2C"
                    />
                  </div>
                  <div className="h-20 bg-gray-900 px-2 py-4 rounded-lg">
                    <img
                      className="mx-auto h-full object-contain"
                      src={slide2D.src}
                      alt="Slide 2D"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      text: (
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Join Dupin in 4 simple steps
          </h2>
          <div className="mt-4 scale-90">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-gray-900 rounded-xl md:flex items-center">
                <img
                  className="w-80 my-4  "
                  src={slide3A.src}
                  alt="Slide 3A"
                />
                <p className="text-white font-bold md:text-xl md:text-left p-4">
                  1. Sign up.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl md:flex md:items-center">
                <img
                  className="w-80 my-4  md:ml-4"
                  src={slide3B.src}
                  alt="Slide 3B"
                />
                <p className="text-white font-bold md:text-xl md:text-left p-4">
                  2. Connect your channels.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl md:flex items-center">
                <img
                  className="w-80 my-4"
                  src={slide3C.src}
                  alt="Slide 3C"
                />
                <p className="text-white font-bold md:text-xl md:text-left  p-4">
                  3. Invite your team.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl md:flex md:items-center">
                <img
                  className="w-80 my-4 md:ml-4 mb-4"
                  src={slide3D.src}
                  alt="Slide 3D"
                />
                <p className="text-white font-bold md:text-xl md:text-left  p-4">
                  4. Enjoy Dupin!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const customStyles = `
  
  .slick-dots li button {
    width: 20px; 
    height: 20px; 
  }
  .slick-dots li.slick-active button {
    background: #111827;
    border-radius: 20%;
  }

  .slick-prev:before,
    .slick-next:before {
      color: #111827;
      font-size: 32px; 
    }

    .slick-prev {
      left: -40px; 
    }
    .slick-next {
      right: -30px;
`;
  return (
    <div id="features" className="py-20 bg-gray-100 pb-8 min-h-screen">
      <style>{customStyles}</style>

      <div className="container mx-auto px-4 max-w-6xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center">
              {slide.text}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
