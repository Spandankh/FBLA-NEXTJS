'use client'
import React, { ReactNode } from 'react'
import Sidebar from '@/components/dashboard/sidebar'

interface Props {
    children?: ReactNode
}
const UserNavBar = ({ children }: Props) => {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar className="" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto ">
                    {children}
                </main>
            </div>
        </>
    )
}

export default UserNavBar
