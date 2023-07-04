"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import Welcome from "./components/Welcome"
import Footer from './components/Footer'


export default function Home() {
  return (
    <main >
    <div>
        <Navbar />
        <Welcome />
        <Footer />
    </div>
    </main>
  )
}
