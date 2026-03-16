export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <AppHeader/> 

      
        
          <Outlet />
        
      </SidebarInset>
    </SidebarProvider>
  );
}
