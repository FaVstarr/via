'use client'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface ButtonProps {
    label : string
}

const ButtonComponent = ({label}: ButtonProps) => {
    const router = useRouter()
    const handleRedirect = () =>{
        if(label === 'Get started'){
            router.push('/sign-up')
        }else{
            router.push('/sign-in')
        }
    }
  return (
    <div>
        <Button onClick={handleRedirect} >{label}</Button>
    </div>
  )
}

export default ButtonComponent