'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Job } from '@/lib/type'
import { MoreHorizontal, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteJob } from './helper'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const columns: ColumnDef<Job>[] = [
	{
		accessorKey: 'id'
	},
	{
		accessorKey: 'jobName',
		header: 'Job Name',
		cell: function Cell({ row }) {
			const Name = row.getValue('jobName') as string
			const link = '/career/job/' + row.getValue('id')
			return (
				<>
					<Link className="text-blue-700 underline" href={link} replace>
						{Name}
					</Link>
				</>
			)
		}
	},

	{
		id: 'action',

		cell: function Action({ row }) {
			const router = useRouter()
			const handleJobDelete = (jobId: string, jobName: string) => {
				try {
					deleteJob(jobId)
					toast(`Successfully deleted ${jobName}!`)
				} catch (error) {
					toast(`Got a error while deleting job! ${error}`)
				}
			}
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild className="flex justify-end mx-auto">
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="bg-slate-200 p-2 rounded-xl">
						<DropdownMenuLabel className="pb-1">Actions</DropdownMenuLabel>
						<DropdownMenuItem
							className="pb-1"
							onClick={() => router.push(`jobposter/${row.getValue('id')}`)}
						>
							EDIT
						</DropdownMenuItem>
						<DropdownMenuSeparator className="bg-black" />
						<DropdownMenuItem
							className=" text-red-600 hover:text-red-700"
							onClick={() => handleJobDelete(row.getValue('id'), row.getValue('name'))}
						>
							DELETE
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
]
