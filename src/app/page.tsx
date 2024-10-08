
import HeaderComponent from "@/components/HeaderComponent"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Users, BookOpen, Globe, Search, PenTool, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LandingImage from '../public/landing.png'

import ButtonComponent from "@/components/ButtonComponent"



export default function Component() {

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Navigate with Indigenous Wisdom
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover culturally significant landmarks, traditional routes, and indigenous heritage with our
                  community-driven navigation app.
                </p>
              </div>
              <div className="space-x-4 flex">
                <ButtonComponent label='Get started'/>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Interactive Map
                  </CardTitle>
                </CardHeader>
                <CardContent>Display indigenous landmarks, routes, and points of interest.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="w-6 h-6 mr-2" />
                    Cultural Navigation
                  </CardTitle>
                </CardHeader>
                <CardContent>Get directions based on indigenous pathways and knowledge.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Community Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent>Suggest new landmarks, routes, and updates to enrich the platform.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Cultural Information
                  </CardTitle>
                </CardHeader>
                <CardContent>Learn about the history and significance of each landmark and route.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    Multilingual Support
                  </CardTitle>
                </CardHeader>
                <CardContent>Access content in multiple languages, including indigenous languages.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Secure & Moderated
                  </CardTitle>
                </CardHeader>
                <CardContent>Enjoy a safe, authenticated environment with quality-assured content.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="Indigenous landscape"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={310}
                src={LandingImage}
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    VIA is dedicated to preserving and sharing indigenous knowledge through technology.
                    We aim to:
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Preserve cultural landmarks and traditional routes
                  </li>
                  <li className="flex items-center">
                    <Navigation className="mr-2 h-4 w-4" />
                    Provide user-friendly navigation based on indigenous perspectives
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Foster community engagement and contributions
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Serve as an educational resource for indigenous cultures
                  </li>
                  <li className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Ensure accessibility for diverse users, including those with disabilities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Be part of preserving and sharing indigenous knowledge. Sign up for updates or contribute to our growing
                  platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 VIA. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}