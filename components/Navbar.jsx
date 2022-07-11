import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../context/authContext";
// import Image from "next/image";

export default function Navbar(){
    const user = useContext(AuthContext);
    
    return(
        <div className="nav-container">
            <nav>
                {/* <Image src="/rupee.png" /> */}
                <h1>Example</h1>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/guides"><a>Guides</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}
