'use client';

import React from 'react';
import Image from 'next/image';

interface ScrollToTopButtonProps {
  className: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className }: { className: string }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={className}
    >
      <Image src={"/uparrow1.svg"} alt="" width={32} height={64} />
    </button>
  );
};

export default ScrollToTopButton;
