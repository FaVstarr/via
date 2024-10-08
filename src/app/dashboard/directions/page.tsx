'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Search, Navigation, Users, BookOpen, Globe, Menu, ArrowRight, Clock, Footprints } from "lucide-react"
import Link from "next/link"

export default function DirectionsPage() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [activeTab, setActiveTab] = useState("map")

  const handleGetDirections = () => {
    console.log("Getting directions from", origin, "to", destination)
    // Implement actual directions logic here
  }

  const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)

  const directions = [
    { instruction: "Start at Sacred Mountain Trailhead", distance: "0 km", duration: "0 min" },
    { instruction: "Follow the Ancient River Path heading east", distance: "2.5 km", duration: "30 min" },
    { instruction: "Turn right at the Giant Oak landmark", distance: "1 km", duration: "15 min" },
    { instruction: "Continue along the Ancestral Trading Route", distance: "4 km", duration: "50 min" },
    { instruction: "Pass by the Traditional Gathering Place", distance: "0.5 km", duration: "5 min" },
    { instruction: "Arrive at Spiritual Lake Viewpoint", distance: "0 km", duration: "0 min" },
  ]

  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Directions</h1>
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
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
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

        {/* Directions input and results */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Route</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Origin
                  </label>
                  <Input
                    id="origin"
                    placeholder="Enter starting point"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Destination
                  </label>
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <Button onClick={handleGetDirections} className="w-full">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Indigenous Route</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="directions">Directions</TabsTrigger>
                </TabsList>
                <TabsContent value="map">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Interactive Map Component</span>
                  </div>
                </TabsContent>
                <TabsContent value="directions">
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {directions.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                            {index + 1}
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{step.instruction}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center">
                                <Footprints className="w-4 h-4 mr-1" />
                                {step.distance}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {step.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Route summary */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Route Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Footprints className="w-5 h-5 text-primary" />
                <span className="font-medium">Total Distance: 8 km</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Estimated Time: 1 hour 40 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}