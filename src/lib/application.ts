'use server'

import prisma from '@/lib/db'
const newApplication = async (
    jobId: string,
    jobName: string,
    firstName: string,
    lastName: string,
    emailAdress: string,
    resume: string,
    question: string[],
    questionAnswer: string[]
) => {
    try {
        const newApplication = await prisma.application.create({
            data: {
                jobId,
                jobName,
                firstName,
                lastName,
                emailAdress,
                resume,
                question,
                questionAnswer
            }
        })
    } catch (e) {
        return 'Something went wrong!' + e
    }

    return newApplication
}

const getApplication = async () => {
    const application = await prisma.application.findMany()
    return application
}
const getSingleApplication = async (id: string) => {
    const application = await prisma.application.findUnique({ where: { id } })
    return application
}
const deleteSingleApplication = async (id: string) => {
    try {
        const application = await prisma.application.delete({ where: { id } })
        return application
    } catch (error) {
        console.error(`Error deleting application with ID ${id}:`, error)
        return null
    }
}

const totalApplication = async () => {
    try {
        const countedApplication = await prisma.application.count()
        return countedApplication
    } catch (error) {
        console.error(`Error counting application:`, error)
        return null
    }
}

const totalApplicationById = async (jobId: string) => {
    try {
        const countedApplication = await prisma.application.findMany({ where: { jobId } }).count()
        return countedApplication
    } catch (error) {
        console.error(`Error counting application:`, error)
        return null
    }
}

export { getApplication, getSingleApplication, newApplication, deleteSingleApplication, totalApplication, totalApplicationById }
