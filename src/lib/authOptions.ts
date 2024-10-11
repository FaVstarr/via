import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
// import { FirebaseAdapter } from "@next-auth/firebase-adapter"



// import firebase from "firebase/app"
// import "firebase/firestore"

// const firestore = (
//     firebase.apps[0] ?? firebase.initializeApp(
//         {
//             apiKey: "AIzaSyBgPTLQbb3Buwh_DViEYsOWsiM14hGQFXs",
//             authDomain: "via-app-17967.firebaseapp.com",
//             projectId: "via-app-17967",
//             storageBucket: "via-app-17967.appspot.com",
//             messagingSenderId: "254942959515",
//             appId: "1:254942959515:web:c36a73b9f735f484ac333e",
//             measurementId: "G-EF567M6189"
//           }
//     )
//   ).firestore()


export const authOptions : NextAuthOptions = {
    providers: [
        // Add your providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
        })
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