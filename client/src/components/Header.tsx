import Image from "next/image";
import {ShoppingCart} from 'lucide-react'
import { Button } from "./ui/button";

const menus = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
      {
        id:2,
        name: "Products",
        path: "/products"
    },
      {
        id:3,
        name: "About Us",
        path: "/about-us"
    },
      {
        id:4,
        name: "Contact",
        path: "/contact"
    },
]

export default function Header() {
return (
    <div className="flex items-center justify-between p-4">
        <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
        <ul className="flex gap-5" >
            {menus.map((item, i) => (
                <li key={i} >{item.name}</li>
            ))}
        </ul>
        <div className="flex gap-3 items-center">
            <ShoppingCart/>
            <Button>SignIn/SignUp</Button>
        </div>
    </div>
)
}