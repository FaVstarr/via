'use client'
import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'

const AuthComponent = dynamic(()=> import('@/components/AuthComponent'), {loading: ()=> <div className="min-h-screen flex items-center justify-center"><Loader2 size={60} className="animate-spin" /></div>})

import React from 'react'

const SignUp = () => {

    
  return (
    <div>
        <AuthComponent type="sign-up"/>
    </div>
  )
}

export default SignUp