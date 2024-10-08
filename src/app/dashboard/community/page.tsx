'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
import { MapPin, Search, Navigation, Users, BookOpen, Globe, Menu, MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [newPost, setNewPost] = useState("")

  const handleLanguageChange = (lang: string) => setSelectedLanguage(lang)

  const handlePostSubmit = () => {
    console.log("Submitting new post:", newPost)
    setNewPost("")
    // Implement actual post submission logic here
  }

  const communityPosts = [
    {
      id: 1,
      author: "ElderWisdom",
      avatar: "/placeholder-avatar-1.jpg",
      content: "Just finished mapping a new trail near Sacred Mountain. It's a beautiful route that passes by several important cultural sites. Check it out on the map!",
      likes: 24,
      comments: 5,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "NatureLover",
      avatar: "/placeholder-avatar-2.jpg",
      content: "Does anyone know the story behind the Ancient River Crossing? I'd love to learn more about its significance to our community.",
      likes: 18,
      comments: 7,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      author: "CulturalGuide",
      avatar: "/placeholder-avatar-3.jpg",
      content: "Reminder: We're hosting a traditional knowledge sharing session this weekend at the Community Center. All are welcome to join and learn about our ancestral practices!",
      likes: 32,
      comments: 12,
      timestamp: "1 day ago"
    }
  ]

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
    

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Community</h1>
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

        {/* Community content */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {/* Left column: New post and community guidelines */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Share with the Community</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="mb-2"
                />
                <Button onClick={handlePostSubmit} className="w-full">
                  Post
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Be respectful and inclusive</li>
                  <li>Share knowledge and experiences</li>
                  <li>Protect sensitive cultural information</li>
                  <li>Verify information before posting</li>
                  <li>Report inappropriate content</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Middle column: Community feed */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Community Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src={post.avatar} alt={post.author} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-sm font-medium">{post.author}</CardTitle>
                            <CardDescription>{post.timestamp}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{post.content}</p>
                        <div className="flex items-center space-x-4 mt-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
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