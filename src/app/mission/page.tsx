'use client'

import Image from 'next/image'
import { useState } from 'react'
import wavyline from '../../../public/images/samuel-girven-fqMu99l8sqo-unsplash.jpg'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import Tab from './tab'
import rocket from '../../../public/images/rocket.png'

export default function Mission() {
    return (
        <>
            <section className="mb-10">
                <div className=" relative h-[45vh] overflow-hidden ">
                    <div className="">
                        <Image
                            alt="Mountains"
                            src={wavyline}
                            placeholder="blur"
                            quality={100}
                            fill
                            className="brightness-50"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden hidden md:block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                className=""
                            >
                                <path
                                    fill="#ffffff"
                                    className="  "
                                    fillOpacity="1"
                                    strokeWidth="4"
                                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <MaxWidthWrapper>
                        <div className="relative md:text-center flex flex-col justify-center mt-10 my-20 md:items-baseline md:mt-20">
                            <h1 className="text-[38px] md:text-[54px] text-white font-bold">
                                About Wario
                            </h1>
                            <p className="md:text-[24px] text-white font-semibold tracking-light ">
                                RANDOM TEXTRANDOM TEXTRANDOM TEXTRANDOM
                                TEXTRANDOM
                            </p>
                            <Link
                                href="/career"
                                className="bg-blue-500 text-white mt-10 p-5 max-w-[230px] justify-center flex md:w-1/6 rounded-[.5rem] hover:bg-blue-600"
                            >
                                See Open Position
                            </Link>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </section>
            <section className="mt-10">
                <div className="mx-auto px-2.5 md:ml-52">
                    <div className="pb-5 grid md:grid-cols-2 md: gap-2">
                        <div className="md:ml-20">
                            <h1 className="text-[#19224a] text-5xl font-bold pb-3">
                                Who we are
                            </h1>
                            <p className="mb-16 text-[24px] leading-8	">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur rem eligendi
                                tempore quisquam vitae autem ipsa doloribus
                                minima amet, nemo dolore ipsum, accusantium
                                repellat soluta dolor deleniti mollitia aut
                                delectus!
                            </p>
                            <p className="pb-2 text-[24px] leading-8">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eaque saepe expedita iure
                                vitae ipsum et, quae unde magni id error ab, in
                                exercitationem, rerum dolor nam iusto vel. Nam,
                                dignissimos.
                            </p>
                        </div>

                        <div className="md:ml-52">
                            <p className="font-bold text-blue-700 text-[32px] md:text-[42px]">
                                100+
                            </p>
                            <p className="text-16px md:text-[24px] text-blue-950 font-bold mb-5">
                                100+ Postive Reviews
                            </p>
                            <p className="font-bold text-blue-700 text-[32px] md:text-[42px]">
                                100+
                            </p>
                            <p className="text-16px md:text-[24px] text-blue-950 font-bold mb-5">
                                100+ Customers Helped
                            </p>
                            <p className="font-bold text-blue-700 text-[32px] md:text-[42px]">
                                50+
                            </p>
                            <p className="text-16px md:text-[24px] text-blue-950 font-bold mb-5">
                                50+ Trainers
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <svg
                    className="h-24 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        className="text-[#F3F3F3] fill-current"
                        fill-opacity="0.99"
                        d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>

                <div className="bg-[#F3F3F3] py-10">
                    <div className="text-center">
                        <h1 className="text-[#19224a]  text-5xl font-bold pb-5">
                            Where We Came From
                        </h1>
                        <p className="text-2xl">Some more Random Text Woooo!</p>
                    </div>

                    <div className="container flex justify-center items-center bg-white rounded-[2rem] shadow-2xl my-4">
                        <Tab />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        className="text-[#F3F3F3] fill-current"
                        fill-opacity="1"
                        d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,101.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </section>

            <section className="">
                <div className="">
                    <div className="text-center  ">
                        <h1 className="text-[#19224a] text-5xl font-bold pb-5">
                            Our Core Values
                        </h1>
                        <p className="text-2xl pb-5">
                            Some more Random Text Woooo Some more Random Text
                            Woooo!
                        </p>
                    </div>

                    <div className="container px-5 py-10 mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-tr from-sky-400 to-sky-200 max-w-[400px] h-[450px] pt-10 px-10 py-6 shadow-lg rounded-2xl transform transition duration-500 hover:scale-110">
                                <div className="text-left text-[30px] uppercase px-5 pb-3 font-bold">
                                    Integrity
                                </div>
                                <div className="tracking-light">
                                    <p className="text-left text-[20px] px-5 line-clamp-5 ">
                                        We conduct ourselves with honesty,
                                        transparency, and ethical behavior in
                                        everything we do.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-tr from-sky-400 to-sky-200 max-w-[400px] h-[450px] pt-10 px-10 py-6 shadow-lg rounded-2xl transform transition duration-500 hover:scale-110">
                                <div className="text-left text-[30px] uppercase px-5 pb-3 font-bold">
                                    Integrity
                                </div>
                                <div className="tracking-light">
                                    <p className="text-left text-[20px] px-5 line-clamp-5 ">
                                        We conduct ourselves with honesty,
                                        transparency, and ethical behavior in
                                        everything we do.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-tr from-sky-400 to-sky-200 max-w-[400px] h-[450px] pt-10 px-10 py-6 shadow-lg rounded-2xl border-solid border-4  border-sky-500  transform transition duration-500 hover:scale-110">
                                <div className="text-left text-[30px] uppercase px-5 pb-3 font-bold">
                                    Integrity
                                </div>
                                <div className="tracking-light">
                                    <p className="text-left text-[20px] px-5 line-clamp-5 ">
                                        We conduct ourselves with honesty,
                                        transparency, and ethical behavior in
                                        everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
