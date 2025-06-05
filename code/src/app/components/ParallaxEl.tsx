'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor;

const ParallaxEl = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const raf = useRef<number>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const elPos = useRef(0);
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rect = el.current?.getBoundingClientRect();

    elPos.current = rect?.top as number;

    function updateElPos() {
      rect = el.current?.getBoundingClientRect();
      elPos.current = (rect?.top as number) + window.scrollY;
    }

    window.addEventListener('resize', updateElPos);

    function animate() {
      if (!el.current) return;
      currentTranslateY.current = lerp(
        currentTranslateY.current,
        targetTranslateY.current,
        0.2,
      );
      if (
        Math.abs(targetTranslateY.current - currentTranslateY.current) > 0.3
      ) {
        el.current.style.transform = `translateY(${currentTranslateY.current}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', updateElPos);

      cancelAnimationFrame(raf.current as number);
    };
  }, []);

  useLenis(({ scroll }) => {
    let relativeScroll = scroll - elPos.current;
    targetTranslateY.current = -relativeScroll * 0.2;
  });
  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
};

export default ParallaxEl;
