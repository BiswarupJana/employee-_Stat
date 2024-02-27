'use client';
import { useState } from "react";
import Link from "next/link";



export default function ProfileHeadBtn(){
    const [isLoggedIn, setisLoggedIn] = useState(true);

    const handleLogout =()=>{
        window.localStorage.clear();

    // Redirect to "/auth"
    // window.location.href = '/auth';
    }

    return (
        <div>
            {isLoggedIn ?(
                <div>
                   
                    <Link href='/auth' onClick={handleLogout}>Log Out</Link>
                </div>
            ):(
                <div>
                    <button>Log In</button>
                </div>
            )}
        </div>
    )
}