'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

const AuthComponent = dynamic(()=> import('@/components/AuthComponent'), {loading: ()=> <div className="min-h-screen flex items-center justify-center"><Loader2 size={60} className="animate-spin" /></div>})
const SignIn = () => {

  


    
    
  return (
    <div>
        <AuthComponent type="sign-in"/>
    </div>
  )
}

export default SignIn