import { BookOpen, MapPin, Navigation, Search, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const SideBarComponent = () => {

    
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-800 p-4 hidden md:block fixed">
    <Link href="/dashboard" className="flex items-center mb-6">
      <MapPin className="h-6 w-6 text-primary" />
      <span className="ml-2 text-xl font-bold">VIA</span>
    </Link>
    <nav className="space-y-2">
      <Link   href="/dashboard/map" className="w-full justify-start items-center flex">
        <MapPin className="mr-2 h-4 w-4" />
        Map
      </Link>
      <Link  href="/dashboard/search" className="w-full justify-start items-center flex">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Link>
      <Link  href="/dashboard/directions" className="w-full justify-start items-center flex">
        <Navigation className="mr-2 h-4 w-4" />
        Directions
      </Link>
      <Link  href="/dashboard/community" className="w-full justify-start items-center flex">
        <Users className="mr-2 h-4 w-4" />
        Community
      </Link>
      <Link  href="/dashboard/learn" className="w-full justify-start items-center flex">
        <BookOpen className="mr-2 h-4 w-4" />
        Learn
      </Link>
    </nav>
  </aside>
  )
}

export default SideBarComponent