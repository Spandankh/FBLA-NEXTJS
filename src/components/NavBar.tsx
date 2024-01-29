'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'
import { Button } from './ui/button'

const NavBar = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<nav className="border-white-1 font-equinox-sans left-0 top-0 z-30 mx-auto flex h-auto   w-full items-center justify-between bg-[#171717] text-[#f2f2f2]">
			<h1 className="w-full px-4 text-3xl font-bold">WARIO</h1>
			<ul className="mr-auto hidden uppercase md:flex">
				<Link className="p-4" href="/">
					Home
				</Link>
				<Link className="p-4" href="/about">
					About
				</Link>
				<Link className="p-4" href="/career">
					Careers
				</Link>
				<Link className="p-4" href="/contact">
					Contact
				</Link>
				<Link className="p-4" href="/dashboard">
					DashBoard
				</Link>
			</ul>
			{/*SMALLER NAV BAR */}
			<div className="flex flex-col justify-end md:hidden" onClick={handleNav}>
				{!nav ? <AiOutlineMenu size={20} /> : ''}
			</div>

			<Sheet open={nav} onOpenChange={setNav}>
				<SheetContent className="h-full w-[60%] border-r border-r-gray-900 bg-[#000300] text-white" side="left">
					<SheetHeader>
						<SheetTitle className="w-full p-4 text-3xl font-bold">WARIO</SheetTitle>
						<SheetDescription>
							<ul className="uppercase ">
								<li className="border-b border-gray-600 p-4">
									<Link href="/">Home</Link>
								</li>
								<li className="border-b border-gray-600 p-4 ">
									<Link href="/about"> About Us</Link>
								</li>
								<li className="border-b border-gray-600 p-4">
									<Link href="/career">CAREERS</Link>
								</li>
								<li className="border-b border-gray-600 p-4">
									<Link href="/dashboard">DASHBOARD</Link>
								</li>
								<li className="border-b border-gray-600 p-4">
									<Link href="/Contact">Contact</Link>
								</li>
							</ul>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>

			{/* <div
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
                    <li className="p-4 border-b border-gray-600 ">
                        <Link href="/about"> About Us</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/career">CAREERS</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link href="/dashboard">dashboard</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600"> Settings</li>
                </ul>
            </div> */}
		</nav>
	)
}

export default NavBar
