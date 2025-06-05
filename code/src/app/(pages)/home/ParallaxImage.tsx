'use client';
import React, { useRef, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor;

const ParallaxImage = ({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size?: boolean;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const targetTranslateY = useRef(0);
  const currentTranslateY = useRef<number>(0);
  const bounds = useRef<number>(null);
  const raf = useRef<number>(null);

  useEffect(() => {
    function updateBounds(top: number) {
      bounds.current = window.scrollY + top;
    }

    let rect = imageRef?.current?.getBoundingClientRect();

    updateBounds(rect?.top as number);

    window.addEventListener('resize', () => {
      rect = imageRef?.current?.getBoundingClientRect();
      updateBounds(rect?.top as number);
    });

    function animate() {
      if (!imageRef.current) return;
      currentTranslateY.current = lerp(
        currentTranslateY.current,
        targetTranslateY.current,
        0.2,
      );
      if (
        Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.3
      ) {
        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.5)`;
      }
      raf.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf.current as number);
      window.removeEventListener('resize', () =>
        updateBounds(rect?.top as number),
      );
    };
  }, []);

  useLenis(({ scroll }) => {
    const relativeScroll = scroll - (bounds.current as number);
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img
      className={`${size && 'size-full object-cover'}`}
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: 'transform',
        transform: 'translateY(0) scale(1.5)',
      }}
    />
  );
};

export default ParallaxImage;
