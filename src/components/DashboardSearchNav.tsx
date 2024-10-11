'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { getAuth } from "firebase/auth"
// import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useSession, signOut } from 'next-auth/react'
import MobileNav from './MobileNav'

const DashboardSearchNav = () => {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("English")

    const {data: session} = useSession()
    const auth = getAuth();
    const user = auth.currentUser

    console.log(session)
  
    // Placeholder functions - these would be implemented with actual logic in a real app
    const handleSearch = () => console.log("Searching for:", searchQuery)
    const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)
  return (
    <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
           <MobileNav/>
            <Input
              type="search"
              placeholder="Search landmarks or routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-54 md:w-96"
            />
            <Button onClick={handleSearch}  >Search</Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className='hidden md:block'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{selectedLanguage}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleLanguageChange("English")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("Indigenous Language")}>
                  Indigenous Language
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("Spanish")}>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
            <div className='hidden md:block'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={session?.user?.image ?? "/"} alt="User" className=" h-[40px] w-[40px] rounded-full" />
                  <AvatarFallback>{user.email[0] || session?.user?.name?[0] : "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> session? signOut() : auth.signOut()}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
        </div>
  )
}

export default DashboardSearchNav