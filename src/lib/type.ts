export type Job = {
    id: string;
    jobName: string;
    jobDescription: string;
    createdAt: Date;
    fullTime: boolean
    jobLocation: string | null
};

export type Application = {
    id: string
    firstName: string
    lastName: string
    jobName: string
    emailAdress: string
    answer: string
    jobId: string
    resume: string
}