'use client';
import React, { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const splitText = new SplitText(textRef.current, { type: 'words' });
    gsap.from(splitText.words, {
      filter: 'blur(10px)',
      stagger: 0.5,
      scrollTrigger: {
        trigger: splitText.words,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="space-y-20 px-6 py-20">
      <h1 className="font-poppins max-xs:text-2xl flex flex-col text-6xl leading-[4.8rem] max-sm:text-4xl max-sm:leading-[3.5rem] md:max-w-[90%] lg:text-7xl">
        <h1 className="text-center">We are the bold,</h1>
        <h1 ref={textRef}>
          the refined, the ones who never settle for ordinary silhouettes.
        </h1>
      </h1>

      <aside className="flex max-w-[90%] justify-end">
        <p className="font-poppins max-w-[20rem] text-xs text-balance uppercase">
          Since 1994, we’ve been crafting more than just garments — we’ve been
          shaping moments, identities, and statements. Our pieces fuse timeless
          design with forward-thinking detail, giving voice to those who move
          with intention. From underground cuts to modern icons, every stitch
          reflects a commitment to authenticity and self-expression. We don’t
          follow trends — we set pace.
        </p>
      </aside>
    </section>
  );
};

export default About;
