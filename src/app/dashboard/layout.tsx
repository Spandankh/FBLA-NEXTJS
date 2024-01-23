'use client'
import React, { ReactNode } from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import { Toaster } from '@/components/ui/sonner'

interface Props {
    children?: ReactNode
}
const UserNavBar = ({ children }: Props) => {
    return (
        <>
            <main className="flex bg-slate-100">
                <Sidebar />
                {children}
                <Toaster closeButton className="bg-black" />
            </main>
        </>
    )
}

export default UserNavBar
