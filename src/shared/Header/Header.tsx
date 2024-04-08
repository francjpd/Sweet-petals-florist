import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className="left-0 top-0 z-40   relative  w-auto md:h-20 flex flex-col justify-center">
        <div className="px-2 md:px-8 py-2 md:py-4 m-0 w-full relative inline-flex align-middle bg-floralWhite-200 text-floralWhite-950 dark:bg-charlestonGreen-700 ">
          <div className="w-28 items-start align-middle md:pt-2">
            <Link to={"/"}>
              <Logo></Logo>
            </Link>
          </div>
          <div
            id="header-portal-slot"
            className="pt-1 w-full justify-end items-end self-end text-end content-end right"
          ></div>
        </div>
        <div className="px-4 dark:bg-casper-950 bg-casper-100"> {children}</div>
      </header>
    </>
  );
}
