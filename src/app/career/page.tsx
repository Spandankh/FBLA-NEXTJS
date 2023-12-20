import { revalidatePath } from 'next/cache'
import React, { useState } from 'react'
import { baseUrl } from '@/app/config'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import RandomImage from '../../../public/images/GymTrainer.png'
import Link from 'next/link'
export default async function Career() {
    const req = await fetch(`${baseUrl}/api/job`, { cache: 'no-store' })
    const res = await req.json()

    return (
        <div className="bg-gray-100">
            <div className="">
                <div className="md:flex-row	flex-col items-center flex  justify-center pb-10">
                    <div className="p-5 justify-center md:w-1/3">
                        <div className=" text-[#19224a] text-4xl md:text-6xl font-bold pb-3">
                            Wario Careers
                        </div>
                        <div className="text-2xl mb-2">
                            At wario you feel life.......... .... At wario you
                            feel life.......... ....At wario you feel
                            life.......... ....At wario you feel life..........
                            ....
                        </div>
                    </div>

                    <Image
                        src={RandomImage}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="rounded-xl md:w-[650px] md:mt-20 p-4 md:p-1"
                    />
                </div>
            </div>
            <section className="">
                <MaxWidthWrapper className="my-5">
                    <div className="flex justify-center">
                        <h1 className="capitalize text-[#19224a] text-[40px] md:text-[54px] font-bold">
                            Explore Our Open Positions
                        </h1>
                    </div>

                    <section className="">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {res.map(
                                    (
                                        item: {
                                            jobDescription: string
                                            id: string
                                            jobName: string
                                            fullTime: boolean
                                            createdAt: string
                                        },
                                        index: React.Key | null | undefined
                                    ) => (
                                        <div
                                            key={index}
                                            className="bg-white w-[280px] h-[250px] px-4 py-6 shadow-lg rounded-2xl transform transition duration-500 hover:scale-110"
                                        >
                                            <Link
                                                href={`/career/job/${item.id}`}
                                            >
                                                <div className="text-left text-md uppercase text-[20px] font-semibold">
                                                    {item.jobName}
                                                </div>
                                                <div className="tracking-light">
                                                    <p className="text-left py-2 line-clamp-5 ">
                                                        {item.jobDescription}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                </MaxWidthWrapper>
            </section>
        </div>
    )
}
