import { Clock, MoveRight, Phone, Users } from 'lucide-react'
import { getApplication, totalApplication } from '@/lib/application'
import { totalJobs } from '@/lib/jobs'
import Link from 'next/link'
import { BsPerson } from 'react-icons/bs'
import { totalContact } from '@/lib/contact'
export const dynamic = 'force-dynamic'

export default async function dashboard() {
	const totalApp = await totalApplication()
	const totalJob = await totalJobs()
	const totalContacts = await totalContact()
	const application = await getApplication()
	return (
		<div className="h-screen max-w-full overflow-y-auto md:w-screen">
			<div className="flex-1 space-y-4 p-4 md:p-10 ">
				<div className="flex items-center justify-between">
					<h1 className="text-xl font-bold tracking-tight md:text-4xl">Welcome Back!</h1>
				</div>
				<div className="w-full md:mr-5">
					<div className="group grid gap-5 py-5 md:grid-cols-3">
						<div className="flex flex-shrink flex-row rounded-xl border bg-white py-10 shadow-xl">
							<div className="m-auto rounded-[10px] bg-green-500 p-5">
								<Clock className="size-[30px] md:size-[40px]" />
							</div>
							<div className="m-auto space-y-1.5">
								<p className="text-gray-600 md:text-xl">Active Job</p>
								<h1 className="text-lg font-bold md:text-2xl">{totalJob}</h1>
								<Link
									className="flex flex-shrink text-xs text-blue-700 hover:underline md:text-base"
									href="dashboard/jobs"
								>
									<p className="">View Jobs</p>
									<MoveRight />
								</Link>
							</div>
						</div>

						<div className="flex flex-shrink flex-row rounded-xl border bg-white py-10 shadow-xl">
							<div className="m-auto rounded-[10px] bg-blue-400 p-5">
								<Users className="size-[30px] md:size-[40px]" />
							</div>
							<div className="m-auto space-y-1.5">
								<p className="text-gray-600 md:text-xl">Total Applcation</p>
								<h1 className="text-lg font-bold md:text-2xl">{totalApp}</h1>
								<Link
									className="flex flex-shrink text-xs text-blue-700 hover:underline md:text-base"
									href="dashboard/application"
								>
									<p className="">View Application</p>
									<MoveRight />
								</Link>
							</div>
						</div>
						<div className="flex flex-shrink flex-row rounded-xl border bg-white py-10 shadow-xl">
							<div className="m-auto rounded-[10px] bg-yellow-400 p-5">
								<Phone className="size-[30px] md:size-[40px]" />
							</div>
							<div className="m-auto space-y-1.5">
								<p className="text-gray-600 md:text-xl">Total Contacts</p>
								<h1 className="text-lg font-bold md:text-2xl">{totalContacts}</h1>
								<Link
									className="flex flex-shrink text-xs text-blue-700 hover:underline md:text-base"
									href="dashboard/contacts"
								>
									<p className="">View Contacts</p>
									<MoveRight />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<div className="rounded-xl border bg-white shadow-xl">
						<div className="w-full space-y-1.5 p-6 md:w-auto">
							<p className=" mb-3 text-gray-600 md:text-xl">Recent Application</p>
							<div className="space-y-8">
								{application.length > 0 ? (
									application.slice(0, 10).map(
										(
											applicationItem: {
												firstName: string
												lastName: string
												emailAdress: string
											},
											index: number
										) => (
											<div key={index}>
												<div className="flex items-center">
													<div className="ml-4 space-y-1">
														<div className="flex">
															<BsPerson size={20} />
															<p className="font-medium leading-none">
																{applicationItem.firstName} {applicationItem.lastName}
																{'    '}
																{applicationItem.emailAdress}
															</p>
														</div>
													</div>
												</div>
											</div>
										)
									)
								) : (
									<div className="p-8 text-center text-lg font-bold">
										No recent applications found
									</div>
								)}
							</div>

							<Link
								className="flex flex-shrink text-xs text-blue-700 hover:underline md:text-base"
								href="dashboard/application"
							>
								<p className="">View Application</p>
								<MoveRight />
							</Link>
						</div>
					</div>
					<div className="rounded-xl border bg-white shadow-xl">
						<div className="w-full space-y-1.5 p-6 md:w-auto">
							<p className=" mb-3 text-gray-600 md:text-xl">Recent Contact</p>
							<div className="space-y-8">
								{application.length > 0 ? (
									application.slice(0, 10).map(
										(
											applicationItem: {
												firstName: string
												lastName: string
												emailAdress: string
											},
											index: number
										) => (
											<div key={index}>
												<div className="flex items-center">
													<div className="ml-4 space-y-1">
														<p className="font-medium leading-none">
															{applicationItem.firstName} {applicationItem.lastName}
														</p>
													</div>
													<div className="ml-3 font-medium">
														{applicationItem.emailAdress}
													</div>
												</div>
											</div>
										)
									)
								) : (
									<div className="p-8 text-center text-lg font-bold">
										No recent applications found
									</div>
								)}
							</div>

							<Link
								className="flex flex-shrink text-xs text-blue-700 hover:underline md:text-base"
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
