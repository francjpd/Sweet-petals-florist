import { cva } from 'class-variance-authority'
import { cn } from '../cn/cn'

const separatorVariants = cva('inline-block 0 ',
  {
    variants: {
      variant: {
        default: 'border-gray-400',
        secondary: 'border-casper-400'
      },
      orientation: {
        v: 'border-r h-[20px] w-[1px] mx-[15px] my-0 ',
        h: 'border-b w-full h-1[px] my-[15px] mx-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'h'
    }
  })

type SeparatorProps = {
    className?: string,
    variant?: 'default' | 'secondary',
    orientation?: 'v' | 'h'
}

export default function Separator ({ className, variant, orientation }: SeparatorProps) {
  return (
        <div
            className={cn(separatorVariants({ variant, orientation, className }))}
        >
        </div>
  )
}
