'use server'

import { newJob, updateJob } from '@/lib/jobs'
import { JobFormValue } from '@/lib/type'

export default async function Sumit(
	{ id, JobName, JobDescription, JobLocation, FullTime, RequireResume, questions }: JobFormValue,
	editMode: boolean
) {
	if (editMode) {
		try {
			await updateJob(
				id!,
				JobName,
				JobDescription,
				JobLocation,
				FullTime,
				RequireResume,
				questions.map((questionObject) => questionObject.question)
			)
		} catch (e) {
			console.log('Got a error!', e)
		}
	} else {
		try {
			await newJob(
				JobName,
				JobDescription,
				JobLocation,
				FullTime,
				RequireResume,
				questions.map((questionObject) => questionObject.question)
			)
		} catch (e) {
			console.log(e)
		}
	}
}
