"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import Welcome from "./components/Welcome"
import Footer from './components/Footer'
// Next-Auth powerfull Functions such as signIn and signOut 
import { getProviders, signIn } from "next-auth/react"

export default async function Home() {
  // This function provides the object that list the providers used such google, linkedin or apple etc...
  const providers = await getProviders();
  return (
    <main >
      <div>
        <Navbar signIn={signIn}  providers={providers} />
        <Welcome signIn={signIn} providers={providers} />
        <Footer />
      </div>
    </main>
  )
}
