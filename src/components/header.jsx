import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

export default function Header() {
 return (
   <Navbar 
     isBordered 
     position="static"
     className="shadow-sm"
     maxWidth="full" 
   >
     <NavbarBrand>
       <p className="font-bold text-xl text-inherit">CV Builder</p>
     </NavbarBrand>

     <NavbarContent justify="end">
       <NavbarItem>
         
       </NavbarItem>
     </NavbarContent>
   </Navbar>
 );
}