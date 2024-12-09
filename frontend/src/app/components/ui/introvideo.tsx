import React, { useState, useEffect } from 'react';

export const Introvideo = () => {
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const Point = windowHeight * 0.9; 

      if (scrollPosition <= Point) {
        const calculatedPadding = Math.min((scrollPosition / Point) * 24, 24);
        setPadding(calculatedPadding);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <video
        src="/assets/mainwallpaper.mp4"
        autoPlay
        muted
        loop
        style={{
          padding: `${padding}px`,
          transition: 'padding',
          borderRadius: '1.5rem',
        }}
        className="absolute inset-0 object-cover w-full h-full z-0 brightness-50 rounded-3xl"
      />
    </div>
  );
};

export default Introvideo;
