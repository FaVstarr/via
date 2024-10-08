'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin,  Navigation,  Shield, Menu } from "lucide-react"
import InteractiveMapComponent from "@/components/InteractiveMapComponent"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  // Placeholder functions - these would be implemented with actual logic in a real app
  const handleSearch = () => console.log("Searching for:", searchQuery)
  const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)
  const handleAddLandmark = () => console.log("Opening add landmark form")
  const handleAddRoute = () => console.log("Opening add route form")
  const handleModerate = () => console.log("Opening moderation panel")

  return (
    <div className="h-screen">
      {/* Sidebar */}
     

      {/* Main content */}
      <main className="flex-1 ">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
            <Input
              type="search"
              placeholder="Search landmarks or routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 md:w-96"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <div className="flex items-center space-x-4">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Map and Tabs */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for the actual map component */}
              <div className="bg-gray-200 dark:bg-gray-700 h-96 flex items-center justify-center">
                <InteractiveMapComponent/>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contribute</CardTitle>
                <CardDescription>Add new landmarks or routes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button onClick={handleAddLandmark} className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Add Landmark
                </Button>
                <Button onClick={handleAddRoute} className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Add Route
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Moderation</CardTitle>
                <CardDescription>Review and approve contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleModerate} className="w-full">
                  <Shield className="mr-2 h-4 w-4" />
                  Moderate Content
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Tabs */}
        <Tabs defaultValue="landmarks" className="mt-4">
          <TabsList>
            <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="cultural-info">Cultural Info</TabsTrigger>
          </TabsList>
          <TabsContent value="landmarks">
            <Card>
              <CardHeader>
                <CardTitle>Nearby Landmarks</CardTitle>
                <CardDescription>Discover culturally significant places around you</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for landmark list */}
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Sacred Mountain
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ancient River Crossing
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Traditional Gathering Place
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="routes">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Routes</CardTitle>
                <CardDescription>Explore paths with cultural significance</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for routes list */}
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Navigation className="mr-2 h-4 w-4" />
                    Ancestral Trading Path
                  </li>
                  <li className="flex items-center">
                    <Navigation className="mr-2 h-4 w-4" />
                    Seasonal Migration Route
                  </li>
                  <li className="flex items-center">
                    <Navigation className="mr-2 h-4 w-4" />
                    Pilgrimage Trail
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cultural-info">
            <Card>
              <CardHeader>
                <CardTitle>Cultural Information</CardTitle>
                <CardDescription>Learn about the rich heritage of this land</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for cultural information */}
                <p>
                  This area has been home to indigenous peoples for thousands of years. The landscape is deeply
                  intertwined with cultural practices, spiritual beliefs, and traditional knowledge passed down through
                  generations.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}