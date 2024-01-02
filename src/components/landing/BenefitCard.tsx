import TeamBuilder from '../../../public/images/TimeOffpng.png'
import Calculator from '../../../public/images/TimeOffpng.png'
import Supervisor from '../../../public/images/TimeOffpng.png'
import Karma from '../../../public/images/TimeOffpng.png'
import React from 'react'
import Image from 'next/image'

function FourCards() {
    return (
        <div className="flex flex-col justify-center items-center py-[60px]">
            <div className="max-w-[80%] w-[1400px]">
                <div className=" grid grid-cols-1 grid-rows-4 grid-flow-col gap-9 md:grid-cols-2 md:grid-rows-2 md:justify-items-stretch lg:grid-rows-3 lg:grid-cols-3 ">
                    <div className="px-9 py-7 rounded-[1rem] lg:row-start-2 lg:col-end-2 bg-white border-t-4 border-blue-500 shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold ">
                                Title
                            </h1>
                            <p className="text-[1rem] text-gray-400">
                                Random Random Random Random Random Random
                            </p>
                        </div>

                        <div className="flex justify-end pt-5">
                            <Image
                                src={Supervisor}
                                width={70}
                                height={70}
                                alt="Supervisor"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:col-start-2 bg-white shadow-2xl border-t-4 border-red-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold">
                                Title
                            </h1>
                            <p className="text-[1rem] text-gray-400">
                                Random Random Random Random Random Random
                            </p>
                        </div>

                        <div className="w-full flex justify-end pt-5">
                            <Image
                                src={TeamBuilder}
                                width={70}
                                height={70}
                                alt="Team Builder"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:row-start-3 lg:col-start-2 bg-white shadow-2xl border-t-4 border-cyan-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="contentHeader flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold">
                                Title
                            </h1>
                            <p className="text-[1rem] text-gray-400">
                                Random Random Random Random Random Random
                            </p>
                        </div>

                        <div className="w-full flex justify-end pt-5">
                            <Image
                                src={Karma}
                                width={70}
                                height={70}
                                alt="Karma"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:col-end-4 lg:row-start-2 bg-white shadow-2xl border-t-4 border-indigo-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="contentHeader flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold">
                                Title
                            </h1>
                            <p className="text-[1rem] text-gray-400">
                                Random Random Random Random Random Random
                            </p>
                        </div>

                        <div className="w-full flex justify-end pt-5">
                            <Image
                                src={Calculator}
                                width={70}
                                height={70}
                                alt="Calculator"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourCards
