'use client'
import AuthComponent from '@/components/AuthComponent'
import {usePathname} from 'next/navigation'
import React from 'react'

const SignUp = () => {

    const pathname = usePathname()
    console.log(pathname)
  return (
    <div>
        <AuthComponent pathname={pathname}/>
    </div>
  )
}

export default SignUp