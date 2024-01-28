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
		icon: LayoutDashboard,
		label: 'Dashboard'
	},
	{
		title: 'Job Poster',
		href: '/dashboard/jobposter',
		icon: FilePlus2,
		label: 'jobposter'
	},
	{
		title: 'Applications',
		href: '/dashboard/application',
		icon: Book,
		label: 'applications'
	},
	{
		title: 'Active Jobs',
		href: '/dashboard/jobs',
		icon: MonitorCheck,
		label: 'profile'
	},
	{
		title: 'Contracts',
		href: '/dashboard/contracts',
		icon: Contact2,
		label: 'Contracts'
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
		<div className={cn(' relative pb-12 bg-white border', className)}>
			<div
				className={
					isOpen
						? 'space-y-4 py-4 max-w-[150px] md:flex ease-in-out duration-500'
						: 'max-w-[75px] md:max-w-[100px] ease-in-out duration-500'
				}
			>
				<div className="py-2">
					<div className="space-y-8 p-2">
						{navItems?.map((nav, index) => (
							<Button
								asChild
								key={index}
								className={cn(
									'w-auto justify-start font-normal rounded-[1rem] bg-slate-300 p-3 m-auto',
									path === nav.href ? ' font-bold hover:bg-slate-400' : ' bg-transparent hover:bg-slate-400'
								)}
							>
								<Link href={nav.href}>
									<nav.icon />
									<div
										className={
											isOpen ? 'ease-in-out duration-500' : 'hidden ease-in-out duration-500'
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
				className="absolute -right-4 bg-blue-500 rounded-full p-2 w-auto h-auto text-white hover:bg-blue-800"
			>
				<ChevronRight className=" " />
			</Button>
		</div>
	)
}
