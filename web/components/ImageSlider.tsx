import React, { useEffect, useState } from "react";
import Image from "next/image";
import { defaultImg, urlFor } from "../utils/global";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";

interface IProps {
  images?: { img?: string, title?: string }[];
}

const ImageSlider = ({ images }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images?.length)
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images?.length as number - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images?.length as number - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % Number(images?.length));
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="">
      <div className="relative flex justify-center items-center px-20">
        {images && images.map((item, index) => {
          return (
            <div
              className={`${index === currentIndex
                ? `transition-all ease-in duration-500 transform scale-105 opacity-100 relative`
                : `transition duration-500 transform opacity-0`
                }`}
            >
              {index === currentIndex && (
                <Image
                  key={index}
                  className="max-h-96 object-cover"
                  width={2000}
                  height={2000}
                  src={urlFor(item?.img).url() || defaultImg()}
                  alt="slider-img"
                />
              )}
              <div className="absolute  bottom-0 w-full h-full flex justify-center items-end pb-10 shadow-lg text-drop-shadow-2xl text-transparent hover:text-white  h-full capitalize text-5xl text-center hover:bg-cardOverlay bg-blend-multiply drop-shadow-2xl">
                {item?.title}
              </div>
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
    </div>
  );
};

export default ImageSlider;
