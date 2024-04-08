import flower from "../../assets/flower.svg";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex flex-col justify-center w-28 ${className && className}`}
    >
      <span className="inline-flex align-middle">
        <img className="w-4 h-4 mr-1 mt-1" src={flower} alt="flower logo" />
        <span className="text-floralWhite-600 font-extrabold text-md">
          Floristeria
        </span>
      </span>

      <span className="text-xs dark:text-white ps-5">
        <span className="font-thin"> Dulces petalos</span>
      </span>
    </div>
  );
}
