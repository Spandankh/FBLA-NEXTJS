import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'
import { Application, Job } from '@/lib/type'
import { getJobs } from '@/lib/jobs'
import { totalApplication, totalApplicationById } from '@/lib/application'
export const dynamic = 'force-dynamic'

type FullJob = Job & {
	totalApplication: string
}

async function getData(): Promise<FullJob[]> {
	try {
		const jobInfo: Job[] = JSON.parse(await getJobs())
		const fullJobInfoPromises = jobInfo.map(async (job) => ({
			...job,
			totalApplication: await totalApplicationById(job.id)
		}))

		const fullJobInfo = await Promise.all(fullJobInfoPromises)
		return fullJobInfo
	} catch (error) {
		console.error('Error fetching job data:', error)
		throw error
	}
}

export default async function Application() {
	const data = await getData()
	return (
		<>
			<div className="min-h-screen max-w-full bg-slate-100 md:w-screen">
				<div className="p-3 pb-3 pt-6 md:px-10">
					<h1 className="text-3xl font-bold tracking-tight">Active Job Listing</h1>
				</div>

				<Separator className="bg-black" />
				<div className="flex-grow p-3 pb-3 pt-6 min-[320px]:p-0 md:px-10">
					<div className="rounded-[1rem] bg-white shadow-xl">
						<DataTable columns={columns} data={data} />
					</div>
				</div>
			</div>
		</>
	)
}
