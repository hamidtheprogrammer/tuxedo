'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Button from '@/app/components/Button';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.to('.hero-video', {
      scale: 0.96,
      borderRadius: 10,
      scrollTrigger: {
        trigger: '.hero-video',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center gap-10">
      <video
        className="hero-video absolute size-full object-cover brightness-[0.9] contrast-[1.2] grayscale-[0.2] sepia-[0.4]"
        src="https://videos.pexels.com/video-files/10677458/10677458-sd_960_506_25fps.mp4"
        // autoPlay
        muted
        loop
      />
      <div className="hero-video absolute size-full overflow-hidden opacity-10">
        <video
          className="size-full object-cover"
          src="https://videos.pexels.com/video-files/4514642/4514642-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h1 className="text-primary font-poppins text-fluid relative z-10 mt-4 w-[80vw] max-w-[40rem] scale-y-90 text-center leading-20 font-semibold text-balance max-sm:leading-14">
        Wear the rhythm of the streets
      </h1>

      <Button className="z-10 rounded-full px-7 py-3">
        <p className="relative h-fit text-[0.7rem] font-light tracking-[0.14rem] text-white uppercase mix-blend-difference">
          ENTER THE WARDROBE
        </p>
      </Button>
    </div>
  );
};

export default Hero;
