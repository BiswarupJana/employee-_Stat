'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import thumbnail1 from '@/assets/thumbnail1.jpg';
import thumbnail2 from '@/assets/thumbnail2.jpg';
import thumbnail3 from '@/assets/thumbnail3.jpg';
import thumbnail4 from '@/assets/thumbnail4.jpg';
import thumbnail5 from '@/assets/thumbnail5.jpg';
import thumbnail6 from '@/assets/thumbnail6.jpg';
import thumbnail7 from '@/assets/thumbnail7.jpeg';
import classes from './image-slideshow.module.css';

const images = [
  { image: thumbnail1, alt: 'Star War' },
  { image: thumbnail2, alt: 'Star War' },
  { image: thumbnail3, alt: 'Star War' },
  { image: thumbnail4, alt: 'Star War' },
  { image: thumbnail5, alt: 'Star War' },
  { image: thumbnail6, alt: 'Star War' },
  { image: thumbnail7, alt: 'Star War' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}