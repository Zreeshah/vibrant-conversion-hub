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
  // Only try to convert to webp if it's a jpg or png file
  // Keep the original path for other file types
  let webpSrc = src;
  
  if (src.includes('lovable-uploads') && (src.endsWith('.jpg') || src.endsWith('.png'))) {
    // For lovable uploads, keep the original format to avoid broken images
    webpSrc = src;
  }
  
  return (
    <img
      src={webpSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ aspectRatio: `${width} / ${height}` }}
    />
  );
};

export default OptimizedImage;
