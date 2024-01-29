import prisma from '@/lib/db'
import { Contact } from './type'

const newContacts = async (contact: Contact) => {
    try {
        await prisma.contact.create({
            data: {
                firstName: contact.firstName,
                lastName: contact.lastName,
                emailAdress: contact.emailAdress,
                message: contact.message,
            }
        })
        console.log("Created message")
    } catch (e) {
        return 'Something went wrong!'
    }

    return 'Created new contact'

}

const getContacts = async () => {
    try {
        const contact = await prisma.contact.findMany()
        return JSON.stringify(contact)
    } catch (error) {
        console.log(error)
        return JSON.stringify("ERROR!! NULL")
    }
}


const deleteContact = async (id: string) => {
    try {
        const job = await prisma.contact.delete({ where: { id } })
        return job
    } catch (error) {
        console.error(`Error deleting contact with ID ${id}:`, error)
        return null
    }
}
const totalContact = async () => {
    try {
        const countedContact = await prisma.contact.count()
        return countedContact
    } catch (error) {
        console.error(`Error counting contact:`, error)
        return null
    }
}

export { getContacts, deleteContact, totalContact, newContacts }
