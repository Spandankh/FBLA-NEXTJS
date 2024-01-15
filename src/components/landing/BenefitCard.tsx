import FlexibleScheduleBenefit from '../../../public/images/FlexibleScheduleBenefit.svg'
import RetirementPlanBenefit from '../../../public/images/undraw_investing_re_bov7.svg'
import HealtCareBenefit from '../../../public/images/HealtCareBenefit.svg'
import PTOBenefit from '../../../public/images/PTOBenefit.svg'
import React from 'react'
import Image from 'next/image'

function FourCards() {
    return (
        <div className="flex flex-col justify-center items-center py-[60px]">
            <div className="max-w-[80%] w-[1400px] ">
                <div className="grid grid-cols-1 grid-rows-4 grid-flow-col gap-9 md:grid-cols-2 md:grid-rows-2 md:justify-items-stretch lg:grid-rows-3 lg:grid-cols-3 ">
                    <div className=" px-9 py-7 rounded-[1rem] lg:row-start-2 lg:col-end-2 bg-white border-t-4 border-blue-500 shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold ">
                                Paid Time Off
                            </h1>
                            <p className="text-[1rem] text-gray-800">
                                Take advantage of our generous paid time off
                                policies to relax and enjoy time with your
                                family.
                            </p>
                        </div>

                        <div className="flex justify-end pt-5">
                            <Image
                                src={PTOBenefit}
                                alt="Paid Time Off Benefits"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:col-start-2 bg-white shadow-2xl border-t-4 border-red-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold">
                                Health Insurance
                            </h1>
                            <p className="text-[1rem] text-gray-800">
                                We offer comprehensive health insurance plans
                                designed to meet your needs.
                            </p>
                        </div>

                        <div className="w-full md:max-w-[300px] flex justify-end pt-5">
                            <Image
                                src={HealtCareBenefit}
                                alt="Health Insurance Benefits"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:row-start-3 lg:col-start-2 bg-white shadow-2xl border-t-4 border-cyan-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.5rem] font-semibold">
                                Flexible Work
                            </h1>
                            <p className="text-[1rem] text-gray-800">
                                Enjoy flexibility in your work schedule to
                                achieve a better work-life balance.
                            </p>
                        </div>

                        <div className="w-full flex justify-end pt-5">
                            <Image
                                src={FlexibleScheduleBenefit}
                                alt="Flexible Work Schedule Benefits"
                            />
                        </div>
                    </div>

                    <div className="px-9 py-7 rounded-[1rem] lg:col-end-4 lg:row-start-2 bg-white shadow-2xl border-t-4 border-indigo-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-2 max-w-prose">
                            <h1 className="text-[1.5rem] font-semibold">
                                Retirement Plans
                            </h1>
                            <p className="text-[1rem] text-gray-800">
                                Plan your future with our diverse retirement
                                plans tailored for your financial goals. We
                                match 6%
                            </p>
                        </div>

                        <div className="w-full flex justify-end pt-5">
                            <Image
                                height={500}
                                src={RetirementPlanBenefit}
                                alt="Retirement Plan Benefits"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourCards
