import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn =  { firstName: 'Doe', }
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar/>
        {children}
    </main>
  );
}
