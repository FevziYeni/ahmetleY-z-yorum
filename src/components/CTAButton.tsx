import type { AnchorHTMLAttributes, ReactNode } from 'react';

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
};

export function CTAButton({ children, variant = 'primary', className = '', ...props }: CTAButtonProps) {
  const variants = {
    primary: 'bg-cyan-600 text-white shadow-soft hover:bg-cyan-700 focus-visible:ring-cyan-600',
    secondary: 'border border-cyan-200 bg-white text-cyan-900 hover:border-cyan-300 hover:bg-cyan-50 focus-visible:ring-cyan-500',
    light: 'bg-white text-cyan-900 shadow-soft hover:bg-cyan-50 focus-visible:ring-white',
  };

  return (
    <a
      className={`inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-extrabold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
