import prisma from "@/lib/db"
import { json } from "stream/consumers";

const newJob = async (jobName: string, jobLocation: string, jobDescription: string, fullTime: boolean) => {
    const newJob = await prisma.post.create({
        data: {
            jobName,
            jobLocation,
            jobDescription,
            fullTime,
        }
    });

    return JSON.stringify(newJob)
}

const getJobs = async () => {
    const job = await prisma.post.findMany();
    return JSON.stringify(job)
}
const getSingleJob = async (id: string) => {
    const job = await prisma.post.findUnique({ where: { id } });
    return job
}

export { getSingleJob, getJobs, newJob }