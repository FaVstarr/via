
import SideBarComponent from "@/components/SideBarComponent";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

   
    return (
        <div className="flex  bg-gray-100 dark:bg-gray-900 ">
           <SideBarComponent /> 
          <div className="h-screen overflow-auto p-4 bg-gray-100">
         
          {children}
          </div>
        </div>
     
    );
}