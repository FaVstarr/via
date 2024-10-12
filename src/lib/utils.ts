import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authformSchema = (type: string) => z.object({
  // sign up
  confirmPassword: type === 'sign-up' ? z.string().min(8, { message: "Confirm Password must be at least 8 characters long" }) : z.undefined(),
  // both
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long"}),
}).refine(
      (values) => {
        return type !== 'sign-up' || values.password === values.confirmPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      }
    );