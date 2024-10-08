import SideBarComponent from "@/components/SideBarComponent";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex bg-gray-100 dark:bg-gray-900 relative">
           <SideBarComponent /> 
          <div className="ml-64 h-screen bg-gray-100">
          {children}
          </div>
        </div>
     
    );
}