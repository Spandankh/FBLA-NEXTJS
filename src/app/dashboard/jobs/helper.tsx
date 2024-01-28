'use server'

import { totalApplicationById } from '@/lib/application'
import { deleteSingleJob } from '@/lib/jobs'
import { revalidatePath } from 'next/cache'
import { toast } from 'sonner'

export async function deleteJob(id: string) {
	await deleteSingleJob(id)
	revalidatePath('/dashboard/jobs')
}

export async function totalApp(id: string) {
	return await totalApplicationById(id)
}
