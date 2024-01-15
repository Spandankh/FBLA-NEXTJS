'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import createApplication from './createApplication'
import { ChangeEvent, useState } from 'react'

const formSchema = z.object({
    FirstName: z.string().min(2, {
        message: 'Name must be at least 2 characters',
    }),
    LastName: z.string().min(2, {
        message: 'Name must be at least 2 characters',
    }),
    emailAdress: z
        .string()
        .min(1, { message: 'Email is required!' })
        .email({ message: 'Must be a valid email!' }), // Corrected field name and validation
    Answer: z.string().min(2, {
        message: 'Answer must be at least 2 words!',
    }),
    resume: z
        .any()
        .refine((file) => !!file, { message: 'Resume file is required.' })
        .refine((file) => file && file.size <= 5000000, {
            message: 'Max PDF size is 5MB.',
        })
        .refine((file) => file && file.type === 'application/pdf', {
            message: 'Please upload your resume in PDF format.',
        }),
})

interface ApplyFormProps {
    jobId: string
    jobName: string
}

export default function ApplyForm({ jobId, jobName }: ApplyFormProps) {
    const [resumeBase64, setResumeBase64] = useState<string>('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            FirstName: '',
            LastName: '',
            emailAdress: '',
            Answer: '',
        },
    })
    const handleSumbit = async (data: any) => {
        const formDataWithJobId = {
            ...data,
            jobId: jobId,
            jobName: jobName,
            resume: resumeBase64,
        }
        return await createApplication(formDataWithJobId)
    }
    function handleResumeChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                const base64 = reader.result?.toString().split(',')[1] || ''
                setResumeBase64(base64)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Card className="mx-auto bg-white p-4 rounded-[1rem]">
            <CardContent className="">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSumbit)}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="FirstName"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                First Name
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
                                name="LastName"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg">
                                                Last Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="rounded-[5px]"
                                                    placeholder="Enter your last name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )
                                }}
                            ></FormField>
                        </div>
                        <FormField
                            control={form.control}
                            name="emailAdress"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Email Adress
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="rounded-[5px]"
                                                placeholder="Email Adresss"
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
                            name="Answer"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Info
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="mx-auto my-auto rounded-[5px]"
                                                placeholder="Tell us a little bit about yourself"
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
                            name="resume"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Upload Resume (PDF)
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                className="rounded-[5px]"
                                                accept=".pdf"
                                                // converts to base64 so we can store it in our database
                                                onChange={(e) => {
                                                    field.onChange(
                                                        e.target.files![0]
                                                    )
                                                    handleResumeChange(e)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )
                            }}
                        ></FormField>

                        <Button
                            type="submit"
                            className="my-5 text-white text-lg bg-blue-600 hover:bg-blue-800 shadow-lg rounded-[1rem]"
                        >
                            Submit Application
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
