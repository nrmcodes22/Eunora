import React from "react"
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  href?: string;
}

export function CTAButton({
  children,
  variant = 'primary',
  showArrow = false,
  href,
  className = '',
  ...props
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-200 hover:shadow-lg';
  
  const variantStyles = {
    primary: 'bg-accent text-primary hover:bg-accent/90',
    secondary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-500 hover:text-primary',
  };

  const buttonContent = (
    <>
      {children}
      {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
