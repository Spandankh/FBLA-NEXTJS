'use'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, ChevronRight, Contact2, FilePlus2, LayoutDashboard, MonitorCheck } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

const navItems = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: LayoutDashboard
	},
	{
		title: 'Job Poster',
		href: '/dashboard/jobposter',
		icon: FilePlus2
	},
	{
		title: 'Applications',
		href: '/dashboard/application',
		icon: Book
	},
	{
		title: 'Active Jobs',
		href: '/dashboard/jobs',
		icon: MonitorCheck
	},
	{
		title: 'Contacts',
		href: '/dashboard/contacts',
		icon: Contact2
	}
]

export default function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
	const path = usePathname()
	const [isOpen, setIsOpen] = useState(true)
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
		console.log(isOpen)
	}

	return (
		<div className={cn(' relative border bg-white pb-12', className)}>
			<div
				className={
					isOpen
						? 'max-w-[200px] space-y-4 py-4 text-lg duration-500 ease-in-out md:flex md:text-xl'
						: 'max-w-[75px] duration-500 ease-in-out md:max-w-[100px]'
				}
			>
				<div className="w-full py-2">
					<div className="space-y-8 p-2">
						{navItems?.map((nav, index) => (
							<Button
								asChild
								key={index}
								className={cn(
									'm-auto w-auto justify-start rounded-[1rem] bg-slate-300 p-3 font-normal',
									path === nav.href
										? ' font-bold hover:bg-slate-400'
										: ' bg-transparent hover:bg-slate-400'
								)}
							>
								<Link href={nav.href}>
									<nav.icon />
									<div
										className={
											isOpen ? 'duration-500 ease-in-out' : 'hidden duration-500 ease-in-out'
										}
									>
										{nav.title}
									</div>
								</Link>
							</Button>
						))}
					</div>
				</div>
			</div>
			<Button
				asChild
				onClick={toggleSidebar}
				className="absolute -right-4 h-auto w-auto rounded-full bg-blue-500 p-2 text-white hover:bg-blue-800"
			>
				<ChevronRight className=" " />
			</Button>
		</div>
	)
}
