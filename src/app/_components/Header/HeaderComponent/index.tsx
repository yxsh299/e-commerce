'use client'

import React from 'react'
import link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import { Image } from '../../Media/Image'
import { noHeaderFooterUrls } from '../../../constants'
import { constants } from 'buffer'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HeaderNav } from '../Nav'




const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes (pathname) && classes.hide]
      .filter(Boolean)
      .join('')}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <img src= "/logo-black.svg" alt="logo" className={classes.logo} />
        </Link>
         <HeaderNav header = {header} />
        
         
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
