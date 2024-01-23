'use server'

import { newApplication } from '@/lib/application'

const handleSubmit = async (data: any) => {
    try {
        // console.log(`
        //     jobid: ${data.jobId},
        //     jobName: ${data.jobName},
        //     firstName: ${data.firstName},
        //     lastName: ${data.lastName},
        //     email: ${data.emailAdress},
        //     answers ${data.Answers.map((answer: any) => answer.answers)}`)
        await newApplication(
            data.jobId,
            data.jobName,
            data.firstName,
            data.lastName,
            data.emailAdress,
            data.resume,
            data.question,
            data.Answers.map((answer: any) => answer.answers)
        )
    } catch (error) {
        console.error('Error submitting application:', error)
    }
}

export default handleSubmit
