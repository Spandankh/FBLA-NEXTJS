'use server'

import { deleteSingleApplication } from '@/lib/application'
import { revalidatePath } from 'next/cache'

export async function deleteUser(id: string) {
    await deleteSingleApplication(id)
    revalidatePath('/dashboard/application')
}
