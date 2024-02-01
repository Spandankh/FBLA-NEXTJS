'use server'

import { revalidatePath } from 'next/cache'
import { deleteContact } from '@/lib/contact'
export async function deleteCon(id: string) {
	await deleteContact(id)
	revalidatePath('/dashboard/contacts')
}
