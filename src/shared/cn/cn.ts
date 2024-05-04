import { ClassValue } from 'class-variance-authority/types'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => (
  twMerge(
    clsx(inputs)
  )
)
