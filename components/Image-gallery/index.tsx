"use client";

import { Image } from "antd";

const ImageGallery = () => {
    const imgNames = [
        "foods.png",
        "sexan.jpg",
        "kenac.jpg",
        "aperol.jpg",
        "sexanner.jpg",
        "coffe.jpg",
        "hayat.jpg",
        "kenac-2.jpg",
      ];
    
     
  return (
    <>
      <Image.PreviewGroup>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 pb-0 md:p-2 md:pb-0">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/coffe.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/foods.png"
              />
              <div className="hidden lg:block w-full py-4 text-center text-white text-xl mt-2 rounded-lg bg-orange-600">
                    Ost Food & Wine
              </div>
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/kenac.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 pb-0 md:p-2 md:pb-0">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/sexanner.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/hayat.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/aperol.jpg"
              />
            </div>
          </div>
        </div>
      </Image.PreviewGroup>
    </>
  );
};

export default ImageGallery;
