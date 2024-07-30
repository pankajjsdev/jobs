// components/Typography.tsx
import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h1 className={`text-xxl font-bold ${className}`}>{children}</h1>;
};

export const Subheading: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const Bodyheading: React.FC<TypographyProps> = ({ children, className = '' }) => {
    return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
  };

export const Paragraph: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};


export const SmallParagraph: React.FC<TypographyProps> = ({ children, className = '' }) => {
    return <p className={`text-sm ${className}`}>{children}</p>;
  };
  

  export const ExtraSmallParagraph: React.FC<TypographyProps> = ({ children, className = '' }) => {
    return <p className={`text-xs ${className}`}>{children}</p>;
  };
  
