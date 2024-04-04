'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import createApplication from './createApplication'
import { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'
import JSConfetti from 'js-confetti'

const formSchema = z.object({
	FirstName: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'Name should contain only alphabets').min(2, {
		message: 'Name must be at least 2 characters and contain only letters'
	}),
	LastName: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'Name should contain only alphabets').min(2, {
		message: 'Name must be at least 2 characters'
	}),
	emailAdress: z.string().min(1, { message: 'Email is required!' }).email({ message: 'Must be a valid email!' }), // Corrected field name and validation
	Answers: z.array(
		z.object({
			answers: z.string().min(1, {
				message: 'Please fill out the answers to best of your ability!'
			})
		})
	),
	resume: z
		.any()
		.refine((file) => !!file, { message: 'Resume file is required.' })
		.refine((file) => file && file.size <= 5000000, {
			message: 'Max PDF size is 5MB.'
		})
		.refine((file) => file && file.type === 'application/pdf', {
			message: 'Please upload your resume in PDF format.'
		})
})

interface ApplyFormProps {
	jobId: string
	jobName: string
	questions: string[]
}

export default function ApplyForm({ jobId, jobName, questions }: ApplyFormProps) {
	const [resumeBase64, setResumeBase64] = useState<string>('')
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			FirstName: '',
			LastName: '',
			Answers: questions.map(() => ({ answers: '' })),
			emailAdress: ''
		}
	})
	const handleSumbit = async (data: z.infer<typeof formSchema>) => {
		try {
			const formDataWithJobId = {
				jobId: jobId,
				firstName: data.FirstName,
				jobName: jobName,
				lastName: data.LastName,
				emailAdress: data.emailAdress,
				resume: resumeBase64,
				question: questions,
				Answers: data.Answers
			}
			await createApplication(formDataWithJobId)
			toast('Successfully summited application!')
			const jsConfetti = new JSConfetti()
			jsConfetti.addConfetti({
				confettiNumber: 500
			})
		} catch (error) {
			toast('Got a error while submitting! Please try agian later ' + error)
		}
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
		<Card className="mx-auto rounded-[1rem] bg-white p-4">
			<CardContent className="">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSumbit)} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="FirstName"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-lg">First Name</FormLabel>
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
											<FormLabel className="text-lg">Last Name</FormLabel>
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
										<FormLabel className="text-lg">Email Adress</FormLabel>
										<FormControl>
											<Input className="rounded-[5px]" placeholder="Email Adresss" {...field} />
										</FormControl>
										<FormMessage className="text-red-500" />
									</FormItem>
								)
							}}
						></FormField>
						<div>
							{questions.map((question, index) => (
								<FormField
									key={index}
									control={form.control}
									name={`Answers.${index}.answers`}
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-lg">
												{question}
												<span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<Textarea
													className="rounded-[5px]"
													placeholder="Enter Answer"
													{...field}
												/>
											</FormControl>

											<FormMessage className="text-red-500" />
										</FormItem>
									)}
								/>
							))}
						</div>
						<FormField
							control={form.control}
							name="resume"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel className="text-lg">Upload Resume (PDF)</FormLabel>
										<FormControl>
											<Input
												type="file"
												className="rounded-[5px]"
												accept=".pdf"
												onChange={(e) => {
													field.onChange(e.currentTarget.files![0])
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
							className="my-5 rounded-[1rem] bg-blue-600 text-lg text-white shadow-lg hover:bg-blue-800"
						>
							Submit Application
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
