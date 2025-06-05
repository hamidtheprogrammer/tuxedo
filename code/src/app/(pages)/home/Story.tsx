'use client';
import React, { useRef } from 'react';
import ParallaxImage from './ParallaxImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(videoRef.current, {
      scale: 0.9,
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top bottom',
        end: 'top 20%',
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="mt-30 max-md:mt-10">
      <div className="text-9xl text-nowrap max-md:text-7xl max-sm:text-5xl">
        SINCE 1994 - SINCE 1994 - SINCE 1994 - SINCE 1994
      </div>
      <div className="relative mt-30 h-[calc(100vh+300px)] w-full bg-gray-100 p-2 max-md:mt-10">
        <div ref={videoRef} className="size-full overflow-hidden rounded-xl">
          <video
            src="https://videos.pexels.com/video-files/4621999/4621999-uhd_2732_1440_25fps.mp4"
            autoPlay
            loop
            muted
            className="size-full object-cover"
          />
        </div>
        <div className="absolute bottom-10 h-fit w-[90%] rounded-lg bg-gray-100 p-3 max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-10 sm:max-w-[500px]">
          <div className="h-[40dvh] max-h-[300px] w-full overflow-hidden rounded-lg">
            <ParallaxImage
              src="https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="men in suits"
              size
            />
          </div>
          <div className="mt-6 space-y-4">
            <h1 className="font-poppins text-2xl font-medium">
              Crafted by Hand, Defined by Detail
            </h1>
            <p className="font-poppins font-lighter text-sm tracking-widest text-black/70">
              Every suit begins at the stitch — not the sketch. From
              hand-selected fabrics to hand-stitched linings, our pieces are
              shaped by artisans who treat tailoring as an art. The result? A
              silhouette that moves with intention, built to last, and designed
              to speak before you do. This is craftsmanship made wearable.
            </p>
            <button className="font-poppins cursor-pointer rounded-full border border-black/10 px-5 py-3 text-xs tracking-widest text-black/70 uppercase transition-all duration-500 hover:scale-90">
              Wear the Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
