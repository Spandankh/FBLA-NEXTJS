'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Application } from '@/lib/type'
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
    DialogTrigger,
} from '@/components/ui/dialog'
import { title } from 'process'

export const columns: ColumnDef<Application>[] = [
    {
        accessorKey: 'jobId',
    },
    {
        accessorKey: 'jobName',
        header: 'Job Name',
        cell: function Cell({ row }) {
            const Name = row.getValue('jobName') as string
            const link = '/career/job/' + row.getValue('jobId')
            return (
                <>
                    <Link
                        className="text-blue-700 underline"
                        href={link}
                        replace
                    >
                        {Name}
                    </Link>
                </>
            )
        },
    },
    {
        accessorKey: 'firstName',
        header: 'First',
    },
    {
        accessorKey: 'lastName',
        header: 'Last',
    },
    {
        accessorKey: 'emailAdress',
        header: 'Email',
    },
    {
        accessorKey: 'answer',
        header: 'Answer',
        cell: function Cell({ row }) {
            const [showModal, setShowModal] = useState(false)

            return (
                <>
                    <Dialog open={showModal} onOpenChange={setShowModal}>
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle className="text-2xl">
                                    Answer
                                </DialogTitle>
                                <DialogDescription className="text-1xl">
                                    {row.getValue('answer')}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Button onClick={() => setShowModal(true)}>View</Button>
                </>
            )
        },
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
                        download={`${row.getValue('firstName')} ${row.getValue(
                            'lastName'
                        )} resume`}
                        href={`data:application/pdf;base64,${base64}`}
                    >
                        Download
                    </a>
                </>
            )
        },
    },
    {
        accessorKey: 'id',
    },

    {
        id: 'action',
        cell: ({ row }) => {
            return (
                <div>
                    <Button
                        size="icon"
                        onClick={() => deleteUser(row.getValue('id'))}
                    >
                        <Trash size={15} color="#C70000" />
                    </Button>
                </div>
            )
        },
    },
]
