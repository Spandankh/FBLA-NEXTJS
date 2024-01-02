'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Job } from '@/lib/type'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteJob } from './helper'
import Link from 'next/link'

export const columns: ColumnDef<Job>[] = [
    {
        accessorKey: 'id',
    },
    {
        accessorKey: 'jobName',
        header: 'Job Name',
        cell: function Cell({ row }) {
            const Name = row.getValue('jobName') as string
            const link = '/career/job/' + row.getValue('id')
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
        id: 'action',
        header: 'Delete',
        cell: ({ row }) => {
            return (
                <div>
                    <Button
                        size="icon"
                        onClick={() => deleteJob(row.getValue('id'))}
                    >
                        <Trash size={15} color="#C70000" />
                    </Button>
                </div>
            )
        },
    },
]
