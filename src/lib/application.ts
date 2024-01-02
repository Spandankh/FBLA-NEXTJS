'use server'

import prisma from "@/lib/db"

const newApplication = async (firstName: string, lastName: string, emailAdress: string, answer: string, jobId: string, jobName: string, resume: string) => {
    const newApplication = await prisma.application.create({
        data: {
            firstName,
            lastName,
            emailAdress,
            answer,
            jobId,
            jobName,
            resume
        }
    })

    return JSON.stringify(newApplication)
}

const getApplication = async () => {
    const application = await prisma.application.findMany();
    return application
}
const getSingleApplication = async (id: string) => {
    const application = await prisma.application.findUnique({ where: { id } });
    return application
}
const deleteSingleApplication = async (id: string) => {
    try {
        const application = await prisma.application.delete({ where: { id } });
        return application;
    } catch (error) {
        console.error(`Error deleting application with ID ${id}:`, error);
        return null;
    }
};


export { getApplication, getSingleApplication, newApplication, deleteSingleApplication }