import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default Icon;
