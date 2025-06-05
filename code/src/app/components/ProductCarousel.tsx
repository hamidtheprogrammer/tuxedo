'use client';
import React, { useEffect } from 'react';
import { useRef } from 'react';

export interface IProducts {
  name: string;
  image: string;
  description: string;
  price: number;
}

const ProductCarousel = ({
  heading,
  products,
  pos,
}: {
  heading: string;
  products: IProducts[];
  pos?: string;
}) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  let isGrabbing = useRef(false);
  let clientPos = useRef(0);
  let offset = useRef(0);
  let translateValue = useRef(0);
  let rafId = useRef<number>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;
    if (!slider || !sliderContainer) return;

    function handleMouseDown(e: MouseEvent) {
      if (!slider || !sliderContainer) return;
      sliderContainer.style.cursor = 'grabbing';
      isGrabbing.current = true;
      slider.style.transition = `none`;
      clientPos.current = e.clientX - sliderContainer.offsetLeft;
      offset.current =
        e.clientX - sliderContainer.offsetLeft - translateValue.current;
      translateValue.current = clientPos.current - offset.current;
    }

    function handleMouseMove(e: MouseEvent) {
      if (!slider || !sliderContainer || !isGrabbing.current) return;
      clientPos.current = e.clientX - sliderContainer.offsetLeft;
      translateValue.current = clientPos.current - offset.current;
    }

    function handleMouseUp(e: MouseEvent) {
      if (!slider || !sliderContainer) return;
      sliderContainer.style.cursor = 'grab';
      isGrabbing.current = false;
      slider.style.transition = `transform 0.5s`;
      if (translateValue.current > 0) {
        translateValue.current = 0;
      } else if (
        slider.scrollWidth - translateValue.current <
        sliderContainer.clientWidth
      ) {
        translateValue.current =
          slider.scrollWidth - sliderContainer.clientWidth;
      }
    }

    sliderContainer.addEventListener('mousedown', handleMouseDown);

    sliderContainer.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', handleMouseUp);

    function moveSlider() {
      if (!slider) return;
      slider.style.transform = `translateX(${translateValue.current}px)`;

      rafId.current = requestAnimationFrame(moveSlider);
    }

    moveSlider();

    return () => {
      sliderContainer.removeEventListener('mousedown', handleMouseDown);

      sliderContainer.removeEventListener('mousemove', handleMouseMove);

      document.removeEventListener('mouseup', handleMouseUp);

      cancelAnimationFrame(rafId.current as number);
    };
  }, []);
  return (
    <div className={`w-full space-y-10 ${pos === 'LEFT' ? 'pl-10' : 'pr-10'} `}>
      <h1
        className={`${pos === 'RIGHT' && 'pl-10'} font-poppins text-3xl max-sm:text-xl`}
      >
        Browse {heading}
      </h1>
      <div
        ref={sliderContainerRef}
        className="product-carousel w-full cursor-grab"
      >
        <ul
          ref={sliderRef}
          className={`relative right-0 flex w-full ${pos === 'LEFT' ? '' : 'justify-end'} gap-4`}
        >
          {products?.map((product) => (
            <li
              className="flex h-[24rem] w-[16rem] flex-shrink-0 flex-col gap-3 overflow-hidden rounded-lg select-none"
              key={product.name}
            >
              <div className="h-[75%] w-full flex-1 bg-gray-100 object-cover">
                <img
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="flex-1 hover:cursor-pointer hover:underline">
                <h1 className="font-poppins flex-1 font-semibold">
                  {product.name}
                </h1>
                <p className="font-poppins text-sm font-medium text-black/50">
                  {product.description}
                </p>
                <p className="font-poppins pt-1 text-sm font-medium">
                  ${product.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCarousel;
