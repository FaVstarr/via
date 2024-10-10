


import SessionWrapper from "@/components/SessionWrapper";
import SideBarComponent from "@/components/SideBarComponent";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

   
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