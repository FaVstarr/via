import '../globals.css';

import {app} from '../../../firebase.config'
console.log("Firebase Auth Instance:", app);
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import SessionWrapper from "@/components/SessionWrapper";
import SideBarComponent from "@/components/SideBarComponent";
import { redirect } from "next/navigation";




export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const loggedIn = getAuth(app);
    const checkFirebaseAuth = () => {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(loggedIn, (user) => {
          unsubscribe(); // Cleanup the listener
          resolve(user); // Resolve the promise with the user
        });
      });
    };

    const session = await getServerSession(authOptions);
    const firebaseUser = await checkFirebaseAuth();

    console.log("Session:", session); // Log session
    console.log("Firebase User:", firebaseUser); // Log Firebase user

    if (!session && !firebaseUser){
      redirect('/sign-in');
    }
   
    return (
      <SessionWrapper>
        <div className="flex  bg-gray-100 dark:bg-gray-900 ">
           <SideBarComponent /> 
          <div className="h-screen w-full p-4 bg-gray-100">
         
          {children}
          </div>
        </div>
      </SessionWrapper>
    );
    
}