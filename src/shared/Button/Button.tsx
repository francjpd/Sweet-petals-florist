import { cva } from 'class-variance-authority'
import { MouseEventHandler, ReactNode } from 'react'
import { cn } from '../cn/cn'

type ButtonProps = {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  prependIcon?: ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon'
};

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-floralWhite-200  border-casper-600 text-casper-800  hover:bg-floralWhite-300 hover:border-floralWhite-600 placeholder-floralWhite-600 dark:bg-gray-700 dark:border-gray-900 dark:text-gray-100 dark:hover:bg-gray-300 dark:hover:border-gray-300',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-casper-100 border border-casper-200 text-floralWhite-600  hover:bg-casper-300 hover:border-casper-600 placeholder-floralWhite-600  dark:bg-casper-950  dark:border-gray-900 dark:hover:bg-gray-300 dark:hover:border-gray-300',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export default function Button ({
  children,
  onClick,
  prependIcon,
  variant = 'default',
  size = 'default',
  className
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {prependIcon && (
        <div
          className={
            variant === 'default' ? 'text-casper-500' : 'text-floralWhite-600'
          }
        >
          {prependIcon}
        </div>
      )}
      {children}
    </button>
  )
}
