import { getSingleJob } from '@/lib/jobs'
import Editor from './editor'
export default async function QuestionTest() {
	const getValue = await getSingleJob('65ab5250a3c3a9371719664c')
	return (
		<div>
			<Editor
				id={getValue!.id}
				editMode={true}
				JobName={getValue!.jobName}
				JobDescription={getValue!.jobName}
				JobLocation={getValue!.jobName}
				FullTime={getValue!.fullTime}
				RequireResume={getValue!.requireResume}
				questions={getValue!.questions.map((question) => ({
					question
				}))}
			></Editor>
		</div>
	)
}
