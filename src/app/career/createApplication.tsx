import { newApplication } from '@/lib/application'
import { toast } from 'sonner'
import JSConfetti from 'js-confetti'

const handleSubmit = async (data: any) => {
    try {
        await newApplication(
            data.FirstName,
            data.LastName,
            data.emailAdress,
            data.Answer,
            data.jobId,
            data.jobName,
            data.resume
        )
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            confettiNumber: 500,
        })

        return toast('Job successful submitted', {
            description: `Name: ${data.FirstName} ${data.LastName}`,
        })
    } catch (error) {
        console.error('Error submitting application:', error)
        return toast('Error while submitting try again', {
            description: `${error}`,
        })
    }
}

export default handleSubmit
