import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { signInUser } from "./actions/user.actions";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter"



// import firebase from "firebase/app"
// import "firebase/firestore"

interface User {
    id: string; // Firebase UID
    email: string;
    // Add other user properties if needed
  }




export const authOptions : NextAuthOptions = {
    providers: [
        // Add your providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
        }),
        CredentialsProvider({
            name: "Firebase",
            credentials: {
              email: { label: "Email", type: "text" },
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Email and password are required.");
                  }
              const { email, password } = credentials;
      
              // Call your Firebase sign-in function
              try {
                const userData = await signInUser(email, password);
                const user: User = {
                    id: userData.uid, // assuming uid is returned from signInUser
                    email: userData.email,
                  };
                  return user
               // Return user data for session
              } catch (error) {
                throw new Error(error.message); // Throw error to handle sign-in failure
              }
            },
          }),
    ],
    secret: process.env.NEXT_AUTH_SECRET as string,
    // adapter: FirebaseAdapter(firestore),
    // callbacks: {

    //     async jwt({ token, account, profile }) {
    //         if (account && profile) {
    //           // Add profile info to the token
    //           token.picture = profile.image;
    //           token.name = profile.name;
    //           token.email = profile.email;
    //         }
    //         return token;
    //     }
    // }
    

}