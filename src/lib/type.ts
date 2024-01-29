export type Job = {
	id: string
	jobName: string
	jobDescription: string
	createdAt: Date
	fullTime: boolean
	jobLocation: string | null
}
export type Application = {
	id: string
	createdAt: Date
	jobId: string
	jobName: string
	firstName: string
	lastName: string
	emailAdress: string
	resume: string | null
	question: string[]
	questionAnswer: string[]
}
export type JobFormValue = {
	id?: string | null
	JobName: string | ''
	JobDescription: string | ''
	JobLocation: string | ''
	FullTime: boolean | false
	RequireResume: boolean | true
	questions: { question: string }[] | []
}

export type Contact = {
	id: string
	firstName: string
	lastName: string
	emailAdress: string
	message: string
}

export type JobApp = {
	id: string
	jobName: string
	jobDescription: string
	createdAt: Date
	fullTime: boolean
	jobLocation: string | null
	totalApplications: string
}