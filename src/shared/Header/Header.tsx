import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import burgerIcon from '../../assets/burger.svg'
import { ReactNode, useState } from 'react'
import ToggleDarkMode from '../toggleDarkMode/ToggleDarkMode'
import Separator from '../Separator/Separator'
import { useMediaQuery } from '@uidotdev/usehooks'
import Button from '../Button/Button'

export default function Header ({ children }: { children?: ReactNode }) {
  const isDesktop = useMediaQuery('(min-width : 768px)')
  const [isNavbarFromMobileOpen, setIsNavbarFromMobileOpen] = useState(false)

  const navbarContent = (
    <>
      <div
        id="header-portal-slot"
        className="pt-1 w-full col-span-7 md:col-span-3 md:col-start-9 items-center justify-end  self-end text-end content-end right"
      ></div>
      <div>
        <Separator orientation={isDesktop ? 'v' : 'h'} />
        <ToggleDarkMode className="col-span-1 col-start-12" />
      </div>
    </>
  )

  return (
    <>
      <header className="z-40 w-full md:h-[89px] justify-center top-0 sticky bg-gray-100 text-floralWhite-950 dark:bg-gray-900 border-b border-b-gray-300 ">
        <div className="gap-y-4 m-0 w-full grid grid-cols-12 items-center ">
          <div className="col-span-4 pt-2 md:col-span-2 md:col-start-6 content-end align-bottom">
            <Link to={'/'}>
              <Logo></Logo>
            </Link>
          </div>
          {
            isDesktop
              ? (
                <>
                  {navbarContent}
                  <div className="dark:bg-casper-950 bg-casper-200 bg-opacity-50 col-span-12 w-full grid grid-cols-12"> <div className='col-start-2'>
                    {children}
                  </div></div>
                </>
                )
              : (
                <>
                  <Button size='icon' variant='secondary' className='col-start-11 col-span-2' onClick={() => setIsNavbarFromMobileOpen(!isNavbarFromMobileOpen)}>
                    <img src={burgerIcon} />
                  </Button>
                  <div className={`text-center px-8 pt-4 w-full absolute bg-casper-50 dark:bg-gray-950 shadow-sm top-full h-5/5 ${isNavbarFromMobileOpen ? 'visible' : 'invisible'}`}>
                    {navbarContent}
                  </div>
                </>
                )
          }
        </div>
      </header>
    </>
  )
}
