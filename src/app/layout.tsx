import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/Footer'

const inter = Poppins({
    subsets: ['latin'],
    weight: '400',
})

export const metadata: Metadata = {
    title: 'FBLA-GYM',
    description: 'App created for FBLA',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <NavBar />
                <main className="flex-1">{children}</main>
                <Footer />
                <Toaster closeButton className="bg-black" />
            </body>
        </html>
    )
}
