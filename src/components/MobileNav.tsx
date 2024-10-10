'use client'
import React, { useEffect, useState } from 'react'
import { BookOpen, HomeIcon, MapPin, Navigation, Search, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

const MobileNav = () => {
    const pathname = usePathname()

    const [isActive, setIsActive] = useState('')
  
    useEffect(()=> {
  
      setIsActive(pathname)
      
    }, [pathname])
  
    const checkActive = (path: string) => isActive === path ? 'bg-gray-500 text-white ' : 'hover:bg-gray-300'
  return (
    <section>
        <Sheet>
  <SheetTrigger asChild>
  <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
  </SheetTrigger>
  <SheetContent side="left">
  <Link href="/dashboard" className="flex items-center mb-6 ">
      <MapPin className="h-6 w-6 text-primary" />
      <span className="ml-2 text-xl font-bold">VIA</span>
    </Link>
  <nav className="space-y-2">
      <Link  href="/dashboard" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard')} `}>
        <HomeIcon className="mr-2 h-4 w-4" />
        Dashboard
      </Link>
      <Link  href="/dashboard/map" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard/map')} `}>
        <MapPin className="mr-2 h-4 w-4" />
        Map
      </Link>
      <Link  href="/dashboard/search" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard/search')} `}>
        <Search className="mr-2 h-4 w-4" />
        Search
      </Link>
      <Link  href="/dashboard/directions" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard/directions')} `}>
        <Navigation className="mr-2 h-4 w-4" />
        Directions
      </Link>
      <Link  href="/dashboard/community" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard/community')} `}>
        <Users className="mr-2 h-4 w-4" />
        Community
      </Link>
      <Link  href="/dashboard/learn" className={`w-full justify-start items-center flex  p-2 rounded-sm ${checkActive('/dashboard/learn')} `}>
        <BookOpen className="mr-2 h-4 w-4" />
        Learn
      </Link>
    </nav>
   
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav