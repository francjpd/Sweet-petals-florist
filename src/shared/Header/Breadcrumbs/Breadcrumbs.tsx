import { Link, useLocation } from 'react-router-dom'
import { useCurrentPath } from './useCurrentPath'
import { useEffect } from 'react'

export default function Breadcrumb () {
  const context = useCurrentPath()

  const location = useLocation()
  const pathnames: { name?: string; to: string }[] = [
    { name: 'home', to: '' },
    ...location.pathname
      .split('/')
      .filter((x) => x)
      .map((path) => ({ to: path }))
  ]

  useEffect(() => context.setPath(''), [context, location])

  return (
    <div aria-label="breadcrumb" className="dark:text-white inline-flex">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        return last
          ? (
            <p key={value.to} className="dark:text-white text-casper-800">
              {value.name || context.path || value.to}
            </p>
            )
          : (
            <div key={value.to} >
              <Link to={value.to} className="text-floralWhite-600">
                {value.name || value.to}
              </Link>
              <span className="mx-2 dark:text-floralWhite-200 text-casper-800">
                /
              </span>
            </div>
            )
      })}
    </div>
  )
}
