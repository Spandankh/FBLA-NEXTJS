import Image from 'next/image'
import { getSingleJob } from '@/lib/jobs'
import Link from 'next/link'
import Apply from '../../apply'
import { ChevronLeft } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import jobDescription from '@/components/career/JobDescr'
import CoreValueSvg from '../../../../../public/images/fitness-outline-99e3e.svg'
import { Button } from '@/components/ui/button'
import moment from 'moment'
export default async function Career({ params, searchParams }: any) {
	const res = await getSingleJob(params.id)
	return (
		<div className="min-w-screen min-h-screen bg-gradient-to-br from-[#faf0e6bf] to-[#e6f0fabf]">
			<div className="mx-auto max-w-[1240px]">
				<Link href="/career" className="flex pt-2">
					<ChevronLeft className=" "></ChevronLeft>
					<p className="flex font-bold text-blue-800">Back to careers</p>
				</Link>

				<section className="flex flex-col justify-center pt-3 md:pt-5">
					<h1 className="text-[48px] font-bold capitalize">{res?.jobName}</h1>
					<div className="">
						<p className="pb-2 pt-2 text-[15px]">Job posted {moment(res!.createdAt).fromNow()}</p>
					</div>
					<Separator className="bg-black" />
				</section>

				<Tabs defaultValue={searchParams.status}>
					<TabsList className="mx-auto mb-5 grid h-full w-full grid-cols-2 bg-gray-200">
						<TabsTrigger
							value="RoleInfo"
							className="rounded-[10px]  text-[20px] data-[state=active]:bg-white"
						>
							Role Info
						</TabsTrigger>
						<TabsTrigger
							value="Application"
							className="rounded-[10px] text-[20px] data-[state=active]:bg-white"
						>
							Application
						</TabsTrigger>
					</TabsList>

					<Separator className="" />
					<div className="flex flex-col md:flex-row md:justify-end">
						<div className="flex-1">
							<TabsContent value="RoleInfo">
								<div className="">{jobDescription(res!.jobDescription)}</div>
							</TabsContent>
							<TabsContent value="Application" className="grow">
								<div className="mx-5 my-5">
									<Apply
										jobId={res!.id}
										jobName={res!.jobName}
										questions={res?.questions || []}
									></Apply>
								</div>
							</TabsContent>
						</div>
						<div className="mx-auto min-w-[320px] max-w-[400px]">
							<div className="mx-auto my-5 rounded-xl bg-gradient-to-br from-[#4b57db] to-[#4383d2] p-5">
								<h1 className="text-[2rem] font-semibold text-white ">Our Core Value</h1>
								<p className="text-[1rem] text-white">
									Innovation, Integrity & Collaboration are the most important values at Wario that
									have driven this company since day 1!
								</p>
								<div className="flex justify-center pt-2">
									<Image src={CoreValueSvg} width={250} height={250} alt="Benefits" />
								</div>
								<Button
									asChild
									className="flex justify-center rounded-xl bg-blue-400 text-white hover:bg-blue-700"
								>
									<Link href="/about" className="text-[2rem]">
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
