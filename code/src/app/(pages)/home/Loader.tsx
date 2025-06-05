'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Loader = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to('#loader-1', {
      y: '-100%',
      ease: 'power1.inOut',
      duration: 0.5,
    })
      .from(
        '.load-text',
        {
          y: 100,
          //   ease: 'power1.inOut',
          autoAlpha: 0,
          stagger: 0.09,
          duration: 0.3,
        },
        '-=0.5',
      )
      .to('.load-text', {
        y: -100,
        //   ease: 'power1.inOut',
        autoAlpha: 0,
        stagger: 0.09,
        duration: 0.3,
      })
      .to('#loader-2', {
        y: '-100%',
        ease: 'power1.inOut',
        duration: 0.5,
      })
      .to('#loader-3', {
        opacity: 0,
        duration: 0.3,
      });
  }, []);

  const styles = `fixed top-0 left-0 z-20 h-[100dvh] w-[100dvw] `;

  return (
    <>
      <div
        id="loader-3"
        className={` ${styles} pointer-events-none bg-[#DCDCDC]`}
      ></div>
      <div
        id="loader-2"
        className={` ${styles} font-poppins text-loader flex items-center justify-center bg-[#EFEFEF]`}
      >
        <div className="h-fit overflow-y-hidden uppercase">
          <p className="flex items-center uppercase">
            <p className="load-text">L</p>
            <p className="load-text">o</p>
            <p className="load-text">ad</p>
            <p className="load-text">in</p>
            <p className="load-text">g</p>
          </p>
        </div>
      </div>
      <div id="loader-1" className={` ${styles} bg-[#DCDCDC]`}></div>
    </>
  );
};

export default Loader;
