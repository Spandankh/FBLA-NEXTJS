'use server'

import { newContacts } from '@/lib/contact'
import { Contact } from '@/lib/type'

const handleSubmit = async (data: Contact) => {
    try {

        await newContacts(
            data
        )
        console.log(data)
    } catch (error) {
        console.error('Error submitting contact:', error)
    }
}

export default handleSubmit
