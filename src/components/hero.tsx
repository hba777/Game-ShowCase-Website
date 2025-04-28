import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const nextImageRef = useRef<HTMLImageElement>(null);

  const totalImages = 4;
  const upcomingImageIndex = (currentIndex % totalImages) + 1;

  const handleMiniImageClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingImageIndex);
  };

  const getImageSrc = (i: number) => `/videos/animations/hero-${i}.gif`;

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages - 1) setIsLoading(false);
  }, [loadedImages]);

  useGSAP(() => {
    if (hasClicked) {
      gsap.set("#next-image", { visibility: "visible" });

      gsap.to("#next-image", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from("#current-image", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });

  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Mini clickable image */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniImageClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <img
                ref={nextImageRef}
                src={getImageSrc(upcomingImageIndex)}
                id="current-image"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoad={handleImageLoad}
                alt="Current GIF"
              />
            </div>
          </div>

          {/* Image that appears after click */}
          <img
            ref={nextImageRef}
            src={getImageSrc(currentIndex)}
            id="next-image"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoad={handleImageLoad}
            alt="Next GIF"
          />

          {/* Main full background image */}
          <img
            src={getImageSrc(
              currentIndex === totalImages - 1 ? 1 : currentIndex
            )}
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoad={handleImageLoad}
            alt="Main background GIF"
          />
        </div>

        {/* Text overlays */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </section>
  );
};
