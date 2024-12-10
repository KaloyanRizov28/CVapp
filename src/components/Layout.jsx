import Header from './header';


export default function Layout({ children }) {
 return (
   <div className="min-h-[100dvh] flex flex-col bg-gray-50">
     <Header />
     <main className="flex-grow">
       {children}
     </main>
     
   </div>
 )}