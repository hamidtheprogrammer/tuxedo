'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { ReactNode, useRef } from 'react';

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dx = useRef<number>(0);
  const dy = useRef<number>(0);
  const translateX = useRef<number>(0);
  const translateY = useRef<number>(0);

  useGSAP(() => {
    const button = buttonRef.current;
    // const child = button?.firstChild;
    if (!button) return;

    function handleHover(e: MouseEvent) {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      dx.current = e.clientX - centerX;
      dy.current = e.clientY - centerY;

      const offset = Math.sqrt(
        dx.current * dx.current + dy.current * dy.current,
      );

      let angle = Math.atan2(dy.current, dx.current);

      const maxDistance = Math.hypot(dx.current, dy.current);

      translateX.current = Math.cos(angle) * Math.min(maxDistance, 20);
      translateY.current = Math.sin(angle) * Math.min(maxDistance, 20);
      button.style.transform = `translateX(${translateX.current}px) translateY(${translateY.current}px)`;
      console.log(translateX.current);
      //   console.log(translateY.current);
    }

    function handleLeave() {
      gsap.to(button, {
        y: 0,
        x: 0,
        duration: 0.5,
        ease: 'bounce',
      });

      translateX.current = 0;
      translateY.current = 0;
    }

    button.addEventListener('mousemove', handleHover);

    button.addEventListener('mouseleave', handleLeave);

    return () => {
      button.removeEventListener('mousemove', handleHover);

      button.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={
        className +
        ' ' +
        'bg-grow font-poppins relative cursor-pointer overflow-hidden border border-white/30 transition-transform duration-500 hover:scale-105 hover:border-0'
      }
    >
      {children}
    </button>
  );
};

export default Button;
