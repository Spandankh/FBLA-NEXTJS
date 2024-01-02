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
            <div className="bg-gray-200 h-screen w-screen">
                <div className="flex-1 p-3 md:px-10 pb-3 pt-6">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Active Job Listing
                    </h1>
                </div>

                <Separator className="bg-black" />
                <div className="flex-grow p-3 md:px-10 pb-3 pt-6 w-2/3">
                    <div className="bg-white rounded-[1rem] shadow-xl">
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}
