import { Clock, MoveRight, Phone, Users } from 'lucide-react'
import { getApplication, totalApplication } from '@/lib/application'
import { totalJobs } from '@/lib/jobs'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
export const dynamic = 'force-dynamic'

export default async function dashboard() {
	const totalApp = await totalApplication()
	const totalJob = await totalJobs()
	const application = await getApplication()
	return (
		<div className="h-screen max-w-full md:w-screen overflow-y-auto">
			<div className="flex-1 space-y-4 p-4 md:p-7 pt-6">
				<div className="flex items-center justify-between">
					<h1 className="sm:text-xl text-3xl font-bold tracking-tight">Welcome Back!</h1>
				</div>
				<div className="w-full md:mr-5">
					<div className="bg-white rounded-xl shadow-lg grid grid-cols-1  md:grid-cols-3 py-5 md:divide-x-4">
						<div className="flex flex-row flex-shrink items-center justify-center   ">
							<div className=" rounded-full bg-green-300 p-3">
								<Users className="size-[30px] md:size-[40px]" />
							</div>
							<div className="w-full md:w-auto space-y-1.5 p-6">
								<p className="  md:text-xl text-gray-600">Total Applcation</p>
								<h1 className="font-bold text-lg md:text-2xl">{totalApp}</h1>
								<Link
									className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
									href="dashboard/application"
								>
									<p className="">View Application</p>
									<MoveRight />
								</Link>
							</div>
						</div>
						<div className="flex flex-row items-center justify-center">
							<div className=" rounded-full bg-green-300 p-3">
								<Clock className="size-[30px] md:size-[40px]" />
							</div>
							<div className="w-full md:w-auto space-y-1.5 p-6">
								<p className=" md:text-xl text-gray-600">Active Jobs</p>
								<h1 className="font-bold text-lg md:text-2xl">{totalJob}</h1>
								<Link
									className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
									href="dashboard/jobs"
								>
									<p className="">View Jobs</p>
									<MoveRight />
								</Link>
							</div>
						</div>
						<div className="flex flex-row items-center justify-center">
							<div className="rounded-full bg-green-300 p-3">
								<Phone className="size-[30px] md:size-[40px]" />
							</div>
							<div className="w-full md:w-auto space-y-1.5 p-6">
								<p className=" md:text-xl text-gray-600">Contacts</p>
								<h1 className="font-bold text-lg md:text-2xl">{totalJob}</h1>
								<Link
									className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
									href="dashboard/jobs"
								>
									<p className="">View Contacts</p>
									<MoveRight />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="grid  md:grid-cols-2 lg:grid-cols-7 gap-4">
					<div className="col-span-3 bg-white rounded-xl border shadow-xl">
						<div className="grid md:grid-cols-2 md:divide-x-4">
							<div className="flex flex-row items-center justify-center">
								<div className="rounded-full bg-green-300 p-3">
									<Phone className="size-[30px] md:size-[40px]" />
								</div>
								<div className="w-full md:w-auto space-y-1.5 p-6">
									<p className=" md:text-xl text-gray-600">Contacts</p>
									<h1 className="font-bold text-lg md:text-2xl">{totalJob}</h1>
									<Link
										className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
										href="dashboard/jobs"
									>
										<p className="">View Contacts</p>
										<MoveRight />
									</Link>
								</div>
							</div>
							<div className="flex flex-row items-center justify-center">
								<div className="rounded-full bg-green-300 p-3">
									<Phone className="size-[30px] md:size-[40px]" />
								</div>
								<div className="w-full md:w-auto space-y-1.5 p-6">
									<p className=" md:text-xl text-gray-600">Contacts</p>
									<h1 className="font-bold text-lg md:text-2xl">{totalJob}</h1>
									<Link
										className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
										href="dashboard/jobs"
									>
										<p className="">View Contacts</p>
										<MoveRight />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-4 md:col-span-4 bg-white rounded-xl border shadow-xl">
						<div className="w-full md:w-auto space-y-1.5 p-6">
							<p className=" md:text-xl text-gray-600 mb-3">Recent Application</p>
							<div className="space-y-8">
								{application.length > 0 ? (
									application.slice(0, 10).map((applicationItem, index) => (
										<div key={index}>
											<div className="flex items-center">
												<div className="ml-4 space-y-1">
													<p className="font-medium leading-none">
														{applicationItem.firstName} {applicationItem.lastName}
													</p>
												</div>
												<div className="ml-3 font-medium">{applicationItem.emailAdress}</div>
											</div>
										</div>
									))
								) : (
									<div className="text-lg font-bold text-center">No applications found</div>
								)}
							</div>

							<Link
								className="flex flex-shrink text-blue-700 text-xs md:text-base hover:underline"
								href="dashboard/application"
							>
								<p className="">View Application</p>
								<MoveRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
