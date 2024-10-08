import React from 'react'
import Link from "next/link"
import { MapPin } from 'lucide-react'

import ButtonComponent from './ButtonComponent'

const HeaderComponent = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6" />
          <span className="sr-only">Indigenous Directions</span>
          <p className='font-bold'>VIA</p>
        </Link>
        
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <ButtonComponent label="Login"/>
          <Link className="text-sm font-medium hover:underline underline-offset-4 items-center justify-center flex" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 items-center justify-center flex" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 items-center justify-center flex" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
  )
}

export default HeaderComponent