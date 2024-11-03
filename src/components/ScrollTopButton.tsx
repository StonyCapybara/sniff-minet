'use client';

import React from 'react';
import Image from 'next/image';

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
    >
      <Image src={"/uparrow.svg"} alt="" width={32} height={64} />
    </button>
  );
};

export default ScrollToTopButton;
