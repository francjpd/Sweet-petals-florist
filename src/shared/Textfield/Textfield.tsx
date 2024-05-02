import { ChangeEventHandler, ReactNode } from 'react'

type TextfieldProps = {
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  children?: ReactNode;
  prependIcon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Textfield ({
  placeholder,
  onChange,
  children,
  prependIcon,
  variant = 'primary'
}: TextfieldProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-casper-500">
        {prependIcon}
      </div>
      <input
        type="text"
        className={`${prependIcon && 'ps-10'
          } text-sm rounded-sm w-full p-2.5 block focus:border-0 ${variant === 'primary'
            ? 'bg-floralWhite-200  border-casper-600 text-casper-800  focus:ring-floralWhite-600 focus:border-floralWhite-600 placeholder-floralWhite-600 dark:bg-charlestonGreen-700 dark:border-charlestonGreen-900 dark:text-gray-100 dark:focus:ring-charlestonGreen-300 dark:focus:border-charlestonGreen-300'
            : 'bg-casper-200 dark:bg-casper-950 dark:text-white dark:placeholder-casper-700'
          } `}
        name="search"
        onChange={onChange}
        placeholder={placeholder}
      >
        {children}
      </input>
    </div>
  )
}
