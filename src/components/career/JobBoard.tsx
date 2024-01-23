import { getJobs } from '@/lib/jobs'
import parse from 'html-react-parser'
import Image from 'next/image'
import CareerLanding from '../../../public/images/CareerLandingHero.jpg'
import { Button } from '../ui/button'
import Link from 'next/link'
export const dynamic = 'force-dynamic'

export default async function JobBoard() {
    const res = await getJobs()

    return (
        <div className=" md:container">
            <div className="grid grid-rows-1 gap-4 justify-center p-5 md:p-10">
                {JSON.parse(res).map(
                    (item: {
                        id: string
                        jobName: string
                        jobDescription: string
                        jobLocation: string
                        fullTime: boolean
                        requireResume: boolean
                        questions: { question: string }[]
                    }) => (
                        <div key={item.id} className="">
                            <div className="border shadow-xl p-4 md:p-6 rounded-2xl transform transition duration-500 hover:scale-110">
                                <div className="flex grow gap-5">
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="max-w-prose">
                                            <div>
                                                <h1 className=" font-bold text-lg md:text-1xl">
                                                    {item.jobName}
                                                </h1>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="mr-5">
                                                    {item.fullTime
                                                        ? 'Full Time'
                                                        : 'Part Time'}
                                                </p>
                                                <p className="">
                                                    Manassas Park, VA
                                                </p>
                                            </div>

                                            <div className="line-clamp-4 md:line-clamp-2 pt-4 text-gray-700 text-xs md:text-sm">
                                                {parse(item.jobDescription)}
                                            </div>
                                        </div>
                                        <div className="">
                                            <Button
                                                asChild
                                                className="bg-blue-500 text-white px-4 py-2 rounded-[10px] mr-2 hover:bg-blue-800"
                                            >
                                                <Link
                                                    href={{
                                                        pathname: `career/job/${item.id}`,
                                                        query: {
                                                            status: 'Application',
                                                        },
                                                    }}
                                                >
                                                    Apply Now
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                className="bg-green-500 text-white px-4 py-2 rounded-[10px] text-sm md:text-base hover:bg-green-800"
                                            >
                                                <Link
                                                    href={{
                                                        pathname: `career/job/${item.id}`,
                                                        query: {
                                                            status: 'RoleInfo',
                                                        },
                                                    }}
                                                >
                                                    View
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block h-1/4 w-[250px] flex justify-end ml-auto">
                                        <Image
                                            alt=""
                                            src={CareerLanding}
                                            placeholder="blur"
                                            quality={1}
                                            priority={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
