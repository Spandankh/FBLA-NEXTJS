import React, { useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { baseUrl } from '@/app/config'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { MdArrowBackIosNew } from 'react-icons/md'

export default async function Career({ params }: { params: { id: string } }) {
    const req = await fetch(`${baseUrl}/api/job/${params.id}`, {
        cache: 'no-store',
    })
    const res = await req.json()
    return (
        <div className="bg-gray-200 w-full h-screen">
            <MaxWidthWrapper className="py-20">
                <Link href="/career">
                    <div className="text-sm text-left flex items-center text-orange-400 font-semibold">
                        <MdArrowBackIosNew
                            className="inline-block mr-1"
                            color="orange"
                        />
                        Back to career
                    </div>
                </Link>
                <section className="my-5">
                    <h1 className="capitalize text-[#19224a] text-[30px] md:text-[45px] font-bold">
                        {res.jobName}
                    </h1>
                    <p className="pb-10">
                        {res.fullTime ? 'Full Time' : 'Part Time'}{' '}
                        {res.jobLocation}
                    </p>

                    <Button className="w-auto">Apply Now</Button>
                </section>

                <section className="my-[45px]">
                    <h1 className="font-bold underline pb-4">
                        Job Description
                    </h1>
                    <p className="tracking-tight pb-20">{res.jobDescription}</p>
                    <Button className="w-auto">Apply Now</Button>
                </section>
            </MaxWidthWrapper>
        </div>
    )
}
