import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'
import { Application, Job } from '@/lib/type'
import { getJobs } from '@/lib/jobs'
export const dynamic = 'force-dynamic'

async function getData(): Promise<Job[]> {
	return JSON.parse(await getJobs())
}

export default async function Application() {
	const data = await getData()
	return (
		<>
			<div className="bg-slate-100 min-h-screen max-w-full md:w-screen">
				<div className="p-3 md:px-10 pb-3 pt-6">
					<h1 className="text-3xl font-bold tracking-tight">Active Job Listing</h1>
				</div>

				<Separator className="bg-black" />
				<div className="flex-grow min-[320px]:p-0 p-3 md:px-10 pb-3 pt-6">
					<div className="bg-white rounded-[1rem] shadow-xl">
						<DataTable columns={columns} data={data} />
					</div>
				</div>
			</div>
		</>
	)
}
