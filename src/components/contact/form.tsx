'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import handleSubmit from './handleSumbit'
import { toast } from 'sonner'
import JSConfetti from 'js-confetti'
import { Contact } from '@/lib/type'

const formSchema = z.object({
	FirstName: z.string().min(2, {
		message: 'Name must be at least 2 characters'
	}),
	LastName: z.string().min(2, {
		message: 'Name must be at least 2 characters'
	}),
	emailAdress: z.string().min(1, { message: 'Email is required!' }).email({ message: 'Must be a valid email!' }),
	question: z.string().min(2, {
		message: 'Please put a question!'
	})
})

export default function ContactForm() {
	const submit = async (data: z.infer<typeof formSchema>) => {
		try {
			const contact = {
				firstName: data.FirstName,
				lastName: data.LastName,
				emailAdress: data.emailAdress,
				message: data.question
			}

			await handleSubmit(contact as Contact)
			toast('Successfully summited message!')
			const jsConfetti = new JSConfetti()
			jsConfetti.addConfetti({
				confettiNumber: 500
			})
		} catch (error) {
			toast('Got a error while submitting! Please try agian later ' + error)
		}
	}
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			FirstName: '',
			LastName: '',
			emailAdress: '',
			question: ''
		}
	})
	return (
		<>
			<Card className="mx-auto max-w-prose rounded-[1rem] border bg-white p-5 shadow-xl">
				<CardHeader>
					<CardTitle>Get in touch</CardTitle>
					<CardDescription>Got a question? Send us a message! We response in 1-3 days</CardDescription>
				</CardHeader>
				<CardContent className="">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(submit)} className="space-y-4">
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
														placeholder="First Name"
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
														placeholder="Last Name"
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
												<Input
													className="rounded-[5px]"
													placeholder="email@email.com"
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
								name="question"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel className="text-lg ">Your Message</FormLabel>
											<FormControl>
												<Textarea
													className="rounded-[5px]"
													placeholder="What can we do for you?"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-red-500" />
										</FormItem>
									)
								}}
							></FormField>

							<Button
								type="submit"
								className="my-5 w-full rounded-[8px] bg-blue-600 text-lg text-white shadow-lg hover:bg-blue-800"
							>
								Send Message
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</>
	)
}
