import React, { useState } from "react";
import Image from "next/image";
import { defaultImg, urlFor } from "../utils/global";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";

interface IProps {
  images: string[];
}

const ImageSlider = ({ images }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const size = 500;

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      {images.map((item, index) => {
        return (
          <div
            className={`${
              index === currentIndex
                ? `transition-all ease-in duration-500 transform scale-105 opacity-100`
                : `transition duration-500 transform opacity-0`
            }`}
          >
            {index === currentIndex && (
              <Image
                key={index}
                className="max-h-96 object-cover"
                width={2000}
                height={2000}
                src={urlFor(item).url() || defaultImg()}
                alt="slider-img"
              />
            )}
          </div>
        );
      })}
      <button
        className="absolute left-0 text-2xl h-1/2 bg-black opacity-20 text-white  px-4 rounded"
        onClick={handlePrevClick}
      >
        <IoChevronBackCircle />
      </button>
      <button
        className="absolute right-0 text-2xl h-1/2 bg-black opacity-20 text-white  px-4 rounded"
        onClick={handleNextClick}
      >
        <IoChevronForwardCircle />
      </button>
    </div>
  );
};

export default ImageSlider;
