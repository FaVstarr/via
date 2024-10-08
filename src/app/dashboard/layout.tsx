import SideBarComponent from "@/components/SideBarComponent";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
           <SideBarComponent /> 
          {children}
        </div>
     
    );
}