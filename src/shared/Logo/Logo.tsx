import flower from '../../assets/flower.svg'

type LogoProps = {
  className?: string;
};

export default function Logo ({ className }: LogoProps) {
  return (
    <div
      className={`flex flex-row justify-center w-28 ${className && className}`}
    >
      <img className="w-7 h-8 mr-1 mt-1" src={flower} alt="flower logo" />
      <span className="flex flex-col justify-start items-start">

        <span className="text-floralWhite-600 font-extrabold text-xl leading-none tracking-widest">
          Florist
        </span>
        <span className="text-sm dark:text-white font-extralight -tracking-wider">
          Sweet petals
        </span>
      </span>
    </div>
  )
}
