import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions : NextAuthOptions = {
    providers: [
        // Add your providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET as string,
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