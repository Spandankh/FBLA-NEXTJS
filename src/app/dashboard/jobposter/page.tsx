import FullJobEditorForm from '@/components/dashboard/poster/fullJobEditorForm'

export default async function Application() {
	return (
		<>
			<div className="bg-slate-100 min-h-screen max-w-full md:w-screen">
				<div className="min-[320px]:p-0 sm:p-3 md:p-10 md:w-2/3">
					<h1 className="text-md md:text-lg font-semibold my-3 ">Job Poster</h1>
					<div className="shadow-lg overflow-y-scroll max-h-[70vh]">
						<FullJobEditorForm
							JobName={''}
							JobDescription={''}
							JobLocation={''}
							FullTime={false}
							RequireResume={false}
							questions={[{ question: '' }]}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
