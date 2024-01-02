import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Book,
    Contact2,
    FilePlus2,
    LayoutDashboard,
    MonitorCheck,
} from 'lucide-react'

const navItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        label: 'Dashboard',
    },
    {
        title: 'Job Poster',
        href: '/dashboard/jobposter',
        icon: FilePlus2,
        label: 'jobposter',
    },
    {
        title: 'Applications',
        href: '/dashboard/application',
        icon: Book,
        label: 'applications',
    },
    {
        title: 'Active Jobs',
        href: '/dashboard/jobs',
        icon: MonitorCheck,
        label: 'profile',
    },
    {
        title: 'Contracts',
        href: '/dashboard/contracts',
        icon: Contact2,
        label: 'Contracts',
    },
]

export default function Sidebar({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const path = usePathname()

    return (
        <div className="p-6 w-1/2 h-screen bg-white top-0 md:w-60 border-r border-black">
            <div className="">
                <h1 className="text-center text-[20px] font-bold border-b mb-2">
                    Dashboard
                </h1>
                <div className="flex flex-col justify-start item-center">
                    <nav className="my-4 border-b border-gray-100 pb-">
                        {navItems.map((item, index) => {
                            return (
                                item.href && (
                                    <Link key={index} href={item.href}>
                                        <li
                                            className={cn(
                                                'relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer transition-colors rounded-[1rem] mb-5',
                                                path === item.href
                                                    ? 'bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 text-gray-800'
                                                    : ' hover:bg-gray-800 hover:text-white'
                                            )}
                                        >
                                            <div className=" flex justify-start">
                                                <item.icon className="mx-5" />
                                                <h3 className="text-base font-semibold  ">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}
