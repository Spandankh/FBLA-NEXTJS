'use client'
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Strikethrough, Italic, List, ListOrdered } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

interface JobContent {
	onEditorChange: (content: string) => void
	intialEditorText: string
}

const RichTextEditor = ({ onEditorChange, intialEditorText }: JobContent) => {
	const editor = useEditor({
		content: intialEditorText || '<p></p>',
		editorProps: {
			attributes: {
				class: 'min-h-[150px] max-h-[300px] w-full  border border-black rounded-b-[10px] bg-transparent px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto'
			}
		},
		extensions: [
			StarterKit.configure({
				orderedList: {
					HTMLAttributes: {
						class: 'list-decimal pl-4'
					}
				},
				bulletList: {
					HTMLAttributes: {
						class: 'list-disc pl-4'
					}
				}
			})
		],
		onUpdate({ editor }) {
			const content = editor.getHTML().trim()

			const sanitizedContent = content === '<p></p>' ? '' : content

			onEditorChange(sanitizedContent)
		}
	})

	return (
		<>
			<div className="">
				{editor ? <RichTextEditorToolbar editor={editor} /> : null}
				<EditorContent editor={editor} />
			</div>
		</>
	)
}

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
	return (
		<div className="border border-input bg-transparent rounded-t-[5px] flex flex-row flex-wrap items-center gap-0">
			<Toggle
				size="sm"
				pressed={editor.isActive('bold')}
				onPressedChange={() => editor.chain().focus().toggleBold().run()}
			>
				<Bold className={`h-4 w-4 ${editor.isActive('bold') ? 'bg-gray-300 h-5 w-5' : ''}`} />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive('italic')}
				onPressedChange={() => editor.chain().focus().toggleItalic().run()}
			>
				<Italic className={`h-4 w-4 ${editor.isActive('italic') ? 'bg-gray-300 h-5 w-5' : ''}`} />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive('strike')}
				onPressedChange={() => editor.chain().focus().toggleStrike().run()}
			>
				<Strikethrough className={`h-4 w-4 ${editor.isActive('strike') ? 'bg-gray-300 h-5 w-5' : ''}`} />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive('bulletList')}
				onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
			>
				<List className={`h-4 w-4 ${editor.isActive('bulletList') ? 'bg-gray-300 h-5 w-5' : ''}`} />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive('orderedList')}
				onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
			>
				<ListOrdered className={`h-4 w-4 ${editor.isActive('orderedList') ? 'bg-gray-300 h-5 w-5' : ''}`} />
			</Toggle>
		</div>
	)
}

export default RichTextEditor
