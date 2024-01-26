import Form from '@/components/dashboard/poster/form'
import { JobFormValue } from '@/lib/type'
interface EditorProps extends JobFormValue {
	editMode: boolean
}

export default function EditorComponent({
	id,
	editMode,
	JobName,
	JobDescription,
	JobLocation,
	FullTime,
	RequireResume,
	questions
}: EditorProps) {
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
