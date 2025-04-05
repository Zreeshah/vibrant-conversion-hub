
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false 
}) => {
  // Convert jpg/png paths to webp if they're from lovable-uploads
  const webpSrc = src.includes('lovable-uploads') && (src.endsWith('.jpg') || src.endsWith('.png')) 
    ? src.substring(0, src.lastIndexOf('.')) + '.webp'
    : src;
  
  return (
    <img
      src={webpSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
};

export default OptimizedImage;
