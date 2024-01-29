'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteUser } from './helper'
import Link from 'next/link'
import { Document, Page } from 'react-pdf'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { Contact } from '@/lib/type'

export const columns: ColumnDef<Contact>[] = [
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
			return (
				<>
					<a className="text-blue-500" href={`mailto:${row.getValue('emailAdress')}`}>
						{row.getValue('emailAdress')}
					</a>
				</>
			)
		}
	},
	{
		accessorKey: 'message',
		header: 'Message',
		cell: function Cell({ row }) {
			const [showModal, setShowModal] = useState(false)
			const message = row.getValue('message') as string
			return (
				<>
					<Dialog open={showModal} onOpenChange={setShowModal}>
						<DialogContent className="max-w-prose bg-white">
							<ScrollArea className="max-h-[80vh] p-6">
								<DialogHeader>
									<DialogTitle className="text-2xl">Message</DialogTitle>
									<DialogDescription className="text-1xl">
										<div className="pb-3">
											<div className="font-sm">{row.getValue('message')}</div>
										</div>
									</DialogDescription>
								</DialogHeader>
							</ScrollArea>
						</DialogContent>
					</Dialog>
					<Button className="text-blue-500 underline" onClick={() => setShowModal(true)}>
						View
					</Button>
				</>
			)
		}
	}
]
