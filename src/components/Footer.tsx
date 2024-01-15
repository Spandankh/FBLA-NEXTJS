import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Card } from './ui/card'

export default function Footer() {
    return (
        <div className="min-w-screen bg-[#1e1e1e] h-auto text-white">
            <div className="flex justify-center">
                <div className="w-full mx-auto">
                    <div className="grid md:grid-cols-2 uppercase font-semibold p-5 md:p-10 items-center mx-auto justify-center">
                        <div className="grid grid-cols-1 mx-auto justify-between h-full">
                            <Link href={''} className="pb-6 hover:underline">
                                Home
                            </Link>
                            <Link href={''} className="pb-6 hover:underline">
                                About
                            </Link>
                            <Link href={''} className="pb-6 hover:underline">
                                Careers
                            </Link>
                            <Link href={''} className="pb-6 hover:underline">
                                DashBoard
                            </Link>
                        </div>
                        <div>
                            <Card className="w-full max-w-md bg-white text-black p-7 rounded-[7px]">
                                <form className="grid gap-6">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                        Contact Us
                                    </h1>
                                    <div className="grid gap-2">
                                        <Label>Your Name</Label>
                                        <Input
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Enter email</Label>
                                        <Input
                                            placeholder="john@example.com"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Your Message</Label>
                                        <Textarea
                                            className="h-24"
                                            placeholder="Your message..."
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <Button
                                            type="submit"
                                            className="bg-blue-500 text-white block items-center rounded-[1rem] hover:bg-blue-600"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
