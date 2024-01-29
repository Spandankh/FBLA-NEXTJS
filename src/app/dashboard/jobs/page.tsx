import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'
import { Application, Job, JobApp } from '@/lib/type'
import { getJobs, getJobsWithApp } from '@/lib/jobs'
import { totalApplication, totalApplicationById } from '@/lib/application'

export const dynamic = 'force-dynamic'

async function getData(): Promise<JobApp[]> {
	return JSON.parse(await getJobsWithApp())
}
export default async function Application() {
	const data = await getData()
	return (
		<>
			<div className="max-w-screen h-screen overflow-hidden">
				<div className="flex-1 p-3 pb-3 pt-6 md:px-10">
					<h1 className="text-3xl font-bold tracking-tight">Active Job Listing</h1>
				</div>

				<div className="w-full flex-grow p-3 pb-3 pt-6 md:px-10">
					<div className="rounded-[1rem] bg-white shadow-xl">
						<DataTable columns={columns} data={data} />
					</div>
				</div>
			</div>
		</>
	)
}
