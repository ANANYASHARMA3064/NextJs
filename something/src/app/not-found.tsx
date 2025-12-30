"use client";
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname();
    const productID = pathname.split('/')[2]
    const reviewID = pathname.split('/')[4]

    return(
        <div>
            <h2>No page like {reviewID} thissss for {productID }</h2>
            <p>CHECK!!</p>
        </div>
    )
}
// Server code runs before the page reaches the browser

// Client code runs inside the browser