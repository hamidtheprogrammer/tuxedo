import ParallaxEl from '@/app/components/ParallaxEl';
import React from 'react';
import ParallaxImage from './ParallaxImage';

const reviews = [
  {
    name: 'John doe',
    review: 'They make the best quality suits at affordable prices',
    rating: '5.0',
    date: '2024-03-14',
  },
  {
    name: 'John doe',
    review: 'They make the best quality suits at affordable prices',
    rating: '5.0',
    date: '2024-03-14',
  },
  {
    name: 'John doe',
    review: 'They make the best quality suits at affordable prices',
    rating: '5.0',
    date: '2024-03-14',
  },
];

const Testimonies = () => {
  return (
    <section className="my-30 p-2 max-sm:my-20">
      <div className="mb-10 flex items-center justify-between max-sm:flex-col max-sm:gap-5 max-sm:text-center">
        <h1 className="font-poppins max-w-[500px] text-5xl tracking-wider uppercase max-sm:max-w-[450px] max-sm:text-2xl md:leading-[4.5rem]">
          What They’re Saying in Our Suits
        </h1>
        <p className="font-poppins max-w-[350px] text-xl font-light text-balance text-black/60 max-sm:max-w-[450px] max-sm:text-sm">
          From first fittings to lasting impressions — here’s how real people
          feel in their tailored pieces.
        </p>
      </div>
      <div className="overlay relative h-[100dvh] overflow-hidden">
        <ParallaxImage
          src="https://images.pexels.com/photos/10679198/pexels-photo-10679198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="model"
          size
        />
      </div>
    </section>
  );
};

export default Testimonies;
