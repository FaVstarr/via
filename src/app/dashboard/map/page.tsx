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
import { Menu, Plus, Layers, ZoomIn, ZoomOut } from "lucide-react"


export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
    // Implement actual search logic here
  }

  const handleAddLandmark = () => {
    console.log("Opening add landmark form")
    // Implement logic to open add landmark form
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    console.log("Selected category:", category)
    // Implement logic to filter map based on category
  }

  const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
     

      {/* Main content */}
      <main className="flex-1 p-4 overflow-hidden">
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

        {/* Map and controls */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 h-[calc(100vh-120px)]">
          <Card className="md:col-span-3 relative">
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for the actual map component */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Interactive Map Component</span>
              </div>

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button size="icon" variant="secondary">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-background p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Legend</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">Historical Site</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Cultural Landmark</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Natural Feature</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Landmarks and Routes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-4 space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedCategory} <Layers className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleCategoryChange("All")}>All</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange("Historical")}>Historical</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange("Cultural")}>Cultural</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCategoryChange("Natural")}>Natural</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button onClick={handleAddLandmark} className="w-full">
                  <Plus className="h-4 w-4 mr-2" /> Add Landmark
                </Button>
              </div>
              <Tabs defaultValue="landmarks">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
                  <TabsTrigger value="routes">Routes</TabsTrigger>
                </TabsList>
                <TabsContent value="landmarks">
                  <ScrollArea className="h-[calc(100vh-400px)]">
                    <div className="space-y-4 p-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Sacred Mountain</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>A place of spiritual significance for local indigenous peoples.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Ancient River Crossing</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>Historical site where trade routes converged.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Traditional Gathering Place</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>Annual celebration site for harvest festivals.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="routes">
                  <ScrollArea className="h-[calc(100vh-400px)]">
                    <div className="space-y-4 p-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Ancestral Trading Path</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>Ancient route used for trade between coastal and inland communities.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Seasonal Migration Route</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>Path followed by indigenous groups during seasonal movements.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm font-medium">Pilgrimage Trail</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs">
                          <p>Sacred journey to important spiritual sites.</p>
                          <Button variant="link" className="p-0 h-auto text-xs">View Details</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}