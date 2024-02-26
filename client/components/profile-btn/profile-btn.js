'use client';
import { useState } from "react";


export default function ProfileHeadBtn(){
    const [isLoggedIn, setisLoggedIn] = useState(true);

    const handleLogout =()=>{
        window.localStorage.clear();

    // Redirect to "/auth"
    window.location.href = "/auth";
    }

    return (
        <div>
            {isLoggedIn ?(
                <div>
                    <button
                    onClick={handleLogout}
                    >Log out</button>
                </div>
            ):(
                <div>
                    <button>Log In</button>
                </div>
            )}
        </div>
    )
}