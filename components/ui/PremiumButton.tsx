'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm font-sans font-medium transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-champagne disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-alabaster text-charcoal border border-alabaster hover:border-champagne hover:bg-transparent hover:text-alabaster px-6 py-3 shadow-sm',
        secondary:
          'bg-transparent text-alabaster border border-charcoal-light hover:border-champagne hover:bg-charcoal-light/50 px-4 py-2 text-sm',
      },
      size: {
        default: 'h-auto',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function PremiumButton({
  className,
  variant,
  size,
  ...props
}: PremiumButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    />
  );
}
