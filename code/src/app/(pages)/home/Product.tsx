'use client';
import React from 'react';
import ParallaxImage from './ParallaxImage';
import ProductCarousel, { IProducts } from '@/app/components/ProductCarousel';

const productsW: IProducts[] = [
  {
    image: '/products/suits-womens1.png',
    name: 'Tuxedo Midnight Directive suit',
    description: 'Women’s slim-fit wool-silk blend street tuxedo',
    price: 114.99,
  },
  {
    image: '/products/suits-womens2.png',
    name: 'Tuxedo Noir Standard suit',
    description: 'Women’s Tailored-fit brushed cotton suit—soft-lined',
    price: 154.99,
  },
  {
    image: '/products/suits-womens3.png',
    name: 'Tuxedo Urban Houndsooth',
    description: 'Women’s Double-breasted herringbone wool suit',
    price: 214.99,
  },
  {
    image: '/products/suits-womens4.png',
    name: 'Tuxedo Function 44',
    description: 'Women’s Minimalist twill-wool hybrid tuxedo',
    price: 100.99,
  },
];

const products: IProducts[] = [
  // {
  //   image: '/products/suits-mens1.jpg',
  //   name: 'Tuxedo Midnight Directive suit',
  //   description: 'Men’s slim-fit wool-silk blend street tuxedo',
  //   price: 114.99,
  // },
  {
    image: '/products/suits-mens2.png',
    name: 'Tuxedo Noir Standard suit',
    description: 'Men’s Tailored-fit brushed cotton suit—soft-lined',
    price: 154.99,
  },
  {
    image: '/products/suits-mens3.png',
    name: 'Tuxedo Urban Houndsooth',
    description: 'Men’s Double-breasted herringbone wool suit',
    price: 214.99,
  },
  {
    image: '/products/suits-mens4.png',
    name: 'Tuxedo Function 44',
    description: 'Men’s Minimalist twill-wool hybrid tuxedo',
    price: 100.99,
  },
];

const Product = () => {
  return (
    <section>
      <div className="max-md:mb-146max-md:pb-0 pb-20 text-center text-5xl font-semibold max-sm:text-3xl">
        <h1 className="font-poppins">EXPLORE</h1>
        <h1 className="font-poppins">the collections</h1>
      </div>
      <div className="flex h-[calc(100dvh+2rem)] max-sm:h-[calc(100dvh)]">
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute top-0 left-0 size-full">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1594759845217-e9c99af2b6a4?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="model"
            />
            <p className="relative top-1/2 -translate-y-1/2 cursor-pointer text-center font-bold text-white underline hover:opacity-70 md:hidden">
              view mens
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center max-md:hidden md:max-w-1/2">
          <ProductCarousel
            heading="Men's Collection"
            products={products}
            pos="LEFT"
          />
        </div>
      </div>
      <div className="flex h-[calc(100dvh+2rem)] max-sm:h-[calc(100dvh)]">
        <div className="flex flex-1 items-center max-md:hidden md:max-w-1/2">
          <ProductCarousel
            heading="Women's Collection"
            products={productsW}
            pos="RIGHT"
          />
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute top-0 left-0 size-full">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1734314019865-6c1486b9c5f2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="model"
            />
          </div>
          <p className="relative top-1/2 mx-auto w-fit -translate-y-1/2 cursor-pointer font-bold text-white underline hover:opacity-70 md:hidden">
            view womens
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
