import { Button } from '@/components/Button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { MdArrowBackIosNew } from 'react-icons/md'
import { getSingleJob } from '@/lib/jobs'

export const dynamic = 'force-dynamic'

export default async function Career({ params }: { params: { id: string } }) {
    const res = await getSingleJob(params.id)

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
                        {res?.jobName}
                    </h1>
                    <p className="pb-10">
                        {res?.fullTime ? 'Full Time' : 'Part Time'}{' '}
                        {res?.jobLocation}
                    </p>

                    <Button className="w-auto">Apply Now</Button>
                </section>

                <section className="my-[45px]">
                    <h1 className="font-bold underline pb-4">
                        Job Description
                    </h1>
                    <p className="tracking-tight pb-20">
                        {res?.jobDescription}
                    </p>
                    <Button className="w-auto">Apply Now</Button>
                </section>
            </MaxWidthWrapper>
        </div>
    )
}
