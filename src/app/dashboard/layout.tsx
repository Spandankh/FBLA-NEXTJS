'use client'
import React from 'react'
import Link from 'next/link'
import { LayoutDashboard } from 'lucide-react'
import { usePathname } from 'next/navigation'

const UserNavBar = ({ children }) => {
    const pathname = usePathname()
    return (
        <div className="flex">
            <div className="w-[180px] h-screen bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col bg-white">
                    <p className="text-sm text-gray-600 pt-5 mx-3">
                        Main Menu{' '}
                    </p>

                    <Link href="/dashboard">
                        <div
                            className={
                                pathname == '/dashboard'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl mx-3'
                                    : 'bg-transparent hover:bg-violet-600'
                            }
                        >
                            <div className="my-4 p-3 rounded-lg flex items-center">
                                <LayoutDashboard className="w-* h-*" />
                                <p className="flex items-center justify-center text-[14px] px-5 ">
                                    Dashboard
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/dashboard/jobposter">
                        <div
                            className={
                                pathname == '/dashboard/jobposter'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl mx-3'
                                    : 'bg-transparent hover:bg-indigo-400 rounded-2xl mx-3'
                            }
                        >
                            <div className="my-4 p-3 rounded-lg flex items-center">
                                <LayoutDashboard className="w-* h-*" />
                                <p className="flex items-center justify-center text-[14px] px-5 ">
                                    Job Poster
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/dashboard/applications">
                        <div
                            className={
                                pathname == '/dashboard/applications'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl mx-3'
                                    : 'bg-transparent hover:bg-indigo-400 rounded-2xl mx-3'
                            }
                        >
                            <div className="my-4 p-3 rounded-lg flex items-center">
                                <LayoutDashboard className="w-* h-*" />
                                <p className="flex items-center justify-center text-[14px] px-5 ">
                                    Applications
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/dashboard">
                        <div
                            className={
                                pathname == '/'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl mx-3'
                                    : 'bg-transparent hover:bg-indigo-400 rounded-2xl mx-3'
                            }
                        >
                            <div className="my-4 p-3 rounded-lg flex items-center">
                                <LayoutDashboard className="w-* h-*" />
                                <p className="flex items-center justify-center text-[14px] px-5 ">
                                    Setting
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                p
            </div>
            <main className="grow">{children}</main>
        </div>
    )
}

export default UserNavBar
