'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="sticky top-0 z-10 bg-whitemax-w-auto bg-[#171717] mx-auto h-auto flex items-center justify-between text-white font-equinox-sans">
            <h1 className="w-full text-3xl font-bold px-4">WARIO</h1>
            <ul className="hidden md:flex mr-auto uppercase">
                <Link className="p-4" href="/">
                    Home
                </Link>
                <Link className="p-4" href="/mission">
                    Mission
                </Link>
                <Link className="p-4" href="/career">
                    Careers
                </Link>
                <Link className="p-4" href="/contract">
                    Contract
                </Link>
                <Link className="p-4" href="/dashboard">
                    DashBoard
                </Link>
            </ul>
            {/*SMALLER NAV BAR */}
            <div
                className="flex flex-col md:hidden justify-end"
                onClick={handleNav}
            >
                {!nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                }
            >
                <h1 className="w-full text-3xl font-bold m-4 ">WARIO</h1>
                <ul className="pt-24 uppercase">
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/home">HOME</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/mission">MISSION</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/career">CAREERS</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/contract">CONTRACT</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600"> Settings</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar