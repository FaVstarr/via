'use client'
import { useState } from "react"
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Layers } from "lucide-react"

// Dynamically import components that use browser APIs
const DashboardSearchNav = dynamic(
  () => import("@/components/DashboardSearchNav"),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-between items-center mb-4 h-16 bg-gray-50 animate-pulse rounded">
        <div className="flex items-center space-x-2">
          <div className="w-64 h-10 bg-gray-200 rounded"></div>
          <div className="w-20 h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    )
  }
)

const InteractiveMapComponent = dynamic(
  () => import("@/components/InteractiveMapComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gray-200 h-72 md:h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <span className="text-gray-500 text-lg">Loading Interactive Map...</span>
        </div>
      </div>
    )
  }
)

export default function MapPage() {
  const mapCenter: [number, number] = [-74.5, 40] // Replace with your default center
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  
  const onSearch = (location: string) => {
    // Implement search logic
    console.log("Searching for:", location)
  }

  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleAddLandmark = () => {
    console.log("Opening add landmark form")
    // Implement logic to open add landmark form
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    console.log("Selected category:", category)
    // Implement logic to filter map based on category
  }

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        <DashboardSearchNav onSearch={onSearch} accessToken={accessToken} />

        {/* Map and controls */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 h-[calc(100vh-120px)]">
          <Card className="md:col-span-3 relative">
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Map component with loading state */}
              <div className="absolute inset-0 bg-gray-200 h-72 md:h-full flex items-center justify-center">
                <InteractiveMapComponent center={mapCenter} />
              </div>

              {/* Legend */}
              <div className="absolute top-[90px] md:top-[460px] right-4 bg-background p-4 rounded-lg shadow-md">
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
            <CardContent className="p-3 md:p-0">
              <div className="p-4 space-y-32 md:space-y-8">
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
                    <div className="space-y-4 p-4 overflow-y-auto">
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
                  <ScrollArea className="md:h-[calc(100vh-400px)]">
                    <div className="space-y-4 p-4 overflow-y-auto">
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