import parse from 'html-react-parser'

interface EditorProp {
    jobName: string
    jobLocation?: string
    jobBody: string
}

export default function JobContentPreview({
    jobName,
    jobLocation,
    jobBody,
}: EditorProp) {
    return (
        <div className="  mb-10 flex max-h-[85hv]  flex-col mt-10 mr-10 border-r">
            <div className="bg-white p-4 rounded-[0.8rem]">
                <h1 className="mb-4 text-2xl text-gray-700 font-semibold">
                    {jobName}
                </h1>
                <h1 className="mb-4 text-lg text-gray-700 font-semibold">
                    <p className="font-bold underline text-1xl">
                        Job Description
                    </p>
                    {parse(jobBody)}
                </h1>
            </div>
        </div>
    )
}
