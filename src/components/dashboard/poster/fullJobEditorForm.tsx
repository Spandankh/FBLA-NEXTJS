import Form from '@/components/dashboard/poster/form'
import { JobFormValue } from '@/lib/type'

export default function EditorComponent({
	id,
	JobName,
	JobDescription,
	JobLocation,
	FullTime,
	RequireResume,
	questions
}: JobFormValue) {
	return (
		<>
			<Form
				id={id}
				JobName={JobName}
				JobDescription={JobDescription}
				JobLocation={JobLocation}
				FullTime={FullTime}
				RequireResume={RequireResume}
				questions={questions}
			/>
		</>
	)
}
