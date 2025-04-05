
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
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ 
        aspectRatio: `${width} / ${height}`,
        objectFit: "contain"
      }}
    />
  );
};

export default OptimizedImage;
