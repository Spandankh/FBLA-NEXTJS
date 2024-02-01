import Link from 'next/link'
import Image from 'next/image'

import moment from 'moment-timezone'
import AboutUsJpg from '../../public/images/fitness-gym-friend-having-fun-with-gym-team-work-togetherness-concept_124865-17774.jpg'
import JoinUsPng from '../../public/images/benefits.jpg'

import heroimage from '../../public/images/gym.jpg'
import { getJobs } from '@/lib/jobs'
import { ListReveal } from '@/components/Reveal'
import BenefitCard from '@/components/landing/BenefitCard'
import { Button } from '@/components/ui/button'
import parse from 'html-react-parser'

export default async function Home() {
	const res = await getJobs()

	return (
		<>
			<div className="h-full bg-white">
				<section className="flex items-center">
					<div className="relative w-full overflow-hidden">
						<Image
							alt=""
							src={heroimage}
							placeholder="blur"
							quality={100}
							fill
							className="h-full w-full object-cover brightness-50"
						/>
						<div className="relative text-white">
							<div className="my-20 mt-10 flex flex-col items-center justify-center text-center text-[50px] md:text-[100px]">
								<h1 className="font-bold">Transform Lives</h1>
								<h1 className="font-bold">AND</h1>
								<h1 className="font-bold text-blue-500">Shape Futures</h1>
								<Button
									asChild
									className="flex justify-center rounded-[25px] bg-blue-500 p-7 text-[20px] uppercase text-white hover:bg-blue-700"
								>
									<Link href="/career" className="">
										Join Our Team
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<ListReveal>
					<div className="">
						<div className="flex	flex-col items-center justify-center pb-10 md:flex-row-reverse md:pt-10">
							<div className="justify-center p-5 md:w-1/3">
								<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text pb-10 text-4xl font-bold  text-transparent md:text-6xl">
									About Us
								</div>
								<div className="mb-8 font-sans text-[30px] tracking-[0.020rem]">
									We are a passionate group of fitness trainers dedicated to helping people stay fit.
									Explore our rich history in helping people stay fit.
								</div>
								<Link
									href="/about"
									className="flex justify-center rounded-[1rem] bg-blue-500 p-4 text-lg text-white hover:bg-blue-600 md:w-1/3"
								>
									Learn More
								</Link>
							</div>

							<Image
								src={AboutUsJpg}
								alt="Picture of the author"
								width={500}
								height={500}
								className="rounded-2xl p-4 md:w-2/5 md:p-0"
							/>
						</div>
					</div>
				</ListReveal>

				<ListReveal>
					<div className="">
						<div className="flex flex-col items-center justify-center  pb-10 md:flex-row">
							<div className="justify-center p-5 md:w-1/3">
								<div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text pb-10 text-4xl font-bold  text-transparent md:text-6xl">
									Join us at Wario
								</div>
								<div className="mb-8 max-w-prose font-sans text-[30px] md:tracking-[0.020rem]">
									At Wario, we&apos;re more than just a workplace — we&apos;re a family. We are
									commited to a supportive and collaborative environment that extends to every member
									of our team. When you join us, you&apos;ll enjoy a range of benefits.
								</div>
								<div className="grid grid-cols-2 gap-4">
									<Link
										scroll={false}
										href="/career"
										className="flex justify-center rounded-[1rem] bg-blue-500 p-4 text-white hover:bg-blue-600"
									>
										Explore Jobs
									</Link>
								</div>
							</div>

							<Image
								src={JoinUsPng}
								alt="Picture of the author"
								placeholder="blur"
								width={500}
								height={500}
								className="rounded-xl p-4 md:w-2/5 md:p-0"
							/>
						</div>
					</div>
				</ListReveal>
				<section id="#benefits">
					<ListReveal>
						<div className="text-center ">
							<h1 className="text-[2rem] sm:text-[4rem] md:text-[3.5rem]">Our Benefits</h1>

							<p className="text-[1rem] sm:text-[1.3rem]">
								We strive to provide the best benefits to our employees
							</p>
						</div>
					</ListReveal>
					<ListReveal>
						<div>
							<BenefitCard></BenefitCard>
						</div>
					</ListReveal>
				</section>
				<section className="border-gray-200 pt-10">
					<div className="py-5">
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
													<Link href={`/career/job/${item.id}`}>
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
					</div>
				</section>
			</div>
		</>
	)
}
