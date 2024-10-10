'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ScrollArea } from "@/components/ui/scroll-area"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Search, Navigation, Users, BookOpen, Globe, Menu, Play, FileText, Award } from "lucide-react"
import Link from "next/link"


export default function LearnPage() {
  // const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [searchQuery, setSearchQuery] = useState("")

  // const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)

  const handleSearch = () => {
    console.log("Searching for:", searchQuery)
    // Implement actual search logic here
  }

  const categories = [
    { name: "History", icon: <FileText className="h-4 w-4" /> },
    { name: "Culture", icon: <Globe className="h-4 w-4" /> },
    { name: "Nature", icon: <MapPin className="h-4 w-4" /> },
    { name: "Language", icon: <BookOpen className="h-4 w-4" /> },
  ]

  const featuredCourses = [
    { title: "Introduction to Indigenous History", duration: "2 hours", level: "Beginner", progress: 75 },
    { title: "Traditional Ecological Knowledge", duration: "3 hours", level: "Intermediate", progress: 30 },
    { title: "Indigenous Art and Symbolism", duration: "1.5 hours", level: "All Levels", progress: 0 },
  ]

  const articles = [
    { title: "The Importance of Oral Traditions", category: "Culture", readTime: "5 min" },
    { title: "Sacred Plants in Indigenous Medicine", category: "Nature", readTime: "7 min" },
    { title: "Understanding Indigenous Land Rights", category: "History", readTime: "10 min" },
  ]

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
     

      {/* Main content */}
      <main className="flex-1">
        {/* Top bar */}
       

        {/* Search bar */}
        <div className="mb-6">
          <div className="flex space-x-2">
            <Input
              type="search"
              placeholder="Search for courses, articles, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardContent className="flex items-center justify-center p-4">
                <Button variant="ghost" className="w-full h-full flex flex-col items-center space-y-2">
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Courses */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Featured Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featuredCourses.map((course, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{course.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                    <Progress value={course.progress} className="mt-2" />
                  </div>
                  <Button variant="outline" size="sm">
                    {course.progress > 0 ? "Continue" : "Start"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{article.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span>•</span>
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}