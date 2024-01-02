import prisma from "@/lib/db"

const newJob = async (jobName: string, jobDescription: string,) => {

    try {
        await prisma.post.create({
            data: {
                jobName,
                jobDescription
            }
        })
    } catch (e) {
        return "Something went wrong!"
    }

    return ("Created new application")
}

const getJobs = async () => {
    const job = await prisma.post.findMany();
    return JSON.stringify(job)
}
const getSingleJob = async (id: string) => {
    const job = prisma.post.findUnique({ where: { id: id } });
    return job
}

const deleteSingleJob = async (id: string) => {
    try {
        const job = await prisma.post.delete({ where: { id } });
        return job;
    } catch (error) {
        console.error(`Error deleting job with ID ${id}:`, error);
        return null;
    }
};

export { getSingleJob, getJobs, newJob, deleteSingleJob }