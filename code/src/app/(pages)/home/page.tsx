'use client';
import React from 'react';
import Hero from './Hero';
import Loader from './Loader';
import { ReactLenis } from '@studio-freight/react-lenis';
import About from './About';
import Product from './Product';
import Story from './Story';
import Testimonies from './Testimonies';
import Service from './Service';
import Footer from './Footer';

const Page = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 0.8,
      }}
      className="w-full"
    >
      <Hero />
      <Loader />
      <About />
      <hr className="mx-auto w-[95%] pt-20 text-black/20" />
      <Product />
      <Story />
      <Testimonies />
      <Service />
      <Footer />
    </ReactLenis>
  );
};

export default Page;
