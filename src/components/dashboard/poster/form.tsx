'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import RichTextEditor from './textEditor'
import { JobFormValue } from '@/lib/type'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import handleSubmit from '@/components/dashboard/poster/handleSumit'
const formSchema = z.object({
    JobName: z.string().min(2, {
        message: 'Name must be at least 2 characters',
    }),
    JobDescription: z.string().min(2, {
        message: 'Description must be filled!',
    }),
    FullTime: z.boolean(),
    RequireResume: z.boolean(),
    JobLocation: z.string().min(2, {
        message: 'Location must be at least 2 characters',
    }),
    questions: z.array(
        z.object({
            question: z.string().min(1, {
                message: 'Please fill out a quesiton! ',
            }),
        })
    ),
})

export default function CreateJob({
    id,
    JobName,
    JobDescription,
    JobLocation,
    FullTime,
    RequireResume,
    questions,
}: JobFormValue) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            JobName: JobName,
            JobDescription: JobDescription,
            JobLocation: JobLocation,
            FullTime: FullTime,
            RequireResume: RequireResume,
            questions: questions,
        },
    })

    const { fields, append, remove } = useFieldArray({
        name: 'questions',
        control: form.control,
    })
    const [editMode, setEditMode] = useState(false)
    useEffect(() => {
        if (id !== undefined && id !== null) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }, [editMode, id])

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            await handleSubmit(
                {
                    id,
                    JobName: data.JobName,
                    JobDescription: data.JobDescription,
                    JobLocation: data.JobLocation,
                    FullTime: data.FullTime,
                    RequireResume: data.RequireResume,
                    questions: data.questions,
                },
                editMode
            ).then(() => console.log(editMode, id))
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <>
            <div className="mx-auto bg-white p-4 rounded-[1rem]">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="JobName"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                Job Name
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="rounded-[5px]"
                                                    placeholder="Enter your first name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )
                                }}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="JobLocation"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                JobLocation
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="rounded-[5px]"
                                                    placeholder="Enter your first name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )
                                }}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="JobDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Job Description
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <RichTextEditor
                                                onEditorChange={(value) =>
                                                    form.setValue(
                                                        'JobDescription',
                                                        value
                                                    )
                                                }
                                                intialEditorText={
                                                    JobDescription
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            ></FormField>
                            <div className="grid grid-cols md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="FullTime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                Full Time?
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={
                                                        field.value ?? false
                                                    }
                                                    className="mx-2"
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                ></FormField>
                                <FormField
                                    control={form.control}
                                    name="RequireResume"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                Require Resume?
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={
                                                        field.value ?? false
                                                    }
                                                    className="mx-2"
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>

                            <Separator className="bg-black" />
                            <div className="">
                                <FormLabel className="text-lg">
                                    Application Questions
                                </FormLabel>
                                <div>
                                    {fields.map((question, index) => (
                                        <div key={question.id}>
                                            <FormField
                                                control={form.control}
                                                key={index}
                                                name={`questions.${index}.question`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Question #
                                                            {index + 1}
                                                        </FormLabel>
                                                        <div className="flex">
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    className="rounded-[5px] mx-auto "
                                                                />
                                                            </FormControl>
                                                            {index > 0 && (
                                                                <Button
                                                                    variant="destructive"
                                                                    className="text-red-500"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        remove(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    Remove
                                                                </Button>
                                                            )}
                                                        </div>
                                                        <FormMessage className="text-red-500 capitalize" />
                                                    </FormItem>
                                                )}
                                            ></FormField>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    type="button"
                                    onClick={() => append({ question: '' })}
                                    className="bg-blue-400 rounded-xl mt-3 hover:bg-blue-600"
                                >
                                    Add Question
                                </Button>
                            </div>

                            <Button
                                type="submit"
                                className="my-5 text-white text-lg bg-blue-600 hover:bg-blue-800 shadow-lg rounded-[1rem]"
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}
