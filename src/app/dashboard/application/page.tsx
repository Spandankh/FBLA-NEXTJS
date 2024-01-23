import { getApplication } from '@/lib/application'
import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'
import { Application } from '@/lib/type'
import { getSingleJob } from '@/lib/jobs'
export const dynamic = 'force-dynamic'

async function getData(): Promise<Application[]> {
    return await getApplication()
}

export default async function Application() {
    const data = await getData()

    return (
        <>
            <div className="bg-gray-100 h-screen w-screen">
                <div className="flex-1 p-3 md:px-10 pb-3 pt-6">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Applications
                    </h1>
                </div>

                <div className="flex-grow p-3 md:px-10 pb-3 pt-6 w-2/3">
                    <div className="bg-white rounded-[1rem] shadow-xl">
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}
