import Link from 'next/link'
import moment from 'moment-timezone'
import { ListReveal } from '@/components/Reveal'
import parse from 'html-react-parser'
import { getJobs } from '@/lib/jobs'

export const dynamic = 'force-dynamic'

export default async function JobList(){
    const res = await getJobs()
    return( <div className="py-5">
    <ListReveal>
        <div>
            <h1 className="pb-5 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What Are You Waiting For?
            </h1>
            <h1 className="pb-15 text-md text-center tracking-tight text-gray-900 sm:text-6xl">
                Current Job{' '}
                <Link href="/career" className="text-blue-600">
                    Openings
                </Link>
            </h1>
        </div>
    </ListReveal>
    <ListReveal>
        <div className="mx-auto mt-10 grid gap-3">
            {JSON.parse(res.toString())
                .slice(0, 3)
                .map(
                    (
                        item: {
                            jobDescription: string
                            id: string
                            jobName: string
                            fullTime: boolean
                            createdAt: string
                        },
                        index: string
                    ) => (
                        <div key={index} className=" flex justify-center overflow-hidden">
                            <li className="mx-2 my-4 flex h-auto  w-[700px] flex-col rounded-2xl border bg-white p-4 shadow-xl duration-300 hover:scale-105">
                                <Link href={`/career/job/${item.id}?status=RoleInfo`}>
                                    <div className="text-md text-left text-[16px] font-semibold uppercase">
                                        {item.jobName}{' '}
                                        <span className="font-semibold text-gray-700">
                                            {item.fullTime ? 'Full Time' : 'Part Time'}{' '}
                                        </span>
                                    </div>
                                    <div className="text-sm">
                                        Posted at: {''}
                                        {moment(item.createdAt).fromNow()}
                                    </div>
                                    <div className="tracking-light">
                                        <div className="line-clamp-3 py-2 text-left">
                                            {parse(item.jobDescription)}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    )
                )}
            <Link
                href="/career"
                className="mx-auto block max-w-[500px] items-center rounded-[1rem] bg-blue-500 p-4 text-white hover:bg-blue-600"
            >
                Explore More
            </Link>
        </div>
    </ListReveal>
</div>)
   
}