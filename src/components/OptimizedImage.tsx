
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
  // Ensure the src is properly handled
  const imageSrc = src;
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ 
        width: 'auto',
        height: 'auto',
        maxWidth: '100%'
      }}
    />
  );
};

export default OptimizedImage;
