'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const stickyCards = [
  {
    image:
      'https://images.unsplash.com/photo-1579618218290-24a26f63a738?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual path
    title: 'Best Aesthetic',
    description: 'Style isn’t just worn — it’s embodied.',
  },
  {
    image:
      'https://images.pexels.com/photos/4427642/pexels-photo-4427642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hand-Stitched Precision',
    description: 'Every seam, sewn with intention.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Curated Fabrics',
    description: 'Materials that speak before you do.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580656940647-8854a00547f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tailored Identity',
    description: 'Because fit is more than measurement.',
  },
];

const Service = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, idx) => {
      if (idx === cardRefs.current.length - 1) return;
      gsap.to(card, {
        scale: 0.5,
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section className="font-poppins text-loader relative mt-20">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center text-center uppercase">
        <h1>We bring you</h1>
        <h1>modern elegance</h1>
      </div>
      <div ref={containerRef}>
        {stickyCards.map((card, idx) => (
          <div className="sticky top-0 flex h-[100dvh] items-center justify-center">
            <div
              ref={(el) => {
                cardRefs.current[idx] = el as HTMLDivElement;
              }}
              className={`aspect-video w-[80vw] max-w-[600px]`}
            >
              <img
                src={card.image}
                alt=""
                className="h-[90%] w-full object-cover grayscale"
              />
              <div className="bg-white text-start text-xs">
                <h1 className="font-bold uppercase">{card.title}</h1>
                <p className="font-medium text-black/70">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
