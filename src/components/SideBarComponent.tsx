import { BookOpen, MapPin, Navigation, Search, Users } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const SideBarComponent = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4 hidden md:block">
    <div className="flex items-center mb-6">
      <MapPin className="h-6 w-6 text-primary" />
      <span className="ml-2 text-xl font-bold">VIA</span>
    </div>
    <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        <MapPin className="mr-2 h-4 w-4" />
        Map
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Navigation className="mr-2 h-4 w-4" />
        Directions
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Users className="mr-2 h-4 w-4" />
        Community
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <BookOpen className="mr-2 h-4 w-4" />
        Learn
      </Button>
    </nav>
  </aside>
  )
}

export default SideBarComponent