import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import CareerLanding from '../../../public/images/CareerLandingHero.jpg'
import Link from 'next/link'
import { getJobs } from '@/lib/jobs'
import parse from 'html-react-parser'
import { Briefcase, MapPin } from 'lucide-react'

export default async function Career() {
    const res = await getJobs()
    return (
        <div className="bg-gray-50">
            <div className="">
                <div className="md:flex-row	flex-col items-center flex  justify-center pb-10">
                    <div className="p-5 justify-center md:w-1/3">
                        <div className=" text-black text-4xl md:text-[40px] pb-3 text-center">
                            Wario Careers
                        </div>
                        <p
                            className="text-2xl md:text-[56px] text-center text-pretty leading-[64px] font-bold
"
                        >
                            Makes your works days brighter
                        </p>
                    </div>

                    <Image
                        src={CareerLanding}
                        alt="Career Landing"
                        width={950}
                        height={563}
                        className="rounded-xl mx-2 my-2 md:w-[950px] md:mt-20"
                    />
                </div>
            </div>
            <section className="">
                <div className="flex justify-center">
                    <h1 className="capitalize text-[#19224a] text-[40px] mb-3 md:text-[54px] font-bold">
                        Explore Our Open Positions
                    </h1>
                </div>
                <section className="">
                    <div className="flex justify-center">
                        <div className="grid gap-4  grid-cols-1 md:grid-cols-3 items-center mx-auto">
                            {JSON.parse(res).map(
                                (item: {
                                    id: string
                                    jobName: string
                                    jobDescription: string
                                    fullTime: boolean
                                }) => (
                                    <Link
                                        href={`career/job/${item.id}`}
                                        key={item.id}
                                        className="bg-white md:w-[500px] h-[300px] px-4 py-6 shadow-lg rounded-2xl transform transition duration-500 hover:scale-110 border border-black"
                                    >
                                        <div>
                                            <div className="text-left text-md uppercase text-[20px] font-semibold underline underline-offset-1">
                                                {item.jobName}
                                            </div>
                                            <div>
                                                <div className="flex pt-5">
                                                    <div className="flex items-center mr-5">
                                                        <Briefcase className="mr-2" />
                                                        <div>
                                                            <p>Role</p>
                                                            <h1 className="font-bold text-lg">
                                                                {item.fullTime ||
                                                                item.fullTime ===
                                                                    null
                                                                    ? 'Full Time'
                                                                    : 'Part Time'}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <MapPin className="mr-2" />
                                                        <div>
                                                            <p>Location</p>
                                                            <h1 className="font-bold text-lg">
                                                                Manassas Park,
                                                                VA
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tracking-light">
                                                <div className="text-left py-2 line-clamp-5">
                                                    {parse(item.jobDescription)}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
