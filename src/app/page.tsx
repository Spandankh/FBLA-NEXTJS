import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import moment from 'moment-timezone'
import { baseUrl } from '@/app/config'
import RandomImage from '../../public/images/GymTrainer.png'
import heroimage from '../../public/images/gym.jpg'
import { Key } from 'react'
import { getJobs } from '@/lib/jobs'
import { Job } from '@/lib/type'
const benefits = [
    {
        name: 'benefit 1',
        Icon: CheckCircle,
        description:
            'RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT',
    },
    {
        name: 'benefit 2',
        Icon: CheckCircle,
        description:
            'RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT',
    },
    {
        name: 'benefit 3',
        Icon: CheckCircle,
        description: 'Random gym benefit here!! Fbla!!',
    },
    {
        name: 'benefit 4',
        Icon: CheckCircle,
        description:
            'RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT',
    },
    {
        name: 'benefit 5',
        Icon: CheckCircle,
        description:
            'RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT',
    },
    {
        name: 'benefit 6',
        Icon: CheckCircle,
        description:
            'RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT',
    },
]

export default async function Home() {
    const res = await getJobs()
    return (
        <>
            <section>
                <div className="relative h-[70vh] overflow-hidden">
                    <Image
                        alt=""
                        src={heroimage}
                        placeholder="blur"
                        quality={100}
                        fill
                        className="brightness-50"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="text-white font-anton">
                        <div className="relative h-[50vh] md:text-center flex flex-col justify-center mt-10 my-20">
                            <h1 className="text-[50px] md:text-[100px] font-bold md:py-6 ">
                                TEXT TEXT TEXT TEXT
                                <span className="text-blue-600"> TEXT</span>
                                <div className="flex justify-center">
                                    <Link
                                        href="/career"
                                        className="inline-block text-[20px] bg-blue-500 text-white font-style: normal py-5 px-5 max-w-[230px] max-h-auto uppercase rounded-[2rem] "
                                    >
                                        EXPLORE CAREERS
                                    </Link>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t">
                <div className="">
                    <div className="md:flex-row-reverse	flex-col items-center flex  justify-center pb-10 md:pt-10">
                        <div className="p-5 justify-center md:w-1/3">
                            <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl  font-bold pb-10">
                                RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM
                            </div>
                            <div className="text-2xl mb-8">
                                RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM
                                TEXTRANDOM TEXTRANDOM TEXT RANDOM TEXTRANDOM
                                TEXTRANDOM TEXTRANDOM TEXT
                            </div>
                            <Link
                                href="/mission"
                                className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-[1rem] hover:bg-blue-600"
                            >
                                Learn More About Us
                            </Link>
                        </div>

                        <Image
                            src={RandomImage}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className="rounded-xl md:w-2/5 p-4 md:p-0"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="">
                    <div className="md:flex-row flex-col items-center flex  justify-center pb-10">
                        <div className="p-5 justify-center md:w-1/3">
                            <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl  font-bold pb-10">
                                RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM
                            </div>
                            <div className="text-2xl mb-8">
                                RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM
                                TEXTRANDOM TEXTRANDOM TEXT RANDOM TEXTRANDOM
                                TEXTRANDOM TEXTRANDOM TEXT
                            </div>
                            <Link
                                href="/career"
                                className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-[1rem] hover:bg-blue-600"
                            >
                                Get Started
                            </Link>
                        </div>

                        <Image
                            src={RandomImage}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className="rounded-xl md:w-2/5 p-4 md:p-0"
                        />
                    </div>
                </div>
            </section>
            <section className="">
                <h1 className="pb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                    Our <span className="text-blue-600"> Benefit</span>
                </h1>

                <div className="grid grid-col-1 md:grid-cols-3 gap-4 md:px-40">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex-col space-y-6 pb-10 border p-8 rounded-[1rem] items-center justify-center w-full hover:scale-105 transform transition-all duration-300 ease-in-out"
                        >
                            <div className="text-gray-500 text-lg font-bold">
                                {<benefit.Icon />}
                            </div>
                            <div>
                                <div className="text-2xl pb-4 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent capitalize">
                                    {benefit.name}
                                </div>
                                <div className="text-2xl pb-4 bg-gradient-to-r from-gray-800 to-slate-300 bg-clip-text text-transparent capitalize">
                                    {benefit.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*Job Postions*/}
            <section className="border-gray-200 bg-gray-50 pt-10">
                <div className="py-5">
                    <h1 className="pb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                        What Are You Waiting For?{' '}
                    </h1>
                    <h1 className="pb-15 text-md tracking-tight text-gray-900 sm:text-6xl text-center">
                        Current Job
                        <span className="text-blue-600">Openings </span>
                    </h1>

                    <div className="mx-auto grid gap-3 mt-10">
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
                                    <Link
                                        href={`/career/job/${item.id}`}
                                        key={index}
                                        className=" flex justify-center overflow-hidden"
                                    >
                                        <li className="w-[700px] h-auto shadow-lg  flex flex-col p-4 my-4 hover:scale-105 rounded-2xl duration-300 bg-white">
                                            <div className="text-left text-md uppercase text-[16px] font-semibold">
                                                {item.jobName}{' '}
                                                <span className="text-gray-700 font-light">
                                                    {item.fullTime
                                                        ? 'Full Time'
                                                        : 'Part Time'}{' '}
                                                </span>
                                            </div>
                                            <div className="text-sm">
                                                Posted at: {''}
                                                {moment(item.createdAt)
                                                    .tz('America/New_York')
                                                    .format(
                                                        'MMM-DD-YYYY h:mm A'
                                                    )}
                                            </div>
                                            <div className="tracking-light">
                                                <p className="text-left py-2 line-clamp-3">
                                                    {item.jobDescription}
                                                </p>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}
