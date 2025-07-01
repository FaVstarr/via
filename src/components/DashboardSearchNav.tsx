'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
// import { Input } from './ui/input'
import mapboxgl from 'mapbox-gl';
import { SearchBox } from "@mapbox/search-js-react"

// Type definition for SearchBox component
interface SearchBoxProps {
  accessToken: string;
  mapboxgl?: typeof mapboxgl;
  options?: {
    language?: string;
    country?: string;
    [key: string]: unknown;
  };
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  marker?: boolean;
  className?: string;
}

// import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useSession, signOut } from 'next-auth/react'
import MobileNav from './MobileNav'

declare interface SearchProps{
  onSearch : (location: string) => void
  accessToken: string | undefined
}

const DashboardSearchNav  = ({onSearch, accessToken}: SearchProps) => {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("English")
    
    const {data: session} = useSession()
    
    // Placeholder functions - these would be implemented with actual logic in a real app
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery) {
        onSearch(searchQuery);
      }
    };
    
    const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)
    const clear = () => setSearchQuery("")

    // Type assertion to fix the SearchBox component issue
      const SearchBoxComponent = SearchBox as React.ComponentType<SearchBoxProps>;

    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
                <MobileNav/>
                <form onSubmit={handleSearch} className="flex space-x-2">
                    <SearchBoxComponent
                        accessToken={accessToken ?? ""}
                        // map={mapInstanceRef.current}
                        mapboxgl={mapboxgl}
                        options={{
                            language: 'en',
                            country: 'NG',
                        }}
                        placeholder="Search landmarks or routes..."
                        value={searchQuery}
                        onChange={(e: string) => setSearchQuery(e)}
                        onClear={() => clear()}
                        // className="w-54 md:w-96"
                        marker
                    />
                    <Button type="submit">Search</Button>
                </form>
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
                                <AvatarImage 
                                    src={session?.user?.image ?? ""} 
                                    alt="User" 
                                    className="h-[40px] w-[40px] rounded-full"
                                />
                                <AvatarFallback className="bg-gray-500 text-white font-bold">
                                    {session?.user?.email ? session.user.email[0].toUpperCase() : "U"}
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white p-3 rounded-md right-4 backdrop-blur-3xl" align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-black" />
                            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default DashboardSearchNav