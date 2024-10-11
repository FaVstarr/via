'use client'
// import { useState } from "react"
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin,  Navigation,  BookOpen,  Filter } from "lucide-react"
import DashboardSearchNav from "@/components/DashboardSearchNav"
// import Link from "next/link"

export default function SearchPage() {
  // const [searchQuery, setSearchQuery] = useState("")
  // const [selectedLanguage, setSelectedLanguage] = useState("English")
  // const [selectedFilters, setSelectedFilters] = useState({
  //   landmarks: true,
  //   routes: true,
  //   culturalInfo: true,
  // })

  // const handleSearch = () => {
  //   console.log("Searching for:", searchQuery)
  //   console.log("Filters:", selectedFilters)
  //   // Implement actual search logic here
  // }

  // const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)

  // const handleFilterChange = (filter: string) => {
  //   setSelectedFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  // }

  const searchResults = [
    { type: "landmark", title: "Sacred Mountain", description: "A place of spiritual significance for local indigenous peoples." },
    { type: "route", title: "Ancestral Trading Path", description: "Ancient route used for trade between coastal and inland communities." },
    { type: "culturalInfo", title: "Harvest Festival", description: "Annual celebration of the harvest season with traditional dances and rituals." },
    { type: "landmark", title: "Ancient River Crossing", description: "Historical site where trade routes converged." },
    { type: "route", title: "Pilgrimage Trail", description: "Sacred journey to important spiritual sites." },
    { type: "culturalInfo", title: "Traditional Weaving Techniques", description: "Ancient methods of textile creation passed down through generations." },
  ]

  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      

      {/* Main content */}
      <main className="flex-1  overflow-auto">
        {/* Top bar */}
        <DashboardSearchNav />
        {/* Search filters and results */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="landmarks"
                    // checked={selectedFilters.landmarks}
                    // onCheckedChange={() => handleFilterChange("landmarks")}
                  />
                  <Label htmlFor="landmarks">Landmarks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="routes"
                    // checked={selectedFilters.routes}
                    // onCheckedChange={() => handleFilterChange("routes")}
                  />
                  <Label htmlFor="routes">Routes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="culturalInfo"
                    // checked={selectedFilters.culturalInfo}
                    // onCheckedChange={() => handleFilterChange("culturalInfo")}
                  />
                  <Label htmlFor="culturalInfo">Cultural Info</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-4">
                  {searchResults.map((result, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm font-medium flex items-center">
                          {result.type === "landmark" && <MapPin className="mr-2 h-4 w-4" />}
                          {result.type === "route" && <Navigation className="mr-2 h-4 w-4" />}
                          {result.type === "culturalInfo" && <BookOpen className="mr-2 h-4 w-4" />}
                          {result.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm">
                        <p>{result.description}</p>
                        <Button variant="link" className="p-0 h-auto text-sm mt-2">View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}