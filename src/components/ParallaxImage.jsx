'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

/**
 * ParallaxImage wraps a Next.js Image with a subtle scroll-driven parallax effect.
 *
 * Two modes:
 *   - fill mode (default): renders inside a sized container, image fills it.
 *     Requires the parent/container to have a defined height.
 *     Props: src, alt, containerClassName, className, strength
 *
 *   - fixed mode: renders a fixed-size image (width + height required).
 *     Props: src, alt, width, height, className, strength
 */
export function ParallaxImage({ src, alt, width, height, containerClassName, className, strength = 60 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength/6, strength]);

  const isFill = !width || !height;

  if (isFill) {
    return (
      <div ref={ref} className={`relative ${containerClassName ?? ''}`}>
        <motion.div style={{ y }} className='absolute inset-0 scale-110'>
          <Image src={src} alt={alt} layout="fill" objectFit="cover" className={className} />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`${containerClassName ?? ''}`}>
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </motion.div>
    </div>
  );
}
