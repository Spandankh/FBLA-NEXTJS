'use client'

import { ColumnDef, RowSelection } from '@tanstack/react-table'
import { ArrowUpDown, Settings, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteJob, totalApp } from './helper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import moment from 'moment'
import { JobApp } from '@/lib/type'

export const columns: ColumnDef<JobApp>[] = [
	{
		accessorKey: 'jobName',
		header: 'Job Name',
		cell: function Cell({ row }) {
			const Name = row.getValue('jobName') as string
			const link = '/career/job/' + row.original.id
			return (
				<>
					<Link className="mr-20 text-blue-700 underline" href={link} replace>
						{Name}
					</Link>
				</>
			)
		}
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Created
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: function Cell({ row }) {
			return <div>{moment(row.original.createdAt).fromNow()}</div>
		}
	},
	{
		accessorKey: 'totalApplications',
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Total Applications
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return <>{row.original.totalApplications ?? 'N/A'}</>
		}
	},
	{
		id: 'delete',
		cell: function Action({ row }) {
			const handleJobDelete = (jobId: string, jobName: string) => {
				try {
					deleteJob(jobId)
					toast(`Successfully deleted ${jobName}!`)
				} catch (error) {
					toast(`Got a error while deleting job! ${error}`)
				}
			}
			return (
				<>
					<div>
						<Button size="icon" onClick={() => handleJobDelete(row.original.id, row.original.jobName)}>
							<Trash size={15} color="#C70000" />
						</Button>
					</div>
				</>
			)
		}
	},

	{
		id: 'edit',
		cell: function Action({ row }) {
			const router = useRouter()
			return (
				<>
					<div>
						<Button size="icon" onClick={() => router.push(`jobposter/${row.getValue('id')}`)}>
							<Settings size={15} />
						</Button>
					</div>
				</>
			)
		}
	}
]
