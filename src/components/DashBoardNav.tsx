import React from 'react'
import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const UserNavBar = () => {
    return (
        <div className="flex">
            <div className="w-auto h-screen p-4 bg-gray-300 border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center group w-93.5 h-28">
                    <Link href="/dashboard">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center relative group">
                            <RxDashboard size={20} />
                            <p className="hidden top-0 left-0 w-[93.5px] h-[28px] flex items-center justify-center font-semibold text-lg group-hover:flex">
                                Dashboard
                            </p>
                        </div>
                    </Link>
                    <Link href="/dashboard/applications">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center relative group">
                            <RxPerson size={20} />
                            <p className="hidden top-0 left-0 full w-[93.5px] h-[28px] flex items-center justify-center font-semibold text-lg group-hover:flex">
                                Applcations
                            </p>
                        </div>
                    </Link>
                    <Link href="/dashboard/jobposter">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center relative group">
                            <RxPerson size={20} />
                            <p className="hidden top-0 left-0 full w-[93.5px] h-[28px] flex items-center justify-center font-semibold text-lg group-hover:flex">
                                Job Poster
                            </p>
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex items-center relative group">
                            <RxPerson size={20} />
                            <p className="hidden top-0 left-0 full w-[93.5px] h-[28px] flex items-center justify-center font-semibold text-lg group-hover:flex">
                                Setting
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserNavBar
