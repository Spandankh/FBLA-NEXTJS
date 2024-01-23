import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Card } from './ui/card'

export default function Footer() {
    return (
        <div className="min-w-screen bg-[#1e1e1e] h-auto text-white mt-3">
            <div className="flex justify-center">
                <div className="w-full mx-auto">
                    <div className="grid md:grid-cols-2 uppercase font-semibold p-5 md:p-10 items-center mx-auto justify-center">
                        <div className="grid grid-cols-1 mx-auto justify-between h-full">
                            <Link href="/" className="pb-3">
                                Home
                            </Link>
                            <Link href="/about" className="pb-3">
                                About
                            </Link>
                            <Link href="/careers" className="pb-3">
                                Careers
                            </Link>
                            <Link href="/dashboard" className="">
                                DashBoard
                            </Link>
                        </div>
                        <div>
                            <h1>Get in touch with us!</h1>
                            <Card>
                                <h1>CONTACT</h1>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
