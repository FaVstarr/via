'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import AuthComponent from '@/components/AuthComponent'

const SignIn = () => {

    const pathname = usePathname()


    
    
  return (
    <div>
        <AuthComponent pathname={pathname}/>
    </div>
  )
}

export default SignIn