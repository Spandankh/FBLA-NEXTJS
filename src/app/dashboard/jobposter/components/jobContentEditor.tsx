'use client'
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Strikethrough, Italic, List, ListOrdered } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import RichTextPreview from './jobContentPreview'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { newJob } from '@/lib/jobs'
import handleSubmit from './handleSumbit'

const RichTextEditor = () => {
    const [jobContent, setJobContent] = useState('')
    const [jobName, setName] = useState('')

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'min-h-[150px] max-h-[300px] w-full  border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
            },
        },
        extensions: [
            StarterKit.configure({
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-4',
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-4',
                    },
                },
            }),
        ],
        content: '',
        onUpdate({ editor }) {
            setJobContent(editor.getHTML())
        },
    })

    return (
        <>
            <div className="flex flex-grow bg-gray-100 w-full min-h-screen">
                <form
                    className="flex-1 my-10 mx-10"
                    action={() => handleSubmit(jobName, jobContent)}
                >
                    <div className="text-2xl font-bold">Job Editor</div>

                    <div className="my-5">
                        <Label className=" text-md py-5">Job Name</Label>
                        <Input
                            required={true}
                            className="px-5"
                            onChange={(e) => setName(e.target.value)}
                        ></Input>
                    </div>
                    <div>
                        <h1 className="text-md py-2">Job Description</h1>
                        {editor ? (
                            <RichTextEditorToolbar editor={editor} />
                        ) : null}
                        <EditorContent editor={editor} />
                        <div className="my-5">
                            <Button className="bg-blue-500 text-white mx-auto rounded-[1rem] hover:bg-blue-600">
                                Sumbit
                            </Button>
                        </div>
                    </div>
                </form>

                <div className="flex-1">
                    <RichTextPreview jobBody={jobContent} jobName={jobName} />
                </div>
            </div>
        </>
    )
}

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
    return (
        <div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center gap-1">
            <Toggle
                size="sm"
                pressed={editor.isActive('bold')}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold
                    className={`h-4 w-4 ${
                        editor.isActive('bold') ? 'bg-gray-300 h-5 w-5' : ''
                    }`}
                />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive('italic')}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic
                    className={`h-4 w-4 ${
                        editor.isActive('italic') ? 'bg-gray-300 h-5 w-5' : ''
                    }`}
                />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive('strike')}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough
                    className={`h-4 w-4 ${
                        editor.isActive('strike') ? 'bg-gray-300 h-5 w-5' : ''
                    }`}
                />
            </Toggle>
            <Separator orientation="vertical" className="w-[1px] h-8" />
            <Toggle
                size="sm"
                pressed={editor.isActive('bulletList')}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <List
                    className={`h-4 w-4 ${
                        editor.isActive('bulletList')
                            ? 'bg-gray-300 h-5 w-5'
                            : ''
                    }`}
                />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive('orderedList')}
                onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrdered
                    className={`h-4 w-4 ${
                        editor.isActive('orderedList')
                            ? 'bg-gray-300 h-5 w-5'
                            : ''
                    }`}
                />
            </Toggle>
        </div>
    )
}

const FullRichText = () => {
    return <RichTextEditor></RichTextEditor>
}
export default FullRichText
