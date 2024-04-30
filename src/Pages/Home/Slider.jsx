import { useEffect, useState } from "react";
import { Roll } from "react-awesome-reveal";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://source.unsplash.com/1200x540/?nature",
      title: "Nature",
      des: "Journey With us and make deep relation with nature",
    },
    {
      img: "https://source.unsplash.com/1200x540/?hill",
      title: "hill",
      des: "Embark on a journey through the hills and forge profound connections with nature",
    },
    {
      img: "https://source.unsplash.com/1200x540/?mountain",
      title: "mountain",
      des: "Embark on a mountainous journey and cultivate deep connections with nature's grandeur.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?river",
      title: "river",
      des: "Embark on a river journey and weave profound connections with the flowing essence of nature.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?sea",
      title: "sea",
      des: "Embark on a sea voyage and cultivate deep connections with the vast expanse of nature's embrace.",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      <div
        className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
       <Roll> <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div></Roll>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
};
