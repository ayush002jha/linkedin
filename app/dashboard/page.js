"use client"
import { signOut } from "next-auth/react"
import NavbarIn from "../components/NavbarIn"

// export const metadata = {
//     title: 'Check',
//   }

export default function Dashboard(){
    return <>
        <NavbarIn />
        <button onClick={signOut}>Sign Out</button>
    </>
}