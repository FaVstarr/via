"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, MapPin } from "lucide-react"
import Link from "next/link"
import { z } from "zod"
import { useRouter } from "next/navigation"
import {
  Form
} from "@/components/ui/form"
import { authformSchema } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react"
import CustomInput from "./CustomInput"



export default function AuthPage({type}: {type: string}) {
  const [isLoading, setIsLoading] = useState(false) 

  const formSchema = authformSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  
   const router = useRouter() 
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold">VIA</span>
          </div>
          <CardTitle className="text-2xl text-center">
            {type === 'sign-up' ? "Create an account" : "Sign in to your account"}
          </CardTitle>
          <CardDescription className="text-center">
            {type === 'sign-up'
              ? "Enter your email below to create your account"
              : "Enter your email below to sign in to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" type="text" />
          </div>
          <div className="space-y-2">
            <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" type="password" />
          </div>
          {type === 'sign-up' && (
            <div className="space-y-2">
              <CustomInput control={form.control} name="confirmPassword" label="Confirm Password" placeholder="Confirm your password" type="password" />
            </div>
          )}
          <Button className="w-full my-4" type="submit" disabled={isLoading}>

            {
                  isLoading? (
                    <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
                    </>
                  ) : type === 'sign-in'? 'Sign In' : 'Sign Up'
                  
                }
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button className="w-full mt-4" variant="outline">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
            </svg>
            Sign in with Google
          </Button>
          </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1">{type === '/sign-up' ? "Already have an account?" : "Don't have an account?"}</span>
            <Button
              className="hover:underline  text-primary"
              onClick={() => type === '/sign-up' ? router.push('/sign-in') : router.push('/sign-up')}
              variant="link"
            >
            {type === '/sign-up' ? "Sign In" : "Sign Up"}
            </Button>
          </div>
          {type !== '/sign-up' && (
            <Link className="text-sm underline text-primary" href="/forgot-password">
              Forgot password?
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
