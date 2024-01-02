'use server'

import { newJob } from '@/lib/jobs'
import { revalidatePath } from 'next/cache'

export default async function create(jobName: string, jobBody: string) {
    newJob(jobName, jobBody)

    revalidatePath('dashboard/jobposter')

}
