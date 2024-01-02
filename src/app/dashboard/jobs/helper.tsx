'use server'

import { deleteSingleJob } from '@/lib/jobs'
import { revalidatePath } from 'next/cache'
import { toast } from 'sonner'

export async function deleteJob(id: string) {
    await deleteSingleJob(id)
    revalidatePath('/dashboard/jobs')
}
