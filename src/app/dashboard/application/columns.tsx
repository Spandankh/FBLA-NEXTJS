'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Application } from '@/lib/type'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteUser } from './helper'
import Link from 'next/link'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { title } from 'process'
import { getSingleJob } from '@/lib/jobs'
import { ScrollArea } from '@/components/ui/scroll-area'
import moment from 'moment'

export const columns: ColumnDef<Application>[] = [
	{
		accessorKey: 'jobName',
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Job Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},

		cell: function Cell({ row }) {
			const Name = row.getValue('jobName') as string
			const link = '/career/job/' + row.original.jobId
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
		accessorKey: 'firstName',
		header: 'First'
	},
	{
		accessorKey: 'lastName',
		header: 'Last'
	},
	{
		accessorKey: 'emailAdress',
		header: 'Email',
		cell: function Cell({ row }) {
			const formatedEmail = `mailto:${row.original.emailAdress}?subject=Wario Job Application status regarding job: ${row.original.jobName}`
			return (
				<a className="text-blue-500 underline" href={formatedEmail}>
					Email
				</a>
			)
		}
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Submitted At
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: function Cell({ row }) {
			return <div>{moment(row.original.createdAt).fromNow()}</div>
		}
	},
	{
		accessorKey: 'questionAnswer',
		header: 'Answer',
		cell: function Cell({ row }) {
			const [showModal, setShowModal] = useState(false)
			const answers = row.original.questionAnswer as string[]
			const question = row.original.question as string[]
			return (
				<>
					<Dialog open={showModal} onOpenChange={setShowModal}>
						<DialogContent className="max-w-prose bg-white">
							<ScrollArea className="max-h-[80vh] p-6">
								<DialogHeader>
									<DialogTitle className="text-2xl">Answer</DialogTitle>
									<DialogDescription className="text-1xl">
										{answers.map((answer, answerIndex) => (
											<div key={answerIndex}>
												<div className="pb-3">
													<div className="font-sm font-bold">{question[answerIndex]}</div>
													<div className="max-w-prose border p-5 text-sm shadow-md">
														{answer}
													</div>
												</div>
											</div>
										))}
									</DialogDescription>
								</DialogHeader>
							</ScrollArea>
						</DialogContent>
					</Dialog>
					<Button onClick={() => setShowModal(true)}>View</Button>
				</>
			)
		}
	},
	{
		accessorKey: 'resume',
		header: 'Resume',
		cell: function Cell({ row }) {
			const base64 = row.getValue('resume')
			return (
				<>
					<a
						className="text-blue-600 underline"
						download={`${row.getValue('firstName')} ${row.getValue('lastName')} resume`}
						href={`data:application/pdf;base64,${base64}`}
					>
						Download
					</a>
				</>
			)
		}
	},

	{
		id: 'action',
		cell: ({ row }) => {
			return (
				<div>
					<Button size="icon" onClick={() => deleteUser(row.original.id)}>
						<Trash size={15} color="#C70000" />
					</Button>
				</div>
			)
		}
	}
]
