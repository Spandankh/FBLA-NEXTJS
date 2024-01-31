import { DataTable } from './data-table'
import { columns } from './columns'
import { Contact } from '@/lib/type'
import { getContacts } from '@/lib/contact'
export const dynamic = 'force-dynamic'

async function getData(): Promise<Contact[]> {
	return JSON.parse(await getContacts())
}

export default async function Contact() {
	const data = await getData()

	return (
		<>
			<div className="max-w-screen h-screen overflow-hidden">
				<div className="flex-1 p-3 pb-3 pt-6 md:px-10">
					<h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
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
