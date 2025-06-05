'use client';
import React, { useRef, useState } from 'react';
import { UserIcon, Heart, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerBg = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerBg.current,
        start: 'top top',
        end: '+=500px',
        scrub: true,
      },
    });
    timeline.from(
      headerBg.current,
      {
        height: 0,
      },
      0,
    );

    timeline.to(
      '.icon',
      {
        color: 'black',
      },
      0,
    );

    timeline.to(
      '.menu',
      {
        backgroundColor: 'black',
      },
      0,
    );
    timeline.to(
      '#header',
      {
        width: '90%',
      },
      0,
    );
  }, []);

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <header
      id="header"
      className="text-primary fixed left-1/2 z-[99] flex h-16 w-full -translate-x-1/2 items-center justify-between px-5"
    >
      <div
        ref={headerBg}
        className="absolute top-0 left-0 size-full bg-white"
      ></div>
      <div
        onClick={() => setIsNavOpen((prev) => !prev)}
        className={`relative z-[99] flex aspect-square h-20 cursor-pointer flex-col items-center justify-center`}
      >
        <div
          className={`menu absolute h-[2px] w-8 bg-white max-sm:w-6 ${
            isNavOpen ? 'rotate-[225deg]' : '-translate-y-1 sm:-translate-y-2'
          } transition-transform duration-700`}
        ></div>
        <div
          className={`menu absolute h-[2px] w-8 bg-white max-sm:w-6 ${
            isNavOpen ? '-rotate-[225deg]' : 'translate-y-1 sm:translate-y-2'
          } transition-transform duration-700`}
        ></div>
      </div>
      <h1 className="font-poppins icon z-10 text-2xl font-bold">TUXEDO</h1>
      <div className="font-poppins z-10 flex gap-6 text-xs tracking-widest">
        <UserIcon className="icon cursor-pointer hover:opacity-70" />
        <Heart className="icon cursor-pointer hover:opacity-70" />
        <ShoppingBag className="icon cursor-pointer hover:opacity-70" />
      </div>
    </header>
  );
};

export default Header;
