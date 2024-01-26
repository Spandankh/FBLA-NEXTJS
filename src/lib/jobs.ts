import prisma from '@/lib/db'

const newJob = async (
	jobName: string,
	jobDescription: string,
	jobLocation: string | null,
	fullTime: boolean,
	requireResume: boolean,
	questions: string[]
) => {
	try {
		await prisma.post.create({
			data: {
				jobName,
				jobDescription,
				jobLocation,
				fullTime,
				requireResume,
				questions
			}
		})
	} catch (e) {
		return 'Something went wrong!'
	}

	return 'Created new job'
}

const updateJob = async (
	id: string,
	jobName: string,
	jobDescription: string,
	jobLocation: string | null,
	fullTime: boolean,
	requireResume: boolean,
	questions: string[]
) => {
	try {
		await prisma.post.update({
			where: { id: id },
			data: {
				jobName,
				jobDescription,
				jobLocation,
				fullTime,
				requireResume,
				questions
			}
		})
	} catch (e) {
		return 'Something went wrong!'
	}

	return 'Created new job'
}

const getJobs = async () => {
	const job = await prisma.post.findMany()
	return JSON.stringify(job)
}
const getSingleJob = async (id: string) => {
	const job = prisma.post.findUnique({ where: { id: id } })
	return job
}

const deleteSingleJob = async (id: string) => {
	try {
		const job = await prisma.post.delete({ where: { id } })
		return job
	} catch (error) {
		console.error(`Error deleting job with ID ${id}:`, error)
		return null
	}
}
const totalJobs = async () => {
	try {
		const countedJob = await prisma.post.count()
		return countedJob
	} catch (error) {
		console.error(`Error counting jobs  ${id}:`, error)
		return null
	}
}

export { getSingleJob, getJobs, newJob, deleteSingleJob, updateJob, totalJobs }
