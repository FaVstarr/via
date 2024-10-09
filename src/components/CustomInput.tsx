import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useMemo } from "react"





const baseSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(16, { message: "Password must be at most 16 characters" }),
});

// Extend the schema for sign-up
const signUpSchema = baseSchema.extend({
  confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  }
});

const CustomInput = () => {
  return (
    <div>CustomInput</div>
  )
}

export default CustomInput