"use client"
import Image from "next/image"
import darkLogo from "../../public/dark-logo.png"
import lightLogo from "../../public/light-logo.png"
// Material Ui Icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import NavLinks from "./NavLinks";
import { Avatar } from "@mui/material";
// Next-Theme
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";
// Framer Motion
import {motion} from "framer-motion"; 
const spring={
    type: "spring",
    stiffness: 700,
    damping: 30
};

function NavbarIn() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme, theme} = useTheme();

    // After mounting, we will change the theme
    useEffect(()=>setMounted(true),[]);

    console.log(theme);

    return (
        <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
            {/* Left Div */}
            <div className="flex items-center space-x-2 w-full max-w-xs">
                {mounted &&
                    <>
                        {(resolvedTheme === "dark")? 
                            (<Image src={darkLogo} height={50} width={50} priority />):
                            (<Image src={lightLogo} height={50} width={50} priority />)}
                
                    </>
                }
                <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
                    <SearchRoundedIcon />
                    <input type="text" placeholder="Search" className="hidden md:inline-flex text-sm bg-transparent placeholder-black/70 dark:placeholder-white/75 flex-grow focus:outline-none" />
                </div>
            </div>
            {/* Right Div */}
            <div className="flex items-center space-x-6">
                <NavLinks Icon={HomeRoundedIcon} text="Home" feed hidden active/>
                <NavLinks Icon={PeopleIcon} text="My Network" feed />
                <NavLinks Icon={BusinessCenterIcon} text="Jobs" feed />
                <NavLinks Icon={ChatRoundedIcon} text="Messages" feed />
                <NavLinks Icon={NotificationsRoundedIcon} text="Notifications" feed />
                <NavLinks Icon={Avatar} text="Me" feed avatar hidden />
                <NavLinks Icon={AppsRoundedIcon} text="For Business" feed hidden/>
                {/* Dark Mode toggler */}
                {mounted && (
                    <div className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative
                    ${resolvedTheme==="dark"? "justify-end":"justify-start"}`}
                    onClick={()=>{setTheme(resolvedTheme==="dark"?"light":"dark")}}>
                        <span><Image className="absolute left-0.5 top-0.5" src="/dark.png" height={20} width={20} /></span>
                        {/* Framer Motion */}
                        <motion.div className="w-5 h-5 bg-white rounded-full z-40" layout transition={spring}/>
                        
                        <span><Image className="absolute right-0.5 top-0.5" src="/light.png" height={20} width={20} /></span>
                    </div>
                )}
            </div>
        </header>
    )
}

export default NavbarIn