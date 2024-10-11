'use client'

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MapPin,  Navigation,  Shield } from "lucide-react"
import InteractiveMapComponent from "@/components/InteractiveMapComponent"
import DashboardSearchNav from "@/components/DashboardSearchNav"
import { useSession } from "next-auth/react"


export default function Dashboard() {

  const {data: session} = useSession()
  console.log(session)
 
 
  const handleAddLandmark = () => console.log("Opening add landmark form")
  const handleAddRoute = () => console.log("Opening add route form")
  const handleModerate = () => console.log("Opening moderation panel")

  

  return (
    <div className="">
      {/* Sidebar */}
     

      {/* Main content */}
      <main className="flex-1 h-screen w-full">
        {/* Top bar */}
        <DashboardSearchNav />

        {/* Map and Tabs */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for the actual map component */}
              <div className="bg-gray-200 dark:bg-gray-700 h-96  flex items-center justify-center">
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