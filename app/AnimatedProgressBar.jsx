'use client'
import React, { useEffect, useRef, useState } from 'react';

const AnimatedProgressBar = ({ level }) => {
  const [width, setWidth] = useState('0%');
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(`${level}%`);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={containerRef}
      className="w-full h-4 rounded-full bg-gray-700 overflow-hidden shadow-sm shadow-black"
    >
      <div
        className="h-4 rounded-full bg-blue-700 transition-all duration-1500 ease-out"
        style={{ width }}
      />
    </div>
  );
};

export default AnimatedProgressBar;
