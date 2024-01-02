import Image from 'next/image'
import { getSingleJob } from '@/lib/jobs'
import Link from 'next/link'
import { ListReveal } from '@/components/Reveal'
import Apply from '../../apply'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import jobDescription from '@/components/career/JobDescr'
import BenefitSvg from '../../../../../public/images/undraw_personal_trainer_re_cnua.svg'
import CoreValueSvg from '../../../../../public/images/fitness-outline-99e3e.svg'

import { Button } from '@/components/ui/button'

export default async function Career({ params }: { params: { id: string } }) {
    const JobPostedAgo = (timeStamp: string) => {
        const postedDate = new Date(timeStamp)
        const currentDate = new Date()
        const differenceInMs = currentDate.getTime() - postedDate.getTime()
        const differenceInDays = Math.floor(
            differenceInMs / (1000 * 60 * 60 * 24)
        )
        return differenceInDays
    }
    const res = await getSingleJob(params.id)
    return (
        <div className="bg-gradient-to-br from-[#faf0e6bf] to-[#e6f0fabf] min-h-screen min-w-screen">
            <div className="max-w-[1240px] mx-auto">
                <section className="pt-5 md:pt-10 flex flex-col justify-center">
                    <h1 className="text-[48px] font-bold capitalize">
                        {res?.jobName}
                    </h1>
                    <div className="">
                        <p className="pt-2 pb-2 text-[15px]">
                            Job posted{' '}
                            {JobPostedAgo(res!.createdAt.toISOString())} days
                            ago
                        </p>
                    </div>
                    <Separator className="bg-black" />
                </section>

                <Tabs defaultValue="RoleInfo">
                    <TabsList className="grid w-full h-full grid-cols-2 bg-gray-200 mx-auto mb-5">
                        <TabsTrigger
                            value="RoleInfo"
                            className="text-[20px]  data-[state=active]:bg-white rounded-[10px]"
                        >
                            Role Info
                        </TabsTrigger>
                        <TabsTrigger
                            value="Application"
                            className="text-[20px] data-[state=active]:bg-white rounded-[10px]"
                        >
                            Application
                        </TabsTrigger>
                    </TabsList>

                    <Separator className="" />
                    <div className="flex flex-col md:flex-row md:justify-end">
                        <div className="flex-1">
                            <TabsContent value="RoleInfo">
                                <div className="">
                                    {jobDescription(res!.jobDescription)}
                                </div>
                            </TabsContent>
                            <TabsContent value="Application" className="grow">
                                <div className="mx-5 my-5">
                                    <Apply
                                        jobId={params.id}
                                        jobName={res!.jobName}
                                    ></Apply>
                                </div>
                            </TabsContent>
                        </div>
                        <div className="max-w-[400px] min-w-[350px] mx-auto">
                            <div className="bg-gradient-to-br from-[#4b57db] from-10% to-[#2d91c6] p-5 rounded-xl mx-auto my-auto">
                                <h1 className="text-[2rem] font-semibold text-white ">
                                    Our Core Value
                                </h1>
                                <p className="text-[1rem]   text-white">
                                    Random Random Random Random Random Random
                                </p>
                                <div className="flex justify-center">
                                    <Image
                                        src={BenefitSvg}
                                        width={250}
                                        height={250}
                                        alt="Benefits"
                                    />
                                </div>
                                <Button
                                    asChild
                                    className="flex justify-center bg-blue-400 text-white rounded-xl hover:bg-blue-700"
                                >
                                    <Link
                                        href="/mission"
                                        className="text-[2rem]"
                                    >
                                        Learn More About Us
                                    </Link>
                                </Button>
                            </div>
                            <div className="bg-gradient-to-br from-[#4b57db] to-[#4383d2] p-5 rounded-xl mx-auto my-5">
                                <h1 className="text-[2rem] font-semibold text-white ">
                                    Our Core Value
                                </h1>
                                <p className="text-[1rem] text-white">
                                    Random Random Random Random Random Random
                                </p>
                                <div className="flex justify-center pt-2">
                                    <Image
                                        src={CoreValueSvg}
                                        width={250}
                                        height={250}
                                        alt="Benefits"
                                    />
                                </div>
                                <Button
                                    asChild
                                    className="flex justify-center bg-blue-400 text-white rounded-xl hover:bg-blue-700"
                                >
                                    <Link
                                        href="/mission"
                                        className="text-[2rem]"
                                    >
                                        Learn More About Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}
